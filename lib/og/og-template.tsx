import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

type FontOptions = {
  name: string;
  data: ArrayBuffer;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style?: "normal" | "italic";
};

const WIDTH = 1200;
const HEIGHT = 630;

// Grey-to-blue gradient matching the site's brand
const TITLE_GRADIENT = "linear-gradient(to right, #A3A3A3 0%, #147FBB 100%)";

/**
 * Load a font file from the Google Fonts CSS API at build time.
 * Falls back to an empty buffer if the fetch fails.
 */
async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&display=swap`;
  // Use a user-agent that triggers TTF (not woff2) — Satori only supports TTF/OTF
  const css = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+",
    },
  }).then((r) => r.text());

  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match?.[1]) return new ArrayBuffer(0);

  return fetch(match[1]).then((r) => r.arrayBuffer());
}

/**
 * Load an image from /public and return it as a base64 data URI.
 */
function loadImageAsDataUri(publicPath: string): string | null {
  try {
    const filePath = path.join(process.cwd(), "public", publicPath);
    const buffer = readFileSync(filePath);
    const ext = path.extname(publicPath).slice(1).toLowerCase();
    const mime =
      ext === "jpg" || ext === "jpeg"
        ? "image/jpeg"
        : ext === "png"
        ? "image/png"
        : ext === "webp"
        ? "image/webp"
        : "image/jpeg";
    return `data:${mime};base64,${buffer.toString("base64")}`;
  } catch {
    return null;
  }
}

function loadLogoDataUri(): string | null {
  return loadImageAsDataUri("images/projects/newLogo-og.png");
}

export interface OgImageParams {
  title: string;
  meta: string;
  background?: string;
}

/**
 * Generate a branded OG image (1200×630) and return an ImageResponse.
 */
export async function generateOgImage({
  title,
  meta,
  background = "/images/projects/constructionHero.jpg",
}: OgImageParams): Promise<ImageResponse> {
  const [interRegular, playfairBold] = await Promise.all([
    loadGoogleFont("Inter", 400),
    loadGoogleFont("Playfair Display", 700),
  ]);

  const fonts: FontOptions[] = [
    { name: "Inter", data: interRegular, weight: 400, style: "normal" },
    { name: "Playfair", data: playfairBold, weight: 700, style: "normal" },
  ];

  const logoSrc = loadLogoDataUri();
  const backgroundSrc = loadImageAsDataUri(background.replace(/^\//, ""));

  return new ImageResponse(
    (
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#09090b",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        {backgroundSrc && (
          <img
            src={backgroundSrc}
            width={WIDTH}
            height={HEIGHT}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: WIDTH,
              height: HEIGHT,
              objectFit: "cover",
            }}
          />
        )}

        {/* Dark overlay — matches site's dark luxury aesthetic */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.50) 100%)",
          }}
        />

        {/* Content layer */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "60px 80px 40px",
            height: HEIGHT,
            width: WIDTH,
          }}
        >
          {/* Logo — upper left */}
          <div style={{ display: "flex" }}>
            {logoSrc && (
              <img
                src={logoSrc}
                alt="Zwolinski Quality Construction"
                width={280}
                height={58}
                style={{ width: 280, height: 58 }}
              />
            )}
          </div>

          {/* Title — centered */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: WIDTH - 160,
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                fontFamily: "Playfair",
                lineHeight: 1.1,
                background: TITLE_GRADIENT,
                backgroundClip: "text",
                color: "transparent",
                textAlign: "left",
                maxWidth: 800,
              }}
            >
              {title}
            </div>
          </div>

          {/* Footer meta line */}
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 400,
                fontFamily: "Inter",
                color: "#C0C0C0",
                letterSpacing: 1,
              }}
            >
              {`${meta}  |  25+ Years of Excellence`}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      fonts,
    }
  );
}

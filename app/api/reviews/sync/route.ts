import { NextResponse } from "next/server";

// Zwolinski Quality Construction Google Place ID
// Find yours at: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
// Search for "Zwolinski Quality Construction" at 166 N Walnut St, Silverdale, PA
const PLACE_ID = process.env.GOOGLE_PLACE_ID || "";

interface GoogleReview {
  authorAttribution?: { displayName?: string };
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  originalText?: { text?: string };
}

interface PlaceDetailsResponse {
  reviews?: GoogleReview[];
  rating?: number;
  userRatingCount?: number;
}

// GET endpoint for the carousel to fetch live Google reviews
export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  // If no API key or Place ID, return empty (carousel will use static fallback)
  if (!apiKey || !PLACE_ID) {
    return NextResponse.json({ reviews: [], reviewCount: 0, averageRating: 0 });
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount&key=${apiKey}`;

    const res = await fetch(url, {
      headers: {
        "X-Goog-FieldMask": "reviews,rating,userRatingCount",
      },
      next: { revalidate: 604800 }, // Cache for 1 week
    });

    if (!res.ok) {
      return NextResponse.json({
        reviews: [],
        reviewCount: 0,
        averageRating: 0,
      });
    }

    const data: PlaceDetailsResponse = await res.json();

    const reviews = (data.reviews || [])
      .filter((r) => r.rating && r.rating >= 4 && r.text?.text)
      .map((r) => ({
        name: r.authorAttribution?.displayName || null,
        text: r.originalText?.text || r.text?.text || "",
        rating: r.rating || 5,
        source: "google" as const,
        timeDescription: r.relativePublishTimeDescription || "",
      }));

    return NextResponse.json({
      reviews,
      reviewCount: data.userRatingCount || 0,
      averageRating: data.rating || 0,
    });
  } catch {
    return NextResponse.json({ reviews: [], reviewCount: 0, averageRating: 0 });
  }
}


interface ImageTransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png' | 'auto';
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
}

export const useNetlifyImage = () => {
  // Check if we're in development mode
  const isDevelopment = import.meta.env.DEV;
  
  const transformImage = (src: string, options: ImageTransformOptions = {}) => {
    if (!src.startsWith('/')) {
      return src; // External URLs don't need transformation
    }

    // In development, return the original URL without transformations
    if (isDevelopment) {
      return src;
    }

    const {
      width,
      height,
      quality = 85,
      format = 'auto',
      fit = 'cover'
    } = options;

    const params = new URLSearchParams();
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    if (quality) params.append('q', quality.toString());
    if (format !== 'auto') params.append('f', format);
    if (fit !== 'cover') params.append('fit', fit);

    const queryString = params.toString();
    return queryString 
      ? `/.netlify/images?url=${encodeURIComponent(src)}&${queryString}` 
      : src;
  };

  const generateResponsiveSet = (src: string, baseWidth: number, options: Omit<ImageTransformOptions, 'width'> = {}) => {
    // In development, return a single size
    if (isDevelopment) {
      return [{
        src: transformImage(src, { ...options, width: baseWidth }),
        width: baseWidth,
        descriptor: `${baseWidth}w`
      }];
    }
    
    const sizes = [baseWidth, baseWidth * 1.5, baseWidth * 2];
    return sizes.map(width => ({
      src: transformImage(src, { ...options, width: Math.round(width) }),
      width,
      descriptor: `${width}w`
    }));
  };

  return { transformImage, generateResponsiveSet };
};

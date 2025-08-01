
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png' | 'auto';
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean; // For LCP optimization
  fetchPriority?: 'high' | 'low' | 'auto';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  quality = 85,
  format = 'auto',
  className,
  loading = 'lazy',
  sizes,
  priority = false,
  fetchPriority = 'auto',
}) => {
  // Override loading behavior for priority images (LCP optimization)
  const finalLoading = priority ? 'eager' : loading;
  const finalFetchPriority = priority ? 'high' : fetchPriority;
  // Check if we're in development mode
  const isDevelopment = import.meta.env.DEV;
  
  // Generate Netlify image transformation URL
  const getOptimizedUrl = (originalSrc: string, w?: number, h?: number, q?: number, f?: string) => {
    if (!originalSrc.startsWith('/')) {
      return originalSrc; // External URLs
    }

    // In development, return the original URL without Netlify transformations
    if (isDevelopment) {
      return originalSrc;
    }

    const params = new URLSearchParams();
    if (w) params.append('w', w.toString());
    if (h) params.append('h', h.toString());
    if (q) params.append('q', q.toString());
    if (f && f !== 'auto') params.append('f', f);

    const queryString = params.toString();
    return queryString ? `/.netlify/images?url=${encodeURIComponent(originalSrc)}&${queryString}` : originalSrc;
  };

  // Generate responsive srcSet for different screen densities
  const generateSrcSet = () => {
    if (!width || isDevelopment) return undefined; // Skip srcSet in development

    const sizes = [width, width * 1.5, width * 2];
    return sizes
      .map(size => `${getOptimizedUrl(src, Math.round(size), height ? Math.round((height * size) / width) : undefined, quality, format)} ${size / width}x`)
      .join(', ');
  };

  return (
    <img
      src={getOptimizedUrl(src, width, height, quality, format)}
      srcSet={generateSrcSet()}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={finalLoading}
      fetchPriority={finalFetchPriority}
      sizes={sizes}
    />
  );
};

export default OptimizedImage;

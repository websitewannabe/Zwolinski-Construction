
import React, { useEffect } from 'react';
import { generateSitemap } from '../utils/sitemapGenerator';

const Sitemap = () => {
  const sitemapXml = generateSitemap();

  useEffect(() => {
    // Set the content type to XML
    document.contentType = 'application/xml';
  }, []);

  return (
    <pre style={{ 
      fontFamily: 'monospace', 
      margin: 0, 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      fontSize: '14px',
      lineHeight: '1.4'
    }}>
      {sitemapXml}
    </pre>
  );
};

export default Sitemap;

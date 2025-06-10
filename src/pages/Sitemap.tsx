
import React, { useEffect } from 'react';
import { generateSitemap } from '../utils/sitemapGenerator';

const Sitemap = () => {
  const sitemapXml = generateSitemap();

  useEffect(() => {
    // Set the content type to XML for the document
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Type';
    meta.content = 'application/xml; charset=utf-8';
    document.head.appendChild(meta);

    // Set the document title to indicate this is XML
    document.title = 'Sitemap';
    
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  // Return the XML as plain text with proper formatting
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <pre 
        style={{ 
          fontFamily: 'monospace', 
          margin: 0, 
          padding: '20px',
          backgroundColor: '#f8f9fa',
          fontSize: '12px',
          lineHeight: '1.4',
          whiteSpace: 'pre-wrap',
          overflow: 'auto'
        }}
        dangerouslySetInnerHTML={{ __html: sitemapXml.replace(/</g, '&lt;').replace(/>/g, '&gt;') }}
      />
    </div>
  );
};

export default Sitemap;

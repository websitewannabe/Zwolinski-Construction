import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SocialMetaProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: 'website' | 'article';
}

const SocialMeta: React.FC<SocialMetaProps> = ({ 
  title, 
  description, 
  image = "https://zwolinskiconstr.com/images/projects/constructionHero.jpg",
  url,
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Zwolinski Quality Construction" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      
      {/* Additional social meta */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Zwolinski Quality Construction - Professional Home Remodeling" />
    </Helmet>
  );
};

export default SocialMeta;
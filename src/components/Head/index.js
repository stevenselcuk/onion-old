import Helmet from 'react-helmet';
import React from 'react';

const TitleAndMetaTags = ({ title, ogDescription, canonicalUrl }) => {
  return (
    <Helmet title={title}>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Preston Richey" />
      <meta property="og:description" content="Personal Website" />
      <meta property="og:url" content="https://prestonrichey.com" />
      <meta
        property="og:image"
        content="https://prestonrichey.com/social-meta.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://prestonrichey.com/social-meta.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Preston Richey" />
      <meta name="twitter:description" content="Personal Website" />
      <meta
        name="twitter:image"
        content="https://prestonrichey.com/social-meta.png"
      />
      <meta name="twitter:creator" content="@prestonrichey" />
    </Helmet>
  );
};

export default TitleAndMetaTags;

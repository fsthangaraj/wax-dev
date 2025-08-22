import React from 'react';

const Link = ({ children, href, className = 'link' }) => {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link; 
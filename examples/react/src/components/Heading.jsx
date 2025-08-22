import React from 'react';

const Heading = ({ children, level = 1, className = 'heading' }) => {
  const Tag = `h${level}`;
  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
};

export default Heading; 
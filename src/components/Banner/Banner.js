import React from 'react';

const Banner = ({ title, subtitle = '' }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      {subtitle && <h3 className="banner__subtitle">{subtitle}</h3>}
    </div>
  );
};

export default Banner;

import React from 'react';
import './GridContainer.scss';

const GridContainer = ({ classes = '', children }) => {
  return <div className={`grid-container ${classes}`}>{children}</div>;
};

export default GridContainer;

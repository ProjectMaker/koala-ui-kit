import React from 'react';
import PropTypes from 'prop-types';

export function SectionsRenderer({ children }) {
  return (
    <div>
      <h1>YO</h1>
      {children}
    </div>
  );
}

SectionsRenderer.propTypes = {
  children: PropTypes.node,
};

export default SectionsRenderer

import React from 'react';
import preloader from '../../../assets/Images/loading.gif';

export const Preloader = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <img src={preloader} />
    </div>
  );
};

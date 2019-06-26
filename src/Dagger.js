import React from 'react';
import Upload from './Upload';

const Dragger = () => {
  const { props } = this;
  return (
    <Upload
      {...props}
      type="drag"
      style={{ ...props.style, height: props.height }}
    />
  );
};

export default Dragger;

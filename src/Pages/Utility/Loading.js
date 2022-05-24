import React from 'react';
import "react-loading-skeleton/dist/skeleton.css";
import { InfinitySpin } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex justify-items-center justify-center items-center">
      <InfinitySpin color="grey" />;
    </div>
  );
};

export default Loading;
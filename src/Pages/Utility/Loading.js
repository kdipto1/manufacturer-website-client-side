import React from 'react';
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="flex justify-items-center justify-center items-center">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
          <Skeleton width={200} count={10} />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default Loading;
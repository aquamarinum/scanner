import React from "react";

type ImageSkeletonProps = {
  width: string;
  height: string;
};

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({ width, height }) => {
  return <div></div>;
};

export default ImageSkeleton;

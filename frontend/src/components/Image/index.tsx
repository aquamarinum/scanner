import React from "react";

type ImageProps = {
  width: string;
  height: string;
  src: string;
  alt?: string;
};

const Image: React.FC<ImageProps> = ({ width, height, src, alt }) => {
  // TODO lazy loading and fallback image

  return (
    <div>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Image;

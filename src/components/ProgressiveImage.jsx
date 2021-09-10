import React, { useState } from "react";
const useProgressiveImg = (lowImage, image) => {
  const [src, setSrc] = useState(lowImage);
  React.useEffect(() => {
    setSrc(lowImage);
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setSrc(image);
    };
  }, [lowImage, image]);
  return [src, { blur: src === lowImage }];
};
export default useProgressiveImg;

import { useCallback, useEffect, useState } from 'react';

export const useImagePreloader = (srcList: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  const preloadImages = useCallback(
    (srcArr: string[]) => {
      setImagesPreloaded(false);
      srcArr.forEach((src) => {
        new Image().src = src;
      });
      setImagesPreloaded(true);
    },
    [srcList]
  );

  useEffect(() => {
    preloadImages(srcList);
  }, [srcList]);

  return { imagesPreloaded };
};

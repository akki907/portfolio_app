import { useEffect, useState } from 'react';

const useIsTouchdevice = (): boolean => {
  const [isTouchdevice, setIsTouchdevice] = useState<boolean>(false); // Update initial state value to false

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchdevice(window.matchMedia('(hover: none)').matches);
    }
  }, []);

  return isTouchdevice;
};

export default useIsTouchdevice;

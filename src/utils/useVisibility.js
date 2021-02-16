import { createRef, useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

const useVisibility = (
  offset = 0,
  throttleMilliseconds = 100,
  constantChecking = true,
  init = false
) => {
  const [isVisible, setIsVisible] = useState(init);
  const currentElement = createRef();

  const onScroll = throttle(() => {
    if (!currentElement.current || typeof window === 'undefined') {
      setIsVisible(false);
      return;
    }
    const { top } = currentElement.current.getBoundingClientRect();
    if (constantChecking) {
      setIsVisible(top + offset >= 0);
      // eslint-disable-next-line no-undef
    } else if (top + offset >= 0 && top - offset <= window.innerHeight) {
      setIsVisible(true);
    }
  }, throttleMilliseconds);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    // eslint-disable-next-line no-undef
    window.addEventListener('scroll', onScroll);
    // eslint-disable-next-line no-undef
    return () => window.removeEventListener('scroll', onScroll);
  });

  return [isVisible, currentElement];
};

export default useVisibility;

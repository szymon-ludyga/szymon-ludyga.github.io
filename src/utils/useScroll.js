import { useRef } from 'react';

const useScroll = () => {
  const ref = useRef(null);

  const executeScroll = () => {
    /* eslint-disable no-undef */
    try {
      const offset = window.innerWidth < 769 ? 100 : 140;
      window.scroll({
        top: ref.current.offsetTop - offset,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, ref.current.offsetTop);
    }
    /* eslint-enable no-undef */
  };

  const htmlElementAttributes = { ref };

  return [executeScroll, htmlElementAttributes];
};

export default useScroll;

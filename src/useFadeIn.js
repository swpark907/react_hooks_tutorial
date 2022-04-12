import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const current = element.current;
      current.style.transition = `opacity ${duration}s ${delay}s`;
      current.style.opacity = "1";
    }
  }, []);
  if(typeof delay !== 'number'){
    throw new Error('delay must be number')
  }
  if(typeof duration !== 'number'){
    throw new Error('duration must be number')
  }
  return { ref: element, style: { opacity: 0 } };
};

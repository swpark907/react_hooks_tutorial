import { useState } from "react";

const useSlide = (slideNumber) => {
  const element = useRef();
  const TOTAL_SLIDE = slideNumber;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slideToNext = () => {
    currentSlideIndex >= TOTAL_SLIDE - 1
      ? setCurrentSlideIndex(0)
      : setCurrentSlideIndex(currentSlideIndex + 1);
  };

  const slideToPrev = () => {
    currentSlideIndex <= 0
      ? setCurrentSlideIndex(TOTAL_SLIDE - 1)
      : setCurrentSlideIndex(currentSlideIndex - 1);
  };

  useEffect(() => {
    if (element.current) {
      slideRef.current.style.transform = `translateX(-${currentSlideIndex}00%)`;
    }
  }, [currentSlideIndex]);

  return { ref: element, slideToNext, slideToPrev };
};

export default useSlide;

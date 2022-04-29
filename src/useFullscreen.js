import { isElementType } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";

const useFullscreen = () => {
  const element = useRef();
  const triggerFullscreen = () => {
    if(element.current) {
      element.current.requestFullScreen();
    }
  }

  const exitFull = () => {
    document.exitFullscreen();
  }

  return {element, triggerFullscreen, exitFull};
}
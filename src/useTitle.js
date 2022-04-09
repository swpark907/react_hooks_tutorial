import { useEffect, useState } from "react"

export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const titleUpdate = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerHTML = title;
  }
  useEffect(titleUpdate, [title]);
  return setTitle;
}
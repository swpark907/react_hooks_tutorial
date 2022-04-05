import { useState } from "react";

export const useInput = (initialState, validator) => {
  const [value, setValue] = useState(initialState);

  const onChange = (event) => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
      console.log(willUpdate);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};
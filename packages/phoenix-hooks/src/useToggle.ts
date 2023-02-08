import { useState } from "react";

export const useToggle = (
  defaultValue: boolean = false
): [boolean, () => void] => {
  const [toggle, setToggle] = useState(defaultValue);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return [toggle, handleToggle];
};

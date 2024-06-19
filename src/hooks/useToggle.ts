import { useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleIsOpen };
};

export default useToggle;

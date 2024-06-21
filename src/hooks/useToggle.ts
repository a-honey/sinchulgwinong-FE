import { useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeIsOpenTrue = () => {
    setIsOpen(true);
  };

  const changeIsOpenFalse = () => {
    setIsOpen(false);
  };

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleIsOpen, changeIsOpenFalse, changeIsOpenTrue };
};

export default useToggle;

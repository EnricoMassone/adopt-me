import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const divRef = useRef(null);
  if (!divRef.current) {
    const div = document.createElement("div");
    divRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(divRef.current);

    return () => modalRoot.removeChild(divRef.current);
  }, []);

  return createPortal(<div>{children}</div>, divRef.current);
};

export default Modal;

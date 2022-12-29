import { useState } from "react";
import { createPortal } from "react-dom";
export default function Modal({ modal }) {
  //Local State
  //   const [modal, setModal] = useState(<p>Hello</p>);

  //Properties
  const HTMLElement = document.getElementById("portal");

  if (modal === null) return null;

  return createPortal(
    <div id="modal">
      <div className="background"></div>
      <div className="window">{modal}</div>
    </div>,
    HTMLElement
  );
}

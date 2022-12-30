import { createPortal } from "react-dom";
export default function Modal({ modal }) {
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

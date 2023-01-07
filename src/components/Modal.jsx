import { createPortal } from "react-dom";
export default function Modal({ modal, setModal }) {
  const HTMLElement = document.getElementById("portal");

  if (modal === null) return null;

  return createPortal(
    <div id="modal">
      <div className="background" onClick={() => setModal(null)}></div>
      <div className="window">{modal}</div>
    </div>,
    HTMLElement
  );
}

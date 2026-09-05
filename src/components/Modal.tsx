import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { smoother } from "./Navbar";
import "./styles/Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  wide?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  wide,
  children,
}: PropsWithChildren<ModalProps>) => {
  useEffect(() => {
    if (!isOpen) return;
    const wasPaused = smoother?.paused();
    smoother?.paused(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      smoother?.paused(Boolean(wasPaused));
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose} data-cursor="disable">
      <div
        className={`modal-panel${wide ? " modal-panel-wide" : ""}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
          data-cursor="disable"
        >
          <MdClose />
        </button>
        {(title || subtitle) && (
          <div className="modal-header">
            {title && <h3>{title}</h3>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

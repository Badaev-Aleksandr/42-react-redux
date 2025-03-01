import { StyledModal } from "./styles"
import type { ModalProps } from "./types"

function Modal({ open, onClose, children }: ModalProps) {
  return (
    <StyledModal open={open} onClose={onClose}>{children}</StyledModal>
  )
}

export default Modal

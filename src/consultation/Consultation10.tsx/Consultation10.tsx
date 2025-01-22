import Button from "../../components/Button/Button"
import { ButtonWrapper, ConsultationWarapper, ModalContent } from "./styles"
import Modal from "../../components/Modal/Modal"
import { useState } from "react"

function Consultation10() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <ConsultationWarapper>
      <ButtonWrapper>
        <Button name="OPEN MODAL" onClick={openModal} />
      </ButtonWrapper>
      <Modal open={isModalOpen} onClose={closeModal}>
        <ModalContent>Hello World</ModalContent>
        <Button name="Close" onClick={closeModal}/>
      </Modal>
    </ConsultationWarapper>
  )
}

export default Consultation10

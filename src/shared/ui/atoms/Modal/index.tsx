import { Modal } from 'antd'
import React, { PropsWithChildren } from 'react'

type ModalComponentProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export const ModalComponent: React.FC<PropsWithChildren & ModalComponentProps> = ({
  children,
  title,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onClose={onClose}
      onCancel={onClose}
      okButtonProps={{ style: { display: 'none' } }}
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      {children}
    </Modal>
  )
}

import React, { createContext, useContext, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

  const value = {
    isModalOpen: id => openedModals.some(x => x === id),
    openModal: id => setOpenedModals([...openedModals, id]),
    closeModal: id => setOpenedModals(openedModals.filter(x => x !== id)),
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

const Modal = ({ id, title, children, onClose }) => {
  const { closeModal, isModalOpen } = useContext(ModalContext);

  const onCloseHandler = () => {
    closeModal(id);
    onClose && onClose();
  };

  return (
    <Dialog open={isModalOpen(id)} onEscapeKeyDown={onCloseHandler}>
      <DialogTitle disableTypography>
        <Typography component="span" variant="h5">
          {title}
        </Typography>
        <IconButton edge="end" onClick={onCloseHandler}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;

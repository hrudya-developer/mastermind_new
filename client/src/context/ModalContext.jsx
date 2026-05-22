import { createContext, useState, useEffect } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

  const [modalType, setModalType] = useState(null);

  const openLogin = () => setModalType("login");
  const openRegister = () => setModalType("register");
  const closeModal = () => setModalType(null);

  // lock background scroll when modal is open
  useEffect(() => {

    if (modalType) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [modalType]);

  return (
    <ModalContext.Provider value={{ modalType, openLogin, openRegister, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
import React, { createContext, useContext, useCallback } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextDTO {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextDTO>({} as ToastContextDTO);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback((): void => {}, []);

  const removeToast = useCallback((): void => {}, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextDTO => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

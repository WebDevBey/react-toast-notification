import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const triggerToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <ToastContext.Provider
      value={{ showToast, toastMessage, toastType, triggerToast }}
    >
      {children}
      {showToast && (
        <div
          className={`fixed bottom-5 right-5 text-white px-8 py-2 rounded shadow-lg transition-opacity duration-300 ${
            toastType === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toastMessage}
        </div>
      )}
    </ToastContext.Provider>
  );
};

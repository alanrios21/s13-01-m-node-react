import { createContext, useRef } from "react";

const uploadContext = createContext();

const LoadingBar = ({ children }) => {
  const ref = useRef(null);

  const clear = () => {
    if (ref.current) {
      ref.current.style.width = "0%";
    }
  };

  const setProgress = (progress) => {
    if (ref.current) {
      ref.current.style.width = `${progress}%`;
    }
  };

  return (
    <uploadContext.Provider value={{ ref, setProgress, clear }}>
      {children}
    </uploadContext.Provider>
  );
};

export { uploadContext, LoadingBar };

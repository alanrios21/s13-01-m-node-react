import { useContext } from "react";
import { uploadContext } from "../context/LoadingBar";

/**
 * returns the context for the loading bar
 * before using this hook make sure you have the loading bar element in the right place
 * and that you have wrapped your app with the LoadingBarProvider
 * and set the ref to the loading bar element
 * @returns {object} the context for the loading bar
 * @example
 * const { ref, setProgress, clear } = useLoadingBar();
 */

export const useLoadingBar = () => {
  const context = useContext(uploadContext);
  if (!context)
    throw new Error("useLoadingBar must be used within a LoadingBarProvider");
  return context;
};

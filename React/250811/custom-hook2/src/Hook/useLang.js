
import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

function useLang() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return context;
}

export default useLang;

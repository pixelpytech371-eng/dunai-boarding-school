import { useEffect, useState } from "react";

export type Language = "en" | "ne";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("lang") as Language) || "en"
  );

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(
        (localStorage.getItem("lang") as Language) || "en"
      );
    };

    window.addEventListener("languageChanged", handleLanguageChange);

    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange);
    };
  }, []);

  return language;
}
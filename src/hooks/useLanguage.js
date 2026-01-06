import { useMemo } from "react";
import { translations } from "../locales/translations";

export function useLanguage() {
  const lang = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang");
    return langParam === "zh" ? "zh" : "vi";
  }, []);

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return { lang, t };
}

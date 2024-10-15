/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import i18n from "i18next";
import jsonES from "../assets/locales/es.json";
import jsonEU from "../assets/locales/eu.json";
import jsonCA from "../assets/locales/ca.json";

const useComponentsTranslation = () => {
  const language = i18n.language || "es";
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const translationMap: Record<string, any> = useMemo(
    () => ({
      es: jsonES,
      eu: jsonEU,
      ca: jsonCA,
    }),
    []
  );

  useEffect(() => {
    setTranslations(translationMap[language] || {});
  }, [language, translationMap]);

  const t = (key: string, sustitucion: string[] = []): string => {
    const keys = key.split(".");

    const result = keys.reduce((acc, key) => acc && acc[key], translations);

    if (typeof result === "string" && (result as string).includes("{")) {
      return sustitucion.reduce(
        (acc, value, index) => acc.replace(`{${index}}`, value),
        result as string
      );
    }

    return typeof result === "string" ? result : key;
  };

  return { t };
};

export default useComponentsTranslation;

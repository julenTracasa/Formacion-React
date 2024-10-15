import Backend, { HttpBackendOptions } from "i18next-http-backend";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    backend: {
      loadPath: (language) => `/locales/${language}.json`,
    },
    detection: {
      order: ["localStorage", "querystring", "htmlTag", "navigator"],
      lookupQuerystring: "lang",
      htmlTag: document.documentElement,
    },
    fallbackLng: "es",
    supportedLngs: ["es", "eu", "ca"],
    preload: ["es", "eu", "ca"],
    ns: ["translation"],
    defaultNS: "translation",
    debug: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
  });

export { i18n };

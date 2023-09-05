import i18next from "i18next";
import enTranslation from "./app/locales/en.json";
import geoTranslation from "./app/locales/geo.json";

i18next.init({
  lng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    geo: {
      translation: geoTranslation,
    },
  },
});

export default i18next;

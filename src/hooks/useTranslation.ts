import { useLang } from '../contexts/LanguageContext';
import { getTranslations } from '../translations/translations';

export const useTranslations = () => {
  const { lang } = useLang();
  const translations = getTranslations(lang);

  return {
    t: translations,
    lang,
  };
};

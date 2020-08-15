import i18next from 'i18next';
import ptBR from './pt-BR.json';

const INITIAL_LANG = 'pt-BR';

i18next.init({
  lng: INITIAL_LANG,
  fallbackLng: INITIAL_LANG,
  resources: {
    'pt-BR': {
      translation: ptBR,
    },
  },
});

export const initializeLanguage = async () => {
  global.__ = await i18next.changeLanguage(INITIAL_LANG);
};

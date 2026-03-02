// Configuración de i18n
export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export type Language = keyof typeof languages;

export const ui = {
  es: 'es',
  en: 'en',
} as const;

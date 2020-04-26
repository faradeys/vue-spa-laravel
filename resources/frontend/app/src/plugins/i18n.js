import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '../lang';

Vue.use(VueI18n);

const currentLang = localStorage.getItem('currentLang');
// eslint-disable-next-line import/prefer-default-export
export const i18n = new VueI18n({
  locale: currentLang,
  fallbackLocale: 'en',
  messages,
});

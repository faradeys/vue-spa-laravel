<template>
  <div class="language-block">
    <button
      v-for="lang in langs"
      :key="lang"
      v-on:click="changeLang(lang)"
      v-text="langName(lang)"></button>
  </div>
</template>

<script>
import { i18n } from '../plugins/i18n';

const langLocal = {
  en: 'English',
  ru: 'Русский',
  cz: 'Česky',
};

export default {
  name: 'LanguageBlock',
  props: {
  },
  data() {
    return {
      langs: ['en', 'cz', 'ru'],
    };
  },
  computed: {
  },
  methods: {
    langName: lang => langLocal[lang],
    changeLang: (lang) => {
      localStorage.setItem('currentLang', lang);
      i18n.locale = lang;
    },
  },
};
</script>

<style scoped lang="sass">
.language-block
  opacity: 1

</style>

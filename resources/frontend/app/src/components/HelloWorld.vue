<template>
  <div class="hello">
    <h1>{{ $t('Title text page') }}</h1>
    <LanguageBlock />
  </div>
</template>

<script>
import LanguageBlock from './LanguageBlock.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
  },
  components: {
    LanguageBlock,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>

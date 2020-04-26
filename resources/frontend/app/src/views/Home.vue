<template>
  <div>
    <Header/>
    <img alt="logo" src="../assets/img/logo.png">
    <HelloWorld msg="test"/>
  </div>
</template>

<script>

import HelloWorld from '../components/HelloWorld.vue';
import Header from '../components/Header.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Header,
  },
};
</script>

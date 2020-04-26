<template>
  <div class="auth-page">
    <div class="inp-block">
      <label>
        <input type="text" name="login" :placeholder="$t('Mobile Number or Email')">
      </label>
    </div>
    <div class="inp-block">
      <label>
        <input type="text" name="login" :placeholder="$t('Full Name')">
      </label>
    </div>
    <div class="inp-block">
      <label>
        <input type="password" name="password" :placeholder="$t('Password')">
      </label>
    </div>
    <div class="inp-block">
      <button>Next</button>
    </div>
    <div class="inp-block">
      {{ $t('ave an account') }}? <router-link to="/login">{{ $t('Log in') }}</router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: 'register',
  components: {
  },
};
</script>

<style scoped lang="sass">

</style>

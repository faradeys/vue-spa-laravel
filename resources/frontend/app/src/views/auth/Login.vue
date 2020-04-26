<template>
  <div class="container">
    <div class="card card-default">
      <div class="card-header">Connexion</div>
      <div class="card-body">
        <div class="alert alert-danger" v-if="has_error">
          <p>Erreur, impossible de se connecter avec ces identifiants.</p>
        </div>
        <form autocomplete="off" @submit.prevent="login" method="post">
          <div class="form-group">
            <input
              type="email"
              id="email"
              class="form-control"
              :placeholder="$t('Mobile Number or Email')"
              v-model="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              :placeholder="$t('Password')"
              class="form-control"
              v-model="password"
              required
            />
          </div>
          <button type="submit" class="btn btn-default">Connexion</button>
        </form>
        <div class="inp-block">
          <span>{{ $t('Don\'t have an account') }}?</span>&nbsp;
          <router-link to="/register">{{ $t('Sign up') }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      email: null,
      password: null,
      has_error: false,
    };
  },
  mounted() {
    //
  },
  methods: {
    login() {
      // get the redirect object
      const redirect = this.$auth.redirect();
      const app = this;
      this.$auth.login({
        params: {
          email: app.email,
          password: app.password,
        },
        success() {
          // handle redirection
          let redirectTo = 'home';
          if (redirect) {
            redirectTo = redirect.from.name;
          } else if (this.$auth.user().role === 2) {
            redirectTo = 'admin.dashboard';
          }
          this.$router.push({ name: redirectTo });
        },
        error: () => {
          app.has_error = true;
        },
        rememberMe: true,
        fetchUser: true,
      });
    },
  },
};
</script>
<style scoped lang="sass">

</style>

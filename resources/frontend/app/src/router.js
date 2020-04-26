import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import middlewarePipeline from './middlewarePipeline';

import Home from './views/Home.vue';
import Register from './views/auth/Register.vue';
import Login from './views/auth/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        auth: false,
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Home,
      meta: {
        auth: true,
      },
      children: [{
        path: '/dashboard/movies',
        name: 'dashboard.movies',
        component: Home,
      },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        auth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const { middleware } = to.meta;
  const context = {
    to,
    from,
    next,
    store,
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});
export default router;

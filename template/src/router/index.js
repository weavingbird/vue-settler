import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import routes from './routes'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
});

export default router{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

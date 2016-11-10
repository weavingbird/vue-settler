import NotFound from '../views/NotFound'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Home from '../views/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const routes = [
  { path: '/', component: Home },
  { path: '*', component: NotFound }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default routes{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

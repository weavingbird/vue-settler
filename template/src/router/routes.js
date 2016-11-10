import NotFound from '../views/NotFound'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const routes = [
  // add any routes here, leaving the catch all route below to respond
  // with your not found view. One is already included for convenence.
  { path: '*', component: NotFound }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default routes{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

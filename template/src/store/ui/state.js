const state = {
  local: 'hello from state inside module'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default state{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

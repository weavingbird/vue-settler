import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import ui from './ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const vuex = new Vuex.Store({
  state: {
    tester: 'We got state from vuex! Yay!'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  modules: {
    ui{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default vuex{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

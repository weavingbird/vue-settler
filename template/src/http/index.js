import Axios from 'axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import config from '../config'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const instance = Axios.create(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

instance.defaults.baseURL = 'https://example.com'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

instance.interceptors.request.use((request) => {
  // Do something to the request before sending it
  return request{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

instance.interceptors.response.use((response) => {
  // Do something to the response before returning
  return response{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default instance{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

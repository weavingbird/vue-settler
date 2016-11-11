![Vue SPA Starter from WeavingBird](https://github.com/weavingbird/vue-settler/raw/master/template/src/assets/logo.png)
# Vue Settler

A Vue 2.0 SPA starter based on the official vue webpack template. It includes the features
already available in the official vue webpack template and adds the following opinionated
set up configured out of the box:

- [Vue Router](https://github.com/vuejs/vue-router), the official router for Vue.js
- [Vuex](https://github.com/vuejs/vuex), the official state management solution for Vue.js
- [Axios](https://github.com/mzabriskie/axios), a promisse based http client of for the browser and node environments
- [Stylus](https://github.com/stylus/stylus), a great language to generate CSS supporting both an indented syntax and regular CSS style.
- [LostGrid](https://github.com/peterramsing/lost), a powerful grid system built in PostCSS that works with any preprocessor and even vanilla CSS.

# Installation

This is a vue cli template so you can start using it the usual way:

```bash
vue init weavingbird/vue-settler yourapp
cd yourapp
npm install
npm run dev
```

This template is largely based on the official vue webpack full template and you can refer to the official template documentation for the inner workings and further customization as the instructions will work the same.

## Other differences with the default webpack template

Besides the integration of the packages above to kick start your single page application, the following changes are made to the default webpack template:

- Assets in your `static` folder are copied to the root build folder. In the default template they are copied inside the static folder with other assets. We use the static folder primarily for favicons and browser configs.
- An alias is registered for the `styles` folder. The folder is not present in the default template because CSS organisation is not a concern the template is set to solve. If you would like to have a Stylus variables file inside the `style` folder you can require them in your components with `@import '~styles/variables.styl'`.
- We make a difference that helps us organise better between views and components and that is why there is a separate `views` folder. You can remove it and place your views inside the components folder and organise the app as you wish. We feel it does help us reuse components better when we group them separately.
- We setup the axios http client in `src/http/index.js`. You can visit this file to setup your base api url and also set up some interceptors (middleware) for the request and responses. This will allow you to parse a JWT header from the request for example.


## Final thoughts

This is in no way a one size fit all but it does take care of most things we find ourselves repeating every time we set up a Vue project. It makes use of some of the best tools to streamline development and we believe it will kick start your projects faster.

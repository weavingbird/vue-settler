<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <h1>WeavingBird Vue Settler</h1>
    <span><strong>Yay!</strong> It worked! Now get to work and build your awesome single page app!</span>
    <h2>
      What's inside:
    </h2>
    <table>
      <tr>
        <th>Package</th>
        <th>Description</th>
        <th>Link</th>
      </tr>
      <tr>
        <td>Vue</td>
        <td>Intuitive, Fast and Composable MVVM for building interactive interfaces.</td>
        <td><a href="https://vuejs.org/v2/guide/">Read</a></td>
      </tr>
      <tr>
        <td>Vue Router</td>
        <td>The official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.</td>
        <td><a href="https://router.vuejs.org/">Read</a></td>
      </tr>
      <tr>
        <td>Vuex</td>
        <td>Centralized State Management for Vue.js.</td>
        <td><a href="http://vuex.vuejs.org/en/">Read</a></td>
      </tr>
      <tr>
        <td>Axios</td>
        <td>Promise based HTTP client for the browser and node.js</td>
        <td><a href="https://github.com/mzabriskie/axios/">Read</a></td>
      </tr>
      <tr>
        <td>Stylus</td>
        <td>An innovative stylesheet language that compiles down to CSS.</td>
        <td><a href="http://stylus-lang.com/">Read</a></td>
      </tr>
      <tr>
        <td>LostGrid</td>
        <td>A powerful grid system built in PostCSS that works with any preprocessor and even vanilla CSS.</td>
        <td><a href="http://stylus-lang.com/">Read</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="stylus">
.container
  lost-center 980px
  padding 30px
  text-align center
.logo
  width 200px
  margin 0 auto
  img
    max-width 100%
    margin 0 auto
h1
  color #b3b3b3
  font-size 1.3em
  margin-bottom 0.3rem
  font-weight normal
h2
  font-weight normal
  font-size 1.2em
  margin-bottom 0.2rem
  color #b3b3b3
  text-align left
span
  display block
  color #29abe2
  font-size 18px
a
  text-decoration none
  color #29abe2
table
  text-align left
  width 100%
  vertical-align middle
  line-height 1.2
  tr
    &:nth-child(odd)
      background #f5f5f5
  th
    font-weight: normal
    color #616161
    background #e6e6e6
    padding 6px
  td
    padding 6px
    height 30px
</style>

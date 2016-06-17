<template>
  <div id="app" v-cloak>
    <router-view></router-view>
    <div id="111">
      <img class="logo" src="assets/img/logo.png">
      <hello></hello>
      <p>
        Welcome to your Vue.js app!
      </p>
      <p>
        To get a better understanding of how this boilerplate works, check out
        <a v-link="{ path: 'foo'}">its documentation</a>.
        It is also recommended to go through the docs for
        <a v-link="{ path: 'bar'}">Webpack</a> and
        <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
        If you have any issues with the setup, please file an issue at this boilerplate's
        <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
      </p>
      <p>
        You may also want to checkout
        <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
        <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
      </p>
    </div>
  </div>
</template>

<script>
import Hello from './view/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>

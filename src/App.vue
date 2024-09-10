<template>
  <header>
    <nav-bar/>
  </header>

  <main>
    <router-view />
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
  },

  setup () {
    return {
      NavBar,
    };
},
};



</script>

<style>
@import './css/global.css';
@import './css/reset.css';

.logo {
  cursor: pointer;
  transition: all 1s ease-in-out;
}

.logo:hover {
  transform: scale(1.2);
}
</style>

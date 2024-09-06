<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <img @click="homePageNavigation" class="logo" src="./assets/component-1.png" alt="logo" width="125" height="75"/>
    <div class="wrapper">
    </div>
  </header>

  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App',

  setup () {

  const homePageNavigation = () => router.push('/');


return {
  homePageNavigation,
}
},
};



</script>

<style>
@import '../src/css/global.css';
</style>

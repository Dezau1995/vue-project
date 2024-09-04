<script setup>
import Test from './components/test.vue'
import FirstTest from './components/firsttest.vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const goToPage = () => {
  console.log('test')
  return router.push('/todos')
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
    </div>
  </header>

  <main>
    <Test/>
    <FirstTest/>
    <button @click="goToPage">Changer de page</button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {

  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

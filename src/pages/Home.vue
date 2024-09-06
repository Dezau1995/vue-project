<template>
  <div>
    <h1>Hello World !</h1>
    <button @click="goToPage">Aller à la page To do</button>
    <button @click="goToCounterPage">Aller à la page Counter</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const goToPage = () => router.push("/todos");

    const goToCounterPage = () => router.push("/counter");

    return {
      // Computed
      goToCounterPage,
      goToPage,
    };
  },
};
</script>

<style></style>

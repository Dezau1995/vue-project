<template>
  <h1>Hello World !</h1>
  <h2>{{ resultData.title }}</h2>
  <label for="category-select"> Choose a category</label>
  <select name="category" id="category-select">
    <option value="">--Please choose an option--</option>
    <option value="recipes.title"></option>
  </select>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const resultData = ref({});

    const fetchData = () => {
       axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f24ef45f93c94fafa322a61a9440cdb6`)
        .then(response => (resultData.value = response.data.results));
    };

    console.log(resultData, 'toto')

    onMounted(() => {
      fetchData();
    });

    const recipes = computed(() => resultData.value.map((recipe) => recipe._rawValue.id))
    console.log(recipes, 'tototototo')

    return {
      resultData,
      recipes,
    };
  },
};
</script>

<style></style>

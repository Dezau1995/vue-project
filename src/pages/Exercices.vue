<template>

    <h1>Hello World !</h1>
      <h2>{{resultData}}</h2>
    <label for="category-select"> Choose a category</label>
    <select name="category" id="category-select">
      <option value="">--Please choose an option--</option>
      <option value=""></option>
    </select>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {

    const resultData = ref([]);
    const apiKey = import.meta.env.API_KEY;

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/exercises/', {
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
          }})
        console.log(response.data.result, 'toto')
        resultData.value = response.data.result
      } catch(error) {
        console.log('Erreur lors de la requete', error)
      }
     
    }
    
    fetchData();

    return {
      resultData
    };
  },
};
</script>

<style></style>

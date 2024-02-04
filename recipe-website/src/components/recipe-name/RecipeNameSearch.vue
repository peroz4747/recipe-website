<script lang="ts" setup>
import RecipeNameResults from "./RecipeNameResults.vue";
import { useRecipeStore } from "@/store/recipe";
import {ref} from 'vue';

const store = useRecipeStore();
const query = ref('');
</script>

<template>
  <h2>Search recipe by name</h2>
  <form @submit.prevent="() => store.fetchRecipesByName(query)">
    <input v-model="query" type="text" name="search" placeholder="Recipe name ..."/>
    <button type="submit">Search</button>
  </form>
  <RecipeNameResults />
</template>
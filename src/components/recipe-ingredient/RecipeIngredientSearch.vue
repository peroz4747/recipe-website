<script lang="ts" setup>
import RecipeIngredientsResults from "./RecipeIngredientResults.vue";
import { useRecipeStore } from "@/store/recipe";
import {ref} from 'vue';

const store = useRecipeStore();
const query = ref('');
</script>

<template>
  <h2>Search recipe by Ingredient</h2>
  <form @submit.prevent="() => store.fetchRecipesByIngredient(query)">
    <input v-model="query" type="text" name="search" placeholder="Ingredient ..."/>
    <button type="submit">Search</button>
  </form>
  <RecipeIngredientsResults />
</template>
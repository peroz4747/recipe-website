<script lang="ts" setup>
import { useRecipeStore } from "@/store/recipe";
import { storeToRefs } from "pinia";

const store = useRecipeStore();
const {recipesByName, recipeNameQuery} = storeToRefs(store);
</script>

<template>
    <p v-if="recipeNameQuery"> Showing results for: "{{ recipeNameQuery }}"</p>
    <div v-if="recipesByName.length > 0" class="recipe-list">
        <div v-for="recipe in recipesByName" :key="recipe.idMeal" class="recipe-card">
            <router-link :to="`/recipe/${recipe.idMeal}`">
                <img :src="recipe.strMealThumb" :alt="recipe.strMeal" height="200" width="200"/>
                <h3>{{ recipe.strMeal }}</h3>
            </router-link>
        </div>
    </div>
</template>
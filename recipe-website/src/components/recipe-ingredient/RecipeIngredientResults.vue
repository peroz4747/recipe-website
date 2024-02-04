<script lang="ts" setup>
import { useRecipeStore } from "@/store/recipe";
import { storeToRefs } from "pinia";

const store = useRecipeStore();
const {recipesByIngredient, recipeIngredientQuery} = storeToRefs(store);
</script>

<template>
    <p v-if="recipeIngredientQuery"> Showing results for: "{{ recipeIngredientQuery }}"</p>
    <div v-if="recipesByIngredient.length > 0" class="recipe-list">
        <div v-for="recipe in recipesByIngredient" :key="recipe.idMeal" class="recipe-card">
            <router-link :to="`/recipe/${recipe.idMeal}`">
                <img :src="recipe.strMealThumb" :alt="recipe.strMeal" height="200" width="200"/>
                <h3>{{ recipe.strMeal }}</h3>
            </router-link>
        </div>
    </div>
</template>
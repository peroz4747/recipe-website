<script setup>
  import { useRecipeStore } from "@/store/recipe";
  import { ref, onMounted } from "vue";
  import { useRoute } from 'vue-router';
  import { storeToRefs } from 'pinia';

  onMounted(async () => {
    await store.fetchSelectedRecipeDetails(id.value);
  })

  const route = useRoute();
  const store = useRecipeStore();
  const id = ref(route.params.id);

  const { recipeDetails, isLoading, getListOfTags,getListOfIngredients,getListOfMeasurements,getEmbeddedYoutubeLink } = storeToRefs(store); 

  console.log(isLoading.value)
  
</script>

<template>
  <div v-if="!isLoading && recipeDetails !== null" class="recipe-details">
    <div class="title-wrapper">
        <h2>{{ recipeDetails.strMeal }}</h2>
    </div>
    <div class="image-wrapper">
        <img :src="recipeDetails.strMealThumb" :alt="recipeDetails.strMeal" />
    </div>
    <div class="inline-wrapper three-column">
      <div class="area-wrapper">
        <h3>Area</h3>
        <p class="area-badge">{{ recipeDetails.strArea }}</p>
      </div>
      <div class="category-wrapper">
          <h3>Category</h3>
          <p class="category-badge">{{ recipeDetails.strCategory }}</p>
      </div>
      <div class="tags-wrapper">
          <h3>Tags</h3>
          <ul>
            <li v-for="tag in getListOfTags" :key="tag" class="tags-badge">
              {{ tag }}
            </li>
          </ul>
      </div>
    </div>
    <h3>Ingredients</h3>
    <div class="inline-wrapper two-column">
      <div class="ingredient-wrapper">
        <ul>
          <li v-for="ingredient in getListOfIngredients" :key="ingredient">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="measurements-wrapper">
          <ul>
            <li v-for="measurement in getListOfMeasurements" :key="measurement">
              {{ measurement }}
            </li>
          </ul>
      </div>
    </div>
    <div class="instructions-wrapper">
        <h3>Instructions</h3>
        <p>{{ recipeDetails.strInstructions }}</p>
    </div>
    <div class="video-wrapper">
        <h3>Video</h3>
        <iframe width="560" height="315" :src="getEmbeddedYoutubeLink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</template>
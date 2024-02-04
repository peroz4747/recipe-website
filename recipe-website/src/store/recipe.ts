import { defineStore } from "pinia";
import { api } from "@/http/api";

export const useRecipeStore = defineStore('recipes', {
  state: () => ({
    recipesByName: [],
    recipeNameQuery: '',
    recipesByIngredient: [],
    recipeIngredientQuery: '',
    recipeDetails: null,
    isLoading: true
  }),
  actions: {
    async fetchRecipesByName(query: string) {
      this.isLoading = true;
      this.recipeNameQuery = query;
      try {
        const response = await api.get(`/search.php?s=${query}`);
        this.recipesByName = response.data.meals;
      } catch (error) {
        console.error("Error fetching recipes by name:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchRecipesByIngredient(query: string) {
      this.isLoading = true;
      this.recipeIngredientQuery = query;
      try {
        const response = await api.get(`/filter.php?i=${query}`);
        this.recipesByIngredient = response.data.meals;
      } catch (error) {
        console.error("Error fetching recipes by ingredient:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchSelectedRecipeDetails(query: string) {
      this.isLoading = true;
      try {
        const response = await api.get(`/lookup.php?i=${query}`);
        this.recipeDetails = response.data.meals[0];
      } catch (error) {
        console.error("Error fetching selected recipe details:", error);
      } finally {
        this.isLoading = false;
      }
    }
  },
  getters: {
    getEmbeddedYoutubeLink(): string | null {
      if (this.recipeDetails?.strYoutube) {
        const youtubeLink = new URL(this.recipeDetails.strYoutube);
        return `https://www.youtube.com/embed/${youtubeLink.searchParams.get('v')}`;
      }
      return null;
    },
    getListOfIngredients(): string[] {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (this.recipeDetails?.hasOwnProperty(`strIngredient${i}`)) {
          ingredients.push(this.recipeDetails[`strIngredient${i}`]);
        }    
      }
      return ingredients;
    },
    getListOfMeasurements(): string[] {
      const measurements = [];
      for (let i = 1; i <= 20; i++) {
        if (this.recipeDetails?.hasOwnProperty(`strMeasure${i}`)) {
          measurements.push(this.recipeDetails[`strMeasure${i}`]); 
        }  
      } 
      return measurements;
    },
    getListOfTags(): string[] {
      debugger;
      return this.recipeDetails?.strTags?.split(',') || [];
    }
  }
});
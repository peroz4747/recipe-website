import { createRouter, createWebHistory, RouteRecordRaw, } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/home-page/HomePage.vue")
  },
  {
    path: "/name",
    name: "RecipeName",
    component: () => import("@/components/recipe-name/RecipeNameSearch.vue")
  },
  {
    path: "/ingredient",
    name: "RecipeIngredient",
    component: () => import("@/components/recipe-ingredient/RecipeIngredientSearch.vue")
  },
  {
    path: "/recipe/:id",
    name: "RecipeDetails",
    component: () => import("@/components/recipe-details/RecipeDetails.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
<template>
  <div id="nav">
    <router-link to="/name">Recipe Name</router-link> | 
    <router-link to="/ingredient">Recipe Ingredient</router-link>
  </div>
  <router-view />
  <div class="disclaimer">
    This site uses open source API (https://www.themealdb.com/api.php) to retrieve recipe results. Therefore results might be limited.
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

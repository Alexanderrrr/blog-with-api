<template>
  <div id="app">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">Vivify Academy</h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <router-link class="p-2 text-dark" :to="{name:'posts'}">Posts</router-link>
          <router-link class="p-2 text-dark" :to="{name:'add-post'}">Add Post</router-link>
        </nav>
    </div>
    <img alt="Vivify logo" src="./assets/vivify-logo.png">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

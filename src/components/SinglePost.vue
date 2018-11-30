<template lang="html">
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.text }}</p>
  </div>
</template>

<script>
import postsService from '../services/PostsService'

export default {
  created(){
    if (this.$route.params.id) {
      postsService.get(this.$route.params.id)
      .then(response => {
        this.post = response.data
      })
    }
  },

  data(){
    return {
      post: {}
    }
  }
}
</script>

<style lang="css">
</style>

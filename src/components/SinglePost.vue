<template lang="html">
  <div>

  </div>
</template>

<script>
import postsService from '../services/PostsService'

export default {
  created(){
    if (this.$route.params.id) {
      postsService.get(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>

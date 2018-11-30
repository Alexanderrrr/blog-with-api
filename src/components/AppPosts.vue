<template>
  <div>
    <ul v-for="post in posts" :key="post.id">
      <li>{{ post.title }}</li>
      <li>{{ post.text }}</li>
      <router-link :to="{ name: 'single-post', params: {id:post.id} }">View Post</router-link>
    </ul>
  </div>
</template>

<script>
import postsService from '../services/PostsService'

export default {
  posts: postsService.getAll()
}
</script>

<style lang="css">
</style>

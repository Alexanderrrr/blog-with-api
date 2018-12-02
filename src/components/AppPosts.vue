<template>
  <div>
    <template v-if="posts.length">
      <dl v-for="post in posts" :key="post.id">
        <h1>Post Title</h1>
        <li>{{ post.title }}</li>
        <h1>Post Text</h1>
        <li>{{ post.text }}</li>
        <p>created at</p>
        <li>{{ post.createdAt | formatDate }}</li>
        <h3>Number of comments for this post: {{post.comments.length}}</h3>
        <router-link :to="{ name: 'single-post', params: {id:post.id} }">View Post</router-link><br>
        <button @click="editPostBtn(post.id)" class="btn btn-primary">Edit Post</button><br>
        <button @click="deletePost(post.id)" class="btn btn-danger">Delete</button>
        <hr>
      </dl>
    </template>
    <template v-else>
       <div>
         <h1>There is No Posts</h1>
       </div>
    </template>
  </div>
</template>


<script>
import postsService from '../services/PostsService'
import axios from 'axios'
import {mixin, DateMixin} from '../mixins/mixins'

export default {
  mixins: [mixin, DateMixin],

  created(){
    postsService.getAll()
    .then(response => {
      this.posts = response.data
    })

  },

  data(){
    return {
      posts: [],
    }
  },

  methods: {
    editPostBtn(id){
      this.$router.push({path: `/edit/${id}`})
    },

    deletePost(id){
      postsService.delete(id)
      .then((success) => {
        this.posts = this.posts.filter(c => c.id !== id)
      })

    }
  },

}
</script>

<style lang="css">
</style>

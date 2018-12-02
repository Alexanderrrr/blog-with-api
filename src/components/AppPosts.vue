<template>
  <div class="container">
    <div class="mb-3 text-center">
      <template v-if="posts.length">
        <div class="card mb-4 shadow-sm" v-for="post in posts" :key="post.id">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Post: {{ post.id }}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{{ post.title }}</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>{{ post.text }}</li>
              <li>created: {{ post.createdAt | diffForHumans  }}</li>
              <li><strong>There is {{ post.comments.length }} comments for this post</strong></li>
              <li>
                <router-link :to="{ name: 'single-post', params: {id:post.id} }">View Post</router-link>
              </li>
            </ul>
            <button @click="editPostBtn(post.id)" class="btn btn-lg btn-block btn-primary">Edit</button>
            <button @click="deletePost(post.id)" class="btn btn-lg btn-block btn-primary">Delete</button>
          </div>
        </div>
      </template>
    <template v-else>
       <div>
         <h1>There is No Posts</h1>
       </div>
    </template>
    </div>
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
.container {
  display: flex;
  justify-content: center;
}
</style>

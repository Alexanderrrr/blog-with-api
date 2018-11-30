<template lang="html">
  <div>
    <form @submit.prevent="addNewPost" @reset="resetForm">
      <div class="form-group row">
        <p v-if="errors.length">
          <ul>
            <li v-for="error in errors" class="p-3 mb-2 bg-danger text-white rounded">{{ error }}</li>
          </ul>
        </p>
      </div>
      <div class="form-group row">
        <label>Title</label>
        <input v-model="newPost.title" type="text" class="form-control" placeholder="Title" min="2" required>
      </div>
      <div class="form-group row">
        <label>Text</label>
        <input v-model="newPost.text" type="text" class="form-control" placeholder="Textt" min="2" required>
      </div>
      <button type="submit" class="btn btn-primary" id="submitBtn">Submit</button>
      <button class="btn btn-default" type="reset" value="Reset">Reset</button>
    </form>

  </div>
</template>

<script>
import postsService from '../services/PostsService'

export default {
  data(){
    return {
      newPost: {},
      errors: [],
    }
  },

  methods: {
    addNewPost(){
      postsService.add(this.newPost)
      this.newPost = {}
      this.$router.push({path: '/posts'})

    },

    resetForm(){
      this.newPost.title = ""
      this.newPost.text = ""
    }
  }
}
</script>

<style lang="css">
</style>

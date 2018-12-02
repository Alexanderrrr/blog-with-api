<template lang="html">
  <div class="container">
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
        <input v-model="newPost.title" type="text" class="form-control" placeholder="Title" minlength="2" required>
      </div>
      <div class="form-group row">
        <label>Text</label>
        <input v-model="newPost.text" type="text" class="form-control" placeholder="Text" maxlength="300" required>
      </div>
      <button type="submit" class="btn btn-primary" id="submitBtn">Submit</button>
      <button class="btn btn-default" type="reset" value="Reset">Reset</button>
    </form>

  </div>
</template>

<script>
import postsService from '../services/PostsService'
import {mixin} from '../mixins/mixins'

export default {
  
mixins: [mixin],

created(){
  if (this.$route.params.id) {
    postsService.get(this.$route.params.id)
    .then(response => {
      this.newPost = response.data
    })
  }
},
  data(){
    return {
      newPost: {},
      errors: [],
    }
  },

  methods: {
    addNewPost(){
      this.errors = []
      if (this.newPost.title.length < 2) {
        return this.errors.push("Title cant be less than 2 characters")
      }

      this.$route.params.id
          ?  postsService.edit(this.$route.params.id, this.newPost)
             .then(res => {
               this.newPost = {}
               this.redirectTo('posts')
             })

          :  postsService.add(this.newPost)
             .then(res => {
                this.newPost = {}
                this.redirectTo('posts')
             })

    },//end of addNewPost()


    resetForm(){
      this.newPost.title = ""
      this.newPost.text = ""
      this.errors = []
    }
  }
}
</script>

<style lang="css">
</style>

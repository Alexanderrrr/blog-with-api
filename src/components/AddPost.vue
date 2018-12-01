<template lang="html">
  <div>
    <form @submit.prevent="addNewPost" @reset="resetForm">
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

export default {
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
    }
  },

  methods: {
    addNewPost(){

      // if
      this.$route.params.id
      ? postsService.edit(this.$route.params.id, this.newPost)
        .then(res => {
          this.newPost = {}
          this.$router.push({path: '/posts'})
        })

      : postsService.add(this.newPost)
          .then(res => {
            this.newPost = {}
            this.$router.push({path: '/posts'})
          })
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

<template>
  <div>
    <h1>Add Comment</h1>
    <form @submit.prevent="addComment()">
      <div class="form-group row">
        <label>Text</label>
        <input v-model="newComment.text" type="text" class="form-control" placeholder="Text" maxlength="300" required>
      </div>
      <button type="submit" class="btn btn-primary" id="submitBtn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  components: {
  },
  data(){
    return {
      newComment: {}
    }
  },
  
  methods: {
    addComment(){
      this.$emit('addCommentFromComponent', this.newComment)
    }

  } // end of methods

} //end of export default
</script>

<style lang="css">
</style>

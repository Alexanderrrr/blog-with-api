<template lang="html">
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.text }}</p>
    <h3>Comments for this post</h3>
    <ul  v-for="com in comments">
      <li>{{com.text}}</li>
      <li>{{ com.createdAt | diffForHumans}}</li>
    </ul>
    <hr>
    <AddComment @addCommentFromComponent="add"/>
  </div>
</template>

<script>
import postsService from '../services/PostsService'
import AddComment from '../components/AddComment'
import {mixin, DateMixin} from '../mixins/mixins'

export default {
  mixins: [mixin, DateMixin],
  
  components: {
    AddComment
  },
  created(){
    if (this.$route.params.id) {
      postsService.get(this.$route.params.id)
      .then(response => {
        this.post = response.data
        this.comments = this.post.comments
      })
    }
  },

  data(){
    return {
      post: {},
      comments:[]

    }
  },

  methods: {
    add(comment){
      postsService.addComment(this.post.id,comment)
      .then(res => {
        this.comments.push(res.data)
      })
    }
  }
}
</script>

<style lang="css">
</style>

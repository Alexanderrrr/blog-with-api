
<template>
  <div class="container">
    <div class="mb-3 text-center">
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Post: {{ post.id }}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{{ post.title }}</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>{{ post.text }}</li>
              <li>created: {{ post.createdAt | diffForHumans  }}</li><br>
              <li><h4>Comments For This Post</h4></li>
              <ul  v-for="com in comments" :key="com.id">
                <li>{{com.text}}</li>
                <li>{{ com.createdAt | diffForHumans}}</li>
              </ul>
            </ul>
          </div>
        </div>
        <AddComment @addCommentFromComponent="add"/>
    </div>
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

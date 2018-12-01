import axios from 'axios'

class PostsService {
  constructor(){
    axios.defaults.baseURL = 'http://localhost:3000/api/'

  }

  getAll(){
    return axios.get('posts/?filter={"include":["comments"]}')
  }

  get(id){
    return axios.get(`posts/${id}?filter={"include":["comments"]}`)
  }

  add(post){
    return axios.post('posts', post)
  }

  edit(id, post){
    return axios.put(`posts/${id}`, post)
  }

  delete(id){
    return axios.delete(`posts/${id}`)
  }

  addComment(postId, comment){
    return axios.post(`posts/${postId}/comments/`, comment)
  }
}

const postsService = new PostsService();
export default postsService

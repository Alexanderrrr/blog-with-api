import axios from 'axios'

class PostsService {
  constructor(){
    axios.defaults.baseURL = 'http://localhost:3000/api/'

  }

  getAll(){
    return axios.get('posts')
  }

  get(id){
    return axios.get(`posts/${id}`)
  }

  add(post){
    return axios.post('posts', post)
  }
}

const postsService = new PostsService();
export default postsService

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
}

const postsService = new PostsService();
export default postsService

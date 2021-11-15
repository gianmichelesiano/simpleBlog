
import axios from "axios"

const ENDPOINT = 'http://localhost:3000';

export default {
  async getPosts() {
    let res = await axios.get(ENDPOINT+ "/posts");
    return res.data;
  },
  async getComments(commentId) {
    let res = await axios.get(ENDPOINT + "/posts/" + commentId);
    return res.data;
  }
}
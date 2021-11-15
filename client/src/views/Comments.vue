<template>
  <section class="section">
<div class="container">
      <div class="title">
        <h1>Comments</h1>
      </div>
      <div v-for="(item) in post.comments" :key="item.id">
            <section class="section">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Name:{{item.name}}</strong> 
                      <br>
                      Text:{{item.text}}
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <router-link to="/"><button class="button">Home</button></router-link>
      </div>
  </section>
</template>


<script>
import BlogService from '@/service/BlogService.js';
export default {
  name: "Comments",
  data() {
    return {
      post:{},
      event: {}
    };
  },
  created() {
    this.getPostsData();
  },

  methods: {
    
    async getPostsData() {
          const commentID = this.$route.params.id;
          BlogService.getComments(commentID)
            .then(post => {this.post = post})
        }
    }
};
</script>


<template>
  <section class="section">
    <div class="container">
      <div class="title">
        <h1>{{title}}</h1>
      </div>
      <div class="tile">
        <div v-for="(item, index) in posts" :key="item.id">
            
              <div class="mb-6">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Title: {{item.title}}
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      Num comments:  {{Object.keys(item.comments).length}}
                      <br>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a v-bind:href="'/posts/' + index" class="card-footer-item">View Comments</a>
                  </footer>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>

import BlogService from '@/service/BlogService.js';
export default {
  
  name: 'home',
  data() {
    return {
      title : 'All Posts',
      posts: {}
      
    };
  },

  created() {
    this.getPostsData();
  },

  methods: {
    async getPostsData() {
          BlogService.getPosts()
          .then(posts => {this.posts = posts})
        }
    }
}
</script>

<style>


.card{
  margin:10px;

}

</style>
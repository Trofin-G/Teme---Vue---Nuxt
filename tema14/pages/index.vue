<template>
  <div class="main-page">
    <HomepagePagination :items="responseData" :currentPage="currentPage" :totalPages="totalPages"
      @click="curentPageHandler" />
    <HomepageContent :items="responseData" />
  </div>
</template>
<script>

import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  computed: {
    ...mapGetters({
      responseData: "homepage/getData",
      currentPage: "homepage/getCurrentPage",
      limit: "homepage/getLimit",
      totalPages: "homepage/getTotalPages",
    }),

    async curentPageHandler() {
      let postsSkip = this.limit * (this.currentPage - 1);

      await axios.get(`https://dummyjson.com/posts?limit=${this.limit}&skip=${postsSkip}`)
        .then(response => {
          this.$store.dispatch('homepage/sendDataArray', response.data)
          console.log(response.data, 'response');
        })
    }
  },

  mounted() {
    this.curentPageHandler;
  },
}
</script>

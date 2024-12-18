<template>
    <div class="singleMovie">
      <SingleMovieContent :items="resultsMoviesList"/>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
    ...mapGetters({
      resultsMoviesList: "moviesStore/getSinglePage",
    }),
  },
  }
  </script>
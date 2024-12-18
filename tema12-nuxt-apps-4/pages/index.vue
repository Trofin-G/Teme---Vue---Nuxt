<template>
  <div class="moviesList">
    <MoviesListToolsBar />
    <MoviesListContent :items="resultsMoviesList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      resultsMoviesList: "moviesStore/getFilterBy",
    }),
  },

  mounted() {
    this.$store.commit("moviesStore/setFilterBy")
    this.$store.commit("moviesStore/setAllYears")
    this.$store.commit("moviesStore/setAllGenres")
  }
}
</script>
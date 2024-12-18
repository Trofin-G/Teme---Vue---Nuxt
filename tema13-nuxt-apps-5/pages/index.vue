<template>
  <div class="main-page">
    <HomepageTools :uniqueItems="allUniqueAlbumId" />
    <HomepageContent :items="resultsArray" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      dataArray: [],
    }
  },

  computed: {
    ...mapGetters({
      resultsArray: "homepage/getFilterData",
      allUniqueAlbumId: "homepage/getAlbumsIdArray"
    }),
  },

  async mounted() {
    await axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        this.$store.dispatch('homepage/sendDataArray', response.data.slice(0, 500))
      })

    this.$store.commit("homepage/setAlbumsIdArray")
    this.$store.commit("homepage/setFilterData")
  },
}
</script>

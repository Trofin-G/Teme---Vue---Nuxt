<template>
    <div class="content">
        <div class="content-wrapper">
            <div v-if="items.Images">
                <VueSlickCarousel :arrows="true" :dots="false">
                    <div v-for="image in items.Images">
                        <img :src="image" alt="img">
                    </div>
                </VueSlickCarousel>
            </div>

            <div class="movie_info">
                <div class="group half">
                    <h3>Titlu</h3>
                    <h2> {{ items.Title }}</h2>
                </div>

                <div class="group half movie_rating">
                    <h3>Rating:</h3>
                    <div class="stars" :style="`--rating: ${items.imdbRating / 2}`"></div>
                </div>

                <div class="group half">
                    <h3>An aparitie</h3>
                    <h2>{{ items.Year }}</h2>
                </div>

                <div class="group half">
                    <h3>Data Lansarii</h3>
                    <h2>{{ items.Released }}</h2>
                </div>

                <div class="group half">
                    <h3>Gen</h3>
                    <h2>{{ items.Genre }}</h2>
                </div>


                <div class="group half">
                    <h3>Numar voturi</h3>
                    <h2>{{ items.imdbVotes }}</h2>
                </div>

                <div class="group half">
                    <h3>Director</h3>
                    <h2>{{ items.Director }}</h2>
                </div>

                <div class="group half">
                    <h3>Scriitor</h3>
                    <h2>{{ items.Writer }}</h2>
                </div>

                <div class="group full">
                    <h3>Premii</h3>
                    <h2>{{ items.Awards }}</h2>
                </div>
                <div class="group full">
                    <h3>Plot</h3>
                    <h2>{{ items.Plot }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },

    props: {
        items: Object,
    },

    mounted() {
        this.$store.dispatch("moviesStore/sendValueSlug", this.$route.params.details);
    }
}
</script>
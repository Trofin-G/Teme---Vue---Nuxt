<template>
    <div class="content">
        <div v-for="item in items" class="movie_card" :id="item.shadowBack">
            <NuxtLink :to="`/details/${item.id}`">
                <div class="info_section">
                    <div class="movie_header">
                        <img class="locandina" :src="item.Poster" />
                        <h2>{{ item.Title }}</h2>
                        <h4>{{ item.Year }}, {{ item.Director }}</h4>
                        <span class="minutes">{{ item.Runtime }}</span>
                        <p class="type">{{ item.Genre }}</p>
                    </div>
                    <div class="movie_desc">
                        <p class="text">
                            {{ item.Plot }}
                        </p>
                    </div>
                    <div class="movie_rating">
                        <p class="votes">{{ item.imdbVotes }}</p>
                        <div class="stars" :style="`--rating: ${item.imdbRating / 2}`"></div>
                    </div>
                </div>
                <div class="blur_back">
                    <img :src="item.Images[0]" alt="back-photo">
                </div>
            </NuxtLink>
        </div>

    </div>
</template>

<script>


export default {
    props: {
        items: Array,
    },

}
</script>
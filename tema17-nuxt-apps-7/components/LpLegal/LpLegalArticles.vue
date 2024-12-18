<template>
    <div class="articles">
        <div class="container container-legal">
            <div class="title">
                <h2>Răsfoiește articolele din Blogul Edenred despre legislație și fiscalitate</h2>
            </div>
            <div class="content articles-carousel">
                <div class="view view-endenred-legal-articles">
                    <div class="view-content">
                        <client-only>
                            <div class="slider-container">
                                <VueSlickCarousel :slidesToShow="4" :arrows="false" :dots="true">
                                    <div v-for="article in data" class="slide">
                                        <div class="article-wrapper">
                                            <div class="thumbnail" :data-image-src="article.img">
                                                <a :href="article.url"></a>
                                            </div>
                                            <h3>
                                                <a :href="article.url">
                                                    {{ article.title }}
                                                </a>
                                            </h3>
                                            <p>{{ article.date }}</p>
                                        </div>
                                    </div>
                                </VueSlickCarousel>
                            </div>
                        </client-only>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        data: Array,
    },
}
</script>
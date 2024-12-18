<template>
    <div class="main-banner header-text">
        <div class="container-fluid">
            <div class="slick-slider">
                <client-only>
                    <VueSlickCarousel :slidesToShow="3" :arrows="true" :dots="false">
                        <div v-for="item in listPosts" class="item">
                            <img :src="item.srcBanner" :alt="item.altImage">
                            <div class="item-content">
                                <div class="main-content">
                                    <div class="meta-category">
                                        <span>{{ item.categoryPost }}</span>
                                    </div>
                                    <a :href="`/details/${item.titlePost.url}`">
                                        <h4>{{ item.titlePost.content }}</h4>
                                    </a>
                                    <ul class="post-info">
                                        <li>
                                            <a :href="item.creatorPost.url">{{ item.creatorPost.content }}</a>
                                        </li>
                                        <li>
                                            <a :href="item.datePost.url">{{ item.datePost.content }}</a>
                                        </li>
                                        <li>
                                            <a :href="item.numberOfCommentsPost.url">{{ item.numberOfCommentsPost.content }}
                                                Comments</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </VueSlickCarousel>
                </client-only>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            listPosts: "blog/listItems/getListPosts",
        }),
    },
}
</script>
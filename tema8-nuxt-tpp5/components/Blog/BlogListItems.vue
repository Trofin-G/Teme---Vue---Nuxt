<template>
    <div class="row">
        <div v-for="item in items" class="col-lg-6">
            <div class="blog-post">
                <div class="blog-thumb">
                    <img :src="item.srcThumb" :alt="item.altImage">
                </div>
                <div class="down-content">
                    <span>{{ item.categoryPost }}</span>
                    <a :href="`/details/${item.titlePost.url}`">
                        <h4>{{ item.titlePost.content }}</h4>
                    </a>
                    <ul class="post-info">
                        <li><a :href="item.creatorPost.url">{{ item.creatorPost.content }}</a></li>
                        <li><a :href="item.datePost.url">{{ item.datePost.content }}</a></li>
                        <li><a :href="item.numberOfCommentsPost.url">{{ item.numberOfCommentsPost.content }} Comments</a>
                        </li>
                    </ul>
                    <!-- <p v-html="item.descriptionPost"></p> -->
                    <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a
                        mauris sit amet eleifend.</p>
                    <div class="post-options">
                        <div class="row">
                            <div class="col-lg-12">
                                <ul class="post-tags">
                                    <li><i class="fa fa-tags"></i></li>
                                    <li v-for="tag in item.tagsPost">
                                        <a :href="tag.url">{{ tag.contentTag }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        items: Array,
    },

    computed: {
        ...mapGetters({
            listPosts: "blog/listItems/getListPosts",
        }),
    },

}
</script>
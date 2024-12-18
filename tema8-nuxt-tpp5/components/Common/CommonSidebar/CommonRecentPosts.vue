<template>
    <div class="sidebar-item recent-posts">
        <div class="sidebar-heading">
            <h2>Recent Posts</h2>
        </div>
        <div class="content">
            <ul>
                <li v-for="item in recentPosts">
                    <a :href="`/details/${item.titlePost.url}`">
                        <h5>{{ item.titlePost.content }}</h5>
                        <span>{{ item.datePost.content }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            recentPosts: "blog/listItems/getRecentPosts",
        }),
    },

    mounted() {
        this.$store.commit("blog/listItems/setRecentPosts")
    }

}
</script>
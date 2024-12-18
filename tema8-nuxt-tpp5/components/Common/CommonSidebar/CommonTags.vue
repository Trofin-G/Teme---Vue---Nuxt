<template>
    <div class="sidebar-item tags">
        <div class="sidebar-heading">
            <h2>Tag Clouds</h2>
        </div>
        <div class="content">
            <ul>
                <li v-for="item in allTags">
                    <a @click.prevent="tagsHandler(item.url)" :href="item.url">{{ item.contentTag }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    methods: {
        tagsHandler(tagValue) {
            this.$store.dispatch('blog/listItems/sendTagValue', tagValue)
        },
    },
    
    computed: {
        ...mapGetters({
            allTags: "blog/listItems/getAllTags"
        }),
    },

    mounted() {
        this.$store.commit("blog/listItems/setAllTags")
    }
}
</script>
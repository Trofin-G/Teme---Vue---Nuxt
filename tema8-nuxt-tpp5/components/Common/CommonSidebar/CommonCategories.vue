<template>
    <div class="sidebar-item categories">
        <div class="sidebar-heading">
            <h2>Categories</h2>
        </div>
        <div class="content">
            <ul>
                <li v-for="item in allCategorys">
                    <a @click.prevent="categoryHandler(item.toLowerCase())" :href="item.toLowerCase()">- {{ item }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    methods: {
        categoryHandler(categoryValue) {
            this.$store.dispatch('blog/listItems/sendCategoryValue', categoryValue)
        },
    },

    computed: {
        ...mapGetters({
            allCategorys: "blog/listItems/getAllCategorys",
        }),
    },

    mounted() {
        this.$store.commit("blog/listItems/setAllCategorys")
    }
}
</script>
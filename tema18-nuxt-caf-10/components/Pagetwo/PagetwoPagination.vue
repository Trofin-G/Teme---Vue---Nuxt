<template>
    <div class="pagination">
        <a v-if="totalItems !== items.length" @click.prevent="pageHandler(loadItems)" href="#">
            Load more
        </a>
    </div>
</template>

<script>


export default {
    props: {
        items: Array,
        loadItems: Number,
        totalItems: Number,
    },

    methods: {
        pageHandler(pageValue) {
            this.$store.dispatch('pagetwo/currentPageHandler', pageValue)
            this.$emit('recallFunction')
        },
    },
}
</script>


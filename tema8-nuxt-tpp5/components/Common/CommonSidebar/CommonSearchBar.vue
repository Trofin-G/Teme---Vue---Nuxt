<template>
    <div class="sidebar-item search">
        <form @submit.prevent="searchHandler" id="search_form" name="gs" method="GET" action="#">
            <input v-model="searchValue" type="text" name="q" class="searchText" placeholder="type to search..."
                autocomplete="on">
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            searchValue: '',
        }
    },


    methods: {
        searchHandler() {
            this.$store.dispatch('blog/listItems/sendSearchValue', this.searchValue.toLowerCase())
        },
    },

}
</script>
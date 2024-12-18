<template>
    <div class="pagetwo">
        <p v-show="$fetchState.pending">Loading products...</p>
        <div class="inner" v-show="!$fetchState.pending">
            <PagetwoFilters :items="categoriesList" @recallFunction="recallFunction" />
            <CommonCardlist :items="productsList" />
            <PagetwoPagination :items="productsList" :loadItems="loadItems" :totalItems="totalItems" @recallFunction="recallFunction" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    async fetch() {
        await this.fetchCategoriesData()
        await this.fetchProductsData()
    },

    methods: {
        ...mapActions({
            fetchCategoriesData: 'fetchCategories',
            fetchProductsData: 'pagetwo/fetchProducts',
        }),

        recallFunction() {
            this.fetchProductsData()
        }
    },

    computed: {
        ...mapGetters({
            categoriesList: 'getCategoriesList',
            productsList: 'pagetwo/getProductsList',
            loadItems: 'pagetwo/getLoadItems',
            totalItems: 'pagetwo/getTotalItems',
        }),
    },
}
</script>



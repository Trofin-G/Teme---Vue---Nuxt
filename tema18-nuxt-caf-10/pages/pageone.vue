<template>
    <div class="pageone">
        <p v-show="$fetchState.pending">Loading products...</p>
        <div class="inner" v-show="!$fetchState.pending">
            <PageoneFilters :items="categoriesList" @recallFunction="recallFunction" />
            <CommonCardlist :items="productsList" />
            <PageonePagination :totalPages="totalPages" :currentPage="currentPage" @recallFunction="recallFunction" />
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
            fetchProductsData: 'pageone/fetchProducts',
        }),

        recallFunction() {
            this.fetchProductsData()
        }
    },

    computed: {
        ...mapGetters({
            productsList: 'pageone/getProductsList',
            categoriesList: 'getCategoriesList',
            totalPages: 'pageone/getTotalPages',
            currentPage: 'pageone/getCurrentPage',
        }),
    },
}
</script>
  
  
  
<template>
    <div class="tools">
        <div class="group">
            <div class="input">
                <label class="input-label">Toate variantele de AlbumId:</label>
                <select @change="filterHandler()" v-model="filterValue" name="filterByYear" id="filterByYear"
                    class="input-select" title="filterByYear">
                    <option :value="null">All</option>
                    <option v-for="item in uniqueItems" :value="item">AlbumId: {{ item }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        uniqueItems: Array,
    },

    data() {
        return {
            filterValue: null,
        }
    },

    methods: {
        filterHandler() {
            this.$store.dispatch('homepage/sendFilterValue', this.filterValue)
        }
    },


}
</script>
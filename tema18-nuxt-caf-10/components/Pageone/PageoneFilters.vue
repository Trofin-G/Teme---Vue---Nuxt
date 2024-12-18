<template>
    <div class="filters">
        <div class="group">
            <div class="input">
                <select @change="filterHandler()" v-model="filterValue" name="filter" id="filter"
                    class="input-select" title="filter">
                    <option :value="null">All</option>
                    <option v-for="item in items" :value="item">{{ item }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        items: Array,
    },

    data() {
        return {
            filterValue: null,
        }
    },

    methods: {
        filterHandler() {
            this.$store.dispatch('pageone/filterHandler', this.filterValue)
            this.$emit('recallFunction')
        },
    },
}
</script>
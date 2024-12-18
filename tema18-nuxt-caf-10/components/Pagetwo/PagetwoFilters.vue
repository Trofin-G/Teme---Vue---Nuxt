<template>
    <div class="filters">
        <div class="category">
            <input @change="filterHandler(null)" :value="null" name="radio" type="radio" id="all" class="input-radio">

            <label for="all" class="label-radio">
                <p>All</p>
            </label>
        </div>
        <div class="category" v-for="item in items">
            <input @change="filterHandler(item)" :value="item" name="radio" type="radio" :id="item" class="input-radio">

            <label :for="item" class="label-radio">
                <p>{{ item }}</p>
            </label>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        items: Array,
    },

    methods: {
        filterHandler(filterValue) {
            this.$store.dispatch('pagetwo/filterHandler', filterValue)
            this.$emit('recallFunction')
        },
    },
}
</script>
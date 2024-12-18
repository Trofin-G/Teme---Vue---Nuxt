<template>
    <div v-if="showFirstSix.length !== 0" class="cards-wrapper">
        <CardItem v-for="item in showFirstSix" :key="item.id" :item="item" />
        <!-- <button :class="{ 'hidden': listItems.length === showFirstSix.length }" @click="loadMore">Incarca inca 4 elemente</button> -->
        <b-button :class="{ 'hidden': listItems.length === showFirstSix.length }" @click="loadMore" block variant="primary">Incarca inca 4 elemente</b-button>
    </div>
    <div v-else class="cards-wrapper">
        <p>Nu exista nici un card.</p>
    </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue'



export default {
    props: {
        listItems: Array
    },

    components: {
        CardItem
    },

    data() {
        return {
            length: 4,
        }
    },

    methods: {
        loadMore() {
            if (this.length > this.showFirstSix.length) return;
            this.length = this.length + 4;
        },
    },


    computed: {
        showFirstSix: function () {
            return this.listItems.slice(0, this.length)
        },
    },

}
</script>

<style lang="scss">
</style>
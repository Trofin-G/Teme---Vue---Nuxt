<template>
    <div class="pagination">
        <ul>
            <li class="prev">
                <a href="#"><img src="../../assets/images/icons/arrow-prev.svg" alt="Prev" title="Prev" width="9"
                        height="15"></a>
            </li>
            <li v-for="item in pages">
                <a @click.prevent="pageHandler($event)" href="#">
                    {{ item }}
                </a>
            </li>


            <li class="next">
                <a href="#"><img src="../../assets/images/icons/arrow-next.svg" alt="Next" title="Next" width="9"
                        height="15"></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
        perPage: Number,
        currentPage: Number,
    },

    computed: {
        pages() {
            let pagesArray = [];
            for (let i = 1; i <= Math.ceil(this.items.length / this.perPage); i++) {
                pagesArray.push(i);
            }
            return pagesArray;
        }
    },

    methods: {
        pageHandler(e) {
            this.$store.dispatch('contracts/listContracts/sendPageValue', Number(e.target.textContent))
        },
    },
}
</script>
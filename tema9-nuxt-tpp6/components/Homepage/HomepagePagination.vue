<template>
    <div class="pagination">
        <ul>
            <li class="prev">
                <a href="#"><img src="../../assets/images/icons/arrow-prev.svg" alt="Prev" title="Prev" width="9"
                        height="15"></a>
            </li>
            <!-- <li>
                <a @click.prevent="pageHandler($event)" href="#" :class="{ 'd-none': (Number(currentPage) - 1 === 0) }">
                    {{ Number(currentPage) - 1 }}
                </a>
            </li>
            <li>
                <a @click.prevent="pageHandler($event)" href="#">
                    {{ Number(currentPage) }}
                </a>
            </li>
            <li>
                <a @click.prevent="pageHandler($event)" href="#"
                    :class="{ 'd-none': (Number(currentPage) + 1 > listMessages.length / perPage) }">
                    {{ Number(currentPage) + 1 }}
                </a>
            </li> -->

            <li v-for="item in totalPagesArray">
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
import { mapGetters } from 'vuex';

export default {
    methods: {
        pageHandler(e) {
            this.$store.dispatch('homepage/listMessages/sendPageValue', Number(e.target.textContent))
        },
    },

    computed: {
        ...mapGetters({
            currentPage: "homepage/listMessages/getCurrentPage",
            totalPagesArray: "homepage/listMessages/getTotalPagesArray",
            perPage: "homepage/listMessages/getPerPage",
            listMessages: "homepage/listMessages/getListMessages",
        }),
    },



}
</script>
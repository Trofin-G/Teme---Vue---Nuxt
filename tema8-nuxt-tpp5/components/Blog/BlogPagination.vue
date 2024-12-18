<template>
    <ul class="page-numbers">
        <!-- <li>
            <a href="#">
                First({{ currentPage = 1 }})
            </a>
        </li> -->
        <li :class="{ 'hidden': (Number(currentPage) - 1 === 0) }">
            <!-- <a @click.prevent="pageHandler($event)" href="#" :class="{ 'hidden': (results.length == loadMoreData.length) }"> -->
            <a @click.prevent="pageHandler($event)" href="#">
                {{ Number(currentPage) - 1 }}
            </a>
        </li>
        <li @click.prevent="pageHandler($event)" class="active">
            <a href="#">
                {{ Number(currentPage) }}
            
            </a>
        </li>
        <li :class="{ 'hidden': (Number(currentPage) + 1 > itemsArray.length / perPage) }">
            <a @click.prevent="pageHandler($event)" href="#">
                {{ Number(currentPage) + 1 }}
            </a>
        </li>
        <!-- <li>
            <a href="#">
                Last({{ currentPage = totalPages }})
            </a>
        </li> -->
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        itemsArray: Array,
        perPage: Number,
    },

    methods: {
        pageHandler(e) {
            this.$store.dispatch('blog/listItems/sendPageValue', Number(e.target.textContent))
        },
    },

    computed: {
        ...mapGetters({
            currentPage: "blog/listItems/getCurrentPage",
            totalPages: "blog/listItems/getTotalPages",
        }),
    },
}
</script>

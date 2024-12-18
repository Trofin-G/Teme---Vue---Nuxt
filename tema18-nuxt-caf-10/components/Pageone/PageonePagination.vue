<template>
    <div class="pagination">
        <ul>
            <li>
                <a @click.prevent="pageHandler(null, 1)" href="#">
                    First
                </a>
            </li>
            <li v-for="item in setPageHandler()" :class="{ 'active': currentPage == item }">
                <a @click.prevent="pageHandler($event, null)" href="#">
                    {{ item }}
                </a>
            </li>
            <li>
                <a @click.prevent="pageHandler(null, totalPages)" href="#">
                    Last
                </a>
            </li>
        </ul>
    </div>
</template>

<script>


export default {
    props: {
        totalPages: Number,
        currentPage: Number,
    },

    methods: {
        setPageHandler() {
            let numberPage = [];

            if (this.currentPage == 1 || this.currentPage == this.totalPages) {
                for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
                    if (i >= 1 && i <= this.totalPages) {
                        numberPage.push(i);
                    }
                }
            } else {
                for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
                    if (i >= 1 && i <= this.totalPages) {
                        numberPage.push(i);
                    }
                }
            }

            return numberPage;
        },

        pageHandler(e, optionValue) {
            this.$store.dispatch('pageone/currentPageHandler', e == null ? Number(optionValue) : Number(e.target.textContent))
            this.$emit('recallFunction')
        },
    },
}
</script>
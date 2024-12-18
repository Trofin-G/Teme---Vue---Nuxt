<template>
    <main id="messages">
        <div class="messages">

            <div class="messages__list">
                <div class="pp-container">
                    <CommonToolsbar />

                    <div class="page-content">
                        <CommonSidebar />
                        <HomepageList
                            :items="paginationMessages.length == 0 ? searchMessages.slice(0, perPage) : paginationMessages" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            searchMessages: "homepage/listMessages/getSearchValue",
            paginationMessages: "homepage/listMessages/getPaginationMessages",
            perPage: "homepage/listMessages/getPerPage",
        })
    },

    mounted() {
        this.$store.commit("homepage/listMessages/setCurrentPage")
        this.$store.commit("homepage/listMessages/setMessageUnread")

    }
}
</script>
<template>
    <main id="messages">
        <div class="messages">

            <div class="messages__list">
                <div class="pp-container">
                    <CommonToolsbar />

                    <div class="page-content">
                        <CommonSidebar />
                        <HomepageList
                            :items="paginationMessages.length == 0 ? sortedMessages.slice(0, perPage) : paginationMessages"
                            :itemsSent="listSentMessages" />
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
            sortedMessages: "homepage/listMessages/getSortedMessages",
            listSentMessages: "homepage/listMessages/getListSentMessages",
            perPage: "homepage/listMessages/getPerPage",
            paginationMessages: "homepage/listMessages/getPaginationMessages",
            cloneListMessages: "homepage/listMessages/getCloneListMessages",

        })
    },

    mounted() {
        this.$store.commit("homepage/listMessages/setSortedMessages")
        this.$store.commit("homepage/listMessages/setMessageUnread")
        this.$store.commit("homepage/listMessages/setCloneListMessages")
        this.$store.commit("homepage/listMessages/setCurrentPage")
    }
}
</script>
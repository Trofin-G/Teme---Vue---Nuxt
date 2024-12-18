<template>
    <main id="messages">
        <div class="messages">

            <div class="messages__list">
                <div class="pp-container">
                    <CommonToolsbar />

                    <div class="page-content">
                        <CommonSidebar />
                        <HomepageList
                            :items="paginationMessages.length == 0 ? cloneListMessages.slice(0, perPage) : paginationMessages"
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
            cloneListMessages: "homepage/listMessages/getCloneListMessages",
            listSentMessages: "homepage/listMessages/getListSentMessages",
            paginationMessages: "homepage/listMessages/getPaginationMessages",
            perPage: "homepage/listMessages/getPerPage",
        })
    },

    mounted() {
        this.$store.commit("homepage/listMessages/setCloneListMessages")
        this.$store.commit("homepage/listMessages/setCurrentPage")
        this.$store.commit("homepage/listMessages/setMessageUnread")
    }
}
</script>

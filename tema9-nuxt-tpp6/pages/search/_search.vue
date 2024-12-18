<template>
    <main id="messages">
        <div class="messages">

            <div class="messages__list">
                <div class="pp-container">
                    <CommonToolsbar />

                    <div class="page-content">
                        <CommonSidebar />
                        <HomepageList :items="searchMessages"/>
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
        })
    },

    mounted() {
        this.$store.commit("homepage/listMessages/setSortedMessages")
        this.$store.commit("homepage/listMessages/setMessageUnread")
    }
}
</script>
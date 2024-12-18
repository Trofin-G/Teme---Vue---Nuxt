<template>
    <main class="contracts" id="contracts">
        <div class="pp-container">
            <!-- Steps -->
            <div class="page-content">
                <h1>Contractele mele</h1>

                <!-- START:: Aside -->
                <ContractsSidebar />
                <!-- END:: Aside -->

                <!-- START:: Content -->
                <div class="content">
                    <div class="wrapper">
                        <ContractsToolsbar />

                        <!-- start:: Contracts -->
                        <ContractsList :items="resultsArray" :perPage="perPage" :currentPage="currentPage" />
                        <!-- :items="filterByStatusArray.length == 0 ? cloneListContracts : filterByStatusArray" /> -->
                        <!-- end:: Contracts -->

                        <!-- START:: Pagination -->
                        <ContractsPagination v-if="resultsArray.length != 0" :items="resultsArray" :perPage="perPage"
                            :currentPage="currentPage" />
                        <!-- END:: Pagination -->
                    </div>
                </div>
                <!-- END:: Content -->
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            resultsArray: "contracts/listContracts/getFilterByOption",
            perPage: "contracts/listContracts/getPerPage",
            currentPage: "contracts/listContracts/getCurrentPage",
        }),
    },



    mounted() {
        this.$store.commit("contracts/listContracts/setCloneListContracts")
        this.$store.commit("contracts/listContracts/setFilterByOption")
        this.$store.commit("homepage/listMessages/setMessageUnread")
    }
}
</script>

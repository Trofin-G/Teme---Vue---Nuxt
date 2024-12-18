<template>
    <div>
        <div class="scroll-top"></div>
        <CommonOfeersBar />

        <CommonContactBar />
        <CommonHeader />

        <div class="lp-legal">
            <main>
                <div v-for="item in resultsList" class="wrapper-details">
                    <h2>{{ item.name }}</h2>
                    <h4>{{ item.description }}</h4>
                </div>
            </main>
        </div>

        <!-- Site Footer -->
        <CommonFooter />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    computed: {
        ...mapGetters({
            resultsList: "documents/getItemDetails",
        }),
    },

    mounted() {
        this.$store.dispatch('documents/detailsPage', this.$route.params.details);
    }

}
</script >                                                                                                                                                             
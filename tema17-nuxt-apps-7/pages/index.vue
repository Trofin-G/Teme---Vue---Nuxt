<template>
    <div>
        <div class="scroll-top"></div>
        <CommonOfeersBar />

        <CommonContactBar />
        <CommonHeader />

        <div class="lp-legal">
            <main>
                <!-- Intro section -->
                <LpLegalIntro />
                <!-- Legal section -->
                <div class="container container-legal">
                    <div class="documents">
                        <div class="documents-wrapper">
                            <div class="documents-inner">
                                <LpLegalSidebar :data="sidebarList" />
                                <LpLegalDocuments :data="resultsList" :categoryData="categoryData" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Legal section -->
                <LpLegalArticles :data="articlesList" />

                <!-- Socials section -->
                <LpLegalSocials :data="socialsList" />
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
            articlesList: "articles/getArticlesList",
            socialsList: "socials/getSocialsList",
            resultsList: "documents/getSerachList",
            categoryData: "documents/getCategoryPage",
            sidebarList: "documents/getSidebarList",
        }),
    },

    mounted() {
        this.$store.commit('documents/setSearchList')
        this.$store.commit('documents/setSidebarList')
    }
}
</script>
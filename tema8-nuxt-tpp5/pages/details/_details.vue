<template>
    <div class="article-details-page">
        <main>
            <ArticleDetailsIntro />
            <CommonCta />

            <section class="blog-posts grid-system">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="all-blog-posts">
                                <div class="row">
                                    <ArticleDetailsContent />
                                    <ArticleDetailsListComments />
                                    <ArticleDetailsForm />

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="sidebar">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <CommonSearchBar />
                                    </div>
                                    <div class="col-lg-12">
                                        <CommonRecentPosts />
                                    </div>
                                    <div class="col-lg-12">
                                        <CommonCategories />
                                    </div>
                                    <div class="col-lg-12">
                                        <CommonTags />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            articleDetail: "blog/listItems/getArticleDetail",
        }),
    },

    mounted() {
        // this.$store.commit("blog/listItems/setArticleDetail"),
        this.$store.dispatch("blog/listItems/getArticleData", this.$route.params.details);
    }
}
</script>
<template>
    <div class="blog-page">
        <BlogIntro />
        <CommonCta />

        <section class="blog-posts grid-system">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="all-blog-posts">
                            <BlogListItems
                                :items="afterPagination.length == 0 ? listPosts.slice(0, perPage) : afterPagination" />

                            <div class="row">
                                <div class="col-lg-12">
                                    <BlogPagination :itemsArray="listPosts" :perPage="perPage" />

                                </div>
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
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            listPosts: "blog/listItems/getListPosts",
            afterPagination: "blog/listItems/getAfterPagination",
            perPage: "blog/listItems/getPerPage",
        }),
    },

}
</script>
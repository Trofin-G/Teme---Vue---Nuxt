<template>
    <div id="work" class="portofolio">
        <div class="container">
            <h2>{{ headingSection.sectionTitle }}</h2>
            <h4>{{ headingSection.sectionDescription }}</h4>

            <div class="filter-tabs">
                <a href="#" class="active" dataType="all" @click.prevent="filterTabsHandler($event)">All</a>
                <a v-for="tab in filterTabs" href="#" @click.prevent="filterTabsHandler($event)" :dataType="tab.type">{{
                    tab.typeText }}</a>
            </div>
            <div class="portofolio-list">
                <div class="portofolio-item" v-for="item in loadMoreData">
                    <a :href="item.url" :dataType="item.type">
                        <img :src="item.srcImage" :alt="item.srcAlt">
                    </a>
                    <h3>{{ item.projectTitle }}</h3>
                </div>
            </div>

            <a href="#" @click.prevent="perPage += 2" :class="{ 'hidden': (results.length == loadMoreData.length) }">load
                more projects</a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            filterValue: '',
            perPage: 2,
        }
    },

    methods: {
        filterTabsHandler(event) {
            document.querySelectorAll('.filter-tabs a').forEach(item => item.classList.remove("active"))
            this.filterValue = event.target.attributes[1].value;
            this.$store.dispatch('homepage/homepagePortofolio/filterHandler', this.filterValue)
            event.target.classList.add("active")
        },
    },


    computed: {
        ...mapGetters({
            headingSection: "homepage/homepagePortofolio/getHeadingSection",
            filterTabs: "homepage/homepagePortofolio/getFilterTabs",
            results: "homepage/homepagePortofolio/getResults",
        }),

        loadMoreData: function () {
            return this.results.slice(0, this.perPage)
        },

    },
}
</script>
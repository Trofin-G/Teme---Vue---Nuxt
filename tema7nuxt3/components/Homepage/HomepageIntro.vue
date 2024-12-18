<template>
    <div id="home" class="intro">
        <div class="container">
            <h1>{{ sectionContent.sectionText }}</h1>
            <a :href="sectionContent.buttonUrl" v-scroll-to="sectionContent.buttonUrl">{{ sectionContent.buttonText }}</a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            sectionContent: "homepage/homepageIntro/getSectionContent",
        })
    },
}
</script>
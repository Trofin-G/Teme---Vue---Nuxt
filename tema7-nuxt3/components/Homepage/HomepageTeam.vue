<template>
    <div class="team">
        <div class="container">
            <h2>{{ headingSection.sectionTitle }}</h2>
            <h4>{{ headingSection.sectionDescription }}</h4>
            <div class="team-list">
                <div class="team-item" v-for="item in teamListItems">
                    <img :src="item.srcImage" :alt="item.srcAlt">
                    <h3>{{ item.fullName }}</h3>
                    <h5>{{ item.jobTitle }}</h5>
                    <p>{{ item.jobDescription }}</p>
                    <div class="social-links-list">
                        <a v-for="link in item.socialLinks" :href="link.url">
                            <img :src="link.srcImage" :alt="link.altImage">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            headingSection: "homepage/homepageTeam/getHeadingSection",
            teamListItems: "homepage/homepageTeam/getTeamListItems",
        })
    },
}
</script>

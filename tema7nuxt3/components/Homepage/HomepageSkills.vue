<template>
    <div class="skills">
        <div class="container">
            <h2>{{ headingSection.sectionTitle }}</h2>
            <h4>{{ headingSection.sectionDescription }}</h4>
            <div class="skills-list">
                <div class="skills-item" v-for="item in skillsListItems">
                    <img :src="item.srcImage" :alt="item.srcAlt">
                    <h3>{{ item.skillTitle }}</h3>
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
            headingSection: "homepage/homepageSkills/getHeadingSection",
            skillsListItems: "homepage/homepageSkills/getSkillsListItems",
        })
    },
}
</script>
<template>
    <div id="about" class="services">
        <div class="container">
            <h2>{{ headingSection.sectionTitle }}</h2>
            <h4>{{ headingSection.sectionDescription }}</h4>
            <div class="services-list">
                <div class="services-item" v-for="item in servicesListItems">
                    <img :src="item.srcImage" :alt="item.srcAlt">
                    <h3>{{ item.serviceTitle }}</h3>
                    <p>{{ item.serviceDescription }}</p>
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
            headingSection: "homepage/homepageServices/getHeadingSection",
            servicesListItems: "homepage/homepageServices/getServicesListItems",
        })
    },
}
</script>
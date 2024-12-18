<template>
    <div id="blog" class="testimonials">
        <div class="container">
            <h2>{{ headingSection.sectionTitle }}</h2>
            <h4>{{ headingSection.sectionDescription }}</h4>
            <div class="testimonials-list">
                <div class="testimonials-item" v-for="item in testimonialsListItems">
                    <img :src="item.srcImage" :alt="item.srcAlt">
                    <div class="testimonials-item-content">
                        <blockquote>{{ item.personQuote }}</blockquote>
                        <h3>{{ item.fullName }}</h3>
                        <h5>{{ item.jobTitle }}</h5>
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
            headingSection: "homepage/homepageTestimonials/getHeadingSection",
            testimonialsListItems: "homepage/homepageTestimonials/getTestimonialsListItems",
        })
    },
}
</script>
<template>
    <section class="about-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <img :src="aboutContent.srcImage" :alt="aboutContent.altImage">
                    <div v-html="aboutContent.description"></div>
                </div>
            </div>

            <div class="row">
                <div v-for="item in twoColumnRow" class="col-lg-6">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                </div>
            </div>

            <div class="row">
                <div v-for="item in threeColumnRow" class="col-lg-4 col-md-6">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                </div>
            </div>

            <div class="row">
                <div v-for="item in fourColumnRow" class="col-lg-3 col-md-6">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <ul class="social-icons">
                        <li v-for="item in socialLinks">
                            <a :href="item.urlLink">
                                <i :class="item.iconClass"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            aboutContent: "about/content/getAboutContent",
            twoColumnRow: "about/content/getTwoColumnRow",
            threeColumnRow: "about/content/getThreeColumnRow",
            fourColumnRow: "about/content/getFourColumnRow",
            socialLinks: "about/content/getSocialLinks",
        })
    },
}
</script>
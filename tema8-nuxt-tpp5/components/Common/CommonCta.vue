<template>
    <section class="call-to-action">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main-content">
                        <div class="row">
                            <div class="col-lg-8">
                                <span>{{ ctaContent.title }}</span>
                                <h4>{{ ctaContent.text }}</h4>
                            </div>
                            <div class="col-lg-4">
                                <div class="main-button">
                                    <a rel="nofollow" :href="ctaContent.urlLink" target="_parent">
                                        {{ ctaContent.textLink }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
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
            ctaContent: "common/cta/getCtaContent",
        })
    },
}
</script>
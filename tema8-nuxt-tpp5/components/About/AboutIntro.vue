<template>
    <div class="heading-page header-text">
        <section class="page-heading">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-content">
                            <h4>{{ aboutIntro.title }}</h4>
                            <h2>{{ aboutIntro.text }}</h2>
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
            aboutIntro: "about/intro/getAboutIntro",
        })
    },
}
</script>
<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="social-icons">
                        <li v-for="item in footerLinks"><a :href="item.urlLink">{{ item.textLink }}</a></li>
                    </ul>
                </div>
                <div class="col-lg-12">
                    <div class="copyright-text">
                        <p>{{ footerCopyright.copyrightText }}<a rel="nofollow" :href="footerCopyright.urlLink" target="_parent">{{ footerCopyright.textLink }}</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            footerLinks: "common/footer/getFooterLinks",
            footerCopyright: "common/footer/getFooterCopyright",
        })
    },
}
</script>
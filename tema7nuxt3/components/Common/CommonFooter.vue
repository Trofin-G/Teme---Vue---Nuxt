<template>
    <div class="page-footer">
        <div class="container">
            <ul>
                <li v-for="item in footerLinks"><a :href="item.url">{{ item.text }}</a></li>
            </ul>
        </div>
    </div>
</template>                                          
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            footerLinks: "common/footer/getFooterLinks",
        })
    },
}
</script>
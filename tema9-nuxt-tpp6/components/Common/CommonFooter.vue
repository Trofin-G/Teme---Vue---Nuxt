<template>
    <footer class="pp-footer">
        <div class="pp-container">
            <p>
                {{ footerContent.content }}
                <a :href="'mailto:' + footerContent.emailAddress"> {{ footerContent.emailAddress }}</a>
            </p>
        </div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            footerContent: "common/footer/getFooterContent",
        })
    },
}
</script>
<template>
    <div class="content">
        <div class="wrapper" v-for="item in cloneListMessages">
            <div class="head">
                <p class="hour">{{ item.date }}</p>
                <h4>{{ item.subject }}</h4>
                <p class="from">de la {{ item.from == undefined ? item.to : item.from }}</p>
            </div>
            <div class="body">
                <p v-html="item.message"></p>
            </div>
            <div class="cta">
                <NuxtLink to="/create-message" class="bt bt--transparent bt--icon">
                    <img src="../../assets/images/icons/reply.svg" alt="Edit" width="19" height="18">
                    Răspunde
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            cloneListMessages: "homepage/listMessages/getMessageDetails",
        }),
    },

    mounted() {
        this.$store.dispatch("homepage/listMessages/getMessageData", this.$route.params.details);
    }
}
</script>
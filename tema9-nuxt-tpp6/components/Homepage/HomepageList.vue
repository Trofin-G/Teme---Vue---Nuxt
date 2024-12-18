<template>
    <div class="content">
        <div class="wrapper">
            <p class="no-results d-none" >Nu a fost gasit niciun rezultat!</p>
            <div class="list list--inbox d-none" :class="{ 'd-block': recivedSentHandler == true }">
                <NuxtLink v-for="item in items" :to="`/details/${item.url}`" class="list__message"
                    :class="{ 'list__message--unread': item.read }">
                    <div class="inner">
                        <p class="from">{{ item.from }}</p>
                        <p class="subject">{{ item.subject }}</p>
                        <p class="date">{{ item.date }}</p>
                    </div>
                </NuxtLink>

                <HomepagePagination />
            </div>

            <div class="list list--sent d-none" :class="{ 'd-block': recivedSentHandler == false }">
                <NuxtLink v-for="item in itemsSent" :to="`/details/${item.url}`" class="list__message">
                    <div class="inner">
                        <p class="from">{{ item.from }}</p>
                        <p class="subject">{{ item.subject }}</p>
                        <p class="date">{{ item.date }}</p>
                    </div>
                </NuxtLink>

                <HomepagePagination />
            </div>
        </div>
    </div>
</template>

<script>
import HomepagePagination from './HomepagePagination.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        HomepagePagination
    },

    props: {
        items: Array,
        itemsSent: Array,
    },

    computed: {
        ...mapGetters({
            recivedSentHandler: "homepage/listMessages/getRecivedSentHandler",
        })
    },

}
</script>

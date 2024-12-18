<template>
    <div class="content">
        <div class="wrapper">
            <p v-if="items.length == 0" class="no-results">Nu a fost gasit niciun rezultat!</p>
            <div class="list list--inbox d-none" :class="{ 'd-block': recivedSentHandler == true }">
                <NuxtLink v-for="item in items" :key="item.id" :to="`/details/${item.url}`" class="list__message"
                    :class="{ 'list__message--unread': item.read }">
                    <div class="inner">
                        <p class="from">{{ item.from }}</p>
                        <p class="subject">{{ item.subject }}</p>
                        <p class="date">{{ item.date }}</p>
                    </div>
                </NuxtLink>

                <HomepagePagination v-if="items.length != 0" />
            </div>

            <div class="list list--sent d-none" :class="{ 'd-block': recivedSentHandler == false }">
                <NuxtLink v-for="item in itemsSent" :key="item.id" :to="`/details/${item.url}`" class="list__message">
                    <div class="inner">
                        <p class="from">{{ item.to }}</p>
                        <p class="subject">{{ item.subject }}</p>
                        <p class="date">{{ item.date }}</p>
                    </div>
                </NuxtLink>

                <HomepagePagination v-if="items.length != 0" />
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    props: {
        items: Array,
        itemsSent: Array,
    },

    computed: {
        ...mapGetters({
            recivedSentHandler: "homepage/listMessages/getRecivedSentHandler",
        }),
    },
}
</script>

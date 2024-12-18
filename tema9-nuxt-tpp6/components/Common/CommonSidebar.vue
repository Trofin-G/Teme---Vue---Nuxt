<template>
    <aside>
        <ul>
            <li>
                <NuxtLink to="/">
                    <input type="radio" name="messages" id="messages-inbox" value="list--inbox">
                    <label @click="redirectToMessages" for="messages-inbox">
                        <div class="icon">
                            <img src="../../assets/images/icons/message-inbox.svg" alt="Inbox" width="24" height="23">
                        </div>
                        <span class="status">Mesaje primite
                            <span v-if="messageUnread > 0">
                                ({{ messageUnread }})
                            </span>
                        </span>
                    </label>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">
                    <input type="radio" name="messages" id="messages-sent" value="list--sent">

                    <label @click="redirectToSentMessages" for="messages-sent">
                        <div class="icon">
                            <img src="../../assets/images/icons/message-sent.svg" alt="Sent" width="24" height="24">
                        </div>
                        <span class="status">Mesaje trimise</span>
                    </label>
                </NuxtLink>
            </li>
        </ul>
    </aside>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            receivedSentHandler: false,
        }
    },

    computed: {
        ...mapGetters({
            messageUnread: "homepage/listMessages/getMessageUnread",
        }),
    },

    methods: {
        redirectToMessages() {
            this.receivedSentHandler = true
            this.$store.dispatch('homepage/listMessages/sendRecivedSentHandler', this.receivedSentHandler)
        },

        redirectToSentMessages() {
            this.receivedSentHandler = false
            console.log('timise', this.receivedSentHandler);
            this.$store.dispatch('homepage/listMessages/sendRecivedSentHandler', this.receivedSentHandler)
        }
    },

}
</script>
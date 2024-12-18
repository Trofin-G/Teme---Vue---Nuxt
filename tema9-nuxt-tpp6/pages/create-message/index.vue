<template>
    <main>
        <div class="messages">
            <div class="messages__details">
                <div class="pp-container">
                    <NuxtLink to="/" class="back">Înapoi</NuxtLink>

                    <div class="page-intro">
                        <h1>Mesajele mele</h1>
                    </div>

                    <div class="page-content">
                        <CommonSidebar />
                        <CreateMessageForm />
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
export default {
    mounted() {
        this.$store.commit("homepage/listMessages/setMessageUnread")
    }
}
</script>
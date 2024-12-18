<template>
    <main>
        <div class="messages">
            <div class="messages__details">
                <div class="pp-container">
                    <NuxtLink to="/" class="back">Înapoi</NuxtLink>
                    <CommonToolsbar />

                    <div class="page-content">
                        <CommonSidebar />
                        <MessageDetailsContent />
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
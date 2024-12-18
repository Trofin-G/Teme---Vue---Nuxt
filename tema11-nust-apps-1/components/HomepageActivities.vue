<template>
    <div class="activites">

        <div class="activites-wrapper" :class="{ 'open': activitesOpen }">
            <div v-for="item in items" class="item">
                <div class="time">{{ item.time }}</div>
                <div class="text">{{ item.name }}</div>
                <div @click="editActivity(item.id)" class="edit"><img src="../assets/images/edit.png" alt="edit"></div>
                <div @click="deleteActivity(item.id)" class="delete"><img src="../assets/images/delete.png" alt="delete">
                </div>
            </div>

            <a href="#" @click.prevent="activitesHandler">Activites</a>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        items: Array,
    },

    data() {
        return {
            activitesOpen: false,
        }
    },

    methods: {
        activitesHandler() {
            this.activitesOpen = !this.activitesOpen;
        },

        deleteActivity(activityId) {
            this.$store.dispatch('homepage/deleteActivity', activityId);
        },

        editActivity(activityIdEdit) {
            this.$store.dispatch('homepage/editActivity', activityIdEdit);
        },
    },
}
</script>
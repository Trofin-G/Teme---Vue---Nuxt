<template>
    <div class="app">
        <div class="app-wrapper">
            <HomepageClock />
            <HomepageActivities :items="listActivities" />
            <HomepageModalFormEdit v-if="editMode" />
            <HomepageModalForm v-else />
            <HomepageModalActivity :dataItem="activityModal" :isOpenActivity="isOpenActivity" />

            <button class="add-button" @click="addClassOpen">Add</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    methods: {
        addClassOpen() {
            this.$store.dispatch('homepage/openModalForm', true)
        },
    },

    computed: {
        ...mapGetters({
            listActivities: "homepage/getNewActivity",
            activityModal: "homepage/getActivityModal",
            isOpenActivity: "homepage/getDeleteActivity",
            editMode: "homepage/getEditMode",
        }),
    },

    mounted() {
        this.$store.commit("homepage/setListActivities")
    }
}
</script>

<template>
    <div class="modal modalActivity" :class="{ 'is-active': isOpenActivity }">
        <div class="modal-content">
            <div v-for="item in dataItem" class="content">
                <span @click="close(item.id)" class="close">&times;</span>
                <h4>{{ item.name }} - {{ item.fullData.getDate() + '.' + (item.fullData.getMonth() + 1) +
                    '.' + item.fullData.getFullYear() }}</h4>
                <p>{{ item.description }}</p>
                <button @click="close(item.id)">Got it</button>
            </div>

        </div>
    </div>
</template>

<script>


export default {
    props: {
        dataItem: Array,
        isOpenActivity: Boolean
    },

    methods: {
        close(activityId) {
            this.$store.dispatch('homepage/deleteActivity', activityId, false)
        },
    },

}
</script>

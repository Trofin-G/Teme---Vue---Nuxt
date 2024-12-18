<template>
    <div class="modal" :class="{ 'is-active': isOpen }">
        <div class="modal-content">
            <span @click="close" class="close">&times;</span>
            <div class="content-wrapper">
                <p>Nume: {{ formData.name }}</p>
                <p>Email: {{ formData.email }}</p>
                <p>Message: {{ formData.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        isOpen: Boolean,
        formData: Object
    },

    methods: {
        close() {
            this.$emit('closeModal')
        },
    },
}
</script>
<template>
    <ModalWindow ref="modal" >
        <form class="app-form">
            <div class="form-control">
                <label class="label">Title</label>
                <input v-model="form.title" class="form-input" type="text">
            </div>
            <div class="form-control">
                <label class="label">Description</label>
                <textarea v-model="form.description" class="form-input" cols="30" rows="5"></textarea>
            </div>
            <div class="app-error">
                <div v-if="hasError" class="form-error">
                    {{ formError }}
                </div>
            </div>
            <button @click="submitForm" type="button" class="app-button is-primary">Confirm</button>
        </form>
    </ModalWindow>
</template>

<script>
import ModalWindow from '@/components/ModalWindow.vue'
export default {
    components: {
        ModalWindow
    },
    
    data() {
        return {
            form: {
                title: '',
                description: '',
            },
            formError: 'Form Error! Title needs to be longer that 8 characters and description longer that 10 characters!',
            hasError: false
        }
    },

    computed: {
        isFormValid() {
            return this.form.title.length >= 8 && this.form.description.length >= 10 ? true : false
        },
        modal(){
            return this.$refs.modal
        }
    },

    methods: {
        submitForm() {
            if (this.isFormValid) {
                this.formError = ''
                this.$emit('formSubmitted', { ...this.form })
                this.modal.close()
                this.resetForm()
            } else {
                // this.formError = 'Form Error! Title needs to be longer that 8 characters and description longer that 10 characters!'
                this.hasError = true
            }
        },
        resetForm() {
            this.form.title = ''
            this.form.description = ''
        }
    }
}
</script>

<style lang="scss">
.form-error{
    margin: 0 0 10px 0;
}
</style>
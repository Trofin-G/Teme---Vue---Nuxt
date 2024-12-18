<template>
    <div class="modal modalForm" :class="{ 'is-active': isOpenModalForm }">
        <div class="modal-content">
            <form @submit.prevent="submitForm" class="app-form" novalidate="true">
                <span @click="close" class="close">&times;</span>
                <h4>Add entry</h4>
                <div class="wrapper">
                    <div class="form-group group-half">
                        <input v-model="formData.name" @input="validName()" :class="{ 'error': isValidName }"
                            class="form__input input_name">

                        <p v-if="isValidName">{{ errorMessage.name }}</p>
                    </div>

                    <div class="form-group group-half">
                        <input v-model="formData.dataActivity" @input="validDataActivity"
                            :class="{ 'error': isValidDataActivity }" type="datetime-local" id="datePicker"
                            class="form__input input__datepicker" name="datePicker">
                        <p v-if="isValidDataActivity">{{ errorMessage.dataActivity }}</p>
                    </div>
                </div>

                <div class="form-description">
                    <textarea v-model="formData.description" @input="validDescription"
                        :class="{ 'error': isValidDescription }" class="form__input" cols="30" rows="2"></textarea>
                    <p v-if="isValidDescription">{{ errorMessage.description }}</p>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            formData: {
                id: '',
                name: '',
                description: '',
                dataActivity: '',
            },
            formErrors: [],
            errorMessage: {
                name: 'Eroare nume',
                description: 'Eroare descriere',
                dataActivity: 'Eroare data',
            },
            isValidName: false,
            isValidDescription: false,
            isValidDataActivity: false,
        }
    },

    computed: {
        ...mapGetters({
            listActivities: "homepage/getNewActivity",
            isOpenModalForm: "homepage/getModalFormState",
        }),
    },


    methods: {
        close() {
            this.$store.dispatch('homepage/closeModalForm', false)
        },

        validName() {
            let isValid = true;

            if (this.formData.name.length < 2 || this.formData.name.length > 10) {
                isValid = false;
                this.isValidName = true;
            } else {
                this.isValidName = false
            }
            return isValid
        },

        validDescription() {
            let isValid = true;

            if (this.formData.description.length < 2 || this.formData.description.length > 10) {
                isValid = false;
                this.isValidDescription = true;
            } else {
                this.isValidDescription = false
            }
            return isValid
        },

        validDataActivity() {
            let isValid = true;

            if (this.formData.dataActivity.length < 1) {
                isValid = false;
                this.isValidDataActivity = true;
            } else {
                this.isValidDataActivity = false
            }
            return isValid
        },

        submitForm() {
            this.formErrors = [];
            this.formData.id = Math.round(new Date().getTime() / 1000);

            if (!this.validName()) {
                this.formErrors.push(this.errorMessage.name)
                this.isValidName = true;
            }
            if (!this.validDescription()) {
                this.formErrors.push(this.errorMessage.description)
                this.isValidDescription = true;
            }
            if (!this.validDataActivity()) {
                this.formErrors.push(this.errorMessage.dataActivity)
                this.isValidDataActivity = true;
            }

            if (!this.formErrors.length) {
                console.log('submit!')
                this.$store.dispatch('homepage/newActivity', this.formData)

                this.close()
                this.formData.name = ''
                this.formData.id = ''
                this.formData.description = ''
                this.formData.dataActivity = ''
                return true
            }
        },
    },
}
</script>
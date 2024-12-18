<template>
    <div class="modal modalForm" :class="{ 'is-active': isOpenModalForm }">
        <div class="modal-content">
            <form class="app-form" @submit.prevent="submit">
                <span @click="close" class="close">&times;</span>
                <h4>Add entry</h4>
                <div class="wrapper">
                    <div class="form-group group-half">
                        <input class="form__input" v-model="$v.name.$model">

                        <div class="error" v-if="!$v.name.required && $v.name.$dirty">Nume obligatoriu</div>
                        <div class="error" v-if="!$v.name.minLength">Trebuie sa ai {{ $v.name.$params.minLength.min }}
                            sau mai multe caractere</div>
                        <div class="error" v-if="!$v.name.maxLength">Trebuie sa ai {{ $v.name.$params.maxLength.max }} sau
                            mai putine caractere</div>
                    </div>

                    <div class="form-group group-half">
                        <input v-model="$v.dataActivity.$model"
                            :class="{ 'input-error': !$v.dataActivity.required && $v.dataActivity.$dirty }"
                            type="datetime-local" id="datePicker" class="form__input input__datepicker" name="datePicker">

                        <div class="error" v-if="!$v.dataActivity.required && $v.dataActivity.$dirty">Data obligatorie</div>
                    </div>
                </div>

                <div class="form-description" :class="{ 'form-group--error': $v.description.$error }">
                    <textarea class="form__input" v-model="$v.description.$model" cols="30" rows="2"></textarea>

                </div>
                <div class="error" v-if="!$v.description.required && $v.name.$dirty">Descriere obligatorie</div>
                <div class="error" v-if="!$v.description.minLength">Trebuie sa ai {{
                    $v.description.$params.minLength.min }}
                    sau mai multe caractere</div>
                <div class="error" v-if="!$v.description.maxLength">Trebuie sa ai {{
                    $v.description.$params.maxLength.max }} sau mai putine caractere</div>

                <button type="submit">Add</button>
            </form>
        </div>
    </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { validationMixin } from 'vuelidate'
import { mapGetters } from 'vuex';
Vue.use(Vuelidate)

export default {
    mixins: [validationMixin],

    data() {
        return {
            name: 'test',
            dataActivity: '',
            description: '',

            formData: {
                id: '',
                name: '',
                dataActivity: '',
                description: '',
            },
        }
    },

    validations: {
        name: {
            required,
            minLength: minLength(1),
            maxLength: maxLength(25),
        },

        dataActivity: {
            required,
        },

        description: {
            required,
            minLength: minLength(1),
            maxLength: maxLength(400),
        },
    },

    computed: {
        ...mapGetters({
            listActivities: "homepage/getNewActivity",
            editMode: "homepage/getEditMode",
            isOpenModalForm: "homepage/getModalFormState",
            editedDataForm: "homepage/getEditedDataForm",
        }),
    },


    mounted() {
        this.$store.commit("homepage/setEditedDataForm")
        this.$nextTick(() => {
            this.dataFormEdit();
        });
    },

    methods: {
        close() {
            this.$store.dispatch('homepage/closeModalForm', false)
        },

        dataFormEdit() {
            this.name = this.editedDataForm.name;
            this.description = this.editedDataForm.description;
            this.dataActivity = this.editedDataForm.fullData;
        },

        submit() {
            this.$v.name.$touch()
            this.$v.dataActivity.$touch()
            this.$v.description.$touch()

            if (!this.$v.name.$invalid && !this.$v.description.$invalid && !this.$v.dataActivity.$invalid) {
                console.log('submit!')
                this.formData.id = Math.round(new Date().getTime() / 1000);
                this.formData.name = this.$v.name.$model
                this.formData.dataActivity = new Date(this.$v.dataActivity.$model);
                this.formData.description = this.$v.description.$model
                this.$store.dispatch('homepage/newActivity', this.formData)

                this.close()
                this.resetForm()
            } else {
                console.log('fail submit');
            }
        },

        resetForm() {
            this.$v.name.$model = ''
            this.$v.dataActivity.$model = ''
            this.$v.description.$model = ''
            this.formData.name = ''
            this.formData.dataActivity = ''
            this.formData.description = ''
            this.formData.id = ''
        }
    },


    watch: {
        activityToEdit() {
            this.editedDataForm ? this.dataFormEdit() : this.resetForm()
        }
    },
}
</script>
<template>
    <div id="contact" class="contact">
        <div class="container">
            <h2>{{ headingSection.sectionTitle }}</h2>
            <h4>{{ headingSection.sectionDescription }}</h4>

            <form id="contactForm" class="contactForm" @submit.prevent="submitHandler">
                <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                    <input class="form__input" v-model="$v.name.$model" :placeholder="sectionContent.formNamePlaceholder">
                    <div class="error" v-if="!$v.name.required && $v.name.$dirty">Nume obligatoriu</div>
                    <div class="error" v-if="!$v.name.nameRegex">Nume invalid</div>
                    <div class="error" v-else-if="!$v.name.minLength">Trebuie sa ai {{ $v.name.$params.minLength.min }}
                        sau mai multe caractere</div>
                    <div class="error" v-else-if="!$v.name.maxLength">Trebuie sa ai {{ $v.name.$params.maxLength.max }} sau mai
                        putine caractere</div>
                </div>

                <div class="form-group">
                    <input class="form__input" v-model="$v.email.$model" :placeholder="sectionContent.formEmailPlaceholder">
                    <div class="error" v-if="!$v.email.required && $v.email.$dirty">Email obligatoriu</div>
                    <div class="error" v-if="!$v.email.email">Email invalid</div>
                </div>

                <div class="form-group group-textarea" :class="{ 'form-group--error': $v.description.$error }">
                    <textarea class="form__input" v-model="$v.description.$model"
                        :placeholder="sectionContent.formDescriptionPlaceholder" />
                    <div class="error" v-if="!$v.description.required && $v.description.$dirty">Descriere obligatorie</div>
                    <div class="error" v-if="!$v.description.minLength">Trebuie sa ai {{
                        $v.description.$params.minLength.min }} sau mai multe caractere</div>
                    <div class="error" v-if="!$v.description.maxLength">Trebuie sa ai {{
                        $v.description.$params.maxLength.max }} sau mai putine caractere</div>
                </div>

                <button type="submit">{{ sectionContent.buttonText }}</button>
            </form>
        </div>

        <CommonSubmitModal :isOpen="isOpen" :formData="formData" @closeModal="close" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import { helpers } from 'vuelidate/lib/validators'
const nameRegex = helpers.regex('nameRegex', /^[a-zA-Z-\s]/)

export default {
    mixins: [validationMixin],
    data() {
        return {
            isOpen: false,
            name: '',
            email: '',
            description: '',
            formData: {
                name: '',
                email: '',
                description: '',
            }
        }
    },

    validations: {
        name: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(15),
            nameRegex
        },

        email: {
            required,
            email
        },

        description: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(50),
        },
    },

    methods: {
        close() {
            this.isOpen = false
        },

        submitHandler() {
            this.$v.name.$touch()
            this.$v.email.$touch()
            this.$v.description.$touch()

            if (!this.$v.name.$invalid && !this.$v.email.$invalid && !this.$v.description.$invalid) {
                this.isOpen = true
                this.formData.name = this.$v.name.$model
                this.formData.email = this.$v.email.$model
                this.formData.description = this.$v.description.$model
            } else {
                console.log('fail submit');
            }
        },
    },

    computed: {
        ...mapGetters({
            headingSection: "homepage/homepageContact/getHeadingSection",
            sectionContent: "homepage/homepageContact/getSectionContent",
        })
    },
}
</script>
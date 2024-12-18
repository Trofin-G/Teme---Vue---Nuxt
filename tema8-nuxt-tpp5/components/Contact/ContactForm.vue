<template>
    <div class="col-lg-8">
        <div class="sidebar-item contact-form">
            <div class="sidebar-heading">
                <h2>{{ dataForm.formText }}</h2>
            </div>
            <div class="content">
                <form @submit.prevent="submitHandler" id="contact" action="" method="post">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <fieldset>
                                <input v-model="$v.name.$model" :placeholder="dataForm.formNamePlaceholder" type="text"
                                    id="name">
                                <div class="error" v-if="!$v.name.required && $v.name.$dirty">Nume obligatoriu</div>
                                <div class="error" v-if="!$v.name.nameRegex">Nume invalid</div>
                                <div class="error" v-else-if="!$v.name.minLength">Trebuie sa ai {{
                                    $v.name.$params.minLength.min }}
                                    sau mai multe caractere</div>
                                <div class="error" v-else-if="!$v.name.maxLength">Trebuie sa ai {{
                                    $v.name.$params.maxLength.max }} sau mai
                                    putine caractere</div>
                            </fieldset>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <fieldset>
                                <input v-model="$v.email.$model" :placeholder="dataForm.formEmailPlaceholder" type="text"
                                    id="email">
                                <div class="error" v-if="!$v.email.required && $v.email.$dirty">Email obligatoriu</div>
                                <div class="error" v-if="!$v.email.email">Email invalid</div>
                            </fieldset>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <fieldset>
                                <input v-model="$v.subject.$model" :placeholder="dataForm.formSubjectPlaceholder"
                                    name="subject" type="text" id="subject">
                                <div class="error" v-if="!$v.subject.required && $v.subject.$dirty">Subiect obligatoriu
                                </div>
                                <div class="error" v-if="!$v.subject.nameRegex">Subiect invalid</div>
                                <div class="error" v-else-if="!$v.subject.minLength">Trebuie sa ai {{
                                    $v.subject.$params.minLength.min }}
                                    sau mai multe caractere</div>
                                <div class="error" v-else-if="!$v.subject.maxLength">Trebuie sa ai {{
                                    $v.subject.$params.maxLength.max }} sau mai
                                    putine caractere</div>
                            </fieldset>
                        </div>
                        <div class="col-lg-12">
                            <fieldset>
                                <textarea v-model="$v.description.$model" :placeholder="dataForm.formDescriptionPlaceholder"
                                    name="message" rows="6" id="message"></textarea>
                                <div class="error" v-if="!$v.description.required && $v.description.$dirty">Descriere
                                    obligatorie</div>
                                <div class="error" v-if="!$v.description.minLength">Trebuie sa ai {{
                                    $v.description.$params.minLength.min }} sau mai multe caractere</div>
                                <div class="error" v-if="!$v.description.maxLength">Trebuie sa ai {{
                                    $v.description.$params.maxLength.max }} sau mai putine caractere</div>
                            </fieldset>
                        </div>
                        <div class="col-lg-12">
                            <fieldset>
                                <button type="submit" id="form-submit" class="main-button">Send Message</button>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
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
            name: '',
            email: '',
            subject: '',
            description: '',
            formData: {
                name: '',
                email: '',
                subject: '',
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

        subject: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(20),
            nameRegex
        },

        description: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(50),
        },
    },

    methods: {
        submitHandler() {
            this.$v.name.$touch()
            this.$v.email.$touch()
            this.$v.subject.$touch()
            this.$v.description.$touch()

            if (!this.$v.name.$invalid && !this.$v.email.$invalid && !this.$v.subject.$invalid && !this.$v.description.$invalid) {
                this.formData.name = this.$v.name.$model
                this.formData.email = this.$v.email.$model
                this.formData.subject = this.$v.subject.$model
                this.formData.description = this.$v.description.$model
                console.log('succes submit', this.formData);

                setTimeout(() => {
                    this.$router.push('/')
                }, 500);
            } else {
                console.log('fail submit');
            }
        },
    },

    computed: {
        ...mapGetters({
            dataForm: "contact/form/getDataForm",
        })
    },
}
</script>
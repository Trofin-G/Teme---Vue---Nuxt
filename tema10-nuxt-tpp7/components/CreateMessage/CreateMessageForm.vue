<template>
    <div class="content">
        <div class="wrapper">
            <div class="body">
                <form @submit.prevent="submitHandler" class="bg-white">

                    <div class="group">
                        <!-- START:: To -->
                        <div class="input">
                            <label class="input__label" for="to">Către</label>
                            <input v-model="$v.to.$model" type="text" id="to" class="input__text" name="to">
                            <div class="error" v-if="!$v.to.required && $v.to.$dirty">Nume obligatoriu</div>
                            <div class="error" v-if="!$v.to.nameRegex">Nume invalid</div>
                            <div class="error" v-else-if="!$v.to.minLength">Trebuie sa ai {{
                                $v.to.$params.minLength.min }}
                                sau mai multe caractere</div>
                            <div class="error" v-else-if="!$v.to.maxLength">Trebuie sa ai {{
                                $v.to.$params.maxLength.max }} sau mai
                                putine caractere</div>
                        </div>
                        <!-- END:: To -->

                        <!-- START:: Subject -->
                        <div class="input">
                            <label class="input__label" for="subject">Subiect</label>
                            <input v-model="$v.subject.$model" type="text" id="subject" class="input__text" name="subject">
                            <div class="error" v-if="!$v.subject.required && $v.subject.$dirty">Subiect obligatoriu
                            </div>
                            <div class="error" v-else-if="!$v.subject.minLength">Trebuie sa ai {{
                                $v.subject.$params.minLength.min }}
                                sau mai multe caractere</div>
                            <div class="error" v-else-if="!$v.subject.maxLength">Trebuie sa ai {{
                                $v.subject.$params.maxLength.max }} sau mai
                                putine caractere</div>
                        </div>
                        <!-- END:: Subject -->

                        <!-- START:: Message -->
                        <div class="input">
                            <label class="input__label" for="message">Mesaj</label>
                            <textarea v-model="$v.message.$model" name="message" id="message"
                                class="input__textarea"></textarea>
                            <div class="error" v-if="!$v.message.required && $v.message.$dirty">Descriere
                                obligatorie</div>
                            <div class="error" v-if="!$v.message.minLength">Trebuie sa ai {{
                                $v.message.$params.minLength.min }} sau mai multe caractere</div>
                            <div class="error" v-if="!$v.message.maxLength">Trebuie sa ai {{
                                $v.message.$params.maxLength.max }} sau mai putine caractere</div>
                        </div>
                        <!-- END:: Message -->

                        <!-- START:: submit -->
                        <div class="input input--sm">
                            <input type="submit" class="input__submit" value="Trimite mesaj">
                        </div>
                        <!-- END:: submit -->
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import { helpers } from 'vuelidate/lib/validators'
const nameRegex = helpers.regex('nameRegex', /^[a-zA-Z-\s]/)

export default {
    mixins: [validationMixin],
    
    data() {
        return {
            to: '',
            subject: '',
            message: '',
            formData: {
                id: '0',
                url: '0',
                to: '',
                subject: '',
                message: '',
                date: '14:45'
            }
        }
    },

    validations: {
        to: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(15),
            nameRegex
        },

        subject: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(20),
        },

        message: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(50),
        },
    },

    methods: {
        submitHandler() {
            this.$v.to.$touch()
            this.$v.subject.$touch()
            this.$v.message.$touch()

            if (!this.$v.to.$invalid && !this.$v.subject.$invalid && !this.$v.message.$invalid) {
                this.formData.to = this.$v.to.$model
                this.formData.subject = this.$v.subject.$model
                this.formData.message = this.$v.message.$model
                this.$store.dispatch('homepage/listMessages/sendFormData', this.formData)
                console.log('succes submit', this.formData);
            } else {
                console.log('fail submit');
            }
        },
    },
}
</script>
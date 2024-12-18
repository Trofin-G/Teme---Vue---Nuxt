<template>
    <div class="content">
        <div class="wrapper">
            <div class="body">
                <form @submit.prevent="submitHandler" class="bg-white">

                    <div class="group">
                        <!-- START:: To -->
                        <div class="input">
                            <label class="input__label" for="to">Către</label>
                            <input v-model="$v.name.$model" type="text" id="to" class="input__text" name="to">
                            <div class="error" v-if="!$v.name.required && $v.name.$dirty">Nume obligatoriu</div>
                            <div class="error" v-if="!$v.name.nameRegex">Nume invalid</div>
                            <div class="error" v-else-if="!$v.name.minLength">Trebuie sa ai {{
                                $v.name.$params.minLength.min }}
                                sau mai multe caractere</div>
                            <div class="error" v-else-if="!$v.name.maxLength">Trebuie sa ai {{
                                $v.name.$params.maxLength.max }} sau mai
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
            subject: '',
            message: '',
            formData: {
                name: '',
                subject: '',
                message: '',
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
            this.$v.name.$touch()
            this.$v.subject.$touch()
            this.$v.message.$touch()

            if (!this.$v.name.$invalid && !this.$v.subject.$invalid && !this.$v.message.$invalid) {
                this.formData.name = this.$v.name.$model
                this.formData.subject = this.$v.subject.$model
                this.formData.message = this.$v.message.$model
                console.log('succes submit', this.formData);
            } else {
                console.log('fail submit');
            }
        },
    },
}
</script>
<template>
    <div class="col-lg-12">
        <div class="sidebar-item submit-comment">
            <div class="sidebar-heading">
                <h2>Your comment</h2>
            </div>
            <div class="content">
                <form id="comment" @submit.prevent="submitForm" novalidate="true">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <fieldset>
                                <p v-if="isValidName">{{ errorMessage.name }}</p>
                                <input v-model="form.name" @input="validName" :class="{ 'error': isValidName }" name="name"
                                    type="text" id="name" placeholder="Your name" required="">

                            </fieldset>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <fieldset>
                                <input v-model="form.email" name="email" type="text" id="email" placeholder="Your email"
                                    required="">
                            </fieldset>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <fieldset>
                                <input v-model="form.subject" name="subject" type="text" id="subject" placeholder="Subject">
                            </fieldset>
                        </div>
                        <div class="col-lg-12">
                            <fieldset>
                                <textarea v-model="form.message" name="message" rows="6" id="message"
                                    placeholder="Type your comment" required=""></textarea>
                            </fieldset>
                        </div>
                        <div class="col-lg-12">
                            <fieldset>
                                <button type="submit" id="form-submit"
                                    class="main-button">Submit</button>
                            </fieldset>
                        </div>
                        <div class="app-error">
                            <div v-if="hasError" class="form-error">
                                {{ formError }}
                            </div>
                            <div v-if="hasSucces" class="form-succes">
                                {{ formSucces }}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
            formError: 'Form Error!',
            hasError: false,
            formSucces: 'Message successfully sent!',
            hasSucces: false,
            formErrors: [],
            errorMessage: {
                name: 'Eroare nume',
                email: 'Eroare email',
                subject: 'Eroare subject',
                message: 'Eroare mesaj',
            },
            isValidName: false,
            isValidEmail: false,
            isValidSubject: false,
            isValidMessage: false,
        }
    },

    computed: {
        // isNameValid() {
        //     return this.form.name.length >= 2 ? true : false
        // },

        // isEmailValid() {
        //     return this.form.email.length >= 2 ? true : false
        // },

        // isSubjectValid() {
        //     return this.form.subject.length >= 2 ? true : false
        // },

        // isMessageValid() {
        //     return this.form.message.length >= 2 ? true : false
        // },

        // isFormValid() {
        //     // return this.isNameValid && this.isEmailValid && this.isSubjectValid && this.isMessageValid

        // },
    },

    methods: {
        validName() {
            let isValid = true;
            let regex = /^[a-zA-Z]+$/g;

            if (this.form.name.length < 2 || this.form.name.length > 10 || !regex.test(this.form.name)) {
                isValid = false;
                this.isValidName = true;
            } else {
                this.isValidName = false
            }
            return isValid
        },

        submitForm() {
            this.formErrors = [];
            if (!this.validName()) {
                this.formErrors.push(this.errorMessage.name)
                this.isValidName = true;
            }

            if (!this.formErrors.length) {
                this.hasSucces = true
                return true
            }

            // if (this.isFormValid) {
            // this.resetForm()
            // this.hasError = false
            // } else {
            // this.hasError = true
            // this.hasSucces = false
            // }
        },

        resetForm() {
            this.form.name = ''
            this.form.email = ''
            this.form.subject = ''
            this.form.message = ''
        }
    },
}
</script>
<template>
    <section class="step-one">
        <h2>Tip contract</h2>

        <form @submit.prevent="stepOneHandler">
            <div class="group">
                <!-- START:: Input type number -->
                <div class="input">
                    <label class="input__label" for="cui">CUI</label>
                    <input v-model="$v.cui.$model" type="number" id="cui" name="cui" class="input__number"
                        :class="{ 'input-error': !$v.cui.required && $v.cui.$dirty || !$v.cui.digits || !$v.cui.minLength || !$v.cui.maxLength }">
                </div>
                <!-- END:: Input type number -->
            </div>

            <p>Tip contract</p>

            <div class="group">
                <div v-for="input in inputs" class="input input--checkbox input--half">
                    <input @change="selectCheckbox($event)" type="checkbox" class="input__checkbox"
                        :class="{ 'input-error': isValidCheckbox == false }" :name="`checkbox-${input.id}`"
                        :value="input.value" :id="`checkbox-${input.id}`">
                    <label :for="`checkbox-${input.id}`">{{ input.value }}</label>
                </div>
            </div>

            <div class="submit-wrapper">
                <div class="group">
                    <!-- START:: Input type submit -->
                    <div class="input input--with-icon input--submit-md">
                        <input type="submit" class="input__submit input__submit--md" value="Pasul următor">
                    </div>
                    <!-- END:: Input type submit -->
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import { required, minLength, maxLength, helpers, numeric } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

let digits = helpers.regex('digits', /^[0-9]{6}$/g);

export default {
    mixins: [validationMixin],

    props: {
        inputs: Array,
    },

    data() {
        return {
            cui: '',
            stepOneForm: {
                cui: '',
                checkboxSelected: [],
            },

            isValidCheckbox: true,
        }
    },

    validations: {
        cui: {
            required,
            numeric,
            minLength: minLength(6),
            maxLength: maxLength(6),
            digits: digits
        },
    },

    methods: {
        selectCheckbox(e) {
            if (e.target.checked) {
                this.stepOneForm.checkboxSelected = e.target.value
                this.isValidCheckbox = true
            } else {
                this.stepOneForm.checkboxSelected = null
                this.isValidCheckbox = false
            }
        },

        stepOneHandler() {
            this.$v.cui.$touch()

            if (this.stepOneForm.checkboxSelected != null || this.stepOneForm.checkboxSelected.length != 0) {
                this.isValidCheckbox = false
            } else {
                this.isValidCheckbox = true
            }

            if (!this.$v.cui.$invalid && (this.stepOneForm.checkboxSelected != null || this.stepOneForm.checkboxSelected.length != 0)) {
                this.stepOneForm.cui = this.$v.cui.$model

                this.$emit('stepOneForm', this.stepOneForm)

                console.log('succes submit form 1');
            } else {
                console.log('fail submit form 1');
            }
        },
    },

}
</script>
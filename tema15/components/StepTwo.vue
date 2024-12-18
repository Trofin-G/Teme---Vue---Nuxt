<template>
    <div class="step step-two">
        <div class="inner">
            <div class="step-wrapper">
                <h2>Pasul 2.</h2>
                <p>Alege placa de baze, carcasa si racirea carcasei.</p>
                <div class="content">
                    <form>
                        <p>Carcasa:</p>
                        <div v-for="item in data[0].case">
                            <div :class="{ 'active': item.caseName == form.case.caseName, 'error': formErrors.case === false && Object.keys(form.case).length === 0 }"
                                class="group group-case">
                                <input v-model="form.case" :value="item" name="radio-case" type="radio" :id="item.caseName"
                                    class="input-radio">

                                <label :for="item.caseName" class="label-radio">
                                    <p>{{ item.caseName }}</p>
                                    <p>Tip: {{ item.caseTypeSize }}</p>
                                    <p>Ventilatoare: {{ item.caseNumberFans }}</p>
                                    <p>Pret: {{ item.casePrice }} $</p>
                                </label>
                            </div>
                        </div>

                        <p>Racire:</p>
                        <div v-for="item in data[0].cooling">
                            <div :class="{ 'active': item.coolingName == form.cooling.coolingName, 'error': formErrors.cooling === false && Object.keys(form.cooling).length === 0 }"
                                class="group group-cooling">
                                <input v-model="form.cooling" :value="item" name="radio-cooling" type="radio"
                                    :id="item.coolingName" class="input-radio">

                                <label :for="item.coolingName" class="label-radio">
                                    <p>{{ item.coolingName }}</p>
                                    <p>Tip: {{ item.coolingType }}</p>
                                    <p>Culoare led: {{ item.coolingLedColor }}</p>
                                    <p>Pret: {{ item.coolingPrice }} $</p>
                                </label>
                            </div>
                        </div>

                        <p>Placa de baza:</p>
                        <div v-for="item in data[0].motherboard">
                            <div :class="{ 'active': item.motherboardName == form.motherboard.motherboardName, 'error': formErrors.motherboard === false && Object.keys(form.motherboard).length === 0 }"
                                class="group group-motherboard">
                                <input v-model="form.motherboard" :value="item" name="radio-motherboard" type="radio"
                                    :id="item.motherboardName" class="input-radio">

                                <label :for="item.motherboardName" class="label-radio">
                                    <p>{{ item.motherboardName }}</p>
                                    <p>Tip: {{ item.motherboardType }}</p>
                                    <p>Pret: {{ item.motherboardPrice }} $</p>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="steps-btns">
                    <a @click.prevent="prevStep(-1)" class="prevBtn" href="#">Pasul anterior</a>
                    <a @click.prevent="nextStep(1)" class="nextBtn" href="#">Pasul urmator</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        data: Array,
    },

    data() {
        return {
            form: {
                step: true,
                case: {},
                cooling: {},
                motherboard: {},
            },
            formErrors: {
                case: null,
                cooling: null,
                motherboard: null,
            },
        }
    },


    methods: {
        validFromStep() {
            let isValid = true;

            if (Object.keys(this.form.case).length !== 0 &&
                Object.keys(this.form.cooling).length !== 0 &&
                Object.keys(this.form.motherboard).length !== 0) {
                isValid = false;
                this.formErrors.case = true;
                this.formErrors.cooling = true;
                this.formErrors.motherboard = true;
            } else {
                this.formErrors.case = false;
                this.formErrors.cooling = false;
                this.formErrors.motherboard = false;
            }
            return isValid
        },

        nextStep(stepValue) {
            if (!this.validFromStep()) {
                this.formErrors.case = true;
                this.formErrors.cooling = true;
                this.formErrors.motherboard = true;

                this.$store.dispatch('formStepTwo', this.form)
                this.$emit("nextStep", stepValue);
            }
        },

        prevStep(stepValue) {
            let resetData = {
                step: false,
            };
            this.$emit('prevStep', stepValue);
            this.$store.dispatch('formStepOne', resetData)

            this.form.case = {};
            this.form.cooling = {};
            this.form.motherboard = {};
        },
    },
}
</script>
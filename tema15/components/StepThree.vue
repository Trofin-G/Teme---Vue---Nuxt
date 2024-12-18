<template>
    <div class="step step-three">
        <div class="inner">
            <div class="step-wrapper">
                <h2>Pasul 3.</h2>
                <p>Alege sursa de alimentare.</p>

                <div class="content">
                    <form>
                        <p>Sursa de alimentare:</p>
                        <div v-for="item in data[0].sources">
                            <div :class="{ 'active': item.sourceName == form.source.sourceName, 'error': formErrors.source === false && Object.keys(form.source).length === 0 }"
                                class="group group-sources">
                                <input v-model="form.source" :value="item" name="radio-source" type="radio"
                                    :id="item.sourceName" class="input-radio">

                                <label :for="item.sourceName" class="label-radio">
                                    <p>{{ item.sourceName }}</p>
                                    <p>Tip: {{ item.sourceType }}</p>
                                    <p>Putere: {{ item.soursePower }}</p>
                                    <p>Price: {{ item.sourcePrice }} $</p>
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
                source: {},
            },

            formErrors: {
                source: null,
            }
        }
    },


    methods: {
        validFromStep() {
            let isValid = true;

            if (Object.keys(this.form.source).length !== 0) {
                isValid = false;
                this.formErrors.source = true;
            } else {
                this.formErrors.source = false;
            }
            return isValid
        },

        nextStep(stepValue) {
            if (!this.validFromStep()) {
                this.formErrors.source = true;

                this.$store.dispatch('formStepThree', this.form)
                this.$emit("nextStep", stepValue);
            }
        },

        prevStep(stepValue) {
            let resetData = {
                step: false,
            };
            this.$emit('prevStep', stepValue)
            this.$store.dispatch('formStepTwo', resetData)

            this.form.source = {};
        },
    },
}
</script>
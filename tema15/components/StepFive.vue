<template>
    <div class="step step-five">
        <div class="inner">
            <div class="step-wrapper">
                <h2>Pasul 5.</h2>
                <p>Alege memoria ram si memoria hdd/ssd.</p>
                <div class="content">
                    <form>
                        <p>Memorie ram:</p>
                        <div v-for="item in data[0].memoryRam">
                            <div :class="{ 'active': item.memoryRamName == form.memoryRam.memoryRamName, 'error': formErrors.memoryRam === false && Object.keys(form.memoryRam).length === 0 }"
                                class="group group-memoryRam">
                                <input v-model="form.memoryRam" :value="item" name="radio-memoryRam" type="radio"
                                    :id="item.memoryRamName" class="input-radio">

                                <label :for="item.memoryRamName" class="label-radio">
                                    <p>{{ item.memoryRamName }}</p>
                                    <p>Tip: {{ item.memoryRamType }}</p>
                                    <p>Dimensiune: {{ item.memoryRamSpace }}</p>
                                    <p>Pret: {{ item.memoryRamPrice }} $</p>
                                </label>
                            </div>
                        </div>

                        <p>Memorie de stocare:</p>
                        <div v-for="item in data[0].storageMemory">
                            <div :class="{ 'active': item.storageMemoryName == form.storageMemory.storageMemoryName, 'error': formErrors.storageMemory === false && Object.keys(form.storageMemory).length === 0 }"
                                class="group group-storageMemory">
                                <input v-model="form.storageMemory" :value="item" name="radio-storageMemory" type="radio"
                                    :id="item.storageMemoryName" class="input-radio">

                                <label :for="item.storageMemoryName" class="label-radio">
                                    <p>{{ item.storageMemoryName }}</p>
                                    <p>Tip: {{ item.storageMemoryType }}</p>
                                    <p>Viteza: {{ item.storageMemorySpeed }}</p>
                                    <p>Capacitate: {{ item.storageMemoryCapacity }}</p>
                                    <p>Price: {{ item.storageMemoryPrice }} $</p>
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
                memoryRam: {},
                storageMemory: {},
            },
            formErrors: {
                memoryRam: null,
                storageMemory: null,
            }
        }
    },


    methods: {
        validFromStep() {
            let isValid = true;

            if (Object.keys(this.form.memoryRam).length !== 0 &&
                Object.keys(this.form.storageMemory).length !== 0) {
                isValid = false;
                this.formErrors.memoryRam = true;
                this.formErrors.storageMemory = true;
            } else {
                this.formErrors.memoryRam = false;
                this.formErrors.storageMemory = false;
            }
            return isValid
        },

        nextStep(stepValue) {
            if (!this.validFromStep()) {
                this.formErrors.memoryRam = true;
                this.formErrors.storageMemory = true;

                this.$store.dispatch('formStepFive', this.form)
                this.$emit("nextStep", stepValue);
            }
        },

        prevStep(stepValue) {
            let resetData = {
                step: false,
            };
            this.$emit('prevStep', stepValue)
            this.$store.dispatch('formStepFour', resetData)

            this.form.memoryRam = {};
            this.form.storageMemory = {};
        },
    },
}
</script>
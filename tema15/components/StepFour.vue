<template>
    <div class="step step-four">
        <div class="inner">
            <div class="step-wrapper">
                <h2>Pasul 4.</h2>
                <p>Alege placa video si procesorul.</p>

                <div class="tools">
                    <div class="group">
                        <!-- START:: Input type select -->
                        <div class="input">
                            <label class="input-label">Filtreaza după:</label>
                            <select @change="stepFourFilters($event)" name="stepFourFilters" id="stepFourFilters"
                                class="input-select" title="Filtreaza dupa:">
                                <option value="all" selected>Toate</option>
                                <option value="videoCard">Placa video</option>
                                <option value="processor">Procesor</option>
                            </select>
                        </div>
                        <!-- END:: Input type select -->
                    </div>
                </div>
                
                <div class="content">
                    <p class="messageError" v-if="formErrors.message === false">Te rog sa alegi placa video si procesorul.</p>
                    <form>
                        <p v-if="Object.keys(data.videoCard).length !== 0">Placa video:</p>
                        <div v-for="item in data.videoCard">
                            <div :class="{ 'active': item.videoCardName == form.videoCard.videoCardName, 'error': formErrors.videoCard === false && Object.keys(form.videoCard).length === 0 }"
                                class="group group-videoCard">
                                <input v-model="form.videoCard" :value="item" name="radio-videoCard" type="radio"
                                    :id="item.videoCardName" class="input-radio">

                                <label :for="item.videoCardName" class="label-radio">
                                    <p>{{ item.videoCardName }}</p>
                                    <p>Tip: {{ item.videoCardType }}</p>
                                    <p>Memorie: {{ item.videoCardMemory }}</p>
                                    <p>BUS: {{ item.videoCardBit }}</p>
                                    <p>Pret: {{ item.videoCardPrice }} $</p>
                                </label>
                            </div>
                        </div>
                        <p v-if="Object.keys(data.processor).length !== 0">Procesor</p>
                        <div v-for="item in data.processor">
                            <div :class="{ 'active': item.processorName == form.processor.processorName, 'error': formErrors.processor === false && Object.keys(form.processor).length === 0 }"
                                class="group group-processor">
                                <input v-model="form.processor" :value="item" name="radio-processor" type="radio"
                                    :id="item.processorName" class="input-radio">

                                <label :for="item.processorName" class="label-radio">
                                    <p>{{ item.processorName }}</p>
                                    <p>Tip: {{ item.processorType }}</p>
                                    <p>Viteza: {{ item.processorSpeed }}</p>
                                    <p>Pret: {{ item.processorPrice }} $</p>
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
        data: Object,
    },

    data() {
        return {
            form: {
                step: true,
                videoCard: {},
                processor: {},
            },
            formErrors: {
                message: null,
                videoCard: null,
                processor: null,
            },
        }
    },


    methods: {
        stepFourFilters(e) {
            this.$store.dispatch('stepFourFilters', e.currentTarget.value)
        },

        validFromStep() {
            let isValid = true;

            if (Object.keys(this.form.videoCard).length !== 0 &&
                Object.keys(this.form.processor).length !== 0) {
                isValid = false;
                this.formErrors.videoCard = true;
                this.formErrors.processor = true;
                this.formErrors.message = true;
            } else {
                this.formErrors.videoCard = false;
                this.formErrors.processor = false;
                this.formErrors.message = false;
            }
            return isValid
        },

        nextStep(stepValue) {
            if (!this.validFromStep()) {
                this.formErrors.videoCard = true;
                this.formErrors.processor = true;
                this.formErrors.message = true;
                
                this.$store.dispatch('formStepFour', this.form)
                this.$emit("nextStep", stepValue);
            }
        },

        prevStep(stepValue) {
            let resetData = {
                step: false,
            };
            this.$emit('prevStep', stepValue)
            this.$store.dispatch('formStepThree', resetData)

            this.form.videoCard = {};
            this.form.processor = {};
        },
    },

    mounted() {
        this.$store.commit("stepFourFilters")
    }
}
</script>
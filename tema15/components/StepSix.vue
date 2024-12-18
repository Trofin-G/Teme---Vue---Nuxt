<template>
    <div class="step step-six">
        <div class="inner">
            <div class="step-wrapper">
                <h2>Pasul 6.</h2>
                <p>Recomandari extra.</p>

                <div class="tools">
                    <div class="group">
                        <!-- START:: Input type select -->
                        <div class="input">
                            <label class="input-label">Filtreaza după:</label>
                            <select @change="stepSixFilters($event)" name="stepSixFilters" id="stepSixFilters"
                                class="input-select" title="Filtreaza dupa:">
                                <option value="all" selected>Toate</option>
                                <option value="keyboard">Tastatura</option>
                                <option value="mouse">Mouse</option>
                                <option value="speakers">Boxe</option>
                                <option value="mousepad">Mousepad</option>
                            </select>
                        </div>
                        <!-- END:: Input type select -->
                    </div>
                </div>
                <div class="content">
                    <form>
                        <p v-if="Object.keys(data.keyboard).length !== 0">Tastatura:</p>
                        <div v-for="item in data.keyboard">
                            <div :class="{ 'active': item.keyboardName == form.keyboard.keyboardName }"
                                class="group group-keyboard">
                                <input v-model="form.keyboard" :value="item" name="radio-keyboard" type="radio"
                                    :id="item.keyboardName" class="input-radio">

                                <label :for="item.keyboardName" class="label-radio">
                                    <p>{{ item.keyboardName }}</p>
                                    <p>Tip: {{ item.keyboardType }}</p>
                                    <p>Pret: {{ item.keyboardPrice }} $</p>
                                </label>
                            </div>
                        </div>

                        <p v-if="Object.keys(data.mouse).length !== 0">Mouse:</p>
                        <div v-for="item in data.mouse">
                            <div :class="{ 'active': item.mouseName == form.mouse.mouseName }" class="group group-keyboard">
                                <input v-model="form.mouse" :value="item" name="radio-mouse" type="radio"
                                    :id="item.mouseName" class="input-radio">

                                <label :for="item.mouseName" class="label-radio">
                                    <p>{{ item.mouseName }}</p>
                                    <p>Tip: {{ item.mouseType }}</p>
                                    <p>Pret: {{ item.mousePrice }} $</p>
                                </label>
                            </div>
                        </div>

                        <p v-if="Object.keys(data.speakers).length !== 0">Boxe:</p>
                        <div v-for="item in data.speakers">
                            <div :class="{ 'active': item.speakersName == form.speakers.speakersName }"
                                class="group group-speakers">
                                <input v-model="form.speakers" :value="item" name="radio-speakers" type="radio"
                                    :id="item.speakersName" class="input-radio">

                                <label :for="item.speakersName" class="label-radio">
                                    <p>{{ item.speakersName }}</p>
                                    <p>Tip: {{ item.speakersType }}</p>
                                    <p>Pret: {{ item.speakersPrice }} $</p>
                                </label>
                            </div>
                        </div>

                        <p v-if="Object.keys(data.mousepad).length !== 0">Mousepad:</p>
                        <div v-for="item in data.mousepad">
                            <div :class="{ 'active': item.mousepadName == form.mousepad.mousepadName }"
                                class="group group-mousepad">
                                <input v-model="form.mousepad" :value="item" name="radio-mousepad" type="radio"
                                    :id="item.mousepadName" class="input-radio">

                                <label :for="item.mousepadName" class="label-radio">
                                    <p>{{ item.mousepadName }}</p>
                                    <p>Dimensiune: {{ item.mousepadDimension }}</p>
                                    <p>Pret: {{ item.mousepadPrice }} $</p>
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
                keyboard: { keyboardPrice: 0 },
                mouse: { mousePrice: 0 },
                speakers: { speakersPrice: 0 },
                mousepad: { mousepadPrice: 0 },
            },
        }
    },


    methods: {
        stepSixFilters(e) {
            this.$store.dispatch('stepSixFilters', e.currentTarget.value)
        },

        nextStep(stepValue) {
            this.$store.dispatch('formStepSix', this.form)
            this.$emit("nextStep", stepValue);
        },

        prevStep(stepValue) {
            let resetData = {
                step: false,
            };
            this.$emit('prevStep', stepValue)
            this.$store.dispatch('formStepFive', resetData)

            this.keyboard = { keyboardPrice: 0 };
            this.mouse = { mousePrice: 0 };
            this.speakers = { speakersPrice: 0 };
            this.mousepad = { mousepadPrice: 0 };

        },
    },

    mounted() {
        this.$store.commit("stepSixFilters")
    }
}
</script>
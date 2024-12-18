<template>
    <div class="end-page">

        <div class="inner">
            <div class="end-page-wrapper">
                <h2>End Page</h2>
                <p>Configuratia si pretul final al PC-ului.</p>
                <div class="content">
                    <h4>Componente principale:</h4>
                    <div class="item">
                        <p>Brand: {{ data.brand }}</p>
                    </div>
                    <div class="item">
                        <p>Model: {{ data.model.name }}</p>
                        <p>{{ data.model.price }} $</p>
                    </div>
                    <div class="item">
                        <p>Carcasa: {{ data.case.caseName }}</p>
                        <p>{{ data.case.casePrice }} $</p>
                    </div>
                    <div class="item">
                        <p>Racire: {{ data.cooling.coolingName }}</p>
                        <p>{{ data.cooling.coolingPrice }} $</p>
                    </div>
                    <div class="item">
                        <p>Placa de baze: {{ data.motherboard.motherboardName }}</p>
                        <p>{{ data.motherboard.motherboardPrice }} $</p>
                    </div>

                    <h4>Componente secundare:</h4>
                    <div class="item">
                        <p>Sursa: {{ data.source.sourceName }}</p>
                        <p>{{ data.source.sourcePrice }} $</p>
                    </div>
                    <div class="item">
                        <p>Placa video: {{ data.videoCard.videoCardName }}</p>
                        <p>{{ data.videoCard.videoCardPrice }} $</p>
                    </div>
                    <div class="item">
                        <p>Procesor: {{ data.processor.processorName }}</p>
                        <p>{{ data.processor.processorPrice }} $</p>
                    </div>
                    <div class="item">
                        <p>Memorie RAM: {{ data.memoryRam.memoryRamName }}</p>
                        <p>{{ data.memoryRam.memoryRamPrice }} $</p>
                    </div>
                    <div class="item">
                        <p>Memorie de stocare: {{ data.storageMemory.storageMemoryName }}</p>
                        <p>{{ data.storageMemory.storageMemoryPrice }} $</p>
                    </div>
                    <h4
                        v-if="data.extraComponents.keyboard.keyboardPrice + data.extraComponents.mouse.mousePrice +
                            data.extraComponents.speakers.speakersPrice + data.extraComponents.mousepad.mousePrice !== 0">
                        Componente extra/Accesorii:</h4>
                    <div v-if="data.extraComponents.keyboard.keyboardPrice !== 0" class="item">
                        <p>Tastatura: {{ data.extraComponents.keyboard.keyboardName }}</p>
                        <p>{{ data.extraComponents.keyboard.keyboardPrice }} $</p>
                    </div>
                    <div v-if="data.extraComponents.mouse.mousePrice !== 0" class="item">
                        <p>Mouse: {{ data.extraComponents.mouse.mouseName }}</p>
                        <p>{{ data.extraComponents.mouse.mousePrice }} $</p>
                    </div>
                    <div v-if="data.extraComponents.speakers.speakersPrice !== 0" class="item">
                        <p>Boxe: {{ data.extraComponents.speakers.speakersName }}</p>
                        <p>{{ data.extraComponents.speakers.speakersPrice }} $</p>
                    </div>
                    <div v-if="data.extraComponents.mousepad.mousepadPrice !== 0" class="item">
                        <p>Mousepad: {{ data.extraComponents.mousepad.mousepadName }}</p>
                        <p>{{ data.extraComponents.mousepad.mousepadPrice }} $</p>
                    </div>
                    <div class="item finalStatus">
                        <p>Pret final:</p>
                        <p>{{ finalPrice.currentPrice }} $</p>
                    </div>
                </div>
                <div class="steps-btns">
                    <a @click.prevent="prevStep(-7)" class="prevBtn" href="#">Refaceti configurarea</a>
                    <a @click.prevent="nextStep" class="nextBtn" href="#">Plasati comanda!</a>
                </div>
            </div>
        </div>

        <div class="modal" :class="{ 'is-active': isOpen }">
            <div class="modal-content">
                <span @click="closeModel" class="close">&times;</span>
                <h2>Comanda a fost plasata cu succes!</h2>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        data: Object,
        finalPrice: Object,
    },

    data() {
        return {
            isOpen: false,

            form: {
                finalPrice: 0,
                brand: "",
                model: {},
                case: {},
                cooling: {},
                motherboard: {},
                source: {},
                videoCard: {},
                processor: {},
                memoryRam: {},
                storageMemory: {},
                extraComponents: {
                    keyboard: { keyboardPrice: 0 },
                    mouse: { mousePrice: 0 },
                    speakers: { speakersPrice: 0 },
                    mousepad: { mousepadPrice: 0 },
                },
            },
        }
    },


    methods: {
        nextStep() {
            this.isOpen = true;
        },

        closeModel() {
            this.isOpen = false;
            this.$emit('prevStep', -7);
            this.$store.dispatch('resetSteps', this.form)
        },

        prevStep(stepValue) {
            this.$emit('prevStep', stepValue)
            this.$store.dispatch('resetSteps', this.form)
        },
    },
}
</script>
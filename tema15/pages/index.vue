<template>
    <div class="builder-pc">
        <div class="inner">
            <div class="steps-container">
                <StartPage v-if="stepValue === 0" @nextStep="stepController" />
                <div class="steps-wrapper">
                    <StepOne v-if="stepValue === 1" :data="dataInitial" @prevStep="stepController"
                        @nextStep="stepController" />
                    <StepTwo v-if="stepValue === 2" :data="dataStepOne" @prevStep="stepController"
                        @nextStep="stepController" />
                    <StepThree v-if="stepValue === 3" :data="dataRestOfSteps" @prevStep="stepController"
                        @nextStep="stepController" />
                    <StepFour v-if="stepValue === 4" :data="dataFilterResults" @prevStep="stepController"
                        @nextStep="stepController" />
                    <StepFive v-if="stepValue === 5" :data="dataRestOfSteps" @prevStep="stepController"
                        @nextStep="stepController" />
                    <StepSix v-if="stepValue === 6" :data="dataFilterResults" @prevStep="stepController"
                        @nextStep="stepController" />

                    <Sidebar v-if="stepValue > 0 && stepValue < 7" :data="dataFinal" :finalPrice="finalPrice" />
                </div>
                <EndPage v-if="stepValue === 7" :data="dataFinal" :finalPrice="finalPrice" @prevStep="stepController" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            stepValue: 0,
        }
    },


    methods: {
        stepController(stepValue) {
            this.stepValue += stepValue;
        },
    },

    computed: {
        ...mapGetters({
            dataInitial: "getDataInitial",
            dataStepOne: "getDataStepOne",
            dataRestOfSteps: "getDataRestOfSteps",
            dataFilterResults: "getStepFourFilters",
            dataFilterResults: "getStepSixFilters",
            dataFinal: "getDataFinal",
            finalPrice: "getFinalPrice",
        }),
    },
}

</script>

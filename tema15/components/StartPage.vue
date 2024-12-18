<template>
    <div class="start-page">
        <div class="inner">
            <div class="start-page-wrapper">
                <h1>PC Builder</h1>
                <h2>Alege componentele si la final vezi valoarea totala a PC-ului.</h2>
                <div class="steps-btns">
                    <a @click.prevent="nextStep(1)" class="nextBtn" href="#">Incepe configurarea</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        nextStep(stepValue) {
            this.$emit('nextStep', stepValue)
        }
    },

}
</script>
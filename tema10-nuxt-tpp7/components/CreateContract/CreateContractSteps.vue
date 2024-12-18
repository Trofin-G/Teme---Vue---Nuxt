<template>
    <div class="steps">
        <ul>
            <!-- start:: step -->
            <li class="step" :class="{ 'step--active': stepValue == 1 }">
                <span class="step__number">1</span>
                <span class="step__text">Selecție contract</span>
            </li>
            <!-- end:: step -->

            <!-- start:: step -->
            <li class="step" :class="{ 'step--inactive': stepValue < 2, 'step--active': stepValue == 2 }">
                <span class="step__number">2</span>
                <span class="step__text">Date contract</span>
            </li>
            <!-- end:: step -->

            <!-- start:: step -->
            <li class="step" :class="{ 'step--inactive': stepValue < 3, 'step--active': stepValue == 3 }">
                <span class="step__number">3</span>
                <span class="step__text">Documente anexe</span>
            </li>
            <!-- end:: step -->
        </ul>
    </div>
</template>

<script>


export default {
    props: {
        stepValue: Number
    }
}
</script>
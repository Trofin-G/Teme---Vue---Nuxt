<template>
    <div class="clock">
        <div class="clock-img">
            <img src="../assets/images/clock.png" alt="clock">
        </div>
        <div class="ac-wrapper">
            <img id="second" src="../assets/images/ac-secunde.png" alt="ac">
        </div>
        <div class="ac-wrapper">
            <img id="minute" src="../assets/images/ac-minute.png" alt="ac">
        </div>
        <div class="ac-wrapper">
            <img id="hour" src="../assets/images/ac-ore.png" alt="ac">
        </div>
    </div>
</template>

<script>

//- data in timestp., ambele array == new date ( sa le las la ms )

export default {

    data() {
        return {
            hrPosition: (new Date().getHours() * 360 / 12) + (new Date().getMinutes() * (360 / 60) / 12),
            minPosition: (new Date().getMinutes() * 360 / 60) + (new Date().getSeconds() * (360 / 60) / 60),
            secPosition: (new Date().getSeconds() * 360 / 60),
        }
    },

    methods: {
        runClock() {
            let HOURHAND = document.querySelector("#hour")
            let MINUTEHAND = document.querySelector("#minute")
            let SECONDHAND = document.querySelector("#second")

            this.hrPosition += (30 / 3600);
            this.minPosition += (6 / 60);
            this.secPosition += 6;

            HOURHAND.style.transform = "rotate(" + this.hrPosition + "deg)";
            MINUTEHAND.style.transform = "rotate(" + this.minPosition + "deg)";
            SECONDHAND.style.transform = "rotate(" + this.secPosition + "deg)";

            this.$store.commit("homepage/setCheckTime");
        },
    },

    mounted() {
        setInterval(this.runClock, 1000);
    }
}
</script>
<template>
    <div class="calculator">
        <div class="display">
            <input class="calculations" type="text" disabled :value="calcValue" />
            <input class="result" type="text" disabled :value="resultValue" />
        </div>
        <div class="elements">
            <div class="row">
                <button type="button" @keyup="display($event)" @click="display($event)" class="operator">%</button>
                <button type="button" @keyup="display($event)" @click="display($event)" class="operator">N</button>
                <button type="button" @click="clearScreen()" class="operator">C</button>
                <button type="button" @keyup="display($event)" @click="display($event)" class="operator">/</button>
            </div>
            <div class="row">
                <button type="button" @keyup="display($event)" @click="display($event)" class="number">7</button>
                <button type="button" @keyup="display($event)" @click="display($event)" class="number">8</button>
                <button type="button" @keyup="display($event)" @click="display($event)" class="number">9</button>
                <button type="button" @keyup="display($event)" @click="display($event)" class="operator">*</button>
            </div>
            <div class="row">
                <button type="button" @keyup="display($event)" @click="display($event)" class="number">4</button>
                <button type="button" @keyup="display($event)" @click="display($event)" class="number">5</button>
                <button type="button" @keyup="display($event)" @click="display($event)" class="number">6</button>
                <button type="button" @keyup="display($event)" @click="display($event)" class="operator">-</button>
            </div>
            <div class="row">
                <button type="button" @keyup="displayOnKey($event)" @click="display($event)" class="number"
                    autofocus>1</button>
                <button type="button" @keyup="displayOnKey($event)" @click="display($event)" class="number">2</button>
                <button type="button" @keyup="displayOnKey($event)" @click="display($event)" class="number">3</button>
                <button type="button" @keyup="display($event)" @click="display($event)" class="operator">+</button>
            </div>
            <div class="row">
                <button type="button" @keyup="display($event)" @click="display($event)" class="number">0</button>
                <button type="button" @keyup="display($event)" @click="display($event)" class="operator">.</button>
                <button type="button" @keyup.enter="calculate()" @click="calculate()" class="equal">=</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            calcValue: '',
            resultValue: 0,
            whitelistNumbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            whitelistSymbols: ['-', '+', '*', '/', '%', 'N', '.'],
        }
    },

    methods: {
        clearScreen() {
            this.calcValue = '';
            this.resultValue = 0;
        },

        display(e) {
            this.conditions(e.currentTarget.textContent);
        },

        displayOnKey(e) {
            this.conditions(e.key);
        },

        conditions(key) {
            if (this.whitelistNumbers.includes(key)) {
                this.calcValue += key;
            }

            this.whitelistSymbols.forEach(symbol => {
                // if (this.calcValue.charAt(this.calcValue.length - 2) != symbol) {
                if (('%' == key || 'N' == key || '.' == key) && symbol == key) {
                    this.calcValue += `${key}`;
                } else if (symbol == key) {
                    this.calcValue += ` ${key} `;
                }
                // }
            });

            // let da = this.calcValue.charAt(this.calcValue.length - 2);
            // console.log(this.calcValue, 'this.calcValue');
            // console.log(da, 'da');
            // if (this.whitelistNumbers.includes(String(da))) {
            //     console.log('este');
            // } else {
            //     console.log('nu este');
            // }
        },

        calculate() {
            let p = this.calcValue.replaceAll('%', '/ 100').replaceAll('N', '* -1');
            let q = eval(p);
            this.resultValue = q;
        },
    },
}

</script>
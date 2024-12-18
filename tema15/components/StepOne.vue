<template>
    <div class="step step-one">
        <div class="inner">
            <div class="step-wrapper">
                <h2>Pasul 1.</h2>
                <p>Alege brand-ul si modelul.</p>
                <div class="content">
                    <form>
                        <client-only>
                            <div v-for="(item, index) in data">
                                <div @change="displayModel(index)"
                                    :class="{ 'active': item.brand == form.brand, 'error': formErrors.brand === false && form.brand === '' }"
                                    class="group group-brand">

                                    <input v-model="form.brand" :value="item.brand" name="radio" type="radio"
                                        :id="item.brand" class="input-radio">

                                    <label :for="item.brand" class="label-radio">
                                        <p>{{ item.brand }}</p>
                                        <img :src="item.imgSrc" alt="logo">
                                    </label>
                                </div>

                                <div v-for="model in data[index].model" v-if="brandSelected && index == brandIndex"
                                    :class="{ 'active': model.modelName == form.model.name, 'error': formErrors.model === false && Object.keys(form.model).length === 0 }"
                                    class="group group-model">

                                    <input v-model="form.model"
                                        :value="{ 'name': model.modelName, 'price': model.modelPrice }" name="radioModel"
                                        type="radio" :id="model.modelName" class="input-radio">

                                    <label :for="model.modelName" class="label-radio">
                                        <p>{{ model.modelName }}</p>
                                        <p>Pret: {{ model.modelPrice }}</p>
                                    </label>
                                </div>
                            </div>
                        </client-only>
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
            brandIndex: 0,
            brandSelected: false,

            form: {
                step: true,
                brand: '',
                model: {},
            },
            formErrors: {
                brand: null,
                model: null,
            },
        }
    },


    methods: {
        displayModel(indexValue) {
            this.form.model = {};

            this.brandIndex = indexValue;
            this.brandSelected = true;
        },

        validFormBrand() {
            let isValid = true;
            if (this.form.brand !== '') {
                isValid = false;
                this.formErrors.brand = true;
            } else {
                this.formErrors.brand = false;
            }
            return isValid
        },

        validFormModel() {
            let isValid = true;
            if (Object.keys(this.form.model).length !== 0) {
                isValid = false;
                this.formErrors.model = true;
            } else {
                this.formErrors.model = false;
            }
            return isValid
        },


        nextStep(stepValue) {
            if (!this.validFormBrand() && !this.validFormModel()) {
                this.formErrors.brand = true;
                this.formErrors.model = true;

                this.$store.dispatch('formStepOne', this.form)
                this.$emit("nextStep", stepValue);
            }
        },

        prevStep(stepValue) {
            this.$emit('prevStep', stepValue)

            this.form.brand = '';
            this.form.model = {};
        },
    },


}
</script>
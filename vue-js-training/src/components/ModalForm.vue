<template>
    <div class="modal" :class="{ 'is-active': isOpen }">
        <div class="modal-content">
            <span @click="close" class="close">&times;</span>
            <form class="app-form" @submit.prevent="submit">
                <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                    <label class="form__label">Titlu</label>
                    <input class="form__input" v-model="$v.name.$model">
                </div>
                <div class="error" v-if="!$v.name.required && $v.name.$dirty">Nume obligatoriu</div>
                <div class="error" v-if="!$v.name.minLength">Trebuie sa ai {{ $v.name.$params.minLength.min }}
                    sau mai multe caractere</div>
                <div class="error" v-if="!$v.name.maxLength">Trebuie sa ai {{ $v.name.$params.maxLength.max }} sau mai
                    putine caractere</div>

                <div class="form-group" :class="{ 'form-group--error': $v.description.$error }">
                    <label class="form__label">Descriere</label>
                    <textarea class="form__input" v-model="$v.description.$model"  cols="30" rows="2"></textarea>
                </div>
                <div class="error" v-if="!$v.description.required && $v.name.$dirty">Descriere obligatorie</div>
                <div class="error" v-if="!$v.description.minLength">Trebuie sa ai {{ $v.description.$params.minLength.min }}
                    sau mai multe caractere</div>
                <div class="error" v-if="!$v.description.maxLength">Trebuie sa ai {{ $v.description.$params.maxLength.max }}
                    sau mai
                    putine caractere</div>

                <button type="submit" :class="{ 'disabled': submitStatus == 'ERROR' }" class="secondColor">Adauga
                    Todo</button>
            </form>
        </div>
    </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { validationMixin } from 'vuelidate'

Vue.use(Vuelidate)

export default {
    mixins: [validationMixin],
    props: {
        isOpen: Boolean
    },

    data() {
        return {
            name: '',
            description: '',
            submitStatus: null
        }
    },

    validations: {
        name: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(15),
        },

        description: {
            required,
            minLength: minLength(20),
            maxLength: maxLength(200),
        },
    },

    methods: {
        close() {
            this.$emit('closeModal')
        },


        submit() {
            console.log('submit!')
            this.$v.name.$touch()
            this.$v.description.$touch()

            if (!this.$v.name.$invalid && !this.$v.description.$invalid) {
                this.$emit('newToDo', this.$v.name.$model, this.$v.description.$model)

                this.close()
                this.$v.name.$model = ''
                this.$v.description.$model = ''

            } else {
                console.log('fail submit');
                this.submitStatus = 'ERROR'
            }
        },
    }
}
</script>

<style lang="scss">
.modal {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(black, 0.4);
    text-align: center;

    &.is-active {
        display: block;
    }

    .modal-content {
        text-align: start;
        background-color: #fefefe;
        margin: 13% auto;
        padding: 20px 35px;
        border: 1px solid #888;
        width: 28%;

        .close {
            color: #aaa;
            float: right;
            font-size: 40px;
            font-weight: 700;
            position: relative;
            top: -15px;
            right: -15px;

            &:hover {
                cursor: pointer;
            }
        }

        .app-form {

            .form-group {
                margin-bottom: 5px;

                .form__label {
                    display: block;
                    font-size: 20px;
                    font-weight: 700;
                    padding-bottom: 5px;
                }

                .form__input {
                    padding: 10px;
                    font-size: 16px;
                    width: 100%;
                    max-width: 450px;
                    border: 1px solid black;


                }

                textarea {
                    resize: vertical;
                    max-height: 150px;
                }
            }

            button {
                padding: 0 25px;
            }

            // .disabled {
            //     cursor: not-allowed;
            //     pointer-events: none;
            //     opacity: 0.6;
            // }

            .error {
                color: red;
                padding-bottom: 15px;
            }
        }
    }

}
</style>
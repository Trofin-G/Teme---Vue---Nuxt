<template>
    <div class="card" v-if="editMode === false">
        <h2>{{ task.title }}</h2>
        <p>{{ task.description }}</p>

        <div class="control-btns">
            <button @click="editMode = true" class="edit-btn secondColor">Edit</button>
            <button @click="deleteHandler(task.id)" class="delete-btn thirdColor">Delete</button>

        </div>
    </div>
    <div v-else class="todo-edit">
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
                <textarea class="form__input" v-model="$v.description.$model" cols="30" rows="8"></textarea>
            </div>
            <div class="error" v-if="!$v.description.required && $v.name.$dirty">Descriere obligatorie</div>
            <div class="error" v-if="!$v.description.minLength">Trebuie sa ai {{ $v.description.$params.minLength.min }}
                sau mai multe caractere</div>
            <div class="error" v-if="!$v.description.maxLength">Trebuie sa ai {{ $v.description.$params.maxLength.max }}
                sau mai
                putine caractere</div>

            <button type="submit" :class="{ 'disabled': submitStatus == 'ERROR' }" class="secondColor">Checked</button>
            <button @click="cancelEdit" class="thirdColor">Cancel</button>
        </form>
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
        task: Object
    },

    data() {
        return {
            editMode: false,
            name: this.task.title,
            description: this.task.description,
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
        deleteHandler(deletedToDoId) {
            if (confirm("Apasa pe 'OK' pentru a sterge todo-ul.")) {
                this.$emit('deletedToDo', deletedToDoId)
            }
        },

        cancelEdit() {
            this.editMode = false
            this.$v.name.$model = this.task.title,
            this.$v.description.$model = this.task.description
        },

        submit() {
            console.log('submit!')
            this.$v.name.$touch()
            this.$v.description.$touch()

            if (!this.$v.name.$invalid && !this.$v.description.$invalid) {
                this.$emit('editedToDo', this.task.id, this.$v.name.$model, this.$v.description.$model)
                this.editMode = false
                console.log('succes submit');
            } else {
                console.log('fail submit');
                this.submitStatus = 'ERROR'

            }
        },
    },

}
</script>

<style lang="scss" scoped>
.todo-edit {
    .app-form {
        padding: 10px 0;
        text-align: start;
        border-bottom: 1px solid lightgrey;

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

            &:first-of-type{
                margin-right: 10px;
            }
        }

        .error {
            color: red;
            padding-bottom: 15px;
        }
    }

    &:last-of-type {
        .app-form {
            border-bottom: none;
        }
    }
}
</style>
<template>
    <div id="app">
        <div v-if="toDoDataArray.length !== 0">
            <ToDoList :toDoList="getData" @editedToDo="editedToDoData" @deletedToDo="deletedToDoData" />
        </div>
        <div v-else id="todolist">
            <div class="todolist-wrapper">
                <h3>Nu ai nici un Todo, adauga cu ajutorul butonului de mai jos</h3>
            </div>
        </div>
        <button @click="addClassOpen" class="add-btn firstColor">Add new task</button>
        <ModalForm :isOpen="isOpen" @closeModal="close" @newToDo="newToDoData" />
    </div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue'
import ModalForm from '@/components/ModalForm.vue'
import { fetchToDoList } from '@/api'
import axios from 'axios'

export default {
    name: 'App',
    components: {
        ToDoList,
        ModalForm
    },

    data() {
        return {
            isOpen: false,
            toDoDataArray: [],
            info: [],
        }
    },

    created() {
        this.toDoDataArray = fetchToDoList()
    },

    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                (this.info = response)
                // this.info
                // Object.entries()
                // console.log(this.info);
            })
    },

    methods: {
        close() {
            this.isOpen = false
        },

        addClassOpen() {
            this.isOpen = true
        },

        editedToDoData(todoId, editedTitle, editedDataDescription) {
            let editedToDoIndex = this.toDoDataArray.findIndex((todo => todo.id === todoId));
            this.toDoDataArray[editedToDoIndex].title = editedTitle
            this.toDoDataArray[editedToDoIndex].description = editedDataDescription
        },

        deletedToDoData(deletedToDoId) {
            let deletedToDoIndex = this.toDoDataArray.findIndex((todo => todo.id === deletedToDoId));
            this.toDoDataArray.splice(deletedToDoIndex, 1)
        },

        newToDoData(newDataTitle, newDataDescription) {
            this.toDoDataArray.push({ id: this.toDoDataArray.length + 1, title: newDataTitle, description: newDataDescription });
        },

    },

    computed: {
        getData() {
            return this.toDoDataArray
        },

        // toDoListEmpty() {
        //     return this.toDoDataArray.length === 0 ? false : true;
        // }

    },



}
</script>

<style lang="scss">
body {
    margin: 0;
    background-color: #d9d9f2;

    button {
        line-height: 30px;
        padding: 0 15px;
        cursor: pointer;
        border-radius: 4px;
        border-color: transparent;
        color: #fff;

        &.firstColor {
            background-color: #276cda;
        }

        &.secondColor {
            background-color: #00cc00;
        }

        &.thirdColor {
            background-color: #ff1a1a;
        }
    }

    .add-btn {
        margin: 0 auto;
        display: block;
    }
}
</style>

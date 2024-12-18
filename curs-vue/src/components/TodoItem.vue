<template>
    <div v-if="editMode === false" class="todo-item">
        <div class="todo-item-content">
            <div class="todo-item-content-title">
                {{ todoItem.title }}
            </div>
            <div class="todo-item-content-description">
                {{ todoItem.description }}
            </div>
        </div>
        <button @click="editMode = true" class="app-button is-warning">Edit</button>
        <button @click="deleteTodo" class="app-button is-danger">Delete</button>
    </div>
    <div v-else class="todo-item">
        <form class="app-form">
            <div class="form-control">
                <label class="label">Title</label>
                <input v-model="todo.title" class="form-input" type="text">
            </div>
            <div class="form-control">
                <label class="label">Description</label>
                <textarea v-model="todo.description" class="form-input" cols="30" rows="2"></textarea>
            </div>
            <button @click.prevent="editTodo" class="app-button is-warning">Update</button>
            <button @click.prevent="editMode = false" class="app-button is-danger">Cancel</button>
        </form>
    </div>
</template>

<script>
import store from '@/store'
export default {
    props: {
        todoItem: Object
    },

    data() {
        return {
            editMode: false,
            todo: {
                title: this.title,
                description: this.description
            }
        }
    },

    methods: {
        editTodo() {
            store.dispatch('updateTodo', {... this.todo})
        },

        deleteTodo() {
            alert('delete')
        }
    }
}
</script>

<style lang="scss">
.todo {
    &-item {
        background-color: gray;
        min-height: 70px;
        margin: 10px;
        padding: 10px;
        color: white;
        border-radius: 5px;
        font-size: 23px;

        &-content-title {
            font-weight: bold;
            padding-bottom: 4px;
        }

        &-content-description {
            font-size: 19px;
            padding-bottom: 10px;
        }

        button {
            margin-right: 5px;
            font-size: 15px;
        }
    }
}

.app-form {
    .form-control {
        margin-bottom: 10px;

        .label {
            display: block;
            font-size: 18px;
            font-weight: 700;
        }

        .form-input {
            padding: 10px;
            font-size: 17px;
        }
    }
}
</style>


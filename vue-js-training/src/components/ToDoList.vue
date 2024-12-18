<template>
    <div id="todolist">
        <div class="todolist-wrapper">
            <ToDoItem @editedToDo="editedToDo" @deletedToDo="deletedToDo" v-for="task in toDoList" :key="task.id"
                :task="task" />
        </div>
    </div>
</template>

<script>

import ToDoItem from '@/components/ToDoItem.vue'
export default {
    props: {
        toDoList: Array
    },

    components: {
        ToDoItem,
    },

    methods: {
        editedToDo(todoId, editedTitle, editedDataDescription) {
            this.$emit('editedToDo', todoId, editedTitle, editedDataDescription)
        },

        deletedToDo(deletedToDoId) {
            this.$emit('deletedToDo', deletedToDoId)
        },
    },


}
</script>

<style lang="scss">
#todolist {
    text-align: center;
    padding: 150px 0 0 0;

    .todolist-wrapper {
        background-color: white;
        max-width: 700px;
        padding: 5px 40px 15px 40px;
        margin: 0 auto 15px auto;
        border-radius: 6px;

        .card {
            text-align: start;
            padding: 0 0 15px 0;
            border-bottom: 1px solid lightgrey;

            &:last-of-type {
                border-bottom: none;
            }

            .control-btns {
                button {
                    &:last-of-type {
                        margin-left: 6px;
                    }
                }
            }
        }
    }
}
</style>
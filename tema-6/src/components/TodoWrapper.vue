<template>
    <div class="todo-list">
        <div class="todo-list-unchecked">
            <h2>To do list</h2>
            <TodoElement @checkItemId="checkItemId" v-for="item in uncheckedList" :key="item.id" :item="item" />
        </div>
    </div>

    <div class="todo-list">
        <div class="todo-list-checked">
            <h2>Done list</h2>
            <TodoElement @checkItemId="checkItemId" v-for="item in checkedList" :key="item.id" :item="item" />
        </div>
    </div>
</template>

<script>
import TodoElement from '@/components/TodoElement.vue'


export default {
    props: {
        dataArray: Array,
    },

    components: {
        TodoElement
    },

    methods: {
        checkItemId(itemId) {
            this.$emit('checkItemId', itemId)
        },
    },

    computed: {
        checkedList() {
            return this.dataArray.filter(item => item.completed == true)
        },

        uncheckedList() {
            return this.dataArray.filter(item => item.completed == false)
        }
    },


}
</script>

<style lang="scss"></style>
<template>
    <div class="todo-list">
        <TodoItem v-for="(todo, index) in todos" :key="index" :todoItem="todo" />
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
    components: {
        TodoItem
    },
    props: {
        todos: Array
    },
}
</script>

<style lang="scss">
.todo-list {
    flex: 1;
}
</style>

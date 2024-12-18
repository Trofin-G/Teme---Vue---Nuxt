<template>
    <div class="todo-element">
        <img v-if="item.completed" src="../assets/true.png" alt="checked" />
        <img v-else src="../assets/false.png" alt="checked" />
        <a @click="checkItem(item.id)" href="#">{{ item.title }} - {{ item.completed }}</a>
    </div>
</template>

<script>


export default {
    props: {
        item: Object
    },

    methods: {
        checkItem(itemId) {
            this.$emit('checkItemId', itemId)
        },
    },
}
</script>

<style lang="scss"></style>
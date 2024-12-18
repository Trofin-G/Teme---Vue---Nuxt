<template>
    <div>
        <div @click="isOpen = true" class="app-button">
            Create
        </div>
        <div class="modal" :class="{ 'is-active': isOpen }">
            <div class="modal-content">
                <span @click="close" class="close">&times;</span>
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    watch: {
        close(isClose) {
            if (isClose && this.isOpen) {
                this.isOpen = false
            }
        }
    },
    methods: {
        close() {
            this.isOpen = false
        }
    }
}
</script>

<style lang="scss">
.app-button {
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #795899;
    color: white;
    font-weight: 700;

    &.is-primary {
        background-color: green;
    }
}

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
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: 700;

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>
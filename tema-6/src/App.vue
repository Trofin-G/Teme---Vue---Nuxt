<template>
    <div class="container">
        <div class="container-wrapper">
            <TodoWrapper :dataArray="dataArrayTodo" @checkItemId="checkItemId" />
            <button @click="saveTodoArray" type="button" class="btn btn-success">Save</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import TodoWrapper from '@/components/TodoWrapper.vue'
import { useCookies } from "vue3-cookies";

export default {
    name: 'App',
    components: {
        TodoWrapper
    },

    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },

    data() {
        return {
            dataArray: [],
        }
    },

    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                this.dataArray = this.cookies.get("myCoookie") !== null && this.cookies.get("myCoookie") !== undefined
                    ? JSON.parse(this.cookies.get("myCoookie")) : response.data.slice(0, 5);
            })
    },

    methods: {
        checkItemId(itemId) {
            let realIndex = this.dataArray.findIndex((item => item.id === itemId));
            this.dataArray[realIndex].completed = !this.dataArray[realIndex].completed;
        },

        saveTodoArray() {
            this.cookies.set("myCoookie", JSON.stringify(this.dataArray));
            window.location.reload();
        }
    },

    computed: {
        dataArrayTodo() {
            return this.dataArray
        },
    },


}
</script>

<style lang="scss">
.container {

    .container-wrapper {
        padding: 100px 0 0 0;


        .btn-success {
            margin-bottom: 20px;
        }

        .todo-list {
            border: 1px solid black;
            padding: 20px;
            margin-bottom: 50px;

            h2 {
                padding-bottom: 25px;
            }

            .todo-list-unchecked,
            .todo-list-checked {
                .todo-element {
                    display: flex;
                    gap: 15px;
                    cursor: pointer;
                    margin-bottom: 10px;

                    img {
                        cursor: pointer;
                        width: 26px;
                        height: 26px;
                    }
                }
            }
        }
    }
}

html {
    background: #D3D3D3;
}

#app {
    background: #D3D3D3;
}

.hidden {
    display: none !important;
}
</style>

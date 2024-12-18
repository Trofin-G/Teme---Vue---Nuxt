<template>
	<div class="app">
		<div class="todo-wrapper">
			<div class="todo-container">
				<TodoList :todos="todos" />
				<div class="todo-create-btn-container">
					<TodoCreate @formSubmitted="submitForm" />
				</div>
			</div>
		</div>
	</div>
</template> 


<script>
import TodoList from "@/components/TodoList.vue";
import TodoCreate from "@/components/TodoCreate.vue";

import store from '@/store';

export default {
	name: 'App',
	components: {
		TodoList,
		TodoCreate 
	}, 

	data() {
		return {
			todos: store.state.todos
		}
	},

	methods: {
		submitForm(todo) {
			store.dispatch('submitForm', todo)
		}
	}
}
</script>

<style lang="scss">
$color-red: grey;

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	// text-align: center;
	color: $color-red;
	margin-top: 60px;
}

.app-error {
	color: #ff1212;
}

.is-primary {
	background-color: #47ca47 !important;
}

.is-warning {
	background-color: #ffa753 !important;
}

.is-danger {
	background-color: #ff5a6a !important;
}

.todo {
	&-wrapper {
		display: flex;
		// text-align: center;
		justify-content: center;
		width: 100%;
	}

	&-container {
		display: flex;
		flex-direction: column;
		width: 400px;
		min-height: 400px;
		background-color: #ededed;
		margin: 0 auto;
		border-radius: 5px;

		.todo-create-btn-container {
			margin: 10px;
		}
	}
}
</style>

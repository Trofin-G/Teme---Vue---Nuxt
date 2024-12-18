<template>
	<div class="app">
		<CardsList :listItems="arrayData" />
	</div>
</template>

<script>
import axios from 'axios'
import CardsList from '@/components/CardsList.vue'

export default {
	name: 'App',
	components: {
		CardsList
	},

	data() {
		return {
			arrayData: [],
		}
	},

	mounted() {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				(this.arrayData = response.data)
			})
	},
}


</script>

<style lang="scss">
.app {
	background: #D3D3D3;
}

html {
	background: #D3D3D3;
}

.hidden{
	display: none;
}
</style>

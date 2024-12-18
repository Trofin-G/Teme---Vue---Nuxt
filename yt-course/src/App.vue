<template>
  <div id="app">
    <!-- attribute binding -->
    <a v-bind:href="url" target="_blank">best website ever</a>

    <h1>Hello, Vue</h1>
    <div v-if="!showBooks">
      <!-- <p>{{ title }} - {{ author }} - {{ age }}</p> -->

      <ul>
        <li v-for="book in booksArray" :key="book.index" :class="{ fav: book.isFav }" @click="toggleFav(book)">
          <img :src="book.img" :alt="book.title">
          <h3>{{ book.title }}</h3>
          <p>{{ book.author }}</p>
        </li>
      </ul>

      <button @click="toggleFiltredBooks">
        <span v-if="showFavBooks">Filtered all books</span>
        <span v-else>Filtered Fav books</span>
      </button>

    </div>

    <button @click="toggleShowBooks">
      <span v-if="showBooks">Show Books</span>
      <span v-else>Hide Books</span>
    </button>
    <br>
    <!-- mouse events -->
    <div class="box" @mouseover="handleEvents($event, 5)">mouseover (enter)</div>
    <div class="box" @mouseleave="handleEvents">mouseleave</div>
    <div class="box" @dblclick="handleEvents">double click</div>
    <div class="box" @mousemove="handleMousemove">position - {{ x }} x {{ y }}</div>

  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      url: 'http://www.google.ro',
      showBooks: true,
      showFavBooks: false,
      booksArray: [],

      books: [
        { title: "name of the wind", author: 'partrick rothfus', img: 'https://placehold.co/82x82/000000/FFFFFF/png', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'https://placehold.co/82x82/red/png', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', img: 'https://placehold.co/82x82/blue/FFFFFF/png', isFav: true }
      ],


      x: 0,
      y: 0,
    }
  },

  methods: {
    toggleFav(book) {
      book.isFav = !book.isFav
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks
      this.booksArray = [...this.books]
      this.showFavBooks = false;
    },

    toggleFiltredBooks() {
      this.showFavBooks = !this.showFavBooks
      this.booksArray = this.showFavBooks ? [...this.filtredBooks] : [...this.books]

    },

    handleEvents(e, data) {
      console.log(e);

      if (data) {
        console.log(data);
      }
    },

    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
  },

  computed: {
    filtredBooks() {
      return this.books.filter((item) => item.isFav)
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  padding: 80px 0;
  width: 200px;
  text-align: center;
  background: #ddd;
  margin: 20px;
  display: inline-block;
}

body {
  background: #eee;
  max-width: 960px;
  margin: 20px auto;
}

button {
  margin: 5px 0;
}

p,
h3,
ul {
  margin: 0;
  padding: 0;
}

li {
  cursor: pointer;
  list-style-type: none;
  background: #fff;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.fav {
    background-color: #ff9ed2;
    color: white;
  }
}
</style>

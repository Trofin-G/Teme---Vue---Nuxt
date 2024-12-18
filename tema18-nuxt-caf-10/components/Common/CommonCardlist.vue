<template>
    <div class="cardlist">
        <div class="cardlist-wrapper">
            <figure v-for="item in items" class="item">
                <img :src="item.thumbnail" alt="item">
                <figcaption>
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.description }}</p>
                    <!-- <h4>Id: {{ item.id }}</h4> -->
                    <!-- <p>Category: {{ item.category }}</p> -->
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        items: Array,
    },
}
</script>
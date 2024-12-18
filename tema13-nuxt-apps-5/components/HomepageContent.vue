<template>
    <div class="content">
        <figure v-for="item in items" class="item">
            <div class="image"><img :src="item.url" alt="img"></div>
            <figcaption>
                <h4>Id: {{ item.id }}</h4>
                <h4>AlbumId: {{ item.albumId }}</h4>
                <p>{{ item.title }}</p>
            </figcaption>
        </figure>
    </div>
</template>

<script>


export default {
    props: {
        items: Array
    }
}
</script>
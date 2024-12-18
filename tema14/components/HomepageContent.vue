<template>
    <div class="content">
        <figure v-for="item in items" class="item">
            <figcaption>
                <h4>{{ item.id }}</h4>
                <h4>{{ item.title }}</h4>
                <p>{{ item.body }}</p>
                <p>Reactions: {{ item.reactions }}</p>
                <p>Tags: <span v-for="tag in item.tags">{{ tag }}, </span></p>
            </figcaption>
        </figure>
    </div>
</template>

<script>


export default {
    props: {
        items: Array,
    },
}
</script>
<template>
    <div class="socials">
        <div class="container">
            <ul>
                <li v-for="item in data">
                    <a :href="item.url" target="_blank">
                        <img :src="item.icon" alt="" width="25px">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        data: Array,
    }
}
</script>
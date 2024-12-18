<template>
    <nav class="page-menu">
        <div class="container">
            <div class="logo"><img :src="require('assets/images/logo.png')" alt="#"></div>
            <ul class="links">
                <li v-for="(item, index) in menuLinks">
                    <a href="#" v-scroll-to="item.url" :class="{ 'active': (item.id === activeId) }" @click.prevent="addActiveClass(item.id)">
                        {{ item.text }}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            activeId: '1',
        }
    },

    computed: {
        ...mapGetters({
            menuLinks: "common/menu/getMenuLinks",
        })
    },

    methods: {
        addActiveClass(id) {
            this.activeId = id
        },

    },
}
</script>
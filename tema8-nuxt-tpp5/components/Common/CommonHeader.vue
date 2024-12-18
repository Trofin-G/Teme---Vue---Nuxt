<template>
    <header class="">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" :href="headerLogo.urlLogo">
                    <h2>{{ headerLogo.textLogo }}<em>.</em></h2>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <!-- de adaugat active aici -->
                        <li v-for="item in headerLinks" class="nav-item">
                            <NuxtLink class="nav-link" :to="item.urlLink">{{ item.textLink }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            headerLinks: "common/header/getHeaderLinks",
            headerLogo: "common/header/getHeaderLogo",
        })
    },
}
</script>
<template>
    <header class="pp-header" id="ppHeader">
        <div class="pp-container">
            <nav class="pp-menu">
                <div class="wrapper">
                    <div class="pp-menu__logo">
                        <NuxtLink :to="headerLogo.urlLogo">
                            <img :src="headerLogo.srcLogo" :alt="headerLogo.altLogo" width="98" height="47">
                        </NuxtLink>
                    </div>

                    <ul>
                        <li>
                            <NuxtLink to="/" class="pp-menu__messages pp-menu__messages--badge">
                                <img src="../../assets/images/icons/mail.svg" alt="mail" width="24" height="20">
                                <span v-if="messageUnread > 0">{{ messageUnread }}</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/create-message" class="pp-menu__add-contract">
                                <img src="../../assets/images/icons/add-purple.svg" alt="mail" width="14" height="14">
                            </NuxtLink>
                        </li>
                        <li>
                            <a to="#" @click.prevent="mobileMenuHandler" class="pp-menu__toggle" id="menuToggle">
                                <span class="bar"></span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="pp-menu__collapse" :class="{ 'is-open': menuMobileActive }" id="menuCollapse">
                    <ul>
                        <li :class="item.classItem" v-for="item in headerLinks">
                            <NuxtLink :to="item.urlLink" :class="item.classLink">
                                <img :src="item.srcIcon" :alt="item.altIcon" width="24" height="24">
                                {{ item.textLink }}
                                <span v-if="item.par == 'message' && messageUnread > 0">{{ messageUnread }}</span>
                                <img v-if="item.par == 'add'" src="../../assets/images/icons/add-white.svg"
                                    :alt="item.altIcon" width="12" height="12">
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            menuMobileActive: false
        }
    },

    computed: {
        ...mapGetters({
            headerLinks: "common/header/getHeaderLinks",
            headerLogo: "common/header/getHeaderLogo",
            messageUnread: "homepage/listMessages/getMessageUnread",
        })
    },

    methods: {
        mobileMenuHandler() {
            this.menuMobileActive = !this.menuMobileActive;

            if (this.menuMobileActive) {
                document.querySelector("body").classList.add('menu-is-open');
            } else {
                document.querySelector("body").classList.remove('menu-is-open');
            }

        }
    },
}
</script>


<template>
    <div class="page-intro">
        <h1>Mesajele mele</h1>
        <div class="actions-mobile">
            <div class="wrapper">

                <!-- START:: Filters -->
                <div class="filters">
                    <div class="input">
                        <select name="messageTypes" id="messageTypes" class="input__select"
                            data-default="Mesaje primite (3)" data-searchable="false" title="Mesaje primite">
                            <option value="list--inbox" selected>
                                Mesaje primite
                                <span v-if="messageUnread > 0">
                                    ({{ messageUnread }})
                                </span>
                            </option>
                            <option value="list--sent">Mesaje trimise</option>
                        </select>
                    </div>
                </div>
                <!-- END:: Filters -->

                <!-- START:: Creează mesaj nou -->
                <div class="create">
                    <NuxtLink to="/create-message" class="bt bt--icon bt--transparent">
                        <img src="../../assets/images/icons/edit-purple.svg" alt="Edit" width="18" height="19">
                        Creează mesaj nou
                    </NuxtLink>
                </div>
                <!-- END:: Creează mesaj nou -->

                <!-- START:: Search -->
                <div class="search">
                    <NuxtLink to="#" class="bt bt--icon bt--transparent" id="openSearch">
                        <img src="../../assets/images/icons/search.svg" alt="Edit" width="16" height="16"
                            class="search-img">
                    </NuxtLink>
                </div>
                <!-- END:: Search -->

                <form class="search-form search-form__mobile">
                    <!-- START:: Input Search -->
                    <div class="input">
                        <input type="search" id="searchMessageMobile" class="input__text search-message"
                            name="searchMessageMobile" title="Caută" placeholder="Caută">
                    </div>
                    <!-- END:: Input Search -->

                    <!-- START:: Input Search -->
                    <div class="input-search">
                        <input type="submit"  value="">
                    </div>
                    <!-- END:: Input Search -->
                </form>
            </div>

        </div>
        <div class="actions">

            <form @submit.prevent="searchHandler" class="search-form" method="GET" action="#">
                <!-- START:: Input Search -->
                <div class="input">
                    <input v-model="searchValue" type="search" id="searchMessage" class="input__text search-message"
                        name="searchMessage" title="Caută" placeholder="Caută">
                </div>
                <!-- END:: Input Search -->

                <!-- START:: Input Search -->
                <div class="input-search">
                    <input type="submit" value="">
                </div>
                <!-- END:: Input Search -->
            </form>

            <div class="add-new">
                <NuxtLink to="/create-message" class="bt bt--icon bt--fill">
                    <img src="../../assets/images/icons/edit.svg" alt="Edit" width="18" height="19">
                    Creează mesaj nou
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            searchValue: '',
        }
    },

    methods: {
        searchHandler() {
            this.$store.dispatch('homepage/listMessages/sendSearchValue', this.searchValue.toLowerCase())
        },
    },

    computed: {
        ...mapGetters({
            messageUnread: "homepage/listMessages/getMessageUnread",
        })
    },
}
</script>
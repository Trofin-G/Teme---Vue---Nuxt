<template>
    <div>
        <div class="actions-mobile">
            <div class="wrapper">
                <!-- START:: Creează mesaj nou -->
                <div class="filtered">
                    <a href="#" class="bt bt--transparent" id="openFilters">
                        Filtrează
                        <span><span id="activeFilters" class="d-inline">0</span> filtre active</span>
                    </a>
                </div>
                <!-- END:: Creează mesaj nou -->

                <!-- START:: Filters -->
                <div class="mobile-filters">
                    <div class="input">
                        <span class="mobile-filters__name">Sortează</span>
                        <select name="sorBy" id="sorByMobile" class="input__select" data-default="Serie contract"
                            data-searchable="false" title="Ordonează după:">
                            <option value="contractSeries" selected>Serie contract</option>
                            <option value="companyCUI">CUI</option>
                            <option value="companyName">Nume companie</option>
                        </select>
                    </div>
                </div>
                <!-- END:: Filters -->

                <!-- START:: Search -->
                <div class="search">
                    <a href="#" class="bt bt--icon bt--transparent" id="openSearch">
                        <img src="../../assets/images/icons/search.svg" alt="Edit" width="16" height="16"
                            class="search-img">
                    </a>
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
                        <input type="submit" value="">
                    </div>
                    <!-- END:: Input Search -->
                </form>
            </div>
        </div>

        <div class="actions">
            <form @submit.prevent="searchHandler" class="search-form">
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
            <div class="group">
                <!-- START:: Input type select -->
                <div class="input input--inline">
                    <label class="input__label">Ordonează după:</label>
                    <select @change="sortByOption($event)" name="sorBy" id="sorByDesktop" class="input__select"
                        data-default="Serie contract" data-searchable="false" title="Ordonează după:">
                        <option value="numarContract" selected>Serie contract</option>
                        <option value="cui">CUI</option>
                        <option value="numeCompanie">Nume companie</option>
                    </select>
                </div>
                <!-- END:: Input type select -->
            </div>
            <div class="group">
                <!-- START:: Input type select -->
                <div class="input input--inline">
                    <label for="perPage" class="input__label">Afișează:</label>
                    <select @change="perPageByOption($event)" name="perPage" id="perPage" class="input__select"
                        data-searchable="false" data-placeholder="Placeholder" data-default="5 per pagină">
                        <option value="5" selected>5 per pagină</option>
                        <option value="10">10 per pagină</option>
                    </select>
                </div>
                <!-- END:: Input type select -->
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            searchValue: '',
        }
    },

    methods: {
        sortByOption(e) {
            this.$store.dispatch('contracts/listContracts/sendSortByValue', e.currentTarget.value)
        },

        perPageByOption(e) {
            this.$store.dispatch('contracts/listContracts/sendPerPageByValue', e.currentTarget.value)
        },

        searchHandler() {
            this.$store.dispatch('contracts/listContracts/sendSearchValue', this.searchValue.toLowerCase())
        },
    },
}
</script>
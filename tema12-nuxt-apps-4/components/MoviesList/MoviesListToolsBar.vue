<template>
    <div class="toolsBar">
        <div class="group">
            <div class="input">
                <label class="input-label">Filtrare după anul aparitiei:</label>
                <select @change="filterByOption()" v-model="filterValues[0]" name="filterByYear" id="filterByYear"
                    class="input-select" title="filterByYear">
                    <option :value="null">Toti anii</option>
                    <option v-for="year in allYears" :value="year">{{ year }}</option>
                </select>
            </div>
        </div>
        <div class="group">
            <div class="input">
                <label class="input-label">Filtrare după gen:</label>
                <select @change="filterByOption()" v-model="filterValues[1]" name="filterByGenre" id="filterByGenre"
                    class="input-select" title="filterByGenre">
                    <option :value="null">Toate genurile</option>
                    <option v-for="genre in allGenres" :value="genre">{{ genre }}</option>
                </select>
            </div>
        </div>
        <div class="group">
            <div class="input">
                <label class="input-label">Sorteaza după:</label>
                <select @change="sortByOption()" v-model="sortByValue" name="sortBy" id="sortBy" class="input-select"
                    title="Sortare">
                    <option :value="null" disabled selected hidden>Selecteaza</option>
                    <option v-for="sortingType in allSortingTypes" :value="sortingType">{{ sortingType }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            filterValues: [null, null],
            sortByValue: null,
        }
    },

    methods: {
        sortByOption() {
            this.$store.dispatch('moviesStore/sendSortByValue', this.sortByValue)
        },

        filterByOption() {
            this.$store.dispatch('moviesStore/sendFilterByValue', this.filterValues)
        },
    },

    computed: {
        ...mapGetters({
            allYears: "moviesStore/getAllYears",
            allGenres: "moviesStore/getAllGenres",
            allSortingTypes: "moviesStore/getAllSortingTypes",
        }),
    },

}
</script>
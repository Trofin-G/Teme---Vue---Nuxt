<template>
    <aside class="filters" id="filters">
        <a href="#" class="filters__close" id="closeFilters">
            <img src="../../assets/images/icons/close.svg" alt="close" width="14" height="14">
        </a>

        <div class="dropdown">
            <!-- start Collapse group 1 -->
            <a href="#" class="dropdown__trigger">Status contract</a>
            <div class="dropdown__collapse is-show">

                <div v-for="item in statusCounts" class="input input--checkbox">
                    <input @change="filterByOptionHandler()" v-model="filterByOptionData" type="checkbox"
                        class="input__checkbox" :name="`checkbox-${item[0]}`" :id="`checkbox-${item[0]}`" :value="item[1]">
                    <label :for="`checkbox-${item[0]}`">{{ item[1] }} ({{ item[2] }})</label>
                </div>
            </div>
            <!-- end Collapse group 1 -->
        </div>

        <div class="dropdown">
            <!-- start Collapse group 2 -->
            <a href="#" class="dropdown__trigger">Tip contract</a>
            <div class="dropdown__collapse is-show">

                <div v-for="item in typeCounts" class="input input--checkbox">
                    <input @change="filterByOptionHandler()" v-model="filterByOptionData" type="checkbox"
                        class="input__checkbox" :name="`checkbox-${item[0]}`" :id="`checkbox-${item[0]}`" :value="item[1]">
                    <label :for="`checkbox-${item[0]}`">{{ item[1] }}</label>
                </div>


            </div>
            <!-- end Collapse group 2 -->
        </div>

        <div class="filters__action">
            <a href="#" class="filters__action--save" id="saveFilters">Salvează filtre</a>
        </div>

        <div class="filters__action">
            <a href="" class="filters__action--reset" id="resetFilters">Resetează filtre</a>
        </div>
    </aside>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            filterByOptionData: [],
        }
    },

    methods: {
        filterByOptionHandler() {
            console.log(this.filterByOptionData,'ssss')
            this.$store.dispatch('contracts/listContracts/sendFilterByOptionData', this.filterByOptionData)
        },
    },


    computed: {
        ...mapGetters({
            statusCounts: "contracts/listContracts/getStatusCounts",
            typeCounts: "contracts/listContracts/getTypeCounts",
        })
    },

    mounted() {
        this.$store.commit("contracts/listContracts/setStatusCounts")
        this.$store.commit("contracts/listContracts/setTypeCounts")
        this.$store.commit("contracts/listContracts/setCurrentPage")
    }
}
</script>

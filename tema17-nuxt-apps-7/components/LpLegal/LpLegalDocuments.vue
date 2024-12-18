<template>
    <div class="documents__list">
        <div class="top-content">
            <div class="form-wrapper">
                <form @submit.prevent="searchHandler" autocomplete="off" id="legalPageSearchForm">
                    <div class="form-group">
                        <input v-model="searchValue" type="text" autocomplete="off" class="form-control" name="documentName"
                            id="documentName" title="Caută după denumire" placeholder="Caută după denumire" />
                    </div>
                    <div class="submit">
                        <input type="submit" value="" />
                    </div>
                </form>
            </div>
            <div class="layout-wrapper">
                <!-- <p>Afișează:</p> -->
                <div class="radios">
                    <div class="radio">
                        <input @click="changeView(true)" type="radio" name="layoutView" id="listView" value="list"
                            checked="checked" />
                        <label for="listView">
                            <img src="../../assets/images/list.svg" alt="list" width="25" height="24" />
                        </label>
                    </div>
                    <div class="radio">
                        <input @click="changeView(false)" type="radio" name="layoutView" id="gridView" value="grid" />
                        <label for="gridView">
                            <img src="../../assets/images/grid.svg" alt="grid" width="25" height="26" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="files-content">
            <div>
                <h2 class="category">{{ categoryData.category == '' ? '' : categoryData.category }}</h2>
                <ul class="breadcrumb">
                    <li>{{ categoryData.subcategory == '' ? '' : categoryData.subcategory }}</li>
                </ul>
            </div>

            <div class="docs" :class="viewItems">
                <div class="docs__item" :class="`docs__item--${item.type}`" v-for="item in data">
                    <div class="filename">
                        <p>{{ item.name }}</p>
                    </div>
                    <p v-if="item.size" class="size">{{ item.size }}</p>
                    <div class="action">
                        <a  :href="item.type === 'html' ? `details/${item.link}` : item.link" target="_blank">
                            {{ item.type === 'html' ? 'Click aici' : 'Vizualizeaza' }}
                        </a>
                    </div>
                </div>
            </div>
            <p v-if="data.length === 0" class="no-results">Nu au fost gasite rezultate!</p>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        data: Array,
        categoryData: Object,
    },

    data() {
        return {
            viewItems: 'docs--list-view',
            searchValue: '',

        }
    },

    methods: {
        changeView(value) {
            if (value) {
                this.viewItems = 'docs--list-view';
            } else {
                this.viewItems = 'docs--grid-view';
            }
        },

        searchHandler() {
            this.$store.dispatch('documents/searchValue', this.searchValue.toLowerCase());
        },
    },



}
</script>
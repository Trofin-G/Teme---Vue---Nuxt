<template>
    <aside class="documents__sidebar">
        <h4>Categorii</h4>
        <div class="menu-list">
            <ul>
                <li v-for="parent in data">
                    <a @click.prevent="activeHandler([parent.id, 0])" href="#" class="parent"
                        :class="{ 'active': parent.id == activeElement[0], }">
                        {{ parent.name }}
                    </a>

                    <ul v-if="parent.childList">
                        <li v-for="child in parent.childList"
                            @click.prevent="categoryHandler({ 'category': parent.name, 'subcategory': child.name })">
                            <a @click.prevent="activeHandler([parent.id, child.id, 0])" href="#"
                                :class="{ 'parent': child.extraClass === 'parent', 'child': child.extraClass !== 'parent', 'active': child.id == activeElement[1] }">
                                {{ child.name }}
                            </a>

                            <ul v-if="child.extraChildList">
                                <li v-for="extraChild in child.extraChildList">
                                    <a @click.prevent="activeHandler([parent.id, child.id, extraChild.id])" href="#"
                                        class="child" :class="{ 'active': extraChild.id == activeElement[2] }">
                                        {{ extraChild.name }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>


export default {
    props: {
        data: Array,
    },

    data() {
        return {
            activeElement: [0, 0, 0],
        }
    },


    methods: {
        activeHandler(valueId) {
            this.activeElement = valueId;
        },

        categoryHandler(valueCategory) {
            this.$store.dispatch('documents/categoryPage', valueCategory);
        }
    },

}
</script>
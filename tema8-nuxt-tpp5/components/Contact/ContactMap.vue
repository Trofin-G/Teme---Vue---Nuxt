<template>
    <div class="col-lg-12">
        <div id="map" v-html="iframeMap.map"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            iframeMap: "contact/map/getIframeMap",
        })
    },
}
</script>
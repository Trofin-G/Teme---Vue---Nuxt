<template>
    <div class="col-lg-4">
        <div class="sidebar-item contact-information">
            <div class="sidebar-heading">
                <h2>contact information</h2>
            </div>
            <div class="content">
                <ul>
                    <li>
                        <h5>{{ infoSidebar.phone }}</h5>
                        <span>PHONE NUMBER</span>
                    </li>
                    <li>
                        <h5>{{ infoSidebar.email }}</h5>
                        <span>EMAIL ADDRESS</span>
                    </li>
                    <li>
                        <h5>{{ infoSidebar.address }}</h5>
                        <span>STREET ADDRESS</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            infoSidebar: "contact/sidebar/getInfoSidebar",
        })
    },
}
</script>
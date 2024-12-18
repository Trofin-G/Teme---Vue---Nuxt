<template>
    <div class="card-item demo-panel gray">
        <div class="panel m-20">
            <div class="p-20">
                <p><b>Nume:</b> {{ item.name }}</p>
                <p><b>Username:</b> {{ item.username }}</p>
                <p><b>Email:</b> {{ item.email }}</p>
                <p><b>Strada:</b> {{ item.address.street }}</p>
                <p><b>Oras:</b> {{ item.address.city }}</p>
                <p><b>Cod postal:</b> {{ item.address.zipcode }}</p>
                <p><b>Telefon:</b> {{ item.phone }}</p>
                <p><b>Site web:</b> {{ item.website }}</p>
                <p><b>Nume companie:</b> {{ item.company.name }}</p>
                <p><b>CatchPhrase companie:</b> {{ item.company.catchPhrase }}</p>
                <p><b>Bs companie: </b> {{ item.company.bs }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        item: Object
    },

}
</script>

<style lang="scss">
.card-item {
    background-color: lightgray;
    margin: 15px 0;

    p {
        &:first-of-type {
            color: blue;
        }
    }

    &:nth-child(2n) {
        p {
            &:first-of-type {
                color: green;
            }
        }
    }
}
</style>
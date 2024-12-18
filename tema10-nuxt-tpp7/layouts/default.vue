<template>
    <div class="page">
        <CommonHeader />
        <Nuxt />
        <CommonFooter />
    </div>
</template>

<style scoped lang="scss">
@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
    .page {
        overflow: hidden;
        width: 100vw;
        height: 100vh;
    }
}
</style>


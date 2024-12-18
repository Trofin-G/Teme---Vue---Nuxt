<template>
  <div class="page-wrapper">
    <CommonHeader/>
    <Nuxt />
    <CommonFooter />
  </div>
</template>

<style scoped lang="scss">
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .page-wrapper {
      overflow: hidden;
      width: 100vw;
      height: 100vh;
    }
  }
</style>


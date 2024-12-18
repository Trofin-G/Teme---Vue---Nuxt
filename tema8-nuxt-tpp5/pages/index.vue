<template>
  <div class="homepage">
    <HomepageIntro />
    <CommonCta />

    <section class="blog-posts">
      <div class="container">
        <div class="row">
          <HomepageListItems />
          <div class="col-lg-4">
            <div class="sidebar">
              <div class="row">
                <div class="col-lg-12">
                  <CommonSearchBar />
                </div>
                <div class="col-lg-12">
                  <CommonRecentPosts />
                </div>
                <div class="col-lg-12">
                  <CommonCategories />
                </div>
                <div class="col-lg-12">
                  <CommonTags />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>

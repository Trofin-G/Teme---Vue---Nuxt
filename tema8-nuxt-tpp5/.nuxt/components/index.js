export { default as AboutContent } from '../..\\components\\About\\AboutContent.vue'
export { default as AboutIntro } from '../..\\components\\About\\AboutIntro.vue'
export { default as ArticleDetailsContent } from '../..\\components\\ArticleDetails\\ArticleDetailsContent.vue'
export { default as ArticleDetailsForm } from '../..\\components\\ArticleDetails\\ArticleDetailsForm.vue'
export { default as ArticleDetailsIntro } from '../..\\components\\ArticleDetails\\ArticleDetailsIntro.vue'
export { default as ArticleDetailsListComments } from '../..\\components\\ArticleDetails\\ArticleDetailsListComments.vue'
export { default as BlogIntro } from '../..\\components\\Blog\\BlogIntro.vue'
export { default as BlogListItems } from '../..\\components\\Blog\\BlogListItems.vue'
export { default as BlogPagination } from '../..\\components\\Blog\\BlogPagination.vue'
export { default as CommonCta } from '../..\\components\\Common\\CommonCta.vue'
export { default as CommonFooter } from '../..\\components\\Common\\CommonFooter.vue'
export { default as CommonHeader } from '../..\\components\\Common\\CommonHeader.vue'
export { default as ContactForm } from '../..\\components\\Contact\\ContactForm.vue'
export { default as ContactIntro } from '../..\\components\\Contact\\ContactIntro.vue'
export { default as ContactMap } from '../..\\components\\Contact\\ContactMap.vue'
export { default as ContactSidebar } from '../..\\components\\Contact\\ContactSidebar.vue'
export { default as HomepageIntro } from '../..\\components\\Homepage\\HomepageIntro.vue'
export { default as HomepageListItems } from '../..\\components\\Homepage\\HomepageListItems.vue'
export { default as CommonCategories } from '../..\\components\\Common\\CommonSidebar\\CommonCategories.vue'
export { default as CommonRecentPosts } from '../..\\components\\Common\\CommonSidebar\\CommonRecentPosts.vue'
export { default as CommonSearchBar } from '../..\\components\\Common\\CommonSidebar\\CommonSearchBar.vue'
export { default as CommonTags } from '../..\\components\\Common\\CommonSidebar\\CommonTags.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

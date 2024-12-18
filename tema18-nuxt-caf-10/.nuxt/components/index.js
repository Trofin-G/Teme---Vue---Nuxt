export { default as CommonCardlist } from '../..\\components\\Common\\CommonCardlist.vue'
export { default as PageoneFilters } from '../..\\components\\Pageone\\PageoneFilters.vue'
export { default as PageonePagination } from '../..\\components\\Pageone\\PageonePagination.vue'
export { default as Homepage } from '../..\\components\\Homepage\\Homepage.vue'
export { default as PagetwoFilters } from '../..\\components\\Pagetwo\\PagetwoFilters.vue'
export { default as PagetwoPagination } from '../..\\components\\Pagetwo\\PagetwoPagination.vue'

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

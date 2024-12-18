export { default as HomepageActivities } from '../..\\components\\HomepageActivities.vue'
export { default as HomepageClock } from '../..\\components\\HomepageClock.vue'
export { default as HomepageModalActivity } from '../..\\components\\HomepageModalActivity.vue'
export { default as HomepageModalForm } from '../..\\components\\HomepageModalForm.vue'
export { default as HomepageModalFormEdit } from '../..\\components\\HomepageModalFormEdit.vue'

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

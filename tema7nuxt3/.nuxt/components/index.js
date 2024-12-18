export { default as CommonFooter } from '../..\\components\\Common\\CommonFooter.vue'
export { default as CommonMenu } from '../..\\components\\Common\\CommonMenu.vue'
export { default as CommonSubmitModal } from '../..\\components\\Common\\CommonSubmitModal.vue'
export { default as HomepageContact } from '../..\\components\\Homepage\\HomepageContact.vue'
export { default as HomepageIntro } from '../..\\components\\Homepage\\HomepageIntro.vue'
export { default as HomepagePortofolio } from '../..\\components\\Homepage\\HomepagePortofolio.vue'
export { default as HomepageServices } from '../..\\components\\Homepage\\HomepageServices.vue'
export { default as HomepageSkills } from '../..\\components\\Homepage\\HomepageSkills.vue'
export { default as HomepageTeam } from '../..\\components\\Homepage\\HomepageTeam.vue'
export { default as HomepageTestimonials } from '../..\\components\\Homepage\\HomepageTestimonials.vue'

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

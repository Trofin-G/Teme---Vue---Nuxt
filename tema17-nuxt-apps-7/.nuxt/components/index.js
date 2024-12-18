export { default as CommonContactBar } from '../..\\components\\common\\CommonContactBar.vue'
export { default as CommonFooter } from '../..\\components\\common\\CommonFooter.vue'
export { default as CommonHeader } from '../..\\components\\common\\CommonHeader.vue'
export { default as CommonOfeersBar } from '../..\\components\\common\\CommonOfeersBar.vue'
export { default as LpLegalArticles } from '../..\\components\\LpLegal\\LpLegalArticles.vue'
export { default as LpLegalDocuments } from '../..\\components\\LpLegal\\LpLegalDocuments.vue'
export { default as LpLegalIntro } from '../..\\components\\LpLegal\\LpLegalIntro.vue'
export { default as LpLegalSidebar } from '../..\\components\\LpLegal\\LpLegalSidebar.vue'
export { default as LpLegalSocials } from '../..\\components\\LpLegal\\LpLegalSocials.vue'

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

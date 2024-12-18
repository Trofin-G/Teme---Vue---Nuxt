export { default as EndPage } from '../..\\components\\EndPage.vue'
export { default as Sidebar } from '../..\\components\\Sidebar.vue'
export { default as StartPage } from '../..\\components\\StartPage.vue'
export { default as StepFive } from '../..\\components\\StepFive.vue'
export { default as StepFour } from '../..\\components\\StepFour.vue'
export { default as StepOne } from '../..\\components\\StepOne.vue'
export { default as StepSix } from '../..\\components\\StepSix.vue'
export { default as StepThree } from '../..\\components\\StepThree.vue'
export { default as StepTwo } from '../..\\components\\StepTwo.vue'

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

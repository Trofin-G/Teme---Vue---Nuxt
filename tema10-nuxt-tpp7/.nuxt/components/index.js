export { default as ContractsList } from '../..\\components\\Contracts\\ContractsList.vue'
export { default as ContractsPagination } from '../..\\components\\Contracts\\ContractsPagination.vue'
export { default as ContractsSidebar } from '../..\\components\\Contracts\\ContractsSidebar.vue'
export { default as ContractsToolsbar } from '../..\\components\\Contracts\\ContractsToolsbar.vue'
export { default as CommonFooter } from '../..\\components\\Common\\CommonFooter.vue'
export { default as CommonHeader } from '../..\\components\\Common\\CommonHeader.vue'
export { default as CommonSidebar } from '../..\\components\\Common\\CommonSidebar.vue'
export { default as CommonToolsbar } from '../..\\components\\Common\\CommonToolsbar.vue'
export { default as CreateContractStepOne } from '../..\\components\\CreateContract\\CreateContractStepOne.vue'
export { default as CreateContractSteps } from '../..\\components\\CreateContract\\CreateContractSteps.vue'
export { default as CreateContractStepThree } from '../..\\components\\CreateContract\\CreateContractStepThree.vue'
export { default as CreateContractStepTwo } from '../..\\components\\CreateContract\\CreateContractStepTwo.vue'
export { default as CreateMessageForm } from '../..\\components\\CreateMessage\\CreateMessageForm.vue'
export { default as HomepageList } from '../..\\components\\Homepage\\HomepageList.vue'
export { default as HomepagePagination } from '../..\\components\\Homepage\\HomepagePagination.vue'
export { default as MessageDetailsContent } from '../..\\components\\MessageDetails\\MessageDetailsContent.vue'

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

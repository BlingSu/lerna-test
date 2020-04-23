import MobileHeader from './mobile-header.vue'

const MobileHeader2 = {
  install (Vue) {
    Vue.component(MobileHeader.name, MobileHeader)
  }
}

if (typeof window !== 'function' && window.Vue) {
  window.Vue.use(MobileHeader2)
}

export default MobileHeader2
export { MobileHeader }

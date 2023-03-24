export { default as Footer } from '../../components/global/footer.vue'
export { default as Heading } from '../../components/global/heading.vue'
export { default as NavBar } from '../../components/global/navBar.vue'
export { default as Overlay } from '../../components/global/overlay.vue'
export { default as SideBar } from '../../components/global/sideBar.vue'
export { default as Landing } from '../../components/landing.vue'
export { default as PricingCard } from '../../components/pricingCard.vue'
export { default as TeamCard } from '../../components/teamCard.vue'
export { default as BaseCounterComponent } from '../../components/base/counterComponent.vue'
export { default as BaseCtaCard } from '../../components/base/ctaCard.vue'
export { default as BasePrimaryIconButton } from '../../components/base/primaryIconButton.vue'
export { default as BasePrimaryTextButton } from '../../components/base/primaryTextButton.vue'
export { default as LandingDeLogoGrid } from '../../components/landing/deLogoGrid.vue'
export { default as LandingDistroLogoGrid } from '../../components/landing/distroLogoGrid.vue'
export { default as LandingFeature } from '../../components/landing/feature.vue'
export { default as LandingFeatureCard } from '../../components/landing/featureCard.vue'
export { default as LandingHeader } from '../../components/landing/landingHeader.vue'
export { default as LandingProductComponent } from '../../components/landing/productComponent.vue'
export { default as LandingWmLogoGrid } from '../../components/landing/wmLogoGrid.vue'
export { default as StepsCard } from '../../components/steps/stepsCard.vue'
export { default as TestimonialCard } from '../../components/testimonial/testimonialCard.vue'
export { default as TestimonialModdedOsCard } from '../../components/testimonial/testimonialModdedOsCard.vue'

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

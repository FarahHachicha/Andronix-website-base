<template>
  <div class="">
    <div
      class="h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col"
    >
      <Heading
        class="px-10"
        heading="The Power of Andronix"
        deco_heading="ANDRONIX PREMIUM"
        sub_heading="Andronix Premium acts as an extension to the Andronix app. It adds features like Offline Distribution Installation, Andronix Commands, and much more."
      />

      <primary-text-button @click="$router.push('/pricing')" label="GET NOW"/>
    </div>

    <!--  Features   -->
    <div class="mt-24 px-12 md:px-24">
      <Heading
        heading="How can I do with Andronix Premium?"
        sub_heading="Andronix Premium gives you discounts on other products across Andronix. It also gives you access to Andronix Commands, which helps you manage your Terminal commands and much more."
        deco_heading="ANDRONIX"
      />
      <div>
        <div
          class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10 text-white font-sans text-center items-center"
        >
          <feature-card
            v-for="features in premiumFeatures"
            :title="features.title"
            :key="features.color"
            :desc="features.sub_title"
            :color="features.color"
          >
            <div v-html="features.icon"></div>
          </feature-card>
        </div>
      </div>
      <p class="text-gray-400 text-xs mt-6 text-center">
        ** Modded Discounts are only available via in-app purchases as of now. Additionally, the eligibility of the discount can vary due to the differences in taxes across the globe.
      </p>
    </div>

    <!-- Metrics -->
    <div class="section-gap">
      <heading
        heading="Premium Metrics"
        sub_heading="Take a look at where our Modded OS Stands."
        deco_heading="METRICS"
      />

      <div
        class="grid grid-cols-1 gap-y-12 gap-x-4 md:grid-cols-2 lg:grid-cols-4 text-white font-sans text-center justify-center"
      >
        <counter-component
          v-for="meta in metric"
          :value="meta.value"
          :key="meta.color"
          :heading="meta.param"
          :color="meta.color"
        >
          <div v-html="meta.icon"></div>
        </counter-component>
      </div>
    </div>

    <div class="section-gap">
      <Heading
        heading="Andronix Commands"
        sub_heading="Manage all your terminal commands and more from around the world. Andronix Commands comes bundled with Andronix Premium."
        deco_heading="COMMANDS"
      />

      <div>
        <img
          class="mx-auto w-11/12 md:w-3/6 lg:w-1/2"
          src="~/assets/images/screenshots/andronix-commands-app-ss.png"
          alt=""
        />
      </div>

      <PrimaryTextButton
        class="xxs:w-full w-1/2 lg:w-1/4 mx-auto pt-24"
        @click="$router.push('/products/commands')"
        label="GET ANDRONIX COMMANDS"
      />
    </div>

    <!-- Testimonials   -->
    <div class="section-gap">
      <Heading
        heading="What people say!"
        sub_heading="Listen to what our users say about us all around the internet."
        deco_heading="ANDRONIX"
      />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3 md:gap-8"
      >
        <testimonial-modded-os-card
          v-for="testimonial in testimonials"
          :name="testimonial.name"
          :title="testimonial.title"
          :quote="testimonial.quote"
          :key="testimonial.quote"
        >
          <div v-html="testimonial.icon"></div>
        </testimonial-modded-os-card>
      </div>
    </div>

    <div class="mt-48 -mb-40">
      <div class="bg-primary-600 bg-opacity-50 rounded-t-lg px-5 py-5">
        <div class="flex justify-between items-center">
          <div class="text-gray-200">
            <h3 class="font-extrabold text-2xl">Get Andronix Premium.</h3>
            <p class="font-medium text-gray30">
              You get some nice perks and you also help us maintain this
              project.
            </p>
          </div>
          <PrimaryTextButton
            @click="$router.push('/checkout/buy/premium')"
            label="GET NOW"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import features from '~/static/data/features/premium-features.json'
import testimonials from '~/static/data/testimonials/premium-testimonials.json'
import metrics from '~/static/data/misc/premium-metric.json'

import meta from '~/static/seo/meta-head.json'
import PrimaryTextButton from "~/components/base/primaryTextButton";
import FeatureCard from "~/components/landing/featureCard";
import Heading from "~/components/global/heading";
import CounterComponent from "~/components/base/counterComponent";
import TestimonialModdedOsCard from "~/components/testimonial/testimonialModdedOsCard";

export default {
  components: {TestimonialModdedOsCard, CounterComponent, Heading, FeatureCard, PrimaryTextButton},
  head() {
    return {
      title: meta.premium.title,
      meta: [{
        hid: meta.premium.hid,
        name: meta.premium.name,
        content: meta.premium.content
      }]
    }
  },
  name: 'index',
  data: function () {
    return {
      premiumFeatures: features.features,
      metric: metrics.metadata,
      testimonials: testimonials.testimonials,
    }
  },
}
</script>

<style scoped>
</style>

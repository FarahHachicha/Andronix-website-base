<template>
  <div>
    <div class="flex-col justify-between">
      <div class="rounded-t-lg md:rounded-t-lg bg-card_background pb-6 pt-3 px-6">
        <div class="my-4 w-14 h-14 mx-auto bg-background flex items-center justify-center rounded-full p-3">
          <slot></slot>
        </div>
        <div class="text-white font-sans text-left text-center">
          <h2 class="font-extrabold text-2xl mb-4">
            {{ title }}
          </h2>
          <p class="">
            {{ desc }} </p>
        </div>
        <div class="mt-5 flex items-center justify-center">
          <primary-text-button v-if="!buttonInternalLink" :link="buttonLink"
                               :backgroundColor="buttonColor"
                               :label="buttonText ? buttonText: `Join now!`" :textHoverColor="buttonColor"
          />
          <primary-text-button v-else @click="$router.push(buttonInternalLink)"
                               :backgroundColor="buttonColor"
                               :label="buttonText ? buttonText: `Join now!`" :textHoverColor="buttonColor"
          />
          <!--          <button
                      class="w-1/2 px-3 py-2 rounded mt-6 text-white font-extrabold text-center transition ease-in-out duration-300 shadow-2xl transform hover:scale-105"
                      :class="buttonColor"
                      :href="buttonLink"
                    >
                      Join now!
                    </button>-->
        </div>
      </div>
      <div class="h-1.5 rounded-b-lg" :class="color ? color : 'bg-primary-400'">
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryTextButton from "~/components/base/primaryTextButton";

export default {
  components: {PrimaryTextButton},
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    color: {
      type: String
    },
    buttonColor: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
    },
    buttonInternalLink: {
      type: String,
    },
    buttonText: {
      type: String,
    }
  },
  name: 'CtaCard'
}
</script>

<style scoped>

</style>

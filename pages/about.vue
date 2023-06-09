<template>
  <XyzTransition :appear-visible="true" duration="auto">
    <div>
      <div
        class="h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col"
      >
        <Heading
          class="px-10"
          heading="Who are we?"
          deco_heading="ANDRONIX"
          sub_heading="We are developers from India who like to share our knowledge and try to deliver a platform to mobile users to make them aware of the Linux kernel and distributions, providing them a way to use desktop software on their Android devices. We are really thankful to all our users and our additional team members for supporting us and bringing us to where we are today."
        />

        <primary-text-button label="TALK TO US" link="https://chat.andronix.app"/>
      </div>

      <div class="section-gap">
        <heading
          heading="Our Story"
          deco_heading="ABOUT"
          sub_heading="It's kinda long but quite interesting. It's our story from yet another app that let's you install Linux to one of the top ones in the domain."
        />
        <p class="text-gray-300 text-center md:px-12 lg:px-24 tracking-wide leading-loose lg:leading-8 md:text-lg">
          The idea of Andronix was incepted in 2019 when we, Prakhar Shukla and Anurag Verma, were riding back home from
          our workout. It struck us that people use their phones as computers either because they cannot afford them or
          for portability. So we thought of converting that idea into an app which ended up us finding that apps that
          helped you install Linux on Android. However, there were a few issues. First, they were just outdated and ugly
          to look at, and secondly, if you're stuck, you're basically on your own.
          <br>
          <br>

          Andronix was born. We released our first version, way different from what it currently offers. The journey
          started, and soon we released Andronix Premium, Andronix Commands, and then the most anticipated product, the
          Andronix Modded OS. We enjoyed and learned a lot while developing for Andronix. It gave us a platform to
          refine our passion for programming.
          <br>
          <br>

          To say that Andronix has changed our lives would be an understatement because of all the love we get, whether
          from the people rating us or emailing us about how much they love using Andronix to the mods over at Discord
          helping us to keep things moving around here. We are ever so grateful for all the love and support we get.

          <br>
          <br>

          <strong class="font-bold text-white text-lg">Andronix, as of July 2021, is now a part of Devriz Technologies
            LLP.</strong>
        </p>
      </div>

      <!-- Team -->
      <div class="section-gap">
        <Heading
          heading="Our Team"
          deco_heading="MEET US"
          sub_heading="Here we are. We have a spectrum of people down here, from developers to community moderators to people who support us and much more."
        />

        <div
          class="grid-cols-1 md:grid-cols-2 grid gap-y-8 gap-x-4 justify-center items-center"
        >
          <team-card
            class="justify-self-center"
            :class="
              index === 0 ? 'md:justify-self-end' : 'md:justify-self-start'
            "
            v-for="(member, index) in teams.dev"
            :name="member.name"
            :key="member.name"
            :position="member.position"
            :quote="member.quote"
            :photo_url="member.photo_url"
          />
        </div>

        <!--   Support Team     -->
        <XyzTransition :appear-visible="true" duration="auto">
          <div class="px-5 py-5 mt-16 pb-16">
            <div
              class="flex-col space-y-4"
              xyz="fade flip-down duration-10 delay-2 stagger ease-out-back"
            >
              <h2 class="heading-2 xyz-nested">Support Team</h2>
            </div>
          </div>
        </XyzTransition>
        <div
          class="grid-cols-1 md:grid-cols-2 grid gap-y-8 gap-x-4 justify-center items-center"
        >
          <TeamCard
            class="justify-self-center"
            :class="
              index === 0 ? 'md:justify-self-end' : 'md:justify-self-start'
            "
            v-for="(member, index) in teams.support"
            :name="member.name"
            :key="member.name"
            :position="member.position"
            :quote="member.quote"
            :photo_url="member.photo_url"
          />
        </div>

        <!--        &lt;!&ndash; Special mentions &ndash;&gt;
                <XyzTransition :appear-visible="true" duration="auto">
                  <div class="px-5 py-5 mt-16 pb-16">
                    <div
                      class="flex-col space-y-4"
                      xyz="fade flip-down duration-10 delay-2 stagger ease-out-back"
                    >
                      <h2 class="heading-2 xyz-nested">Special Mentions</h2>
                    </div>
                  </div>
                </XyzTransition>
                <div
                  class="grid-cols-1 md:grid-cols-2 grid gap-y-8 gap-x-4 justify-center items-center"
                >
                  <TeamCard
                    class="justify-self-center"
                    :class="
                      index === 0 ? 'md:justify-self-end' : 'md:justify-self-start'
                    "
                    v-for="(member, index) in teams.specials"
                    :name="member.name"
                    :key="member.name"
                    :position="member.position"
                    :quote="member.quote"
                    :photo_url="member.photo_url"
                  />
                </div>-->
      </div>
    </div>
  </XyzTransition>
</template>

<script>
import teams from '~/static/data/misc/teams.json'
import meta from '~/static/seo/meta-head.json'
import Heading from "~/components/global/heading";
import PrimaryTextButton from "~/components/base/primaryTextButton";
import TeamCard from "~/components/teamCard";

export default {
  components: {TeamCard, PrimaryTextButton, Heading},
  head() {
    return {
      title: meta.about.title,
      meta: [{
        hid: meta.about.hid,
        name: meta.about.name,
        content: meta.about.content
      }]
    }
  },
  name: 'about.vue',
  data: function () {
    return {
      teams,
    }
  },
}
</script>

<style scoped>
</style>

<template>
  <div class="bg-background">
    <landing-header/>
    <nav-bar/>
    <side-bar/>
    <Nuxt class="lg:max-w-screen-2xl pt-20 mx-auto"/>
    <Footer/>
  </div>
</template>

<script>
import {auth} from '~/plugins/firebase'
import NavBar from "~/components/global/navBar";
import SideBar from "~/components/global/sideBar";

export default {
  components: {SideBar, NavBar},
  created() {
    this.observeAuthStateChange()
  },
  methods: {
    observeAuthStateChange() {
      let ctx = this
      auth.onAuthStateChanged(function (user) {
        if (user) {
          let data = {
            email: user.email,
            uid: user.uid,
            photo_url: user.photoURL,
            name: user.displayName
          }
          console.log({data})
          ctx.$store.commit('auth/SET_USER_INFO', data)
          ctx.$store.commit('auth/SET_LOGGED_IN_STATE', true)
        } else {
          ctx.$store.commit('auth/SET_USER_INFO', null)
          ctx.$store.commit('auth/SET_LOGGED_IN_STATE', false)
        }
      })
    }
  }
}
</script>


<style>
*,
html {

}

body {
  background-color: #0f1535;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>


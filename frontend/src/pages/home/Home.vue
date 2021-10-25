<template>
  <div class="home min-h-full">
    <AppBar class="fixed w-full z-50"/>
    <HomeIntroSection />
    <ItemsSection/>
    <Footer/>
   
  </div>
</template>

<script>
// @ est un alias de /src
import AppBar from "@/components/appbar/AppBar.vue"
import Footer from "@/components/appbar/Footer.vue"
import HomeIntroSection from "@/components/sections/HomeIntroSection.vue"
import ItemsSection from "@/components/sections/ItemsSection.vue"

export default {
  name: 'Home',
  components: {
    AppBar,
    Footer,
    ItemsSection,
    HomeIntroSection
  }
}
</script>

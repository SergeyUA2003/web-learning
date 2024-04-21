<template>
  <NavHeader/>
  <HomeMain/>
  <NavFooter/>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from "@/components/NavFooter.vue";

import HomeMain from '@/components/HomeMain.vue'

export default {
  name: 'WebLearnApplication',
  components: {
    NavHeader: NavHeader,
    HomeMain: HomeMain,
    NavFooter: NavFooter,
  }
}
</script>

<style>

</style>

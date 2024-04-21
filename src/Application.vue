<template>
  <NavHeader />
  <router-view />
  <NavFooter />
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from "@/components/NavFooter.vue";

export default {
  name: 'WebLearnApplication',
  components: {
    NavHeader: NavHeader,
    NavFooter: NavFooter,
  }
}
</script>

<style>

</style>

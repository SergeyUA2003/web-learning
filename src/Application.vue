<template>
  <NavHeader />
  <router-view :key="$route.fullPath"/>
  <NavFooter />
</template>

<script>
import NavHeader from '@/components/parts/NavHeader.vue'
import NavFooter from "@/components/parts/NavFooter.vue";

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

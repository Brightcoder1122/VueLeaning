<template>
  <NavBarComponent/>
  <router-view/>
</template>

<script>

import NavBarComponent from "@/components/NavBarComponent";
export default {
  name: 'App',
  components: {
    NavBarComponent
  }
}
</script>

<style>

</style>

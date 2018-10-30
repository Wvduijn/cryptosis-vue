<template>
  <div id="app">
    <div id="nav">
      <app-header />
    </div>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './app-header';

export default {
  name: 'App',
  created(){
    this.$store.dispatch('getCoins');
    this.$store.dispatch('getMarketData');
    // get coin info for images once
    this.$store.dispatch('getCoinMetaData');
  },
  components: {
    'app-header': AppHeader
  }
}
</script>

<style src="@/assets/styles/app.css">
</style>

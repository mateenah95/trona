<template>
  <div class="container container-fluid border border-dark py-5 rounded text-light home">
    <h1 class="text-shadow">T-Rona</h1>
    <h3>COVID-19 Tracker</h3>
    <LocationBar />
    <InfoBar />
    <SearchBar />
  </div>
</template>

<style>
  body {
        background: linear-gradient(#8D4C7B,#19094E);
  }

  .home {
    background: rgba(0,0,0,0.2);
    font-family: 'Coda', cursive;
  }

  .text-shadow {
    text-shadow: 2px 2px darkred;
  }
  .text-shadow-light {
    text-shadow: 2px 1px lightseagreen;
  }
</style>

<script>
import LocationBar from "../components/LocationBar.vue";
import InfoBar from "../components/InfoBar.vue";
import SearchBar from "../components/SearchBar.vue";


export default {
  name: "Home",
  components: {
    LocationBar,
    InfoBar,
    SearchBar
  }
};
</script>

<template>
  <div class="root">
    <Header />
    <Places />
    <FlipGame />
    <TopRegions />
    <Tours />
    <Invitation />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer/Footer.vue";
import Header from "@/components/header/Header.vue";
import Places from "@/components/places/Places.vue";
import TopRegions from "@/components/top-regions/TopRegions.vue";
import Invitation from "@/components/suggestion/Invitation.vue";
import Tours from "@/components/tours/Tours.vue";
import FlipGame from "@/components/flip-game/FlipGame.vue";

export default {
  name: "Error",
  components: {
    Footer,
    Header,
    Places,
    TopRegions,
    Invitation,
    Tours,
    FlipGame,
  },
};
</script>

<style lang="scss"></style>

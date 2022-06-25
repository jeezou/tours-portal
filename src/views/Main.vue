<template>
  <div class="root">
    <Header />
    <div class="container">
      <Places />
      <TopRegions />
      <Tours />
      <Invitation />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Places from "@/components/Places.vue";
import TopRegions from "@/components/TopRegions.vue";
import Invitation from "@/components/Invitation.vue";
import Tours from "@/components/Tours.vue";

export default {
  name: "Error",
  components: { Footer, Header, Places, TopRegions, Invitation, Tours },
};
</script>

<style lang="scss"></style>

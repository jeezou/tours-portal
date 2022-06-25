<template>
  <div class="root">
    <Header />
    <div class="container">
      <Places />
      <TopRegions />
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

export default {
  name: "Error",
  components: { Footer, Header, Places, TopRegions, Invitation },
};
</script>

<style lang="scss"></style>

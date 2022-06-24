<template>
  <div class="root">
    <Header />
    <Places />

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Places from "@/components/Places.vue";
export default {
  name: "Error",
  components: { Footer, Header, Places },
};
</script>

<style lang="scss">
.root {
}
</style>

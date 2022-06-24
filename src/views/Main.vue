<template>
  <div class="root">
    <Header />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Error",
  components: { Footer, Header },
};
</script>

<style lang="scss"></style>

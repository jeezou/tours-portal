<template>
  <div class="card">
    <img :src="img" alt="name" class="card__img" />
    <div class="card__name" v-html="name"></div>
  </div>
</template>

<script>
export default {
  name: "PlaceCard",
  props: {
    img: String,
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  background: $white;
  border-radius: 16px;
  overflow: hidden;

  &__name {
    padding: 32px 24px 24px 24px;
    color: $black;
    font-weight: 500;
    line-height: 23px;
  }
}
</style>

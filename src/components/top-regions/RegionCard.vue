<template>
  <div class="card">
    <img
      :src="require(`@/assets/images/places/${data.img}`)"
      alt="name"
      class="card__img"
    />
    <div class="card__name" v-html="data.name"></div>
  </div>
</template>

<script>
export default {
  name: "PlaceCard",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  background: $white;
  border-radius: 16px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px $box-shadow;
  }

  &__name {
    padding: 32px 24px 24px 24px;
    color: $black;
    font-weight: 500;
    line-height: 23px;
  }

  &__img {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .card {
    border-radius: 12px;
    &__name {
      padding: 14px 20px 15px 15px;
      font-size: 15px;
    }
  }
}
</style>

<template>
  <div class="card">
    <div class="card__img-wrapper">
      <img :src="img" alt="name" class="card__img" />
    </div>
    <div class="card__name" v-html="name"></div>
  </div>
</template>

<script>
export default {
  name: "EmojiCard",
  props: {
    img: String,
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  align-items: center;

  background: $cards;

  width: 312px;
  min-width: 312px;
  height: 445px;

  box-sizing: border-box;

  row-gap: 85px;

  padding: 85px 0 10px;

  box-shadow: 0px 8px 10px rgba(156, 164, 169, 0.2);

  &__img-wrapper {
    width: 150px;
    height: 150px;

    background: radial-gradient(
      100% 100% at 0% 0%,
      rgba(250, 250, 250, 0.2) 0%,
      rgba(247, 247, 247, 0.04) 100%
    );

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 38px;
  }

  &__name {
    color: $white;
    font-weight: 700;
    font-size: 28px;
    line-height: 43px;

    width: 100%;

    text-align: center;
  }
}
</style>

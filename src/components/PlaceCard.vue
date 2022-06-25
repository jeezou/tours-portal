<template>
  <div class="card">
    <div class="card__tag" :style="{ background: color }">
      {{ tag }}
    </div>
    <img :src="img" alt="name" class="card__img" />

    <div class="card__content">
      <div class="card__name">
        {{ name }}
      </div>
      <div class="card__location">
        {{ location }}
        <span>
          <img
            src="../assets/icons/map-pin-gray.svg"
            alt="location ico"
            class="card__location-icon"
          />
        </span>
      </div>
      <img src="../assets/icons/like.svg" alt="like ico" class="card__like" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceCard",
  props: {
    img: String,
    name: String,
    location: String,
    tag: String,
    color: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  background: $white;
  border-radius: 16px;
  overflow: hidden;

  &__tag {
    position: absolute;
    top: 22px;
    left: 25px;

    padding: 5px 15px;

    border-radius: 8px;
    color: $white;
    font-weight: 500;
  }

  &__content {
    padding: 24px;

    display: grid;
    grid-template-areas:
      "name like"
      "location like";

    row-gap: 8px;
  }

  &__like {
    grid-area: like;
    width: 24px;
    justify-self: flex-end;
  }

  &__name {
    grid-area: name;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
  }

  &__location {
    display: flex;
    grid-area: location;
    display: flex;
    column-gap: 8px;
    align-items: flex-end;

    color: $form-gray-3;
    line-height: 21px;
  }

  &__location-icon {
    width: 24px;
  }
}
</style>

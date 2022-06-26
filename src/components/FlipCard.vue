<template>
  <div class="flip-card" @click="handleClick">
    <div
      class="flip-card__inner"
      :class="{ 'flip-card__inner--active': active }"
    >
      <div class="flip-card__front" :style="{ background: color }">
        <div class="flip-card__main-index">
          {{ index !== 0 ? `0${index}` : "0" }}
        </div>
        <div class="flip-card__top-index">
          {{ index }}
        </div>
        <div class="flip-card__bottom-index">
          {{ index }}
        </div>
      </div>
      <div class="flip-card__back">
        <img :src="img" alt="name" class="flip-card__img" />
        <div class="flip-card__content">
          <div class="flip-card__name">{{ name }}</div>
          <div class="flip-card__location">
            {{ location }}
            <span>
              <img
                src="../assets/icons/map-pin-gray.svg"
                alt="location ico"
                class="card__location-icon"
              />
            </span>
          </div>
          <button class="flip-card__btn">Подробнее</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlipCard",
  data() {
    return {
      active: false,
    };
  },
  props: {
    img: String,
    name: String,
    location: String,
    color: String,
    index: Number,
  },
  methods: {
    handleClick() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
.flip-card {
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-sizing: content-box;

  user-select: none;
  perspective: 1000px;

  &__inner {
    margin: 60px 5px;
    position: relative;
    width: 100%;
    text-align: center;
    transition: all 0.6s;
    transform-style: preserve-3d;
    width: 280px;
    height: 395px;

    border-radius: 24px;
    &--active {
      transform: rotateY(180deg);
    }
  }

  &__front,
  &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    visibility: visible;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    border-radius: 24px;
    box-shadow: inset 0 0 0 1px $card-border;
    overflow: hidden;
  }

  &__main-index,
  &__top-index,
  &__bottom-index {
    position: absolute;
    font-family: "Roboto Mono", sans-serif;
    font-weight: 400;
    font-size: 48px;
    color: $white;
  }

  &__main-index {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 96px;
  }

  &__top-index {
    top: 5%;
    left: 7%;
  }

  &__bottom-index {
    bottom: 5%;
    right: 7%;
  }

  &__back {
    width: 100%;
    color: $black;
    transform: rotateY(180deg);

    background: $white;
  }

  &__img {
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 32px 24px 10px 24px;

    row-gap: 10px;

    color: $black;
  }

  &__name {
    font-weight: 500;
    font-size: 20px;
    align-self: flex-start;
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

  &__btn {
    margin-top: 15px;
    padding: 12px 0;
    border-radius: 12px;
    flex-grow: 1;

    background: $form-gray-5;
    color: $primary;

    font-weight: 700;

    transition: all 0.2s ease-in-out;

    &:hover {
      color: $white;
      background: $primary-light;
    }
  }
}

@media screen and (max-width: 500px) {
  .flip-card {
    &__inner {
      width: 250px;
      height: 370px;
    }

    &__content {
      padding: 25px 24px;
    }
  }
}
</style>

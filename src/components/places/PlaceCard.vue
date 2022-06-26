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
            src="@/assets/icons/map-pin-gray.svg"
            alt="location ico"
            class="card__location-icon"
          />
        </span>
      </div>
      <div
        class="card__like"
        :class="{ 'card__like--active': active }"
        @click="handleLike"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.84 4.61012C20.3292 4.09912 19.7228 3.69376 19.0554 3.4172C18.3879 3.14064 17.6725 2.99829 16.95 2.99829C16.2275 2.99829 15.5121 3.14064 14.8446 3.4172C14.1772 3.69376 13.5708 4.09912 13.06 4.61012L12 5.67012L10.94 4.61012C9.9083 3.57842 8.50903 2.99883 7.05 2.99883C5.59096 2.99883 4.19169 3.57842 3.16 4.61012C2.1283 5.64181 1.54871 7.04108 1.54871 8.50012C1.54871 9.95915 2.1283 11.3584 3.16 12.3901L4.22 13.4501L12 21.2301L19.78 13.4501L20.84 12.3901C21.351 11.8794 21.7563 11.2729 22.0329 10.6055C22.3095 9.93801 22.4518 9.2226 22.4518 8.50012C22.4518 7.77763 22.3095 7.06222 22.0329 6.39476C21.7563 5.7273 21.351 5.12087 20.84 4.61012V4.61012Z"
            stroke="#9EA6B6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
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
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    if (favourites.includes(this.name)) this.active = true;
  },
  methods: {
    handleLike() {
      let favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
      let inFavs = false;
      if (favourites.includes(this.name)) inFavs = true;
      if (!inFavs) {
        favourites.push(this.name);
        this.active = true;
      } else {
        favourites = favourites.filter((el) => el != this.name);
        this.active = false;
      }
      localStorage.setItem("favourites", JSON.stringify(favourites));
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  background: $white;
  border-radius: 16px;
  overflow: hidden;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px $box-shadow;
  }

  &__img {
    align-self: center;
    width: 100%;
  }

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
    height: 24px;
    justify-self: flex-end;

    path {
      transition: all 0.15s ease-in-out;
    }

    &:hover path {
      stroke: red;
    }

    &--active {
      path {
        stroke: red;
      }
    }
  }

  &__name {
    grid-area: name;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    white-space: nowrap;
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

@media screen and (max-width: 768px) {
  .card {
    border-radius: 12px;
    &__content {
      padding: 20px 17px;
    }

    &__tag {
      top: 5%;
      left: 5%;
      padding: 5px 10px;
      font-size: 12px;
    }

    &__name {
      white-space: normal;
      font-size: 16px;
    }

    &__location {
      font-size: 14px;

      column-gap: 2px;
      align-items: center;
    }

    &__like {
      width: 20px;
    }
  }
}
</style>

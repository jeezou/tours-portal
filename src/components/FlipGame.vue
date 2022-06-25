<template>
  <section class="flip-game">
    <div class="container">
      <h2 class="heading">Выбери виртуальный тур</h2>
      <p class="desc">Видео, VR, Видео 360°, 3D</p>
      <div class="flip-cards">
        <template v-for="(card, index) in $options.cards" :key="index">
          <FlipCard
            :img="require(`@/assets/images/places/${card.img}`)"
            :name="card.name"
            :location="card.location"
            :color="card.color"
            :index="index"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import FlipCard from "@/components/FlipCard.vue";

export default {
  name: "FlipGame",
  components: { FlipCard },
  cards: [
    {
      img: "kremlin.jpg",
      color: "#22C56D",
      name: "Кремль",
      location: "Москва",
    },
    {
      img: "peterhof.jpg",
      color: "#3971EE",
      name: "Петергоф",
      location: "Санкт-Петербург",
    },
    {
      img: "baikal.jpg",
      color: "#FF7844",
      name: "Озеро Байкал",
      location: "Иркутск",
    },
    {
      img: "erarta.jpg",
      color: "#7B61FF",
      name: "Музей Эрарта",
      location: "Санкт-Петербург",
    },
  ],
};
</script>

<style lang="scss">
.flip-game {
  padding: 96px 100px 30px;

  display: flex;
  justify-content: center;

  background: $cards;
  background-image: url("../assets/images/pattern.png"),
    linear-gradient(144deg, $cards 72%, $primary 100%);
  background-size: repeat;

  .container {
    width: 100%;
    max-width: 1320px;

    .heading {
      font-size: 36px;
      font-weight: 500;
      line-height: 56px;
      margin-bottom: 16px;

      color: $white;
    }

    .desc {
      font-size: 18px;
      color: $form-gray-1;
      line-height: 28px;
      font-weight: 400;
    }

    .flip-cards {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
  }
}
</style>

<template>
  <section class="places">
    <div class="container">
      <h2 class="heading">Интересные места</h2>
      <div class="cards">
        <template v-for="(card, index) in $options.cards" :key="index">
          <PlaceCard
            :img="require(`@/assets/images/places/${card.img}`)"
            :name="card.name"
            :tag="card.tag"
            :color="card.color"
            :location="card.location"
          />
        </template>
      </div>
      <div class="btn">Посмотреть все места</div>
    </div>
  </section>
</template>

<script>
import PlaceCard from "@/components/PlaceCard.vue";

export default {
  name: "Places",
  components: { PlaceCard },
  cards: [
    {
      img: "copper-rider.jpg",
      tag: "360°",
      color: "#FF7844",
      name: "Медный всадник",
      location: "Санкт-Петербург",
    },
    {
      img: "motherland.jpg",
      tag: "Видео",
      color: "#40B3E0",
      name: "Родина-мать",
      location: "Волгоград",
    },
    {
      img: "pushkin.jpg",
      tag: "3D",
      color: "#22C56D",
      name: "Памятник Пушкину",
      location: "Санкт-Петербург",
    },
    {
      img: "kremlin.jpg",
      tag: "3D",
      color: "#22C56D",
      name: "Кремль",
      location: "Москва",
    },
    {
      img: "peterhof.jpg",
      tag: "360°",
      color: "#FF7844",
      name: "Петергоф",
      location: "Санкт-Петербург",
    },
    {
      img: "baikal.jpg",
      tag: "3D",
      color: "#22C56D",
      name: "Озеро Байкал",
      location: "Иркутск",
    },
    {
      img: "erarta.jpg",
      tag: "360°",
      color: "#FF7844",
      name: "Музей Эрарта",
      location: "Санкт-Петербург",
    },
    {
      img: "hermitage.jpg",
      tag: "Видео",
      color: "#40B3E0",
      name: "Эрмитаж",
      location: "Санкт-Петербург",
    },
  ],
};
</script>

<style lang="scss">
.places {
  padding: 96px 100px;

  background: $form-gray-2;

  display: flex;
  justify-content: center;

  .container {
    width: 100%;
    max-width: 1320px;

    .heading {
      font-size: 36px;
      font-weight: 500;
      line-height: 56px;
      margin-bottom: 32px;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      gap: 24px;

      margin-bottom: 72px;
    }

    .btn {
      cursor: pointer;
      width: 100%;
      text-align: center;
      background: $primary;
      padding: 20px 0;
      border-radius: 16px;
      color: $white;
      font-weight: 700;
    }
  }
}
</style>

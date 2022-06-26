<template>
  <section class="regions">
    <div class="container">
      <h2 class="heading">Топ посещаемых регионов</h2>
      <div class="cards">
        <template v-for="(card, index) in $options.cards" :key="index">
          <region-card
            :img="require(`@/assets/images/places/${card.img}`)"
            :name="card.name"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import RegionCard from "@/components/top-regions/RegionCard.vue";

export default {
  name: "TopRegions",
  components: { RegionCard },
  cards: [
    {
      img: "moscow.jpg",
      name: "Москва <br> и Московская область",
    },
    {
      img: "spb.jpg",
      name: "Санкт-Петербург <br> и Лениградская область",
    },
    {
      img: "irkutsk.jpg",
      name: "Иркутская <br> область",
    },
    {
      img: "kaliningrad.jpg",
      name: "Калининградская <br> область",
    },
  ],
};
</script>

<style lang="scss">
.regions {
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

      column-gap: 24px;
    }
  }
}

@media screen and (max-width: 1280px) {
  .regions .container {
    .heading {
      text-align: center;
    }
    .cards {
      grid-template-columns: 1fr 1fr;

      row-gap: 40px;

      justify-items: center;

      > * {
        max-width: 350px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .regions {
    padding: 50px 25px;
  }
}
</style>

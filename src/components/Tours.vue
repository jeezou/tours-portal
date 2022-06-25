<template>
  <section class="tours">
    <div class="container">
      <h2 class="heading">Выбери тур</h2>
      <div class="cards-wrapper">
        <div
          class="cards-wrapper__scroll-left"
          @click="horScrollBtnHandler('left')"
          v-if="!leftEdge"
        >
          <img class="icon" src="../assets/icons/arrow.svg" alt="scroll left" />
        </div>
        <div
          class="cards-wrapper__scroll-right"
          @click="horScrollBtnHandler('right')"
          v-if="!rightEdge"
        >
          <img
            class="icon"
            src="../assets/icons/arrow.svg"
            alt="scroll right"
          />
        </div>
        <div class="cards" ref="emojiCards" @scroll="scrollEventHandler">
          <template v-for="(card, index) in $options.cards" :key="index">
            <EmojiCard
              :img="require(`@/assets/images/emojis/${card.img}`)"
              :name="card.name"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EmojiCard from "@/components/EmojiCard.vue";

export default {
  name: "Tours",
  components: { EmojiCard },
  data() {
    return {
      rightEdge: false,
      leftEdge: false,
    };
  },
  cards: [
    {
      img: "bus.png",
      name: "Экскурсионные <br> туры",
    },
    {
      img: "cool.png",
      name: "Индивидуальные <br> туры",
    },
    {
      img: "fam.png",
      name: "Для семей <br> с детьми",
    },
    {
      img: "ball.png",
      name: "Активные <br> туры",
    },
    {
      img: "pizza.png",
      name: "Гастрономические <br> туры",
    },
    {
      img: "mount.png",
      name: "Экстремальные <br> туры",
    },
    {
      img: "palm.png",
      name: "Оздоровительные <br> туры",
    },
    {
      img: "wave.png",
      name: "Круизы",
    },
    {
      img: "wom.png",
      name: "Корпоративным <br> клиентам",
    },
    {
      img: "prod.png",
      name: "Производственные <br> туры",
    },
    {
      img: "vip.png",
      name: "VIP-туры",
    },
  ],
  mounted() {
    this.$refs.emojiCards.scrollLeft =
      this.$refs.emojiCards.scrollWidth / this.$options.cards.length / 2;
  },
  methods: {
    horScrollBtnHandler(dir) {
      const cards = this.$refs.emojiCards;
      const cardWidth = cards.scrollWidth / this.$options.cards.length;
      cards.scrollLeft =
        dir === "right"
          ? cards.scrollLeft + cardWidth
          : cards.scrollLeft - cardWidth;
    },

    scrollEventHandler() {
      const cards = this.$refs.emojiCards;
      this.rightEdge = false;
      this.leftEdge = false;
      if (cards.scrollLeft + cards.clientWidth >= cards.scrollWidth)
        this.rightEdge = true;
      else if (cards.scrollLeft <= 0) this.leftEdge = true;
      console.log(this.$refs.emojiCards.scrollLeft);
    },
  },
};
</script>

<style lang="scss">
.tours {
  padding: 96px 0;
  background: $orange;

  display: flex;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 100%;
    .heading {
      color: $white;
      font-size: 36px;
      font-weight: 500;
      line-height: 56px;
      margin-bottom: 35px;
      max-width: 1320px;
      width: 100%;
    }

    .cards-wrapper {
      width: 100%;

      position: relative;

      &__scroll-left,
      &__scroll-right {
        position: absolute;

        z-index: 1;

        width: 50px;
        height: 100%;

        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          width: 100%;
          height: 50px;
        }
      }

      &__scroll-right {
        right: 10px;
      }

      &__scroll-left {
        transform: scaleX(-1);
        left: 10px;
      }
    }

    .cards {
      box-sizing: border-box;

      padding: 0 25px;
      width: 100vw;
      display: flex;

      column-gap: 20px;

      overflow-x: scroll;

      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }

      scroll-behavior: smooth;
    }
  }
}
</style>

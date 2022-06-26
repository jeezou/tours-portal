<template>
  <section class="tours">
    <div class="container">
      <div class="wrapper">
        <h2 class="heading">Выбери тур</h2>
      </div>
      <div class="cards-wrapper">
        <div
          class="cards-wrapper__scroll-left"
          @click="horScrollBtnHandler('left')"
          v-if="!leftEdge"
        >
          <img class="icon" src="@/assets/icons/arrow.svg" alt="scroll left" />
        </div>
        <div
          class="cards-wrapper__scroll-right"
          @click="horScrollBtnHandler('right')"
          v-if="!rightEdge"
        >
          <img class="icon" src="@/assets/icons/arrow.svg" alt="scroll right" />
        </div>
        <div class="cards" ref="emojiCards" @scroll="scrollEventHandler">
          <template v-for="card in $options.cards" :key="card">
            <emoji-card :data="card" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EmojiCard from "@/components/tours/EmojiCard.vue";

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
      if (Math.ceil(cards.scrollLeft + cards.offsetWidth) >= cards.scrollWidth)
        this.rightEdge = true;
      else if (cards.scrollLeft <= 0) this.leftEdge = true;
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
    margin: 0 100px;
  }

  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 100px;
    box-sizing: border-box;
  }

  .heading {
    width: 100%;
    max-width: 1320px;
    margin: 0 0 25px 0;
    box-sizing: border-box;
    color: $white;
    font-size: 36px;
    font-weight: 500;
    line-height: 56px;
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
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.2);
      }
      right: 10px;
    }

    &__scroll-left {
      transition: transform 0.3s;

      &:hover {
        transform: scaleX(-1) scale(1.2);
      }

      transform: scaleX(-1) scale(1);
      left: 10px;
    }
  }

  .cards {
    box-sizing: border-box;

    padding: 20px 35px 20px 25px;
    width: 100vw;
    display: flex;

    column-gap: 20px;

    overflow-x: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    scroll-behavior: smooth;
  }
}

@media screen and (max-width: 768px) {
  .tours {
    padding: 70px 0 80px 0;
    .wrapper {
      padding: 0 50px;
    }

    .cards-wrapper {
      &__scroll-left,
      &__scroll-right {
        width: 40px;
        .icon {
          height: 40px;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .tours {
    .wrapper {
      padding: 0 25px;
    }
  }
}
</style>

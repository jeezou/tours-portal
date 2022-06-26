<template>
  <div class="error">
    <NavBar :isLight="true" :isSearch="true" />
    <div class="err-frame">
      <img
        src="../assets/images/ellipse-bg.png"
        alt="ellipse"
        class="err-frame__ellipse"
      />
      <div class="err-frame__content">
        <img
          src="../assets/images/404.png"
          alt="err code"
          class="err-frame__err-code"
        />
        <div class="err-frame__desc">
          Нам жаль, но страница <br />
          не найдена.
        </div>
      </div>
      <div class="cards">
        <img
          src="../assets/images/err-card-front.png"
          alt="card"
          class="cards__front"
        />
        <img
          src="../assets/images/err-card-middle.png"
          alt="card"
          class="cards__middle"
        />
        <img
          src="../assets/images/err-card-back.png"
          alt="card"
          class="cards__back"
        />
      </div>
      <button class="err-frame__btn">Перейти на главную</button>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavBar from "@/components/header/NavBar.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "Error",
  components: { NavBar, Footer },
};
</script>

<style lang="scss">
.error {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: $black;
  font-weight: 500;

  background: $form-gray-2;

  padding: 0 30px;
}

.err-frame {
  width: 100%;
  max-width: 1320px;
  height: 684px;

  background: $black;
  border-radius: 16px;
  padding: 40px;
  box-sizing: border-box;

  position: relative;

  display: flex;
  align-items: flex-end;
  margin-bottom: 64px;

  &__desc {
    text-align: center;
  }

  .cards {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    &__front {
      position: absolute;
      top: 10%;
      left: 9%;
      width: 22%;
    }

    &__middle {
      position: absolute;
      bottom: 15%;
      right: 15%;
      width: 15%;
    }

    &__back {
      position: absolute;
      top: 10%;
      right: 15%;
      width: 12%;
    }
  }

  &__ellipse {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    width: 100%;
    height: 100%;

    user-select: none;
    pointer-events: none;
  }

  &__err-code {
    width: 70%;
  }

  &__content {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    color: $white;

    font-size: 32px;
    line-height: 130%;
  }

  &__btn {
    z-index: 3;
    background: $primary;
    position: absolute;
    padding: 20px 0;
    width: calc(100% - 80px);
    box-sizing: border-box;
    color: $white;
    font-weight: normal;
    border-radius: 16px;
    line-height: 100%;

    transition: all 0.2s ease-in-out;

    &:hover {
      background: $primary-light;
    }
  }
}

@media screen and (max-width: 1100px) {
  .err-frame {
    height: 600px;

    padding: 40px 0;
    justify-content: center;

    &__content {
      width: 70%;
    }

    .cards {
      &__front {
        top: 7%;
        left: 3%;
        width: 30%;
        max-width: 250px;
      }

      &__middle {
        bottom: 15%;
        right: 3%;
        width: 27%;
        max-width: 200px;
      }

      &__back {
        top: 10%;
        right: 10%;
        width: 27%;
        max-width: 150px;
      }
    }

    &__err-code {
      width: 80%;
      min-width: 250px;
      max-width: 450px;
    }

    &__desc {
      font-size: 28px;
    }

    &__btn {
      padding: 15px 0;
    }
  }
}

@media screen and (max-width: 600px) {
  .error {
    padding: 0px 15px;
  }

  .err-frame {
    border-radius: 12px;
    height: 500px;

    &__btn {
      border-radius: 12px;
    }

    &__content {
      width: 80%;
    }

    &__desc {
      font-size: 24px;
    }

    .cards {
      &__front {
        top: 7%;
        left: 3%;
        width: 23%;
      }

      &__middle {
        bottom: 22%;
        right: 3%;
        width: 20%;
      }

      &__back {
        top: 10%;
        right: 10%;
        width: 20%;
      }
    }
  }
}
</style>

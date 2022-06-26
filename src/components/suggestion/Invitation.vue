<template>
  <section class="invitation">
    <div class="inv-card">
      <div class="inv-card__content">
        <h3 class="inv-card__heading">
          Хотите получать видео на почту каждый месяц?
        </h3>
        <div class="inv-card__par">
          Для этого нужно всего лишь оформить абсолютно бесплатную подписку на
          нашем портале!
        </div>
        <button class="inv-card__btn">Оформить подписку</button>
      </div>
      <img src="@/assets/images/camera.png" alt="" class="inv-card__img" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Invitation",
};
</script>

<style lang="scss">
.invitation {
  padding: 96px 100px 196px;
  display: flex;
  background: $form-gray-2;
  justify-content: center;

  .inv-card {
    max-width: 1320px;
    width: 100%;
    background: $skin;
    border-radius: 16px;
    padding: 48px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    overflow: hidden;

    position: relative;

    &__content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;

      color: $white;
      width: 50%;
    }

    &__heading {
      margin-bottom: 16px;

      font-size: 32px;
      font-weight: 700;
      line-height: 38px;
    }

    &__par {
      margin-bottom: 24px;

      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
    }

    &__btn {
      color: $skin;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      padding: 16px 41px;
      width: fit-content;

      border-radius: 16px;

      transition: all 0.2s ease-in-out;

      &:hover {
        box-shadow: 0 0 17px $box-shadow;
      }
    }

    &__img {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}

@media screen and (max-width: 960px) {
  .invitation {
    padding: 100px 50px;
    .inv-card {
      &__content {
        width: 100%;
      }

      &__img {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .invitation {
    padding: 60px 25px 100px 25px;
  }
}

@media screen and (max-width: 600px) {
  .invitation {
    .inv-card {
      padding: 35px;
      &__content {
        align-items: center;
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .invitation {
    .inv-card {
      &__heading {
        font-size: 25px;
        line-height: 130%;
      }

      &__par {
        font-size: 18px;
        line-height: 120%;
      }
    }
  }
}
</style>

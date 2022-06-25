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
      <img src="../assets/images/camera.png" alt="" class="inv-card__img" />
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
    }

    &__img {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>

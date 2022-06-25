<template>
  <footer class="footer">
    <div class="container">
      <div class="introduction">
        <img src="../assets/images/logo-dark.svg" alt="logo" class="logo" />
        <p class="introduction__p">
          RT360.RU – это возможность увидеть памятные места, музеи,
          императорские дворцы, театры, древние и современные города, храмовые
          комплексы и уникальные природные достопримечательности
          многонациональной и такой разной России.
        </p>
      </div>
      <div class="links">
        <div class="back-to-top" @click="backtoTop">
          <img src="../assets/icons/back-to-top.svg" alt="back to top ico" />
        </div>
        <div class="group">
          <h3 class="group__heading">Основное</h3>
          <ul class="group__list">
            <li class="group__item">
              <a href="#">Главная</a>
            </li>
            <li class="group__item"><a href="#">Интересеные места</a></li>
            <li class="group__item">
              <a>Подбери себе виртуальный тур</a>
            </li>
            <li class="group__item"><a href="#">Топ посещаемых регионов</a></li>
            <li class="group__item"><a href="#">Идеи для 3D тура</a></li>
            <li class="group__item"><a href="#">Журнал</a></li>
            <li class="group__item"><a href="#">Наш инстаграмм</a></li>
          </ul>
        </div>
        <div class="group">
          <h3 class="group__heading">О нас</h3>
          <ul class="group__list">
            <li class="group__item"><a href="#">О проекте</a></li>
            <li class="group__item"><a href="#">FAQ</a></li>
            <li class="group__item">
              <a href="#">Связаться с нами</a>
            </li>
          </ul>
        </div>
        <div class="group">
          <h3 class="group__heading">Соц сети</h3>
          <ul class="group__list group__list--inline">
            <li class="group__item">
              <a href="#"
                ><img
                  src="../assets/icons/facebook.svg"
                  alt="facebook ico"
                  class="img"
              /></a>
            </li>
            <li class="group__item">
              <a href="#"
                ><img src="../assets/icons/dzen.svg" alt="dzen ico" class="img"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="rights">© 2021 Rodnye prostory. All rights reserved</div>
      <div class="contacts">
        <div class="contacts__item">+7 (999) 232 - 1 - 111</div>
        <div class="contacts__item">+7 (921) 888 - 22 - 32</div>
        <div class="contacts__item">rodniyeprostory@gmail.ru</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    backtoTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px 0 100px;

  box-sizing: border-box;

  background: $form-gray-2;

  .container {
    max-width: 1320px;
    padding-bottom: 32px;

    display: grid;
    grid-template-areas:
      "intro links"
      "rights contacts";
    grid-template-columns: 1fr 1fr;
    row-gap: 32px;

    border-top: 2px solid $border;

    .introduction {
      padding-top: 63px;
      padding-right: 75px;

      grid-area: intro;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 32px;

      border-right: 2px solid $border;
      border-bottom: 2px solid $border;

      .logo {
        height: 36px;
      }

      &__p {
        font-family: "Inter", sans-serif;
        color: $form-gray-1;
        line-height: 175%;
        text-align: left;
        font-weight: 400;
      }
    }

    .links {
      grid-area: links;

      position: relative;

      padding: 63px 0 64px 40px;
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr;
      border-bottom: 2px solid $border;

      .back-to-top {
        position: absolute;
        right: 0;
        bottom: 64px;
        cursor: pointer;
      }

      .group {
        &__heading {
          font-size: 17px;
          color: $form-gray-1;
          font-weight: 400;
          margin-bottom: 24px;
        }

        &__list {
          display: flex;
          flex-direction: column;
          row-gap: 16px;

          &--inline {
            flex-direction: row;
            column-gap: 13px;
          }
        }

        &__item > * {
          text-decoration: none;
          color: $black;

          cursor: pointer;
        }
      }
    }

    .rights {
      display: flex;
      align-items: flex-end;
      color: $form-gray-1;
      font-weight: 400;
    }

    .contacts {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
      align-items: flex-end;
      color: $form-gray-1;
      font-weight: 400;
    }
  }
}
</style>

<template>
  <div class="error">
    <nav class="nav-bar-white">
      <div class="container">
        <div class="logo">
          <img
            src="../assets/images/logo-dark.svg"
            alt="logo"
            class="logo__img"
          />
        </div>
        <div class="search-bar">
          <img
            src="../assets/icons/search-gray.svg"
            alt="search icon"
            class="search-bar__icon"
          />
          <input type="text" class="search-bar__input" />
        </div>
        <div class="location">
          <img
            class="location__icon"
            src="../assets/icons/map-pin-blue.svg"
            alt="location ico"
          />
          Санкт-Петербург
        </div>
        <div class="eye">
          <img
            src="../assets/icons/eye-blue.svg"
            alt="eye ico"
            class="eye__icon"
          />
        </div>
        <div class="lang">
          <img src="../assets/icons/ru.svg" alt="lang ico" class="eye__icon" />
        </div>
        <div class="profile">
          <img
            src="../assets/images/avatar.png"
            alt="avatar"
            class="profile__avatar"
          />
          <img
            src="../assets/icons/burger-blue.svg"
            alt="burger"
            class="profile__burger"
          />
        </div>
      </div>
    </nav>
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
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "Error",
  components: { Footer },
};
</script>

<style lang="scss">
.error {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: $black;
  font-weight: 500;

  padding: 0 100px;
}

.nav-bar-white {
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 41px;

  box-shadow: 0px 8px 10px rgba(156, 164, 169, 0.2);

  .container {
    width: 100%;
    max-width: 1320px;
    display: flex;
    justify-content: space-between;

    padding: 24px;
    align-items: center;

    column-gap: 16px;

    > * {
      background: $form-gray-4;
      border-radius: 12px;
    }

    .logo {
      background: rgba(0, 0, 0, 0);
      margin-right: 21px;

      cursor: pointer;
    }

    .location {
      padding: 12px 16px;
      cursor: pointer;
    }

    .eye {
      padding: 8px;
      cursor: pointer;
    }

    .lang {
      padding: 12px 7px;
      cursor: pointer;
    }

    .profile {
      &__burger {
        padding: 8px 12px;
      }
      cursor: pointer;
    }

    .search-bar {
      flex-grow: 1;
      display: flex;
      border-radius: 12px;
      &__icon {
        padding: 12px 16px;
      }

      &__input {
        background: rgba(0, 0, 0, 0);
        width: 100%;
      }
    }
  }
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
    z-index: 1;
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
  }
}
</style>

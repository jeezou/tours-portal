<template>
  <header class="header">
    <nav class="nav-bar">
      <div class="container">
        <div class="logo">
          <img
            src="../assets/images/logo-light.svg"
            alt="logo"
            class="logo__img"
          />
        </div>
        <div class="controls">
          <div class="location">
            <img
              class="location__icon"
              src="../assets/icons/map-pin.svg"
              alt="location ico"
            />
            Санкт-Петербург
          </div>
          <div class="eye">
            <img
              src="../assets/icons/eye.svg"
              alt="eye ico"
              class="eye__icon"
            />
          </div>
          <div class="lang">
            <img
              src="../assets/icons/ru.svg"
              alt="lang ico"
              class="eye__icon"
            />
          </div>
          <div class="profile">
            <img
              src="../assets/icons/no-avatar.svg"
              alt="avatar"
              class="profile__avatar"
            />
            <img
              src="../assets/icons/burger.svg"
              alt="burger"
              class="profile__burger"
            />
          </div>
        </div>
      </div>
    </nav>
    <div class="header__content">
      <h1 class="heading">Путешествуй по России онлайн</h1>
      <div class="search-bar">
        <input
          type="text"
          class="search-bar__input"
          placeholder="Например: экскурсия по Великому Новгороду"
        />
        <button class="search-bar__btn">Найти</button>
      </div>
      <div class="suggestions">
        <ul class="types-list">
          <li class="types-list__item">
            <div class="text">Проморолик</div>
            <img
              src="../assets/icons/camera.svg"
              alt="camera ico"
              class="icon"
            />
          </li>
          <li class="types-list__item">
            <div class="text">Поиск по карте</div>
            <img
              src="../assets/icons/search.svg"
              alt="search ico"
              class="icon"
            />
          </li>
          <li class="types-list__item">
            <div class="text">Идеи для путешествий</div>
            <img src="../assets/icons/ideas.svg" alt="ideas ico" class="icon" />
          </li>
        </ul>
        <ul class="hashtags-list">
          <li class="hashtags-list__item">#Видео</li>
          <li class="hashtags-list__item">#360°</li>
          <li class="hashtags-list__item">#VR</li>
          <li class="hashtags-list__item">#3D</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  height: 1180px;
  background: url("../assets/images/main-bg.jpg");
  background-size: cover;

  color: $white;

  .container {
    max-width: 1320px;
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 326px;

  &__content {
    max-width: 1320px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 32px;

    .heading {
      font-weight: 900;
      font-size: 72px;
      line-height: 122%;
      color: $white;
    }

    .search-bar {
      width: 100%;

      display: flex;

      padding: 8px;
      background: $white;
      border-radius: 12px;

      &__input {
        width: 100%;
        background: none;

        text-align: center;

        &::placeholder {
          color: $black;
          opacity: 0.3;
        }
      }

      &__btn {
        font-weight: 700;
        color: $white;
        padding: 16px 33px;
        border-radius: 8px;
        letter-spacing: 0.05em;
        background: $skin;

        text-transform: uppercase;
      }
    }

    .suggestions {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 24px;

      .types-list,
      .hashtags-list {
        display: flex;
        column-gap: 16px;

        &__item {
          border-radius: 12px;
          background: $white-transparent;
          display: flex;
          align-items: center;
          column-gap: 10px;

          cursor: pointer;
        }
      }

      .types-list {
        &__item {
          padding: 12px 24px;
        }
      }

      .hashtags-list {
        &__item {
          padding: 12.5px 17px;
        }
      }
    }
  }
}

.nav-bar {
  position: relative;
  z-index: 1;
  width: 100vw;
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    justify-content: space-between;

    padding: 24px;
    align-items: center;

    column-gap: 16px;

    .logo {
      background: rgba(0, 0, 0, 0);
      margin-right: 21px;

      cursor: pointer;
    }

    .controls {
      display: flex;
      column-gap: 16px;

      > * {
        background: $white-transparent;
        border-radius: 12px;
      }
    }

    .location {
      padding: 12px 16px;
      cursor: pointer;

      font-weight: 500;
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
      overflow: hidden;
      &__avatar {
        padding: 8px 10px 8px;
        background: $white-transparent-light;

        border-radius: 12px;
      }

      &__burger {
        padding: 8px 12px;
      }
      cursor: pointer;
    }
  }
}
</style>

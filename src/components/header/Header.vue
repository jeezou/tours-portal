<template>
  <header class="header">
    <nav-bar :isLight="false" :isSearch="false" />
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
              src="@/assets/icons/camera.svg"
              alt="camera ico"
              class="icon"
            />
          </li>
          <li class="types-list__item">
            <div class="text">Поиск по карте</div>
            <img
              src="@/assets/icons/search.svg"
              alt="search ico"
              class="icon"
            />
          </li>
          <li class="types-list__item">
            <div class="text">Идеи для путешествий</div>
            <img src="@/assets/icons/ideas.svg" alt="ideas ico" class="icon" />
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
import NavBar from "@/components/header/NavBar.vue";
export default {
  name: "Header",
  components: { NavBar },
};
</script>

<style lang="scss">
.header {
  height: 1180px;
  background: url("@/assets/images/main-bg.jpg");
  background-size: cover;

  padding: 0 100px;

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

      text-align: center;
    }

    .search-bar {
      width: 100%;

      display: flex;

      padding: 8px;
      background: $white;
      border-radius: 12px;

      box-sizing: border-box;

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

        transition: background 0.2s ease-in-out;

        &:hover {
          background: $skin-light;
        }
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

          transition: all 0.2s ease-in-out;

          &:hover {
            background: $white-transparent-light;
          }
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

@media screen and (max-width: 800px) {
  .header {
    height: 850px;
    row-gap: 170px;

    padding: 0 50px;

    &__content {
      .heading {
        font-size: 62px;
      }

      .suggestions {
        font-size: 14px;

        .types-list,
        .hashtags-list {
          &__item {
            border-radius: 10px;
            padding: 10px 12px;
            column-gap: 5px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .header {
    height: 800px;
    row-gap: 150px;

    padding: 0 20px;

    &__content {
      .heading {
        font-size: 47px;
      }

      row-gap: 25px;

      .suggestions {
        font-size: 10px;
        font-weight: 600;

        row-gap: 15px;
        .types-list,
        .hashtags-list {
          column-gap: 7px;
          &__item {
            border-radius: 10px;
            padding: 10px 12px;
            column-gap: 5px;

            .icon {
              width: 18px;
            }
          }
        }
      }

      .search-bar {
        padding: 8px;

        &__input {
          &::placeholder {
            font-size: calc(1.5vw + 5px);
            color: $black;
            opacity: 0.5;
          }
        }

        &__btn {
          font-weight: 600;
          font-size: 14px;
          padding: 12px 20px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>

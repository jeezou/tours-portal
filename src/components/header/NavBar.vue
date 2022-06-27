<template>
  <nav class="nav-bar" :class="{ 'nav-bar--light': isLight }">
    <div class="container">
      <div class="logo">
        <img
          :src="
            isLight
              ? require('@/assets/images/logo-dark.svg')
              : require('@/assets/images/logo-light.svg')
          "
          alt="logo"
          class="logo__img"
        />
      </div>
      <div class="search-bar" v-if="isSearch">
        <img
          src="@/assets/icons/search-gray.svg"
          alt="search icon"
          class="search-bar__icon"
        />
        <input type="text" class="search-bar__input" />
      </div>
      <div class="controls" :class="{ 'controls--light': !isLight }">
        <div class="location">
          <img
            class="location__icon"
            :src="
              isLight
                ? require('@/assets/icons/map-pin-blue.svg')
                : require('@/assets/icons/map-pin.svg')
            "
            alt="location ico"
          />
          <div class="location__text">Санкт-Петербург</div>
        </div>
        <div class="eye">
          <img
            :src="
              isLight
                ? require('@/assets/icons/eye-blue.svg')
                : require('@/assets/icons/eye.svg')
            "
            alt="eye ico"
            class="eye__icon"
          />
        </div>
        <div class="lang">
          <img src="@/assets/icons/ru.svg" alt="lang ico" class="eye__icon" />
        </div>
        <div class="profile" :class="{ 'profile--no-avatar': !isLight }">
          <img
            :src="
              isLight
                ? require('@/assets/images/avatar.png')
                : require('@/assets/icons/no-avatar.svg')
            "
            alt="avatar"
            class="profile__avatar"
          />
          <img
            :src="
              isLight
                ? require('@/assets/icons/burger-blue.svg')
                : require('@/assets/icons/burger.svg')
            "
            alt="burger"
            class="profile__burger"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    isLight: Boolean,
    isSearch: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 41px;

  &--light {
    box-shadow: 0px 8px 10px #9ca4a933;
    background: $white;
  }

  .container {
    width: 100%;
    max-width: 1320px;
    display: flex;
    justify-content: space-between;

    padding: 24px 100px;
    align-items: center;

    box-sizing: content-box;

    column-gap: 16px;
  }

  .search-bar {
    background: $form-gray-4;
    border-radius: 12px;
  }

  .controls {
    display: flex;
    column-gap: 16px;

    > * {
      background: $form-gray-4;
      border-radius: 12px;

      display: flex;
      align-items: center;
      transition: all 0.15s ease-in-out;

      &:hover {
        box-shadow: inset 0 0 0 2px $primary-light;
      }
    }

    &--light {
      > * {
        background: $white-transparent;

        transition: all 0.2s ease-in-out;

        &:hover {
          background: $white-transparent-light;
          box-shadow: none;
        }
      }
    }
  }

  .logo {
    background: rgba(0, 0, 0, 0);
    margin-right: 21px;

    cursor: pointer;
  }

  .location {
    padding: 12px 16px;
    cursor: pointer;

    display: flex;
    align-items: center;
    column-gap: 8px;

    white-space: nowrap;
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
    display: flex;
    overflow: hidden;
    width: fit-content;
    box-sizing: border-box;

    &__avatar {
      padding: 0;
      padding: 2px;
    }

    &--no-avatar {
      .profile__avatar {
        padding: 8px 10px 8px 8px;
        background: $white-transparent-light;
        border-radius: 12px;
      }
    }

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

@media screen and (max-width: 1100px) {
  .nav-bar {
    .container {
      column-gap: 8px;
    }

    .controls {
      column-gap: 8px;
    }

    .location {
      padding: 8px 12px;

      &__text {
        display: none;
      }
    }

    .search-bar {
      &__icon {
        padding: 9px 12px;
      }
    }

    .eye {
      padding: 8px;

      &__icon {
        width: 25px;
      }
    }

    .profile {
      &--no-avatar {
        .profile__avatar {
          width: 28px;
        }
      }
      height: 41px;
    }
  }
}

@media screen and (max-width: 600px) {
  .nav-bar {
    .container {
      padding: 15px 30px;
    }
    .search-bar {
      display: none;
    }
    .location {
      display: none;
    }
    .eye {
      display: none;
    }
    .lang {
      display: none;
    }

    .profile__avatar {
      display: none;
    }
  }
}
</style>

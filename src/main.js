import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

const store = createStore({
  state() {
    return {
      likedPlaces: [],
    };
  },
  mutations: {
    likePlace(id) {
      this.state.likedPlaces.push(id);
    },
  },
});

createApp(App).use(router).use(store).mount("#app");

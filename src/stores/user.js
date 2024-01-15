import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
  }),
  getters: {
    getuser: (state) => state.user,
  },
  actions: {
    async loginUser(data) {
      await axios
        .get("/user.json")
        .then((response) => {
          if (data.login === "admin" && data.password === "admin") {
            this.user = response.data.user;
            this.user.loggedIn = true;
          } else {
            this.user = {};
            this.user.loggedIn = false;
          }
        })
        .catch(() => {
          console.log("error");
        });
    },

    clearData() {
      this.user = {};
    },
  },
});

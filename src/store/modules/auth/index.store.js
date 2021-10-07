import { mutations } from "./mutations.store.js";
import { actions } from "./actions.store.js";
import { getters } from "./getters.store.js";

export const authModule = {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },
  getters,
  mutations,
  actions,
};

import { mutations } from "./mutations.store.js";
import { actions } from "./actions.store.js";
import { getters } from "./getters.store.js";

export const coachesModule = {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [],
    };
  },
  mutations,
  actions,
  getters,
};

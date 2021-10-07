import { mutations } from "./mutations.store";
import { actions } from "./actions.store";
import { getters } from "./getters.store";

export const requestsModule = {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations,
  actions,
  getters,
};

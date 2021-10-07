export const mutations = {
  addCoach(state, payload) {
    state.coaches.push(payload);
  },
  fetchCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};

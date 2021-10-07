export const getters = {
  requests(state, _, _2, rootGetters) {
    const activeUserId = rootGetters.userId;
    return state.requests.filter((request) => request.coachId === activeUserId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};

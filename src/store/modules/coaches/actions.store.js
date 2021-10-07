import { coachesInstance } from "../../../services/coaches.service";

export const actions = {
  async addCoach(context, data) {
    const userId = context.rootGetters.userId;

    const token = context.rootGetters.token;

    await coachesInstance.put(`/${userId}.json?auth=${token}`, data);

    context.commit("addCoach", { ...data, id: userId });
  },
  async fetchCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await coachesInstance.get(`.json`);

    const fetchedCoaches = response.data;

    if (response.statusText !== "OK") {
      const error = new Error(response.message || "Failed to fetch");
      throw error;
    }

    const coaches = [];

    for (const id in fetchedCoaches) {
      coaches.push({
        id: id,
        firstName: fetchedCoaches[id].firstName,
        lastName: fetchedCoaches[id].lastName,
        description: fetchedCoaches[id].description,
        hourlyRate: fetchedCoaches[id].hourlyRate,
        avatarImage: fetchedCoaches[id].avatarImage,
        areas: fetchedCoaches[id].areas,
      });
    }

    context.commit("fetchCoaches", coaches);
    context.commit("setFetchTimestamp");
  },
};

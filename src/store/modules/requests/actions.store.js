import { requestsInstance } from "../../../services/requests.service";

export const actions = {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await requestsInstance.post(
      `${payload.coachId}.json`,
      newRequest
    );
    console.log(response);
    const responseData = response.data;
    if (response.statusText !== "OK") {
      throw new Error(responseData.message || "Failed to send request");
    }
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;

    const token = context.rootGetters.token;

    const response = await requestsInstance.get(
      `${coachId}.json?auth=${token}`
    );

    const fetchedRequests = response.data;

    if (response.statusText !== "OK") {
      throw new Error(fetchedRequests.message || "Failed to fetch requests");
    }

    const requests = [];

    for (let id in fetchedRequests) {
      requests.push({
        id: id,
        coachId: coachId,
        userEmail: fetchedRequests[id].userEmail,
        message: fetchedRequests[id].message,
      });
    }

    context.commit("setRequests", requests);
  },
};

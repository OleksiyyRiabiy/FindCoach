import { createStore } from "vuex";

import { coachesModule } from "./modules/coaches/index.store.js";
import { requestsModule } from "./modules/requests/index.store.js";
import { authModule } from "./modules/auth/index.store.js";

const store = createStore({
  modules: {
    auth: authModule,
    coaches: coachesModule,
    requests: requestsModule,
  },
});

export default store;

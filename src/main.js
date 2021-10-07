import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "./assets/styles/main.css";

import router from "./router/router.js";
import store from "./store/index.store.js";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(store);

app.mount("#app");

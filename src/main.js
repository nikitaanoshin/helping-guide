import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import './assets/style/app.less';

createApp(App).use(store).mount("#app");

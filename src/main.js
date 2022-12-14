import { createApp } from "vue";
import mdiVue from "mdi-vue/v3";
import App from "./App.vue";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import * as mdijs from "@mdi/js";
import "./style.css";
// Import all of Bootstrap's JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


createApp(App)
  .use(mdiVue, {
    icons: mdijs,
  }).use(Toast)
  .mount("#app");

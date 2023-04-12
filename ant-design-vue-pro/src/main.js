import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Layout, Menu } from "ant-design-vue";


const createAppConst = createApp(App);
createAppConst.use(Button);
createAppConst.use(Layout);
createAppConst.use(Menu);
// createAppConst.use(Model);
createAppConst.use(store).use(router).mount("#app");

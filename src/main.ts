import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//@ts-ignore

const app = createApp(App);
//@ts-ignore
import MukUI from "./components/run-svg/index.js"; //导入

app.use(MukUI); //注册
app.mount("#app");

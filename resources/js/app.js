require("./bootstrap");

window.Vue = require("vue");

import router from "./router/index";
const app = new Vue({
    el: "#app",
    router
});
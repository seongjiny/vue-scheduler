import { createApp } from 'vue'
import App from './App.vue'
import Router from './router.js';
import Store from './store.js'
import VueCookies from "vue-cookies"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


const app = createApp(App);

app.use(Router);
app.use(Store);
app.use(VueCookies);
app.$cookies.config("1d") // expire 1일 (global 설정)
app.mount('#app');
window.Kakao.init("dff1563d00ae632fd9538a5fb1dad250");

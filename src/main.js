import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "axios";
import AudioVisual from 'vue-audio-visual'
import vuetyped from 'vue3typed'
import Progress from "easy-circular-progress";

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    // .use(axios)
    .use(AudioVisual)
    .use(vuetyped)
    .use(Progress)
    .mount('#app')

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "axios";
import AudioVisual from 'vue-audio-visual'
import vuetyped from 'vue3typed'
import Progress from "easy-circular-progress";
import Nprogress from "nprogress"
import 'nprogress/nprogress.css'
import veProgress from "vue-ellipse-progress";
import request from "@/utils/request";


const app = createApp(App);
app.use(router)
app.use(ElementPlus)
// app.use(axios)
app.use(AudioVisual)
app.use(vuetyped)
// .use(Progress)
app.use(Nprogress)
// .use(veProgress)
// app.config.globalProperties.request=request
app.config.globalProperties.request=request
app.mount('#app')


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
import request from "@/utils/request";
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'



const app = createApp(App);
app.use(router)
app.use(ElementPlus)
// app.use(axios)
app.use(AudioVisual)
app.use(vuetyped)
// .use(Progress)
app.use(Nprogress)
app.use(VXETable)
// app.config.globalProperties.request=request
app.config.globalProperties.request=request
app.mount('#app')


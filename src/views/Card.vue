<template>
    <Header></Header>

    <div>
        <av-bars
                caps-color="#FFF"
                :bar-color="['#f00', '#ff0', '#0f0']"
                canv-fill-color="#000"
                :caps-height="2"
                :audio-src="audioViolin"
        ></av-bars>
        <el-button @click="changeAudio">切换音频</el-button>

        <audio controls ref="singeBox"></audio>
        <audio ref="audioSingleBox"
                :src="audioViolin"
                controls="controls">

        </audio>
        <button @click="play">播放</button>
        <button @click="pause">暂停</button>

    </div>


    <div>
        <ve-progress
                :progress="percent"
                :color="gradient"
                :thickness="10"
        >
            <span slot="legend-value">/200</span>
            <p slot="legend-caption">GOOD JOB</p>
        </ve-progress>

        <el-button @click="addProgress">
            点击增加5%的进度
        </el-button>

        <ve-progress
            :progress="96"
            :color="gradient"
            :thickness="10"
            animation="bounce 1000"
            loading="true"
        >
            <span slot="legend-value">/200</span>
            <p slot="legend-caption">{{percentages}}</p>
        </ve-progress>
    </div>

    <div>
        <vxe-table class="mytable-style" border :data="tableData">
            <vxe-column field="id" title="ID" width="60"></vxe-column>
            <vxe-column field="name" title="Name">
                <template #default="{ row }">
                    <span>自定义插槽模板 {{ row.name }}</span>
                </template>
            </vxe-column>
            <vxe-column field="sex" title="Sex"></vxe-column>
            <vxe-column field="age" title="Age"></vxe-column>
        </vxe-table>
    </div>

    <div>
        <vxe-table
                border
                show-overflow
                :data="tableData1"
                :column-config="{resizable: true}"
                :edit-config="{trigger: 'click', mode: 'cell'}">
            <vxe-column type="seq" width="60"></vxe-column>
<!--            amplitudeStd-->
            <vxe-column field="amplitudeMean" title="amplitudeMean" :edit-render="{autofocus: '.vxe-input--inner'}">
                <template #edit="{ row }">
                    <vxe-input v-model="row.amplitudeMean" type="number"></vxe-input>
                </template>
            </vxe-column>
<!--            amplitudeStd-->
            <vxe-column field="amplitudeStd" title="amplitudeStd" :edit-render="{}">
                <template #edit="{ row }">
                    <vxe-input v-model="row.amplitudeStd" type="number" placeholder="请输入昵称"></vxe-input>
                </template>
            </vxe-column>


            <vxe-column field="vibratoExtend" title="vibratoExtend" :edit-render="{}">
                <template #edit="{ row }">
                    <vxe-input v-model="row.vibratoExtend" type="number" placeholder="请输入数值"></vxe-input>
                </template>
            </vxe-column>

            <vxe-column field="brightness" title="brightness" :edit-render="{}">
                <template #edit="{ row }">
                    <vxe-input v-model="row.brightness" type="number" placeholder="请输入数值"></vxe-input>
                </template>
            </vxe-column>

            <vxe-column field="attackLevel" title="attackLevel" :edit-render="{}">
                <template #edit="{ row }">
                    <vxe-input v-model="row.attackLevel" type="number" placeholder="请输入数值"></vxe-input>
                </template>
            </vxe-column>

            <vxe-column field="pitch" title="pitch" :edit-render="{}">
                <template #edit="{ row }">
                    <vxe-input v-model="row.pitch" type="number" placeholder="请输入数值"></vxe-input>
                </template>
            </vxe-column>

            <vxe-column field="noteLength" title="noteLength" :edit-render="{}">
                <template #edit="{ row }">
                    <vxe-input v-model="row.noteLength" type="number" placeholder="请输入数值"></vxe-input>
                </template>
            </vxe-column>

            <vxe-column field="amplitudesMaxPos" title="amplitudesMaxPos" :edit-render="{}">
                <template #edit="{ row }">
                    <vxe-input v-model="row.amplitudesMaxPos" type="text"></vxe-input>
                </template>
            </vxe-column>

            <vxe-column field="onset" title="onset" :edit-render="{}">
                <template #edit="{ row }">
                    <vxe-input v-model="row.onset" type="text"></vxe-input>
                </template>
            </vxe-column>


            <vxe-column field="offset" title="offset" :edit-render="{}">
                <template #edit="{ row }">
                    <vxe-input v-model="row.offset" type="text"></vxe-input>
                </template>
            </vxe-column>
        </vxe-table>
    </div>

    <div>


    </div>

</template>

<script>
    import NProgress from 'nprogress'
    import 'nprogress/nprogress.css'
    import {VeProgress} from "vue-ellipse-progress";
    // import veProgress from "vue-ellipse-progress";
    // import audioViolin from '../../public/audio/violin/ode_to_joy.wav'
    // import audioGuitar from '../../public/audio/guitar/ode_to_joy.wav'
    import Header from "../components/Header";
    import request from "../utils/request";
    import WaveSurfer from 'wavesurfer.js';


    NProgress.start()// 开始
    NProgress.set(0.4) // 设置进度，0-1
    NProgress.inc() // 增加一点点
    NProgress.done() // 完成

    //var source = new EventSource('http://localhost:7901/demo/sse/test/subscribe?id=qwe');
    let socket;

    export default {
        name: "Card",
        //引入组件
        components:{VeProgress,Header,WaveSurfer},



        data() {
            return {
                audioSingBox:this.$refs.audioSingleBox,

                wavesurfer: null,

                tableData: [
                    {id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc'},
                    {id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou'},
                    {id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai'},
                    {id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai'}
                ],

                tableData1:null,


                selectedValue: '',
                region: '',
                audioViolin:null,
                audioGuitar:require('E:\\midi2music\\music\\GenMusic\\c6882f4d23ab45f29d83538b71b27c02.wav'),
                percent:5,

                gradient: {
                    radial: false,
                    colors: [
                        {
                            color: '#6546f7',
                            offset: "0",
                            opacity: '1',
                        },
                        {
                            color: 'lime',
                            offset: "100",
                            opacity: '0.6',
                        },
                    ]
                },
            }
        },
        created() {
            this.init()
            this.request.post('http://localhost:8182/creation/conditioningFindAll').then((resp) => {
                if (resp.code === "200") {
                    // localStorage.setItem("users", JSON.stringify(resp.data))  // 存储用户信息到浏览器
                    // //localStorage.setItem("menus", JSON.stringify(resp.data.menus))  // 存储用户信息到浏览器
                    // //console.log(localStorage.getItem("users"))
                    // this.$message.success("登录成功")
                    // this.$router.replace({path:'/'})

                    //成功获取数据
                    console.log(resp.data)
                    this.tableData1=resp.data
                } else {
                    this.$message.error(resp.msg)
                }
                //console.log(resp)
            });
        },
        methods: {
            init(){
                let that = this;
                if (typeof (WebSocket) == "undefined") {
                    console.log("您的浏览器不支持WebSocket");
                } else {
                    console.log("您的浏览器支持WebSocket");
                    let socketUrl = "ws://localhost:8182/imserver/"
                    if (socket != null) {
                        socket.close();
                        socket = null;
                    }
                    // 开启一个websocket服务
                    socket = new WebSocket(socketUrl);
                    //打开事件
                    socket.onopen = function () {
                        console.log("websocket已打开");
                    };
                    //  浏览器端收消息，获得从服务端发送过来的文本消息
                    socket.onmessage = function (msg) {
                        console.log("收到数据====" + msg.data)
                        let data = JSON.parse(msg.data)
                        if (data.userNames) {
                            // userNames存在则是有人登录，获取在线人员信息
                            that.userList = data.userNames
                        } else {
                            // userNames不存在则是有人发消息
                            that.msgList.push(data)
                        }
                    };
                    //关闭事件
                    socket.onclose = function () {
                        console.log("websocket已关闭");
                    };
                    //发生了错误事件
                    socket.onerror = function () {
                        console.log("websocket发生了错误");
                    }
                }

            },

            msg(msg){
                console.log(msg)
            },
            addProgress(){
                this.percent+=3
            },
            // 控制音频的播放与暂停
            startPlayOrPause() {
                return this.audio.playing ? this.pause() : this.play()
            },
            // 播放音频
            play() {
                this.$refs.audioSingleBox.play()
            },
            // 暂停音频
            pause() {
                this.$refs.audioSingleBox.pause()
            },
            // 当音频播放
            onPlay() {
                this.audio.playing = true
            },
            // 当音频暂停
            onPause() {
                this.audio.playing = false
            },
            // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
            onTimeupdate(res) {
                console.log('timeupdate')
                console.log(res)
                this.audio.currentTime = res.target.currentTime
            },
            // 当加载语音流元数据完成后，会触发该事件的回调函数
            // 语音元数据主要是语音的长度之类的数据
            onLoadedmetadata(res) {
                console.log('loadedmetadata')
                console.log(res)
                this.audio.maxTime = parseInt(res.target.duration)
            },

            changeAudio(){
                //console.log(this.audio.src);

                //this.audio.src=require("../../public/audio/violin/ode_to_joy.wav")
                this.audioViolin=this.audioGuitar
                console.log(this.audioViolin)
            }
        },
        filters: {
            // 使用组件过滤器来动态改变按钮的显示
            transPlayPause(value) {
                return value ? '暂停' : '播放'
            },
            // 将整数转化成时分秒
            formatSecond(second = 0) {
                return realFormatSecond(second)
            }
        }


    }
</script>

<style scoped>





    .u-section-1 {
        background-image: url("../../public/images/pexels-photo-4425132.jpeg");
        background-position: 50% 50%;
    }

    .u-section-1 .u-sheet-1 {
        min-height: 800px;
    }

    .u-section-1 .u-text-1 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 3rem;
        margin: 97px 718px 0 0;
    }

    .u-section-1 .u-text-2 {
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.5rem;
        margin: -101px -117px 60px 841px;
    }

    @media (max-width: 1199px) {
        .u-section-1 .u-sheet-1 {
            min-height: 660px;
        }

        .u-section-1 .u-text-1 {
            margin-right: 518px;
        }

        .u-section-1 .u-text-2 {
            margin-left: 741px;
        }
    }

    @media (max-width: 991px) {
        .u-section-1 .u-sheet-1 {
            min-height: 506px;
        }

        .u-section-1 .u-text-1 {
            margin-right: 298px;
        }

        .u-section-1 .u-text-2 {
            margin-left: 631px;
        }
    }

    @media (max-width: 767px) {
        .u-section-1 .u-sheet-1 {
            min-height: 380px;
        }

        .u-section-1 .u-text-1 {
            margin-right: 118px;
        }

        .u-section-1 .u-text-2 {
            margin-left: 541px;
        }
    }

    @media (max-width: 575px) {
        .u-section-1 .u-sheet-1 {
            min-height: 239px;
        }

        .u-section-1 .u-text-1 {
            margin-right: 0;
        }

        .u-section-1 .u-text-2 {
            margin-left: 441px;
        }
    } .u-section-2 {
          background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../public/images/g1664cfb571b334defb118c7f6f920219f2f0e2421d113c4c902daef7be4e2accc8ff9540ddb5d943142822c5dba60eebdd2a0b07ab9b5347779f23c2044b2062_1280.jpg");
          background-position: 50% 50%;
      }

    .u-section-2 .u-sheet-1 {
        min-height: 800px;
    }

    .u-section-2 .u-layout-wrap-1 {
        margin-top: 141px;
        margin-bottom: 60px;
    }

    .u-section-2 .u-layout-cell-1 {
        min-height: 451px;
    }

    .u-section-2 .u-container-layout-1 {
        padding: 20px;
    }

    .u-section-2 .embed-responsive-1 {
        position: absolute;
        width: 178%;
        left: -39%;
        height: 178%;
        top: -39%;
    }

    .u-section-2 .u-layout-cell-2 {
        min-height: 451px;
    }

    .u-section-2 .u-container-layout-2 {
        padding: 20px 60px;
    }

    .u-section-2 .u-text-1 {
        margin: 123px 0 0;
    }

    .u-section-2 .u-text-2 {
        margin: 20px 0 0;
    }

    .u-section-2 .u-btn-1 {
        background-image: none;
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        margin: 20px auto 0 20px;
    }

    @media (max-width: 1199px) {
        .u-section-2 .u-sheet-1 {
            min-height: 581px;
        }

        .u-section-2 .u-layout-cell-1 {
            min-height: 372px;
        }

        .u-section-2 .u-container-layout-2 {
            padding-left: 49px;
            padding-right: 49px;
        }

        .u-section-2 .u-btn-1 {
            margin-left: 0;
        }
    }

    @media (max-width: 991px) {
        .u-section-2 .u-sheet-1 {
            min-height: 494px;
        }

        .u-section-2 .u-layout-cell-1 {
            min-height: 285px;
        }

        .u-section-2 .u-container-layout-1 {
            padding-left: 30px;
            padding-right: 30px;
        }

        .u-section-2 .u-container-layout-2 {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    @media (max-width: 767px) {
        .u-section-2 .u-sheet-1 {
            min-height: 737px;
        }

        .u-section-2 .u-layout-cell-1 {
            min-height: 428px;
        }

        .u-section-2 .u-container-layout-1 {
            padding-left: 10px;
            padding-right: 10px;
        }

        .u-section-2 .u-container-layout-2 {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    @media (max-width: 575px) {
        .u-section-2 .u-sheet-1 {
            min-height: 578px;
        }

        .u-section-2 .u-layout-cell-1 {
            min-height: 269px;
        }
    }.u-block-3462-2 {
         position: absolute;
         bottom: 10px;
     }

    .u-block-3462-3 {
        position: absolute;
        left: 0;
    }

    .u-block-3462-4 {
        position: absolute;
        right: 0;
    }

    .u-section-3-1 {
        background-image: linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("../../public/images/g6fc0028ac78ce1377bae0efbbf6a7ad47a0d698552f4737a83549513119ac8d6df0b7e1f24b641d91712a310a4595af50ea3657e58d21ed0b67a34a81c582e99_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-1 .u-sheet-1 {
        min-height: 800px;
    }

    .u-section-3-1 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 60px auto 0;
    }

    .u-section-3-1 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-1 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        background-image: none;
        border-style: solid;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-1 .u-sheet-1 {
            min-height: 660px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-1 .u-sheet-1 {
            min-height: 506px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-1 .u-sheet-1 {
            min-height: 380px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-1 .u-sheet-1 {
            min-height: 239px;
        }

        .u-section-3-1 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-2 {
        background-image: linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("../../public/images/g39627685e915b1d9d5fad764513215c90979f8abc854475c4b2a2a91195cf9a301a20e0e9e351957c2defc8d14743ab038eeb8de57c5544753aeec9fd31d4790_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-2 .u-sheet-1 {
        min-height: 800px;
    }

    .u-section-3-2 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 60px auto 0;
    }

    .u-section-3-2 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-2 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        background-image: none;
        border-style: solid;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-2 .u-sheet-1 {
            min-height: 660px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-2 .u-sheet-1 {
            min-height: 506px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-2 .u-sheet-1 {
            min-height: 380px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-2 .u-sheet-1 {
            min-height: 239px;
        }

        .u-section-3-2 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-3 {
        background-image: linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("../../public/images/gb7a1e1bfa36e0229a5573ee491d2dd636fd817eaadfa1d11462c701097faa96ed56e9dc18859c6f6d648f0f32329f10b77556775d8b8b6f46a3e079cece484e9_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-3 .u-sheet-1 {
        min-height: 800px;
    }

    .u-section-3-3 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 60px auto 0;
    }

    .u-section-3-3 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-3 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        background-image: none;
        border-style: solid;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-3 .u-sheet-1 {
            min-height: 660px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-3 .u-sheet-1 {
            min-height: 506px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-3 .u-sheet-1 {
            min-height: 380px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-3 .u-sheet-1 {
            min-height: 239px;
        }

        .u-section-3-3 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-4 {
        background-image: linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("../../public/images/g3426600c289cdcbb2064bbbef870610fe9440de1e548a8d13dc6fa537dfdf2868563840a97dcc2cb400c52d4338c34ae23a3192c0eb407c48ef9ad41c11adf1f_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-4 .u-sheet-1 {
        min-height: 800px;
    }

    .u-section-3-4 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 60px auto 0;
    }

    .u-section-3-4 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-4 .u-btn-1 {
        background-image: none;
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-4 .u-sheet-1 {
            min-height: 660px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-4 .u-sheet-1 {
            min-height: 506px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-4 .u-sheet-1 {
            min-height: 380px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-4 .u-sheet-1 {
            min-height: 239px;
        }

        .u-section-3-4 .u-text-1 {
            font-size: 3.75rem;
        }
    } .u-section-4 {
          background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../public/images/g1664cfb571b334defb118c7f6f920219f2f0e2421d113c4c902daef7be4e2accc8ff9540ddb5d943142822c5dba60eebdd2a0b07ab9b5347779f23c2044b2062_1280.jpg");
          background-position: 50% 50%;
      }

    .u-section-4 .u-sheet-1 {
        min-height: 800px;
    }

    .u-section-4 .u-text-1 {
        text-transform: uppercase;
        font-size: 6rem;
        font-weight: 700;
        margin: 60px auto 0 20px;
    }

    .u-section-4 .u-text-2 {
        margin: 30px 97px 0 20px;
    }

    .u-section-4 .u-btn-1 {
        background-image: none;
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        margin: 40px 20px 60px;
    }

    @media (max-width: 1199px) {
        .u-section-4 .u-sheet-1 {
            min-height: 660px;
        }

        .u-section-4 .u-text-1 {
            margin-left: 0;
        }

        .u-section-4 .u-text-2 {
            margin-right: 0;
            margin-left: 0;
        }

        .u-section-4 .u-btn-1 {
            margin-left: 0;
            margin-right: 0;
        }
    }

    @media (max-width: 991px) {
        .u-section-4 .u-sheet-1 {
            min-height: 506px;
        }
    }

    @media (max-width: 767px) {
        .u-section-4 .u-sheet-1 {
            min-height: 380px;
        }

        .u-section-4 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    @media (max-width: 575px) {
        .u-section-4 .u-sheet-1 {
            min-height: 239px;
        }

        .u-section-4 .u-text-1 {
            font-size: 3rem;
        }
    } .u-section-5 {
          background-image: linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJkZWZhdWx0LWltYWdlLXNvbGlkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDAwIDI2NSIgc3R5bGU9IndpZHRoOiA0MDBweDsgaGVpZ2h0OiAyNjVweDsiPg0KPHJlY3QgZmlsbD0iI0M2RDhFMSIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNjUiLz4NCjxwYXRoIGZpbGw9IiNEOUUzRTgiIGQ9Ik0zOTUuMyw5Ni4yYy01LTAuOC02LjEsMS4xLTguNSwyLjljLTEtMi4zLTIuNi02LjItNy43LTVjMS41LTUuMy0yLjYtOC40LTcuNy04LjRjLTAuNiwwLTEuMiwwLjEtMS44LDAuMg0KCWMtMS44LTQuMS02LTYuOS0xMC43LTYuOWMtNi41LDAtMTEuOCw1LjMtMTEuOCwxMS44YzAsMC40LDAsMC45LDAuMSwxLjNjLTEuMi0wLjgtMi41LTEuMy0zLjktMS4zYy00LjMsMC03LjksNC4yLTcuOSw5LjQNCgljMCwxLjIsMC4yLDIuNCwwLjYsMy41Yy0wLjUtMC4xLTEtMC4xLTEuNi0wLjFjLTYuOSwwLTEyLjUsNS41LTEyLjcsMTIuNGMtMC45LTAuMi0xLjktMC40LTIuOS0wLjRjLTYuNCwwLTExLjcsNS4yLTEyLjUsMTEuOA0KCWMtMS4yLTAuNC0yLjUtMC42LTMuOS0wLjZjLTUuOSwwLTEwLjgsMy44LTEyLjEsOC45Yy0yLjQtMi01LjUtMy4yLTguOS0zLjJjLTYsMC0xMS4xLDMuNy0xMi44LDguOGMtMS41LTEuNC0zLjgtMi4zLTYuMy0yLjMNCgljLTIuMSwwLTQuMSwwLjYtNS41LDEuN2gtMC4xYy0xLjMtNS41LTYuMi05LjUtMTIuMS05LjVjLTIuNCwwLTQuNywwLjctNi42LDEuOWMtMS40LTAuNy0zLTEuMi00LjgtMS4yYy0wLjMsMC0wLjUsMC0wLjgsMA0KCWMtMS41LTQuMS01LjItNy05LjUtN2MtMy4xLDAtNS45LDEuNS03LjgsMy45Yy0yLjItNC44LTYuOC04LjItMTIuMi04LjJjLTUuNiwwLTEwLjUsMy43LTEyLjUsOC44Yy0yLjEtMC45LTQuNC0xLjUtNi45LTEuNQ0KCWMtNi44LDAtMTIuNSwzLjktMTQuNSw5LjNjLTAuMiwwLTAuNSwwLTAuNywwYy01LjIsMC05LjYsMy4yLTExLjQsNy44Yy0yLjctMi44LTctNC41LTExLjgtNC41Yy0zLjMsMC02LjQsMC45LTguOSwyLjMNCgljLTIuMS02LjUtOC0xMi4yLTE4LjEtOS45Yy0yLjctMi4zLTYuMy0zLjctMTAuMS0zLjdjLTIuNSwwLTQuOCwwLjYtNi45LDEuNmMtMi4yLTUuOS03LjktMTAuMS0xNC42LTEwLjFjLTguNiwwLTE1LjYsNy0xNS42LDE1LjYNCgljMCwwLjksMC4xLDEuNywwLjIsMi41Yy0yLjYtNS03LjgtOC40LTEzLjgtOC40Yy04LjMsMC0xNS4xLDYuNS0xNS42LDE0LjZjLTIuOS0zLjItNy01LjMtMTEuNy01LjNjLTcuNCwwLTEzLjUsNS4xLTE1LjIsMTINCgljLTIuOS0zLjUtOS44LTYtMTQuNy02djExOS4yaDQwMFYxMDJDNDAwLDEwMiw0MDAsOTcsMzk1LjMsOTYuMnoiLz4NCjxwYXRoIGZpbGw9IiM4RUE4QkIiIGQ9Ik00MDAsMjA2LjJjMCwwLTI1LjMtMTkuMi0zMy42LTI1LjdjLTEzLjQtMTAuNi0yMy4xLTEyLjktMzEuNy03cy0yMy45LDE5LjctMjMuOSwxOS43cy01OC45LTYzLjktNjEuNS02Ni40DQoJYy0xLjUtMS40LTMuNi0xLjctNS41LTAuOWMtNS4yLDIuNC0xNy42LDkuNy0yNC41LDEyLjdjLTYuOSwyLjktNDEtNTAuNy00OS42LTUzcy04NC4zLDgzLjMtMTAxLjQsNzUuMXMtMjYuOS0yLjMtMzUuNCwzLjUNCgljLTguNiw1LjktMTEsNS45LTE1LjksOC4ycy0xNy4xLTUuOS0xNy4xLTUuOVYyNjVjMCwwLDQwMCwwLjIsNDAwLDB2LTU4LjhINDAweiIvPg0KPHBhdGggZmlsbD0iIzdFOTZBNiIgZD0iTTMzMy40LDE3OWMtMTMuMS05LjMtNDAsNC42LTU1LjEsMTAuN2MtMjMuNiw5LjYtOTQtNTQuNC0xMDcuMi01OS43YzAsMC00LjIsMy43LTkuNiw3LjYNCgljLTMuNS0wLjQtOC40LTUuNy05LjktNC43Yy00LjYsMy4xLTE3LjgsMTUuNC0yOC4zLDI2LjZjLTEwLjUsMTEuMy0xMS43LDAtMTUuOC0wLjZjLTIuNS0wLjQtNTQuMSw0Mi41LTU4LjcsNDMuMQ0KCUMyMi4zLDIwNS4zLDAsMTk3LjUsMCwxOTcuNVYyNjVsNDAwLTAuMXYtNTMuM0M0MDAsMjExLjYsMzQ0LjgsMTg3LjEsMzMzLjQsMTc5eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTAsMjY0Ljl2LTU4LjZjMCwwLDguMiwxLjgsMTEuMyw1LjNjMy4xLDMuNiwyNi4xLTQuMiwyNi4xLDQuN3MwLjUsNC4yLDAuNSwxNC44YzAsMTAuNywyMy00LjIsMzguMS0xOC40DQoJczM0LjktNDkuMiwzNi0zNWMxLDE0LjItMTUuMSwzOS4yLTI0LDU2LjRDNzkuMSwyNTEuNCw1MS43LDI2NSw1MS43LDI2NUwwLDI2NC45eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTEwMCwyNjVjMCwwLDY2LjctMTI1LjEsNjguMy0xMTYuOHMtNi44LDI5LjcsMi4xLDI2LjFjOC45LTMuNiwxNC42LTE2LDE4LjgtOS41czE2LjIsMzguNiwyMS45LDMzLjgNCgljNS43LTQuNywyMS40LTEzLjEsMjIuNC02LjVjMSw2LjUtMSw1LjMtNS43LDIwLjJDMjIzLjEsMjI3LjEsMjAwLDI2NSwyMDAsMjY1aC0xMGMwLDAsNi0yNC44LDguNi0zNC45YzIuNi0xMC4xLTMuNy0xOS0xMi04LjMNCglzLTIzLDIyLTI0LDE3LjhzLTUuNy0zMC4zLTE4LjgtMTQuMmMtMTMsMTYtMzMuOCwzOS43LTMzLjgsMzkuN2gtMTBWMjY1eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTI0NSwyNjVjMCwwLDE5LjgtNTQuNywzMy40LTY0LjJzNTMuNy0yNy45LDQ2LjktMTMuNmMtNi44LDE0LjItMTEsMzQuNC0yMC4zLDQ5LjgNCgljLTkuNCwxNS40LTE4LjgsMjYuMS0xNC4xLDEzLjZjNC43LTEyLjUsNi40LTIzLjMsMy43LTIzLjFDMjcxLjMsMjI5LjEsMjYwLDI2NSwyNjAsMjY1SDI0NXoiLz4NCjwvc3ZnPg0K");
          background-position: 50% 50%;
      }

    .u-section-5 .u-sheet-1 {
        min-height: 800px;
    }

    .u-section-5 .u-text-1 {
        margin: 60px auto 0 0;
    }

    .u-section-5 .u-text-2 {
        margin: 30px 314px 60px 0;
    }

    @media (max-width: 1199px) {
        .u-section-5 .u-sheet-1 {
            min-height: 660px;
        }

        .u-section-5 .u-text-2 {
            margin-right: 114px;
        }
    }

    @media (max-width: 991px) {
        .u-section-5 .u-sheet-1 {
            min-height: 506px;
        }

        .u-section-5 .u-text-2 {
            margin-right: 0;
        }
    }

    @media (max-width: 767px) {
        .u-section-5 .u-sheet-1 {
            min-height: 380px;
        }
    }

    @media (max-width: 575px) {
        .u-section-5 .u-sheet-1 {
            min-height: 239px;
        }
    }
    .pic{
        width: 295px;
        height: 299px;
        margin-right: 0;
        margin-left: 0;
    }

    .circular-plus{
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height: 100vh;
        color: #fff;
        background: #3e423a;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .percentage-value {
        display: block;
        margin-top: 10px;
        font-size: 28px;
    }
    .percentage-label {
        display: block;
        margin-top: 10px;
        font-size: 12px;
    }
    .demo-progress .el-progress--line {
        margin-bottom: 15px;
        width: 350px;
    }
    .demo-progress .el-progress--circle {
        margin-right: 15px;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 100px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
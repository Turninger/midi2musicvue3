<template>
    <!DOCTYPE html>
    <html style="font-size: 16px;">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <meta name="keywords" content="Live music and&nbsp;Concert tickets">
        <meta name="description" content="">
        <meta name="page_type" content="np-template-header-footer-from-plugin">
        <title>Home</title>
        <link rel="stylesheet" href="nicepage.css" media="screen">
<!--        <link rel="stylesheet" href="Home.css" media="screen">-->
<!--        <script class="u-script" type="text/javascript" src="jquery-1.9.1.min.js" defer=""></script>-->
<!--        <script class="u-script" type="text/javascript" src="nicepage.js" defer=""></script>-->
        <meta name="generator" content="Nicepage 4.9.1, nicepage.com">
        <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">






<!--        <script type="application/ld+json">{-->
<!--            "@context": "http://schema.org",-->
<!--            "@type": "Organization",-->
<!--            "name": "",-->
<!--            "logo": "../../public/images/gc5af6611333c6aa0517181df2b5535dc11f60978bcfea83c47f673fb920ce25c7ffdc27b7a1a6b1b7bb9759e4bd4279295c2c99d063c1e60b14ba01babe3e8c6_1280.png",-->
<!--            "sameAs": []-->
<!--        }</script>-->
        <meta name="theme-color" content="#4340ea">
        <meta property="og:title" content="Home">
        <meta property="og:type" content="website">
    </head>
    <body class="u-body u-xl-mode">

    <section class="u-clearfix u-image u-section-1" id="sec-7eb1">
        <div class="u-clearfix u-sheet u-sheet-1">
            <h2 class="u-text u-text-body-alt-color u-text-1">Live music and&nbsp;<br>Concert tickets
            </h2>
            <h3 class="u-text u-text-body-alt-color u-text-2">ONLINE MUSIC EVENTS</h3>
        </div>
    </section>

<!--    第2页-->
    <section class="u-align-left u-clearfix u-image u-shading u-section-2" src="" data-image-width="1280" data-image-height="960" id="sec-d154">
        <div class="u-clearfix u-sheet u-sheet-1">
            <div class="u-clearfix u-expanded-width u-gutter-50 u-layout-wrap u-layout-wrap-1">

<!--                左侧div框-->
<!--                <div class="u-layout">-->
<!--                    <div class="u-layout-row">-->
<!--                        <div class="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">-->
<!--                            <div class="u-container-layout u-container-layout-1">-->
<!--                                <img class="u-image u-image-default u-image-1" src="//images01.nicepage.com/a30092d23d7b9fbf5aa8795f/4b444ce19a9058ed99b83129/g674187738f82d013428b51e9e74241258ce69f79cbbf55ac2fc9e15a65d06111d404377aaab32e5564df61ebcdf40a4ae1e94882c5bb3b71a7a3f28f28ff8943_1280.png" alt="" data-image-width="1280" data-image-height="798">-->
<!--                                <a href="https://nicepage.com/website-templates" class="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-hover-white u-btn-1">Button</a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">-->
<!--                            <div class="u-container-layout u-container-layout-2">-->
<!--                                <h2 class="u-text u-text-1">Sample Headline</h2>-->
<!--                                <p class="u-text u-text-2">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>-->
<!--                                <a href="1746446#carousel_eaed" class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-btn-2">选择乐器</a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

                <div class="u-layout">
                    <div class="u-layout-row">

<!--音乐播放组件-->

                        <div class="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                            <av-bars
                                    caps-color="#FFF"
                                    :bar-color="['#b381ff', '#e219ff', '#ff1e9b','#ffd498']"
                                    canv-fill-color="#000"
                                    :caps-height="20"
                                    :audio-src="audio.src"
                                    audio-class="myAudio"
                                    :canv-height="400"
                                    :canv-width="350"
                                    :audio-controls="false"
                            ></av-bars>

                        </div>

                        <div class="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                            <div class="u-container-layout u-container-layout-2">
                                <h2 class="u-text u-text-1">试听《欢乐颂》MIDI</h2>
                                <p class="u-text u-text-2">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
<!--                                播放《欢乐颂》MIDI-->
                                <a @click="play" class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-btn-1">播放</a>
                                <a @click="pause" class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-btn-1">暂停</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!--    第3页 走马灯-->
    <section class="u-carousel u-slide u-block-3462-1" src="" data-image-width="1280" data-image-height="853"  data-interval="5000" data-u-ride="carousel">

        <el-carousel class="u-carousel u-slide u-block-3462-1" arrow="always" height="800px">
            <!--        走马灯1-->
            <el-carousel-item>
                <div  class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-1 carousel_father_position" src="" data-image-width="1280" data-image-height="800px">
                    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1 ">
                        <h1 style="margin-top: 200px" class="u-text u-text-default u-title u-text-1 carousel_content">Piano</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2">使用钢琴来演奏我们的测试曲目《欢乐颂》</p>
                        <a @click="setPiano" href="#page4"  class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-10 u-none u-btn-1">Read More</a>
                    </div>
                </div>
            </el-carousel-item>
            <!--        走马灯2-->
            <el-carousel-item>

                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-2 carousel_father_position" src="" data-image-width="1280" data-image-height="853">
                    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1 ">
                        <h1 style="margin-top: 200px" class="u-text u-text-default u-title u-text-1  carousel_content">Violin</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2"> 使用小提琴来演奏我们的测试曲目《欢乐颂》</p>
                        <a @click="setViolin" href="#page4" class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-10 u-none u-btn-1">Read More</a>
                    </div>
                </div>

            </el-carousel-item>
            <!--        走马灯3-->
            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-3 carousel_father_position" src="" data-image-width="1280" data-image-height="853">
                    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
                        <h1 style="margin-top: 200px" class="u-text u-text-default u-title u-text-1  carousel_content">Bass</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                        <a href="#page4" class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-10 u-none u-btn-1">Read More</a>
                    </div>
                </div>

            </el-carousel-item>
            <!--        走马灯4-->
            <el-carousel-item>

                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-4 carousel_father_position" src="" data-image-width="1280" data-image-height="853">
                    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
                        <h1 style="margin-top: 200px" class="u-text u-text-default u-title u-text-1  carousel_content">Bass</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                        <a @click="commitTransform" href="#page4" class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-10 u-none u-btn-1">Read More</a>
                    </div>
                </div>
            </el-carousel-item>

        </el-carousel>

    </section>

    <!--    第4页 展示结果   -->
    <section class="u-align-left u-clearfix u-image u-shading u-section-2" src="" data-image-width="1280" data-image-height="960" id="page4">
        <div class="u-clearfix u-sheet u-sheet-1">
            <div class="u-clearfix u-expanded-width u-gutter-50 u-layout-wrap u-layout-wrap-1">


                <div class="u-layout">
                    <div class="u-layout-row">

                        <!--音乐播放组件-->

                        <div class="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                            <av-bars
                                    caps-color="#FFF"
                                    :bar-color="['#b381ff', '#e219ff', '#ff1e9b','#ffd498']"
                                    canv-fill-color="#000"
                                    :caps-height="20"
                                    :audio-src="audio.src"
                                    audio-class="myAudio"
                                    :canv-height="400"
                                    :canv-width="350"
                                    :audio-controls="false"
                            ></av-bars>
                        </div>

                        <div class="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                            <div class="u-container-layout u-container-layout-2">
                                <h2 class="u-text u-text-1">试听《欢乐颂》MIDI</h2>
                                <p class="u-text u-text-2">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                                <!--                                播放《欢乐颂》MIDI-->
                                <a @click="play" class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-btn-1">播放</a>
                                <a @click="pause" class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-btn-1">暂停</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="u-align-left u-clearfix u-image u-shading u-section-4" src="" data-image-width="1280" data-image-height="853" id="sec-c75b">
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <h1 class="u-text u-text-default u-title u-text-1">Easy to use</h1>
            <p class="u-large-text u-text u-text-variant u-text-2">上传midi文件，生成你的音乐！</p>
            <a href="/art" data-page-id="1746308" class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-btn-1">Have a Try！</a>
        </div>
    </section>
    <section class="u-align-left u-clearfix u-image u-shading u-section-5" src="" data-image-width="256" data-image-height="256" id="sec-55d6">
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <h1 class="u-text u-text-default u-title u-text-1">Sample Headline</h1>
            <p class="u-large-text u-text u-text-variant u-text-2">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        </div>
    </section>



    <section class="u-backlink u-clearfix u-grey-80">
        <a class="u-link" href="https://nicepage.com/website-templates" target="_blank">
            <span>Website Templates</span>
        </a>
        <p class="u-text">
            <span>created with</span>
        </p>
        <a class="u-link" href="" target="_blank">
            <span>Website Builder Software</span>
        </a>.
    </section>
    </body>
    </html>
</template>

<script>
    const axios = require('axios');
    export default {
        name: "Home",
        data () {
            return {
                //演奏的乐器
                instrument:'',
                //音频播放
                audio: {
                    // 该字段是音频是否处于播放状态的属性
                    playing: false,
                    // 音频当前播放时长
                    currentTime: 0,
                    // 音频最大播放时长
                    maxTime: 0,
                    src:require("../../public/audio/0_violin.wav")
                }
            }
        },
        mounted() {
            this.audioElement=document.querySelector(".myAudio")
        },
        methods: {
            play() {
                this.audioElement.play();
            },
            pause() {
                this.audioElement.pause();
            },
            setPiano(){
                this.instrument='piano'
                console.log(this.instrument)
            },
            setViolin(){
                this.instrument='violin'
                console.log(this.instrument)
                axios.post('http:localhost:8182/')
            },

            setBass(){
                this.instrument='piano'
                console.log(this.instrument)
            },
            commitTransform(event){
                console.log(this.instrument)
            }
        },

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
          background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../../public/images/g8165984174726a6207fbf1dddad68862a5a011b991e639a300fc09eb9482938851d2b3fcf9bb2bc1788f257af953595a0f9e9a7ba5e007b30f0736765a923560_1280.jpg");
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

    .carousel_father_position{
        height: 800px;
        display: table;
    }
    .carousel_son_position{
        display:table-cell;
    }
    .carousel_content{    }
</style>
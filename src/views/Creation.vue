<template>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <meta name="keywords"
              content="From Ideato Iconic, A Strategic Branding, Web Design, and Advertising Agency, Visually speaking…, Our Services, A design agency built to build modern brands…, Our Team, Creative Agency">
        <meta name="description" content="">
        <meta name="page_type" content="np-template-header-footer-from-plugin">
        <title>Art</title>
        <link rel="stylesheet" href="nicepage.css" media="screen">
        <link rel="stylesheet" href="Art.css" media="screen">
        <meta name="generator" content="Nicepage 4.10.5, nicepage.com">
        <link id="u-theme-google-font" rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">
        <link id="u-page-google-font" rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i">
        <meta name="theme-color" content="#ff7070">
        <meta property="og:title" content="Art">
        <meta property="og:type" content="website">
        <link rel="canonical" href="/">
    </head>
    <body class="u-body u-xl-mode">
    <Header></Header>

    <!-- 第一页-->
    <section class="u-clearfix u-image u-section-1" id="sec-1994">
        <div class="u-clearfix u-sheet u-sheet-1">
            <div class="u-align-right u-container-style u-group u-group-1">
                <div class="u-container-layout u-container-layout-1">
                    <h1 class="u-custom-font u-font-playfair-display u-text u-text-body-alt-color u-title u-text-1">
                        <vuetyped :strings="['开始生成你的曲目!']" :loop="true" :smart-backspace="true">
                            <div class="typing"/>
                        </vuetyped>

                    </h1>
                    <h5 class="u-custom-font u-font-montserrat u-text u-text-body-alt-color u-text-2">A FULL-SERVICE
                        CREATIVE TOOL</h5>
                </div>
            </div>
            <img src="../../public/images/Untitled2.png" alt=""
                 class="u-image u-image-contain u-image-default u-opacity u-opacity-90 u-image-1">
        </div>
    </section>

    <!--  第2页  MIDI文件上传 在线生成  -->
    <section class="u-align-center u-clearfix u-image u-shading u-section-2" src="" data-image-width="150"
             data-image-height="112" id="sec-8f61">
        <div class="u-clearfix u-sheet u-sheet-1">
            <h1 class="u-text u-text-default u-title u-text-1">
                <vuetyped :strings="['在线生成']" :loop="true" :smart-backspace="true">
                    <div class="typing"/>
                </vuetyped>
            </h1>
            <p class="u-large-text u-text u-text-default u-text-variant u-text-2">
                <vuetyped :strings="['上传MIDI文件，生成属于你的音乐！']" :loop="true" :smart-backspace="true">
                    <div class="typing"/>
                </vuetyped>
            </p>
            <!--            <a href="#" class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">上传.midi</a>-->
            <el-upload
                    class="upload-demo"
                    action="http://localhost:8182/file/upload"
                    accept=".mid"
                    :on-preview="(response,file)=>handlePreview(item,response, file)"
                    :on-remove="handleRemove"
                    :on-success="(response,file)=>handleSuccess(item,response, file)"
                    :before-remove="beforeRemove"
                    multiple="false"
                    :limit="1"
                    :on-exceed="handleExceed"
                    auto-upload="true"
            >
                <a class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                   data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                   data-animation-direction=""
                >上传.midi</a>

            </el-upload>

        </div>
    </section>

    <!-- 第3页   乐器选择 走马灯  -->
    <section class="u-carousel u-slide u-block-e239-1" id="carousel_759a" data-interval="5000" data-u-ride="carousel"
             style="background-color: #1a1a1a">

        <el-carousel type="card" class="u-carousel u-slide u-block-e239-1" :interval="4000" height="600px">
            <!--                1.小提琴-->
            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-1" src=""
                     data-image-width="1280" data-image-height="791">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1">Violin</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2">选择小提琴来演奏你的音乐！</p>
                        <a href="#sec-00b7"
                           @click="setViolin"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>
            <!--2.中提琴-->
            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-2" src=""
                     data-image-width="150" data-image-height="95">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1"> Viola</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2"> 选择中提琴来演奏你的音乐！</p>
                        <a href="#sec-00b7"
                           @click="setViola"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>

            <!--3 大提琴-->
            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-3" src=""
                     data-image-width="909" data-image-height="1280">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1"> Cello</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2"> 选择大提琴来演奏你的音乐！</p>
                        <a href="#sec-00b7" @click="setCello"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>
            <!--4 低音提琴-->
            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-4" src=""
                     data-image-width="1280" data-image-height="800">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1"> DoubleBass</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2"> 选择低音提琴来演奏你的音乐！</p>
                        <a @click="setDoubleBass"
                           href="#sec-00b7"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>

            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-5" src=""
                     data-image-width="1280" data-image-height="853">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1"> Flute</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2"> 选择长笛来演奏你的音乐！</p>
                        <a @click="setFlute"
                           href="#sec-00b7"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>


            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-6" src=""
                     data-image-width="1280" data-image-height="1233">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1">Oboe</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2"> 选择双簧管来演奏你的音乐！</p>
                        <a @click="setOboe"
                           href="#sec-00b7"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>

            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-7" src=""
                     data-image-width="1280" data-image-height="855">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1">Clarinet</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2"> 选择单簧管来演奏你的音乐！</p>
                        <a @click="setClarinet"
                           href="#sec-00b7"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>

            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-8" src=""
                     data-image-width="1280" data-image-height="853">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1">Saxophone</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2"> 选择萨克斯来演奏你的音乐！</p>
                        <a @click="setSaxphone"
                           href="#sec-00b7"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>

            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-9" src=""
                     data-image-width="960" data-image-height="1280">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1">Bassoon</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2"> 选择巴松管来演奏你的音乐！</p>
                        <a @click="setBassoon"
                           href="#sec-00b7"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>

            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-10" src=""
                     data-image-width="1280" data-image-height="853">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1">Trumpet</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2"> 选择小号来演奏你的音乐！</p>
                        <a @click="setTrumpet"
                           href="#sec-00b7"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>


            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-11" src=""
                     data-image-width="1280" data-image-height="853">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1">Trombone</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2"> 选择长号来演奏你的音乐！</p>
                        <a @click="setTrombone"
                           href="#sec-00b7"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>

            </el-carousel-item>


            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-12" src=""
                     data-image-width="1280" data-image-height="848">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1">Tuba</h1>
                        <p class="u-large-text u-text u-text-default u-text-variant u-text-2">选择大号来演奏你的音乐！</p>
                        <a @click="setTuba"
                           href="#sec-00b7"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>

            <el-carousel-item>
                <div class="u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-3-13" src=""
                     data-image-width="1280" data-image-height="853">
                    <div>
                        <h1 style="margin-top: 240px" class="u-text u-text-default u-title u-text-1"> guitar</h1>
                        <p class="u-large-text u-text u-text-variant u-text-2"> 选择吉他来演奏你的音乐！</p>
                        <a @click="setGuitar"
                           href="#sec-00b7"
                           class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                           data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                           data-animation-direction="">确认选择</a>
                    </div>
                </div>
            </el-carousel-item>

        </el-carousel>

        <!--        <div class="u-carousel-inner" role="listbox" style="background-color: #2e2e2e">-->

        <!--            -->
        <!--        </div>-->
    </section>

    <!--    第4页 设置音调和演奏速度-->
    <section class="u-align-left u-clearfix u-image u-shading u-section-4" src="" data-image-width="1280"
             data-image-height="853" id="sec-00b7">
        <div class="u-clearfix u-sheet u-sheet-1">
            <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                <div class="u-layout">
                    <div class="u-layout-row">
                        <el-form :model="musicArgs" ref="musicArgs">
                            <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                                <div class="u-container-layout u-container-layout-1">
                                    <select v-model="musicArgs.pitchOff" size="large" placeholder="请选择演奏音调"
                                            class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1"
                                            data-animation-name="" data-animation-duration="0"
                                            data-animation-delay="0"
                                            data-animation-direction="">

                                        <option>-1.0</option>
                                        <option>-0.5</option>
                                        <option>0</option>
                                        <option>0.5</option>
                                        <option>1.0</option>
                                    </select>
                                    <p class="u-large-text u-text u-text-variant u-text-1">调整MIDI演奏的音调（&gt;0 ：升调, &lt;0
                                        ：降调）</p>
                                    <h1 class="u-text u-text-default u-title u-text-2">演奏音调</h1>
                                </div>
                            </div>
                            <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                                <div class="u-container-layout u-container-layout-2">
                                    <h1 class="u-text u-text-default u-title u-text-3">演奏速度</h1>
                                    <p class="u-large-text u-text u-text-variant u-text-4">调整 MIDI 的演奏速度（=1：原始速度，&gt;1：更快，&lt;1：更慢）</p>
                                    <select v-model="musicArgs.speedRate" size="large" placeholder="请选择演奏速度"
                                            class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-2"
                                            data-animation-name="" data-animation-duration="0" data-animation-delay="0">
                                        <option>0.2</option>
                                        <option>0.4</option>
                                        <option>0.6</option>
                                        <option>0.8</option>
                                        <option>1.0</option>
                                        <option>1.2</option>
                                        <option>1.4</option>
                                        <option>1.6</option>
                                        <option>1.8</option>
                                    </select>

                                    <a @click="genMusic" href="#sec-e4f3"
                                       class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-2"
                                       data-animation-name="" data-animation-duration="0" data-animation-delay="0"
                                       data-animation-direction="">开始生成</a>
                                </div>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--    第5页 在线预览或下载文件-->
    <section class="u-align-left u-clearfix u-image u-shading u-section-5" id="sec-e4f3" data-image-width="150"
             data-image-height="100">
        <div class="u-clearfix u-sheet u-sheet-1">
            <div class="u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-1">
                <div class="u-layout">
                    <div class="u-layout-row">
                        <div class="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                            <div class="u-container-layout u-container-layout-1">
                                <ve-progress
                                        v-if="showGenMusicProgress"
                                        :progress="genMusicPercent"
                                        :color="gradient"
                                        :thickness="20"
                                        :size="300"
                                        style="margin-top: 150px"
                                >
                                    <span slot="legend-value">{{genMusicPercent}}/100</span>
                                    <p slot="legend-caption">正在生成</p>
                                </ve-progress>
                                <audio v-if="isGenMusic===true" style="margin-top: 300px"
                                       :src="genMusicUrl"
                                       ref="audio1"
                                       controls="controls">

                                </audio>
                                <audio :src="genMusicUrl">
                                </audio>
                            </div>
                        </div>
                        <div class="u-align-left u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                            <div class="u-container-layout u-container-layout-2">
                                <h2 class="u-text u-text-body-alt-color u-text-1">在线预览<br>或下载到本地！
                                </h2>
                                <h4 class="u-text u-text-body-alt-color u-text-2">继续调整参数，<br>获取更理想的音乐！
                                </h4>
                                <a @click="play1"
                                   class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1">播放</a>
                                <a @click="pause1"
                                   class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1">暂停</a>
<!--                                <a @click="download1"-->
<!--                                   class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-3">下载-->
<!--                                    .WAV</a>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--    第6页 表达控制表格-->
    <section class="u-align-center u-clearfix u-image u-shading u-section-6" src="" data-image-width="1280"
             data-image-height="853" id="sec-8121">
        <div class="u-clearfix u-sheet u-sheet-1">
            <div class="u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
                <div class="u-layout">
                    <div class="u-layout-col">
                        <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                            <div class="u-container-layout u-container-layout-1">
                                <h1 class="u-text u-text-default u-title u-text-1">
                                    <vuetyped :strings="['详细的表达控制']" :loop="true" :smart-backspace="true">
                                        <div class="typing"/>
                                    </vuetyped>
                                </h1>
                                <p class="u-large-text u-text u-text-variant u-text-2">修改表格中的表达控件参数以获得独一无二的音乐！</p>

                            </div>

                        </div>
                        <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                            <div class="u-container-layout u-container-layout-2">
                                <vxe-table
                                        height="500"
                                        border
                                        show-overflow
                                        :data="tableData"
                                        :column-config="{resizable: true}"
                                        :edit-config="{trigger: 'click', mode: 'cell'}">
                                    <vxe-column title="note" type="seq" width="60"></vxe-column>
                                    <!--            amplitudeStd-->
                                    <vxe-column field="amplitudeMean" title="amplitudeMean"
                                                :edit-render="{autofocus: '.vxe-input--inner'}">
                                        <template #edit="{ row }">
                                            <vxe-input v-model="row.amplitudeMean" type="number"></vxe-input>
                                        </template>
                                    </vxe-column>
                                    <!--            amplitudeStd-->
                                    <vxe-column field="amplitudeStd" title="amplitudeStd" :edit-render="{}">
                                        <template #edit="{ row }">
                                            <vxe-input v-model="row.amplitudeStd" type="number"
                                                       placeholder="请输入昵称"></vxe-input>
                                        </template>
                                    </vxe-column>


                                    <vxe-column field="vibratoExtend" title="vibratoExtend" :edit-render="{}">
                                        <template #edit="{ row }">
                                            <vxe-input v-model="row.vibratoExtend" type="number"
                                                       placeholder="请输入数值"></vxe-input>
                                        </template>
                                    </vxe-column>

                                    <vxe-column field="brightness" title="brightness" :edit-render="{}">
                                        <template #edit="{ row }">
                                            <vxe-input v-model="row.brightness" type="number"
                                                       placeholder="请输入数值"></vxe-input>
                                        </template>
                                    </vxe-column>

                                    <vxe-column field="attackLevel" title="attackLevel" :edit-render="{}">
                                        <template #edit="{ row }">
                                            <vxe-input v-model="row.attackLevel" type="number"
                                                       placeholder="请输入数值"></vxe-input>
                                        </template>
                                    </vxe-column>

                                    <vxe-column field="pitch" title="pitch" :edit-render="{}">
                                        <template #edit="{ row }">
                                            <vxe-input v-model="row.pitch" type="number"
                                                       placeholder="请输入数值"></vxe-input>
                                        </template>
                                    </vxe-column>

                                    <vxe-column field="noteLength" title="noteLength" :edit-render="{}">
                                        <template #edit="{ row }">
                                            <vxe-input v-model="row.noteLength" type="number"
                                                       placeholder="请输入数值"></vxe-input>
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

                                <a style="margin-top:20px"
                                   v-if="tableData!=null"
                                   href="#carousel_e038"
                                   @click="reGenMusic"
                                   class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1">
                                    重新生成</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--    第7页 在线预览或下载-->
    <section class="u-align-left u-clearfix u-image u-shading u-section-7" id="carousel_e038" data-image-width="1280"
             data-image-height="853" data-animation-name="" data-animation-duration="0" data-animation-delay="0"
             data-animation-direction="">
        <div class="u-clearfix u-sheet u-sheet-1">
            <div class="u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-1">
                <div class="u-layout">
                    <div class="u-layout-row">
                        <div class="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                            <div class="u-container-layout u-container-layout-1">

                                <ve-progress
                                        v-if="showReGenMusicProgress"
                                        :progress="reGenMusicPercent"
                                        :color="reGradient"
                                        :thickness="20"
                                        :size="300"
                                        style="margin-top: 150px"
                                >
                                    <span slot="legend-value">{{reGenMusicPercent}}/100</span>
                                    <p slot="legend-caption">正在生成</p>
                                </ve-progress>

                                <audio v-if="isReGenMusic==true"
                                       style="margin-top: 300px"
                                       :src="reGenMusicUrl"
                                       controls="controls"
                                       ref="audio2">

                                </audio>
                            </div>
                        </div>
                        <div class="u-align-left u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                            <div class="u-container-layout u-container-layout-2">
                                <h2 class="u-text u-text-body-alt-color u-text-1">在线预览<br>或下载到本地！
                                </h2>
                                <h4 class="u-text u-text-body-alt-color u-text-2">继续调整参数，<br>获取更理想的音乐！
                                </h4>
                                <a @click="play2"
                                   class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1">播放</a>
                                <a @click="pause2"
                                   class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-1">暂停</a>
<!--                                <a @click="download2"-->
<!--                                   class="u-border-2 u-border-white u-btn u-button-style u-hover-grey-15 u-none u-text-hover-black u-btn-3">下载-->
<!--                                    .WAV</a>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="u-backlink u-clearfix u-grey-80">
        <a class="u-link" href="https://nicepage.com/one-page-template" target="_blank">
            <span>One Page Template</span>
        </a>
        <p class="u-text">
            <span>created with</span>
        </p>
        <a class="u-link" href="" target="_blank">
            <span>Website Design Software</span>
        </a>.
    </section>
    </body>

</template>

<script>
    import NProgress from 'nprogress'
    import 'nprogress/nprogress.css'
    import Header from "../components/Header";
    import request from "../utils/request";
    import {VeProgress} from "vue-ellipse-progress";

    const axios = require('axios');
    export default {
        name: "Creation",
        components: {VeProgress, Header},
        created() {

        },
        data() {
            return {
                showGenMusicProgress: false,
                showReGenMusicProgress: false,
                isGenMusic: false,
                isReGenMusic: false,
                //生成wav文件的路径
                genMusicUrl: null,
                //经过调整参数后的wav文件的路径
                reGenMusicUrl: null,
                downloadUrl1:'',
                downloadUrl2:'',
                //音乐演奏参数
                musicArgs: {
                    //上传文件的路径
                    fileUrl: '',
                    //演奏乐器
                    instrument: '',
                    //半音音调
                    pitchOff: '',
                    //演奏速度
                    speedRate: '',
                },
                tableData: null,
                //进度条参数
                //进度条进度
                genMusicPercent: 0,
                genMusicSlot: '',
                reGenMusicPercent: 0,
                reGenMusicSlot: '',
                //进度条颜色（渐变）
                gradient: {
                    radial: false,
                    colors: [
                        {
                            color: '#ff1e9b',
                            offset: "0",
                            opacity: '1',
                        },
                        {
                            color: '#fff207',
                            offset: "100",
                            opacity: '0.6',
                        },
                    ]
                },

                reGradient: {
                    radial: false,
                    colors: [
                        {
                            color: '#961cff',
                            offset: "0",
                            opacity: '1',
                        },
                        {
                            color: '#c3ffb0',
                            offset: "100",
                            opacity: '0.6',
                        },
                    ]
                },
                instrument: '',
                fileList: []
            };


        },
        methods: {


            //选择乐器
            //小提琴
            setViolin() {
                this.musicArgs.instrument = 'violin'
            },
            // 中提琴
            setViola() {
                this.musicArgs.instrument = 'viola'
                //console.log(this.instrument)
            },
            // 大提琴
            setCello() {
                this.musicArgs.instrument = 'cello'
                //console.log(this.instrument)
            },
            // 低音提琴
            setDoubleBass() {
                this.musicArgs.instrument = 'double bass'
                //console.log(this.instrument)
            },
            // 长笛
            setFlute() {
                this.musicArgs.instrument = 'flute'
                //console.log(this.instrument)
            },
            //
            setOboe() {
                this.musicArgs.instrument = 'oboe'
                //console.log(this.instrument)
            },
            //
            setClarinet() {
                this.musicArgs.instrument = 'clarinet'
                //console.log(this.instrument)
            },
            //
            setSaxphone() {
                this.musicArgs.instrument = 'saxphone'
                //console.log(this.instrument)
            },
            //
            setBassoon() {
                this.musicArgs.instrument = 'bassoon'
                //console.log(this.instrument)
            },
            //
            setTrumpet() {
                this.musicArgs.instrument = 'trumpet'
                //console.log(this.instrument)
            },
            //
            setTrombone() {
                this.musicArgs.instrument = 'trombone'
                //console.log(this.instrument)
            },
            //
            setTuba() {
                this.musicArgs.instrument = 'tuba'
                //console.log(this.instrument)
            },
            //
            setGuitar() {
                this.musicArgs.instrument = 'guitar'
                //console.log(this.instrument)
            },
            play1() {
                this.$refs.audio1.play()
            },
            pause1() {
                this.$refs.audio1.pause()
            },
            play2() {
                this.$refs.audio2.play()
            },
            pause2() {
                this.$refs.audio2.pause()
            },
            download1(){
                this.downloadUrl1='http://localhost:8182/GenMusic/'+this.musicArgs.fileUrl.slice(this.musicArgs.fileUrl.lastIndexOf('/') + 1, this.musicArgs.fileUrl.lastIndexOf('.')) + '.wav'
                window.open(this.downloadUrl1)
            },
            download2(){
                this.downloadUrl2='http://localhost:8182/ReGenMusic/'+this.musicArgs.fileUrl.slice(this.musicArgs.fileUrl.lastIndexOf('/') + 1, this.musicArgs.fileUrl.lastIndexOf('.')) + '.wav'
                window.open(this.downloadUrl2)
            },

            genMusic() {
                //判断音乐生成参数是否含有空值
                if (this.musicArgs.fileUrl === '') {
                    //alert("请先上传文件")
                    this.$message.error("请先上传文件")
                }
                if (this.musicArgs.instrument === '') {
                    this.$message.error("请先选择演奏乐器")
                }
                if (this.musicArgs.pitchOff === '' || this.musicArgs.speedRate === '') {
                    this.$message.error("请选择生成参数")
                }
                console.log(this.musicArgs)
                this.showGenMusicProgress = true;
                this.genMusicSlot = "正在生成中"
                this.request.post("http://localhost:8182/creation/genMusic", this.musicArgs).then((resp) => {
                    //console.log(resp)
                })
                //如果进度未满
                //发送定时请求 刷新进度条进度

                var timer = setInterval(() => {
                    this.request.post("http://localhost:8182/creation/flushPercent").then((resp) => {
                        //console.log(resp)
                        this.genMusicPercent = resp.data;
                    })
                    if (this.genMusicPercent === '100') {
                        console.log("=====进度条已满，请求表达控制参数=====")
                        //如果进度已满，则停止计时轮询
                        clearInterval(timer)
                        this.genMusicPercent = 0
                        this.showGenMusicProgress = false
                        this.isGenMusic = true
                        //console.log(this.genMusicUrl)
                        //将生成的表达控制参数返回表格
                        //延时3s 异步进行
                        console.log("======生成完毕====")
                        setTimeout(() => {
                            //alert("====等待5s，请求表达控制参数====")
                            this.requestForArgs()
                        }, 1500)

                    }
                }, 1000)


            },
            requestForArgs() {
                this.request.post('http://localhost:8182/creation/conditioningFindAll').then((resp) => {
                    console.log("======延时1.5s，请求表达控制参数=====")
                    if (resp.code === "200") {
                        //成功获取数据
                        console.log(resp.data)
                        this.tableData = resp.data
                    } else {
                        this.$message.error(resp.msg)
                    }
                    // console.log('E:/midi2music/music/GenMusic/'
                    //     + this.musicArgs.fileUrl.slice(this.musicArgs.fileUrl.lastIndexOf('/')+1,this.musicArgs.fileUrl.lastIndexOf('.'))+'.wav')
                    this.genMusicUrl = require('E:/midi2music/music/GenMusic/'
                        + this.musicArgs.fileUrl.slice(this.musicArgs.fileUrl.lastIndexOf('/') + 1, this.musicArgs.fileUrl.lastIndexOf('.')) + '.wav')
                })
            },
            reGenMusic() {
                //判断音乐生成参数是否含有空值
                this.showReGenMusicProgress = true;
                this.reGenMusicSlot = "正在生成中"
                console.log("==========\n", this.tableData)
                console.log("==========\n", this.musicArgs)
                this.request.post("http://localhost:8182/creation/editTable", this.tableData).then((resp) => {
                    console.log(resp)
                })
                this.request.post("http://localhost:8182/creation/reGenMusic", this.musicArgs).then((resp) => {
                    console.log(resp)
                })
                //如果进度未满
                //发送定时请求 刷新进度条进度
                var timer = setInterval(() => {
                    this.request.post("http://localhost:8182/creation/flushPercent").then((resp) => {
                        //console.log(resp)
                        this.reGenMusicPercent = resp.data;
                    })
                    if (this.reGenMusicPercent === '100') {
                        console.log("=====进度条已满，请求表达控制参数=====")
                        //如果进度已满，则停止计时轮询
                        clearInterval(timer)
                        this.reGenMusicPercent = 0
                        this.showReGenMusicProgress = false
                        this.isReGenMusic = true

                        console.log('E:/midi2music/music/ReGenMusic/'
                            + this.musicArgs.fileUrl.slice(this.musicArgs.fileUrl.lastIndexOf('/') + 1, this.musicArgs.fileUrl.lastIndexOf('.')) + '.wav')
                        this.reGenMusicUrl = require('E:/midi2music/music/ReGenMusic/'
                            + this.musicArgs.fileUrl.slice(this.musicArgs.fileUrl.lastIndexOf('/') + 1, this.musicArgs.fileUrl.lastIndexOf('.')) + '.wav')
                    }
                }, 1000)
            },
            //文件上传成功的回调函数
            handleSuccess(item, response, file) {
                //console.log(response)
                //后端回调文件保存url
                //例如：http://localhost:8182/file/7de8de5bd7154fa9aa358322ef57f15c.mid
                this.musicArgs.fileUrl = response;
            },
            //文件删除事件处理
            handleRemove(file) {

            },
            //文件预览事件处理
            handlePreview(item, response, file) {
            },
            //文件数量超出限制
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`);
            },

            handleClick(row) {
                console.log(row);
            }
        }
    }
</script>

<style scoped>

    /*vxe-table 表格样式*/
    /*修改表头背景色*/
    .vxe-table--header-wrapper, .vxe-header--row, .vxe-table--header {
        background-color: #2C3846;
    }


    /*调整表格行高*/
    .vxe-table .vxe-body--column:not(.col--ellipsis), .vxe-table .vxe-footer--column:not(.col--ellipsis), .vxe-table .vxe-header--column:not(.col--ellipsis) {
        padding: 5px 0;
    }

    /*调整表格 单元格背景颜色*/
    .vxe-table .vxe-table--body-wrapper, .vxe-table .vxe-table--footer-wrapper {
        background-color: #ffd967;
    }

    /*调整表格文字及位置*/
    .vxe-table .vxe-body--column, .vxe-table .vxe-footer--column, .vxe-table .vxe-header--column {
        position: relative;
        line-height: 24px;
        text-align: center;
        color: #ffffff;
    }

    /*调整表头首行  line 的颜色*/
    .vxe-table .vxe-table--header-wrapper .vxe-table--header-border-line {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0;
        border-bottom: 1px solid #e8eaec;
    }

    .vxe-body--row.row--hover {
        background-color: rgba(255, 255, 255, 0.3) !important;
    }

    .u-section-1 {
        background-image: url("../../public/images/pexelsphoto342520.jpeg");
        background-position: 50% 50%;
    }

    .u-section-1 .u-sheet-1 {
        min-height: 776px;
    }

    .u-section-1 .u-group-1 {
        width: 675px;
        min-height: 482px;
        margin: 147px 0 0 auto;
    }

    .u-section-1 .u-container-layout-1 {
        padding-left: 20px;
        padding-right: 20px;
    }

    .u-section-1 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 66px 0 0;
    }

    .u-section-1 .u-text-2 {
        letter-spacing: 2px;
        margin: 20px 0 0;
    }

    .u-section-1 .u-btn-1 {
        border-style: solid;
        background-image: none;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 50px 0 0 482px;
    }

    .u-section-1 .u-image-1 {
        width: 322px;
        height: 371px;
        margin: -334px auto 80px 389px;
    }

    @media (max-width: 1199px) {
        .u-section-1 .u-sheet-1 {
            min-height: 746px;
        }

        .u-section-1 .u-group-1 {
            width: 557px;
        }

        .u-section-1 .u-container-layout-1 {
            padding-left: 16px;
            padding-right: 16px;
        }

        .u-section-1 .u-text-1 {
            position: relative;
        }

        .u-section-1 .u-text-2 {
            font-size: 1.25rem;
        }

        .u-section-1 .u-btn-1 {
            margin-bottom: 50px;
            margin-left: auto;
            position: relative;
        }

        .u-section-1 .u-image-1 {
            width: 266px;
            margin-top: -335px;
            margin-bottom: 81px;
            margin-left: 258px;
        }
    }

    @media (max-width: 991px) {
        .u-section-1 .u-group-1 {
            width: 426px;
        }

        .u-section-1 .u-container-layout-1 {
            padding-left: 13px;
            padding-right: 13px;
        }

        .u-section-1 .u-text-1 {
            font-size: 4.5rem;
        }

        .u-section-1 .u-image-1 {
            width: 203px;
            height: 232px;
            margin-top: -272px;
            margin-bottom: 157px;
            margin-left: 183px;
        }
    }

    @media (max-width: 767px) {
        .u-section-1 .u-group-1 {
            width: 400px;
        }

        .u-section-1 .u-container-layout-1 {
            padding-left: 9px;
            padding-right: 9px;
        }

        .u-section-1 .u-text-1 {
            font-size: 3.75rem;
        }

        .u-section-1 .u-text-2 {
            font-size: 1.125rem;
        }

        .u-section-1 .u-btn-1 {
            margin-left: 228px;
        }

        .u-section-1 .u-image-1 {
            width: 191px;
            margin-top: -241px;
            margin-bottom: 126px;
            margin-left: 79px;
        }
    }

    @media (max-width: 575px) {
        .u-section-1 .u-group-1 {
            width: 336px;
        }

        .u-section-1 .u-container-layout-1 {
            padding-left: 6px;
            padding-right: 6px;
        }

        .u-section-1 .u-btn-1 {
            margin-left: 144px;
        }

        .u-section-1 .u-image-1 {
            width: 132px;
            height: 162px;
            margin-top: -175px;
            margin-bottom: 130px;
            margin-left: 0;
        }
    }

    .u-section-2 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/gfb109506ac01e5abf3792657cc1396f536f9bc25bd00ddb7a2914572664783b3b743a89bdc2105ad4cde42379615852b842754fffff3083cdda3daef05d03e40_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-2 .u-sheet-1 {
        min-height: 800px;
    }

    .u-section-2 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 153px auto 0;
    }

    .u-section-2 .u-text-2 {
        margin: 37px auto 0;
    }

    .u-section-2 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 49px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-2 .u-sheet-1 {
            min-height: 660px;
        }

        .u-section-2 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-2 .u-sheet-1 {
            min-height: 506px;
        }
    }

    @media (max-width: 767px) {
        .u-section-2 .u-sheet-1 {
            min-height: 380px;
        }
    }

    @media (max-width: 575px) {
        .u-section-2 .u-sheet-1 {
            min-height: 239px;
        }

        .u-section-2 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-block-e239-2 {
        position: absolute;
        bottom: 10px;
    }

    .u-block-e239-3 {
        position: absolute;
        left: 0;
    }

    .u-block-e239-4 {
        position: absolute;
        width: 65px;
        height: 65px;
        left: auto;
        right: calc(((100% - 1140px) / 2) + -53px);
    }

    @media (max-width: 1199px) {
        .u-block-e239-4 {
            right: calc(((100% - 940px) / 2) + -43px);
        }
    }

    @media (max-width: 991px) {
        .u-block-e239-4 {
            right: calc(((100% - 720px) / 2) + -33px);
        }
    }

    @media (max-width: 767px) {
        .u-block-e239-4 {
            right: calc(((100% - 540px) / 2) + -25px);
        }
    }

    @media (max-width: 575px) {
        .u-block-e239-4 {
            right: calc(((100% - 340px) / 2) + -16px);
        }
    }

    .u-section-3-1 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/g6964d343afb78ae9481c4566c3ed2616d400efd2714a7f0715513ba11dbb30f6db08047e2ec4df942a758a4a0970feeccdbc5baa7372d584dee3412172b6dad0_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-1 .u-sheet-1 {
        min-height: 650px;
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
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-1 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-1 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-1 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-1 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-1 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-1 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-2 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/g2952bc8e1d2ceb9be45c309dd75952a1bfc69e8242457f68480eda4b94afa1bdd615f759351a8caacb347167b7f105a3a549dd8a197a892bd544ea249d5a40dd_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-2 .u-sheet-1 {
        min-height: 650px;
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
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-2 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-2 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-2 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-2 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-2 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-2 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-3 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/g808da29448b0b48b102b6f564b263cd9fbe8fff57a2a50308cf9114373e0c07527580c4464a898c39e1d16847415cc6518e1cb830c3ecdd2070feb177ef4d40b_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-3 .u-sheet-1 {
        min-height: 650px;
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
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-3 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-3 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-3 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-3 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-3 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-3 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-4 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/violin-3621677_1920.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-4 .u-sheet-1 {
        min-height: 650px;
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
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-4 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-4 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-4 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-4 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-4 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-4 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-5 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/gb920d5ecee041a05e5798c90d31100eaa23735ccac0cb180db2a4e4835f3384e364b9c09385e74fa1a82e309d6ca7d5bfada36571b1d62d59659a46b494bb4ef_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-5 .u-sheet-1 {
        min-height: 650px;
    }

    .u-section-3-5 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 60px auto 0;
    }

    .u-section-3-5 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-5 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-5 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-5 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-5 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-5 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-5 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-5 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-6 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/gfc4353a6954fc86b7e7c67d084ab6bd234609034e4c9c15b447a0c39eca51c4e1cf3d1b34062c8fa99aed933a2e2d60f1af84df3a4e2f7467510da1e5a9b4840_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-6 .u-sheet-1 {
        min-height: 650px;
    }

    .u-section-3-6 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 60px auto 0;
    }

    .u-section-3-6 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-6 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-6 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-6 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-6 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-6 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-6 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-6 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-7 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/g6b64e94ebedf050edf2ca5ac9594309cd98eb206e48e23e9558f8368bad2a4f27bdfbe50234b573ed726ec60aabfb506dc01056a9fd21693c95c1f4e256a101e_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-7 .u-sheet-1 {
        min-height: 650px;
    }

    .u-section-3-7 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 60px auto 0;
    }

    .u-section-3-7 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-7 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-7 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-7 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-7 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-7 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-7 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-7 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-8 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/ge6b7c90fe16596eeb98588cd5a55a0999da0007d3aba3066f982134e389c27ed1ec3c6964dd944f0981da7ad693c8b93b19262a7dfb1a97d389806583eeaa3a6_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-8 .u-sheet-1 {
        min-height: 650px;
    }

    .u-section-3-8 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 60px auto 0;
    }

    .u-section-3-8 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-8 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-8 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-8 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-8 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-8 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-8 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-8 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-9 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/g3aadbfe2674db3effc83ca6bcacbdda7df47d8ea819eae41e4d7ad00777479cbb62c3513d97a47924adacd81e0ac4a1a5817180f228e8a5f8ccac3fef78fd0bc_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-9 .u-sheet-1 {
        min-height: 650px;
    }

    .u-section-3-9 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 60px auto 0;
    }

    .u-section-3-9 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-9 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-9 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-9 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-9 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-9 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-9 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-9 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-10 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/g21aa7f1226a5f47a2f62d0df72b189983e05ad91c41ad3a9242c5f9f518d43e07fb14a64723cf0cc412825915fd8552812f18985062a111b3fb8657e3f3ae6fd_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-10 .u-sheet-1 {
        min-height: 650px;
    }

    .u-section-3-10 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        margin: 60px auto 0;
    }

    .u-section-3-10 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-10 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-10 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-10 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-10 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-10 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-10 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-10 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-11 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/g581bf80efd00ddfd365c43823e29f72cd35da94dbefc620c44f29026a2cdfafd332fe913a09025a92ac268b2c102778aedfec22a994715f8fb2e465d73007636_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-11 .u-sheet-1 {
        min-height: 650px;
    }

    .u-section-3-11 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        /*text-transform: uppercase;*/
        margin: 60px auto 0;
    }

    .u-section-3-11 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-11 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-11 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-11 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-11 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-11 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-11 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-11 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-12 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/g9eb21714bcf2b5598ac0388bdc7b695a8e4d22f0a2ab8bcdd3e5e86f2285f6a48200d788125ff4959fef8619a923f1cafc9e79eb08af688be0fae534e20cfa0a_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-12 .u-sheet-1 {
        min-height: 650px;
    }

    .u-section-3-12 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        /*text-transform: uppercase;*/
        margin: 60px auto 0;
    }

    .u-section-3-12 .u-text-2 {
        margin: 30px auto 0;
    }

    .u-section-3-12 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 40px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-12 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-12 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-12 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-12 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-12 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-12 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-3-13 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../public/images/ga94c381a93ac244b205591747993664efccbd4eb4e209f0b1d14288f67c7ee20479dadc7a96d2d0be3a80fbe09ff09e463ba8c8df68faf570eece7f94a9b9e22_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-3-13 .u-sheet-1 {
        min-height: 650px;
    }

    .u-section-3-13 .u-text-1 {
        font-size: 6rem;
        font-weight: 700;
        /*text-transform: uppercase;*/
        margin: 147px auto 0;
    }

    .u-section-3-13 .u-text-2 {
        margin: 0;
    }

    .u-section-3-13 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 112px auto 60px;
    }

    @media (max-width: 1199px) {
        .u-section-3-13 .u-sheet-1 {
            min-height: 536px;
        }

        .u-section-3-13 .u-text-2 {
            margin-left: 56px;
            margin-right: 56px;
        }

        .u-section-3-13 .u-btn-1 {
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-3-13 .u-sheet-1 {
            min-height: 411px;
        }
    }

    @media (max-width: 767px) {
        .u-section-3-13 .u-sheet-1 {
            min-height: 308px;
        }
    }

    @media (max-width: 575px) {
        .u-section-3-13 .u-sheet-1 {
            min-height: 194px;
        }

        .u-section-3-13 .u-text-1 {
            font-size: 3.75rem;
        }
    }

    .u-section-4 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../public/images/g247f4202132532daeb675571deaf133ee3de7aa3446ebc7a4726d3ab9ba01bf14b3c8093ee887b7b601ceafdd0b9fe01f24bb60656c551357493104e79ea821d_1280.jpg");
        background-position: 50% 50%;
        margin-top: 20px;
    }

    .u-section-4 .u-sheet-1 {
        min-height: 800px;
    }

    .u-section-4 .u-layout-wrap-1 {
        margin-top: 113px;
        margin-bottom: 60px;
    }

    .u-section-4 .u-layout-cell-1 {
        min-height: 534px;
    }

    .u-section-4 .u-container-layout-1 {
        padding: 30px;
    }

    .u-section-4 .u-btn-1 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 212px auto 0 0;
    }

    .u-section-4 .u-text-1 {
        margin: 35px 0 0;
    }

    .u-section-4 .u-text-2 {
        text-transform: uppercase;
        font-size: 6rem;
        font-weight: 700;
        margin: 20px auto 0 0;
    }

    .u-section-4 .u-layout-cell-2 {
        min-height: 534px;
    }

    .u-section-4 .u-container-layout-2 {
        padding: 0;
    }

    .u-section-4 .u-text-3 {
        text-transform: uppercase;
        font-size: 6rem;
        font-weight: 700;
        margin: 35px 51px 0 auto;
    }

    .u-section-4 .u-text-4 {
        margin: 30px 30px 0;
    }

    .u-section-4 .u-btn-2 {
        text-transform: uppercase;
        font-weight: 700;
        border-style: solid;
        letter-spacing: 0px;
        margin: 8px 51px 0 auto;
    }

    @media (max-width: 1199px) {
        .u-section-4 .u-sheet-1 {
            min-height: 590px;
        }

        .u-section-4 .u-layout-wrap-1 {
            position: relative;
        }

        .u-section-4 .u-layout-cell-1 {
            min-height: 440px;
        }

        .u-section-4 .u-btn-1 {
            padding: 9px 67px 11px;
        }

        .u-section-4 .u-layout-cell-2 {
            min-height: 440px;
        }

        .u-section-4 .u-text-3 {
            margin-left: 1px;
        }

        .u-section-4 .u-text-4 {
            margin-left: 0;
            margin-right: 0;
        }

        .u-section-4 .u-btn-2 {
            margin-right: 0;
            padding: 9px 67px 11px;
        }
    }

    @media (max-width: 991px) {
        .u-section-4 .u-sheet-1 {
            min-height: 513px;
        }

        .u-section-4 .u-layout-cell-1 {
            min-height: 100px;
        }

        .u-section-4 .u-layout-cell-2 {
            min-height: 100px;
        }

        .u-section-4 .u-text-3 {
            margin-left: 0;
        }
    }

    @media (max-width: 767px) {
        .u-section-4 .u-sheet-1 {
            min-height: 1020px;
        }

        .u-section-4 .u-container-layout-1 {
            padding-left: 10px;
            padding-right: 10px;
        }

        .u-section-4 .u-text-2 {
            font-size: 3.75rem;
        }

        .u-section-4 .u-text-3 {
            font-size: 3.75rem;
        }
    }

    @media (max-width: 575px) {
        .u-section-4 .u-sheet-1 {
            min-height: 738px;
        }

        .u-section-4 .u-text-2 {
            font-size: 3rem;
        }

        .u-section-4 .u-text-3 {
            font-size: 3rem;
        }
    }

    .u-section-5 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../public/images/g2bc63dbddbb3e6ebca4ea48eb4ebcab905573a53d5879d9a9d82837ecc6d4863a5fba7163aa1786c15490ae8079c3c4a1994ecd2748a2e569a998b4a87fe8e07_1280.jpg");
        background-position: 50% 50%;
        margin-top: 20px;
    }

    .u-section-5 .u-sheet-1 {
        min-height: 600px;
    }

    .u-section-5 .u-layout-wrap-1 {
        width: 1140px;
        margin: 70px 0 60px;
    }

    .u-section-5 .u-layout-cell-1 {
        min-height: 400px;
    }

    .u-section-5 .u-container-layout-1 {
        padding: 20px;
    }

    .u-section-5 .u-layout-cell-2 {
        min-height: 550px;
    }

    .u-section-5 .u-container-layout-2 {
        padding: 20px;
    }

    .u-section-5 .u-text-1 {
        font-weight: 700;
        font-size: 3rem;
        margin: 65px 66px 0 62px;
    }

    .u-section-5 .u-text-2 {
        margin: 15px 235px 0 62px;
    }

    .u-section-5 .u-btn-1 {
        border-style: solid;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0px;
        margin: 36px auto 0 66px;
        padding: 9px 67px 11px;
    }

    .u-section-5 .u-btn-2 {
        border-style: solid;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0px;
        margin: -50px 64px 0 auto;
        padding: 9px 67px 11px;
    }

    .u-section-5 .u-btn-3 {
        border-style: solid;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0px;
        margin: 41px auto 0;
        padding: 9px 154px 11px 152px;
    }

    @media (max-width: 1199px) {
        .u-section-5 .u-sheet-1 {
            min-height: 840px;
        }

        .u-section-5 .u-layout-wrap-1 {
            width: 940px;
        }

        .u-section-5 .u-layout-cell-1 {
            min-height: 330px;
        }

        .u-section-5 .u-layout-cell-2 {
            min-height: 454px;
        }

        .u-section-5 .u-text-1 {
            width: 383px;
            margin-right: 16px;
            margin-left: 45px;
        }

        .u-section-5 .u-text-2 {
            margin-right: 28px;
            margin-left: 0;
        }

        .u-section-5 .u-btn-1 {
            margin-left: 0;
        }

        .u-section-5 .u-btn-2 {
            margin-right: 0;
        }

        .u-section-5 .u-btn-3 {
            margin-top: 42px;
        }
    }

    @media (max-width: 991px) {
        .u-section-5 .u-sheet-1 {
            min-height: 763px;
        }

        .u-section-5 .u-layout-wrap-1 {
            width: 720px;
        }

        .u-section-5 .u-layout-cell-1 {
            min-height: 253px;
        }

        .u-section-5 .u-container-layout-1 {
            padding-left: 30px;
            padding-right: 30px;
        }

        .u-section-5 .u-layout-cell-2 {
            min-height: 100px;
        }

        .u-section-5 .u-container-layout-2 {
            padding-left: 30px;
            padding-right: 30px;
        }

        .u-section-5 .u-text-1 {
            width: 305px;
            margin-right: 0;
        }

        .u-section-5 .u-text-2 {
            margin-right: 87px;
        }
    }

    @media (max-width: 767px) {
        .u-section-5 .u-sheet-1 {
            min-height: 1250px;
        }

        .u-section-5 .u-layout-wrap-1 {
            width: 540px;
        }

        .u-section-5 .u-layout-cell-1 {
            min-height: 380px;
        }

        .u-section-5 .u-container-layout-1 {
            padding-left: 10px;
            padding-right: 10px;
        }

        .u-section-5 .u-container-layout-2 {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    @media (max-width: 575px) {
        .u-section-5 .u-sheet-1 {
            min-height: 835px;
        }

        .u-section-5 .u-layout-wrap-1 {
            width: 340px;
        }

        .u-section-5 .u-layout-cell-1 {
            min-height: 239px;
        }

        .u-section-5 .u-text-1 {
            font-size: 1.5rem;
        }

        .u-section-5 .u-text-2 {
            margin-right: 0;
        }
    }

    .u-section-6 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../../public/images/gffbfb20b5f6fd8d23a984af92c8575347ee8870d41116d446933ff04da4e46375087ba0f3e9b7d977c36ed71df30815003ea95e7827affba0e71a8b6a1b1a031_1280.jpg");
        background-position: 50% 50%;
        margin-top: 20px;
        margin-bottom: 0;
    }

    .u-section-6 .u-sheet-1 {
        min-height: 800px;
    }

    .u-section-6 .u-layout-wrap-1 {
        margin-top: 61px;
        margin-bottom: 23px;
    }

    .u-section-6 .u-layout-cell-1 {
        min-height: 234px;
    }

    .u-section-6 .u-container-layout-1 {
        padding: 30px;
    }

    .u-section-6 .u-text-1 {
        margin: 20px auto 0 0;
    }

    .u-section-6 .u-text-2 {
        margin: 20px 254px 0 0;
    }

    .u-section-6 .u-layout-cell-2 {
        min-height: 405px;
    }

    .u-section-6 .u-container-layout-2 {
        padding: 30px;
    }

    @media (max-width: 1199px) {
        .u-section-6 .u-sheet-1 {
            min-height: 590px;
        }

        .u-section-6 .u-layout-wrap-1 {
            position: relative;
        }

        .u-section-6 .u-layout-cell-1 {
            min-height: 193px;
        }

        .u-section-6 .u-text-2 {
            margin-right: 54px;
            width: 826px;
        }

        .u-section-6 .u-layout-cell-2 {
            min-height: 334px;
        }
    }

    @media (max-width: 991px) {
        .u-section-6 .u-sheet-1 {
            min-height: 512px;
        }

        .u-section-6 .u-layout-cell-1 {
            min-height: 100px;
        }

        .u-section-6 .u-text-2 {
            margin-right: 0;
            width: 720px;
        }

        .u-section-6 .u-layout-cell-2 {
            min-height: 256px;
        }
    }

    @media (max-width: 767px) {
        .u-section-6 .u-sheet-1 {
            min-height: 450px;
        }

        .u-section-6 .u-container-layout-1 {
            padding-left: 10px;
            padding-right: 10px;
        }

        .u-section-6 .u-text-2 {
            width: 540px;
        }

        .u-section-6 .u-layout-cell-2 {
            min-height: 192px;
        }

        .u-section-6 .u-container-layout-2 {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    @media (max-width: 575px) {
        .u-section-6 .u-sheet-1 {
            min-height: 380px;
        }

        .u-section-6 .u-text-2 {
            width: 340px;
        }

        .u-section-6 .u-layout-cell-2 {
            min-height: 121px;
        }
    }

    .u-section-7 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../public/images/ge2c04a82c2bfee7c7e26a299bc870f16ece43a8e2e82f25347ae9b60eca37be339cf1c0ce788869fbdd87e471d02a59f2bb4847dee8d73d7f162daf1314d8847_1280.jpg");
        background-position: 50% 50%;
        margin-top: 20px;
    }

    .u-section-7 .u-sheet-1 {
        min-height: 600px;
    }

    .u-section-7 .u-layout-wrap-1 {
        width: 1140px;
        margin: 70px 0 60px;
    }

    .u-section-7 .u-layout-cell-1 {
        min-height: 400px;
    }

    .u-section-7 .u-container-layout-1 {
        padding: 20px;
    }

    .u-section-7 .u-layout-cell-2 {
        min-height: 550px;
    }

    .u-section-7 .u-container-layout-2 {
        padding: 20px;
    }

    .u-section-7 .u-text-1 {
        font-weight: 700;
        font-size: 3rem;
        margin: 70px 66px 0 62px;
    }

    .u-section-7 .u-text-2 {
        margin: 15px 235px 0 62px;
    }

    .u-section-7 .u-btn-1 {
        border-style: solid;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0px;
        margin: 36px auto 0 66px;
        padding: 9px 67px 11px;
    }

    .u-section-7 .u-btn-2 {
        border-style: solid;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0px;
        margin: -49px 64px 0 auto;
        padding: 9px 67px 10px;
    }

    .u-section-7 .u-btn-3 {
        border-style: solid;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0px;
        margin: 41px auto 0;
        padding: 9px 154px 11px 152px;
    }

    @media (max-width: 1199px) {
        .u-section-7 .u-sheet-1 {
            min-height: 840px;
        }

        .u-section-7 .u-layout-wrap-1 {
            width: 940px;
        }

        .u-section-7 .u-layout-cell-1 {
            min-height: 330px;
        }

        .u-section-7 .u-layout-cell-2 {
            min-height: 454px;
        }

        .u-section-7 .u-text-1 {
            margin-right: 16px;
            margin-left: 45px;
            width: 383px;
        }

        .u-section-7 .u-text-2 {
            margin-right: 28px;
            margin-left: 0;
        }

        .u-section-7 .u-btn-1 {
            margin-left: 0;
        }

        .u-section-7 .u-btn-2 {
            margin-right: 0;
        }
    }

    @media (max-width: 991px) {
        .u-section-7 .u-sheet-1 {
            min-height: 763px;
        }

        .u-section-7 .u-layout-wrap-1 {
            width: 720px;
        }

        .u-section-7 .u-layout-cell-1 {
            min-height: 253px;
        }

        .u-section-7 .u-container-layout-1 {
            padding-left: 30px;
            padding-right: 30px;
        }

        .u-section-7 .u-layout-cell-2 {
            min-height: 100px;
        }

        .u-section-7 .u-container-layout-2 {
            padding-left: 30px;
            padding-right: 30px;
        }

        .u-section-7 .u-text-1 {
            margin-right: 0;
            width: 305px;
        }

        .u-section-7 .u-text-2 {
            margin-right: 87px;
        }
    }

    @media (max-width: 767px) {
        .u-section-7 .u-sheet-1 {
            min-height: 1250px;
        }

        .u-section-7 .u-layout-wrap-1 {
            width: 540px;
        }

        .u-section-7 .u-layout-cell-1 {
            min-height: 380px;
        }

        .u-section-7 .u-container-layout-1 {
            padding-left: 10px;
            padding-right: 10px;
        }

        .u-section-7 .u-container-layout-2 {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    @media (max-width: 575px) {
        .u-section-7 .u-sheet-1 {
            min-height: 835px;
        }

        .u-section-7 .u-layout-wrap-1 {
            width: 340px;
        }

        .u-section-7 .u-layout-cell-1 {
            min-height: 239px;
        }

        .u-section-7 .u-text-1 {
            font-size: 1.5rem;
        }

        .u-section-7 .u-text-2 {
            margin-right: 0;
        }
    }
</style>

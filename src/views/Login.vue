<template>
    <html style="font-size: 16px;">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <meta name="keywords" content="Co​​ntact Us">
        <meta name="description" content="">
        <meta name="page_type" content="np-template-header-footer-from-plugin">
        <title>Login</title>
        <link rel="stylesheet" href="nicepage.css" media="screen">
        <link rel="stylesheet" href="Login.css" media="screen">
        <!--        <script class="u-script" type="text/javascript" src="jquery-1.9.1.min.js" defer=""></script>-->
        <!--        <script class="u-script" type="text/javascript" src="nicepage.js" defer=""></script>-->
        <meta name="generator" content="Nicepage 4.9.1, nicepage.com">
        <link id="u-theme-google-font" rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">


        <!--        <script type="application/ld+json">{-->
        <!--            "@context": "http://schema.org",-->
        <!--            "@type": "Organization",-->
        <!--            "name": "",-->
        <!--            "logo": "images/gc5af6611333c6aa0517181df2b5535dc11f60978bcfea83c47f673fb920ce25c7ffdc27b7a1a6b1b7bb9759e4bd4279295c2c99d063c1e60b14ba01babe3e8c6_1280.png",-->
        <!--            "sameAs": []-->
        <!--        }</script>-->
        <meta name="theme-color" content="#4340ea">
        <meta property="og:title" content="Login">
        <meta property="og:type" content="website">
    </head>
    <body class="u-body u-xl-mode">


    <section class="u-clearfix u-image u-section-1" id="sec-4a3b" data-image-width="1280" data-image-height="853">
        <div class="u-align-left u-clearfix u-sheet u-sheet-1">
            <div class="u-container-style u-group u-radius-30 u-shape-round u-white u-group-1">
                <div class="u-container-layout u-container-layout-1" id="login">
                    <a href="https://nicepage.com/wordpress-themes"
                       class="u-active-none u-border-2 u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-top-left-radius-0 u-top-right-radius-0 u-btn-1">忘记密码？</a>
                    <a href="/register"
                       class="u-active-none u-border-2 u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-top-left-radius-0 u-top-right-radius-0 u-btn-2">没有账户？立即创建！</a>
                </div>
            </div>

            <div class="u-form u-login-control u-form-1">
                <!--                拦截刷新，构造登录方法-->
                <el-form :model="users" :rules="rules" ref="userForm"
                         class="u-clearfix u-form-custom-backend u-form-spacing-10 u-form-vertical u-inner-form"
                         source="custom" name="form" style="padding: 10px;">
                    <div class="u-form-group u-form-name">
                        <el-form-item size="large" label="Username" prop="username" for="username-a30d" class="u-label">
                            <el-input v-model="users.username" type="text" placeholder="手机号码/邮箱地址/用户名"
                                      id="username-a30d"
                                      name="username"
                                      required="">
                            </el-input>
                        </el-form-item>

                    </div>
                    <br>
                    <div class="u-form-group u-form-password">
                        <el-form-item size="large" label="Password" prop="password" for="password-a30d" class="u-label">
                            <el-input v-model="users.password" type="password" placeholder="登录密码" id="password-a30d"
                                      name="password"
                                      required="">
                            </el-input>
                        </el-form-item>

                    </div>
<!--                    <div class="u-form-checkbox u-form-group">-->
<!--                        <input type="checkbox" id="checkbox-a30d" name="remember" value="On">-->
<!--                        <label for="checkbox-a30d" class="u-label">Remember me</label>-->
<!--                    </div>-->
                    <div class="u-align-left u-form-group u-form-submit">
                        <a @click.prevent="login('ruleForm')" href="#"
                           class="u-border-none u-btn u-btn-submit u-button-style u-hover-grey-10 u-btn-3">登录</a>
                        <input type="submit" value="submit" class="u-form-control-hidden">
                    </div>
                    <input type="hidden" value="" name="recaptchaResponse">
                    <input type="hidden" id="siteId" name="siteId" value="1746307">
                    <input type="hidden" id="pageId" name="pageId" value="1750248">
                </el-form>
            </div>

        </div>
    </section>


    <footer class="u-align-center-md u-align-center-sm u-align-center-xs u-clearfix u-footer u-grey-80" id="sec-3f3a">
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <a href="https://nicepage.com" class="u-image u-logo u-image-1">
                <img src="images/default-logo.png" class="u-logo-image u-logo-image-1">
            </a>
            <div class="u-align-left u-social-icons u-spacing-10 u-social-icons-1">
                <a class="u-social-url" title="facebook" target="_blank" href=""><span
                        class="u-icon u-social-facebook u-social-icon u-icon-1"><svg class="u-svg-link"
                                                                                     preserveAspectRatio="xMidYMin slice"
                                                                                     viewBox="0 0 112 112" style=""><use
                        xlink:href="#svg-fcb1"></use></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0"
                                                                id="svg-fcb1"><circle fill="currentColor" cx="56.1"
                                                                                      cy="56.1" r="55"></circle><path
                        fill="#FFFFFF" d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
            c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"></path></svg></span>
                </a>
                <a class="u-social-url" title="twitter" target="_blank" href=""><span
                        class="u-icon u-social-icon u-social-twitter u-icon-2"><svg class="u-svg-link"
                                                                                    preserveAspectRatio="xMidYMin slice"
                                                                                    viewBox="0 0 112 112" style=""><use
                        xlink:href="#svg-9d3c"></use></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0"
                                                                id="svg-9d3c"><circle fill="currentColor" class="st0"
                                                                                      cx="56.1" cy="56.1"
                                                                                      r="55"></circle><path
                        fill="#FFFFFF" d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"></path></svg></span>
                </a>
                <a class="u-social-url" title="instagram" target="_blank" href=""><span
                        class="u-icon u-social-icon u-social-instagram u-icon-3"><svg class="u-svg-link"
                                                                                      preserveAspectRatio="xMidYMin slice"
                                                                                      viewBox="0 0 112 112" style=""><use
                        xlink:href="#svg-d8cb"></use></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0"
                                                                id="svg-d8cb"><circle fill="currentColor" cx="56.1"
                                                                                      cy="56.1" r="55"></circle><path
                        fill="#FFFFFF" d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
            z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"></path><path
                        fill="#FFFFFF"
                        d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"></path><path
                        fill="#FFFFFF" d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
            C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
            c5.5,0,9.9,4.5,9.9,9.9V73.3z"></path></svg></span>
                </a>
                <a class="u-social-url" title="linkedin" target="_blank" href=""><span
                        class="u-icon u-social-icon u-social-linkedin u-icon-4"><svg class="u-svg-link"
                                                                                     preserveAspectRatio="xMidYMin slice"
                                                                                     viewBox="0 0 112 112" style=""><use
                        xlink:href="#svg-f93e"></use></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0"
                                                                id="svg-f93e"><circle fill="currentColor" cx="56.1"
                                                                                      cy="56.1" r="55"></circle><path
                        fill="#FFFFFF" d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
            C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
            H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"></path></svg></span>
                </a>
            </div>
            <p class="u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-1">Sample text. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        </div>
    </footer>
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
    import Header from "../components/Header";
    import request from "../utils/request";
    const axios = require('axios');
    export default {

        name: "Login",
        components:{
            Header
        },
        data() {

            return {
                users: { },
                // loginForm: {
                //     username: '',
                //     password: '',
                // },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]

                }
            }
        },
        methods: {
            login() {
                this.$refs['userForm'].validate((valid) => {
                    if (valid) {
                        //console.log(this.users.username + this.users.password)

                        this.request.post('http://localhost:8182/user/login', this.users).then((resp) => {
                            if (resp.code === "200") {
                                localStorage.setItem("users", JSON.stringify(resp.data))  // 存储用户信息到浏览器
                                //localStorage.setItem("menus", JSON.stringify(resp.data.menus))  // 存储用户信息到浏览器
                                //console.log(localStorage.getItem("users"))
                                this.$message.success("登录成功")
                                this.$router.replace({path:'/'})
                            } else {
                                this.$message.error(resp.msg)
                            }
                            //console.log(resp)
                        });
                    }
                });
            }

        }

    }

</script>

<style scoped>
    .u-section-1 {
        background-image: url("../../public/images/g73708fa0f966db8a25c3967e5edd8ab17aa58025e0095011b396846371f05b933908f6d2aef1cbe2e011adeda56eef2e2294a27609013b11a609d99a906ae7ca_1280.jpg");
        background-position: 50% 50%;
    }

    .u-section-1 .u-sheet-1 {
        min-height: 824px;
    }

    .u-section-1 .u-group-1 {
        width: 724px;
        min-height: 552px;
        margin: 118px auto 0;
    }

    .u-section-1 .u-container-layout-1 {
        padding: 0 30px;
    }

    .u-section-1 .u-btn-1 {
        background-image: none;
        border-style: none none solid;
        margin: 339px auto 0;
        padding: 0;
    }

    .u-section-1 .u-btn-2 {
        background-image: none;
        border-style: none none solid;
        margin: 32px auto 0;
        padding: 0;
    }

    .u-section-1 .u-form-1 {
        height: 287px;
        width: 570px;
        margin: -511px auto 224px;
    }

    .u-section-1 .u-input-1 {
        background-image: none;
    }

    .u-section-1 .u-input-2 {
        background-image: none;
    }

    .u-section-1 .u-btn-3 {
        width: 100%;
        border-style: none;
        padding: 10px 30px;
    }

    @media (max-width: 1199px) {
        .u-section-1 .u-sheet-1 {
            min-height: 786px;
        }
    }

    @media (max-width: 991px) {
        .u-section-1 .u-group-1 {
            width: 720px;
        }
    }

    @media (max-width: 767px) {
        .u-section-1 .u-group-1 {
            width: 540px;
        }

        .u-section-1 .u-container-layout-1 {
            padding-left: 10px;
            padding-right: 10px;
        }

        .u-section-1 .u-form-1 {
            width: 540px;
        }
    }

    @media (max-width: 575px) {
        .u-section-1 .u-group-1 {
            width: 340px;
        }

        .u-section-1 .u-form-1 {
            width: 340px;
        }
    }

</style>
<template>
    <nav>
        <router-link to="/" class="nav_home">Home</router-link>
        |
<!--        <router-link to="/about" class="nav_gallery">About</router-link>-->
<!--        |-->
<!--        <router-link to="/art" class="nav_art">Art</router-link>-->
<!--        |-->
        <router-link to="/creation" class="nav_art">Creation</router-link>
<!--        <div class="u-text-login">-->
<!--            <a href="/login" class="u-text-login" data-page-id="1750248">登录-->
<!--            </a>-->
<!--        </div>-->


        <div class="u-text-login">
            <el-dropdown>
                <div style="display: inline-block">
<!--                    <span>{{ users===null?'登录':users.username }}</span><i class="el-icon-arrow-down" style="margin-left: 5px"></i>-->
                </div>
                <span v-if="users==null" class="el-dropdown-link">
                    <a href="/login">未登录，点此登录   </a>
                    <a style="margin-left: 10px" href="/register">   注册</a>
                </span>
                <span v-if="users" class="el-dropdown-link">欢迎！，{{users.username}}</span>
                    <template #dropdown>
                        <el-dropdown-menu v-if="users">
<!--                            <el-dropdown-item>Action 1</el-dropdown-item>-->
<!--                            <el-dropdown-item>Action 2</el-dropdown-item>-->
<!--                            <el-dropdown-item>Action 3</el-dropdown-item>-->
<!--                            <el-dropdown-item disabled>Action 4</el-dropdown-item>-->
                            <el-dropdown-item>
                                <span @click="logout">退出</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
            </el-dropdown>
        </div>


    </nav>
    <router-view/>
</template>

<script>
    export default {
        name: "Header",
        props: {
            collapseBtnClass: String,
        },
        computed: {
            currentPathName() {
               // return this.$store.state.currentPathName;　　//需要监听的数据
            }
        },
        data() {
            return {
               users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")):null

            }
        },
        methods: {
            collapse() {
                // this.$parent.$parent.$parent.$parent.collapse()  // 通过4个 $parent 找到父组件，从而调用其折叠方法
                this.$emit("asideCollapse")
            },
            logout() {
               // this.$store.commit("logout")
                this.$router.push("/login")
                localStorage.removeItem("users")
                this.$message.success("退出成功")
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    nav {
        padding: 30px;
        background-color: #2e2e2e;
    }

    nav a {
        font-weight: bold;
        color: #737373;
    }

    nav a.router-link-exact-active {
        color: #FFFFFF;
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

    .u-text-1 {
        padding-right: 10px;
        /*font-size: 3.75rem;*/
        color: #FFFFFF;
    }

    .u-text {
        word-wrap: break-word;
        position: relative;
    }

    .u-text-default {
        display: table;
        align-self: flex-start;
    }

    .u-header .u-text-1 {
        margin: -29px 129px 33px auto;
    }

    .u-text-login {
        color: #FFFFFF;
        position: fixed;
        right: 50px;
    }

    .nav_art {
        font-size: 1.2rem;
    }

    .nav_home {
        font-size: 1.2rem;

    }

    .nav_gallery {
        font-size: 1.2rem;
    }


</style>
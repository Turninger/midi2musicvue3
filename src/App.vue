<template>
<!--    <nav>-->
<!--        <router-link to="/" class="nav_home">Home</router-link>-->
<!--        |-->
<!--        <router-link to="/about" class="nav_gallery">About</router-link>-->
<!--        |-->
<!--        <router-link to="/art" class="nav_art">Art</router-link>-->
<!--        |-->
<!--        <router-link to="/creation" class="nav_art">Creation</router-link>-->
<!--        <div class="u-text-login">-->
<!--            <a href="/login" class="u-text-login" data-page-id="1750248">登录-->
<!--            </a>-->
<!--        </div>-->

<!--        <div class="u-text-login">-->
<!--          <el-dropdown>-->
<!--    <span class="el-dropdown-link">-->
<!--      Dropdown List-->
<!--      <el-icon class="el-icon&#45;&#45;right">-->
<!--        <arrow-down />-->
<!--      </el-icon>-->
<!--    </span>-->
<!--            <template #dropdown>-->
<!--              <el-dropdown-menu>-->
<!--                <el-dropdown-item>Action 1</el-dropdown-item>-->
<!--                <el-dropdown-item>Action 2</el-dropdown-item>-->
<!--                <el-dropdown-item>Action 3</el-dropdown-item>-->
<!--                <el-dropdown-item disabled>Action 4</el-dropdown-item>-->
<!--                <el-dropdown-item divided>Action 5</el-dropdown-item>-->
<!--              </el-dropdown-menu>-->
<!--            </template>-->
<!--          </el-dropdown>-->

<!--        </div>-->


<!--    </nav>-->
    <router-view/>
</template>
<script>
    import NProgress from 'nprogress'
    import 'nprogress/nprogress.css'
    import Progress from "easy-circular-progress";

    export default {
        name: 'App',
    }
</script>
<style>
    /*#app {*/
    /*    font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*    -webkit-font-smoothing: antialiased;*/
    /*    -moz-osx-font-smoothing: grayscale;*/
    /*    text-align: center;*/
    /*    color: #2c3e50;*/
    /*}*/

    /*nav {*/
    /*    padding: 30px;*/
    /*    background-color: #2e2e2e;*/
    /*}*/

    /*nav a {*/
    /*    font-weight: bold;*/
    /*    color: #737373;*/
    /*}*/

    /*nav a.router-link-exact-active {*/
    /*    color: #FFFFFF;*/
    /*}*/


    /*.u-section-1 .u-sheet-1 {*/
    /*    min-height: 824px;*/
    /*}*/

    /*.u-section-1 .u-group-1 {*/
    /*    width: 724px;*/
    /*    min-height: 552px;*/
    /*    margin: 118px auto 0;*/
    /*}*/

    /*.u-section-1 .u-container-layout-1 {*/
    /*    padding: 0 30px;*/
    /*}*/

    /*.u-section-1 .u-btn-1 {*/
    /*    background-image: none;*/
    /*    border-style: none none solid;*/
    /*    margin: 339px auto 0;*/
    /*    padding: 0;*/
    /*}*/

    /*.u-section-1 .u-btn-2 {*/
    /*    background-image: none;*/
    /*    border-style: none none solid;*/
    /*    margin: 32px auto 0;*/
    /*    padding: 0;*/
    /*}*/

    /*.u-section-1 .u-form-1 {*/
    /*    height: 287px;*/
    /*    width: 570px;*/
    /*    margin: -511px auto 224px;*/
    /*}*/

    /*.u-section-1 .u-input-1 {*/
    /*    background-image: none;*/
    /*}*/

    /*.u-section-1 .u-input-2 {*/
    /*    background-image: none;*/
    /*}*/

    /*.u-section-1 .u-btn-3 {*/
    /*    width: 100%;*/
    /*    border-style: none;*/
    /*    padding: 10px 30px;*/
    /*}*/

    /*@media (max-width: 1199px) {*/
    /*    .u-section-1 .u-sheet-1 {*/
    /*        min-height: 786px;*/
    /*    }*/
    /*}*/

    /*@media (max-width: 991px) {*/
    /*    .u-section-1 .u-group-1 {*/
    /*        width: 720px;*/
    /*    }*/
    /*}*/

    /*@media (max-width: 767px) {*/
    /*    .u-section-1 .u-group-1 {*/
    /*        width: 540px;*/
    /*    }*/

    /*    .u-section-1 .u-container-layout-1 {*/
    /*        padding-left: 10px;*/
    /*        padding-right: 10px;*/
    /*    }*/

    /*    .u-section-1 .u-form-1 {*/
    /*        width: 540px;*/
    /*    }*/
    /*}*/

    /*@media (max-width: 575px) {*/
    /*    .u-section-1 .u-group-1 {*/
    /*        width: 340px;*/
    /*    }*/

    /*    .u-section-1 .u-form-1 {*/
    /*        width: 340px;*/
    /*    }*/
    /*}*/

    /*.u-text-1 {*/
    /*    padding-right: 10px;*/
    /*    !*font-size: 3.75rem;*!*/
    /*    color: #FFFFFF;*/
    /*}*/

    /*.u-text {*/
    /*    word-wrap: break-word;*/
    /*    position: relative;*/
    /*}*/

    /*.u-text-default {*/
    /*    display: table;*/
    /*    align-self: flex-start;*/
    /*}*/

    /*.u-header .u-text-1 {*/
    /*    margin: -29px 129px 33px auto;*/
    /*}*/

    /*.u-text-login {*/
    /*    color: #FFFFFF;*/
    /*    position: fixed;*/
    /*    right: 50px;*/
    /*}*/

    /*.nav_art {*/
    /*    font-size: 1.2rem;*/
    /*}*/

    /*.nav_home {*/
    /*    font-size: 1.2rem;*/

    /*}*/

    /*.nav_gallery {*/
    /*    font-size: 1.2rem;*/
    /*}*/

    /*vxe-table 表格样式*/
    /*修改表头背景色*/
    .vxe-table--header-wrapper, .vxe-header--row, .vxe-table--header {
        background-color: #29262a;
    }
    .vxe-body--column {
        background-color: #534c54;
    }

    /*调整表格 单元格背景颜色*/
    .vxe-table .vxe-table--body-wrapper, .vxe-table .vxe-table--footer-wrapper {
        background-color: #29262a;
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



</style>

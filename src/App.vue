<template>
  <nav>
    <router-link to="/" class="nav_home">Home</router-link> |
    <router-link to="/about" class="nav_gallery">About</router-link> |
    <router-link to="/art" class="nav_art">Art</router-link>
    <div  class="u-text-login">
      <a to="/login" class="u-text-login" data-page-id="1750248">登录
      </a>
    </div>


  </nav>
  <router-view/>
</template>
<script>
  export default {
    name:'App',
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
  .u-text-login{
    color: #FFFFFF;
    position: fixed;
    right: 50px;
  }
  .nav_art{
    font-size: 1.2rem;
  }
  .nav_home{
    font-size: 1.2rem;

  }
  .nav_gallery{
    font-size: 1.2rem;
  }


</style>

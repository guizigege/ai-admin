<template>
  <div class="home">
    <nav-header></nav-header>
    <sub-menu></sub-menu>
    <div style="min-width:1280px;height: 1000px;padding-left: 220px;box-sizing: border-box;">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import SubMenu from './SubMenu'
  import NavHeader from './NavHeader'

  export default {
    name: 'home',
    data () {
      return {
        routerShow:true
      }
    },
    components:{
      NavHeader,SubMenu
    },
    methods:{
    },
    created(){

    }


  }
</script>


<style scoped>

</style>

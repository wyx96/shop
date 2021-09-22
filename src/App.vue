<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
 import Header from '@/components/header'
 import Footer from '@/components/footer'
export default {
  name:'APP',
  components:{
    Header,
    Footer,
  }
}
</script>
<style lang="scss">

</style>

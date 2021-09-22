<template>
  <div>
      <TypeNav></TypeNav>
      <List></List>
      <Recommend></Recommend>
      <Rank></Rank>
      <Like></Like>
      <Floor></Floor>
  </div>
</template>

<script>
import List from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
export default {
  components:{List,Recommend,Rank,Like,Floor}
}
</script>

<style>

</style>
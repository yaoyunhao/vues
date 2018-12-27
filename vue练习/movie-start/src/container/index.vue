<template>
  <div class="wrap">
      <header>
        <span></span>
        <p>
            <router-link to="/movie">电影</router-link>
            <router-link to="/clickBo">点播</router-link>
            <router-link to="/shopping">商城</router-link>
            <router-link to="/show">演出</router-link>
        </p>
        <span></span>
   </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'index'
}
</script>

<style>

</style>

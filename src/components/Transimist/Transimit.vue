<template>
  <div class="transimit-menu">
    <div class="sourceVar"></div>
    <div class="transTime"></div>
    <div class="mapTrack"></div>
    <div class="sankey"></div>
  </div>
</template>

<script>
export default {
  name: 'Transimit',
}
</script>

<style lang="less" scoped>
.transimit-menu {
  position: relative;
  width: 100%;
  height: 100%;
}
.transimit-menu .sourceVar {
  position: absolute;
  width: 26%;
  height: 70%;
  left: 3%;
  top: 15%;
  background-color: aqua;
}

.transimit-menu .mapTrack {
  position: absolute;
  width: 68%;
  height: 50%;
  top: 15%;
  right: 2%;
  background-color:blueviolet;
}

.transimit-menu .transTime {
  position: absolute;
  width: 26%;
  height: 14%;
  left: 3%;
  bottom: 0px;
  background-color:blue;
}

.transimit-menu .sankey {
  position: absolute;
  width: 68%;
  height: 33%;
  right: 2%;
  bottom: 0px;
  background-color: skyblue;
}
</style>
<template>
  <div class="progress-menu">
    <div class="proportion"></div>
    <div class="dailyVar"></div>
    <div class="mapRelatin"></div>
    <div class="dailyAnly"></div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
}
</script>

<style lang="less" scoped>
.progress-menu {
  position: relative;
  width: 100%;
  height: 100%;
}
.progress-menu .proportion {
  position: absolute;
  width: 26%;
  height: 50%;
  left: 3%;
  top: 15%;
  background-color: aqua;
}

.progress-menu .mapRelatin {
  position: absolute;
  width: 70%;
  height: 50%;
  top: 15%;
  right: 0.1%;
  background-color:blueviolet;
}

.progress-menu .dailyVar {
  position: absolute;
  width: 57%;
  height: 33%;
  left: 3%;
  bottom: 0px;
  background-color:blue;
}

.progress-menu .dailyAnly {
  position: absolute;
  width: 39%;
  height: 33%;
  right: 0.1%;
  bottom: 0px;
  background-color: skyblue;
}
</style>
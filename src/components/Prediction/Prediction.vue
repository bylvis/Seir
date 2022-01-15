<template>
  <div class="predict-menu">
    <div class="param"></div>
    <div class="mapEvo"></div>
    <div class="msir"></div>
    <div class="relRisk"></div>
  </div>
</template>

<script>
export default {
  name: 'Transimit',
}
</script>

<style lang="less" scoped>
.predict-menu {
  position: relative;
  width: 100%;
  height: 100%;
}
.predict-menu .param {
  position: absolute;
  width: 26%;
  height: 84%;
  left: 3%;
  top: 15%;
  background-color: aqua;
}

.predict-menu .mapEvo {
  position: absolute;
  width: 68%;
  height: 50%;
  top: 15%;
  right: 2%;
  background-color:blueviolet;
}

.predict-menu .msir {
  position: absolute;
  width: 34%;
  height: 33%;
  left: 30%;
  bottom: 0px;
  background-color:blue;
}

.predict-menu .relRisk {
  position: absolute;
  width: 34%;
  height: 33%;
  right: 2%;
  bottom: 0px;
  background-color: skyblue;
}
</style>
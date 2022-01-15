<template>
  <div>
    <div class="menu-group">
      <h1>基于M-SIR模型的新冠疫情可视分析系统</h1>
      <router-link to="/progress" class="menu-group-sub">发展势态</router-link>
      <router-link to="/transimit" class="menu-group-sub">传播模式</router-link>
      <router-link to="/prediction" class="menu-group-sub">趋势预测</router-link>      
    </div>
   
    <!--路由占位符-->
    <router-view></router-view>
  </div>
</template>
<script>


export default {
  name: 'App',
  components: {
  }
}
</script>
<style lang="less" scoped>
.menu-group {
  z-index: 999;
  position: absolute;
  width: 30%;
  height: 8%;
  left: 3%;
  top: 5%;
}
.menu-group h1 {
  position: absolute;
  color: #fff;
  width: 219%;
  height: 6%;
  left: 90%;
  top: -15%;
  font-size: 3.5rem;
  text-align: center;
  letter-spacing: 0.05em;
  }
.menu-group .menu-group-sub {
  font-size: 2.8rem;
  margin: 10px;
  text-decoration: none;
  color: #fff;
  margin: 1rem;
}
.menu-group-sub:hover {
  color: #129BFF;
}

</style>


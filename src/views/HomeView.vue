<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header"><header-component /></el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">

.common-layout {
  height: 100vh;
  background: $--color-powder;
}

.header {
  height: 60px;
}

.main {
  background: $--color-white;
  height: calc(100vh - 60px);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px 0 inset;
  border-radius: 1rem 1rem 0 0;
}
</style>

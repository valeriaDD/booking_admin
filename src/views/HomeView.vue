<script setup>
import HeaderComponent from '@/components/LeftMenuComponent.vue'
</script>

<template>
    <el-container class="main-container">
      <el-aside class="bg-gradient-blue" width="240px">
        <header-component />
      </el-aside>
      <el-container direction="vertical">
        <router-view />
      </el-container>
    </el-container>
</template>
<style scoped lang="scss">
.main-container {
  padding: 0.5rem;
}
</style>

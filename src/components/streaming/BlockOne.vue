<template>
  <div class="block_one">
    <div class="info">
      <div class="item">
        <TestButton>Самый быстрый и удобный способ демонстрации проекта</TestButton>
        <TestButton>Для запуска проекта просто откройте веб страницу</TestButton>
        <TestButton>На любом устройстве невзирая на мощность</TestButton>
      </div>
      <div></div>
    </div>
    <div class="button_progect_container">
      <div></div>
      <TestButton class="button_progect">Разместить проект</TestButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import TestButton from "@/components/TestButton.vue";
</script>

<style scoped>
.block_one {
  position: relative;
  height: 100vh;
  width: 100vw;
}
.info {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  grid-column-gap: 1vw;
  padding-left: 64px;
  padding-right: 8px;
  box-sizing: border-box;
}
.item {
  max-height: 41vh;
  display: flex;
  flex-direction: column;
  row-gap: 21px;
}
.button_progect_container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-sizing: border-box;
  position: absolute;
  right: 32px;
  bottom: 32px;
}
</style>

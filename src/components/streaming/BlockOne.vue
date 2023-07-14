<template>
  <div class="block">
    <div class="block__info">
      <div class="block__info_list">
        <TestButton
          >Самый быстрый и удобный способ демонстрации проекта</TestButton
        >
        <TestButton
          >Для запуска проекта просто откройте веб страницу</TestButton
        >
        <TestButton>На любом устройстве невзирая на мощность</TestButton>
      </div>
      <div></div>
    </div>
    <div class="block__button-container">
      <div></div>
      <TestButton>Разместить проект</TestButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import TestButton from "@/components/TestButton.vue";
</script>

<style lang="scss" scoped>
.block {
  position: relative;
  height: 100vh;
  width: 100vw;
  &__info {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    grid-column-gap: 1vw;
    padding-left: 64px;
    padding-right: 8px;
    box-sizing: border-box;
    &_list {
      max-height: 41vh;
      display: flex;
      flex-direction: column;
      row-gap: 21px;
    }
  }
  &__button-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    box-sizing: border-box;
    position: absolute;
    right: 32px;
    bottom: 32px;
  }
}
</style>

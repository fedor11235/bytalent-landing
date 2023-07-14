<template>
  <div class="block">
    <div class="block__order">
      <div class="block__order_info">
        <TestButton>3D-Визулизация любой сложности</TestButton>
        <TestButton>Новые возможности и современные дизайн решения</TestButton>
        <TestButton
          >Цифровая недвижимость стоимостью эскизного проекта</TestButton
        >
      </div>

      <TestButton class="block__order_button">Заказать визуализацию</TestButton>
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
  &__order {
    position: absolute;
    bottom: 0;
    height: 55vh;
    width: 100vw;
    &_info {
      position: reletive;
      display: flex;
      flex-direction: column;
      row-gap: 32px;
      width: 56vw;
      margin-left: 41px;
    }
    &_button {
      width: 40vw;
      position: absolute;
      bottom: 61px;
      right: 32px;
    }
  }
}
</style>

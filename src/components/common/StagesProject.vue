<template>
  <div class="stages">
    <div class="stages_elem">
      <div class="stages_elem_title">Проектирование</div>
      <img class="stages_elem_img" src="@/assets/test.jpg" alt="example" />
    </div>
    <img class="stages_elem_next" src="@/assets/next.png" alt="example" />
    <div class="stages_elem">
      <div class="stages_elem_title">Визуализация</div>
      <img class="stages_elem_img" src="@/assets/test.jpg" alt="example" />
    </div>
    <img class="stages_elem_next" src="@/assets/next.png" alt="example" />
    <div class="stages_elem">
      <div class="stages_elem_title">WEB-Streaming</div>
      <img class="stages_elem_img" src="@/assets/test.jpg" alt="example" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.stages {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 31px;
  justify-content: center;
  &_elem {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    height: 240px;
    width: 300px;
    border-radius: 8px;
    &_title {
      color: white;
      font-size: 16px;
      margin: 12px 0;
    }
    &_next {
      height: 126px;
    }
    &_img {
      width: 70%;
      height: 70%;
    }
  }
}
</style>

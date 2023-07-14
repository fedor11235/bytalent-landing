<template>
  <div class="block_four">
    <div class="start-project">
      <div class="start-project__title">Запустить проект</div>
      <img class="stages_elem_next" src="@/assets/next.png" alt="example"/>
      <div class="start-project_view">
        <div class="stages_elem_title">WEB-Streaming</div>
        <img class="stages_elem_img" src="@/assets/test.jpg" alt="example"/>
      </div>
      <img class="stages_elem_next rotate" src="@/assets/next.png" alt="example"/>
      <div class="start-project__title">Попробовать</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.rotate {
  rotate: 180deg;
}
.stages_elem_title {
  color: white;
  font-size: 16px;
  margin: 12px 0;
}
.stages_elem_next {
  height: 126px;
}
.stages_elem_img {
  width: 70%;
  height: 70%;
}
.block_four {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 70vh;
}
.start-project {
  display: flex;
  column-gap: 21px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 8px;
  height: 220px;
  width: 90%;
  align-items: center;
  justify-content: center;
}
.start-project_view {
  background-color: rgba(0, 0, 0, .5);
  backdrop-filter: blur(5px);
  height: 180px;
  width: 240px;
  border-radius: 8px;
  transition: scale 1s;
  cursor: pointer;
}
.start-project_view:hover {
  scale: 1.05;
}
.start-project__title {
  font-size: 36px;
  color: white;
}
</style>

<template>
  <div class="block_two">
    <div class="block_two__title">ЭТАПЫ РЕАЛИЗАЦИИ АРХИТЕКТУРНОГО ПРОЕКТА</div>
    <div class="stages">
      <div class="stages_elem">
        <div class="stages_elem_title">Проектирование</div>
        <img class="stages_elem_img" src="@/assets/test.jpg" alt="example"/>
      </div>
      <img class="stages_elem_next" src="@/assets/next.png" alt="example"/>
      <div class="stages_elem">
        <div class="stages_elem_title">Визуализация</div>
        <img class="stages_elem_img" src="@/assets/test.jpg" alt="example"/>
      </div>
      <img class="stages_elem_next" src="@/assets/next.png" alt="example"/>
      <div class="stages_elem">
        <div class="stages_elem_title">WEB-Streaming</div>
        <img class="stages_elem_img" src="@/assets/test.jpg" alt="example"/>
      </div>
    </div>
    <div class="block_two__info">
      Обычные рендеры уже в прошлом... <br/>
      Он-лайн доступ к дизайн-проекту в сочетании с интерактивными механиками - это будуее!<br/>
      Специалисты "byTALENT" готовы адаптировать ваш дизайн-проект для "Pixel Streaming" (сервер/билд/домен/защита)
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.block_two {
  display: flex;
  row-gap: 30px;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
}
.block_two__title {
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  color: #fff;
  text-shadow: 9px 0 20px #000;
  font-family: Copperplate, sans-serif;
  font-size: 36px;
  font-weight: 300;
  line-height: 100%;
  text-decoration: none;
}
.stages {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 31px;
  justify-content: center;
}
.stages_elem {
  background-color: rgba(0, 0, 0, .5);
  backdrop-filter: blur(5px);
  height: 240px;
  width: 300px;
  border-radius: 8px;
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
.block_two__info {
  background-color: rgba(0, 0, 0, .6);
  width: 75%;
  backdrop-filter: blur(5px);
  padding: 32px;
  border-radius: 8px;
  color: white;
  font-size: 21px;
}
</style>

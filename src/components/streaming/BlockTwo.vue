<template>
  <div class="block_two">
    <div class="block_two__title">ЭТАПЫ РЕАЛИЗАЦИИ АРХИТЕКТУРНОГО ПРОЕКТА</div>
    <StagesProject />
    <div class="block_two__info">
      Обычные рендеры уже в прошлом... <br />
      Он-лайн доступ к дизайн-проекту в сочетании с интерактивными механиками -
      это будуее!<br />
      Специалисты "byTALENT" готовы адаптировать ваш дизайн-проект для "Pixel
      Streaming" (сервер/билд/домен/защита)
    </div>
  </div>
</template>

<script setup lang="ts">
import StagesProject from "@/components/common/StagesProject.vue";
</script>

<style lang="scss" scoped>
.block_two {
  display: flex;
  row-gap: 30px;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  &__title {
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
  &__info {
    background-color: rgba(0, 0, 0, 0.6);
    width: 75%;
    backdrop-filter: blur(5px);
    padding: 32px;
    border-radius: 8px;
    color: white;
    font-size: 21px;
  }
}
</style>

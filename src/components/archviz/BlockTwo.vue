<template>
  <div class="block">
    <div class="block__title">ЭТАПЫ РЕАЛИЗАЦИИ АРХИТЕКТУРНОГО ПРОЕКТА</div>
    <StagesProject />
    <div class="card">
      Архитектурная визуализация - лучший способ предоставить будущий проект
      покупателям и инвесторам.<br />
      Blueprint (интерактивные механики заимодействия) - главное технологическое
      преимущество архитектурной визуализации UE5. Благодаря им клиенты "by
      TELENT" могут лично участвовать в работе над деталями дизайн-проекта
    </div>
  </div>
</template>

<script setup lang="ts">
import StagesProject from "@/components/common/StagesProject.vue";
</script>

<style lang="scss" scoped>
.block {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 41px;
  &__title {
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    color: #fff;
    text-shadow: 9px 0 20px #000;
    font-size: 31px;
    font-weight: 300;
  }
  .card {
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    padding: 32px;
    border-radius: 8px;
    color: white;
    font-size: 21px;
    width: 75%;
  }
}
</style>

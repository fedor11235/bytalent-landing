<template>
  <div class="archviz">
    <video class="video" autoplay="true" loop="true" muted="true">
      <source src="@/assets/app.mp4" />
      <source src="@/assets/app.webm" />
    </video>
    <div class="content">
      <div class="content__access">
        <div class="content__access_info">
          <div class="content__access_header">
            <div class="content__access_title">Приложение</div>
            <div class="content__access_logo"></div>
          </div>
          <TestButton>Для оффлайн демонстрации архитектуры проекта</TestButton>
          <TestButton>Неограниченный функционал и стабильное поделючение</TestButton>
          <TestButton>Совместная работа с заказчиком</TestButton>
        </div>

        <TestButton class="content__access_button">Получить доступ</TestButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TestButton from "@/components/TestButton.vue";
</script>

<style lang="scss" scoped>
.archviz {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  .video {
    width: 100%;
    height: 100%;
    background-image: url(@/assets/poster-app.jpg);

    background-size: cover;
    background-position: 50% 50%;
    object-fit: cover;
  }
  .content {
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: inset 0px 0px 32px rgba(0, 0, 0, 0.9);
    &__access {
      position: absolute;
      bottom: 0;
      height: 70vh;
      width: 100vw;
      &_header {
        display: flex;
        justify-content: space-between;
      }
      &_title {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.6);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        padding: 32px;
        border-radius: 8px;
        color: white;
        font-size: 31px;
        width: 45%;
      }
      &_info {
        position: reletive;
        display: flex;
        flex-direction: column;
        row-gap: 32px;
        width: 56vw;
        margin-left: 41px;
      }
      &_logo {
        width: 40%;
        height: 100px;
        background-image: url(@/assets/logo.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      &_button {
        width: 40vw;
        position: absolute;
        bottom: 61px;
        right: 32px;
      }
    }
  }
}
</style>

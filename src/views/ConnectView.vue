<template>
  <div class="connect">
    <video class="video" autoplay="true" loop="true" muted="true">
      <source src="@/assets/streaming.mp4" />
      <source src="@/assets/streaming.webm" />
    </video>
    <div class="backdrop">
      <div class="content-wrap">
        <div class="content">
          <div class="text">
            &nbsp;&nbsp;&nbsp;Для качественного подключения вам необходимо
            стабильное интернет соединение
          </div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;В правом верхнем углу вы можете выбрать переключение на мобильную версию
          </div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;Для управление на телефоне используйте джойстики (левый - передвижение / правый - обзор)
          </div>
        </div>
        <TestButton class="button">Запуск проекта</TestButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TestButton from "@/components/TestButton.vue";
</script>

<style lang="scss" scoped>
.connect {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  .video {
    width: 100%;
    height: 100%;
    background-image: url(@/assets/poster-streaming.jpg);

    background-size: cover;
    background-position: 50% 50%;
    object-fit: cover;
  }
  .backdrop {
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    background-color: rgba(19, 17, 17, 0.93);
    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    .content-wrap {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .content {
        width: 75%;
        .text {
          color: #b4b7b8;
          text-align: left;
          font-family: Jura, sans-serif;
          font-size: 28px;
          font-weight: 300;
          line-height: 35px;
          margin-bottom: 32px;
        }
      }
      .button {
        width: 30%;
        transition: scale 1s;
        &:hover {
          scale: 1.1;
        }
      }
    }
  }
}
</style>

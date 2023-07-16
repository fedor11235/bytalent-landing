<template>
  <div class="home">
    <Transition>
      <PopupOrder v-if="homeStore.popupOrder" />
    </Transition>
    <Transition>
      <div v-if="homeStore.uploadProject" @click.self="homeStore.uploadProject = false" class="order">
        <div @click="homeStore.popupOrder = true" class="order__visualization">Заказать визуализацию объекта недвижимости</div>
        <div @click="homeStore.popupOrder = true" class="order__project">Загрузить готовый дизайн-проект </div>
      </div>
    </Transition>
    <div class="backdrop">
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/home/HeaderComponent.vue";
import ContentComponent from "@/components/home/ContentComponent.vue";
import FooterComponent from "@/components/home/FooterComponent.vue";
import PopupOrder from "@/components/home/PopupOrder.vue";
import { useHomeStore } from  "@/store"

const homeStore = useHomeStore()
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  background-image: url(@/assets/bg.jpeg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  .order {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color: rgba(0, 0, 0, .78);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10vh;
    &__visualization {
      color: #fff;
      text-align: center;
      font-family: Jura, sans-serif;
      font-size: 3vh;
      line-height: 4vh;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        text-shadow: 1px 1px 2px #fff;
      }
    }
    &__project {
      color: #fff;
      text-align: center;
      font-family: Jura, sans-serif;
      font-size: 3vh;
      line-height: 4vh;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        text-shadow: 1px 1px 2px #fff;
      }
    }
  }
  .backdrop {
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(7px);
    background-color: rgba(0, 0, 0, 0.58);
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

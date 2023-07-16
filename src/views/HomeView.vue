<template>
  <div class="home">
    <div class="backdrop">
      <div class="header">
        <LogoComponent />
        <LineLeftComponent />
        <ButtonComponent />
        <LineRightComponent />
        <BurgerComponent />
      </div>
      <div class="content-container">
        <div class="content">
          <div class="content__title">Нет активных уровней</div>
          <div class="content__text">
            Вы можете заказать проект либозагрузить свой уровень
          </div>
          <TestButton class="content__button">Заказать</TestButton>
        </div>
      </div>
      <div class="footer">
        <div class="footer__navigation">
          <img
            :src="require(`@/assets/footer/${leftArrowImg}.svg`)"
            @mouseover="leftArrowHover = true"
            @mouseleave="leftArrowHover = false"
            alt="left arrow"
          />
          <div class="footer__page-one">01</div>
          <div class="footer__page-up">
            <img class="footer__page-slash" src="@/assets/footer/slash.svg" alt="slash"/>
            <div class="footer__page-two">02</div>
          </div>
          <img
            :src="require(`@/assets/footer/${rightArrowImg}.svg`)"
            @mouseover="rightArrowHover = true"
            @mouseleave="rightArrowHover = false"
            alt="left arrow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BurgerComponent from "@/components/BurgerComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import LineRightComponent from "@/components/LineRightComponent.vue";
import LineLeftComponent from "@/components/LineLeftComponent.vue";
import LogoComponent from "@/components/LogoComponent.vue";
import TestButton from "@/components/TestButton.vue";
import { ref, computed } from "vue";
const leftArrowHover = ref(false);
const rightArrowHover = ref(false);

const leftArrowImg = computed(() => {
  if (leftArrowHover.value) {
    return "left-arrow-active";
  } else {
    return "left-arrow";
  }
});

const rightArrowImg = computed(() => {
  if (rightArrowHover.value) {
    return "right-arrow-active";
  } else {
    return "right-arrow";
  }
});
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  background-image: url(@/assets/bg.jpeg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  .backdrop {
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(7px);
    background-color: rgba(0, 0, 0, 0.58);
    .header {
      display: flex;
      padding-top: 2%;
      padding-left: 2%;
      padding-right: 2%;
      align-items: center;
      justify-content: space-between;
    }
    .content-container {
      display: flex;
      height: calc(100% - 75px);
      align-items: center;
      justify-content: center;
      .content {
        display: flex;
        row-gap: 16px;
        flex-direction: column;
        width: 70%;
        text-align: left;
        &__title {
          color: #fff;
          white-space: pre-line;
          font-family: Jura, sans-serif;
          font-size: 8vh;
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
        }
        &__text {
          color: #b6b6b6;
          font-family: Oswald, sans-serif;
          font-size: 26px;
          font-weight: 200;
        }
        &__button {
          width: 240px;
          &:hover {
            box-shadow: 0 0 1px 1px white;
          }
        }
      }
    }
    .footer {
      position: fixed;
      width: 70%;
      height: 11%;
      left: 15%;
      bottom: 2%;
      &__navigation {
        display: flex;
        align-items: center;
        width: 35%;
        height: 7vh;
        justify-content: space-between;
      }
      img {
        cursor: pointer;
      }
      &__page-one {
        color: #d4d4d4;
        letter-spacing: -8px;
        font-family: Jura, sans-serif;
        font-size: 8.5vh;
        font-style: normal;
        line-height: 44%;
      }
      &__page-up {
        display: flex;
        width: 20%;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3vh;
      }
      &__page-slash {
        margin-bottom: 1vh;
      }
      &__page-two {
        color: #8b8b8b;
        letter-spacing: -4px;
        font-family: Jura, sans-serif;
        font-size: 5vh;
        line-height: 42px;
      }
    }
  }
}
</style>

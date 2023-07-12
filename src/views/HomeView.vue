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
    </div>
  </div>
</template>

<script setup  lang="ts">
import BurgerComponent from '@/components/BurgerComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import LineRightComponent from '@/components/LineRightComponent.vue'
import LineLeftComponent from '@/components/LineLeftComponent.vue'
import LogoComponent from '@/components/LogoComponent.vue'
</script>

<style>
  .home {
    height: 100vh;
    width: 100vw;
    background-image: url(https://uploads-ssl.webflow.com/63ca27efdaa242d30f5a28f3/63d269e88e303225e441b5a0_photo_2023-01-21%2020.10.18.jpeg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .backdrop {
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(7px);
    background-color: rgba(0, 0, 0, .58);
  }
  .header {
    display: flex;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    align-items: center;
    justify-content: space-between;
  }
</style>

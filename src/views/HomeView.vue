<template>
  <div class="home">
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
  }
}
</style>

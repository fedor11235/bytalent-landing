<template>
  <div class="streaming">
    <video class="video" autoplay="true" loop="true" muted="true">
      <source src="@/assets/streaming.mp4" />
      <source src="@/assets/streaming.webm" />
    </video>
    <div class="content">
      <BlockOne />
      <BlockTwo />
      <BlockThree />
      <BlockFour />
      <BlockFive />
      <FooterComponents />
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockOne from "@/components/streaming/BlockOne.vue";
import BlockTwo from "@/components/streaming/BlockTwo.vue";
import BlockThree from "@/components/streaming/BlockThree.vue";
import BlockFour from "@/components/streaming/BlockFour.vue";
import BlockFive from "@/components/streaming/BlockFive.vue";
import FooterComponents from "@/components/common/FooterComponents.vue";
</script>

<style lang="scss" scoped>
.streaming {
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
  .content {
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: inset 0px 0px 32px rgba(0, 0, 0, 0.9);
  }
}
</style>

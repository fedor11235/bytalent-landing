<template>
  <div class="archviz">
    <video class="video" autoplay="true" loop="true" muted="true">
      <source src="@/assets/archive.mp4" />
      <source src="@/assets/archive.webm" />
    </video>
    <div class="content">
      <BlockOne />
      <BlockTwo />
      <BlockThree />
      <BlockFour />
      <FooterComponents />
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockOne from "@/components/archviz/BlockOne.vue";
import BlockTwo from "@/components/archviz/BlockTwo.vue";
import BlockThree from "@/components/archviz/BlockThree.vue";
import BlockFour from "@/components/archviz/BlockFour.vue";
import FooterComponents from "@/components/common/FooterComponents.vue";
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
    background-image: url(@/assets/poster-archive.jpg);

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

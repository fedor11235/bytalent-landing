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
      <BlockSix />
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockOne from "@/components/streaming/BlockOne.vue";
import BlockTwo from "@/components/streaming/BlockTwo.vue";
import BlockThree from "@/components/streaming/BlockThree.vue";
import BlockFour from "@/components/streaming/BlockFour.vue";
import BlockFive from "@/components/streaming/BlockFive.vue";
import BlockSix from "@/components/streaming/BlockSix.vue";
</script>

<style scoped>
.streaming {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}
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
}
.block_five {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
.block_six {
  position: relative;
  width: 100vw;
  height: 21vh;
}
.start-project_view {
  background-color: rgba(0, 0, 0, .5);
  backdrop-filter: blur(5px);
  height: 180px;
  width: 240px;
  border-radius: 8px;
  transition: scale 1s;
  cursor: pointer;
}
.block_five__title {
  width: auto;
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
.block_five__card {
  background-color: rgba(0, 0, 0, .6);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  padding: 32px;
  border-radius: 8px;
  color: white;
  font-size: 21px;
}
.block_five__card__h {
  width: auto;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  color: #fff;
  text-shadow: 9px 0 20px #000;
  font-family: Copperplate, sans-serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 100%;
  text-decoration: none;
}
.block_five__card__title {
  font-size: 21px;
}
.block_five__card__text {
  font-size: 18px;
  text-align: left;
}
.button-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-right: 32px;
}
.block_five__cards {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 32px;
}
.block_five__card__one {
  margin-left: 5%;
}
.block_five__card__two {
  margin-left: 15%;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>

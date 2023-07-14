<template>
  <div class="block">
    <iframe
      class="youtube"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/6xt9PbPQnbY"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.block {
  width: 100vw;
  height: 100vh;
  .youtube {
    width: 100%;
    height: 100%;
  }
}
</style>

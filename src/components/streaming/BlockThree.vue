<template>
  <div class="block">
    <iframe
      class="youtube"
      src="https://www.youtube.com/embed/jm6aWaRy0G4"
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

<template>
  <div class="archviz">
    <video class="video" autoplay="true" loop="true" muted="true">
      <source src="@/assets/app.mp4" />
      <source src="@/assets/app.webm" />
    </video>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.archviz {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}
.video {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/poster-app.jpg);

  background-size: cover;
  background-position: 50% 50%;
  object-fit: cover;
}
</style>

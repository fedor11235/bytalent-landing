<template>
  <div class="streaming">
    <video class="video" autoplay="true" loop="true" muted="true">
      <source src="@/assets/streaming.mp4" />
      <source src="@/assets/streaming.webm" />
    </video>
  </div>
</template>

<script setup lang="ts"></script>

<style>
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
</style>

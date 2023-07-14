<template>
  <div class="footer">
    <img class="footer_img" src="@/assets/footer.png" alt="footer" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
  position: sticky;
  width: 100vw;
  height: 21vh;
  &_img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
  }
}
</style>

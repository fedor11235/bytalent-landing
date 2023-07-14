<template>
  <div class="block_five">
    <div class="block_five__title block_five__card__h">ИНТЕГРАЦИЯ В СТРИМИНГ</div>
    <div class="block_five__cards">
      <div class="block_five__card  block_five__card__one">
        <div class="block_five__card__title">ТЕХНИЧЕСКИЕ ОГРАНИЧЕНИЯ ДЛЯ ИНТЕГРАЦИИ</div>
        <div class="block_five__card__text">
          - Проект должен быть в виде уровней Unreal Engine 5 <br/>
          - Максимальный размер уровня: 4 ГБ <br/>
          - Количество актёров в сцене &lt; 1000 <br/>
          - Максимальный пул текстур: 3 ГБ
        </div>
      </div>
      <div class="block_five__card block_five__card__two">
        <div class="block_five__card__title">СТАНДАРТИЗАЦИЯ УРОВНЯ ДЛЯ ИНТЕГРАЦИИ</div>
        <div class="block_five__card__text">
          &nbsp;Наши специалисты готовы оптимизировать ваш уровень UE5, либо <br/>
          провести конвертацию в UE5 из других программ <br/>
          &nbsp;  &nbsp;  &nbsp; AutoCad / Archicard / 3Ds Max / Lumion / Blender / Maya
        </div>
      </div>
    </div>
    <div class="button-grid">
      <div></div>
      <TestButton class="order_visualization">Заказать визулизацию</TestButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import TestButton from "@/components/TestButton.vue";
</script>

<style lang="scss" scoped>
.block_five {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
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
</style>

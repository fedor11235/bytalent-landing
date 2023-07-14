<template>
  <div class="streaming">
    <video class="video" autoplay="true" loop="true" muted="true">
      <source src="@/assets/streaming.mp4" />
      <source src="@/assets/streaming.webm" />
    </video>
    <div class="content">
      <div class="block_one">
        <div class="info">
          <div class="item">
            <TestButton>Самый быстрый и удобный способ демонстрации проекта</TestButton>
            <TestButton>Для запуска проекта просто откройте веб страницу</TestButton>
            <TestButton>На любом устройстве невзирая на мощность</TestButton>
          </div>
          <div></div>
        </div>
        <div class="button_progect_container">
          <div></div>
          <TestButton class="button_progect">Разместить проект</TestButton>
        </div>
      </div>
      <div class="block_two">
        <div class="block_two__title">ЭТАПЫ РЕАЛИЗАЦИИ АРХИТЕКТУРНОГО ПРОЕКТА</div>
        <div class="stages">
          <div class="stages_elem">
            <div class="stages_elem_title">Проектирование</div>
            <img class="stages_elem_img" src="@/assets/test.jpg" alt="example"/>
          </div>
          <img class="stages_elem_next" src="@/assets/next.png" alt="example"/>
          <div class="stages_elem">
            <div class="stages_elem_title">Визуализация</div>
            <img class="stages_elem_img" src="@/assets/test.jpg" alt="example"/>
          </div>
          <img class="stages_elem_next" src="@/assets/next.png" alt="example"/>
          <div class="stages_elem">
            <div class="stages_elem_title">WEB-Streaming</div>
            <img class="stages_elem_img" src="@/assets/test.jpg" alt="example"/>
          </div>
        </div>
        <div class="block_two__info">
          Обычные рендеры уже в прошлом... <br/>
          Он-лайн доступ к дизайн-проекту в сочетании с интерактивными механиками - это будуее!<br/>
          Специалисты "byTALENT" готовы адаптировать ваш дизайн-проект для "Pixel Streaming" (сервер/билд/домен/защита)
        </div>
      </div>
      <div class="block_three">
        <iframe class="youtube" src="https://www.youtube.com/embed/jm6aWaRy0G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="block_four">
        <div class="start-project">
          <div class="start-project__title">Запустить проект</div>
          <img class="stages_elem_next" src="@/assets/next.png" alt="example"/>
          <div class="start-project_view">
            <div class="stages_elem_title">WEB-Streaming</div>
            <img class="stages_elem_img" src="@/assets/test.jpg" alt="example"/>
          </div>
          <img class="stages_elem_next rotate" src="@/assets/next.png" alt="example"/>
          <div class="start-project__title">Попробовать</div>
        </div>
      </div>
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
      <div class="block_six">
        <img class="footer" src="@/assets/footer.png" alt="footer"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TestButton from "@/components/TestButton.vue";
</script>

<style scoped>
.rotate {
  rotate: 180deg;
}
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
.block_one {
  position: relative;
  height: 100vh;
  width: 100vw;
}
.block_two {
  display: flex;
  row-gap: 30px;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
}
.button_progect_container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-sizing: border-box;
  position: absolute;
  right: 32px;
  bottom: 32px;
}
.info {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  grid-column-gap: 1vw;
  padding-left: 64px;
  padding-right: 8px;
  box-sizing: border-box;
}
.item {
  max-height: 41vh;
  display: flex;
  flex-direction: column;
  row-gap: 21px;
}
.block_two__title {
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
.stages {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 31px;
  justify-content: center;
}
.stages_elem {
  background-color: rgba(0, 0, 0, .5);
  backdrop-filter: blur(5px);
  height: 240px;
  width: 300px;
  border-radius: 8px;
}
.stages_elem_title {
  color: white;
  font-size: 16px;
  margin: 12px 0;
}
.stages_elem_next {
  height: 126px;
}
.stages_elem_img {
  width: 70%;
  height: 70%;
}
.block_two__info {
  background-color: rgba(0, 0, 0, .6);
  width: 75%;
  backdrop-filter: blur(5px);
  padding: 32px;
  border-radius: 8px;
  color: white;
  font-size: 21px;
}
.block_three {
  width: 100vw;
  height: 100vh;
}
.block_four {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 70vh;
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
.youtube {
  width: 100%;
  height: 100%;
}
.start-project {
  display: flex;
  column-gap: 21px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 8px;
  height: 220px;
  width: 90%;
  align-items: center;
  justify-content: center;
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
.start-project_view:hover {
  scale: 1.05;
}
.start-project__title {
  font-size: 36px;
  color: white;
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

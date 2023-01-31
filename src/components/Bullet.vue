<template>
  <div class="bullet">
    <img class="arrow-right" :src="arrowRight1" alt="arrow-right" />
    <div class="inner-11">
      <div class="ellipse-2"></div>
      <div class="ellipse-22"></div>
      <div class="ellipse-2"></div>
      <div class="ellipse-2"></div>
      <div class="ellipse-2"></div>
    </div>
    <img class="arrow-right" :src="arrowRight2" alt="arrow-right" />
  </div>
</template>

<script>
export default {
  name: "Bullet",
  props: ["arrowRight1", "arrowRight2"],
};
</script>

<style>
.bullet {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 20px;
  left: 93px;
  min-width: 144px;
  position: absolute;
  top: 215px;
}

.arrow-right {
  height: 20px;
  width: 20px;
}

.inner-11 {
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 0;
  min-width: 64px;
}

.ellipse-2 {
  background-color: var(--white-2);
  border-radius: 3px;
  height: 6px;
  opacity: 0.6;
  width: 6px;
}

.ellipse-22 {
  background-color: var(--white-2);
  border-radius: 4px;
  height: 8px;
  width: 8px;
}
</style>

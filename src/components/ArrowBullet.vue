<template>
  <div :class="[`arrow-bullet`, className || ``]">
    <img
      class="arrow-right-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f53d0e94e696a753400af6/img/arrow-right-3@2x.png"
      alt="arrow-right"
    />
    <div class="ellipse-54"></div>
    <div class="ellipse-5"></div>
    <div class="ellipse-56"></div>
    <div class="ellipse-5"></div>
    <div class="ellipse-5"></div>
    <img
      class="arrow-right-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f53d0e94e696a753400af6/img/arrow-right-2@2x.png"
      alt="arrow-right"
    />
  </div>
</template>

<script>
export default {
  name: "ArrowBullet",
  props: ["className"],
};
</script>

<style>
.arrow-bullet {
  align-items: center;
  display: flex;
  margin-top: 54px;
  min-width: 172px;
}

.arrow-right-1 {
  height: 24px;
  width: 24px;
}

.ellipse-54 {
  background-color: var(--silver);
  border-radius: 4px;
  height: 8px;
  margin-left: 16px;
  margin-top: 0;
  width: 8px;
}

.ellipse-5 {
  background-color: var(--silver);
  border-radius: 4px;
  height: 8px;
  margin-left: 12px;
  margin-top: 0;
  width: 8px;
}

.ellipse-56 {
  background-color: var(--log-cabin);
  border-radius: 4px;
  height: 8px;
  margin-left: 12px;
  margin-top: 0;
  width: 8px;
}

.arrow-right-2 {
  height: 24px;
  margin-left: 20px;
  width: 24px;
}

.arrow-bullet.arrow-bullet-1 {
  margin-right: 129px;
  margin-top: unset;
}
</style>

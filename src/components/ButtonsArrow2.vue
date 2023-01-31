<template>
  <div class="buttons-arrow-4">
    <div class="shop-now-2 dmsans-bold-white-15px">{{ shopNow }}</div>
    <img
      class="right-up-1-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/right-up-1-1.svg"
      alt="right-up 1"
    />
  </div>
</template>

<script>
export default {
  name: "ButtonsArrow2",
  props: ["shopNow"],
};
</script>

<style>
.buttons-arrow-4 {
  align-items: center;
  background: linear-gradient(180deg, rgb(0, 228, 255) 0%, rgb(22, 87, 243) 85.42%);
  border: 1px solid;
  border-color: var(--white);
  border-radius: 60px;
  box-shadow: -5px -5px 10px #ffffff, 5px 5px 10px #aaaacc80;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
  padding: 16px 35px;
  position: relative;
  width: fit-content;
}

.shop-now-2 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.right-up-1-1 {
  height: 16px;
  min-width: 16px;
  position: relative;
}
</style>

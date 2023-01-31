<template>
  <div class="buttons-arrow-5">
    <div class="shop-now-3 dmsans-bold-white-15px">{{ shopNow }}</div>
    <img
      class="right-up-1-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/right-up-1-4.svg"
      alt="right-up 1"
    />
  </div>
</template>

<script>
export default {
  name: "ButtonsArrow3",
  props: ["shopNow"],
};
</script>

<style>
.buttons-arrow-5 {
  align-items: center;
  background: linear-gradient(180deg, rgb(0, 228, 255) 0%, rgb(22, 87, 243) 85.42%);
  border-radius: 90px;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
  padding: 16px 35px;
  position: relative;
  width: 269px;
}

.shop-now-3 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -2px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.right-up-1-2 {
  height: 16px;
  min-width: 16px;
  position: relative;
}
</style>

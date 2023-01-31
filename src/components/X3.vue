<template>
  <div :class="[`x3-1`, className || ``]">
    <div class="sketch dmsans-medium-log-cabin-13px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "X3",
  props: ["children", "className"],
};
</script>

<style>
.x3-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 60px;
  box-shadow: -5px -5px 10px #ffffff, 5px 5px 10px #aaaacc80;
  display: flex;
  gap: 10px;
  justify-content: center;
  left: 124px;
  padding: 3px 17px;
  position: absolute;
  top: 241px;
  width: fit-content;
}

.sketch {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.x3-1.x4-2 {
  left: 211px;
}

.x3-1.x3-2 {
  left: 123px;
}

.x3-1.x4-3 {
  left: 210px;
}

.x3-1.x3-3 {
  left: 1103px;
  top: 3762px;
}

.x3-1.x4-4 {
  left: 1190px;
  top: 3762px;
}

.x3-1.x3-4 {
  left: 740px;
  top: 3762px;
}

.x3-1.x4-5 {
  left: 827px;
  top: 3762px;
}
</style>

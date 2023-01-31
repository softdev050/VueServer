<template>
  <div :class="[`x2-1`, className || ``]"><div class="figma dmsans-medium-log-cabin-13px">Figma</div></div>
</template>

<script>
export default {
  name: "X2",
  props: ["className"],
};
</script>

<style>
.x2-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 60px;
  box-shadow: -5px -5px 10px #ffffff, 5px 5px 10px #aaaacc80;
  display: flex;
  gap: 10px;
  justify-content: center;
  left: 43px;
  padding: 3px 17px;
  position: absolute;
  top: 241px;
  width: fit-content;
}

.figma {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.x2-1.x2-2 {
  left: 42px;
}

.x2-1.x2-3 {
  left: 1022px;
  top: 3762px;
}

.x2-1.x2-4 {
  left: 659px;
  top: 3762px;
}
</style>

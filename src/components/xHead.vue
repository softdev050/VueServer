<template>
  <div class="head-6">
    <div class="design-creative-2 dmsans-normal-nevada-14px">{{ designCreative }}</div>
    <p class="i-will-design-modern dmsans-medium-log-cabin-17px">{{ iWillDesignModern }}</p>
  </div>
</template>

<script>
export default {
  name: "xHead",
  props: ["designCreative", "iWillDesignModern"],
};
</script>

<style>
.head-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 84px;
  width: 274px;
}

.design-creative-2 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.i-will-design-modern {
  letter-spacing: 0;
  line-height: 28px;
  min-height: 56px;
  width: 270px;
}
</style>

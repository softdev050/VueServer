<template>
  <div :class="[`x1-4`, className || ``]">
    <div class="text-5 dmsans-bold-log-cabin-32px">{{ text5 }}</div>
    <p class="clients-rate-profess dmsans-normal-log-cabin-15px">{{ clientsRateProfessionalsOnFreeio }}</p>
  </div>
</template>

<script>
export default {
  name: "X13",
  props: ["text5", "clientsRateProfessionalsOnFreeio", "className"],
};
</script>

<style>
.x1-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 108px;
  width: 272px;
}

.text-5 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 42px;
}

.clients-rate-profess {
  letter-spacing: 0;
  line-height: 28px;
  min-height: 56px;
  width: 268px;
}

.x1-4.x2-5 {
  margin-left: 42px;
}

.x1-4.x3-5 {
  margin-left: 9px;
  margin-top: 0.1px;
  min-height: 80px;
}

.x1-4.x3-5 .clients-rate-profess {
  min-height: unset;
  white-space: nowrap;
  width: unset;
}
</style>

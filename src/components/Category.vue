<template>
  <div class="overlap-group-1">
    <div class="img-4">
      <!-- <img class="rectangle-210" :src="rectangle210" alt="Rectangle 210" /> -->
      <div class="overlap-group-7">
        <img
          class="rectangle-212-1"
          :src="picture"
          alt="Rectangle 212"
        />
      </div>
    </div>
    <div class="inner-3">
      <div class="x1853-skills dmsans-normal-white-15px">
        {{ skill }} skills
      </div>
      <div class="development-it-1 dmsans-medium-white-17px" v-html="major"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["picture", "skill", "major"],
};
</script>

<style>
.img-4 {
  align-items: flex-end;
  display: flex;
  gap: 1436px;
  height: 300px;
  left: 0;
  min-width: 260px;
  position: absolute;
  top: 0;
}

.rectangle-210 {
  height: 300px;
  margin-bottom: -2605px;
  margin-left: -1696px;
  width: 260px;
}

.overlap-group-7 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  min-width: 260px;
}

.rectangle-212-1 {
  height: 300px;
  width: 260px;
}
</style>

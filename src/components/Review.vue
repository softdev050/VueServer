<template>
  <div class="review">
    <img
      class="stars"
      src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f53d0e94e696a753400af6/img/stars@2x.png"
      alt="stars"
    />
    <div class="x482-94-reviews dmsans-medium-white-15px">
      <span class="span-2 dmsans-medium-log-cabin-15px">4.82</span
      ><span class="jost-normal-storm-gray-14px">&nbsp;</span
      ><span class="span-2 dmsans-normal-nevada-14px">94 reviews</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
};
</script>

<style>
.review {
  align-items: center;
  display: flex;
  gap: 10px;
  height: 28px;
  min-width: 126px;
}

.stars {
  height: 10px;
  width: 10px;
}

.x482-94-reviews {
  letter-spacing: 0;
  line-height: 15px;
  min-height: 28px;
  min-width: 104px;
}

.span-2 {
  line-height: 28px;
}
</style>

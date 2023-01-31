<template>
  <div :class="[`review-1-1`]">
    <img
      class="stars-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f53d0e94e696a753400af6/img/stars-8@2x.png"
      alt="stars"
    />
    <div class="x49-595-reviews dmsans-medium-white-15px">
      <span class="span-4 dmsans-medium-log-cabin-15px">{{ rating }}</span
      ><span class="span1-6 jost-normal-storm-gray-14px">&nbsp;</span
      ><span class="span-4 dmsans-normal-nevada-14px">({{ review }} reviews)</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review2",
  props: ["rating", "review"],
};
</script>

<style>
.review-1-1 {
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-right: 4px;
  position: relative;
  width: fit-content;
}

.stars-1 {
  height: 10px;
  min-width: 10px;
  position: relative;
}

.x49-595-reviews {
  letter-spacing: 0;
  line-height: 15px;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.span-4 {
  line-height: 28px;
}

.review-1-1.review-2 {
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-right: 5px;
  position: relative;
  width: fit-content;
}
</style>

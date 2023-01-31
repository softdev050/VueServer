<template>
  <div class="bottom-2">    
    <div class="rectangle-218-2"></div>
    <div class="overlap-group-container-1">
      <div class="overlap-group-8">
        <div class="location dmsans-medium-log-cabin-15px">Location</div>
        <div class="name-3 dmsans-normal-log-cabin-14px">London</div>
      </div>
      <div class="overlap-group1-1">
        <div class="rate dmsans-medium-log-cabin-15px">Rate</div>
        <div class="x90-hr dmsans-normal-log-cabin-14px">$90 / hr</div>
      </div>
      <div class="overlap-group2-1">
        <div class="job-success dmsans-medium-log-cabin-15px">Job Success</div>
        <div class="text-1 dmsans-normal-log-cabin-14px">%98</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom2",
};
</script>

<style>


.bottom-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* border:1px solid; */
  margin-top: 15px;
  min-height: 63px;
  width: 269px;
}

.rectangle-218-2 {
  background-color: var(--gray-nurse);
  height: 1px;
  width: 269px;
}

.overlap-group-container-1 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  min-width: 269px;
}

.overlap-group-8 {
  height: 52px;
  position: relative;
  width: 62px;
}

.location,
.rate,
.job-success,
.location-1,
.rate-1,
.job-success-1,
.location-2,
.rate-2,
.job-success-2,
.location-3,
.rate-3,
.job-success-3 {
  left: 0;
  letter-spacing: 0;
  line-height: 28px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.name-3,
.x90-hr,
.text-1,
.name-4,
.x90-hr-1,
.text-2,
.name-5,
.x90-hr-2,
.text-3,
.name-6,
.x90-hr-3,
.text-4 {
  left: 0;
  letter-spacing: 0;
  line-height: 28px;
  position: absolute;
  top: 24px;
  white-space: nowrap;
}

.overlap-group1-1 {
  height: 52px;
  position: relative;
  width: 53px;
}

.overlap-group2-1 {
  height: 52px;
  position: relative;
  width: 90px;
}
</style>

<template>
  <div :class="[`style-v1-2`, className || ``]">
    <div class="images-3">
      <x-img2 :surface3="xImg2Props.surface3" :className="xImg2Props.className" />
      <div class="ellipse-77-2"></div>
    </div>
    <div class="head-8">
      <div class="ali-tufan-6 dmsans-medium-log-cabin-17px">{{ aliTufan }}</div>
      <div class="uiux-designer dmsans-normal-nevada-14px">{{ uiUxDesigner }}</div>
      <review2 :className="review2Props.className" />
    </div>
    <bottom2 />
    <buttons-arrow :shopNow="buttonsArrowProps.shopNow" :className="buttonsArrowProps.className" />
  </div>
</template>

<script>
import xImg2 from "./xImg2";
import Review2 from "./Review2";
import Bottom2 from "./Bottom2";
import ButtonsArrow from "./ButtonsArrow";
export default {
  name: "StyleV1",
  components: {
    xImg2,
    Review2,
    Bottom2,
    ButtonsArrow,
  },
  props: ["aliTufan", "uiUxDesigner", "className", "xImg2Props", "review2Props", "buttonsArrowProps"],
};
</script>

<style>
.style-v1-2 {
  align-items: flex-start;
  background-color: var(--white-2);
  border: 1px solid;
  border-color: var(--gray-nurse);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 466px;
  padding: 29px;
  position: absolute;
  top: 0;
  width: 329px;
}

.images-3 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 1941px;
  height: 90px;
  margin-right: 2px;
  min-width: 91px;
  position: relative;
}

.ellipse-77-2 {
  background-color: var(--fern_true);
  border: 2px solid;
  border-color: var(--white-2);
  border-radius: 8px;
  height: 16px;
  margin-top: 13px;
  width: 16px;
}

.head-8 {
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 3px;
  margin-top: 20px;
  min-height: 84px;
  position: relative;
  width: 138px;
}

.ali-tufan-6 {
  letter-spacing: 0;
  line-height: 28px;
  margin-right: 3px;
  min-width: 87px;
  text-align: center;
  white-space: nowrap;
}

.uiux-designer {
  letter-spacing: 0;
  line-height: 28px;
  margin-right: 3px;
  min-width: 113px;
  text-align: center;
  white-space: nowrap;
}

.style-v1-2.style-v1-1 {
  left: unset;
  position: relative;
  top: unset;
}

.style-v1-2.style-v1-1 .images-3 {
  gap: 2655px;
}

.style-v1-2.style-v1-1 .ali-tufan-6 {
  min-width: 123px;
}

.style-v1-2.style-v1-1 .uiux-designer {
  min-width: 115px;
}

.style-v1-2.style-v1 .images-3 {
  gap: 3012px;
}

.style-v1-2.style-v1 .head-8 {
  margin-left: 4px;
  width: 149px;
}

.style-v1-2.style-v1 .ali-tufan-6 {
  margin-right: 5px;
  min-width: 116px;
}

.style-v1-2.style-v1 .uiux-designer {
  margin-right: 4px;
  min-width: 145px;
}
</style>

<template>
  <div class="style-v1-3">
    <div class="images-4">
      <x-img2 :surface3="xImg2Props.surface3" :className="xImg2Props.className" />
      <div class="ellipse-77-3"></div>
    </div>
    <div class="head-9">
      <div class="ali-tufan-7 dmsans-medium-log-cabin-17px">{{ aliTufan }}</div>
      <div class="uiux-designer-1 dmsans-normal-nevada-14px">{{ uiUxDesigner }}</div>
      <review2 />
    </div>
    <bottom2 />
    <buttons-arrow3 :shopNow="buttonsArrow3Props.shopNow" />
  </div>
</template>

<script>
import xImg2 from "./xImg2";
import Review2 from "./Review2";
import Bottom2 from "./Bottom2";
import ButtonsArrow3 from "./ButtonsArrow3";
export default {
  name: "StyleV12",
  components: {
    xImg2,
    Review2,
    Bottom2,
    ButtonsArrow3,
  },
  props: ["aliTufan", "uiUxDesigner", "xImg2Props", "buttonsArrow3Props"],
};
</script>

<style>
.style-v1-3 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--white-2);
  border: 1px solid;
  border-color: var(--gray-nurse);
  border-radius: 16px;
  box-shadow: 0px 6px 15px #404f680d;
  display: flex;
  flex-direction: column;
  min-height: 466px;
  padding: 29px;
  position: relative;
  width: 329px;
}

.images-4 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 2298px;
  height: 90px;
  margin-right: 2px;
  min-width: 91px;
  position: relative;
}

.ellipse-77-3 {
  background-color: var(--fern_true);
  border: 2px solid;
  border-color: var(--white-2);
  border-radius: 8px;
  height: 16px;
  margin-top: 13px;
  width: 16px;
}

.head-9 {
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

.ali-tufan-7 {
  letter-spacing: 0;
  line-height: 28px;
  margin-right: 3px;
  min-width: 117px;
  text-align: center;
  white-space: nowrap;
}

.uiux-designer-1 {
  letter-spacing: 0;
  line-height: 28px;
  margin-right: 4px;
  min-width: 74px;
  text-align: center;
  white-space: nowrap;
}
</style>

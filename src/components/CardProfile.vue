<template>
  <div class="overlap-group-2">
    <div :class="[`style-v1-2`]">
      <div class="profile-center">
        <div :class="status_className"></div>
        <img class="profile-img" :src= "figure"/>
      
      </div>
      <div class="head-8">
        <div class="ali-tufan-6 dmsans-medium-log-cabin-17px">{{ name }}</div>
        <div class="uiux-designer dmsans-normal-nevada-14px">{{ job }}</div>
        <review2 :rating="rating" :review="review" />
      </div>
      <div class="order">
        <div class="major dmsans-medium-log-cabin-13px">Figma</div>
        <div class="major dmsans-medium-log-cabin-13px">Sketch</div>
        <div class="major dmsans-medium-log-cabin-13px">HTML5</div>
      </div>
      <bottom2 />
      <buttons-arrow :shopNow="buttonsArrow.shopNow" :className="buttonsArrow.className" />
    </div>
  </div>
</template>

<script>
import xImg2 from "./xImg2";
import Review2 from "./Review2";
import Bottom2 from "./Bottom2";
import ButtonsArrow from "./ButtonsArrow";
export default {
  name: "CardProfile",
  components: {
    xImg2,
    Review2,
    Bottom2,
    ButtonsArrow,
  },
  props: ["figure", "status_className", "name", "job", "rating", "review", "buttonsArrow"],
};
</script>

<style>
.profile-center{
  display: flex;
  /* align-items: center; */
  align-self: center;
}
.profile-img{
  width: 150px;
  height: 150px;
  border-radius: 100%;
  
}

.order {
  width: 90%;
  height: 100%;
  /* border:1px solid; */
  margin-top: 20px;
  align-items: center;
  align-self: center;
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
}

.major {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
  width: 30%;
  height: 20%;
  background: #F5F5FA;
  /* shadow */

  box-shadow: 5px 5px 10px rgba(170, 170, 204, 0.5), -5px -5px 10px #FFFFFF;
  border-radius: 60px;

  color: brown;
  display: flex;
  justify-content: center;
  align-items: center;


}

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
.style-v1-2:hover{
  border-color:gray;
}

.netstate_true {
  position: absolute;
  right: 31%;
  background-color: var(--fern_true);
  border: 2px solid;
  border-color: var(--white-2);
  border-radius: 8px;
  height: 16px;
  margin-top: 13px;
  width: 16px;
}

.netstate_false {
  position: absolute;
  right: 31%;
  background-color: var(--fern_false);
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

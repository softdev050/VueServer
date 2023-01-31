<template>
  <article class="style-v2-7">
    <div class="overlap-group2">
      <div class="images-2">
        <img class="rectangle-211-1" :src="rectangle211" alt="Rectangle 211" />
        <div class="overlap-group1" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
          <img
            class="rectangle-212"
            src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/rectangle-212.svg"
            alt="Rectangle 212"
          />
        </div>
      </div>
      <save />
      <bullet :arrowRight1="bulletProps.arrowRight1" :arrowRight2="bulletProps.arrowRight2" />
    </div>
    <div class="inner-10">
      <div class="head-7">
        <div class="design-creative-3 dmsans-normal-nevada-14px">{{ designCreative }}</div>
        <p class="i-will-design-modern-1">{{ iWillDesignModern }}</p>
      </div>
      <review />
      <div class="bottom-1">
        <div class="rectangle-218-1"></div>
        <div class="flex-row-5">
          <div class="freelancer-2">
            <div class="overlap-group-6">
              <div class="img-3">
                <img class="ellipse-76-1" :src="ellipse76" alt="Ellipse 76" /><img
                  class="surface-2-1"
                  :src="surface2"
                  alt="Surface 2"
                />
              </div>
              <div class="ellipse-77-1"></div>
            </div>
            <div class="name-2 dmsans-normal-log-cabin-14px">{{ name }}</div>
          </div>
          <div class="starting-at-983-1 dmsans-normal-white-14px">
            <span class="span-3 dmsans-normal-nevada-14px">{{ spanText1 }}</span
            ><span class="span1-5 jost-medium-nevada-16px">{{ spanText2 }}</span
            ><span class="span-3 dmsans-medium-log-cabin-17px">{{ spanText3 }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Save from "./Save";
import Bullet from "./Bullet";
import Review from "./Review";
export default {
  name: "StyleV22",
  components: {
    Save,
    Bullet,
    Review,
  },
  props: [
    "rectangle211",
    "overlapGroup1",
    "designCreative",
    "iWillDesignModern",
    "ellipse76",
    "surface2",
    "name",
    "spanText1",
    "spanText2",
    "spanText3",
    "bulletProps",
  ],
};
</script>

<style>
.style-v2-7 {
  align-items: center;
  background-color: var(--white-2);
  border: 1px solid;
  border-color: var(--gray-nurse);
  border-radius: 16px;
  box-shadow: 0px 6px 15px #404f680d;
  display: flex;
  flex-direction: column;
  gap: 19px;
  min-height: 463px;
  width: 329px;
}

.overlap-group2 {
  height: 245px;
  position: relative;
  width: 329px;
}

.images-2 {
  align-items: flex-end;
  display: flex;
  gap: 1984px;
  height: 245px;
  left: 0;
  min-width: 329px;
  position: absolute;
  top: 0;
}

.rectangle-211-1 {
  height: 245px;
  margin-bottom: -1067px;
  margin-left: -2313px;
  width: 329px;
}

.overlap-group1 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  min-width: 329px;
}

.rectangle-212 {
  height: 245px;
  width: 329px;
}

.inner-10 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 1px;
  min-height: 180px;
  position: relative;
  width: 270px;
}

.head-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 84px;
  width: 274px;
}

.design-creative-3 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.i-will-design-modern-1 {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(18.91, 8.15, 85) 0%, rgb(0, 157, 255) 100%);
  background-clip: text;
  color: transparent;
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-l);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  min-height: 56px;
  text-decoration: underline;
  text-fill-color: transparent;
  width: 270px;
}

.bottom-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 17px;
  min-height: 48px;
  width: 271px;
}

.rectangle-218-1 {
  background-color: var(--gray-nurse);
  height: 1px;
  width: 269px;
}

.flex-row-5 {
  align-items: flex-start;
  display: flex;
  gap: 23px;
  min-width: 269px;
}

.freelancer-2 {
  align-items: flex-end;
  display: flex;
  gap: 8px;
  min-width: 132px;
}

.overlap-group-6 {
  height: 30px;
  position: relative;
  width: 32px;
}

.img-3 {
  align-items: flex-end;
  display: flex;
  gap: 2283px;
  height: 30px;
  left: 0;
  min-width: 30px;
  position: absolute;
  top: 0;
}

.ellipse-76-1 {
  height: 30px;
  margin-bottom: -1067px;
  margin-left: -2313px;
  width: 30px;
}

.surface-2-1 {
  height: 30px;
  object-fit: cover;
  width: 30px;
}

.ellipse-77-1 {
  background-color: var(--fern_true);
  border: 1px solid;
  border-color: var(--white-2);
  border-radius: 4.5px;
  height: 9px;
  left: 23px;
  position: absolute;
  top: 1px;
  width: 9px;
}

.name-2 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
  width: 90px;
}

.starting-at-983-1 {
  letter-spacing: 0;
  line-height: 14px;
  min-height: 30px;
  text-align: right;
  width: 114px;
}

.span-3 {
  line-height: 28px;
}

.span1-5 {
  line-height: 30px;
}
</style>

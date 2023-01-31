<template>
  <article :class="[`style-v2-1`, className || ``]">
    <div class="overlap-group-4">
      <div class="images-1">
        <img
          class="rectangle-211"
          src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fa72666926d76ba3d3dfe8/img/ellipse-76@2x.png"
          alt="Rectangle 211"
        />
        <img
          class="surface-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fa72666926d76ba3d3dfe8/img/surface-1@2x.png"
          alt="Surface 1"
        />
      </div>
      <save />
    </div>
    <div class="inner-9">
      <x-head :designCreative="xHeadProps.designCreative" :iWillDesignModern="xHeadProps.iWillDesignModern" />
      <review />
      <div class="bottom">
        <div class="rectangle-218"></div>
        <div class="flex-row-4">
          <div class="freelancer-1">
            <div class="overlap-group-5">
              <div class="img-1">
                <img class="ellipse-76" :src="ellipse76" alt="Ellipse 76" /><img
                  class="surface-2"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fa72666926d76ba3d3dfe8/img/surface-2@2x.png"
                  alt="Surface 2"
                />
              </div>
              <div class="ellipse-77"></div>
            </div>
            <div class="ali-tufan dmsans-normal-log-cabin-14px">{{ aliTufan }}</div>
          </div>
          <div class="starting-at-983 dmsans-normal-white-14px">
            <span class="span-1 dmsans-normal-nevada-14px">Starting at</span
            ><span class="span1-3 jost-medium-nevada-16px">&nbsp;</span
            ><span class="span-1 dmsans-medium-log-cabin-17px">$983</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Save from "./Save";
import xHead from "./xHead";
import Review from "./Review";
export default {
  name: "StyleV2",
  components: {
    Save,
    xHead,
    Review,
  },
  props: ["ellipse76", "aliTufan", "className", "xHeadProps"],
};
</script>

<style>
.style-v2-1 {
  align-items: center;
  background-color: var(--white-2);
  border: 1px solid;
  border-color: var(--gray-nurse);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  min-height: 463px;
  width: 329px;
}

.overlap-group-4 {
  height: 245px;
  position: relative;
  width: 329px;
}

.images-1 {
  align-items: flex-end;
  display: flex;
  gap: 1627px;
  height: 245px;
  left: 0;
  min-width: 329px;
  position: absolute;
  top: 0;
}

.rectangle-211 {
  height: 245px;
  margin-bottom: -1067px;
  margin-left: -1956px;
  width: 329px;
}

.surface-1 {
  height: 245px;
  object-fit: cover;
  width: 329px;
}

.inner-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 1px;
  min-height: 180px;
  position: relative;
  width: 270px;
}

.bottom {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 17px;
  min-height: 48px;
  width: 271px;
}

.rectangle-218 {
  background-color: var(--gray-nurse);
  height: 1px;
  width: 269px;
}

.flex-row-4 {
  align-items: flex-start;
  display: flex;
  gap: 23px;
  min-width: 269px;
}

.freelancer-1 {
  align-items: flex-end;
  display: flex;
  gap: 8px;
  min-width: 132px;
}

.overlap-group-5 {
  height: 30px;
  position: relative;
  width: 32px;
}

.img-1 {
  align-items: flex-end;
  display: flex;
  gap: 1926px;
  height: 30px;
  left: 0;
  min-width: 30px;
  position: absolute;
  top: 0;
}

.ellipse-76 {
  height: 30px;
  margin-bottom: -1067px;
  margin-left: -1956px;
  width: 30px;
}

.surface-2 {
  height: 30px;
  object-fit: cover;
  width: 30px;
}

.ellipse-77 {
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

.ali-tufan {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
  width: 90px;
}

.starting-at-983 {
  letter-spacing: 0;
  line-height: 14px;
  min-height: 30px;
  text-align: right;
  width: 114px;
}

.span-1 {
  line-height: 28px;
}

.span1-3 {
  line-height: 30px;
}

.style-v2-1.style-v2-2 .rectangle-211,
.style-v2-1.style-v2-2 .ellipse-76 {
  margin-bottom: -576px;
}

.style-v2-1.style-v2-3 .images-1 {
  gap: 1984px;
}

.style-v2-1.style-v2-3 .rectangle-211,
.style-v2-1.style-v2-3 .ellipse-76 {
  margin-bottom: -576px;
  margin-left: -2313px;
}

.style-v2-1.style-v2-3 .img-1 {
  gap: 2283px;
}

.style-v2-1.style-v2-4 .images-1,
.style-v2-1.style-v2-5 .images-1 {
  gap: 2341px;
}

.style-v2-1.style-v2-4 .rectangle-211,
.style-v2-1.style-v2-4 .ellipse-76 {
  margin-left: -2670px;
}

.style-v2-1.style-v2-4 .img-1,
.style-v2-1.style-v2-5 .img-1 {
  gap: 2640px;
}

.style-v2-1.style-v2-5 .rectangle-211,
.style-v2-1.style-v2-5 .ellipse-76 {
  margin-bottom: -576px;
  margin-left: -2670px;
}

.style-v2-1.style-v2-6 .images-1,
.style-v2-1.style-v2 .images-1 {
  gap: 2698px;
}

.style-v2-1.style-v2-6 .rectangle-211,
.style-v2-1.style-v2-6 .ellipse-76 {
  margin-left: -3027px;
}

.style-v2-1.style-v2-6 .img-1,
.style-v2-1.style-v2 .img-1 {
  gap: 2997px;
}

.style-v2-1.style-v2 .rectangle-211,
.style-v2-1.style-v2 .ellipse-76 {
  margin-bottom: -576px;
  margin-left: -3027px;
}
</style>

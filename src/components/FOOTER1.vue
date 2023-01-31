<template>
  <div class="footer-1">
    <div class="flex-col-1">
      <div class="flex-col-item">
        <div class="flex-row-6">
          <p class="terms-of-service-pri dmsans-medium-white-17px">{{ termsOfServicePri }}</p>
          <div class="follow">
            <div class="follow-us dmsans-medium-white-17px">{{ followUs }}</div>
            <div class="inner-12 fontawesome5brands-regular-normal-white-14px">
              <div class="text-7">{{ text7 }}</div>
              <div class="overlap-group-9">
                <div class="text-8">{{ text8 }}</div>
              </div>
              <div class="text-9">{{ text9 }}</div>
              <div class="text-10">{{ text10 }}</div>
            </div>
          </div>
        </div>
        <div class="rectangle-220"></div>
      </div>
      <div class="center">
        <div class="x1-5">
          <div class="about dmsans-medium-white-17px">{{ about }}</div>
          <p class="careers-press-news dmsans-normal-white-15px" v-html="careersPressNews"></p>
        </div>
        <div class="x2-6">
          <div class="categories dmsans-medium-white-17px">{{ categories }}</div>
          <p class="graphics-design-di dmsans-normal-white-15px">{{ graphicsDesignDi }}</p>
        </div>
        <div class="x3-6">
          <div class="support dmsans-medium-white-17px">{{ support }}</div>
          <p class="help-support-trust dmsans-normal-white-15px">{{ helpSupportTrust }}</p>
        </div>
        <div class="flex-col-2">
          <div class="x5">
            <div class="subscribe dmsans-medium-white-17px">{{ subscribe }}</div>
            <div class="overlap-group-10">
              <div class="your-email-address dmsans-normal-white-15px">{{ yourEmailAddress }}</div>
              <div class="place dmsans-medium-white-15px-2">{{ place }}</div>
            </div>
          </div>
          <div class="x4-6">
            <div class="apps dmsans-medium-white-17px">{{ apps }}</div>
            <div class="inner-13">
              <div class="flex-col-3">
                <img
                  class="flex-col-item-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/apple-1.svg"
                  alt="apple 1"
                />
                <img
                  class="flex-col-item-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/android--1--1.svg"
                  alt="android (1) 1"
                />
              </div>
              <div class="i-os-app-android-app dmsans-normal-white-15px" v-html="iosAppAndroidApp"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col-item">
        <div class="rectangle-220"></div>
        <div class="flex-row-7">
          <p class="freeio-2022-creat">{{ freeio2022Creat }}</p>
          <div class="overlap-group-11">
            <div class="us-usd jost-normal-white-14px">{{ usUsd }}</div>
            <img
              class="down-filled-triangular-arrow-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/down-filled-triangular-arrow-2.svg"
              alt="down-filled-triangular-arrow 2"
            />
          </div>
          <div class="angu-container">
            <div class="language jost-normal-white-14px">{{ language }}</div>
            <img
              class="down-filled-triangular-arrow-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/down-filled-triangular-arrow-2-1.svg"
              alt="down-filled-triangular-arrow 2"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="back-top">
      <img
        class="next-1-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/next-1-2.svg"
        alt="next 1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FOOTER1",
  props: [
    "termsOfServicePri",
    "followUs",
    "text7",
    "text8",
    "text9",
    "text10",
    "about",
    "careersPressNews",
    "categories",
    "graphicsDesignDi",
    "support",
    "helpSupportTrust",
    "subscribe",
    "yourEmailAddress",
    "place",
    "apps",
    "iosAppAndroidApp",
    "freeio2022Creat",
    "usUsd",
    "language",
  ],
};
</script>

<style>
.footer-1 {
  align-items: center;
  background: linear-gradient(180deg, rgb(18.91, 8.15, 85) 0%, rgb(0, 157, 255) 100%);
  display: flex;
  gap: 198px;
  height: 635px;
  justify-content: flex-end;
  margin-top: 910px;
  min-width: 1920px;
  padding: 0 20px;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 60px;
  min-height: 595px;
  width: 1402px;
}

.flex-col-item {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 61px;
  width: 1402px;
}

.flex-row-6 {
  align-items: center;
  display: flex;
  gap: 781px;
  min-width: 1402px;
}

.terms-of-service-pri {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: 2px;
  min-width: 375px;
  white-space: nowrap;
}

.follow {
  align-items: center;
  display: flex;
  gap: 31px;
  min-width: 246px;
}

.follow-us {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: 2px;
  min-width: 75px;
  white-space: nowrap;
}

.inner-12 {
  align-items: center;
  display: flex;
  min-width: 146px;
}

.text-7 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 1.37px;
  min-height: 16px;
  width: 8px;
}

.overlap-group-9 {
  align-items: flex-end;
  background-color: var(--white-5);
  border-radius: 20px;
  display: flex;
  height: 40px;
  margin-left: 17px;
  min-width: 40px;
  padding: 11.5px 13px;
}

.text-8 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 16px;
  width: 14px;
}

.text-9 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 17px;
  margin-top: 1.37px;
  min-height: 16px;
  width: 13px;
}

.text-10 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 30px;
  margin-top: 1.37px;
  min-height: 16px;
  width: 13px;
}

.rectangle-220 {
  background-color: var(--white-2);
  height: 1px;
  opacity: 0.15;
  width: 1400px;
}

.center {
  align-items: flex-start;
  display: flex;
  height: 353px;
  min-width: 1400px;
}

.x1-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 248px;
  width: 126px;
}

.about,
.categories,
.support,
.subscribe,
.apps {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.careers-press-news {
  letter-spacing: 0;
  line-height: 35px;
  min-height: 210px;
  opacity: 0.9;
}

.x2-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 231px;
  min-height: 353px;
  width: 148px;
}

.graphics-design-di {
  letter-spacing: 0;
  line-height: 35px;
  min-height: 315px;
  opacity: 0.9;
}

.x3-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 209px;
  min-height: 178px;
  width: 152px;
}

.help-support-trust {
  letter-spacing: 0;
  line-height: 35px;
  min-height: 140px;
  opacity: 0.9;
}

.flex-col-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 205px;
  min-height: 255px;
  width: 331px;
}

.x5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 106px;
  width: 331px;
}

.overlap-group-10 {
  align-items: center;
  background-color: var(--white-5);
  border-radius: 4px;
  display: flex;
  gap: 121px;
  height: 60px;
  min-width: 329px;
  padding: 0 20px;
}

.your-email-address {
  letter-spacing: 0;
  line-height: 28px;
  min-width: 131px;
  opacity: 0.9;
  white-space: nowrap;
}

.place {
  letter-spacing: 0;
  line-height: 28px;
  min-width: 37px;
  white-space: nowrap;
}

.x4-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 11px;
  min-height: 119px;
  width: 119px;
}

.inner-13 {
  align-items: center;
  display: flex;
  gap: 13px;
  height: 80px;
  min-width: 119px;
  opacity: 0.7;
}

.flex-col-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 2.15px;
  min-height: 57px;
  width: 16px;
}

.flex-col-item-1 {
  height: 16px;
  width: 16px;
}

.i-os-app-android-app {
  letter-spacing: 0;
  line-height: 40px;
  min-height: 80px;
  min-width: 88px;
  opacity: 0.9;
}

.flex-row-7 {
  align-items: center;
  display: flex;
  min-width: 1400px;
}

.freeio-2022-creat {
  color: var(--white-2);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: 0.2px;
  min-width: 253px;
  white-space: nowrap;
}

.overlap-group-11 {
  align-items: center;
  background-color: var(--white-4);
  border-radius: 4px;
  display: flex;
  gap: 10px;
  height: 40px;
  margin-left: 917px;
  min-width: 111px;
  padding: 0 20px;
}

.us-usd {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 55px;
  white-space: nowrap;
}

.down-filled-triangular-arrow-2 {
  height: 6px;
  width: 6px;
}

.angu-container {
  align-items: center;
  background-color: var(--white-4);
  border-radius: 4px;
  display: flex;
  gap: 10px;
  height: 40px;
  margin-left: 20px;
  min-width: 99px;
  padding: 0 20px;
}

.language {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 43px;
  white-space: nowrap;
}

.back-top {
  align-items: flex-end;
  align-self: flex-end;
  background-color: var(--white-4);
  border-radius: 20px;
  display: flex;
  height: 40px;
  justify-content: flex-end;
  margin-bottom: 20px;
  min-width: 40px;
  padding: 14px;
}

.next-1-1 {
  height: 11px;
  width: 11px;
}
</style>

<template>
  <div class="inner-item-1">
    <img
      class="cv-1"
      :src="picture"
      alt="cv 1"
    />
    <div class="post-your-first-breadwinner dmsans-medium-log-cabin-20px">{{ title }}</div>
    <p class="sign-up-for-free-se dmsans-normal-log-cabin-15px">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: ["picture", "title", "description"],
};
</script>

<style>
.inner-item-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 185px;
  width: 294px;
}

.cv-1 {
  height: 40px;
  width: 40px;
}

.post-your-first-breadwinner {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 20px;
  min-height: 26px;
}

.sign-up-for-free-se {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: 15px;
  min-height: 84px;
  width: 290px;
}

.inner-item-1.x4-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 157px;
  width: 294px;
}

.inner-item-1.x4-1 .sign-up-for-free-se {
  min-height: 56px;
}
</style>

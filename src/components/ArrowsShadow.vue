<template>
  <article :class="[`arrows-shadow`, className || ``]">
    <img
      class="next-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63fb6b8f1cfafcd3e751358c/img/next-1-1.svg"
      alt="next 1"
    />
  </article>
</template>

<script>
export default {
  name: "ArrowsShadow",
  props: ["className"],
};
</script>

<style>
.arrows-shadow {
  align-items: flex-end;
  background-color: var(--white-2);
  border-radius: 25px;
  box-shadow: 0px 10px 35px #0510361a;
  display: flex;
  height: 50px;
  min-width: 50px;
  padding: 17.5px;
}

.next-1 {
  height: 14px;
  width: 14px;
}

.arrows-shadow.arrows-shadow-1 {
  justify-content: flex-end;
}
</style>

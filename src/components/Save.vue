<template>
  <div class="save">
    <img
      class="heart-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f55095687de76c69c21210/img/heart-1.svg"
      alt="heart 1"
    />
  </div>
</template>

<script>
export default {
  name: "Save",
};
</script>

<style>
.save {
  align-items: flex-start;
  background-color: var(--white-2);
  border: 1px solid;
  border-color: var(--gray-nurse);
  border-radius: 18px;
  box-shadow: 0px 6px 15px #404f680d;
  display: flex;
  height: 36px;
  left: 273px;
  min-width: 36px;
  padding: 11px;
  position: absolute;
  top: 20px;
}

.heart-1 {
  height: 12px;
  width: 12px;
}
</style>

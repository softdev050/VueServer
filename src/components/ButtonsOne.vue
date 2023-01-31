<template>
  <div :class="[`buttons-one`, className || ``]"  @click="showstr" v-on:handledata="handleInput"><div class="shop-now dmsans-bold-white-15px">Search</div></div>
</template>

<script>
export default {
  name: "HEADERSEARCH",
  props: ["className",'parentmessage'],
  data:{
    a:''
  },
  methods: {
    handleInput(data) {
      console.log(data);
    },
    showstr(){
      alert(this.parentmessage);
    }
  }
};
</script>

<style>
.buttons-one:hover {
  background:  rgb(0, 228, 255) 0%
}
.buttons-one {
  align-items: center;
  background: linear-gradient(90deg, rgb(0, 228, 255) 0%, rgb(22, 87, 243) 85.42%);
  border: 1px solid;
  border-color: var(--white);
  border-radius: 60px;
  box-shadow: -4px -4px 10px #ffffff, 5px 5px 10px #aaaacc80;
  display: flex;
  gap: 10px;
  height: 39px;
  justify-content: center;
  left: 867px;
  padding: 16px 35px;
  position: absolute;
  top: 22px;
  width: 87px;
}

.shop-now {
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: -9.5px;
  margin-left: -16.76px;
  margin-right: -16.76px;
  margin-top: -11.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
.shop-now:hover{
  cursor: pointer;
}
.buttons-one.buttons-one-1 {
  box-shadow: -5px -5px 10px #ffffff, 5px 5px 10px #aaaacc80;
  height: unset;
  left: unset;
  margin-left: 269px;
  position: relative;
  top: unset;
  width: fit-content;
}

.buttons-one.buttons-one-1 .shop-now {
  margin-bottom: unset;
  margin-left: unset;
  margin-right: unset;
  margin-top: -1px;
}
</style>

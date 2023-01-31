<template>
  <div class="header-right">
    <div class="right">
      <div class="become-a-seller dmsans-medium-log-cabin-15px" @click="becomeaseller">{{ becomeASeller }}</div>
      <div class="sign-in dmsans-medium-log-cabin-15px" @click="signIn_p">{{ signIn }}</div>
      <div class="join" @click="join_p">
        <div class="join-1 dmsans-medium-white-15px-2"  >{{ join }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HEADERRIGHT",
  props: ["becomeASeller", "signIn", "join"],
  methods: {
    becomeaseller() {
      alert("this.counter++");
    },
    signIn_p() {
      alert("signIn");
    },
    join_p() {
      alert("join");
    }
  }
};
</script>

<style>
.header-right {
  align-items: flex-start;
  background-color: white;
  display: flex;
  gap: 76px;
  height: 80px;
  justify-content: flex-end;
  left: 0;
  min-width: 1920px;
  padding: 19px 27px;
  position: absolute;
  top: 0;
}

.right {
  align-items: center;
  display: flex;
  gap: 30px;
  height: 40px;
  min-width: 315px;
}

.become-a-seller {
  letter-spacing: 0;
  line-height: 28px;
  min-width: 114px;
  white-space: nowrap;
}

.become-a-seller:hover {
  color: blue;
  cursor: pointer;
}
.sign-in:hover {
  color: blue;
  cursor: pointer;
}
.sign-in {
  letter-spacing: 0;
  line-height: 28px;
  min-width: 47px;
  white-space: nowrap;
}

.join {
  align-items: center;
  background: linear-gradient(90deg, rgb(0, 228, 255) 0%, rgb(22, 87, 243) 85.42%);
  border: 1px solid;
  border-color: var(--white);
  border-radius: 60px;
  box-shadow: -5px -5px 10px #ffffff, 5px 5px 10px #aaaacc80;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 6px 30px;
  position: relative;
  width: fit-content;
}
.join:hover {
  background: rgb(0, 228, 255) 0%;
  cursor: pointer;
}
.join-1 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;  
}


</style>

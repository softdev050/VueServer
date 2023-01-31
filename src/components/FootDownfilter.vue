<template>
  <div class="foot-select-item">
    <select id="a" v-model="selectedm" class="select2">
      <option v-for="option in Marketplace" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <select id="b" v-model="selecteda" class="select2">
      <option v-for="option1 in ArtificialIntelligence" v-bind:value="option1.value">
        {{ option1.text }}
      </option>
    </select>    
  </div>
</template>

<script>
export default {
  props: [
    "Marketplace",
    "ArtificialIntelligence",
    "group1",
    "group2",
    "group3",
  ],

  name: "FootDownfilter",
  data() {
    return {
      selectedm: "A",
      selecteda: "A",
      selectedc: "A",
    };
  },
};
</script>
<style>
.foot-select-item{
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;
  height: 100%;
}
  
.select2 {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-size: 10px;
  outline: none;
  border-width: 0px;
  background-position-x: 100%;
  background-position-y: 50%;
  background: #009DFF;
  border-radius: 4px;
  color: #ffffff;
  width:40%;
  padding-left: 5px;
  /* border: 1px solid; */
  background-image: url("../../public/image/foot-select.png");
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 50%;
  
}
.select2:hover {
  color: #ffffff;
  background: #6751e6;
  cursor: pointer;
  opacity: 0.6;
}

</style>

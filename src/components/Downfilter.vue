<template>
  <div class="downfilter">
    <select id="a" v-model="selectedm" class="select1">
      <option v-for="option in Marketplace" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <select id="b" v-model="selecteda"  class="select1">
      <option v-for="option1 in ArtificialIntelligence" v-bind:value="option1.value">
        {{ option1.text }}
      </option>
    </select>
    <select id="c" v-model="selectedc"  class="select1">
      <option v-for="option2 in ArtificialIntelligence" v-bind:value="option2.value">
        {{ option2.text }}
      </option>
    </select>
    
  </div>
</template>

<script>
export default {
  props: [
    "Marketplace",
    "ArtificialIntelligence",
    "CyberTools",
    "group1",
    "group2",
    "group3",
  ],

  name: "Downfilter",
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

.downfilter {
  align-items: flex-row;
  display: flex;
  width: 432px;
  height: 28px;
}



.rectangle-7 {
  background-color: var(--border);
  height: 40px;
  width: 1px;
}

.select1 {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  padding-right: 15px;
  background-image: url("https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f53d0e94e696a753400af6/img/group-1@2x.png");
  background-repeat: no-repeat;
  background-position: calc(100%-3px) center;
  background-size: 10px;
  outline: none;
  border-width: 0px;
  background-position-x: 100%;
  background-position-y: 50%;
  margin-right: 20px;  
}

.select1:hover {
  color: blue;
  cursor: pointer;
  background-image: url("https://anima-uploads.s3.amazonaws.com/projects/63f53caea1ccc056ea5a0736/releases/63f53d0e94e696a753400af6/img/group@2x.png");
}

</style>

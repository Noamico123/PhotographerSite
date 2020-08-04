<template>
  <div class="product" style="position:relative;">
    <!-- <button class="add-btn" @click="$emit('add-to-cart', id)">
      Add To Cart
    </button> -->
    <div class="description">{{ description }}<br /></div>
    <div class="img">
      <img :src="require('../assets/' + img)" width="150" height="120" />
    </div>
    <!-- <Selector :lable="selectLable" :value="selectValue"></Selector> -->
    <el-button @click="$emit('add-to-cart', id)">Add To Cart</el-button>
    <router-link :to="'/product/' + id"
      ><el-button type="info">Details</el-button></router-link
    >
    <!-- <CounterBTN :num="countBTN"></CounterBTN> -->
    <span>{{ countBTN }}</span>
  </div>
</template>
<script>
// import CounterBTN from "./CounterBTN.vue";
// import Selector from "./Selector.vue";
export default {
  name: "product",
  props: ["description", "img", "id", "countBTN", "selectValue", "selectLable"],
  // components: { Selector },
  methods: {
    data() {
      return {
        selectValue: "",
        selectLable: "",
        // CountBTN: 1,
      };
    },
  },
  computes: {
    get: function() {
      return this.CountBTN;
    },
    set: function(count) {
      this.CountBTN = count;
      return count;
    },
  },
};
</script>

<style scoped>
.product {
  border: 2px solid black;
  border-radius: 15px;
  float: left;
  /*size of each product*/
  height: 200px;
  width: 250px;
  /*spaces between product*/
  margin: 10px;
  /* spaces inside each box of product */
  padding: 10px;
}
.description {
  color: antiquewhite;
}
.add-btn {
  background-color: rgb(9, 196, 209);
  color: white;
  font-size: 20px;
  border-radius: 10px;
  width: 100%;
}
</style>

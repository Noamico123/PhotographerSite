<template>
  <div style="float:right;margin-left:20px">
    <img
      src="../assets/cart.jpg"
      width="50"
      type="warning"
      @click="getData()"
    />
    <router-link to="/cartPage">cartPage</router-link>
    <div style="color: white">{{ count }}</div>
  </div>
</template>

<style>
.prodList {
  color: antiquewhite;
  float: right;
  margin-left: 20px;
}
</style>

<script>
export default {
  name: "cart",
  props: ["count", "cartProducts"],
};
</script>

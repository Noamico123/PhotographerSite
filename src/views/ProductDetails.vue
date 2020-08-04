<template>
  <div>
    {{ product.longDescription }}
  </div>
</template>

<script>
// import products from "@/data/products.js";
export default {
  props: ["id"],
  data() {
    return { products: [] };
  },
  computed: {
    product() {
      return this.products.find((product) => product.id === +this.id);
    },
  },
  mounted() {
    this.$http.get("http://localhost:3000/").then((res) => {
      this.products = res.data;
    });
  },
};
</script>

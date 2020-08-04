<template>
  <div class="store">
    <cart :count="cartCount" :cart-products="cartProducts"></cart>
    <el-button @click="$emit('throw-all')">Throw All</el-button>
    <el-button>GET Data</el-button>
    <!-- <br /><br /> -->
    <div style="position: relative ;top: 10px;">
      <el-row :gutter="10">
        <!-- <el-row> -->
        <el-col
          :span="4"
          v-for="product in products"
          :key="product.id"
          :offset="1"
          style="margin-bottom:40px"
        >
          <product
            :description="product.description"
            :id="product.id"
            :img="product.img"
            @add-to-cart="addToCart"
            class="product"
          ></product>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
import Product from "@/components/Product.vue";
import { URL } from "@/services/config";

// import products from "@/data/products.js";

export default {
  components: { Cart, Product },
  name: "Store",
  methods: {
    getData() {
      this.$http.get(URL).then((res) => {
        this.products = res.data;
      });
    },
    addToCart(id) {
      this.cartCount++;
      const product = this.products.find((product) => product.id === id);
      this.cartProducts.push(product);
    },
    throwAll() {
      this.cartCount = 0;
      this.cartProducts.length = 0;
      alert("asdasd" + this.cartCount);
      // console.log(this.cartCount);
    },
  },
  data() {
    return {
      products: [],
      cartCount: 0,
      cartProducts: [],
    };
  },
  mounted() {
    this.getData();
  },
};
</script>

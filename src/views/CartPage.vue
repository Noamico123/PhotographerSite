<template>
  <ul class="prodList" style="color: white">
    <li v-for="cartProduct in cartProducts" :key="cartProduct.id">
      {{ cartProduct.description }}
    </li>
  </ul>
</template>

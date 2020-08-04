<template>
  <div id="app">
    <br />
    <section class="top">
      NIF
    </section>
    <div id="my_nav">
      <router-link to="/">Home</router-link>
      <router-link to="/store">Store</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <foot></foot>
  </div>
</template>

<script>
import Foot from "./components/Foot.vue";
export default {
  components: {
    Foot,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#my_nav {
  padding: 20px;
}

#my_nav a {
  margin-right: 30px;
  font-weight: bold;
  font-size: 3ex;
  color: #e9830f;
}

#my_nav a.router-link-exact-active {
  color: #ffe600;
}

h1 {
  font-size: 2em;
  text-align: center;
  color: aliceblue;
}

section {
  padding: 3em;
  min-height: 65vh;
  position: relative;
  box-sizing: border-box;
}

.top {
  /* margin: 10; */
  color: antiquewhite;
  font-size: 3em;
  background-image: url("./assets/cover.jpg");
  padding-top: 10%;
  min-height: 15vh;
  position: relative;
  box-sizing: border-box;
}

.first {
  background-image: url("./assets/buildings.jpeg");
}
.first h1 {
  color: #e23d0b;
}

.second {
  background-color: #67a7cc;
}

/* .slide_pic {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
} */

body {
  background: #666;
}

/* .VueCarousel-pagination {
  margin: auto;
  padding: 10px;
}
*/

/* .VueCarousel { */
/* float: left;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;*/
/* display: flex; */
/* height: 75vh; */
/* } */

.store {
  width: 75%;
  left: 150px;
  box-sizing: border-box;
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

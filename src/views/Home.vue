<template>
  <div class="home">
    <!-- <div data-aos="zoom-in"> -->
    <section>
      <img data-aos="zoom-in" alt="Vue logo" src="../assets/logo.png" />
      <h1 data-aos="zoom-in-up">Hello Fucker</h1>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </section>
    <section>
      <carousel></carousel>
    </section>
    <!-- </div> -->
    <!-- <section class="first">
      <h1>section1</h1>
    </section> -->
    <section data-aos="zoom-in-down" class="second">
      <h1>section2</h1>
      <img data-aos="zoom-in" src="../assets/people.jpeg" />
    </section>
    <!-- <foot></foot> -->
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
// import HelloWorld from "@/components/HelloWorld.vue";
// import Glider from "@/components/Glider.vue";
// ..
import Carousel from "@/components/Carousel.vue";
// import Foot from "@/components/Foot.vue";
AOS.init({
  duration: 1200,
});
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Carousel,
    // Foot,
    // Glider,
    //   HelloWorld,
  },
};
</script>

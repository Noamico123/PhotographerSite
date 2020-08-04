<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="../assets/la.jpg" alt="Los Angeles" />
        <div class="carousel-caption">
          <h3>Los Angeles</h3>
          <p>LA is always so much fun!</p>
        </div>
      </div>
      <div class="item">
        <img src="../assets/chicago.jpg" alt="Chicago" />
        <div class="carousel-caption">
          <h3>Chicago</h3>
          <p>Thank you, Chicago!</p>
        </div>
      </div>

      <div class="item">
        <img src="../assets/ny.jpg" alt="New York" />
        <div class="carousel-caption">
          <h3>New York</h3>
          <p>We love the Big Apple!</p>
        </div>
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <!-- <Carousel :per-page="1" :mouse-drag="false"> -->
  <!-- <carousel :controlls="true" :per-page="1" :scrollPerPage="true"> -->
  <!-- <slide>
      Slide 1 Content
    </slide>
    <slide style="background='src=../assets/1.jpg'">
      Slide 2 Content
    </slide> -->
  <!-- <slide class="slide_pic"
      ><img src="../assets/1.jpg" style="width: 300px; max-width: 100%"
    /></slide>
    <slide class="slide_pic"
      ><img src="../assets/20.jpg" style="width: 300px; max-width: 100%"
    /></slide> -->
  <!-- <slide class="slide_pic"><img src="../assets/30.jpg" alt=""/></slide> -->
  <!-- <slide class="slide_pic"><img src="../assets/40.jpg" alt=""/></slide> -->
  <!-- </carousel> -->
</template>

<script>
// import { Carousel, Slide } from "vue-carousel";
export default {
  name: "carousel",
  // components: { Carousel },
};
</script>

<template>
  <div class="carousel-container">
    <carousel :slides="slides" :interval="3000" indicators></carousel>
  </div>
  <LoginForm />
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/carousel/Carousel.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "WelcomeView",
  components: {
    LoginForm,
    Carousel,
  },
  data: () => ({
    slides: [
      "https://svgshare.com/i/hrA.svg",
      "https://svgshare.com/i/hrB.svg",
      "https://svgshare.com/i/hrV.svg",
    ],
  }),
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 49%;
  background-color: #00287a;
}
</style>

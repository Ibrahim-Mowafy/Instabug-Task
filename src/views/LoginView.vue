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
import { slideImages } from "../data/dummy";

export default {
  name: "WelcomeView",
  components: {
    LoginForm,
    Carousel,
  },
  data: () => ({
    slides: [...slideImages],
  }),
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 49%;
  background-color: #00287a;
}
</style>

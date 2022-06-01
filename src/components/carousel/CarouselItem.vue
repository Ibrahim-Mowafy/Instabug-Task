<template>
  <transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
    >
      <img :src="slide" alt="slide" />
      <p class="slide-text">{{ slideText[currentSlide] }}</p>
    </div>
  </transition>
</template>

<script>
import { slideText } from "../../data/dummy";
export default {
  emits: ["mouseenter", "mouseout"],
  data() {
    return {
      slideText,
    };
  },
  props: ["slide", "currentSlide", "index", "direction"],
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
};
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.carousel-item img {
  padding: 15px;
  width: 100%;
}

.slide-text {
  margin-top: 3rem;
  color: #fff;
  font-size: 1.7rem;
  text-align: center;
  font-family: inherit;
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>

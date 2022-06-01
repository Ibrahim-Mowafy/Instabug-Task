<template>
  <div class="container">
    <img class="not-found-image" src="../assets/404.png" alt="404" />
    <h1>404 - Page Not Found!</h1>
    <p>Sorry, that page doesn't exist. What would you like to do?</p>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fff;
  height: 100vh;
}

.not-found-image {
  margin-bottom: 7rem;
  height: 25rem;
}

h1 {
  margin-bottom: 2rem;
  color: #00287a;
}

p {
  color: #a6a6a6;
}
</style>

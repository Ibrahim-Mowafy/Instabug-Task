<template>
  <div class="container">
    <p class="container__greeting">
      Welcome to
      <span class="user">
        {{ userData }}
      </span>
    </p>
    <a class="container__btn" @click="onLogout">Logout</a>
  </div>
</template>

<script>
export default {
  name: "WelcomeView",
  data() {
    return {
      userData: localStorage.getItem("LoggedUser"),
    };
  },

  methods: {
    onLogout() {
      localStorage.removeItem("LoggedUser");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
  margin-top: 5rem;
  padding-inline: 2rem;
  align-items: center;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }

  &__greeting {
    font-size: 2rem;
  }
  .user {
    color: #09c;
    transition: color 0.3s;

    &:hover {
      color: #445065;
    }
  }

  &__btn {
    background-color: #f24220;
    transition: 0.3s;
    cursor: pointer;
    outline: none;
    border: transparent;
    border-radius: 4px;
    font-size: 1rem;
    padding: 0.8rem;
    color: #fff;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ff2a00;
    }
  }
}
</style>

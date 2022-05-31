<template>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 16px;
}

body {
  font-family: "ProximaNova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #445065;
  background-color: #f2f4f8;
}

main {
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
}
</style>

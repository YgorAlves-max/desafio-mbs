<script setup></script>

<template>
  <main class="c">
    <img class="c__item" src="src/assets/img/image.png" alt="" />
    <section class="c-menu">
      <h1>Desafio MSB</h1>
      <h1 class="c__item">Escolha alguns usuários abaixo 👇</h1>
      <RouterLink to="/login">login</RouterLink>
      <RouterLink to="/home">home</RouterLink>
    </section>
  </main>
</template>
<style lang="scss">
.c {
  &-menu {
    background-color: white;
    height: 250px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    position: relative;
    bottom: 80px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 16pt;
    }
  }
  &__item {
    width: 100%;
  }
}
</style>

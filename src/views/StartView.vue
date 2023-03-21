<script setup>
import ButtonComponent from "../components/ButtonComponent.vue";
</script>

<template>
  <main class="c">
    <img class="c__item" src="src/assets/img/image.png" alt="" />
    <section class="c-menu">
      <h1>Desafio MSB</h1>
      <h1>TO DO LSIT</h1>
      <div class="c__link">
        <ButtonComponent rota="login" text="Get Started"></ButtonComponent>
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.c {
  flex-direction: column;
  text-align: center;
  background-color: #F2F5FF;

  &-menu {
    background-color: #F2F5FF;
    height: 250px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    position: relative;
    bottom: 80px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-evenly;

    h1 {
      font-size: 16pt;
    }

    :nth-child(2) {
      font-weight: 700;
    }
  }

  &__link {
    display: flex;
    justify-content: center;
  }

  &__item {
    width: 100%;
  }
}
</style>

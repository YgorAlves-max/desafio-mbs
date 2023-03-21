<script setup>
let isActive = true;
let isActive2 = false;
function toggle() {
  isActive2 = !isActive2;
  isActive = !isActive;
}
</script>
<template>
  <main class="c">
    <div class="c-flex">
      <div class="c-back">
        <router-link to="/"><img style="width: 20px"
            src="../components/icons/botao-de-seta-para-a-esquerda-do-teclado.png" alt="Voltar" /></router-link>
      </div>
      <h1>Olá</h1>
    </div>
    <div class="c-menu">
      <div class="c__box css-selector" @click="toggle">
        <div class="boxItem">
          <RouterLink v-bind:class="{ ATIVADA: isActive, DESATIVADA: !isActive }" class="boxItem__item" to="schedule">
            Agenda
          </RouterLink>
        </div>
        <div class="boxItem">
          <RouterLink v-bind:class="{ ATIVADA: isActive2, DESATIVADA: !isActive2 }" class="boxItem__item note" to="note">
            Observação</RouterLink>
        </div>
      </div>
    </div>
    <RouterView />
  </main>
</template>
<style lang="scss" scoped>
.c {
  background-color: #f2f5ff;

  &-flex {
    padding: 10px;
  }

  &-back {
    text-align: initial;
  }

  &-menu {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  &__box {
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 5px;
    border-radius: 6px;
  }
}

.boxItem {
  height: 41px;
  width: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &__item {
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    text-decoration: none;
    color: black;
    font-size: 15px;
    font-weight: 500;
  }
}

.ATIVADA {
  background-color: white;
}

.DESATIVADA {
  background-color: transparent;
}

.css-selector {
  background: linear-gradient(84deg, #9c2cf3, #673cf6, #673cf6);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 59s ease infinite;
  -moz-animation: AnimationName 59s ease infinite;
  animation: AnimationName 59s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 51%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 51%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 51%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>

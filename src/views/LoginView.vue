<script setup>
import { useCountStore } from "../stores/counter";
import { storeToRefs } from "pinia";
import ButtonComponent from "../components/ButtonComponent.vue";
import ModalLoginComponent from "./ModalLoginView.vue";
import { ref, computed } from "vue";
const useStateUser = useCountStore();
useStateUser.userState();
const { data } = storeToRefs(useStateUser);
computed(() => data.value.data);
const openModal = ref(false);
const openModalReg = ref(false);
function modalOpenClick() {
  openModal.value = !openModal.value;
}
function modalOpenRegClick() {
  openModalReg.value = !openModalReg.value;
}
</script>

<template>
  <main class="c">
    <section class="c-menu">
      <h1>Login</h1>
      <ButtonComponent rota="" @button-event="modalOpenClick" text="Entrar"></ButtonComponent>
      <ButtonComponent rota="" @button-event="modalOpenRegClick" text="Cadastrar"></ButtonComponent>
      <ButtonComponent rota="/" text="Voltar"></ButtonComponent>
    </section>

    <ModalLoginComponent @register-event="modalOpenClick" v-if="openModal" :register="false"></ModalLoginComponent>
    <ModalLoginComponent @register-event="modalOpenRegClick" v-if="openModalReg" :register="true">
    </ModalLoginComponent>
  </main>
</template>
<style lang="scss" scoped>
.c {
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f2f5ff;

  &-menu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 15px;

    @media screen and (min-width: 768px) {
      width: 600px;
      margin: 0 auto;
    }
  }
}
</style>

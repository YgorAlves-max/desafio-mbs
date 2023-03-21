<script setup>
import { useCountStore } from "../stores/counter";
import { storeToRefs } from "pinia";
import ButtonComponent from "../components/ButtonComponent.vue";
import ModalLoginComponent from "../components/ModalLoginComponent.vue";

const useStateUser = useCountStore();
useStateUser.userState();
const { data } = storeToRefs(useStateUser);
setTimeout(() => {
  console.log(data.value.data);
}, 1000);
</script>
<script>
export default {
  data() {
    return {
      openModal: false,
      openModalReg: false,
    };
  },
  methods: {
    modalOpenClick() {
      this.openModal = !this.openModal;
    },
    modalOpenRegClick() {
      this.openModalReg = !this.openModalReg;
    },
  },
};
</script>
<template>
  <main class="c">
    <section class="c-menu">
      <h1>Login</h1>
      <ButtonComponent rota="" @button-event="modalOpenClick" text="Entrar"></ButtonComponent>
      <ButtonComponent rota="" @button-event="modalOpenRegClick" text="Cadastrar"></ButtonComponent>
      <ButtonComponent rota="/" text="Voltar"></ButtonComponent>
    </section>

    <ModalLoginComponent @register-event="modalOpenClick" v-if="this.openModal" :register="false"></ModalLoginComponent>
    <ModalLoginComponent @register-event="modalOpenRegClick" v-if="this.openModalReg" :register="true"></ModalLoginComponent>
  </main>
</template>
<style lang="scss" scoped>
.c {
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #F2F5FF;

  &-menu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 15px;
  }
}
</style>

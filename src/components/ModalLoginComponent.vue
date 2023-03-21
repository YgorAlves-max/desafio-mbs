<script setup>
import "./styles/styles.scss";
import { useCountStore } from "../stores/counter";
import ButtonComponent from "./ButtonComponent.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import router from "../router";

const useStateUser = useCountStore();

const name = ref("");
const avatar = ref("");
const email = ref("");
const password = ref("");
let invalid = ref(false);

function submitRegisterUser() {
  const payload = {
    name: name.value,
    avatar: avatar.value,
    login: email.value,
    password: password.value,
    active: false,
  };
  if (!name.value || !email.value || !password.value) {
    console.log("invalido");
    invalid.value = true;
  } else {
    invalid.value = false;
    useStateUser.registerUser(payload);
  }
}
const { data } = storeToRefs(useStateUser);

const dados = data.value.data;
let modalInvalid = ref(false);

function confirmLoginUser() {
  const payload = {
    loginPay: name.value,
    passwordPay: password.value,
  };
  useStateUser.userState(payload);
  const logine = dados.filter((e) => {
    return e.login.includes(payload.loginPay), e.password.includes(payload.passwordPay);
  });
  console.log(payload);
  if (
    logine[0].login === payload.loginPay &&
    logine[0].password === payload.passwordPay
  ) {
    router.push({ name: "home", parms: { user: payload.loginPay } });
  } else {
    modalInvalid.value = true;
  }
}
</script>
<script>
export default {
  props: ["rota", "text", "register"],
  methods: {
    submit() {
      this.$emit("registerEvent");
    },
  },
};
</script>
<template>
  <section class="c__ModalOpened">
    <main class="c__Modal css-selector-Modal">
      <div class="close" @click="$emit('registerEvent')">❌</div>
      <div class="c">
        <div class="menu">
          <label v-if="register" for="Username">Usuario</label>
          <label v-if="!register" for="Username">Email</label>
          <input
            v-model="name"
            class="menu__item"
            type="text"
            name="Username"
            id="username"
            required
          />
          <p v-if="invalid" v-bind:class="{ erro: invalid }">Invalido ❌</p>
        </div>
        <div class="menu">
          <label for="Password">Senha</label>
          <input
            v-model="password"
            class="menu__item"
            type="text"
            name="Password"
            required
          />
          <p v-if="invalid" v-bind:class="{ erro: invalid }">Invalido ❌</p>
        </div>
        <div v-if="register">
          <div class="menu">
            <label for="Email">Email</label>
            <input v-model="email" class="menu__item" type="text" name="Email" required />
            <p v-if="invalid" v-bind:class="{ erro: invalid }">Invalido ❌</p>
          </div>
        </div>
        <div class="modalInvalid" v-if="modalInvalid">Digite o usuario e senha!</div>
        <div class="menu">
          <ButtonComponent
            v-if="register"
            @button-event="submitRegisterUser"
            rota=""
            text="Cadastar"
          ></ButtonComponent>
          <ButtonComponent
            v-if="!register"
            @button-event="confirmLoginUser"
            rota=""
            text="Entrar"
          ></ButtonComponent>
        </div>
      </div>
    </main>
  </section>
</template>
<style lang="scss" scoped>
.close {
  display: flex;
  justify-content: flex-end;
}

.erro {
  text-align: initial;
  color: red;
  font-weight: 600;
}
</style>

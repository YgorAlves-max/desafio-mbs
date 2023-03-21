<script setup>
import { useCountStore } from "../stores/counter";
import { storeToRefs } from "pinia";
import "./styles/styles.scss";
import { computed, ref } from "vue";
const useStateUser = useCountStore();
useStateUser.taskStaste();

const { data } = storeToRefs(useStateUser);

let cardOpen = ref(false);

const name = ref("");
const descricao = ref("");

function toggle(item) {
  const atualizarPayload = {
    done: !item.done,
  };
  useStateUser.atulizarTasks(atualizarPayload, item.id);
  useStateUser.registerTasks(item);
}

function openAddCard() {
  cardOpen.value = !cardOpen.value;
}

function addTask() {
  const payload = {
    name: name.value,
    descricao: descricao.value,
  };
  if (name.value && descricao.value != "") {
    useStateUser.registerTasks(payload);
    setTimeout(() => {
      useStateUser.taskStaste();
    }, 1000);
  }
  cardOpen.value = !cardOpen.value;
}
function deletaTask(item) {
  useStateUser.deleteTasks(item.id);
  setTimeout(() => {
    useStateUser.taskStaste();
  }, 1000);
}
const selected = ref('Todos');
const filtreItems = computed(() => {
  return data.value.data
})
function selectOptions() {
  const payload = {
    done: selected.value,
  }
  setTimeout(() => {
    useStateUser.taskStaste();
  }, 1100);
  if (payload.done == '') {
    useStateUser.doneTasks(payload)
  } else {
    useStateUser.doneTasks(payload)
  }
}
</script>
<template>
  <main class="cont">
    <select class="select" @change="selectOptions" v-model="selected">
      Filtro
      <option value="Todos">Todos</option>
      <option :value="false">Ativos</option>
      <option :value="true">Conlcuido</option>
    </select>
    <div class="cont-menu">
      <section v-for="item of filtreItems " :key="item.id" class="cont-content">
        <div class="container css-selector">
          <div class="container-title">
            <label class="container-label" :for="item.name">
              Reunião com {{ item.name }}</label>
            <input v-model="item.done" @click="toggle(item)" :name="item.name" type="checkbox" />
          </div>
          <div>
            <div class="container-underline"></div>
            <div class="descricao">
              <p>{{ item.descricao }}</p>
              <div class="deletar" @click="deletaTask(item)">🗑️</div>

            </div>
          </div>
        </div>
      </section>
      <div class="btn" @click="openAddCard">
        <img src="../components/icons/plus-icon.svg" alt="" />
      </div>
    </div>
    <section class="c__Modal" v-if="cardOpen">
      <div class="c__ModalOpened">
        <div class="addModal">
          <section class="addModal-modal">
            <div class="addModal-dsc">
              <h2>Nome:</h2>
              <input v-model="name" class="addModal-input" />
            </div>
            <div class="addModal-dsc">
              <h2>Descrição:</h2>
              <textarea v-model="descricao" class="addModal-addDes"></textarea>
            </div>

            <div class="flex">
              <button @click="openAddCard">Close Card</button>
              <button class="adicionar" @click="addTask">Adicionar</button>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.addModal {
  width: 70%;
  background-color: #7e64ff;
  border-radius: 30px;

  @media screen and (min-width:768px) {
    width: 600px;
  }

  &-input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    box-shadow: none;
    border: none;
  }

  &-dsc {
    text-align: initial;
  }

  &-modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
    padding: 35px 20px;
  }

  &-addDes {
    padding: 10px;
    width: 100%;
    height: 150px;
    border-radius: 10px;
    box-shadow: none;
    border: none;
  }

  :focus-visible {
    outline: none;
  }
}

.flex {
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    box-shadow: none;
    border: none;
  }

  :nth-child(1) {
    background-color: salmon;
  }

  :nth-child(2) {
    background-color: rgb(71, 194, 71);
  }
}

.cont {
  padding: 20px;

  h1 {
    text-align: center;
  }

  &-menu {
    width: 100%;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  &-content {
    padding: 10px 35px;
  }
}

.btn {
  cursor: pointer;
  position: fixed;
  bottom: 0px;
  z-index: 105;
  scale: 0.4;
  left: 76%;
  background: #c4b0ff;
  border-radius: 50%;
  color: white;

  img {
    scale: 0.6;
  }
}

@media screen and (min-width: 768px) {
  .btn {
    top: -10px;
    bottom: inherit;
  }
}

.descricao {
  display: flex;
  justify-content: space-between;
  transition: transform 0.3s;
  transform-origin: top left;
  text-align: initial;
}

.deletar {
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}

.container {
  color: white;
  padding: 10px;
  box-shadow: 0px 2px 4px 2px #585454ab;
  border-radius: 16px;

  &-title {
    display: flex;
    justify-content: space-between;
  }

  &-label {
    text-align: initial;
    overflow-wrap: anywhere;
  }

  &-underline {
    border-bottom: 1px solid white;
  }
}

.css-selector {
  background: linear-gradient(53deg, #9c2cf3, #8134f5, #693bf6, #5142f7, #3a49f9);
  background-size: 1000% 1000%;

  -webkit-animation: AnimationName 0s ease infinite;
  -moz-animation: AnimationName 0s ease infinite;
  animation: AnimationName 0s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 63%;
  }

  50% {
    background-position: 100% 38%;
  }

  100% {
    background-position: 0% 63%;
  }
}

@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 63%;
  }

  50% {
    background-position: 100% 38%;
  }

  100% {
    background-position: 0% 63%;
  }
}

@keyframes AnimationName {
  0% {
    background-position: 0% 63%;
  }

  50% {
    background-position: 100% 38%;
  }

  100% {
    background-position: 0% 63%;
  }
}

:root {
  --form-control-disabled: #959495;
}

input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  background-color: transparent;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  cursor: pointer;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  background-color: CanvasText;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

input[type="checkbox"]:focus {
  outline: none;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
  background: white;
}

input[type="checkbox"]:disabled {
  --form-control-color: var(--form-control-disabled);
  color: var(--form-control-disabled);
  cursor: not-allowed;
}
</style>

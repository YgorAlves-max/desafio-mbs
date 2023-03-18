<script setup>
import { useCountStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const useStateUser = useCountStore();
useStateUser.saveState();
const { data } = storeToRefs(useStateUser);
console.log(data.value);
</script>

<template>
  <main>
    <h1>To na login</h1>
    <router-link to="/">Voltar</router-link>
  </main>
</template>

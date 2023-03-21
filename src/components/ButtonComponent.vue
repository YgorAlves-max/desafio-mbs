<script>
export default {
  props: ["text", "rota", "disabled"],
  methods: {
    submit() {
      this.$emit("buttonEvent");
    },
  },
};
</script>

<template>
  <RouterLink :id="text" :to="rota" class="c__button css-selector" @click="$emit('buttonEvent')">{{ text }}</RouterLink>
</template>

<style lang="scss" scoped>
.c {
  display: flex;
  flex-direction: column;
  text-align: center;

  &__button {
    width: 70%;
    padding: 15px;
    border-radius: 10px;
    color: white;
    font-weight: 700;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-size: 16pt;
    text-align: center;
    transition: ease-in-out 300ms;
  }
}

:hover {
  transition: ease-in-out 300ms;
  scale: 1.1;
}

.css-selector {
  background: linear-gradient(241deg, #5a46fc, #725fff, #5440f6);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 0s ease infinite;
  -moz-animation: AnimationName 0s ease infinite;
  -o-animation: AnimationName 0s ease infinite;
  animation: AnimationName 0s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 46%;
  }

  50% {
    background-position: 100% 55%;
  }

  100% {
    background-position: 0% 46%;
  }
}

@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 46%;
  }

  50% {
    background-position: 100% 55%;
  }

  100% {
    background-position: 0% 46%;
  }
}

@-o-keyframes AnimationName {
  0% {
    background-position: 0% 46%;
  }

  50% {
    background-position: 100% 55%;
  }

  100% {
    background-position: 0% 46%;
  }
}

@keyframes AnimationName {
  0% {
    background-position: 0% 46%;
  }

  50% {
    background-position: 100% 55%;
  }

  100% {
    background-position: 0% 46%;
  }
}
</style>

<template>
  <div class="about">
    <div v-for="todo in todos" :key="todo.id">
      <div class="flex items-center justify-center">
        <div class="max-w-lg w-full rounded-lg shadow-lg p-4 m-3 bg-indigo-800">
          <h3 class="font-semibold text-lg text-white tracking-wide">
            {{ todo.name }}
          </h3>
          <p class="text-white my-1">
            {{ todo.email }}
          </p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: null,
    };
  },
  mounted() {
    console.log("aqui va el codigo mounted");
    this.getTodos();
  },
  methods: {
    getTodos() {
      console.log("aqui va el codigo method");
      axios
        .get("http://127.0.0.1:8000/api/events/165/subscribers")
        .then((response) => {
          this.todos = response.data;
        })
        .catch();
    },
  },
};
</script>

<style>
* {
  font-family: 'Castoro', serif; 
}
</style>

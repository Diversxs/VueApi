<template>
  <div class="about">
    <div v-for="event in events" v-bind:key="event" class="divgrande">
      <div class="uno">
        <div class="max-w-lg w-full rounded-lg shadow-lg p-4 m-3 bg-indigo-800">
          <h3 class="font-semibold text-lg text-white tracking-wide">
            {{ event.title }}
          </h3>
          <p class="text-white my-1">
            {{ event.description }}
          </p>
          <p class="text-white my-1">Capacity: {{ event.capacity }}</p>
          <button class="button" @click="getId(event.id)">Show me users</button>
        </div>
      </div>
    </div>
    <h2>Usuarios registrados:</h2>
    <div v-for="user in subscribers" v-bind:key="user">
      <p>Id: {{ user.id }}, Name: {{ user.name }}</p>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      events: [],
      subscribers: [],
    };
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    getEvents() {
      axios.get("http://127.0.0.1:8000/api/events").then((response) => {
        this.events = response.data;
      });
    },

    getId(id) {
      axios
        .get(`http://127.0.0.1:8000/api/events/${id}/subscribers`)
        .then((response) => {
          this.subscribers = response.data;
        });
    },
  },
};
</script>

<style>
.divgrande {
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 15px;
}

.uno {
  border: 1px solid black;
  width: 400px;
  padding: 20px;
  border-radius: 20px;
}

.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
</style>

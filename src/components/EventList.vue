<template>
  <div class="about">
    
    <div v-for="event in events" :key="event.id" class="divgrande">
      <div class="uno" >
        <div class="max-w-lg w-full rounded-lg shadow-lg p-4 m-3 bg-indigo-800">
          <router-link to="/bookedbyusers"><h3 class="font-semibold text-lg text-white tracking-wide">
            {{ event.title }}
          </h3></router-link>
          <p class="text-white my-1">
            {{ event.description }}
          </p>
          <p class="text-white my-1">Capacity: {{event.capacity }}</p>
          <button v-on:click="getId()">Show me</button>
          
          <div >
             <p> {{ data.user }}</p>
             
          </div>
         
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
      events: null,
    };
  },
  mounted() {
    console.log("aqui va el codigo mounted");
    this.getEvents();
  },
  methods: {
    getEvents() {
      console.log("aqui va el codigo method");
      axios
        .get("http://127.0.0.1:8000/api/events")
        .then((response) => {
          this.events = response.data;
        })
        .catch();
    },
    
    getId(id) {
      console.log("aqui va el codigo id");
      axios
        .get(`http://127.0.0.1:8000/api/events/${id}/subscribers`)
        .then((response) => {
          this.todos = response.data;
        })
        .catch();
    },
  },
};
</script>

<style>

.divgrande {
display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
}

.uno {
  border: 1px solid black;
  width: 300px;
  
}
</style>
<template>

<EventsCom/>



</template>

<script>
import EventsCom from "../components/EventsCom.vue"
import axios from "axios";

export default {

  name:'App',
  components:{
    EventsCom
  },
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

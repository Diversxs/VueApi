<template>


<h1>HOLA MUNDO</h1>
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
  
   
</template>
<script>
export default {
  name: 'EventsCom',
   data() {
    return {
      events: [],
      subscribers: [],
    }

}
}

</script>

<style >

</style>

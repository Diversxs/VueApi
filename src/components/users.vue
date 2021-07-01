<template>
<h2>Usuarios registrados:</h2>
    <div v-for="user in subscribers" v-bind:key="user">
      <p>Id: {{ user.id }}, Name: {{ user.name }}</p>
      
    </div>
  
   
</template>
<script>


</script>

<style >

</style>

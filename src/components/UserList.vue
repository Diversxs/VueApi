<template>
  <div class="about">
    <h2>Usuarios registrados en {{  }}</h2>
    <div v-for="user in subscribers" v-bind:key="user">
      <p>Id: {{ user.id }}, Name: {{ user.name }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userList",
    props: [    
    'subscribers',
    ]
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

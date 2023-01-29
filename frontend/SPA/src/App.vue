<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import SideBar from './components/Navigation/SideBar.vue';
import Header from './components/Navigation/Header.vue'
</script>

<template>
  <div class="base">
    <div class="container">
      <div class="header">
        <Header/>
      </div>
      <div class="maincontent">
        <RouterView/>
      </div>
      <div class="sidebar">
        <SideBar/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    min-width: 100vw;
  }
  .header {
    margin: 20px;
    background-color: #11181d;
    padding: 5px;
    /* border: aqua;
    border-style: solid; */
  }
  .maincontent {
    margin: 20px;
    background-color: #11181d;
    padding: 10px;
    /* border-color: cornflowerblue;
    border-style: solid; */
  }

  .sidebar {
    margin-top: 20px;
    padding: 20px;
    background-color: #11181d;
    /* border:lawngreen;
	  border-style: solid; */
  }
</style>

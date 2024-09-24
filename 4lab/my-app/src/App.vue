<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <UserCard :userData="userData" />
    <UserList :userData="userData" />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import UserCard from "./components/UserCard.vue";
import UserList from "./components/UserList.vue";

@Options({
  components: {
    HelloWorld,
    UserCard,
    UserList,
  },
})
export default class App extends Vue {
  userData = {
    firstName: "Камала",
    lastName: "Харріс",
    age: 59,
    gender: "жінка",
    position: "політична діячка",
    hobbies: ["зумерські едіти", "читання", "політика"],
    photo: require("./assets/userData.jpg"),
  };
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

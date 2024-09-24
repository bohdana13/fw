<template>
  <div>
    <div class="toolbar">
      <button @click="filterGender('чоловік')">Чоловіки</button>
      <button @click="filterGender('жінка')">Жінки</button>
      <button @click="resetFilter">Показати всіх</button>
    </div>

    <div v-if="filteredUsers.length > 0">
      <UserCard v-for="user in filteredUsers" :key="user.id" :userData="user" />
    </div>
    <p v-else>Список юзерів пустий</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import UserCard from "./UserCard.vue";

export default defineComponent({
  name: "UserList",
  components: {
    UserCard,
  },
  setup() {
    const users = ref([
      {
        id: 1,
        firstName: "Джон",
        lastName: "Уільямс",
        gender: "чоловік",
        age: 15,
        position: "веб-розробник",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        hobbies: [],
      },
      {
        id: 2,
        firstName: "Кейт",
        lastName: "Сміт",
        gender: "жінка",
        age: 30,
        position: "дизайнер",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
        hobbies: ["малювання", "біг"],
      },

]);

    const genderFilter = ref<string | null>(null);

    const filteredUsers = computed(() => {
      if (!genderFilter.value) return users.value;
      return users.value.filter((user) => user.gender === genderFilter.value);
    });

    const filterGender = (gender: string) => {
      genderFilter.value = gender;
    };

    const resetFilter = () => {
      genderFilter.value = null;
    };

    return {
      users,
      filteredUsers,
      filterGender,
      resetFilter,
    };
  },
});
</script>

<style scoped>
.toolbar {
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  margin-right: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #ddd;
}
</style>

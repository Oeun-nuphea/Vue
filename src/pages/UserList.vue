<template>
  <div class="my-5 container">
    <h2 class="mb-3">Users Info</h2>

    <!-- Search Section -->
    <div class="d-flex justify-content-between align-items-center bg-primary p-2 mb-3">
      <div class="d-flex">
        <button class="btn btn-danger btn-sm" @click="resetList">
          <i class="bi bi-arrow-clockwise"></i> Reset
        </button>
        <router-link to="/create" class="btn btn-success btn-sm mx-3">
          <i class="bi bi-plus-circle"></i> Add More
        </router-link>
      </div>

      <!-- Search Input -->
      <form @submit.prevent>
        <div class="input-group">
          <input
            type="text"
            v-model="searchTerm"
            @input="searchUsers"
            class="form-control shadow-none"
            placeholder="Search for names..."
            aria-label="Search"
          />
          <label class="input-group-text">
            <i class="bi bi-search"></i>
          </label>
        </div>
      </form>
    </div>

    <!-- Users Table -->
    <table class="table table-bordered text-center">
      <thead class="table-dark">
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in filteredUsers" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="btn btn-info btn-sm">Edit</button>
            <button class="btn btn-danger btn-sm mx-2" @click="deleteUser(user.id)">
              Delete
            </button>
          </td>
        </tr>
        <tr v-if="filteredUsers.length === 0">
          <td colspan="7">No users found.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const users = ref([]);
const searchTerm = ref('');

// Fetch users from /db.json
async function fetchUsers() {
  try {
    const res = await fetch('/db.json');
    const data = await res.json();
    users.value = data.users || [];
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
}

function deleteUser(id) {
  users.value = users.value.filter(user => user.id !== id);
}

// Reset search and reload users
function resetList() {
  searchTerm.value = '';
  fetchUsers();
}

// Computed list filtered by searchTerm (case-insensitive)
const filteredUsers = computed(() => {
  if (!searchTerm.value.trim()) return users.value;
  return users.value.filter(user =>
    user.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

// Fetch on mount
onMounted(fetchUsers);

// Search triggers computed automatically, no need for extra function
function searchUsers() {
  // This is empty because computed filteredUsers reacts to searchTerm
}
</script>

<style scoped>
.my-5 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>

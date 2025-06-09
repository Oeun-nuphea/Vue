<template>
  <div class="container mt-5">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center bg-primary text-white p-3 rounded shadow-sm mb-4">
      <a href="/" class="btn btn-danger btn-sm">
        <i class="bi bi-arrow-clockwise"></i> Back to list
      </a>
      <h3 class="mb-0">Create User</h3>
    </div>

    <!-- Form -->
    <form class="p-4 bg-light border rounded shadow-sm" method="POST" @submit="handleSave">
      <!-- User Name -->
      <div class="row mb-3 align-items-center">
        <label for="name" class="col-sm-2 col-form-label fw-bold">User Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            placeholder="Enter name"
          />
        </div>
      </div>

      <!-- Gender -->
      <div class="row mb-3 align-items-center">
        <label for="gender" class="col-sm-2 col-form-label fw-bold">User Gender</label>
        <div class="col-sm-10">
          <select id="gender" name="gender" class="form-select">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <!-- Age -->
      <div class="row mb-3 align-items-center">
        <label for="age" class="col-sm-2 col-form-label fw-bold">User Age</label>
        <div class="col-sm-10">
          <input
            type="number"
            id="age"
            name="age"
            class="form-control"
            placeholder="Enter age"
            min="0"
          />
        </div>
      </div>

      <!-- Email -->
      <div class="row mb-3 align-items-center">
        <label for="email" class="col-sm-2 col-form-label fw-bold">User Email</label>
        <div class="col-sm-10">
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            placeholder="Enter email"
            required
          />
        </div>
      </div>

      <!-- Save Button -->
      <div class="text-end">
        <button type="submit" @submit="handleSave" class="btn btn-success px-4">
          <i class="bi bi-save"></i> Save
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserApi } from '../services/api';
    const { createUser } = useUserApi();
    const router = useRouter();
    const handleSave = async (e) =>{
        e.preventDefault();
        let data = new FormData(e.target);

        let user = {
            'id': Date.now().toString(),
            'name': data.get('name'),
            'gender': data.get('gender'),
            'age': data.get('age'),
            'email': data.get('email'),
        }

        try{
            await createUser(user);
            router.push('/');   //redirect to /
            alert('User added success')
        }catch(error){
            console.log(error);
        }
    }

</script>

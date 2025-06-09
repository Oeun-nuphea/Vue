<template>
    <div class="container">
        <header class="p-4 bg-dark d-flex align-items-center justify-content-between text-light">
            <h3>Vue with JSON server</h3>
            <nav>
                <router-link to="/admin/user">Use</router-link> |
                <router-link to="/admin/student">Student</router-link>
            </nav>
        </header>
    </div>

    <div class="main-content">
        <div class="container">
            <router-view/>  
            <!-- router-view is used for catch each component from children -->
        </div>
    </div>
</template>

<script setup>

</script>
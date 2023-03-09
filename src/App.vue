<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/signin" v-if="!isLoggedIn">Login</RouterLink>
    <RouterLink to="/register" v-if="!isLoggedIn">Register</RouterLink>
    <RouterLink to="/feed" v-if="isLoggedIn">Feed</RouterLink>
    <RouterLink to="/adduser" v-if="isLoggedIn">Add User</RouterLink>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("signin")
  });
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
  text-align: left;
}

nav a {
  text-decoration: none;
  color: #333;
  padding: 10px;
}

nav a:hover {
  background-color: #ddd;
}

button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>

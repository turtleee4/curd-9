<template>
    <h1>Sign-In</h1>
    <div class="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
        </div>
        <div v-if="errMsg" class="alert alert-danger" role="alert">
            {{ errMsg }}
        </div>
        <button type="button" class="btn btn-primary" @click="SignIn">Login</button>
        <button type="button" class="btn btn-danger" @click="signInWithGoogle">Google</button>
        <button type="button" class="btn btn-secondary" @click="regis">Register</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from 'vue-router';
const router = useRouter();
const email = ref("");
const password = ref("");
const errMsg = ref();
const regis = () => {
    router.push("register")
}
const SignIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Success Sign In");
            router.push("feed")
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-passwordd":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
        });
};
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("feed");
        })
        .catch((error) => {

        });
};

</script>
<style scoped>
h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-shadow: 1px 1px #fff;
}
</style> 
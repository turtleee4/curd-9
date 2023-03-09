<template>
    <h1>Register</h1>
    <div class="d-flex justify-content-center">
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password"
                    required>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary" @click="register">Submit</button>
                <button type="button" class="btn btn-secondary" @click="signInWithGoogle">Google</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'vue-router';
const router = useRouter();
const email = ref("");
const password = ref("");
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Success Register");
            router.push("feed")
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
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
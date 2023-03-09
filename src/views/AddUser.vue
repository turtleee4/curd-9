<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 offset-md-3 my-5">
                <h2 class="mb-4">Add User Info</h2>
                <form @submit.prevent="createUsers">
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="อีเมล" v-model="email" required />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="ชื่อ" v-model="name" required />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="เบอร์โทรศัพท์" v-model="tel" required />
                    </div>
                    <button class="btn btn-primary">สร้างผู้ใช้งาน</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import UserRef from "../firebase";
import { addDoc } from "firebase/firestore";
export default {
    data() {
        return {
            email: null,
            name: null,
            tel: null,
        };
    },
    methods: {
        async createUsers() {
            console.log("Creating Document");
            const addedDoc = await addDoc(UserRef, this.$data);
            alert("Document created successfully!");
            console.log(addedDoc);
            this.$router.push("feed");
        },
    },
};
</script>
  
<style></style>
<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h2>Edit User info</h2>
                    <form @submit.prevent="updateUser">
                        <div class="form-group">
                            <input type="text" class="form-control mb-2" placeholder="Email" v-model="UserInfo.email" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control mb-2" placeholder="Name" v-model="UserInfo.name" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control mb-2" placeholder="Tel" v-model="UserInfo.tel" />
                        </div>
                        <button class="btn btn-primary">Update User</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import UserRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
    data() {
        return {
            selectedUser: {},
            userId: null,
            docRef: null,
            UserInfo: {
                email: null,
                name: null,
                tel: null,
            },
        };
    },
    methods: {
        async getUser() {
            let userrRef = doc(UserRef, this.userId);
            this.docRef = userrRef;
            let user = await getDoc(this.docRef);
            let userData = user.data();
            this.UserInfo.email = userData.email;
            this.UserInfo.name = userData.name;
            this.UserInfo.tel = userData.tel;
        },
        async updateUser() {
            await setDoc(this.docRef, this.UserInfo);
            alert(
                `The user with ID of ${this.userId} has been updated successfully!`
            );
            this.$router.push("/");
        },
    },
    created() {
        let userId = this.$route.params.userId;
        this.userId = userId;
        this.getUser();
    },
};
</script>
  
<style></style>
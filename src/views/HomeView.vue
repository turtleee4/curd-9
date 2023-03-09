<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3 text-center">
                <h1 class="display-4">Welcome to My Website</h1>
                <p class="lead">Hello If You Want To Sign In Please Use <br>
                    Email : test@gmail.com <br>
                    Password : 123456789 <br>
                    Or Register and remember your email and password<br>
                    when you sign-in you will see hidden navbar <br>
                    1.Adduser for Create info <br>
                    2.Feed for Read , Update , Delete info <br>

                </p>
                <h1 style="color: red;">!!!!3.If you want to use please AddUser Info first!!!!</h1>

            </div>
        </div>
    </div>
</template>
  
<script>
import UserRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";


export default {
    name: "Home",
    components: {},
    data() {
        return {
            users: [],
            selectedDoc: null,
        };
    },
    methods: {
        async fetchUsers() {
            let usersSnapShot = await getDocs(UserRef);
            let users = [];
            usersSnapShot.forEach((user) => {
                let userData = user.data();
                userData.id = user.id;
                users.push(userData);
            });
            console.log(users);
            this.users = users;
        },
        async deleteUser(userId) {
            let userRef = doc(UserRef, userId);
            await deleteDoc(userRef);
            alert("User deleted successully!");
            this.$router.go();
        },
    },
    created() {
        this.fetchUsers();
    },
};
</script>
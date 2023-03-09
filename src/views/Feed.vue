<template>
  <div class="home">
    <h1 class="my-4">User info</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ul class="list-group">
            <li v-for="user in users" :key="user.id" class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    ">
              <div>
                <h5 class="mb-0">อีเมล์ : {{ user.email }}</h5>
                <small class="text-muted">ชื่อ : {{ user.name }}</small><br>
                <small class="text-muted">เบอร์โทรศัพท์ : {{ user.tel }}</small>
              </div>
              <span class="badge bg-primary rounded-pill">
                <router-link :to="{ path: `/users/${user.id}` }" class="btn btn-sm btn-primary me-2">Edit</router-link>
                <a href="#" class="btn btn-sm btn-danger" @click="deleteUser(user.id)">Delete</a>
              </span>
            </li>
          </ul>
        </div>
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
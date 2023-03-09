import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: () => import('../views/AddUser.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/edituser',
      name: 'edit',
      component: () => import('../views/EditUser.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('../views/Feed.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: "/users/:userId",
      name: "edituser",
      component: () => import('../views/EditUser.vue'),
      meta: {
        requiresAuth: true,
      },
    }

  ],
});
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })

};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("กรุณา Sign In")
      next("signin");
    }

  } else {
    next();
  }
});
export default router

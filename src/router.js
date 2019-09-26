import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import Login from "./views/Login.vue";
import Logout from './views/Logout.vue';
import Register from "./views/Register.vue";
import PasswordChange from "./views/PasswordChange.vue";
import RegisterStudent from "./views/RegisterStudent.vue";
import stAuth from "./auth/stAuthService";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"/logout",
      name:"logout",
      component:Logout
    },
    {
      path:"/register",
      name:"register",
      component:Register
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/passwordchange",
      name: "passwordchange",
      component: PasswordChange
    },
    {
      path: "/registerstudent",
      name: "registerstudent",
      component: RegisterStudent
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/" || 
      to.path === "/login" ||
      to.path === "/register" ||
      stAuth.isAuthenticated()
      ) {
    return next();
  }

  router.push('login');
  //stAuth.login({ target: to.fullPath });
});

export default router;

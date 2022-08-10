import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "@/components/HomeComponent";
import LoginComponent from "@/components/LoginComponent";
import AboutComponent from "@/components/AboutComponent";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/login',
    name: 'LoginComponent',
    component: LoginComponent
  },
  {
    path: '/about',
    name: 'AboutComponent',
    component: AboutComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

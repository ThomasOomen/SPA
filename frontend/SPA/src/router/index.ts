import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/Login/LoginView.vue')
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/expenses",
      name: 'expenses',
      component: () => import('../components/Expenses/ExpensesMain.vue')
    },
    {
      path: "/webscraper",
      name: 'webscraper',
      component: () => import('../components/WebScraperComponents/WebScraperMain.vue')
    },
    {
      path: "/strava",
      name: 'strava',
      component: () => import('../components/StravaComponents/StravaDashboard.vue')
    },
    {
      path: "/strava/activities",
      name: 'strava/activities',
      component: () => import('../components/StravaComponents/StravaActivities.vue')
    },
    {
      path: "/duolingo",
      name: 'duolingo',
      component: () => import('../components/DuolingoComponents/DuoLingoMain.vue')
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: () => import("../components/ErrorComponents/NotFound.vue"),
    },
  ],
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href // '/not/found'

export default router;

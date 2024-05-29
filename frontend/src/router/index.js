import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainView.vue'
import LeaderboardView from '../views/LeaderboardView.vue'
import BonushuntsView from '../views/BonushuntsView.vue'
import ChallengesView from '../views/ChallengesView.vue'
import GiveawaysView from '../views/GiveawaysView.vue'
import SurvivorView from '../views/SurvivorView.vue'
import VIPSpinsView from '../views/VIPSpinsView.vue'
import TournamentView from '../views/TournamentView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: LeaderboardView
  },
  {
    path: '/bonus-hunts',
    name: 'bonus-hunts',
    component: BonushuntsView
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: ChallengesView
  },
  {
    path: '/giveaways',
    name: 'giveaways',
    component: GiveawaysView
  },
  {
    path: '/survivor',
    name: 'survivor',
    component: SurvivorView
  },
  {
    path: '/vip-freespin',
    name: 'vip-freespin',
    component: VIPSpinsView
  },
  {
    path: '/tournament',
    name: 'tournament',
    component: TournamentView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

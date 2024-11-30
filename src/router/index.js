import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import TeamView from '../views/TeamView.vue';
import RobotView from '../views/RobotView.vue';
import GalleryView from '../views/GalleryView.vue';
import ValuesView from '../views/ValuesView.vue';
import CompetitionView from '../views/CompetitionView.vue';
import MissionView from '../views/MissionView.vue';
import SponsorsView from '../views/SponsorsView.vue';
import SponsorshipView from '../views/SponsorshipView.vue';

const routes = [
  { path: '/robo-site-testing/', component: HomeView },
  { path: '/robo-site-testing/team', component: TeamView },
  { path: '/robo-site-testing/robot', component: RobotView },
  { path: '/robo-site-testing/gallery', component: GalleryView },
  { path: '/robo-site-testing/values', component: ValuesView },
  { path: '/robo-site-testing/competition', component: CompetitionView },
  { path: '/robo-site-testing/mission', component: MissionView },
  { path: '/robo-site-testing/sponsors', component: SponsorsView },
  { path: '/robo-site-testing/sponsorship', component: SponsorshipView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
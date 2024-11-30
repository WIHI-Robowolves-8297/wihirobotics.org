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
  { path: '/wihirobotics.org/', component: HomeView },
  { path: '/wihirobotics.org/team', component: TeamView },
  { path: '/wihirobotics.org/robot', component: RobotView },
  { path: '/wihirobotics.org/gallery', component: GalleryView },
  { path: '/wihirobotics.org/values', component: ValuesView },
  { path: '/wihirobotics.org/competition', component: CompetitionView },
  { path: '/wihirobotics.org/mission', component: MissionView },
  { path: '/wihirobotics.org/sponsors', component: SponsorsView },
  { path: '/wihirobotics.org/sponsorship', component: SponsorshipView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
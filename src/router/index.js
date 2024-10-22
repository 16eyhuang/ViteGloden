import { createRouter, createWebHistory } from 'vue-router'
import rootPage from '../pages/unicom/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'rootPage',
      component: rootPage,
    },
  ],
});

export default router;

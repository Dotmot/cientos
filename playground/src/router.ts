import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/index.vue'),
  },
  {
    path: '/controls/orbit-controls',
    name: 'OrbitControls',
    component: () => import('./pages/OrbitControlsDemo.vue'),
  },
  {
    path: '/controls/transform-controls',
    name: 'TransformControls',
    component: () => import('./pages/TransformControlsDemo.vue'),
  },
  {
    path: '/controls/first-person-controls',
    name: 'FirstPersonControls',
    component: () => import('./pages/FirstPersonControlsDemo.vue'),
  },
  {
    path: '/abstractions/smoke',
    name: 'Smoke',
    component: () => import('./pages/SmokeDemo.vue'),
  },
  {
    path: '/abstractions/precipitation',
    name: 'Precipitation',
    component: () => import('./pages/PrecipitationDemo.vue'),
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

import { RouteRecordRaw } from 'vue-router';
import { nodeSchema, nodeData } from '../stores/raw_data';
import { ref } from 'vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'node',
        component: () => import('src/components/OTable.vue'),
      },
      {
        path: 'interface',
        component: () => import('src/components/OculusInterface.vue'),
        props: { title: 'Interface' },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;


const routes = [
  {
    path: '/',
    component: () => import('layouts/Start.vue'),
    children: [
      { path: '', component: () => import('pages/start.vue') }
    ]
  },

  {
    path: '/ready',
    component: () => import('layouts/Ready.vue'),
    children: [
      { path: '', component: () => import('pages/ready.vue') }
    ]
  },

  {
    path: '/replay',
    component: () => import('layouts/Replay.vue'),
    children: [
      { path: '', component: () => import('pages/player.vue') }
    ]
  },
  {
    path: '/game',
    component: () => import('layouts/Game.vue'),
  },

  {
    path: '/listener',
    component: () => import('layouts/Listener.vue'),
  },

  {
    path: '/rttr',
    component: () => import('layouts/RTT_Replay'),
  },
  {
    path: '/rttg',
    component: () => import('layouts/RTT_Game'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

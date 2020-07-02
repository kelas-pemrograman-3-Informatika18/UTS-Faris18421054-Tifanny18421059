
const routes = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'Register', name: 'register', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Home', name: 'home', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/AboutUs.vue') },
      { path: 'error', component: () => import('pages/Error404.vue') },
      { path: 'profile', name: 'profile', component: () => import('pages/profile.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') },
      { path: 'history', component: () => import('pages/history.vue') },
      { path: 'inspiring', component: () => import('pages/inspiring.vue') },
      { path: 'other', component: () => import('pages/other.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

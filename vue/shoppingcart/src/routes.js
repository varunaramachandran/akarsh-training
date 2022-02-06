import Cart from './pages/Cart.vue';
import Form from './pages/Form.vue';
export const routes = [
  { path: '/', redirect: '/cart' },
  { path: '/cart', component: Cart },
  { path: '/form', component: Form },
];

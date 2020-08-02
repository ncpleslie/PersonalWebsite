import Home from './Home.vue';
const Admin = () => import('./Admin.vue');
const Edit = () => import('./Edit.vue');

export const routes = [{
    path: '',
    component: Home,
    name: "Home"
}, {
    path: '/admin',
    component: Admin,
    name: "Admin"
}, {
    path: '/edit',
    component: Edit,
    name: "Edit",
    meta: {
        requiresAuth: true
    }
}];
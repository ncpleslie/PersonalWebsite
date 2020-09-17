import Home from './views/Home.vue';
const Admin = () => import('./views/Admin.vue');
const Edit = () => import('./views/Edit.vue');

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
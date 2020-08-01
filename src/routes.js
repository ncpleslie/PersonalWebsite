import Home from './Home.vue';
import Admin from './Admin.vue';
import Edit from './Edit.vue';

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
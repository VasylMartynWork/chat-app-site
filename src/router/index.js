import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import ValidatedView from "@/views/ValidatedView.vue";
import verifyToken from "@/middlewares/authMiddleware";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: LoginView
		},
		{
			path: '/registration',
			name: 'registration',
			component: RegistrationView,
		},
		{
			path: '/main',
			name: 'main',
			component: ValidatedView,
			beforeEnter: verifyToken
		}
		// {
		// 	path: '/main',
		// 	name: 'main',
		// 	component: ValidatedView
		// }
	]
});

export default router;
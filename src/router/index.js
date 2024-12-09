import { createRouter, createWebHistory } from "vue-router";
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";
import verifyToken from "@/middlewares/authMiddleware";
import ChatView from "@/views/ChatView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/sign-in',
			name: 'sign-in',
			component: SignInView
		},
		{
			path: '/sign-up',
			name: 'sign-up',
			component: SignUpView,
		},
		{
			path: '/',
			name: 'main',
			component: ChatView,
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
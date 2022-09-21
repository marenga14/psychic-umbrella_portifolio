/** @format */

import { createRouter, createWebHistory } from "vue-router";
import homeView from "../views/homeView.vue";

const routes = [
	{
		path: "/",
		name: "homeView",
		component: homeView,
	},
 
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

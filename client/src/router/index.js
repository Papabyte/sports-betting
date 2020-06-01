import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from './lazyloading'

Vue.use(Router)

export default new Router({
	mode: 'history',

	routes: [
		{
			name: 'categorie',
			path: '/categorie/:categorie',
			component: lazyLoading('components/Categorie'),
			props:  route => ({
				...route.params
			})
		},
		{
			name: 'landingPage',
			path: '/',
			component: lazyLoading('components/LandingPage'),
			default: true,
		}
	],
})

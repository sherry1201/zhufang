import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	//----------------------------------------------------------------------------------------
	//------------------------------------login-----------------------------------------------
	//----------------------------------------------------------------------------------------
	//登录
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "about" */ '../views/admin/login.vue'),
	},
	//注册路由
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/admin/registerView.vue'),
	},
	//找回密码路由
	{
		path: '/forgotPassword',
		name: 'forgotPassword',
		component: () => import('../views/admin/forgotPassword.vue'),
	},
	//修改密码路由(找回时修改)
	{
		path: '/editPassword',
		name: 'editPassword',
		component: () => import('../views/admin/editPasswordView.vue'),
	},
	//修改密码路由(登录时)
	{
		path: '/editAdminPassword',
		name: 'editAdminPassword',
		component: () => import('../views/admin/editAdminPasswordView.vue'),
	},
	//----------------------------------------------------------------------------------------
	//------------------------------------room------------------------------------------------
	//----------------------------------------------------------------------------------------
	// 查询房源信息
	{
		path: '/queryroom',
		name: 'queryroom',
		component: () => import('../views/room/queryRoomView.vue')
	},
	// 编辑房源信息
	{
		path: '/editroom',
		name: 'editroom',
		component: () => import('../views/room/editRoomView.vue')
	},
	// 添加房源信息
	{
		path: '/insertroom',
		name: 'insertroom',
		component: () => import('../views/room/insertRoomView.vue')
	},
	//----------------------------------------------------------------------------------------
	//------------------------------------community-------------------------------------------
	//----------------------------------------------------------------------------------------
	//查看小区信息路由
	{
		path: '/querycommunity',
		name: 'querycommunity',
		component: () => import('../views/community/queryCommunityView.vue')
	},
	//编辑小区信息路由
	{
		path: '/editcommunity',
		name: 'editcommunity',
		component: () => import('../views/community/editCommunityView.vue')
	},
	//添加小区信息路由
	{
		path: '/insertcommunity',
		name: 'insertcommunity',
		component: () => import('../views/community/insertCommunityView.vue')
	},
	
	//----------------------------------------------------------------------------------------
	//------------------------------------user------------------------------------------------
	//----------------------------------------------------------------------------------------
	//查看用户信息路由
	{
		path: '/queryuser',
		name: 'queryuser',
		component: () => import('../views/user/queryUserView.vue')
	},
	//编辑用户信息路由
	{
		path: '/edituser',
		name: 'edituser',
		component: () => import('../views/user/editUserView.vue')
	},
	//----------------------------------------------------------------------------------------
	//------------------------------------sale------------------------------------------------
	//----------------------------------------------------------------------------------------
	//查看销售员信息路由
	{
		path: '/querysale',
		name: 'querysale',
		component: () => import('../views/sale/querySaleView.vue')
	},
	//编辑销售员信息路由
	{
		path: '/editsale',
		name: 'editsale',
		component: () => import('../views/sale/editSaleView.vue')
	},
	
	//添加销售员信息路由
	{
		path: '/insertsale',
		name: 'insertsale',
		component: () => import(/* webpackChunkName: "about" */ '../views/sale/insertSaleView.vue')
	},
	//----------------------------------------------------------------------------------------
	//------------------------------------house-----------------------------------------------
	//----------------------------------------------------------------------------------------
	//查看房屋信息
	{
		path: '/queryhouse',
		name: 'queryhouse',
		component: () => import(/* webpackChunkName: "about" */ '../views/house/queryHouseView.vue')
	},
	//编辑房屋信息路由
	{
		path: '/edithouse',
		name: 'edithouse',
		component: () => import(/* webpackChunkName: "about" */ '../views/house/editHouseView.vue')
	},
	//添加房屋信息路由
	{
		path: '/inserthouse',
		name: 'inserthouse',
		component: () => import(/* webpackChunkName: "about" */ '../views/house/insertHouseView.vue')
	},
	
	
	
]
// 房间路由
// const roomroutes = [
// 	//查询房源信息
// 	{
// 		path: '/queryroom',
// 		name: 'queryroom',
// 		component: () => import('../views/room/queryRoomView.vue')
// 	},
// ]
// // 销售员路由
// const saleroutes = [
// 	//查看销售员信息路由
// 	{
// 		path: '/querysale',
// 		name: 'querysale',
// 		component: () => import('../views/sale/querySaleView.vue')
// 	},
// 	//添加销售员信息路由
// 	{
// 		path: '/insertsale',
// 		name: 'insertsale',
// 		component: () => import(/* webpackChunkName: "about" */ '../views/sale/insertsale.vue')
// 	},
// ]
// // 用户路由
// const userroutes = [
// 	//查看用户信息路由
// 	{
// 		path: '/queryuser',
// 		name: 'queryuser',
// 		component: () => import('../views/user/queryUserView.vue')
// 	},
// ]
// // 小区路由
// const communityroutes = [
// 	//查看小区信息路由
// 	{
// 		path: '/querycommunity',
// 		name: 'querycommunity',
// 		component: () => import('../views/community/queryCommunityView.vue')
// 	},
// ]
// // 登录路由
// const loginroutes = [
// 	//登录
// 	{
// 		path: '/',
// 		name: 'home',
// 		component: () => import(/* webpackChunkName: "about" */ '../views/admin/login.vue'),
// 	},
// 	//注册路由
// 	{
// 		path: '/register',
// 		name: 'register',
// 		component: () => import('../views/admin/registerView.vue')
// 	},
// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // roomroutes,
  // saleroutes,
  // userroutes,
  // communityroutes,
  // loginroutes,
})

export default router

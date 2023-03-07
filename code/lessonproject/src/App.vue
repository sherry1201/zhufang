<template>
	<el-container class="all">
		<el-aside class="el-aside" width="240px" height="800px">
			<el-row>
				<el-col :span="24"><img src="./assets/homeadv.png"></el-col>
			</el-row>
			<el-row>
				<el-col :span="24" class="el-col-menu">
					<h2 v-if="!this.$store.state.islogin">请先登录!</h2>
					<el-menu
					v-if="this.$store.state.islogin"
					default-active="2"
					class="el-menu"
					background-color="#EBEDF0"
					>
						<homeNavigator index="1">
							<template #title>用户管理</template>
							<!-- <template #content-one><router-link to="/queryuser" class="routerA">查看用户信息</router-link></template>
							<template #content-two><router-link to="/queryroom" class="routerA">添加用户信息</router-link></template>
							<template #content-three><router-link to="/queryroom" class="routerA">删除用户</router-link></template>
							<template #content-four><router-link to="/queryroom" class="routerA">修改用户信息</router-link></template> -->
							<template #test>
								<homeitemchild indexchild="1-1">
									<template #msg><router-link to="/queryuser" class="routerA">查看用户信息</router-link></template>
								</homeitemchild>
								<homeitemchild indexchild="1-2">
									<template #msg><router-link to="/edituser" class="routerA">编辑用户信息</router-link></template>
								</homeitemchild>
								
							</template>
						</homeNavigator>
						<homeNavigator index="2">
							<template #title>房源管理</template>
							<template #test>
								<homeitemchild indexchild="2-1">
									<template #msg><router-link to="/queryroom" class="routerA">查看房源信息</router-link></template>
								</homeitemchild>
								<homeitemchild indexchild="2-2">
									<template #msg><router-link to="/insertroom" class="routerA">添加房源信息</router-link></template>
								</homeitemchild>
								<homeitemchild indexchild="2-3">
									<template #msg><router-link to="/editroom" class="routerA">编辑房源信息</router-link></template>
								</homeitemchild>
							</template>
							<!-- <template #content-one> <router-link to="/queryroom" class="routerA">查看房源信息</router-link></template>
							<template #content-two><router-link to="/queryroom" class="routerA">添加房源信息</router-link></template>
							<template #content-three><router-link to="/queryroom" class="routerA">删除房源</router-link></template>
							<template #content-four><router-link to="/queryroom" class="routerA">修改房源信息</router-link></template> -->
						</homeNavigator>
						<homeNavigator index="3">
							<template #title>小区管理</template>
							<template #test>
								<homeitemchild indexchild="3-1">
									<template #msg><router-link to="/querycommunity" class="routerA">查看小区信息</router-link></template>
								</homeitemchild>
								<homeitemchild indexchild="3-2">
									<template #msg><router-link to="/insertcommunity" class="routerA">添加小区信息</router-link></template>
								</homeitemchild>
								<homeitemchild indexchild="3-3">
									<template #msg><router-link to="/editcommunity" class="routerA">编辑小区信息</router-link></template>
								</homeitemchild>
							</template>
							<!-- <template #content-one><router-link to="/querycommunity" class="routerA">查看小区信息</router-link></template>
							<template #content-two><router-link to="/queryroom" class="routerA">添加小区信息</router-link></template>
							<template #content-three><router-link to="/queryroom" class="routerA">删除小区</router-link></template>
							<template #content-four><router-link to="/queryroom" class="routerA">修改小区信息</router-link></template> -->
						</homeNavigator>
						<homeNavigator index="4">
							<template #title>销售员管理</template>
							<template #test>
								<homeitemchild indexchild="4-1">
									<template #msg><router-link to="/querysale" class="routerA">查看销售员信息</router-link></template>
								</homeitemchild>
								<homeitemchild indexchild="4-2">
									<template #msg><router-link to="/insertsale" class="routerA">添加销售员信息</router-link></template>
								</homeitemchild>
								<homeitemchild indexchild="4-3">
									<template #msg><router-link to="/editsale" class="routerA">编辑销售员信息</router-link></template>
								</homeitemchild>
							</template>
							<!-- <template #content-one><router-link to="/querysale" class="routerA">查看销售员信息</router-link></template>
							<template #content-two><router-link to="/insertsale" class="routerA">添加销售员信息</router-link></template>
							<template #content-three><router-link to="/queryroom" class="routerA">删除销售员</router-link></template>
							<template #content-four><router-link to="/queryroom" class="routerA">修改销售员信息</router-link></template> -->
						</homeNavigator>
						<homeNavigator index="5">
							<template #title>房屋管理</template>
							<template #test>
								<homeitemchild indexchild="5-1">
									<template #msg><router-link to="/queryhouse" class="routerA">查看房屋信息</router-link></template>
								</homeitemchild>
								<homeitemchild indexchild="5-2">
									<template #msg><router-link to="/edithouse" class="routerA">编辑房屋信息</router-link></template>
								</homeitemchild>
								<homeitemchild indexchild="5-3">
									<template #msg><router-link to="/inserthouse" class="routerA">添加房屋信息</router-link></template>
								</homeitemchild>
								
							</template>
						</homeNavigator>
					</el-menu>
				</el-col>
			</el-row>
			
		</el-aside>
		
		
		<el-container>
			<el-header class="el-header" height="100px">
				<el-row>
					<el-col :span="18" class="el-header-col">
						<h1>租房房源管理系统</h1>
					</el-col>
					<el-col :span="6" class="el-header-col2">
						<!-- 检测是否登录 -->
						<div v-if="!this.$store.state.islogin">
							<router-link to="/" class="routerA">登录</router-link>
							<router-link to="/register" class="routerA">注册</router-link>
						</div>
						<div v-if="this.$store.state.islogin">
							欢迎,管理员:{{this.$store.state.admin.adminAccount}}
							<router-link to="/" class="routerA" @click="this.$store.state.islogin =!this.$store.state.islogin">退出登录</router-link>,
							<router-link to="/editAdminPassword" class="routerA">修改密码</router-link>
						</div>
					</el-col>
				</el-row>
			</el-header>
			
				<el-main class="el-main" width="100%">
					<router-view></router-view>
				</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import homeNavigator from "./components/home/homeitem.vue"
	 import homeitemchild from "./components/home/homeitemchild.vue"
	export default{
		components: {
			homeNavigator,
			homeitemchild
		},
		
	}
</script>


<style>
	.el-form-item{
		margin: 20px;
	}
	div{
		margin-left: 0;
		margin-right: 0;
	}
	.el-menu{
		width: 100%;
		height: 100%;
		background-color: #EBEDF0;
	}
	h1{
		font-size: 30px;
	}
	h2{ 
		text-align: center;
	}
	img{
		width: 240px;
		height: 100px;
	}
	
	.routerA{
		text-decoration: none;
		color: #000000;	
	}
	.routerA:hover{
		color:  #79bbff;
	}
/* el-row	布局 */
	.el-header-col{
		text-align: center;
		height: 100px;
	}
	.el-header-col2{
		line-height: 100px;
		height: 100px;
	}
/* container布局 */
	.userarea{
		height:100px;
		background-color: #F0F2F5;
	}
	.all{
		margin-top: -8px;
	}
	.el-header{
		width: 100%;
		height: 100px;
		border-radius: 0 20px 20px 0;
		background-color:  #F0F2F5;
		
	}
	.el-aside{
		width: 240px;
		height: 950px;
		border-radius: 0 0 20px 20px;
		background-color: #EBEDF0;
	}
	.el-main{
		border-radius:20px;
		height: 850px;
		background-color:#ffffff;
	}

	
</style>
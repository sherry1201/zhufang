<template>
		<el-sub-menu :index="index">
			<template #title>
			     <span><h3><slot name="title"></slot></h3></span>
			</template>
			<el-menu-item-group>
<!-- 			    <el-menu-item :index="index+'-1'"><slot name="content-one"></slot></el-menu-item>
			    <el-menu-item :index="index+'-2'"><slot name="content-two"></slot></el-menu-item>
			    <el-menu-item :index="index+'-3'"><slot name="content-three"></slot></el-menu-item>
			    <el-menu-item :index="index+'-4'"><slot name="content-four"></slot></el-menu-item> -->
				<slot name="test"></slot>
			</el-menu-item-group>
		</el-sub-menu>
</template>

<script>
	// import homeitemchild from "./homeitemchild.vue"
	export default{
		name: "homeNavigator",
		props:[
			"index",
		],
		// comments: {
		// 	homeitemchild
		// }
	}
</script>

<style>
	.el-menu{
		width: 200px;
		height: 60px;
		background-color: #EBEDF0;
	}
</style>
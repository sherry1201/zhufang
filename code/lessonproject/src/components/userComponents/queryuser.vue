<template>
	<el-table :data="this.$store.state.container" style="width: 100%;"   table-layout="auto"  >
		<slot name="mulDelete"></slot>
	    <el-table-column prop="userId" label="用户ID"  />
	    <el-table-column prop="userName" label="姓名"  />
	    <el-table-column prop="userAge" label="用户年龄"   />
		<el-table-column prop="userSex" label="用户性别"   />
		<el-table-column prop="userUrl" label="用户头像" />
		<el-table-column  prop="userMail" label="用户邮箱" />
		<el-table-column prop="userAccount" label="用户账号" />
		<el-table-column prop="userPassword" label="用户密码"  />
		<el-table-column prop="userPhone" label="用户电话" />
		<el-table-column prop="userIshire" label="是否租房" />
		<el-table-column  prop="userHiredays" label="租房月份" />
		<!-- <el-table-column  prop="roomIshaire" label="是否出租" /> -->
		<el-table-column prop="userHireroomid" label="用户租房ID"  />
		<slot name="editAndView"></slot>
	  </el-table>
</template>

<script>
	import {request} from "../../network/request.js"
	export default{
		name: "queryuser",
		// data(){
		// 	return{
		// 		user:[],
		// 	}
		// },
		
		// mounted() {
		// 	request({
		// 		url: "/vue/queryUser"
		// 	}).then(res =>{
		// 		this.user = res
		// 	})
		// }
		
	}
	
</script>

<style>
</style>
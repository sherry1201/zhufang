<template>
	<el-table :data="this.$store.state.container" style="width: 100%" table-layout="auto" >
		<slot name="mulDelete"></slot>
		<!-- <el-table-column align="left"> -->
			<!-- <template #header>
		        <el-input v-model="search" size="small" placeholder="销售员ID" style="width: 100px;" />
				<el-input v-model="search" size="small" placeholder="销售员姓名" style="width: 100px;" />
				<el-input v-model="search" size="small" placeholder="销售员电话" style="width: 100px;" />
				<el-input v-model="search" size="small" placeholder="销售员证件" style="width: 100px;" />
				<el-input v-model="search" size="small" placeholder="管理房间ID" style="width: 100px;" />
				<el-button size="small">查找</el-button>
		    </template> -->
			<el-table-column prop="saleId" label="销售员ID"  width="" />
			<el-table-column prop="saleName" label="销售员姓名"  width="" />
			<el-table-column prop="salePhone" label="销售员电话"  width="" />
			<el-table-column prop="saleUrl" label="销售员证件"  width="" />
			<el-table-column prop="saleRoomid" label="管理房间ID" width="" />
			<slot name="editAndView"></slot>
			<slot name="edit"></slot>
		<!-- </el-table-column> -->
		<!-- <el-table-column prop="saleName" label="销售员姓名"  width="" />
		<el-table-column prop="salePhone" label="销售员电话"  width="" />
		<el-table-column prop="saleUrl" label="销售员证件"  width="" />
		<el-table-column prop="saleRoomid" label="管理房间ID" width="" /> -->
		
	  </el-table>
</template>

<script>
	// import {request} from "../../network/request.js"
	// import query from "../query/query.vue"
	// import querychild from "../query/querychild.vue"
	export default{
		name: "querysale",
		// data(){
		// 	return{
		// 		sale:[],
		// 	}
		// },
		// mounted() {
		// 	request({
		// 		url: "/vue/querySale"
		// 	}).then(res =>{
		// 		this.sale = res
		// 	})
		// }
	}
	
</script>

<style>
</style>


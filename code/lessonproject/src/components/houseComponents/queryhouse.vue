<template>
	<el-table :data="this.$store.state.container" style="width: 100%" table-layout="auto">
			<slot name="mulDelete"></slot>
		    <el-table-column prop="houseId" label="房屋ID" width="" />
			<el-table-column prop="houseName" label="门牌" width="" />
			<el-table-column prop="houseSize" label="房子大小(㎡)" width="" />
			<el-table-column prop="houseUserlist" label="已出租用户ID" width=""/>
			<el-table-column prop="houseFloor" label="楼层" width="" />
			<el-table-column prop="houseLayout" label="房间布局" width="" />
			<el-table-column prop="houseSalespersonid" label="管理员ID" />
			<el-table-column prop="houseCommunityid" label="所在小区id" width="" />
			<slot name="editAndView"></slot>
		  </el-table>
</template>

<script>
	export default{
		name: "queryhouse",
		// data(){
		// 	return{
		// 		house:[],
		// 	}
		// },
		// mounted() {
		// 	request({
		// 		url: "/vue/queryHouse"
		// 	}).then(res =>{
		// 		this.house = res
		// 	})
		// }
	}
</script>

<style>
</style>
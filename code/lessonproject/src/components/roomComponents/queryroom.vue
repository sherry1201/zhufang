<template>
	<el-table 
	 table-layout="auto"
	:data="this.$store.state.container" 
	style="width: 100%" 
	 >	<slot name="mulDelete"></slot>
	    <el-table-column prop="roomId" label="房间ID" width="" />
	    <el-table-column prop="roomNum" label="房间号" width="" />
	    <el-table-column prop="roomSize" label="房间大小(㎡)"   width="" />
		<el-table-column prop="roomRent" label="房间租金(月/元)" width="" />
		<el-table-column prop="roomHiretype" label="出租类型(整租/合租)" width="" />
		<el-table-column prop="roomFace" label="朝向" width="" />
		<el-table-column prop="roomDescribe" label="描述" width=""/>
		<el-table-column prop="roomItem" label="特点" width="" />
		<el-table-column  prop="roomIshire" label="是否出租" width="" />
		<!-- <el-table-column  prop="roomIshaire" label="是否出租" /> -->
		<el-table-column prop="roomUrl" label="房间图片地址" />
		<el-table-column prop="roomHouseid" label="所属房间id" width="" />
		<el-table-column prop="roomSaleid" label="管理员id" width="" />
		<slot name="editAndView"></slot>
	  </el-table>
</template>

<script>
	export default{
		name: "queryroomCpn",
		
		// data(){
		// 	return{
		// 		roomSelect:[],
		// 		room:[],
		// 		roomid:[]
		// 	}
		// },
		// methods:{
		// 	handleSelectionChange(val){
				
		// 	},
			
		// },
		// mounted() {
		// 	// this.$store.dispatch("getData")
		// 	// this.room = this.$store.state.container 
		// 	request({
		// 		url: "/vue/queryRoom"
		// 	}).then(res =>{
		// 		for(var room of res){
		// 			if(room.roomIshaire ==1){
		// 				room.roomIshaire = "已出租"
		// 			}else if(room.roomIshaire ==0){
		// 				room.roomIshaire = "未出租"
		// 			}
		// 		}
		// 		this.room = res
		// 	})
		// }
	}
	
</script>

<style>
</style>
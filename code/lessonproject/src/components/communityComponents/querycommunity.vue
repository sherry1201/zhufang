<template>
	<el-table :data="this.$store.state.container" style="width: 100%"  table-layout="auto" >
		 <slot name="mulDelete"></slot>
	    <el-table-column prop="communityId" label="小区ID"  />
		<el-table-column prop="communityName" label="小区名" />
	    <el-table-column prop="communityAdress" label="小区地址"  />
	    <el-table-column prop="communitySubwayfirst" label="一级地铁"   />
		<el-table-column prop="communitySubwaysecond" label="二级地铁" />
		<el-table-column prop="communitySubwaydistence" label="距地铁距离(m)" />
		<el-table-column prop="communityAreafirst" label="一级区域" />
		<el-table-column prop="communityAreasecond" label="二级区域" />
		<el-table-column prop="communitySize" label="小区大小(㎡)" />
		<el-table-column  prop="communityIslift" label="是否电梯"  />
		<!-- <el-table-column  prop="roomIshaire" label="是否出租" /> -->
		<el-table-column prop="communityGreensize" label="绿化面积(㎡)" />
		<el-table-column prop="communityParkinglotsize" label="停车场面积(㎡)"  />
		<el-table-column prop="communityParkinglotcost" label="停车场费用(月/元)" />
		<el-table-column  prop="communityPropertyphone" label="物业电话"  />
		<slot name="editAndView"></slot>
	  </el-table>
</template>
<script>
	export default{
		name: "querycommunity",
		// data(){
		// 	return{
		// 		community:[],
		// 	}
		// },
		
		// mounted() {
		// 	request({
		// 		url: "/vue/queryCommunity"
		// 	}).then(res =>{
		// 		for(var community of res){
		// 			if(community.communityIslift ==1){
		// 				community.communityIslift = "有电梯"
		// 			}else if(community.communityIslift ==0){
		// 				community.communityIslift = "没有电梯"
		// 			}
		// 		}
		// 		this.community = res
		// 	})
		// }
	}
</script>

<style>
</style>

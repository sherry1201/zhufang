<template>
	<!-- 接受编辑容器的数据 -->
	<el-form v-model="this.$store.state.editContainer" label-width="120px">
	    <el-form-item label="小区名:">
	      <el-input v-model="this.$store.state.editContainer.communityName" style="width: 200px;"/>
	    </el-form-item>
		<el-form-item label="小区地址:">
		  <el-input type="textarea" v-model="this.$store.state.editContainer.communityAdress" style="width: 200px;" />
		</el-form-item>
		<el-form-item label="地铁:">
			<el-select v-model="this.$store.state.editContainer.communitySubwayfirst"  style="width: 100px;" @change="changeSubway">
				<el-option
				v-for="item in this.$store.state.subway"
				:label="item.subwayLine.label"
				:value="item.subwayLine.value"
				></el-option>
			</el-select>
			
			<el-select v-model="this.$store.state.editContainer.communitySubwaysecond"  style="width: 100px;">
				<el-option
				v-for="item in this.$store.state.subway"
				:label="item.subwayLine.label"
				:value="item.subwayLine.value"
				></el-option>
			</el-select>
			
		</el-form-item>
		<el-form-item label="离地铁距离:">
		  <el-input v-model="this.$store.state.editContainer.communitySubwaydistence" maxlength="50" style="width: 100px;" placeholder="" /> m
		</el-form-item>
		<el-form-item label="区域:">
		  <el-select v-model="this.$store.state.editContainer.communityAreafirst"  style="width: 150px;"  @change="changeArea" >
		  	<el-option
		  		v-for="item in this.$store.state.area"
		  		:label="item.areafirst.label"
		  		:value="item.areafirst.value"
		  	></el-option>
		  </el-select>
		  
		  <el-select v-model="this.$store.state.editContainer.communityAreasecond"  style="width: 150px;">
		  	<el-option
		  	v-for="item in this.$store.state.areaContainer"
		  	:label="item"
		  	:value="item"
		  	>
		  	</el-option>
		  </el-select>
		</el-form-item>
		<el-form-item label="小区大小:">
		  <el-input v-model="this.$store.state.editContainer.communitySize" style="width: 200px;" /> m<sup>2</sup>
		</el-form-item>
		<el-form-item label="电梯:">
		  <el-select v-model="this.$store.state.editContainer.communityIslift"  style="width: 150px;">
		  	<el-option
		  	v-for="item in this.$store.state.islift"
		  	:label="item.label"
		  	:value="item.value"
		  	></el-option>
		  </el-select>
		</el-form-item>
		<el-form-item label="绿化面积:">
		  <el-input v-model="this.$store.state.editContainer.communityGreensize" style="width: 80px;" /> m<sup>2</sup>
		</el-form-item>
		<el-form-item label="停车场面积:">
		  <el-input v-model="this.$store.state.editContainer.communityParkinglotsize" style="width: 80px;" /> m<sup>2</sup>
		</el-form-item>
		<el-form-item label="停车场费用:">
		  <el-input v-model="this.$store.state.editContainer.communityParkinglotcost" style="width: 80px;" />元/月
		</el-form-item>
		<el-form-item label="物业电话:">
		  <el-input v-model="this.$store.state.editContainer.communityPropertyphone" style="width: 200px;" />
		</el-form-item>
		
	</el-form>
</template>

<script>
	export default{
		name : "editcommunity",
		methods:{
			//地铁的二级联动
			changeSubway(val){
				for(var  item in this.$store.state.subway){
					if( this.$store.state.subway[item].subwayLine.value == val ){
			
						this.$store.state.subwayContainer = this.$store.state.subway[item].subwayStation
						
						this.insertdata.communitySubwaysecond=""
					}
				}
				
			},
			//区域的二级联动
			changeArea(val){
				for(var  item in this.$store.state.area){
					if( this.$store.state.area[item].areafirst.value == val ){
						this.$store.state.areaContainer = this.$store.state.area[item].areasecond
						this.insertdata.communityAreasecond=""
					}
				}
			},
		}
	}
</script>
<style>	
</style>
<template>
	<h2>请填写小区信息</h2>
	<el-form :model="insertdata" 
	status-icon
	style=" width: 800px; margin: 0 auto;"
	:rules="rules"
	 ref="formRefCommunity"
	>
		<el-form-item>
			<el-col :span="12">
				<el-form-item label="小区名:" prop="communityName" label-width="100px" >
					<el-input v-model.trim="insertdata.communityName" size="default" style="width: 200px;"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="小区地址:" prop="communityAdress" label-width="100px" >
					<el-input v-model.trim="insertdata.communityAdress" size="default" style="width: 200px;"></el-input>
				</el-form-item>
			</el-col>
		</el-form-item>
		
		<el-form-item>
			<el-col :span="12" >
				<el-form-item label="小区面积:" prop="communitySize" label-width="100px">
					<el-input v-model.trim="insertdata.communitySize" size="default" style="width: 200px;"></el-input>%
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="绿化面积:" prop="communityGreensize" label-width="100px">
					<el-input v-model.trim="insertdata.communityGreensize" size="default" style="width: 200px;"></el-input>m <sup>2</sup>	
				</el-form-item>
			</el-col>
		</el-form-item>
		
		
		<el-form-item>
			<el-col :span="12" >
				<el-form-item label="停车场面积:" prop="communityParkinglotsize" label-width="100px">
					<el-input v-model.trim="insertdata.communityParkinglotsize" size="default" style="width: 200px;"></el-input>m <sup>2</sup>			
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="停车场费用:" prop="communityParkinglotcost" label-width="100px">
					<el-input v-model.trim="insertdata.communityParkinglotcost" size="default" style="width: 200px;"></el-input>(/月)
				</el-form-item>
			</el-col>
		</el-form-item>
		
		<el-form-item>
			<el-col :span="12" >
				<el-form-item label="物业电话:" prop="communityPropertyphone" label-width="100px">
					<el-input v-model.trim="insertdata.communityPropertyphone" size="default" style="width: 200px;"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item  label="电梯:" prop="communityIslift" label-width="100px">
					<el-select v-model="insertdata.communityIslift" placeholder="电梯" size="default" style="width: 100px;" >
						<el-option
							v-for=" item in this.$store.state.islift"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						/>
					</el-select>
				</el-form-item>
			</el-col>
		</el-form-item>
		
		<el-form-item>
			<el-col :span="12" >
				<el-form-item label="地铁:" prop="communitySubwayfirst" label-width="100px">
					<el-select v-model="insertdata.communitySubwayfirst"   style="width: 200px;" @change="changeSubway">
						<el-option
						v-for="item in this.$store.state.subway"
						:label="item.subwayLine.label"
						:value="item.subwayLine.value"
						></el-option>
					</el-select>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item prop="communitySubwaysecond" >
					<el-select v-model="insertdata.communitySubwaysecond"   style="width: 200px;">
						<el-option
							v-for="item in this.$store.state.subwayContainer"
							:label="item"
							:value="item"
						></el-option>
					</el-select>
				</el-form-item>
			</el-col>
		</el-form-item>
		
		<el-form-item>
			<el-col :span="12" >
				<el-form-item label="区域:"  label-width="100px" prop="communityAreafirst">
					<el-select v-model="insertdata.communityAreafirst"  style="width: 200px;"  placeholder="所属区域" @change="changeArea">
						<el-option 
							v-for="item in this.$store.state.area"
							:label="item.areafirst.label"
							:value="item.areafirst.value"
						></el-option>
					</el-select>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item prop="communityAreasecond" >
					<el-select v-model="insertdata.communityAreasecond"  style="width: 200px;"  placeholder="所属街道" >
						<el-option 
						v-for="item in this.$store.state.areaContainer"
						:label="item"
						:value="item"
						>
						</el-option>
					</el-select>
				</el-form-item>
			</el-col>
		</el-form-item>
		<el-form-item>
			<el-col :span="12" >
				<el-form-item label="地铁距离:" prop="communitySubwaydistence" label-width="100px" >
					<el-input v-model.trim="insertdata.communitySubwaydistence" size="default" style="width: 200px;"></el-input> m
				</el-form-item>
			</el-col>
			
		</el-form-item>
		<el-form-item >
			<el-col :span="24" style="text-align: center;">
				<el-button	@click="insert" type="primary" >添加</el-button>
			</el-col>
			
		</el-form-item>
		
	</el-form>
</template>

<script>
	import {request} from "../../network/request.js"
	import { Plus } from '@element-plus/icons-vue'
	import { ElMessage } from 'element-plus'
	export default{
		
		name:"insertcommunity",
		components:{
			ElMessage,
			Plus,
		},
		data(){
			return{
				insertdata:{
					url: "/vue/insertCommunity",
					communityName: "",
					communityAdress: "",
					communitySubwayfirst: "",//地铁的二级联动
					communitySubwaysecond: "",
					
					communitySubwaydistence: "",//地铁距离
					
					communityAreafirst: "",//区域的二联动
					communityAreasecond: "",
					
					communitySize: "",//小区面积
					
					communityIslift: "",//电梯
					
					communityGreensize: "",//绿化面积
					
					communityParkinglotsize: "",//停车场大小
					
					communityParkinglotcost:"",//停车场费用
					
					communityPropertyphone:"",//物业电话
				},
				rules:{
					communityName:[	{ required: true, message: '请输入小区名!' }],
					communityAdress:[	{ required: true,message: '请输入小区地址!'}],
					communitySubwayfirst:[	{ required: true,message: '请选择附近地铁线路!'}],
					communitySubwaysecond:[	{ required: true,message: '请选择附近地铁站!'}],
					communitySubwaydistence:[	{ required: true,message: '请输入地铁离小区距离!'}],
					communityAreafirst:[	{ required: true,message: '请输入小区所在区域!'}],
					communityAreasecond:[	{ required: true,message: '请输入小区所在区域!'}],
					communitySize:[	{ required: true,message: '请输入小区面积!'}],
					communityGreensize:[	{ required: true,message: '请输入小区绿化面积!'}],
					communityParkinglotsize:[	{ required: true,message: '请输入小区面积!'}],
					communityParkinglotcost:[	{ required: true,message: '请输入小区停车场收费标准!'}],
					communityPropertyphone:[	{ required: true,message: '请输入小区物业电话!'}],
				}
			}
		},
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
			//提交时的验证
			insert(){
				if (!this.$refs.formRefCommunity) return
				  this.$refs.formRefCommunity.validate((valid) => {
				    if (valid) {//验证成功时
						request({//提交
							url: this.insertdata.url,
							params:this.insertdata
						}).then(res=>{
							//提交后对选择框进行刷新
							ElMessage.success("添加成功")
							this.insertdata = this.$options.data().insertdata
						})
				    } else {
							ElMessage.error("提交失败!")
				      return false
				    }
				  })
			},
		},
	}
</script>

<style>
</style>
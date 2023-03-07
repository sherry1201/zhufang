<template>
	<el-form :model="insertdata" 
	label-width="100px"
	 status-icon
	 style=" width: 550px; margin: 0 auto;"
	 :rules="rules"
	 ref="formRefHouse"
	  >
		  <el-form-item >
				<h2>请填写房屋信息</h2>
		</el-form-item>
		
		<el-form-item label="房屋门牌号:" prop="houseName" >
			<el-input v-model.trim="insertdata.houseName" size="default" style="width: 200px;"></el-input>
		</el-form-item>
		
		<el-form-item label="房屋大小:" prop="houseSize" >
			<el-input v-model.trim="insertdata.houseSize" size="default" style="width: 200px;"></el-input>
		</el-form-item>
		
		<el-form-item label="房屋楼层:" prop="houseFloor" >
			<el-input v-model.trim="insertdata.houseFloor" size="default" style="width: 200px;"></el-input>
		</el-form-item>
		
		<el-form-item label="房屋户型:" prop="houseLayout" >
			<el-select v-model="insertdata.houseLayout" >
				<el-option
				v-for="item in this.$store.state.houseAllType"
				:label="item.label"
				:value="item.value"
				></el-option>
			</el-select>
		</el-form-item>
		
		<el-form-item label="所在小区:" prop="houseCommunityid" >
			<el-select v-model="insertdata.houseCommunityid" >
				<el-option	
				v-for="item in this.communityName"
				:label="item.label"
				:value="item.value"
				></el-option>
			</el-select>&nbsp;&nbsp;&nbsp;
			<router-link to="/insertcommunity">新建小区 </router-link>
		</el-form-item>
		
		<el-form-item label="销售员:" prop="houseSalespersonid" >
			<el-select v-model="insertdata.houseSalespersonid" >
				<el-option	
				v-for="item in this.houseSaleName"
				:label="item.label"
				:value="item.value"
				></el-option>
			</el-select>
		</el-form-item>
		
		<el-form-item >
			<el-button	@click="insert" type="primary" style="margin-left: 50px;" >添加</el-button>
		</el-form-item>
		
	</el-form>
</template>

<script>
	import {request} from "../../network/request.js"
	import { Plus } from '@element-plus/icons-vue'
	import { ElMessage } from 'element-plus'
	export default{
		
		name:"inserthouse",
		components:{
			ElMessage,
			Plus,
		},
		data(){
			return{
				insertdata:{
					url: "/vue/insertHouse",
					houseName: "",//房子门牌
					
					houseSize:"",//房子大小
					houseFloor: "",//房屋楼层
					houseLayout: "",//房屋户型
					houseSalespersonid:"",
					houseCommunityid:""
				},
				
				communityName:[
				],
				houseSaleName:[
				],
				rules:{
					houseName:[	{ required: true, message: '请输入房屋门牌号!' }],
					houseSize:[	{ required: true,message: '请输入房屋面积!'}],
					houseFloor:[	{ required: true,message: '请选择房屋楼层!'}],
					houseLayout:[	{ required: true,message: '请选择房屋户型!'}],
					houseCommunityid:[	{ required: true,message: '请选择房屋所在的小区'}],
				}
			}
		},
		methods:{
			//提交时的验证
			insert(){
				if (!this.$refs.formRefHouse) return
				  this.$refs.formRefHouse.validate((valid) => {
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
		created(){
			request({
				url:"/vue/queryCommunityIdAndName"
			}).then(res =>{
				res.filter(item =>{
					this.communityName.push({
						label: item.communityName,
						value : item.communityId
					})
				})
			})
			
			request({
				url:"/vue/querySaleNameAndId"
			}).then(res =>{
				res.filter(item =>{
					this.houseSaleName.push({
						label: item.saleName,
						value : item.saleId,
					})
				})
			})
		}
	}
</script>

<style>
</style>
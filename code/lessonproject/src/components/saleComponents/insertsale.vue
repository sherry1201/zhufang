<template>
	<h2>请填写销售员信息</h2>
	<el-form :model="insertdata" 
	label-width="100px"
	 status-icon
	 style=" width: 550px; margin: 0 auto;"
	 :rules="rules"
	 ref="formRef"
	  >
	  <el-form-item >
	  			
	  		</el-form-item>
		<el-form-item label="姓名:" prop="saleName">
			<el-input v-model.trim="insertdata.saleName" size="default" style="width: 200px;"></el-input>
		</el-form-item>
		<el-form-item label="电话:" prop="salePhone">
			<el-input v-model.trim="insertdata.salePhone" size="default" style="width: 200px;"></el-input>
		</el-form-item>
		<el-form-item label="证件上传:">
			<el-upload
			class="avatar-uploader"
			:action="this.$store.state.updateUrl"
			methods="post" 
			:show-file-list="false"
			 :on-success="handleAvatarSuccess"
			 :before-upload="beforeAvatarUpload"
			>
			<img v-if="this.$store.state.imgUrl" :src="require('@/assets/'+this.$store.state.imgUrl)" class="avatar" />
			<el-icon v-else  class="avatar-uploader-icon"><Plus/></el-icon>
			</el-upload>
		</el-form-item>
		<el-form-item label="管理房子:">
			<el-select v-model="saleroomid" placeholder="房间" multiple  clearable style="width: 400px;">
			<el-option
			v-for="item in this.communityName"
			:label="item.label"
			:value="item.value"
			></el-option>
			</el-select>
		</el-form-item>
		<el-form-item>
			<el-button	@click="insert" type="primary" style="margin-left: 50px;">添加</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import {request} from "../../network/request.js"
	import { Plus } from '@element-plus/icons-vue'
	import { ElMessage } from 'element-plus'
	export default{
		
		name:"insertsale",
		components:{
			ElMessage,
			Plus,
		},
		data(){
			const checkName =(rule,value,callback) =>{
				callback()
			}
			const checkPhone =(rule,value,callback) =>{
				var phone = /^[1][3-9][0-9]{9}$/
				if(!phone.test(value)){
					callback(new Error("手机格式有误!"))
				}
				callback()
			}
			return{
				insertdata:{
					url: "/vue/insertSale",
					saleName: "",
					salePhone:"",
					saleUrl:"",
					saleRoomid:"",
				},
				saleroomid :[],
				communityName: [],
				rules:{
					saleName:[	{ required: true, message: '请输入姓名!' }],
					salePhone:[	{ required: true, message: '请输入电话!' },
								{ validator: checkPhone, trigger: 'change' }],
					
					
					
				}
			}
		},
		methods:{
			//拼接上传成功后 地址的绝对路径
			handleAvatarSuccess(response, uploadFile){
				this.insertdata.saleUrl = "E:\\html_workplace\\lessonproject\\src\assets\\" + response
				this.$store.state.imgUrl = response
			},
			//判断图片格式
			beforeAvatarUpload(rawFile){
				if(rawFile.type !="image/jpeg"){
					ElMessage.error('图片必须是jpeg格式!')
					return false
				}else if(rawFile.size > 1048576){
					ElMessage.error('图片大小不能超过1MB!')
					return false
				}
				return true
			},
			//提交时的验证
			insert(){
				console.log(this.$refs.formRef)
				if (!this.$refs.formRef) return
				  this.$refs.formRef.validate((valid) => {
				    if (valid && !this.$store.state.imgUrl == "") {//验证成功时
					
						var str =""
						this.saleroomid.filter(id =>{str += id + ","})//组装房间ID数据
							
						this.insertdata.saleRoomid = str.substring(0,str.length-1)
						console.log(this.insertdata)
						
						request({//提交
							url: this.insertdata.url,
							params:this.insertdata
						}).then(res=>{
							//提交后对选择框进行刷新
							this.saleroomid = []
							this.communityName=[]
							request({
								url: "/vue/queryNullSaleid",
							}).then(res =>{
								// JSON.parse(JSON.stringify(res))//将数据转化为json数据格式
								//filter 遍历循环对象数组 组装数据并显示到选择栏
								res.filter(item =>{
									this.communityName.push({
													label: item.community_adress + item.community_name +item.house_name +item.room_num +"号房间",
													value: item.room_id,
												})
								})
							})
							
							ElMessage.success("提交成功!")
							this.$store.state.imgUrl=""
						})
				    } else {
						if(this.$store.state.imgUrl==""){
							ElMessage.error("没有上传图片!")
						}else{
							ElMessage.error("提交失败!")
						}
						this.$store.state.imgUrl=""
				   
				      return false
				    }
				  })
			},
		},
		
		mounted(){
			//查看剩余没有被管理的房间的信息将其显示
			this.$store.state.imgUrl=""
			request({
				url: "/vue/queryNullSaleid",
			}).then(res =>{
				// JSON.parse(JSON.stringify(res))//将数据转化为json数据格式
				//filter 遍历循环对象数组 组装数据并显示到选择栏
				res.filter(item =>{
					this.communityName.push({
									label: item.community_adress + item.community_name +item.house_name +item.room_num +"号房间",
									value: item.room_id,
								})
				})
			})
		}
	}
</script>

<style>
</style>
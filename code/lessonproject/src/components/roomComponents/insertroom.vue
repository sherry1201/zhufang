<template>
			<h2>请填写房源信息</h2>
	<el-form :model="insertdata" 
	label-width="100px"
	 status-icon
	 style=" width: 1000px; margin: 0 auto; margin-top: 40px;"
	 :rules="rules"
	 ref="formRefRoom"
	  > 
	  <el-form-item style="width: 100%;">
			<el-col :span="9">
				<el-form-item label="小区名:" prop="communityId" >
					<el-select v-model="insertdata.communityId" @change="queryHouse(insertdata.communityId)">
						<el-option
						v-for="item in this.communityName"
						:label="item.label"
						:value="item.value"
						></el-option>
					</el-select>&nbsp;&nbsp;&nbsp;
					<router-link to="/insertcommunity">新建小区 </router-link>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="房子名:" prop="roomHouseid">
					<el-select v-model="insertdata.roomHouseid" @change="showHouse">
						<el-option
						v-for="item in this.houseSaleName"
						:label="item.label"
						:value="item.value"
						></el-option>
					</el-select>&nbsp;&nbsp;&nbsp;
					<router-link to="/inserthouse">添加需要出租的房子</router-link>
				</el-form-item>
			</el-col>
		</el-form-item>
		
		<el-form-item style="width: 100%;">
			<el-col :span="9">
				<el-form-item label="租房类型:" prop="roomHiretype" >
					<el-select v-model="insertdata.roomHiretype" :disabled="indexInput">
						<el-option
						v-for="item in this.$store.state.type"
						:label="item.label"
						:value="item.value"
						></el-option>
					</el-select>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="房间朝向:" prop="roomFace">
					<el-select v-model="insertdata.roomFace" :disabled="indexInput" >
						<el-option	
						v-for="item in this.$store.state.face"
						:label="item.label"
						:value="item.value"
						></el-option>
					</el-select>
				</el-form-item>
			</el-col>
		</el-form-item>
		
		<el-form-item style="width: 100%;">
			<el-col :span="9">
				<el-form-item label="房间号:" prop="roomNum">
					<el-input v-model.trim="insertdata.roomNum" size="default" style="width: 200px;" :disabled="indexInput" ></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="10">
				<el-form-item label="房间租金:" prop="roomRent">
					<el-input v-model.trim="insertdata.roomRent" size="default" style="width: 200px;" :disabled="indexInput" ></el-input>
				</el-form-item>
			</el-col>
		</el-form-item>
		
		<el-form-item style="width: 100%;">
			<el-col :span="9">
				<el-form-item label="房间面积:" prop="roomSize">
					<el-input v-model.trim="insertdata.roomSize" size="default" style="width: 200px;" :disabled="indexInput" ></el-input>
				</el-form-item>
			</el-col>
		</el-form-item>
		
		<el-form-item style="width: 100%;">
			<el-col :span="24">
				<el-form-item label="房间描述:" prop="roomDescribe" >
					<el-input type="textarea" v-model.trim="insertdata.roomDescribe" size="default" style="width: 500px;"></el-input>
				</el-form-item>
			</el-col>
		</el-form-item>
		
		
		<el-form-item style="width: 100%;">
			<el-col :span="24">
				<el-form-item label="房间特点:" prop="roomItem" >
					<el-input type="textarea" v-model.trim="insertdata.roomItem" size="default" style="width: 500px;"></el-input>
				</el-form-item>
			</el-col>
		</el-form-item>
		
		
		
		<!-- 多文件上传 -->
		<el-form-item >
			<el-col :span="24" >
				<el-form-item label="房间图片上传:">
					<el-upload :action="this.$store.state.updateUrl" list-type="picture-card" methods="post" :on-success="successupload" >
						<el-icon><Plus /></el-icon>
						<template #file="{ file }">
						  <div>
							<img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
							<span class="el-upload-list__item-actions">
							  <span
								@click="handlePictureCardPreview(file)"
							  >
								<el-icon><zoom-in /></el-icon>
							  </span>
							  <span
								v-if="!disabled"
								@click="handleRemove(file)"
							  >
								<el-icon><Delete /></el-icon>
							  </span>
							</span>
						  </div>
						</template>
					  </el-upload>
				</el-form-item>
			</el-col>
		</el-form-item>
		
		
		
		<el-form-item >
			<el-col :span="24" style=" text-align: center;">
				<el-button	@click="insert" type="primary" style="margin-right: 100px;">添加</el-button>
			</el-col>
			
		</el-form-item>
		
		  <el-dialog v-model="dialogVisible" width="600px">
		    <img style="width: 500px; height: 500px;" :src="dialogImageUrl" alt="Preview Image" />
		  </el-dialog>
	</el-form>
</template>

<script>
	import {request} from "../../network/request.js"
	import { Delete,Plus , ZoomIn} from '@element-plus/icons-vue'
	import { ElMessage } from 'element-plus'
	export default{
		
		name:"insertroom",
		components:{
			ElMessage,
			Plus,
			Delete,
			ZoomIn
		},
		data(){
			return{
				//多文件上传的数据
				dialogImageUrl :"",
				dialogVisible :false,
				disabled :false,
				
				insertdata:{
					url: "/vue/insertRoom",
					roomNum : "",//房间号
					roomSize:"",//房间大小
					roomRent:"",//房间租金
					roomHiretype :"",//出租类型
					roomFace :"",// 房间朝向
					roomDescribe: "",//房间描述
					roomItem: "",//房间特点
					roomIshaire: "",//房间是否出租
					communityId:"",//所属小区Id
					roomHouseid:"",//所属房屋Id
					roomUrl:""
				},
				//再输入小区之前是不允许输入房间信息的
				indexInput: true,
				//获取小区的名字
				communityName:[
				],
				//获取房屋的名字
				houseSaleName:[
				],
				rules:{
					roomNum:[	{ required: true, message: '请输入房间号!' }],
					roomSize:[	{ required: true,message: '请输入房间面积!'}],
					roomRent:[	{ required: true,message: '请输入房间面积!'}],
					roomHiretype:[	{ required: true,message: '请选择房间出租类型!'}],
					roomFace:[	{ required: true,message: '请选择房间朝向!'}],
					roomSize:[	{ required: true,message: '请选择房间面积!'}],
				}
			}
		},
		methods:{
			//提交时的验证
			insert(){
				if (!this.$refs.formRefRoom) return
				  this.$refs.formRefRoom.validate((valid) => {
				    if (valid && !this.insertdata.roomUrl == "") {//验证成功时
					//将最后一个 ， 去掉
						this.insertdata.roomUrl=this.insertdata.roomUrl.substring(0,this.insertdata.roomUrl.length-1)
						console.log(this.insertdata)
						request({//提交
							url: this.insertdata.url,
							params:this.insertdata
						}).then(res=>{
							//提交后对选择框进行刷新
							ElMessage.success("添加成功")
							this.insertdata = this.$options.data().insertdata
							this.indexInput = true
						})
				    } else {
						
						if(this.insertdata.roomUrl == ""){
							ElMessage.error("请下载添加的图片!")
						}else {
							ElMessage.error("提交失败!")
						}
							
				      return false
				    }
				  })
			},
			//小区改变是的事件
			queryHouse(communityId){
				request({
					methods: "post",
					url:"/vue/queryHouseNameAndId",
					params:{
						communityId:communityId
					}
				}).then(res =>{
					this.houseSaleName = this.$options.data().houseSaleName
					res.filter(item =>{
						
							this.houseSaleName.push({
								label: item.houseName,
								value : item.houseId,
							})
						})
				})
			},
			//房子选择是触发
			showHouse(){
				this.indexInput = false
			},
			//多文件触发事件
			handlePictureCardPreview(file){
				this.dialogImageUrl = file.url
				this.dialogVisible = true
			},
			handleRemove(file){
				console.log(file)
			},
			//上传成功后的钩子 （事件）
			successupload(response,uploadFile){
				console.log(uploadFile)
				this.insertdata.roomUrl += "E:\\html_workplace\\lessonproject\\sr\\assets\\" + response + ","
			}
			
			
			
			
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
			
			// request({
			// 	url:"/vue/queryHouseNameAndId"
			// }).then(res =>{
			// 	res.filter(item =>{
			// 		this.houseSaleName.push({
			// 			label: item.houseName,
			// 			value : item.houseId,
			// 		})
			// 	})
			// })
			
			
		}
	}
</script>

<style>
</style>
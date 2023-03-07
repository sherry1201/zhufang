<template>
	<h2 style="text-align: center; margin-right:150px;">修改密码</h2>
	<el-form :model="form" 
	label-width="150px"
	 style=" margin: 0 auto; margin-top: 60px; width: 700px;"
	 :rules="rulesEdit"
	  ref="formRefEditAdminPassword"
	 >
		 <el-form-item label="输入原密码:" prop="adminPasswordOld">
			<el-input  size="default" v-model.trim="form.adminPasswordOld" style="height: 30px; width: 250px;"></el-input>
		 </el-form-item>
		<el-form-item label="输入新密码:" prop="NewadminPassword">
			<el-input  size="default" v-model.trim="form.NewadminPassword" style="height: 30px; width: 250px;"></el-input>
		</el-form-item>
		<el-form-item label="确认新密码:" prop="ReNewadminPassword">
			<el-input size="default" v-model.trim="form.ReNewadminPassword" style="height: 30px; width: 250px;"></el-input>
		</el-form-item>
		<el-form-item >
			<el-button style="text-align: center; margin-left:80px;" type="primary" @click="editpassword">修改</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import {request} from "../../network/request.js"
	import { ElMessage } from 'element-plus'
	export default{
		data(){
			const checkPassword = (rules,value,cal)=>{
				if(value != this.form.NewadminPassword){
					cal(new Error("两次输入的密码不一致!"))
				}else{
					cal()
				}
			}
			//正则表达式验证
			const regPasswpord = (rules,value,cal)=>{
				var password = /^[0-9a-zA-Z]{5,9}$/
				if(!password.test(value)){
					cal(new Error("账号格式为5到9位的任意字母或数字!"))
				}else{
					cal()
				}
			}
			//判断原密码是否与新密码 是否一样
			const checkPasswordSamilar = (rules,value,cal) =>{
				if(this.$store.state.admin.adminPassword == value){
					cal(new Error("新密码不能原密码一致!"))
				}
				cal()
				
			}
			//判断原密码与输入的是否一致
			const checkOldPassword = (rules,value,cal) =>{
				if(this.$store.state.admin.adminPassword != value){
					cal(new Error("原密码不一致!"))
				}
				cal()
			}
			return{
				form:{
					url:"/vue/updataAdminPassword1",
					adminId:this.$store.state.admin.adminId,
					adminPasswordOld: "",
					NewadminPassword:"",
					ReNewadminPassword:"",
				},
				rulesEdit:{
					adminPasswordOld:[{ required: true, message: '请输入原密码!' },
										{ validator:checkOldPassword,trigger:"blur"}],
					NewadminPassword:[{ required: true, message: '请输入新密码!' },
									{validator:regPasswpord ,trigger:"blur"},
									{validator:checkPasswordSamilar,trigger:"blur"}],
									
					ReNewadminPassword:[{validator:checkPassword ,trigger:"blur"}],
				}
			}
		},
		methods:{
			//提交时的验证
			editpassword(){
				if (!this.$refs.formRefEditAdminPassword) return
				  this.$refs.formRefEditAdminPassword.validate((valid) => {
				    if (valid) {//自定义规则验证成功时
						request({//提交
							url:this.form.url,
							params:this.form
						}).then(res=>{
							ElMessage.success("修改成功!")
							this.$router.replace("/")
						})
				    } else {
							ElMessage.error("提交失败!")
				      return false
				    }
				  })
			},
		},
		components:{
			ElMessage,
		}
	}
</script>

<style>
</style>
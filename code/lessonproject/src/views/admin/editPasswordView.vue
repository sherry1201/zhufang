<template>
	<h2 style="text-align: center; margin-right:150px;">找回密码</h2>
	<el-form :model="form" 
	label-width="150px"
	 style=" margin: 0 auto; margin-top: 60px; width: 700px;"
	 :rules="rulesForgot"
	  ref="formRefEditPassword"
	 >
		<el-form-item label="输入新密码:" prop="adminPassword">
			<el-input  size="default" v-model.trim="form.adminPassword" style="height: 30px; width: 250px;"></el-input>
		</el-form-item>
		<el-form-item label="确认新密码:" prop="ReadminPassword">
			<el-input size="default" v-model.trim="form.ReadminPassword" style="height: 30px; width: 250px;"></el-input>
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
				if(value != this.form.adminPassword){
					cal(new Error("两次输入的密码不一致!"))
				}else{
					cal()
				}
			}
			
			const regPasswpord = (rules,value,cal)=>{//正则表达式验证
				var password = /^[0-9a-zA-Z]{5,9}$/
				if(!password.test(value)){
					cal(new Error("账号格式为5到9位的任意字母或数字!"))
				}else{
					cal()
				}
			}
			return{
				form:{
					url:"/vue/updataAdminPassword",
					adminId:this.$route.params.adminId,
					adminPassword: "",
					ReadminPassword:"",
				},
				rulesForgot:{
					adminPassword:[{ required: true, message: '请输入新密码!' },
									{validator:regPasswpord ,trigger:"blur"}],
					
					ReadminPassword:[{validator:checkPassword ,trigger:"blur"}],
				}
			}
		},
		methods:{
			//提交时的验证
			editpassword(){
				if (!this.$refs.formRefEditPassword) return
				  this.$refs.formRefEditPassword.validate((valid) => {
				    if (valid) {//自定义规则验证成功时
						request({//提交
							url:this.form.url,
							params:this.form
						}).then(res=>{
							if(res == 1){
								this.$router.replace("/")
								ElMessage.error("修改成功!")
							}
						})
				    } else {
							ElMessage.error("提交失败!")
				      return false
				    }
				  })
			},
		},
		mounted() {
			console.log(this.form.adminId)
		},
		components:{
			ElMessage,
		}
	}
</script>

<style>
</style>
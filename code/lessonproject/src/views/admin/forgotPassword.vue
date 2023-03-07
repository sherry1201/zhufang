<template>
	<h2 style="text-align: center; margin-right:150px;">找回密码</h2>
	<el-form :model="form" 
	label-width="150px"
	 style=" margin: 0 auto; margin-top: 60px; width: 700px;"
	 :rules="rulesForgot"
	  ref="formRefForgotPassword"
	 >
		<el-form-item label="需要找回账号:" prop="adminAccount">
			<el-input  size="default" v-model.trim="form.adminAccount" style="height: 30px; width: 250px;"></el-input>
		</el-form-item>
		<el-form-item label="绑定的手机号:" prop="adminPhone">
			<el-input size="default" v-model.trim="form.adminPhone" style="height: 30px; width: 250px;"></el-input>
		</el-form-item>
		<el-form-item >
			<el-button style="text-align: center; margin-left:80px;" type="primary" @click="checkaccount">下一步</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import {request} from "../../network/request.js"
	import { ElMessage } from 'element-plus'
	export default{
		data(){
			return{
				form:{
					url:"/vue/forgotAdmin",
					adminAccount: "",
					adminPhone:"",
				},
				rulesForgot:{
					adminAccount:[	{ required: true, message: '请输入账号!' }],
					adminPhone:[	{ required: true,message: '请输入手机号!'}],
				}
			}
		},
		methods:{
			//提交时的验证
			checkaccount(){
				if (!this.$refs.formRefForgotPassword) return
				  this.$refs.formRefForgotPassword.validate((valid) => {
				    if (valid) {//自定义规则验证成功时
						
						request({//提交
							url:this.form.url,
							params:this.form
						}).then(res=>{
							if(res.res == "1"){
								this.$router.push({name :"editPassword",params:{adminId : res.adminId}})
								ElMessage.success("验证成功!")
							}else{
								ElMessage.error(res.res)
							}
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
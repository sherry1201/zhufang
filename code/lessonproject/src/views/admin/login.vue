<template>
	<div class="loginView">
		<h1>欢迎登录租房管理系统</h1>
		<p>账号: <input type="text" placeholder="账号" v-model.trim="adminAccount" :class="{deStyle:isclassacc,wrongStyle:!isclassacc}" @blur="checkAcc" ></p>
		<p>密码: <input type="password" placeholder="密码" v-model.trim="adminPassword" :class="{deStyle:isclasspss,wrongStyle:!isclasspss}" @blur="checkPss" ></p>
		<p><span v-text="msg" style="color: #ff0000;"></span></p>
		<p><router-link to="/forgotPassword" class="forgotpassword">忘记密码</router-link></p>
		<p><button class="btn" @click="logincheck" >登&nbsp;&nbsp; 录</button></p>
	</div>
</template>

<script>
	import {request} from "../../network/request.js"
	
	export default{
		name: "login",
		data(){
			return{
					adminAccount:"",
					adminPassword:"",
					msg: "",
					isclassacc: true,
					isclasspss:true
			}
			
		},
		
		methods: {
			checkAcc(){
				if(this.adminAccount==""){
					this.msg = "账号不能为空!";
					this.isclassacc = false
				}else{
					this.msg = "";
					this.isclassacc = true
				}
			},
			checkPss(){
				if(this.adminPassword==""){
					this.msg = "密码不能为空!";
					this.isclasspss = false
				}else{
					this.msg = "";
					this.isclasspss = true
				}
			},
			logincheck(){
				if(this.adminPassword==""){
					this.msg = "密码不能为空!";
					this.isclasspss = false
				}else if(this.adminAccount==""){
					this.msg = "账号不能为空!";
					this.isclassacc = false
				}else{
					request({
						url: "/vue/loginCheck",
						params:{
							adminAccount : this.adminAccount,
							adminPassword : this.adminPassword
						}
					}).then(res =>{
						console.log(res)
						if(res.res == "1"){
							this.$store.commit("login")
							this.$store.commit("insertAdmin",res.list)
							this.$router.replace("/queryroom")
						}else if(res.res == "密码错误!"){
							this.msg = res.res
							this.isclasspss = false
						}else if(res.res == "账号未注册!"){
							this.msg = res.res
							this.isclassacc =false
						}
					})
					
				}
			}
			
		}
		
	}
</script>

<style scoped>
	.wrongStyle{
		border: 1px solid #ff0000;
	}
	.deStyle{
		border: 1px solid #CDD0D6;
	}
	
	input{
		width: 250px;
		height: 30px;
		outline: none;
		border-radius: 5px;
		margin: 10px;
	}
	.btn{
		width: 120px;
		height: 40px;
		background-color: Transparent;
		border: 1px solid #CDD0D6;
		border-radius: 5px;
		font-size: 15px;
		cursor: pointer;
		margin-left: 20px;
	}
	.btn:hover{
		opacity: 0.7;
	}
	
	.loginView{
		text-align: center;
	}
	.forgotpassword:hover{
		opacity: 0.7;
	}
</style>
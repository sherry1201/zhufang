<template>
	<div class="loginView">
		<h1>欢迎注册租房管理系统</h1>
		<p>账号:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
		<input type="text" placeholder="账号" v-model.trim="admin.adminAccount" :class="{deStyle:styleA,wrongStyle:!styleA}" @blur="checkA()" >
		</p>
		<p>密码:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
		<input type="password" placeholder="密码" v-model.trim="admin.adminPassword" :class="{deStyle:styleP,wrongStyle:!styleP}" @blur="checkP()" >
		</p>
		<p>确认密码:
		<input type="password" placeholder="确认密码" v-model.trim="readminPassword" :class="{deStyle:styleRP,wrongStyle:!styleRP}" @blur="checkRP()" >
		</p>
		<p>手机号:&nbsp;&nbsp;&nbsp; 
		<input type="text" placeholder="手机号" v-model.number.trim="admin.adminPhone" :class="{deStyle:stylePH,wrongStyle:!stylePH}" @blur="checkPh()" >
		</p>
		
		<p><span v-text="msg" style="color: #ff0000;"></span></p>
		<p><button class="btn" @click="regcheck" >注&nbsp;&nbsp; 册</button></p>
	</div>
</template>

<script>
	import {request} from "../../network/request.js"
	
	export default{
		data(){
			return {
				msg:"",
				styleA: true,
				styleP: true,
				styleRP: true,
				stylePH: true,
				
				admin: {
					adminAccount: "",
					adminPassword: "",
					adminPhone: ""
				},
				readminPassword: "",
				
				
			}
		},
		methods:{
			//验证账号
			checkA(){
				var account = /[0-9a-zA-Z]{5,9}/
				if(this.admin.adminAccount == ""){//空值判断
					this.msg = "账号不能为空!"
					this.styleA =false
					return false
				}else if(!account.test(this.admin.adminAccount)){//格式（正则）判断
					this.msg = "账号必须为长度5到9的字符加数字!"
					this.styleA =false
					return false
				}else{
					this.msg = ""
					this.styleA =true
					return true
				}
			},
			//验证密码
			checkP(){
				var account = /[0-9a-zA-Z]{5,9}/
				if(this.admin.adminPassword == ""){//空值判断
					this.msg = "密码不能为空!"
					this.styleP =false
					return false
				}else if(!account.test(this.admin.adminPassword)){//格式（正则）判断
					this.msg = "密码必须为长度5到9的字符或数字!"
					this.styleP =false
					return false
				}else if(this.readminPassword != this.admin.adminPassword){//密码符合一直判断
					this.msg = "两次输入的密码不一致!"
					this.styleP =false
					return false
				}else{
					this.msg = ""
					this.styleP =true
					this.styleRP =true
					return true
				}
			},
			//验证确认密码
			checkRP(){
				if(this.readminPassword == ""){//空值判断
					this.msg = "确认密码不能为空!"
					this.styleRP =false
					return false
				}else if(this.readminPassword != this.admin.adminPassword){//密码符合一直判断
					this.msg = "两次输入的密码不一致!"
					this.styleRP =false
					return false
				}else{
					this.msg = ""
					this.styleP =true
					this.styleRP =true
					return true
				}
			},
			//验证手机号
			checkPh(){
				var phone = /^[1][3-9][0-9]{9}$/
				if(this.admin.adminPhone == ""){//空值判断
					this.msg = "手机号不能为空!"
					this.stylePH =false
					return false
				}else if(!phone.test(this.admin.adminPhone)){//正则判断手机号格式
					this.msg = "手机号格式无效!"
					this.stylePH =false
					return false
				}else{
					this.msg = ""
					this.stylePH =true
					return true
				}
			},
			//注册按钮验证
			regcheck(){
				//当所有的验证成功通过时提交数据
				console.log(this.admin)
				if(this.checkA() && this.checkP()&& this.checkRP()&& this.checkPh() ){
					request({
						url: "/vue/insertAdmin",
						params: {
							adminAccount: this.admin.adminAccount,
							adminPassword: this.admin.adminPassword,
							adminPhone: this.admin.adminPhone,
						}
					}).then(res =>{
						if(res == "注册成功!"){
							this.$router.replace("/")
							alert(res)
						}
					})
				}
			}
			
			
		}
	}
	
</script>

<style>
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
	}
	.btn:hover{
		opacity: 0.8;
		color: #CDD0D6;
	}
	
	.loginView{
		text-align: center;
	}
</style>
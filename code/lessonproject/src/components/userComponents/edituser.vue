<template>
	<!-- 接受编辑容器的数据 -->
	<el-form v-model="this.$store.state.editContainer" label-width="120px">
		
	    <el-form-item label="用户姓名">
	      <el-input v-model="this.$store.state.editContainer.userName" style="width: 200px;" />
	    </el-form-item>
		<el-form-item label="用户年龄">
		  <el-input v-model.number="this.$store.state.editContainer.userAge" style="width: 200px;" />
		</el-form-item>
		<el-form-item label="用户性别">
		  <el-input v-model.number="this.$store.state.editContainer.userSex" style="width: 200px;" />
		</el-form-item>
		<el-form-item label="用户邮箱">
		  <el-input v-model.trim="this.$store.state.editContainer.userMail" style="width: 200px;" />
		</el-form-item>
		<el-form-item label="用户账号">
		  <el-input v-model="this.$store.state.editContainer.userAccount" style="width: 200px;" />
		</el-form-item>
		<el-form-item label="用户电话">
		  <el-input v-model="this.$store.state.editContainer.userPhone" style="width: 200px;" />
		</el-form-item>
		<el-form-item label="用户头像">
			<el-upload
			class="avatar-uploader"
			:action="this.$store.state.updateUrl"
			methods="post"
			:show-file-list="false"
			drag
			 :on-success="handleAvatarSuccess"
			 :before-upload="beforeAvatarUpload"
			>
			<img v-if="this.$store.state.imgUrl" :src="require('@/assets/'+this.$store.state.imgUrl)" class="avatar" />
			<el-icon v-else  class="avatar-uploader-icon"><Plus/></el-icon>
			</el-upload>
		</el-form-item>
	</el-form>
</template>

<script>
	import { Plus } from '@element-plus/icons-vue'
	import { ElMessage } from 'element-plus'
	export default{
		name : "edituser",
		methods:{
			handleAvatarSuccess(response, uploadFile){
				this.$store.state.editContainer.userUrl = "E:\\html_workplace\\lessonproject\\src\assets\\" + response
				setTimeout(()=>{
					this.$store.state.imgUrl = response
				},1000)
			},
			beforeAvatarUpload(rawFile){
				if(rawFile.type !="image/jpeg"){
					ElMessage.error('图片必须是jpeg,png格式!')
					return false
				}else if(rawFile.size > 1048576){
					ElMessage.error('图片大小不能超过1MB!')
					return false
				}
				return true
			}
		},
		components: {
			Plus,
			ElMessage
		}
	}
</script>
<style>
</style>
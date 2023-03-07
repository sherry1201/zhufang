<template>
		<el-dialog v-model="this.$store.state.editBtn" title="编辑" width="550px" draggable @close="closedialog">
			<slot name="editDialog"></slot>
			<p style="text-align: center;">
				<el-button @click="changeEditBtn">关闭</el-button>
				<el-button @click="upload" type="primary">提交修改</el-button>
			</p>	
		</el-dialog>
</template>

<script>
	import { ElMessage } from 'element-plus'
	export default {
		name:"edit",
		props:["updateUrl","pageData"],
		methods:{
			changeEditBtn(){
				 this.$store.state.editContainer = ""
				 this.$store.state.editBtn= false
				 this.$store.dispatch("getData",this.pageData)
			},
			upload(){
				//执行异步操作带数据
				this.$store.dispatch("getUpdateMul",this.updateUrl)
				this.$store.state.editBtn= false
				ElMessage({
					message: "修改成功!",
					type: "success"
				})
				
			},
			//关闭时清空容器数据
			closedialog(){
				this.$store.state.editContainer = ""
			}
		},
		
		// mounted() {
		// 	// console.log(dialog)
		// 	for(var item in this.editData){
		// 		console.log(editData)
		// 	}
		// }
	}
</script>

<style>
	button{
		margin-right: 20px;
	}
	.avatar-uploader .el-upload {
	  border: 1px dashed var(--el-border-color);
	  border-radius: 6px;
	  cursor: pointer;
	  position: relative;
	  overflow: hidden;
	  transition: var(--el-transition-duration-fast);
	}
	
	.avatar-uploader .el-upload:hover {
	  border-color: var(--el-color-primary);
	}
	.el-icon.avatar-uploader-icon {
	  font-size: 28px;
	  color: #8c939d;
	  width: 200px;
	  height: 200px;
	  text-align: center;
	}
	.avatar-uploader .avatar {
	  width: 200px;
	  height: 200px;
	  display: block;
	}
</style>
<style scoped>

</style>
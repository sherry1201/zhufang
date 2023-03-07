<template>
	<!-- 接受编辑容器的数据 -->
	<el-form v-model="this.$store.state.editContainer" label-width="120px">
	    <el-form-item label="房间号">
	      <el-input v-model="this.$store.state.editContainer.roomNum" style="width: 200px;" />
	    </el-form-item>
		<el-form-item label="房间租金">
		  <el-input v-model.number="this.$store.state.editContainer.roomRent" style="width: 200px;" />
		</el-form-item>
		<el-form-item label="租房类型(整租/合租)">
			<el-select v-model="this.$store.state.editContainer.roomHiretype" >
				<el-option
				v-for="item in this.$store.state.type"
				:label="item.label"
				:value="item.value"
				></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="描述">
		  <el-input type="textarea" v-model="this.$store.state.editContainer.roomDescribe" maxlength="50" style="width: 300px;" placeholder="请输入房间的描述,最多不能超过五十个字符!" />
		</el-form-item>
		<el-form-item label="特点">
		  <el-input v-model="this.$store.state.editContainer.roomItem" style="width: 200px;" />
		</el-form-item>
		<el-form-item label="管理员Id">
		  <el-input v-model.number="this.$store.state.editContainer.roomSaleid" style="width: 200px;" />
		</el-form-item>
	</el-form>
</template>

<script>
	export default{
		name : "editroom",
		data(){
			return{
				imageUrl : "",
			}
		},
	}
</script>
<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<style>
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
</style>
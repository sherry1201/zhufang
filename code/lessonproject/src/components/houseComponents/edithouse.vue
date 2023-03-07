<template>
	<!-- 接受编辑容器的数据 -->
	<el-form v-model="this.$store.state.editContainer" label-width="120px">
	    <el-form-item label="门牌">
	      <el-input v-model="this.$store.state.editContainer.houseName" style="width: 200px;" />
	    </el-form-item>
		
		
		<el-form-item label="房屋大小">
		  <el-input type="textarea" v-model="this.$store.state.editContainer.houseSize"  style="width: 300px;" />
		</el-form-item>
		<el-form-item label="已租用户">
		  <el-input v-model="this.$store.state.editContainer.houseUserlist" style="width: 200px;" disabled />
		</el-form-item>
		
		<el-form-item label="楼层">
		  <el-input v-model="this.$store.state.editContainer.houseFloor" style="width: 200px;" />
		</el-form-item>
		
		<el-form-item label="房屋户型">
		 <el-select v-model="this.$store.state.editContainer.houseLayout" placeholder="房屋户型" size="small" style="width: 100px;">
		 <el-option
		 	v-for=" item in this.$store.state.housetype"
		 	:key="item.value"
		 	:label="item.label"
		 	:value="item.value" />
			</el-select >
		</el-form-item>
		<el-form-item label="管理员ID">
		  <el-input v-model="this.$store.state.editContainer.houseSalespersonid" style="width: 200px;" />
		</el-form-item>
		<el-form-item label="所在小区ID">
		  <el-input v-model="this.$store.state.editContainer.houseCommunityid" style="width: 200px;" />
		</el-form-item>
	</el-form>
</template>

<script>
	export default{
		name : "edithouse",
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
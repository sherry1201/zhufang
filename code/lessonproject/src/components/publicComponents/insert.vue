<template>
		<slot name="insert"></slot>
</template>

<script>
	export default{
		name:"insert",
	}
</script>

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
	.el-icon.avatar-uploader-icon {
	  font-size: 28px;
	  color: #8c939d;
	  width: 200px;
	  height: 200px;
	}
	.avatar-uploader .avatar {
	  width: 200px;
	  height: 200px;
	  display: block;
	}
</style>
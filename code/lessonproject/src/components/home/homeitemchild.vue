<template>
	<el-menu-item :index="indexchild"><slot name="msg"></slot></el-menu-item>
</template>

<script>
	export default{
		name: "homeitemchild",
		props: [
			"indexchild"
		]
	}
</script>

<style>
</style>
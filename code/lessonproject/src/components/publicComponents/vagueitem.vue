<template>
	<p>
		<slot name="vagueitem"></slot>
		<el-button size="small" @click="vagueQuery">查找</el-button>
	</p>
</template>

<script>
	import {request} from "../../network/request.js"
	export default{
		name :"vagueitem",
		props:{
			pageData:Object,
		},
		methods:{
			//模糊查询
			vagueQuery(){
				this.pageData.pageIndex = 1
				this.$store.dispatch("getData",this.pageData)
			},
		}
	}
</script>

<style>
	em{
		font-size: 14px;
		margin: 0px 5px 0px 5px;
	}
</style>
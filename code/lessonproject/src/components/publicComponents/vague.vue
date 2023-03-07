<template>
	<p style="text-align: left;">
			<p>
				<slot name="vague"></slot>
				<el-button size="small" @click="vagueQuery">查找</el-button>
				<!-- <el-button size="small" @click="clear" type="danger">清空</el-button> -->
			</p>	
			<p>
				<el-button size="small" style="margin-right:10px;" @click="this.$store.state.isMul = !this.$store.state.isMul">批量操作</el-button>
				<el-button @click="deleteMulData" type="danger" style="margin-right:50px;" size="small" v-if="!this.$store.state.isMul">删除选中</el-button>
			</p>	
			
			
			
		
	</p>
</template>

<script>
	import {request} from "../../network/request.js"
	export default{
		name :"vague",
		props:{
			pageData:Object,
		},
		methods:{
			//模糊查询
			vagueQuery(){
				this.pageData.pageIndex = 1
				this.$store.dispatch("getData",this.pageData)
			},
			//删除选中
			deleteMulData(){
				this.$emit("deleteMul")
			},
			//清空
			clear(){
				this.$emit("clearCondition")
			}
		}
	}
</script>

<style>
	em{
		font-size: 14px;
		margin-left: 8px;
	}
</style>
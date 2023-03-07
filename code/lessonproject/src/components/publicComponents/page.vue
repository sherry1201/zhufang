<template>
		 <el-pagination
			class="page"
		      :currentPage="pageIndex"
		      v-model:page-size="pageSize"
		      layout="total, prev, pager, next, jumper"
		      :total="this.$store.state.pageDataContainer.totalCount"
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		    />
</template>

<script>
	export default{
		name:" page",
		props:{
			pageIndex:Number
		},
		data(){
			return{
				pageSize:12,
			}
		},
		methods: {
			handleCurrentChange(pageIndex){
				this.$store.state.pageDataContainer.pageIndex = pageIndex
				this.$store.dispatch("getData",this.$store.state.pageDataContainer)
				// this.$emit("getPage",pageIndex)
			},
			handleSizeChange(pageSize){
			}
		}
	}
</script>

<style>
	
	.page{
		width: 700px;
		margin: 0 auto;
		margin-top: 50px;
	}
	
</style>

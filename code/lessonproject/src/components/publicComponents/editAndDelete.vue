<template>
	<el-table-column label="Operations" width="180px">
	      <template #default="scope">
	        <el-button size="small" 
			@click="handleEdit(scope.$index, scope.row)"
	          >编辑</el-button>
	        <el-button
	          size="small"
	          type="danger"
	          @click="handleDelete(scope.$index, scope.row)"
	          >删除</el-button
	        >
	      </template>
	    </el-table-column>
</template>

<script>
	export default{
		name: "editAndDelete",
		methods:{
			//编辑
			handleEdit(number,row){
				this.$store.state.editBtn = true
				this.$store.state.editContainer = row
			},
			//删除
			handleDelete(index,row){
				this.$emit("getDeleteData",row)
				// console.log(row)
				// request({
				// 	url: "/vue/deleteSale",
				// 	params:{
				// 		saleId: row.saleId
				// 	}
				// }).then(res =>{
				// 	//删除后实时同步
				// 	request({
				// 		url: "/vue/querySale",
				// 		params: {
				// 			pageIndex:this.pageDate.pageIndex,
				// 			pageSize:this.pageDate.pageSize,
				// 			saleName: this.saleName,
				// 			salePhone: this.salePhone
				// 		}
				// 	}).then(res =>{
				// 		this.sale = res.list
				// 		this.pageDate.totalCount = res.totalCount
				// 	})
				// })
			},
		}
	}
	
</script>

<style>
</style>
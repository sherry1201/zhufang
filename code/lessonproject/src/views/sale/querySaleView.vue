<template>
	<div v-if="this.$store.state.islogin">
		<vagueitem :pageData="pageData">
			<template #vagueitem>
				<em>姓名: <el-input type="text" v-model.trim="pageData.saleName" size="small" placeholder="销售员姓名" style="width: 200px;" /></em>
				<em>电话: <el-input type="text" v-model.trim="pageData.salePhone" size="small" placeholder="销售员电话" style="width: 200px;" /></em>
			</template>
		</vagueitem>
		
		
	<querysale table-layout="auto">
	</querysale>
	<page :pageIndex="this.$store.state.pageDataContainer.pageIndex" ></page>
	</div>
	<h1 v-else>请先登录!</h1>
</template>

<script>
	import {request} from "../../network/request.js"
	import querysale from "../../components/saleComponents/querysale.vue"
	import page from "../../components/publicComponents/page.vue"
	import vagueitem from "../../components/publicComponents/vagueitem.vue"
	export default{
		components: {
			querysale,
			page,
			vagueitem
		},
		data(){
			return{
				// 分页数据
				pageData:{
					url: "/vue/querySale",
					deleteUrl:"/vue/deleteSale",
					pageIndex:1,
					pageSize:12,
					totalCount:0,
					totalPage:0,
					saleName:"",
					salePhone:"",
				},
			}
		},
		created() {
			this.$store.state.mulId =[]
			this.$store.state.pageDataContainer = this.pageData
			this.$store.dispatch("getData",this.pageData)
		},
		// methods:{
		// 	模糊查询
		// 	vagueQuery(){
		// 		request({
		// 			url: "/vue/querySale",
		// 			params: {
		// 				saleName:this.saleName,
		// 				salePhone:this.salePhone,
		// 				pageIndex:1,
		// 				pageSize:this.pageData.pageSize
		// 			}
		// 		}).then(res =>{
		// 			this.sale = res.list
		// 			this.pageData.totalCount = res.totalCount
		// 		})
				
		// 	}
		// }
		
	}
</script>

<style>
</style>
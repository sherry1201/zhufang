<template><div v-if="this.$store.state.islogin">
	<vague 
	 :pageData="pageData" 
	 @deleteMul="deletemul"
	  >
		<template #vague>
			<em>姓名: <el-input type="text" v-model.trim="pageData.saleName" size="small" placeholder="销售员姓名" style="width: 80px;" /></em>
			<em>电话: <el-input type="text" v-model.trim="pageData.salePhone" size="small" placeholder="销售员电话" style="width: 100px;" /></em>
		</template>
	</vague>
	
	<!-- <p style="text-align: left;">
		<em>姓名:</em><el-input type="text" v-model="saleName" size="small" placeholder="销售员姓名" style="width: 80px;" />
		<em>电话:</em><el-input type="text" v-model="salePhone" size="small" placeholder="销售员电话" style="width: 100px;" />
		<el-button size="small" @click="vagueQuery">查找</el-button>
	</p> -->
	<querysale  @select="selectTest" @select-all="deleteAll">
		<template #mulDelete>
			<el-table-column type="selection" width="55"  v-if="!this.$store.state.isMul" ></el-table-column>
		</template>
		<!-- 编辑和删除按钮 -->
		<template #editAndView>
			<editAndDelete :saleName="pageData.saleName" 
			:salePhone="pageData.salePhone" 
			:pageData="pageData" 
			@getDeleteData="getdeletedata"
			></editAndDelete>
		</template>
		<!-- 编辑的输入框 -->
		
		<!-- <edit>
			<template #edit>
				<el-input v-model="saleNameEdit" style="width: 100px;" size="small" placeholder="销售员姓名"></el-input>
				<el-input v-model="salePhoneEdit" style="width: 100px;" size="small" placeholder="销售员电话"></el-input>
				<e-upload action=""  :limit="1" :auto-upload="false">
					<template #trigger>
						<el-button type="primary">select file</el-button>
					</template>
				</e-upload>
			</template>
		</edit> -->
		</querysale>
		
		<edit updateUrl="/vue/updateSale" :pageData="pageData">
			<template #editDialog>
				<editsale></editsale>
			</template>
		</edit>
		<page :pageIndex="this.$store.state.pageDataContainer.pageIndex" ></page>

</div><h1 v-else>请先登录!</h1></template>

<script>
	import {request} from "../../network/request.js"
	import querysale from "../../components/saleComponents/querysale.vue"
	import page from "../../components/publicComponents/page.vue"
	import edit from "../../components/publicComponents/edit.vue"
	import vague from "../../components/publicComponents/vague.vue"
	import editAndDelete from "../../components/publicComponents/editAndDelete.vue"
	import editsale from "../../components/saleComponents/editsale.vue"
	export default {
		data(){
			return{
				// sale: [],//数据的集合
				// mulDelete: [],//多选删除的集合
				// mulId: [],//多选删除的集合Id
				dialogbtn : false,
				
				// 分页数据
				pageData:{
					url: "/vue/querySale",
					deleteUrl:"/vue/deleteSale",
					mulDeleteUrl:"/vue/mulDeleteSale",
					pageIndex:1,
					pageSize:12,
					totalCount:0,
					totalPage:0,
					saleName:"",
					salePhone:"",
				},
				//删除的ID
				deleteId: {
					saleId:-1,
				},
				//批量操作按钮
				// data:[],
				// mulBtn: true,
				//编辑数据
				// saleNameEdit: "",
				// salePhoneEdit: "",
			}
		},
		components:{
			querysale,
			//分页组件
			page,
			//模糊查询组件
			vague,
			//编辑和删除组件
			editAndDelete,
			//编辑的弹出框
			edit,
			editsale,
		},
		methods: {
			//弹出编辑页面
			// disapperdialog(row,dialogBtn){
			// 	//编辑和删除按钮的数据发射到编辑页面 然后传到 编辑封装的组件
			// 	this.data = row
			// 	this.dialogbtn = !dialogBtn
			// },
			//修改
			// handleEdit(number,row){
			// 	// this.saleNameEdit = row.saleName
			// 	// this.salePhoneEdit = row.salePhone
			// },
			//删除
			getdeletedata(list){
				// this.$store.state.pageDataContainer = this.pageData
				this.deleteId.saleId=list.saleId
				this.$store.dispatch("getDelete",this.deleteId)
				// request({
				// 		url: "/vue/deleteSale",
				// 		params:{
				// 			saleId: sale.saleId
				// 		}
				// 	}).then(res =>{
				// 		//删除后实时同步
				// 		// request({
				// 		// 	url: "/vue/querySale",
				// 		// 	params: this.pageData
				// 		// }).then(res =>{
				// 		// 	this.sale = res.list
				// 		// 	this.pageData.totalCount = res.totalCount
				// 		// })
				// 		this.$store.dispatch("getData",this.pageData)
				// 		this.pageData = this.$store.state.pageData
				// 		this.sale = this.$store.state.container
				// 	})
			},
			//删除
			// handleDelete(index,row){
			// 	request({
			// 		url: "/vue/deleteSale",
			// 		params:{
			// 			saleId: row.saleId
			// 		}
			// 	}).then(res =>{
			// 		//删除后实时同步
			// 		request({
			// 			url: "/vue/querySale",
			// 			params: {
			// 				pageIndex:this.pageData.pageIndex,
			// 				pageSize:this.pageData.pageSize,
			// 				saleName: this.saleName,
			// 				salePhone: this.salePhone
			// 			}
			// 		}).then(res =>{
			// 			this.sale = res.list
			// 			this.pageData.totalCount = res.totalCount
			// 		})
			// 	})
			// },
			//全选删除
			deleteAll(val){
				this.$store.state.mulDelete = val
			},
			//多选删除
			selectTest(val){
				this.$store.state.mulDelete = val
				
			},
			deletemul(){
				this.$store.commit("getMulIdSale")
				this.$store.dispatch("getDeleteMul",this.$store.state.mulDelete)
			}
			// deleteMulData(){
			// 	this.$store.dispatch("getDeleteMulSale",)
				
				// request({
				// 	url: "/vue/mulDeleteSale",
				// 	params:this.mulId
				// }).then(res =>{
				// 	//删除后实时同步
				// 	// request({
				// 	// 	url: "/vue/querySale",
				// 	// 	params: this.pageData
				// 	// }).then(res =>{
				// 	// 	this.sale = res.list
				// 	// 	this.pageData.totalCount = res.totalCount
				// 	// })
				// 	this.$store.dispatch("getData",this.$store.state.pageDataContainer)
				// })
			// },
			//分页方法
			// getpage(pageIndex){
			// 	this.pageData.pageIndex = pageIndex
			// 	// request({
			// 	// 	url: "/vue/querySale",
			// 	// 	params: this.pageData
			// 	// }).then(res =>{
			// 	// 	this.sale = res.list
			// 	// })
			// 	this.$store.dispatch("getData",this.pageData)
			// },
			
			// //子组件模糊查询发射的事件
			// getvaguedata(){
			// 	//模糊搜索是按钮处于静止状态
			// 	// this.sale=sale
			// }
		},
		
		created() {
			this.$store.state.isMul =true
			this.$store.state.mulId =[]
			this.$store.state.pageDataContainer = this.pageData
			this.$store.dispatch("getData",this.pageData)
		}
		
	}
</script>

<style>
</style>
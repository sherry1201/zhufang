<template><div v-if="this.$store.state.islogin">
	<vague :pageData="pageData" @deleteMul="deletemul" >
		<template #vague>
				<em>房子门牌: <el-input type="text" v-model.trim="pageData.houseName" size="small" placeholder="房子门牌" style="width: 100px;" /></em>
				
				<em>房屋大小(m<sup>2</sup>): <el-input type="text" v-model.trim="pageData.houseSize1" size="small" placeholder="不限" style="width: 80px;" /> -
					<el-input type="text" v-model.trim="pageData.houseSize2" size="small" placeholder="不限" style="width: 80px;" /></em>
				
				<em>房屋楼层: <el-input type="text" v-model.number="pageData.houseFloor" size="small" placeholder="房屋楼层" style="width: 100px;" /></em>
				<em>房屋户型: <el-select v-model="pageData.houseLayout" placeholder="房屋户型" size="small" style="width: 100px;">
				<el-option
					v-for=" item in this.$store.state.housetype"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				/></el-select></em>
			
		</template>
	</vague>
	<queryhouse  @select="selectTest" @select-all="deleteAll">
		<template #mulDelete>
			<el-table-column type="selection" width="55"  v-if="!this.$store.state.isMul" />
		</template>
		<!-- 编辑和删除按钮 -->
		<template #editAndView>
			<editAndDelete :pageData="pageData" @getDeleteData="getdeletedata"></editAndDelete>
		</template>
		</queryhouse>
		<edit updateUrl="/vue/updateHouse" :pageData="pageData">
			<template #editDialog>
				<edithouse></edithouse>
			</template>
		</edit>
		
		<page :pageIndex="this.$store.state.pageDataContainer.pageIndex" ></page>
</div><h1 v-else>请先登录!</h1></template>

<script>
	import {request} from "../../network/request.js"
	import queryhouse from "../../components/houseComponents/queryhouse.vue"
	import page from "../../components/publicComponents/page.vue"
	import edit from "../../components/publicComponents/edit.vue"
	import vague from "../../components/publicComponents/vague.vue"
	import editAndDelete from "../../components/publicComponents/editAndDelete.vue"
	import edithouse from "../../components/houseComponents/edithouse.vue"
	export default {
		data(){
			return{
				// 分页数据
				pageData:{
					url: "/vue/queryHouse",
					deleteUrl:"/vue/deleteHouse",
					mulDeleteUrl:"/vue/mulDeleteHouse",
					pageIndex:1,
					pageSize:12,
					totalCount:0,
					totalPage:0,
					houseName: "",//房子门牌
					
					houseSize:"",//房子大小
					
					houseUserlist:"",//已住用户Id
					houseFloor: "",//房屋楼层
					houseLayout: "",//房屋户型
				},
				//删除的ID
				deleteId: {
					userId:-1,
				},
				//批量操作按钮
				mulBtn: true,
			}
		},
		components:{
			queryhouse,
			//分页组件
			page,
			//模糊查询组件
			vague,
			//编辑和删除组件
			editAndDelete,
			//编辑的对话框
			edit,
			//对话框 需要变编辑的内容
			edithouse
		},
		methods: {
			//修改
			handleEdit(number,row){
			},
			//删除
			getdeletedata(list){
				this.deleteId.houseId=list.houseId
				this.$store.dispatch("getDelete",this.deleteId)
			},
			//全选删除
			deleteAll(val){
				this.$store.state.mulDelete = val
			},
			//多选删除
			selectTest(val){
				this.$store.state.mulDelete = val
				
			},
			deletemul(){
				this.$store.commit("getMulIdHouse")
				this.$store.dispatch("getDeleteMul",this.$store.state.mulDelete)
			}
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

<!-- <template>
	<queryhouse :house="house" @select="selectTest" @select-all="deleteAll">
	<template #mulDelete><el-table-column type="selection" width="55"  /></template>
		<template #editAndView>
			<el-table-column label="Operations" width="140px">
			      <template #default="scope">
			        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
			          >编辑</el-button
			        >
			        <el-button
			          size="small"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)"
			          >删除</el-button
			        >
			      </template>
			    </el-table-column>
		</template>
		</queryhouse>
		<el-button @click="deleteMulData" style="background-color: #F56C6C; color: #fff;">删除选中</el-button>
		<page @getPage="getpage" :totalCount="pageData.totalCount" :totalPage="pageData.totalPage"></page>
</template>

<script>
	import {request} from "../../network/request.js"
	import queryhouse from "../../components/houseComponents/queryhouse.vue"
	import page from "../../components/publicComponents/page.vue"
	export default{
		data(){
			return{
					house:[],
					mulDelete: [],//多选删除的集合
					mulId: [],//多选删除的集合Id
					// 分页数据
					pageData:{
						pageIndex:1,
						pageSize:12,
						totalCount:0,
						totalPage:0,
					}
			}
		},
		components: {
			queryhouse,
			page
		},
		mounted() {
			request({
				url: "/vue/queryHouse",
				params: {
					pageIndex:this.pageData.pageIndex,
					pageSize:this.pageData.pageSize,
				}
			}).then(res =>{
				this.house = res.list
				this.pageData.totalCount = res.totalCount
			})
		},
		methods: {
			//修改
			handleEdit(index,row){
				
			},
			//删除
			handleDelete(index,row){
				request({
					url: "/vue/deleteHouse",
					params:{
						houseId: row.houseId
					}
				}).then(res =>{
					//删除后实时同步
					request({
						url: "/vue/queryHouse",
						params: {
							pageIndex:this.pageData.pageIndex,
							pageSize:this.pageData.pageSize,
						}
					}).then(res =>{
						this.house = res.list
						this.pageData.totalCount = res.totalCount
					})
				})
			},
			//全选删除
			deleteAll(val){
				this.mulDelete = val
			},
			// //多选删除
			selectTest(val){
				this.mulDelete = val
				
			},
			deleteMulData(){
				for(var index of this.mulDelete){
					this.mulId.push(index.houseId)
				}
				request({
					url: "/vue/mulDeleteHouse",
					params:this.mulId
				}).then(res =>{
					//删除后实时同步
					request({
						url: "/vue/queryHouse",
						params: {
							pageIndex:this.pageData.pageIndex,
							pageSize:this.pageData.pageSize,
						}
					}).then(res =>{
						this.house = res.list
						this.pageData.totalCount = res.totalCount
					})
				})
			},
			getpage(pageIndex,pageSize){
				this.pageData.pageIndex = pageIndex
				this.pageData.pageSize = pageSize
				request({
					url: "/vue/queryHouse",
					params: {
						pageIndex:pageIndex,
						pageSize:pageSize
					}
				}).then(res =>{
					this.house = res.list
				})
			}
			
			
			
			
			
			
		}
	}
</script>

<style>
	button:hover{
		opacity: 0.7;
	}
</style> -->
<template>
	<div v-if="this.$store.state.islogin">
	<vague :pageData="pageData" @deleteMul="deletemul" @clearCondition="clearcondition" >
		<template #vague>
			<em>姓名: <el-input type="text" v-model.trim="pageData.userName" size="small" placeholder="用户姓名" style="width: 150px;" /></em>
			<em>年龄: <el-input type="text" v-model.trim="pageData.userAge" size="small" placeholder="用户电话" style="width: 150px;" /></em>
			<em>手机号: <el-input type="text" v-model.trim="pageData.userPhone" size="small" placeholder="用户手机号" style="width: 150px;" /></em>
			<em>用户邮箱: <el-input type="text" v-model.trim="pageData.userMail" size="small" placeholder="用户邮箱" style="width: 150px;" /></em>
			<em>是否已租房: <el-select v-model="pageData.userIshire" placeholder="是否租房" size="small" style="width: 100px;">
			<el-option
				v-for=" item in this.$store.state.ishire"
				:key="item.value"
				:label="item.label"
				:value="item.value"
			/>
			</el-select></em>
			<em  v-if="pageData.userIshire == 1">已租日期: <el-input type="text" v-model.trim="pageData.userHiredays" size="small" placeholder="租房月份" style="width: 150px;" /></em>
			<em  v-if="pageData.userIshire == 1">租用房间Id: <el-input type="text" v-model.trim="pageData.userHireroomid" size="small" placeholder="已租房间Id" style="width: 150px;" /></em>
		</template>
	</vague>
	<queryuser  @select="selectTest" @select-all="deleteAll">
		<template #mulDelete>
			<el-table-column type="selection" width="55"  v-if="!this.$store.state.isMul" />
		</template>
		
		
		<!-- 编辑和删除按钮 -->
		<template #editAndView>
			<editAndDelete :pageData="pageData" @getDeleteData="getdeletedata"></editAndDelete>
		</template>
		</queryuser>
		
		
		<edit updateUrl="/vue/updateUser" :pageData="pageData">
			<template #editDialog>
				<edituser></edituser>
			</template>
		</edit>
		
		
		<page :pageIndex="this.$store.state.pageDataContainer.pageIndex" ></page>
		</div>
		<h1 v-else>请先登录!</h1>
</template>

<script>
	import {request} from "../../network/request.js"
	import queryuser from "../../components/userComponents/queryuser.vue"
	import page from "../../components/publicComponents/page.vue"
	import edit from "../../components/publicComponents/edit.vue"
	import vague from "../../components/publicComponents/vague.vue"
	import editAndDelete from "../../components/publicComponents/editAndDelete.vue"
	import edituser from "../../components/userComponents/edituser.vue"
	export default {
		data(){
			return{
				// 分页数据
				pageData:{
					url: "/vue/queryUser",
					deleteUrl:"/vue/deleteUser",
					mulDeleteUrl:"/vue/mulDeleteUser",
					pageIndex:1,
					pageSize:12,
					totalCount:0,
					totalPage:0,
					userName:"",
					userMail:"",
					userAge:"",
					userPhone:"",
					userIshire:"",
					userHiredays:"",
					userHireroomid:"",
				},
				//是否租用
				ishire:[
						{
							hire : "不限",
							value: "",
						},
						{
							hire : "已租",
							value: 1 
						},
						{
							hire : "未租",
							value: 0
						},
					],
				//删除的ID
				deleteId: {
					userId:-1,
				},
				//批量操作按钮
				mulBtn: true,
			}
		},
		components:{
			queryuser,
			//分页组件
			page,
			//模糊查询组件
			vague,
			//编辑和删除组件
			editAndDelete,
			edit,
			edituser
		},
		methods: {
			//修改
			handleEdit(number,row){
			},
			//清空模糊查询的条件
			clearcondition(){
				
			},
			//删除
			getdeletedata(list){
				this.deleteId.userId=list.userId
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
				this.$store.commit("getMulIdUser")
				this.$store.dispatch("getDeleteMul",this.$store.state.mulDelete)
			}
		},
		created(){
			this.$store.state.isMul =true
			this.$store.state.mulId =[]
			this.$store.state.pageDataContainer = this.pageData
			this.$store.dispatch("getData",this.pageData)
		}
		
	}
</script>

<style>
</style>
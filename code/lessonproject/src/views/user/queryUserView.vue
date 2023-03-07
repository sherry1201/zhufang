<template>
	<div v-if="this.$store.state.islogin">
		<vagueitem :pageData="pageData">
			<template #vagueitem>
				<em>姓名: <el-input type="text" v-model.trim="pageData.userName" size="small" placeholder="用户姓名" style="width: 150px;" /></em>
				<em>年龄: <el-input type="text" v-model.trim="pageData.userAge" size="small" placeholder="用户电话" style="width: 150px;" /></em>
				<em>手机号: <el-input type="text" v-model.trim="pageData.userPhone" size="small" placeholder="用户手机号" style="width: 150px;" /></em>
				<em>用户邮箱: <el-input type="text" v-model.trim="pageData.userMail" size="small" placeholder="用户邮箱" style="width: 150px;" /></em>
				<em>是否已租房: <el-select v-model="pageData.userIshire" placeholder="是否租房" size="small" style="width: 100px;" @change ="clearIshire">
				<el-option
					v-for=" item in this.$store.state.ishire"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				/>
				</el-select></em>
				<em  v-if="pageData.userIshire == 1">已租日期:<el-input type="text" v-model.trim="pageData.userHiredays" size="small" placeholder="租房月份" style="width: 150px;" /></em>
				<em  v-if="pageData.userIshire == 1">租用房间Id:<el-input type="text" v-model.trim="pageData.userHireroomid" size="small" placeholder="已租房间Id" style="width: 150px;" /></em>
			</template>
		</vagueitem>
			
			
		<queryuser table-layout="auto">
		</queryuser>
		<page :pageIndex="this.$store.state.pageDataContainer.pageIndex" ></page>
	</div>
	<h1 v-else>请先登录!</h1>
</template>

<script>
	import {request} from "../../network/request.js"
	import queryuser from "../../components/userComponents/queryuser.vue"
	import page from "../../components/publicComponents/page.vue"
	import vagueitem from "../../components/publicComponents/vagueitem.vue"
	export default{
		components: {
			queryuser,
			page,
			vagueitem
		},
		data(){
			return{
				// 分页数据
				pageData:{
					url: "/vue/queryUser",
					pageIndex:1,
					pageSize:12,
					totalCount:0,
					totalPage:0,
					userName:"",
					userAge:"",
					userMail:"",
					userPhone:"",
					userIshire:"",
					userHiredays:"",
					userHireroomid:"",
				},
			}
		},
		methods: {
			clearIshire(value){
				if( value == ""){
					this.pageData.userHireroomid = ""
					this.pageData.userHiredays = ""
				}
			}
		},
		created() {
			this.$store.state.mulId =[]
			this.$store.state.pageDataContainer = this.pageData
			this.$store.dispatch("getData",this.pageData)
		},
	}
</script>

<style>
</style>
<!-- 	<queryuser :user="user" table-layout="auto"></queryuser>
	<page @getPage="getpage" :totalCount="pageData.totalCount" :totalPage="pageData.totalPage"></page>
</template>

<script>
	import {request} from "../../network/request.js"
	import queryuser from "../../components/userComponents/queryuser.vue"
	import page from "../../components/publicComponents/page.vue"
	export default{
		components:{
			queryuser,
			page
		},
		data(){
			return{
				user: [],
				// 分页数据
				pageData:{
					pageIndex:1,
					pageSize:12,
					totalCount:0,
					totalPage:0,
				}
			}
		},
		created() {
			request({
				url: "/vue/queryUser",
				params: {
					pageIndex:this.pageData.pageIndex,
					pageSize:this.pageData.pageSize,
				}
			}).then(res =>{
				this.user = res.list
				this.pageData.totalCount = res.totalCount
			})
		},
		methods:{
			getpage(pageIndex,pageSize){
				this.pageData.pageIndex = pageIndex
				this.pageData.pageSize = pageSize
				request({
					url: "/vue/queryUser",
					params: {
						pageIndex:pageIndex,
						pageSize:pageSize
					}
				}).then(res =>{
					this.user = res.list
				})
			}
		}
	}
</script>

<style>
</style> -->

<template><div v-if="this.$store.state.islogin">
	<vague :pageData="pageData" @deleteMul="deletemul" >
		<template #vague>
			<em>房间号: <el-input type="text" v-model.trim="pageData.roomName" size="small" placeholder="房间号" style="width: 80px;" /> </em>
			
			<em>房间大小: <el-input type="text" v-model.trim="pageData.roomSize1" size="small" placeholder="不限" style="width: 40px;" /> - 
			 <el-input type="text" v-model.trim="pageData.roomSize2" size="small" placeholder="不限" style="width: 40px;" />m<sup>2</sup></em>
			 
			<em >租金(￥): <el-input type="text" v-model.trim="pageData.roomRent1" size="small" placeholder="不限" style="width: 40px;" /> -
				<el-input type="text" v-model.trim="pageData.roomRent2" size="small" placeholder="不限" style="width: 40px;" /></em>
			
			<em >出租类型: <el-select v-model="pageData.roomType" size="small" style="width: 80px;">
				<el-option
					v-for="item in this.$store.state.type"
					:label="item.label"
					:value="item.value"
				></el-option>
			</el-select> </em>
			
			
			<em >房间朝向: <el-select v-model="pageData.roomFace" size="small" style="width: 80px;">
				<el-option
					v-for="item in  this.$store.state.face"
					:label="item.label"
					:value="item.value"
				></el-option>
			</el-select> </em>
			
			<em >房间描述: <el-input type="text" v-model.trim="pageData.roomDescribe" size="small" placeholder="房间描述" style="width: 150px;" /></em>
			<em >房间特点: <el-input type="text" v-model.trim="pageData.roomItem" size="small" placeholder="房间特点" style="width: 150px;" /></em> 
			
			<em >是否已租: <el-select v-model="pageData.roomIshire" size="small" style="width: 80px;">
				<el-option
					v-for="item in this.$store.state.ishire"
					:label="item.label"
					:value="item.value"
				></el-option>
			</el-select></em>
			
			<em >所属房屋Id: <el-input type="text" v-model.trim="pageData.roomHouseid" size="small" placeholder="所属房屋Id" style="width: 80px;" /></em>
			<em >管理员Id: <el-input type="text" v-model.number="pageData.roomSaleid" size="small" placeholder="管理员Id" style="width: 80px;" /></em>
		</template>
	</vague>
	<queryroomCpn  @select="selectTest" @select-all="deleteAll">
		<template #mulDelete>
			<el-table-column type="selection" width="55"  v-if="!this.$store.state.isMul" />
		</template>
		<!-- 编辑和删除按钮 -->
		<template #editAndView>
			<editAndDelete :pageData="pageData" @getDeleteData="getdeletedata"></editAndDelete>
		</template>
		</queryroomCpn>
		<edit updateUrl="/vue/updateRoom" :pageData="pageData">
			<template #editDialog>
				<editroom></editroom>
			</template>
		</edit>
		
		
		<page :pageIndex="this.$store.state.pageDataContainer.pageIndex" ></page>
</div><h1 v-else>请先登录!</h1></template>

<script>
	import {request} from "../../network/request.js"
	import queryroomCpn from "../../components/roomComponents/queryroom.vue"
	import page from "../../components/publicComponents/page.vue"
	import edit from "../../components/publicComponents/edit.vue"
	import vague from "../../components/publicComponents/vague.vue"
	import editAndDelete from "../../components/publicComponents/editAndDelete.vue"
	import editroom from "../../components/roomComponents/editroom.vue"
	export default {
		data(){
			return{
				// 分页数据
				pageData:{
					url: "/vue/queryRoom",
					deleteUrl:"/vue/deleteRoom",
					mulDeleteUrl:"/vue/mulDeleteRoom",
					pageIndex:1,
					pageSize:12,
					totalCount:0,
					totalPage:0,
					roomNum : "",//房间号
					roomSize1:"",//房间大小1  1 < roomSize <  2
					roomSize2:"",//房间大小
					roomRent1:"",//房间租金   1<  roomRent  < 2
					roomRent2:"",//房间租金
					roomHiretype :"",//出租类型
					roomFace :"",// 房间朝向
					roomDescribe: "",//房间描述
					roomItem: "",//房间特点
					roomIshaire: "",//房间是否出租
					roomHouseid:"",//房间所属房子Id
					roomSaleid:""
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
			queryroomCpn,
			//分页组件
			page,
			//模糊查询组件
			vague,
			//编辑和删除组件
			editAndDelete,
			edit,
			editroom
		},
		methods: {
			//修改
			handleEdit(number,row){
			},
			//删除
			getdeletedata(list){
				this.deleteId.roomId=list.roomId
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
				this.$store.commit("getMulIdRoom")
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
	em{
		font-size: 14px;
		margin: 0px 5px 0px 5px;
	}
</style>

<!-- <template>
	<queryroomCpn :room="room" @select="selectTest" @select-all="deleteAll">
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
		</queryroomCpn>
		<el-button @click="deleteMulData" style="background-color: #F56C6C; color: #fff;">删除选中</el-button>
		<page @getPage="getpage" :totalCount="pageData.totalCount" :totalPage="pageData.totalPage"></page>
	
</template>

<script>
	import {request} from "../../network/request.js"
	import queryroomCpn from "../../components/roomComponents/queryroom.vue"
	import page from "../../components/publicComponents/page.vue"
	export default{
		data(){
			return{
					room:[],
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
			queryroomCpn,
			page
		},
		mounted() {
			request({
				url: "/vue/queryRoom",
				params: {
					pageIndex:this.pageData.pageIndex,
					pageSize:this.pageData.pageSize,
				}
			}).then(res =>{
				this.room = res.list
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
					url: "/vue/deleteRoom",
					params:{
						roomId: row.roomId
					}
				}).then(res =>{
					//删除后实时同步
					request({
						url: "/vue/queryRoom",
						params: {
							pageIndex:this.pageData.pageIndex,
							pageSize:this.pageData.pageSize,
						}
					}).then(res =>{
						this.room = res.list
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
					this.mulId.push(index.roomId)
				}
				request({
					url: "/vue/mulDeleteRoom",
					params:this.mulId
				}).then(res =>{
					//删除后实时同步
					request({
						url: "/vue/queryRoom",
						params: {
							pageIndex:this.pageData.pageIndex,
							pageSize:this.pageData.pageSize,
						}
					}).then(res =>{
						this.room = res.list
						this.pageData.totalCount = res.totalCount
					})
				})
			},
			getpage(pageIndex,pageSize){
				this.pageData.pageIndex = pageIndex
				this.pageData.pageSize = pageSize
				request({
					url: "/vue/queryRoom",
					params: {
						pageIndex:pageIndex,
						pageSize:pageSize
					}
				}).then(res =>{
					this.room = res.list
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
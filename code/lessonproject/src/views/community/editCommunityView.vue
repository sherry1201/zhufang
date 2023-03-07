
<template><div v-if="this.$store.state.islogin">
	<vague :pageData="pageData" @deleteMul="deletemul" >
		<template #vague>
				<em>小区名: <el-input type="text" v-model.trim="pageData.communityName" size="small" placeholder="小区名" style="width: 100px;" /></em>
				<em>小区地址: <el-input type="text" v-model.trim="pageData.communityAdress" size="small" placeholder="小区地址" style="width: 100px;" /></em>
				<!-- 地铁的二级联动 -->
				<em>地铁线路: <el-select v-model="pageData.communityAreafirst"  style="width: 100px;" size="small" placeholder="地铁线路" @change="changeSubway">
				<el-option 
					v-for="item in this.$store.state.subway"
					:label="item.subwayLine.label"
					:value="item.subwayLine.value"
				></el-option>
				
				</el-select>
				<el-select v-model="pageData.communitySubwaysecond"  style="width: 100px;" size="small" placeholder="地铁站">
				<el-option 
					v-for="item in this.$store.state.subwayContainer"
					:label="item"
					:value="item"
				></el-option></el-select>
				</em>
				
				<em>地铁距离(m): <el-input type="text" v-model.trim="pageData.communitySubwaydistence1" size="small" placeholder="不限" style="width: 80px;" /> -
					<el-input type="text" v-model.trim="pageData.communitySubwaydistence2" size="small" placeholder="不限" style="width: 80px;" /></em>
					
				<!-- 区域的二联动 -->
				<em>区域: <el-select v-model="pageData.communityAreafirst"  style="width: 100px;" size="small" placeholder="所属区域" @change="changeArea">
				<el-option 
					v-for="item in this.$store.state.area"
					:label="item.areafirst.label"
					:value="item.areafirst.value"
				></el-option></el-select>
				<el-select v-model="pageData.communityAreasecond"  style="width: 100px;" size="small" placeholder="所属街道">
				<el-option 
					v-for="item in this.$store.state.areaContainer"
					:label="item"
					:value="item"
				></el-option></el-select>
				</em>
				
				<em>小区面积(m<sup>2</sup>): <el-input type="text" v-model.trim="pageData.communitySize1" size="small" placeholder="不限" style="width: 80px;" /> -
					<el-input type="text" v-model.trim="pageData.communitySize2" size="small" placeholder="不限" style="width: 80px;" /></em>
				
				<em>电梯: <el-select v-model="pageData.communityIslift" placeholder="小区地址" size="small" style="width: 100px;">
				<el-option
					v-for=" item in this.$store.state.islift"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				/></el-select></em>
				<br>
				<em>小区绿化面积(%): <el-input type="text" v-model.trim="pageData.communityGreensize1" size="small" placeholder="不限" style="width: 80px;" /> -
					<el-input type="text" v-model.trim="pageData.communityGreensize2" size="small" placeholder="不限" style="width: 80px;" /></em>
					
				<em>停车场大小(m<sup>2</sup>): <el-input type="text" v-model.trim="pageData.communityParkinglotsize1" size="small" placeholder="不限" style="width: 80px;" /> -
					<el-input type="text" v-model.trim="pageData.communityParkinglotsize2" size="small" placeholder="不限" style="width: 80px;" /></em>
					
				<em>停车场费用(￥/月): <el-input type="text" v-model.trim="pageData.communityParkinglotcost1" size="small" placeholder="不限" style="width: 80px;" /> -
					<el-input type="text" v-model.trim="pageData.communityParkinglotcost2" size="small" placeholder="不限" style="width: 80px;" /></em>
						
				<em>物业电话: <el-input type="text" v-model.nnumber="pageData.communityPropertyphone" size="small" placeholder="物业电话" style="width: 100px;" /></em>
		</template>
	</vague>
	<querycommunity  @select="selectTest" @select-all="deleteAll">
		<template #mulDelete>
			<el-table-column type="selection" width="55"  v-if="!this.$store.state.isMul" />
		</template>
		<!-- 编辑和删除按钮 -->
		<template #editAndView>
			<editAndDelete @getDeleteData="getdeletedata"  @getEditData = "getEditData"></editAndDelete>
		</template>
	</querycommunity>
		
		<!-- 编辑的对话框 -->
		<edit updateUrl="/vue/updateCommunity" :pageData="pageData">
			<template #editDialog>
				<editcommunity></editcommunity>
			</template>
		</edit>
		<page :pageIndex="this.$store.state.pageDataContainer.pageIndex" ></page>
</div><h1 v-else>请先登录!</h1></template>

<script>
	import {request} from "../../network/request.js"
	import querycommunity from "../../components/communityComponents/querycommunity.vue"
	import page from "../../components/publicComponents/page.vue"
	import edit from "../../components/publicComponents/edit.vue"
	import vague from "../../components/publicComponents/vague.vue"
	import editAndDelete from "../../components/publicComponents/editAndDelete.vue"
	import editcommunity from "../../components/communityComponents/editcommunity.vue"
	export default {
		data(){
			return{
				// 分页数据
				pageData:{
					url: "/vue/queryCommunity",
					deleteUrl:"/vue/deleteCommunity",
					mulDeleteUrl:"/vue/mulDeleteCommunity",
					pageIndex:1,
					pageSize:12,
					totalCount:0,
					totalPage:0,
					communityName: "",
					communityAdress: "",
					communitySubwayfirst: "",//地铁的二级联动
					communitySubwaysecond: "",
					
					communitySubwaydistence1: "",//地铁距离
					communitySubwaydistence2: "",
					
					communityAreafirst: "",//区域的二联动
					communityAreasecond: "",
					
					communitySize1: "",//小区面积
					communitySize2: "",
					
					communityIslift: "",//电梯
					
					communityGreensize1: "",//绿化面积
					communityGreensize2: "",
					
					communityParkinglotsize1: "",//停车场大小
					communityParkinglotsize2: "",
					
					communityParkinglotcost1:"",//停车场费用
					communityParkinglotcost2:"",
					
					communityPropertyphone:"",//物业电话
				},
				//编辑的数据
				editData:[],
				//删除的ID
				deleteId: {
					userId:-1,
				},
				//批量操作按钮
				mulBtn: true,
			}
		},
		components:{
			querycommunity,
			//分页组件
			page,
			//模糊查询组件
			vague,
			//编辑和删除组件
			editAndDelete,
			//对话框的编辑
			edit,
			editcommunity
		},
		methods: {
			//地铁的二级联动
			changeSubway(val){
				console.log(val)
				for(var  item in this.$store.state.subway){
					if( this.$store.state.subway[item].subwayLine.value == val ){
						this.$store.state.subwayContainer = this.$store.state.subway[item].subwayStation
						this.pageData.communitySubwaysecond=""
					}
				}
				
			},
			//区域的二级联动
			changeArea(val){
				for(var  item in this.$store.state.area){
					if( this.$store.state.area[item].areafirst.value == val ){
						this.$store.state.areaContainer = this.$store.state.area[item].areasecond
						this.pageData.communityAreasecond=""
					}
				}
			},
			//修改
			getEditData(row){
			},
			//删除
			getdeletedata(list){
				this.deleteId.communityId=list.communityId
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
				this.$store.commit("getMulIdCommunity")
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
	<querycommunity :community="community" @select="selectTest" @select-all="deleteAll">
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
		</querycommunity>
		<el-button @click="deleteMulData" style="background-color: #F56C6C; color: #fff;">删除选中</el-button>
		<page @getPage="getpage" :totalCount="pageData.totalCount" :totalPage="pageData.totalPage"></page>
</template>

<script>
	import {request} from "../../network/request.js"
	import querycommunity from "../../components/comunityComponents/querycommunity.vue"
	import page from "../../components/publicComponents/page.vue"
	export default {
		data(){
			return{
				community: [],
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
		components:{
			querycommunity,
			page
		},
		methods: {
			//修改
			handleEdit(index,row){
				
			},
			//删除
			handleDelete(index,row){
				console.log(row.communityId)
				request({
					url: "/vue/deleteCommunity",
					params:{
						communityId: row.communityId
					}
				}).then(res =>{
					//删除后实时同步
					request({
						url: "/vue/queryCommunity",
						params: {
							pageIndex:this.pageData.pageIndex,
							pageSize:this.pageData.pageSize,
						}
					}).then(res =>{
						this.community = res.list
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
					this.mulId.push(index.communityId)
				}
				request({
					url: "/vue/mulDeleteCommunity",
					params:this.mulId
				}).then(res =>{
					//删除后实时同步
					request({
						url: "/vue/queryCommunity",
						params: {
							pageIndex:this.pageData.pageIndex,
							pageSize:this.pageData.pageSize,
						}
					}).then(res =>{
						this.community = res.list
						this.pageData.totalCount = res.totalCount
					})
				})
			},
			getpage(pageIndex,pageSize){
				this.pageData.pageIndex = pageIndex
				this.pageData.pageSize = pageSize
				request({
					url: "/vue/queryCommunity",
					params: {
						pageIndex:pageIndex,
						pageSize:pageSize
					}
				}).then(res =>{
					this.community = res.list
				})
			}
			
			
			
			
		},
		mounted() {
			request({
				url: "/vue/queryCommunity",
				params: {
					pageIndex:this.pageData.pageIndex,
					pageSize:this.pageData.pageSize,
				}
			}).then(res =>{
				this.community = res.list
				this.pageData.totalCount = res.totalCount
			})
		}
		
	}
</script>

<style>
	button:hover{
		opacity: 0.7;
	}
</style> -->
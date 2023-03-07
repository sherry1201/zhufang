<template><div v-if="this.$store.state.islogin">
		<vagueitem :pageData="pageData">
			<template #vagueitem>
				<em>房间号: <el-input type="text" v-model.trim="pageData.roomName" size="small" placeholder="房间号" style="width: 80px;" /> </em>
				
				<em>房间大小(m<sup>2</sup>): <el-input type="text" v-model.trim="pageData.roomSize1" size="small" placeholder="不限" style="width: 40px;" /> - 
				 <el-input type="text" v-model.trim="pageData.roomSize2" size="small" placeholder="不限" style="width: 40px;" />m<sup>2</sup></em>
				 
				<em >租金(￥): <el-input type="text" v-model.trim="pageData.roomRent1" size="small" placeholder="不限" style="width: 40px;" /> -
					<el-input type="text" v-model.trim="pageData.roomRent2" size="small" placeholder="不限" style="width: 40px;" /></em>
				
				<em >出租类型: <el-select v-model="pageData.roomHiretype" size="small" style="width: 80px;">
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
		</vagueitem>
		
		
	<queryroomCpn table-layout="auto">
	</queryroomCpn>
	<page :pageIndex="this.$store.state.pageDataContainer.pageIndex" ></page>
</div><h1 v-else>请先登录!</h1></template>

<script>
	import {request} from "../../network/request.js"
	import queryroomCpn from "../../components/roomComponents/queryroom.vue"
	import page from "../../components/publicComponents/page.vue"
	import vagueitem from "../../components/publicComponents/vagueitem.vue"
	export default{
		components: {
			queryroomCpn,
			page,
			vagueitem
		},
		data(){
			return{
				// 分页数据
				pageData:{
					url: "/vue/queryRoom",
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
					roomItem:"",//房间特点
					roomIshire: "",//房间是否出租
					roomHouseid:"",//房间所属房子Id
					roomSaleid:""
				},
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

<!-- <template>
	<queryroomCpn :room="room" table-layout="auto"></queryroomCpn>
	<page @getPage="getpage" :totalCount="pageData.totalCount" :totalPage="pageData.totalPage"></page>
</template>

<script>
	import {request} from "../../network/request.js"
	import queryroomCpn from "../../components/roomComponents/queryroom.vue"
	import page from "../../components/publicComponents/page.vue"
	export default{
		data(){
			return {
				room:[],
				// 分页数据
				pageData:{
					pageIndex:1,
					pageSize:12,
					totalCount:0,
					totalPage:0,
				}
			}
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
		components: {
			queryroomCpn,
			page
		},
		methods:{
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
</style> -->
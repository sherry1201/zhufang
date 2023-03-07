<template><div v-if="this.$store.state.islogin">
		<vagueitem :pageData="pageData">
			<template #vagueitem>
				<em>房子门牌: <el-input type="text" v-model.trim="pageData.houseName" size="small" placeholder="房子门牌" style="width: 80px;" /></em>
					
				<em>房屋大小(m<sup>2</sup>): <el-input type="text" v-model.trim="pageData.houseSize1" size="small" placeholder="不限" style="width: 80px;" /> -
					<el-input type="text" v-model.trim="pageData.houseSize2" size="small" placeholder="不限" style="width: 80px;" /></em>
				
				<em>房屋楼层: <el-input type="text" v-model.nnumber="pageData.houseFloor" size="small" placeholder="房屋楼层" style="width: 80px;" /></em>
				<em>房屋户型: <el-select v-model="pageData.houseLayout" placeholder="房屋户型" size="small" style="width: 80px;">
				<el-option
					v-for=" item in this.$store.state.housetype"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				/></el-select></em>
			</template>
		</vagueitem>
		
		
	<queryhouse table-layout="auto">
	</queryhouse>
	<page :pageIndex="this.$store.state.pageDataContainer.pageIndex" ></page>
</div><h1 v-else>请先登录!</h1></template>

<script>
	import {request} from "../../network/request.js"
	import queryhouse from "../../components/houseComponents/queryhouse.vue"
	import page from "../../components/publicComponents/page.vue"
	import vagueitem from "../../components/publicComponents/vagueitem.vue"
	export default{
		components: {
			queryhouse,
			page,
			vagueitem
		},
		data(){
			return{
				// 分页数据
				pageData:{
					url: "/vue/queryHouse",
					pageIndex:1,
					pageSize:12,
					totalCount:0,
					totalPage:0,
					houseName: "",//房子门牌
					houseSubwayfirst:"",//一级地铁
					houseSubwaysecond: "",//二级地铁
					
					houseSubwaydistence1: "",//离地铁站距离
					houseSubwaydistence2: "",
					
					houseSize1:"",//房子大小
					houseSize2:"",
					
					houseUserlist:"",//已住用户Id
					houseFloor: "",//房屋楼层
					
					houseAreafirst:"",//一级区域
					houseAreasecond:"",//二级区域
					houseLayout: "",//房屋户型
				},
			}
		},
		methods:{
			//地铁的二级联动
			changeSubway(val){
				for(var  item in this.$store.state.subway){
					if( this.$store.state.subway[item].subwayLine.value == val ){
						this.$store.state.subwayContainer = this.$store.state.subway[item].subwayStation
						this.pageData.houseSubwaysecond=""
					}
				}
				
			},
			//区域的二级联动
			changeArea(val){
				for(var  item in this.$store.state.area){
					if( this.$store.state.area[item].areafirst.value == val ){
						this.$store.state.areaContainer = this.$store.state.area[item].areasecond
						this.pageData.houseAreasecond=""
					}
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

<!-- <template>
	<queryhouse :house="house" table-layout="auto"></queryhouse>
		<page @getPage="getpage" :totalCount="pageData.totalCount" :totalPage="pageData.totalPage"></page>
</template>

<script>
	import {request} from "../../network/request.js"
	import queryhouse from "../../components/houseComponents/queryhouse.vue"
	import page from "../../components/publicComponents/page.vue"
	export default{
		components: {
			queryhouse,
			page
		},
		data(){
			return{
				house:[],
				// 分页数据
				pageData:{
					pageIndex:1,
					pageSize:12,
					totalCount:0,
					totalPage:0,
				}
			}
		},
		mounted(){
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
		
		methods:{
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
		},
		
		
		
	}
</script>

<style>
</style> -->
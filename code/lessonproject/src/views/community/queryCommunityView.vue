<template><div v-if="this.$store.state.islogin">
		<vagueitem :pageData="pageData">
			<template #vagueitem>
				<em>小区名: <el-input type="text" v-model.trim="pageData.communityName" size="small" placeholder="小区名" style="width: 100px;" /></em>
				<em>小区地址: <el-input type="text" v-model.trim="pageData.communityAdress" size="small" placeholder="小区地址" style="width: 100px;" /></em>
				
				
				<!-- 地铁的二级联动 -->
				<em>地铁线路: <el-select v-model="pageData.communitySubwayfirst"  style="width: 100px;" size="small" placeholder="地铁线路" @change="changeSubway">
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
		</vagueitem>
		
		
	<querycommunity table-layout="auto">
		<template #mulDelete>
			<el-table-column type="expand">
				 <template #default="community">
					 <div style="margin-left: 100px;">
						 <p>小区名: {{community.row.communityName}} &nbsp;小区地址: {{community.row.communityAdress}}</p>
						 <p></p>
						 <p>地铁路线: {{community.row.communitySubwayfirst}} - {{community.row.communitySubwaysecond}}&nbsp;&nbsp;地铁距离:  {{community.row.communitySubwaydistence}}m</p>
						 <p>区域路线: {{community.row.communityAreafirst}} - {{community.row.communityAreasecond}}</p>
						  <p v-if="community.row.communityIslift == 1">是否有电梯: 有电梯
						  </p>
						  <p v-else>是否有电梯: 没有电梯
						  </p>
						 <p>小区面积(㎡): {{community.row.communitySize}}㎡</p>
						 <p>小区绿化面积(%): {{community.row.communityGreensize}}%</p>
						 <p>停车场大小(㎡): {{community.row.communityParkinglotsize}}㎡</p>
						 <p>停车场费用(￥/月): {{community.row.communityParkinglotcost}}元</p>
						 <p>物业电话: {{community.row.communityPropertyphone}}</p>
						 <p>小区经纬度: ({{community.row.communityLongitude}}.{{community.row.communityLatitude}})</p>
					 </div>
				 </template>
			</el-table-column>	
		</template>
	</querycommunity>
	<page :pageIndex="this.$store.state.pageDataContainer.pageIndex" ></page>
</div><h1 v-else>请先登录!</h1></template>

<script>
	import {request} from "../../network/request.js"
	import querycommunity from "../../components/communityComponents/querycommunity.vue"
	import page from "../../components/publicComponents/page.vue"
	import vagueitem from "../../components/publicComponents/vagueitem.vue"
	export default{
		components: {
			querycommunity,
			page,
			vagueitem
		},
		data(){
			return{
				// 分页数据
				pageData:{
					url: "/vue/queryCommunity",
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
			}
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
	<querycommunity :community="community" table-layout="auto"></querycommunity>
	<page @getPage="getpage" :totalCount="pageData.totalCount" :totalPage="pageData.totalPage"></page>
</template>

<script>
	import {request} from "../../network/request.js"
	import querycommunity from "../../components/comunityComponents/querycommunity.vue"
	import page from "../../components/publicComponents/page.vue"
	export default {
		components:{
			querycommunity,
			page
		},
		data(){
			return {
				community:[],
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
				url: "/vue/queryCommunity",
				params: {
					pageIndex:this.pageData.pageIndex,
					pageSize:this.pageData.pageSize,
				}
			}).then(res =>{
				this.community = res.list
				this.pageData.totalCount = res.totalCount
			})
			// request({
			// 	url: "/vue/selectPageCommunity",
			// 	params: {
			// 		pageIndex: 2,
			// 		pageSize: 10
			// 	}
			// }).then(res =>{
			// 	this.community=res.list
			// })
		},
		methods:{
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
			
			
		}
	}
</script>

<style>
</style>
 -->
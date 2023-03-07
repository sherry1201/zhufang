import { createStore } from 'vuex'
import {request} from "../network/request.js"

export default createStore({
  state: {
	  islogin: false,
	  admin:[],
	  //存放集合的容器
	  container:[],
	  // 分页数据容器
	  pageDataContainer:{
	  },
	  //批量操作切换按钮
	  isMul: true,
	  //多选删除的集合
	  mulDelete: [],
	  //多选删除的集合Id
	  mulId: [],
	  //编辑弹窗的按钮
	  editBtn: false,
	  //编辑是选中的内容 安放的容器 row
	  editContainer:[],
	  //容器
	  editData:[],
	  //编辑时 dialog 的img地址容器
	  imgUrl:"",
	  //上传的地址
	  updateUrl:"http://localhost:8888/vue/upload/",
	  //租房类型
	  type:[
	  	{
	  		label: "不限",
	  		value: "",
	  	},
	  	{
	  		label: "整租",
	  		value: "整租",
	  	},
	  	{
	  		label: "合租",
	  		value: "合租",
	  	}
	  ],
	  //房间朝向
	  face:[
	  	{
	  		label: "不限",
	  		value: "",
	  	},
	  	{
	  		label: "东",
	  		value: "东",
	  	},
	  	{
	  		label: "南",
	  		value: "南",
	  	},
	  	{
	  		label: "西",
	  		value: "西",
	  	},
	  	{
	  		label: "北",
	  		value: "北",
	  	}
	  ],
	  //是否租用
	  ishire:[
	  			{
	  				label : "不限",
	  				value: "",
	  			},
	  			{
	  				label : "已租",
	  				value: 1 
	  			},
	  			{
	  				label : "未租",
	  				value: 0
	  			}
	  	
	  	],
		//房子户型
		housetype:[
			{
				label : "不限",
				value: "",
			},
			{
				label : "一室",
				value: "一室",
			},
			{
				label : "两室",
				value: "两室",
			},
			{
				label : "三室",
				value: "三室",
			},
			{
				label : "四室",
				value: "四室",
			},
			{
				label : "五室",
				value: "五室",
			},
		],
		//房子户型
		houseAllType:[
			{
				label : "不限",
				value: "",
			},
			{
				label : "一室",
				value: "一室",
			},
			{
				label : "一室一厅",
				value: "一室一厅",
			},
			{
				label : "二室",
				value: "二室",
			},
			{
				label : "二室一厅",
				value: "二室一厅",
			},
			{
				label : "二室二厅二卫",
				value: "二室二厅二卫",
			},
			{
				label : "三室一厅",
				value: "三室一厅",
			},
			{
				label : "三室二厅一卫",
				value: "三室二厅一卫",
			},
			{
				label : "三室二厅二卫",
				value: "三室二厅二卫",
			},
			{
				label : "四室一厅",
				value: "四室一厅",
			},
			{
				label : "四室二厅二卫",
				value: "四室二厅二卫",
			},
		],
		//是否有电梯
		islift:[
			{
				label : "不限",
				value: "",
			},
			{
				label : "有电梯",
				value: 1,
			},
			{
				label : "没有电梯",
				value: 0,
			},
		],
		//地铁线路 1号线、2号线、3号线、4号线、5号线、6号线、7号线、8号线、11号线、16号线、阳逻线
		subwayContainer: [],
		subway: [
			{
				subwayLine:{
								label:"不限",
								value:""
							},
				subwayStation:[""]
			},
			{
				subwayLine:{
								label:"1号线",
								value:"1号线"
							},
				subwayStation:["汉口北", "滠口新城" ,"滕子岗" ,"堤角", "新荣" ,"丹水池" ,"徐州新村" ,"二七路" ,"头道街" ,"黄浦路",
				"三阳路" ,"大智路" ,"循礼门", "友谊路", "利济北路", "崇仁路", "硚口路" ,"太平洋" ,"宗关", "汉西一路", "古田四路", "古田三路" ,
				"古田二路", "古田一路" ,"舵落口", "竹叶海", "额头湾" ,"五环大道" ,"东吴大道", "码头潭公园" ,"三店" ,"径河"]	
			},
			{
				subwayLine:{
								label:"2号线",
								value:"2号线"
							},
				subwayStation:["天河机场", "航空总部","宋家岗", "巨龙大道", "盘龙城", "宏图大道", "常青城", "金银潭","常青花园", 
				"长港路", "汉口火车站", "范湖","王家墩东", "青年路", "中山公园", "循礼门", "江汉路", "积玉桥", "螃蟹岬", "小龟山", 
				"洪山广场", "中南路", "宝通寺", "街道口", "广埠屯","虎泉", "杨家湾", "光谷广场", "珞雄路", "华中科技大学", "光谷大道", 
				"佳园路", "武汉东站", "黄龙山路", "金融港北", "秀湖","藏龙东街","佛祖岭"]	
			},
			{
				subwayLine: {
								label:"3号线",
								value:"3号线"
							},
				subwayStation:["宏图大道", "市民之家", "后湖大道", "兴业路", "二七小路", "罗家庄", "赵家条", "惠济二路", "香港路", 
								"菱角湖", "范湖", "云飞路", "武汉商务区", "双墩", "宗关", "王家湾", "龙阳村", "陶家岭", "四新大道", 
								"汉阳客运站", "三角湖", "体育中心", "东风公司", "沌阳大道",]	
			},
			{
				subwayLine: {
								label:"4号线",
								value:"4号线"
							},
				subwayStation:["柏林", "新庙村", "临嶂大道", "蔡甸广场", "凤凰路", "新农", "知音", "集贤", "新天", "黄金口", "孟家铺", "永安堂", "玉龙路", "王家湾", "十里铺",
				"七里庙", "五里墩", "汉阳火车站", "钟家村", "拦江路", "复兴路", "首义路", "武昌火车站", 
				"梅苑小区", "中南路", "洪山广场", "楚河汉街", "青鱼嘴", "东亭", "岳家嘴", "铁机路", "罗家港", "园林路",
				 "仁和路", "工业四路", "杨春湖", "武汉火车站",]	
			},
			{
				subwayLine:{
								label:"5号线",
								value:"5号线"
							},
				subwayStation:["武汉站东广场", "厂前", "武钢", "工人村", "青宜居", "红钢城", "和平公园", "建设二路", 
				"科普公园", "余家头", "杨园铁四院", "徐家棚", "三角路", "三层楼", "积玉桥", "昙华林武胜门", "司门口黄鹤楼", 
				"彭刘杨", "复兴路", "八铺街", "烽火村", "张家湾", "光霞", "白沙六路", "中医药大学",]	
			},
			{
				subwayLine: {
								label:"6号线",
								value:"6号线"
							},
				subwayStation:["新城十一路", "码头潭公园", "五环体育中心", "二雅路", "海口三路", "金银湖公园",
				"金银湖", "园博园北", "轻工大学", "常青花园", "杨汊湖", "石桥", "唐家墩", "三眼桥", "香港路", "苗栗路", "大智路", "江汉路", 
				"六渡桥", "汉正街", "武胜路", "琴台", "钟家村", "马鹦路", "建港", "前进村", "国博中心北", "国博中心南", "老关村", "江城大道", "车城东路", "东风公司",]	
			},
			{
				subwayLine: {
								label:"7号线",
								value:"7号线"
							},
				subwayStation:["园博园北", "园博园", "常码头", "武汉商务区", "王家墩东", "取水楼", "香港路", "三阳路","徐家棚", "湖北大学", "新河街", "螃蟹岬", "小东门",
							"武昌火车站", "瑞安街", "建安街", "湖工大", "板桥", "野芷湖", "新路村", "大花岭", "江夏客厅", 
							"谭鑫培公园", "北华街", "纸坊大街", "青龙山地铁小镇",]	
			},
			{
				subwayLine: {
								label:"8号线",
								value:"8号线"
							},
				subwayStation:["金潭路", "宏图大道", "塔子湖", "中一路", "竹叶山", "赵家条", "黄浦路", "徐家棚", "徐东", "汪家墩", "岳家嘴",
				"梨园", "省博湖北日报", "中南医院", "水果湖", "洪山路", "小洪山", "街道口", "马房山", "文治街", "文昌路", "省农科院", "马湖",
				 "野芷湖", "黄家湖地铁小镇", "军运村",]	
			},
			{
				subwayLine: {
								label:"11号线",
								value:"11号线"
							},
				subwayStation:["葛店南站", "左岭", "未来三路", "未来一路", "长岭山", "光谷七路", "豹澥", "光谷六路", "光谷五路", "光谷四路", "光谷生物园", "光谷同济医院", "湖口", "武汉东站",]	
			},
			{
				subwayLine: {
								label:"16号线",
								value:"16号线"
							},
				subwayStation:["周家河", "湾湖", "协子河", "马影河", "桂子湖", "大军山", "枫林", "小军山", "沌口", "南太子湖", "老关村", "国博中心南",]	
			},
			{
				subwayLine: {
								label:"阳逻线",
								value:"阳逻线"
							},
				subwayStation:["线后湖大道", "百步亭花园路", "新荣客运站", "幸福湾", "朱家河", "谌家矶", "青龙", "高车", "武湖", "沙口", "军民村", "武生院", "阳逻", "阳逻开发区", "施岗", "金台",]	
			},
			
		],
		
		//区域的二级联动数据 江岸、江汉、硚口、汉阳、武昌、青山、洪山、东西湖、汉南、蔡甸、江夏、黄陂、新洲
		areaContainer:[],
		area:[
			{
				areafirst: {
								label:"不限",
								value:""
							},
				areasecond:[""]
			},
			{
				areafirst: {
								label:"江岸",
								value:"江岸"
							},
				areasecond: ["大智街道","一元街道","车站街道","四唯街道","永清街道","西马街道","球场街道","劳动街道",
				"二七街道","新村街道","丹水池街道","台北街道","花桥街道","谌家矶街道","后湖街道","塔子湖街",
				"以及百步亭花园","区政府驻四唯街道六合路"]
			},
			{
				areafirst: {
								label:"江汉",
								value:"江汉"
							},
				areasecond: ["民族街道","花楼街道","水塔街道","民权街道","满春街道","民意街道",
				"新华街道","万松街道","唐家墩街道","北湖街道","前进街道","常青街道","汉兴街道","区政府驻北湖街道",]
			},
			{
				areafirst: {
								label:"硚口",
								value:"硚口"
							},
				areasecond: ["古田街道","韩家墩街道","宗关街道","汉水桥街道","宝丰街道",
				"荣华街道","汉中街道","汉正街道","六角亭街道","长丰街道","易家街道","区政府驻韩家墩街道",]
			},
			{
				areafirst:{
								label:"汉阳",
								value:"汉阳"
							},
				areasecond: ["翠微街道","建桥街道","月湖街道","晴川街道","鹦鹉街道","洲头街道","五里墩街道",
				"琴断口街道","江汉二桥街道","永丰街道","江堤街道","以及四新地区管委会","区政府驻建桥街道",]
			},
			{
				areafirst: {
								label:"武昌",
								value:"武昌"
							},
				areasecond: ["积玉桥街道","杨园街道","徐家棚街道","粮道街街道","中华路街道","黄鹤楼街道",
				"紫阳街道","白沙洲街道","首义路街道","中南路街道","水果湖街道","珞珈山街道","石洞街道","南湖街道","区政府驻积玉桥街道",]
			},
			{
				areafirst:{
								label:"青山",
								value:"青山"
							},
				areasecond: ["红卫路街道","冶金街道","新沟桥街道","红钢城街道","工人村街道","青山镇街道",
				"厂前街道","武东街道","白玉山街道","钢花村街道","钢都花园管委会","北湖管委会","区政府驻新沟桥街道",]
			},
			{
				areafirst: {
								label:"洪山",
								value:"洪山"
							},
				areasecond: ["珞南街道","关山街道","狮子山街道","张家湾街道","梨园街道","卓刀泉街道",
				"洪山街道","和平街道","青菱街道","天兴乡","区政府驻珞南街道",]
			},
			{
				areafirst: {
								label:"东西湖",
								value:"东西湖"
							},
				areasecond: ["吴家山","走马岭","新沟镇","长青","慈惠","径河","金银湖","将军路",
				"柏泉","东山","辛安渡","常青花园新区","东流港牧业园","区政府驻吴家山街道",]
			},
			{
				areafirst: {
								label:"汉南",
								value:"汉南"
							},
				areasecond: ["纱帽街道","东荆街道","湘口街道","邓南街道","区政府驻纱帽街道纱帽",]
			},
			{
				areafirst: {
								label:"蔡甸",
								value:"蔡甸"
							},
				areasecond: ["蔡甸街道","奓山街道","永安街道","侏儒街道","大集街道",
				"张湾街道","索河镇","玉贤镇","消泗乡","区政府驻蔡甸街道",]
			},
			{
				areafirst: {
								label:"江夏",
								value:"江夏"
							},
				areasecond: ["纸坊街道","金口街道","乌龙泉街道","郑店街道","五里界街道",
				"安山街道","山坡街道","法泗街道","湖泗街道","舒安街道","区政府驻纸坊街道",]
			},
			{
				areafirst: {
								label:"黄陂",
								value:"黄陂"
							},
				areasecond: ["前川街道","祁家湾街道","横店街道","罗汉寺街道","滠口街道",
				"六指街道","天河街道","武湖街道","王家河街道","长轩岭街道","李家集街道","姚家集街道","蔡家榨街道",
				"三里桥街道","蔡店街道","木兰乡","以及大潭办事处","盘龙城经济开发区","区政府驻前川街道",]
		},
			{
				areafirst: {
								label:"新洲",
								value:"新洲"
							},
				areasecond: ["邾城街道","阳逻街道","仓埠街道","汪集街道","李集街道","三店街道",
			"潘塘街道","旧街街道","双柳街道","涨渡湖街道","辛冲镇","徐古镇","凤凰镇","以及道观河风景旅游管理处","阳逻开发区","区政府驻邾城街道",]
			},
		],
		
		
		
		
		
  },
  getters: {
	  changeIsMul(state){
		  return state.isMul = !state.isMul
	  }
	  
  },
    //使用关键字commit
  mutations: {
	  //登录和注册
	  login(state){
		  state.islogin = true
	  },
	  exit(state){
	  	state.islogin = false
	  },
	  //用户登录时 填入用户信息
	  insertAdmin(state,admin){
		state.admin = admin
	  },
	  //多选删除时Id的容器操作
	  getMulIdSale(state){
		  for(var list of state.mulDelete){
				state.mulId.push(list.saleId)
		  }
	  },
	  
	  getMulIdUser(state){
	  		  for(var list of state.mulDelete){
	  				state.mulId.push(list.userId)
	  		  }
	  },
	  
	  getMulIdHouse(state){
	  		  for(var list of state.mulDelete){
	  				state.mulId.push(list.houseId)
	  		  }
	  },
	  getMulIdCommunity(state){
	  		  for(var list of state.mulDelete){
	  				state.mulId.push(list.communityId)	
	  		  }
	  },
	  
	  getMulIdRoom(state){
	  		  for(var list of state.mulDelete){
	  				state.mulId.push(list.roomId)
	  		  }
	  },
  },
  //使用关键字dispatch
  actions: {
	  
	  
	  //异步拿数据
	  // 网络请求异步操作的封装
	  getData(context,pageData){
		 request({
		 	url: pageData.url,
		 	params: pageData,
		 }).then(res =>{
		 	context.state.container = res.list
		 	context.state.pageDataContainer.totalCount = res.totalCount
			context.state.pageDataContainer = pageData
		 })
	  },
	  //单选删除
	  getDelete(context,ID){
		  request({
		  	url: context.state.pageDataContainer.deleteUrl,
		  	params: ID
		  }).then(res =>{
		  	context.dispatch("getData",context.state.pageDataContainer)
		  })
	  },
	  //多选删除
	  getDeleteMul(context){
		  request({
		  	url: context.state.pageDataContainer.mulDeleteUrl,
		  	params: context.state.mulId
		  }).then(res =>{
		  	context.dispatch("getData",context.state.pageDataContainer)
		  })
	  },
	  //修改的异步刷新
	  getUpdateMul(context,updateUrl){
	  		  request({
	  		  	url: updateUrl,
	  		  	params: context.state.editContainer
	  		  }).then(res =>{
	  		  	context.dispatch("getData",context.state.pageDataContainer)
	  		  })
	  },
	  
	  
	  
	  
  },
  modules: {
  },
  
  
})

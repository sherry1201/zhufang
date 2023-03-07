import axios from "axios"
import store from '../store/index.js'
import { ElMessage } from 'element-plus'
// export function request(config, success, failure){
// 	//创建axios的实例
// 	const instance = axios.create({
// 		baseURL: "http://localhost:8088",
// 		timeout: 5000
// 	})
// 	//发送真正的网络请求
// 	instance(config)
// 	.then(res =>{
// 		// console.log(res);
// 		success(res);
// 	}).catch(err => {
// 		// console.log(err);
// 		failure(err);
// 	});
// }

export function request(config){
	// return new Promise((resolve, reject) =>{
		//1.创建axios的实例
			const instance = axios.create({
				baseURL: "http://localhost:8888",
				timeout: 5000
			})
		// 		baseURL: "http://localhost:8888",
		// 		timeout: 5000
		// 	})
		
		
		//2.拦截器
		instance.interceptors.request.use(config =>{
			// console.log(config)
			//拦截后返回配置
			return config;
		},err =>{
			ElMessage.error("请求失败!")
			console.log(err)
		})
		
		
		instance.interceptors.response.use(res =>{
			// console.log(res)
			//拦截后返回配置
			return res.data;
		},err =>{
			store.state.mulId = []
			ElMessage.error("请求失败!")
			console.log(err)
		})
		
		//3.发送真正的网络请求
		return instance(config)
		
		// .then(res =>{
		// 	resolve(res)
		// }).catch(err => {
		// 	reject(err)
		// });
		
		
	// })
}
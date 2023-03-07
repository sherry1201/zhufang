<template>
	<div v-if="this.$store.state.islogin">
	   <insert>
		   <template #insert>
			   <insertcommunity></insertcommunity>
		   </template>
	   </insert> 
	</div>
	 
		<h1 v-else>请先登录!</h1>
</template>

<script>
	import insertcommunity from "../../components/communityComponents/insertcommunity.vue"
	import insert from "../../components/publicComponents/insert.vue"
	export default{
		components: {
			insertcommunity,
			insert
		}
	}
</script>

<style>
</style>
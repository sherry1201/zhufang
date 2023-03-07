<template>
	<div v-if="this.$store.state.islogin">
	   <insert>
		   <template #insert>
			   <insertroom></insertroom>
		   </template>
	   </insert> 
	</div>
	 
		<h1 v-else>请先登录!</h1>
</template>

<script>
	import insertroom from "../../components/roomComponents/insertroom.vue"
	import insert from "../../components/publicComponents/insert.vue"
	export default{
		components: {
			insertroom,
			insert
		}
	}
</script>

<style>
</style>
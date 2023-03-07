<template>
	<div v-if="this.$store.state.islogin">
	   <insert>
		   <template #insert>
			   <inserthouse></inserthouse>
		   </template>
	   </insert> 
	</div>
	 
		<h1 v-else>请先登录!</h1>
</template>

<script>
	import inserthouse from "../../components/houseComponents/inserthouse.vue"
	import insert from "../../components/publicComponents/insert.vue"
	export default{
		components: {
			inserthouse,
			insert
		}
	}
</script>

<style>
</style>
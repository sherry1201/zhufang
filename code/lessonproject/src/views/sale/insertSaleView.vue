<template>
	<div v-if="this.$store.state.islogin">
	   <insert>
		   <template #insert>
			   <insertsale></insertsale>
		   </template>
	   </insert> 
	</div>
	 
		<h1 v-else>请先登录!</h1>
</template>

<script>
	import insertsale from "../../components/saleComponents/insertsale.vue"
	import insert from "../../components/publicComponents/insert.vue"
	export default{
		components: {
			insertsale,
			insert
		}
	}
</script>

<style>
</style>
<template>
  <div class="container bg-green-200 border-2 border-green-500 flex flex-row">
  <div class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
			<span class="text-green-500">
				<svg fill="currentColor"
						viewBox="0 0 20 20"
						class="h-6 w-6">
					<path fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"></path>
					</svg>
				</span>
			</div>
  <div class="flex flex-col">
    <div class="alert-title font-semibold text-green-800">
					Sucesso !
		</div>
     <div class="alert-subtitle text-green-600">
					Entrada inserida 
		</div>
  </div>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.container{
 padding: 4px;
 font-family: 'Source Sans Pro', sans-serif;
 
 border-radius: 8px ;
  height: 55px;
  position: fixed;
 
}
.alert-icon{
  margin-right: 10px;
}
.alert-subtitle{
 font-family: 'Source Sans Pro', sans-serif;
font-size: 13px;

}

</style>
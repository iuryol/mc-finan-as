<template>
  <div class="placeholder">
    <div class="holdposition">
      <svg
        class="float-right w-5 h-5"
        fill="purple"
        stroke="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="aqua"
          d="M3.254,6.572c0.008,0.072,0.048,0.123,0.082,0.187c0.036,0.07,0.06,0.137,0.12,0.187C3.47,6.957,3.47,6.978,3.484,6.988c0.048,0.034,0.108,0.018,0.162,0.035c0.057,0.019,0.1,0.066,0.164,0.066c0.004,0,0.01,0,0.015,0l2.934-0.074c0.317-0.007,0.568-0.271,0.56-0.589C7.311,6.113,7.055,5.865,6.744,5.865c-0.005,0-0.01,0-0.015,0L5.074,5.907c2.146-2.118,5.604-2.634,7.971-1.007c2.775,1.912,3.48,5.726,1.57,8.501c-1.912,2.781-5.729,3.486-8.507,1.572c-0.259-0.18-0.618-0.119-0.799,0.146c-0.18,0.262-0.114,0.621,0.148,0.801c1.254,0.863,2.687,1.279,4.106,1.279c2.313,0,4.591-1.1,6.001-3.146c2.268-3.297,1.432-7.829-1.867-10.101c-2.781-1.913-6.816-1.36-9.351,1.058L4.309,3.567C4.303,3.252,4.036,3.069,3.72,3.007C3.402,3.015,3.151,3.279,3.16,3.597l0.075,2.932C3.234,6.547,3.251,6.556,3.254,6.572z"
        ></path>
      </svg>
    
    <div class="main-title flex flex-row">
      <b><h4>{{ nome }}</h4></b>
        <div class="simbolo ml-2">
      <div v-show="valor>0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(72, 235, 72)" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path></svg>
      </div>
      <div v-show="valor<0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="22" height="22" viewBox="0 0 22 22" style="transform: ;msFilter:;"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
      </div>
      <div v-show="valor===0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="gray" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M3 20h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z"></path></svg>
      </div>
    </div>
    </div>
    </div>
    <div class="value-title">
      <h2>R$ {{ valor }}</h2>
    </div>
  
  </div>
</template>

<script>
export default {
  props: {
    nome: String,
    valor: Number,
  },
};
</script>

<style scoped>
/* inicio do css*/

.holdposition {
  float: right;
  
  color: aqua;
  width: 100%;
}

.placeholder {
  height: auto;
  min-width: 200px;
  max-width: auto;
  
  
  margin-top: 10px;
  border-radius: 10px;
  border: 3px solid aqua;
  box-shadow: rgba(0, 0, 0, 0.816) 0px 5px 10px;
  float: left;
  padding: 10px;
 
  background-color: rgba(31, 41, 55);
  color: rgb(255, 255, 255);

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
}

.main-title {
  font-size: 17px;
  color: rgb(255, 255, 255);
  float: left;
  letter-spacing: 1.3px;
}

.value-title {
  font-size: 20px;
  margin-left: 0px;
}
</style>
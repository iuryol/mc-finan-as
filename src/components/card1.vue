<template>
  <div class="placeholder">
    <div class="holdposition">
      <svg
        class="float-right w-5 h-5"
        fill="green"
        stroke="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10"
        ></path>
      </svg>

      <div class="main-title ">
        <h4><b>{{ nome }}</b></h4>
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
  width: 100%;
  
}

svg{
  color:rgb(72, 235, 72);
}

.placeholder {
  height: auto;
  min-width: 200px;
  max-width: auto;
  
 
  margin-top: 10px;
  border-radius: 10px;
  
   
  
  float: left;
  padding: 10px;
  border: 3px solid rgb(13, 255, 0);  
  background-color: #1F2937;
  color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
 
  
  font-size: 20px;
}      

.main-title {
  font-size: 17px;
  color: rgb(255, 255, 255);
  float: left;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 1.3px;
}

.value-title {
  font-size: 20px;
  
}
</style>
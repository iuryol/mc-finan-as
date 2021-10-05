<template>
  <div class="placeholder">
    <div class="holdposition">
      <div class="main-title ">
        <h4>Total</h4>
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
  height: 140px;
  min-width: 100%;
  max-width: auto;
  
  margin-right: 20px;
  
  border-radius: 1px;
  
   

  float: left;
  padding: 10px;
  border: 2px solid rgba(110, 231, 183);  
  background-color: #1F2937;
  color: rgb(255, 255, 255);

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
}      

.main-title {
  font-size: 23px;
  color: rgb(110, 231, 183);
  float: left;
  font-family: 'Source Sans Pro', sans-serif;
}

.value-title {
  font-size: 20px;
}
</style>
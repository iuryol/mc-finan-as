<template>
  <div class="placeholder">
    <svg
        class="float-right w-7 h-7"
        fill="red"
        stroke="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
        ></path>
      </svg>
    <div class="main-title"><h4> <b> Despesa :</b> </h4></div>
    <div class="value-title">
      <h2> R$  {{ valor }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    valor: Number,
  },
};
</script>

<style scoped>
/* inicio do css*/
.placeholder {
  
 
  
 
  border-radius: 10px;
  height: 153px;
  float: left;
  padding: 20px;

  
  color: rgb(104, 104, 104);
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
    

  min-width: 400px;
  max-width: auto;
  margin-left: 30px;
  margin-right: 40px;
  margin-top: 0px;
  
  
   
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
  float: left;
  padding: 10px;
  border: 3px solid rgb(255, 0, 0);  
  background-color: #1F2937;
  color: rgb(255, 255, 255);

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
}

.main-title {
  font-size: 25px;
  color: rgb(255, 255, 255);
  letter-spacing: 1.2px;
}

.value-title {
  font-size: 27px;
}
svg{
  color: red;
}
</style>
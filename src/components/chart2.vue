        
        
        
        
        
<template>
  <div style="max-width: 250px">
      
    <vue3-chart-js v-bind="{ ...doughnutChart }" />
    
  </div>
  
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },

  props:{
    valorA:Number,
    valorB:Number,
    valorC:Number,
    valorD:Number,
    valorE:Number,
    valorF:Number,

  },
  
  setup(props) {
    const doughnutChart = {
      type: "doughnut",
      data: {
        labels: ["Manutenção", "Insumo", "Salário", "Investimento","Serviço","Impostos e Taxas"],
        datasets: [
          
          {
            backgroundColor: ["#424bf5", "#053b01 ", "#42f5ec", "#e642f5","#f59e42","#3C465C"],
            data: [props.valorA, props.valorB, props.valorC, props.valorD,props.valorE,props.valorF],
          },
        ],
       
        
        
      },
      options: {
      plugins: {
    legend: {
      display: false
    }
  },
    },
      
    };

    return {
      doughnutChart,
    };
  },
};
</script>
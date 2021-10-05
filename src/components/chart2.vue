        
        
        
        
        
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

  },
  
  setup(props) {
    const doughnutChart = {
      type: "doughnut",
      data: {
        datasets: [
          {
            backgroundColor: ["#424bf5", "#053b01 ", "#42f5ec", "#e642f5"],
            data: [props.valorA, props.valorB, props.valorC, props.valorD],
          },
        ],
        labels: ['Manutenção', 'Insumo', 'Salário', 'Investimento'],
        
        
      },
    };

    return {
      doughnutChart,
    };
  },
};
</script>
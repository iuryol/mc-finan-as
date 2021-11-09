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
        
        labels: ["Ativo", "Produção", "Crédito", "Saldo"],
        
        datasets: [
          {
            backgroundColor: ["#4287f5", "#f5cb42", "#42f57b", "#f54242"],
            data: [props.valorA, props.valorB, props.valorC, props.valorD],
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
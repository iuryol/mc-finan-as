<template>
  <vue3-chart-js v-bind="{ ...lineChart }" />
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";


// globally registered and available for all charts


export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },
  props:{
    ValorJanR:Number,
    ValorFevR:Number,
    ValorMarR:Number,
    ValorAbrR:Number,
    ValorMaiR:Number,
    ValorJunR:Number,
    ValorJulR:Number,
    ValorAgoR:Number,
    ValorSetR:Number,
    ValorOutR:Number,
    ValorNovR:Number,
    ValorDezR:Number,
    ValorJanD:Number,
    ValorFevD:Number,
    ValorMarD:Number,
    ValorAbrD:Number,
    ValorMaiD:Number,
    ValorJunD:Number,
    ValorJulD:Number,
    ValorAgoD:Number,
    ValorSetD:Number,
    ValorOutD:Number,
    ValorNovD:Number,
    ValorDezD:Number,
  },
  setup(props) {
    const lineChart = {
      type: "line",
      // locally registered and available for this chart
     
      data: {
        labels: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "setembro",
          "Outubro",
          "Novembro",
          "Dezembro",

        ],
        datasets: [
          {
            label: "Receita",
            data: [props.ValorJanR, props.ValorFevR, props.ValorMarR, props.ValorAbrR, props.ValorMaiR, props.ValorJunR, props.ValorJulR,props.ValorAgoR,props.ValorSetR,props.ValorOutR,props.ValorNovR,props.ValorDezR],
            fill: false,
            borderColor: " rgba(52, 211, 153)",
            backgroundColor: "green",
          },
          {
            label: "Despesa",
            data: [props.ValorJanD, props.ValorFevD, props.ValorMarD, props.ValorAbrD, props.ValorMaiD, props.ValorJunD, props.ValorJulD,props.ValorAgoD,props.ValorSetD,props.ValorOutD,props.ValorNovD,props.ValorDezD],
            fill: false,
            borderColor: "rgba(239, 68, 68)",
            tension: 0.5,
            backgroundColor: "red",
          },
        ],
      },
  
    };

    return {
      lineChart,
    };
  },
};
</script>

<template>
  <div class=" sombra block rounded-t overflow-hidden bg-white text-center w-36 h-auto">
    <div class="bg-green-500 text-gray-800 font-bold py-1">{{ mes }}</div>
    <div class="bg-gray-800 pt-1  h-20">
      <span class="text-6xl text-white font-bold">{{ dia }}</span>
    </div>
    <div
      class="
        bg-gray-800
        pb-2
        px-2
        
        rounded-b
        flex
        justify-between
      "
    >
      <span class="text-white font-bold h-8">{{ semana }}</span>
      <span class="text-white font-bold"> {{ ano }} </span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function () {
      const date = new Date();
      var DiaDaSemana = date.getDay();
      var NumeroMes = date.getMonth();
      // convertendo o dia da semana
      if (DiaDaSemana === 0) {
        DiaDaSemana = "Dom";
      } else if (DiaDaSemana === 1) {
        DiaDaSemana = "Seg";
      } else if (DiaDaSemana === 2) {
        DiaDaSemana = "Ter";
      } else if (DiaDaSemana === 3) {
        DiaDaSemana = "Qua";
      } else if (DiaDaSemana === 4) {
        DiaDaSemana = "Qui";
      } else if (DiaDaSemana === 5) {
        DiaDaSemana = "Sex";
      } else {
        DiaDaSemana = "Sab";
      }

      // convertendo o mes
      if (NumeroMes === 0) {
        NumeroMes = "Jan";
      } else if (NumeroMes === 1) {
        NumeroMes = "Fev";
      } else if (NumeroMes === 2) {
        NumeroMes = "Mar";
      } else if (NumeroMes === 3) {
        NumeroMes = "Abr";
      } else if (NumeroMes === 4) {
        NumeroMes = "Mai";
      } else if (NumeroMes === 5) {
        NumeroMes = "Jun";
      } else if (NumeroMes === 6) {
        NumeroMes = "Jul";
      } else if (NumeroMes === 7) {
        NumeroMes = "Ago";
      } else if (NumeroMes === 8) {
        NumeroMes = "Set";
      } else if (NumeroMes === 9) {
        NumeroMes = "Out";
      } else if (NumeroMes === 10) {
        NumeroMes = "Nov";
      } else if (NumeroMes === 11) {
        NumeroMes = "Dez";
      }

      // recebendo os valores a serem mostrados

      this.dia = date.getDate();
      this.semana = DiaDaSemana;
      this.ano = date.getFullYear();
      this.mes = NumeroMes;
    });
  },

  data() {
    return {
      dia: 0,
      semana: "",
      ano: 0,
      mes: 0,
    };
  },
};
</script>

<style scoped>
.sombra{
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
}
</style>
<template>
  <div class="container-main flex flex-col w-screen h-screen">
 

     <div class="first-row">
            <div class="Main-Title">
                 <h1><b> Painel</b></h1>
            </div>
    </div>

    <div class="second-row">
      <div class="card-container">
        <cardReceita  v-bind:valor="HoldReceita"/>
        <cardDespesa v-bind:valor="HoldDespesa"/> 
        <cardDate />
      </div>
    </div>

    <div class="third-row flex flex-row">
      <div class="chart-holder">
        <div v-if="chartload" class="chart-container">
        <chart3 
        v-bind:ValorJanR='TotalJanR'  
        v-bind:ValorFevR='TotalFevR' 
        v-bind:ValorMarR='TotalMarR'  
        v-bind:ValorAbrR='TotalAbrR'  
        v-bind:ValorMaiR='TotalMaiR'  
        v-bind:ValorJunR='TotalJunR' 
        v-bind:ValorJulR='TotalJulR'  
        v-bind:ValorAgoR='TotalAgoR'  
        v-bind:ValorSetR='TotalSetR' 
        v-bind:ValorOutR='TotalOutR'  
        v-bind:ValorNovR='TotalNovR'  
        v-bind:ValorDezR='TotalDezR'
        v-bind:ValorJanD='TotalJanD'  
        v-bind:ValorFevD='TotalFevD' 
        v-bind:ValorMarD='TotalMarD'  
        v-bind:ValorAbrD='TotalAbrD'  
        v-bind:ValorMaiD='TotalMaiD'  
        v-bind:ValorJunD='TotalJunD' 
        v-bind:ValorJulD='TotalJulD'  
        v-bind:ValorAgoD='TotalAgoD'  
        v-bind:ValorSetD='TotalSetD' 
        v-bind:ValorOutD='TotalOutD'  
        v-bind:ValorNovD='TotalNovD'  
        v-bind:ValorDezD='TotalDezD'/>
      </div>

      </div>
      
      

      <div class="card-chart flex flex-row">

        <div class="teste">
            <h1>Mês</h1>
            <h2> Janeiro </h2>
            <h2>Fevereiro</h2>
            <h2>Março</h2>
            <h2>Abril</h2>
            <h2>Maio</h2>
            <h2>Junho</h2>
            <h2>Julho</h2>
            <h2>Agosto</h2>
            <h2>Setembro</h2>
            <h2>Outubro</h2>
            <h2>Novembro</h2>
            <h2>Dezembro</h2>  
        </div>
        <div class="teste">
          <h1>Despesa</h1>
           <h2> {{ TotalJanD }}</h2>
           <h2> {{ TotalFevD }}</h2>
           <h2> {{ TotalMarD }} </h2>
           <h2> {{ TotalAbrD }}</h2>
           <h2> {{ TotalMaiD }}</h2>
           <h2> {{ TotalJunD }}</h2>
           <h2> {{ TotalJulD }}</h2>
           <h2> {{ TotalAgoD }}</h2>
           <h2> {{ TotalSetD }}</h2>
           <h2> {{ TotalOutD }}</h2>
           <h2> {{ TotalNovD }}</h2>
           <h2> {{ TotalDezD }}</h2>
        </div>
         <div class="teste">
           <h1>Receita</h1>
            <h2>{{ TotalJanR}}</h2>
           <h2> {{ TotalFevR }}</h2>
           <h2> {{ TotalMarR }} </h2>
           <h2> {{ TotalAbrR }}</h2>
           <h2> {{ TotalMaiR }}</h2>
           <h2> {{ TotalJunR }}</h2>
           <h2> {{ TotalJulR }}</h2>
           <h2> {{ TotalAgoR }}</h2>
           <h2> {{ TotalSetR }}</h2>
           <h2> {{ TotalOutR }}</h2>
           <h2> {{ TotalNovR }}</h2>
           <h2> {{ TotalDezR }}</h2>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
import cardReceita from "../components/cardReceita";
import cardDespesa from "../components/cardDespesa";
import cardDate from "../components/cardDate.vue";
import chart3 from "../components/chart3.vue";


var sqlite3 = require("sqlite3").verbose();
//var db = new sqlite3.Database('E:/Projetos/erp-project/database/storage.db')

export default {
  
  // componentes
  components: {
    cardReceita,
    cardDespesa,
    cardDate,
    chart3,
  },
  // dados da pagina
  data() {
    return {
      HoldReceita: 0,
      HoldDespesa: 0,
      chartload:false,
      //grafico
      TotalJanR:0,
      TotalFevR:0,  
      TotalMarR:0,
      TotalAbrR:0,
      TotalMaiR:0,
      TotalJunR:0,
      TotalJulR:0,
      TotalAgoR:0,
      TotalSetR:0,
      TotalOutR:0,
      TotalNovR:0,
      TotalDezR:0,
      TotalJanD:0,
      TotalFevD:0,
      TotalMarD:0,
      TotalAbrD:0,
      TotalMaiD:0,
      TotalJunD:0,
      TotalJulD:0,
      TotalAgoD:0,
      TotalSetD:0,
      TotalOutD:0,
      TotalNovD:0,
      TotalDezD:0,
      
    };
  },
  // metodos do ciclo de vida

  mounted() {
    this.$nextTick(function () {
      // obter o ano presente
       const date = new Date();
       var AnoAtual = date.getFullYear()
      
      // inicializando a conexão ao database
      const db = new sqlite3.Database("./database/storage.db",(err) => {
          if (err) {
            return console.error(err.message);
          }
          
        }
      );

      // carregar o valor total das receitas do ano atual no card
      db.each("SELECT valor FROM receita WHERE dataAno = ?",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

       
        this.HoldReceita = this.HoldReceita + row.valor;
        this.HoldReceita = parseFloat(this.HoldReceita.toFixed(2));
      });

      // carregar o valor total das despesas do ano no card
      db.each("SELECT valor FROM despesa WHERE dataAno = ?",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        
        this.HoldDespesa = this.HoldDespesa + row.valor;
        this.HoldDespesa = parseFloat(this.HoldDespesa.toFixed(2));
        
      });



      db.serialize(()=>{
        db.each("SELECT valor FROM receita WHERE dataMes = 1 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        
        const result = this.TotalJanR + row.valor;
        this.TotalJanR = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM receita WHERE dataMes = 2 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        
        const result = this.TotalFevR + row.valor;
        this.TotalFevR = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM receita WHERE dataMes = 3 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalMarR + row.valor;
        this.TotalMarR = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM receita WHERE dataMes = 4 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalAbrR + row.valor;
        this.TotalAbrR = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM receita WHERE dataMes = 5 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalMaiR + row.valor;
        this.TotalMaiR = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM receita WHERE dataMes = 6 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalJunR + row.valor;
        this.TotalJunR = parseFloat(result.toFixed(2));
       
        
      });
        db.each("SELECT valor FROM receita WHERE dataMes = 7 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalJulR + row.valor;
        this.TotalJulR = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM receita WHERE dataMes = 8 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalAgoR + row.valor;
        this.TotalAgoR = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM receita WHERE dataMes = 9 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalSetR + row.valor;
        this.TotalSetR = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM receita WHERE dataMes = 10 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalOutR + row.valor;
        this.TotalOutR = parseFloat(result.toFixed(2));
        
        
      });
          

      db.each("SELECT valor FROM receita WHERE dataMes = 11 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalNovR + row.valor;
        this.TotalNovR = parseFloat(result.toFixed(2));
        
        
      });

      db.each("SELECT valor FROM receita WHERE dataMes = 12 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalDezR + row.valor;
        this.TotalDezR = parseFloat(result.toFixed(2));
        
        
      });



      db.each("SELECT valor FROM despesa WHERE dataMes = 1 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalJanD + row.valor;
        this.TotalJanD = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM despesa WHERE dataMes = 2 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalFevD + row.valor;
        this.TotalFevD = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM despesa WHERE dataMes = 3 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalMarD + row.valor;
        this.TotalMarD = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM despesa WHERE dataMes = 4 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalAbrD + row.valor;
        this.TotalAbrD = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM despesa WHERE dataMes = 5 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalMaiD + row.valor;
        this.TotalMaiD = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM despesa WHERE dataMes = 6 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalJunD + row.valor;
        this.TotalJunD = parseFloat(result.toFixed(2));
       
        
      });
        db.each("SELECT valor FROM despesa WHERE dataMes = 7 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalJulD + row.valor;
        this.TotalJulD = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM despesa WHERE dataMes = 8 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalAgoD + row.valor;
        this.TotalAgoD = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM despesa WHERE dataMes = 9 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalSetD + row.valor;
        this.TotalSetD = parseFloat(result.toFixed(2));
        
        
      });
        db.each("SELECT valor FROM despesa WHERE dataMes = 10 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalOutD + row.valor;
        this.TotalOutD = parseFloat(result.toFixed(2));
        
        
      });
          

      db.each("SELECT valor FROM despesa WHERE dataMes = 11 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalNovD + row.valor;
        this.TotalNovD = parseFloat(result.toFixed(2));
        
        
      });

      db.each("SELECT valor FROM despesa WHERE dataMes = 12 AND dataAno = ?;",[AnoAtual], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        // console.log(row.nome, row.valor, row.tipo, row.data, row.id)
        const result = this.TotalDezD + row.valor;
        this.TotalDezD = parseFloat(result.toFixed(2));
        
        
      });


      })
       
      

      
      db.close();


      setTimeout(() => {
          this.chartload = true
     }, 200);
    });

    
    
  }, 

  

  //metodos
  methods: {
   
  },
};
</script>
      

<style scoped>
.container-main{
   padding-left: 156px; /*pula a sidebar*/
padding-top: 28px;  /*pula a topbar*/
padding-bottom: 0px;  
  border: 4px solid rgb(255, 255, 255);
 
  font-family: 'Source Sans Pro', sans-serif;
 background-color:rgb(252, 252, 252); 
}

/* inicio do css*/
.first-row{
 /*  border: 1px solid black;*/
  height: 7%;
  margin-top: 10px;
}
.second-row{
 /*  border: 1px solid black;*/
  height: 30%;
  
}
.third-row{
    /* border: 1px solid black; */
 
 margin-left: 10px;
  padding-top:80px ;
}
.teste {
  z-index: 10;
}
.main-feed {
  margin-left: 160px;
  margin-top: 30px;
  background-color: rgb(237, 242, 247);
  display: inline-block;
}


.Main-Title {
  font-size: 40px;
  color: rgba(31, 41, 55);
  display: inline-block;
  font-family: 'Source Sans Pro', sans-serif;
  text-shadow: 0px 0px 2px black;
  margin-left: 70px;
  margin-top: 10px;
}

.card-container {
  margin-top: 50px;
  display: inline-block;
  width: 100%;
}

.button-model {
  width: 50%;
  margin-top: 10px;
  margin-left: 50px;
  border: 1px solid darkgray;
  border-radius: 5px;
  color: gray;
  background: azure;
  color: black;
}
.chart-container{
 
  
}
.chart-holder{
 min-width: 650px;
  
}
.card-chart{
  background-color: #111827 ;
width: 80%;

 max-width:380px;
 margin-left: 20px;
  border: 3px solid  rgb(110, 231, 183);
  border-radius: 10px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
  float: right;
}
.teste{
  
  width: 50%;
  color: white;
  padding:1%;
}
h1{
  border-bottom: 1px solid white;
  text-align: center;
  
}
h2{
  text-align: center;
}

</style>
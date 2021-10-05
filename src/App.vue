<template>
  <div id="app" >

    <div id='top-bar'>
       <topbar />
    </div>

    <div class='content'>
        
      <div v-if="this.home"> <!--  estou usando v-if pq ele destroy o componente e obriga o ciclo de vida ser refeito triggando o mounted -->
        <home/>
      </div>

      <div v-show ="this.receita">
       <receita/>
      </div>

      <div v-show ="this.despesa">
        <despesa/>
      </div>

      <div v-if="this.balanco">
        <balanco />
      </div>
      
     
      

  </div>

  <div id="side-bar">
      <sidebar @MudarTelaPrincipal="ReceberEvento($event)" />
  </div>  

  
  </div>
</template>

<script>
//import de telas

import sidebar from "./components/sidebar";
import topbar from './components/topBar.vue';
import home from './screens/home.vue';
import receita from './screens/receita.vue';

import despesa from './screens/despesa.vue';
import balanco from './screens/balanco.vue';
import "animate.css"
const { ipcRenderer } = require('electron')




//import receitamanel from './screens/receitamanel.vue'


//dados da pagina
export default {
  name: "App",
  //componentes
  components: {
  sidebar,
  topbar,
  home,
  receita,
  
  despesa,
  balanco,
  
    
  //receitamanel,
    
  },

  //variaveis
  data() {
    return {
      home: true,
      receita: false,
      despesa:false,  
      balanco:false,

      
    };
  },


mounted(){
        this.$nextTick(function(){
               setTimeout(() => {
                  ipcRenderer.send('app-init')
                  }, 2000)
        })
       

  },
  //metodos
  methods: {
    ReceberEvento: function ($event) {
      console.log("recebendo evento : mudando visualização");
      this.home = $event.EHome;
      this.receita = $event.EReceita;
      this.despesa = $event.EDespesa;
     
      this.balanco = $event.Ebalanco;
    },

    

    
  },
};
</script>

<style src="./assets/tailwind.css" >



</style>

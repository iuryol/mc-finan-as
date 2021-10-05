<template>
  
  
    <div class="absolute pt-6 flex flex-col top-0 left-0 w-40 h-screen bg-gray-900   ">

      <div class="logo">
        <img src="../assets/main-logo.png">
        <span class="image-label ">Monte Claro</span>
      </div>

      <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <ul class="flex flex-col py-6 space-y-1">
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div class="flex font-semibold text-sm text-green-300 my-4 font-sans uppercase">
                Painel
              </div>
            </div>
          </li>
          <li @click="EmitirHome">
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-white hover:text-gray-200 border-l-4 border-b-2 border-transparent hover:border-green-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='white' style="transform: ;msFilter:;"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
              </span>
              <span
                class="ml-2 font-semibold text-sm tracking-wide truncate font-sans"
                >Início</span
              >
            </a>
          </li>
          <li @click="EmitirReceita">
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-white hover:text-gray-200 border-l-4 border-b-2 border-transparent hover:border-green-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" style="transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
              </span>
              <span
                class="ml-2 font-semibold text-sm tracking-wide truncate font-sans"
                >Receita</span
              >
            </a>
          </li>

          <li @click="EmitirDespesa">
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-white hover:text-gray-200 border-l-4 border-b-2 border-transparent hover:border-green-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" style="transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11H7v-2h10v2z"></path></svg>
              </span>
              <span
                class="ml-2 font-semibold text-sm tracking-wide truncate font-sans"
                >Despesa</span
              >
            </a>
          </li>
             <li @click="Emitirbalanco">
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-white hover:text-gray-200 border-l-4 border-b-2 border-transparent hover:border-green-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M6 21H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1z"></path></svg>
              </span>
              <span
                class="ml-2 font-semibold text-sm tracking-wide truncate font-sans"
                >Balanço</span
              >
            </a>
          </li>
  
       
        </ul>
      </div>
      
    </div>
  
</template>



<script>
export default {
  data() {
    return {
      home1: true,
      receita1: false,
    };
  },

  methods: {
    EmitirHome: function () {
      console.log("emitindo home");
      this.$emit("MudarTelaPrincipal", {
        EHome: true,
        EReceita: false,
        EDespesa: false,
        EFluxo: false,
        Ebalanco:false,
      });
    },

    EmitirReceita: function () {
      console.log("emitindo receita");
      this.$emit("MudarTelaPrincipal", {
        EHome: false,
        EReceita: true,
        EDespesa: false,
        EFluxo: false,
        Ebalanco:false,
      });
    },

    EmitirDespesa: function () {
      console.log("emitindo despesa");
      this.$emit("MudarTelaPrincipal", {
        EHome: false,
        EReceita: false,
        EDespesa: true,
        EFluxo: false,
        Ebalanco:false,
      });
    },

    EmitirFluxo: function () {
      console.log("emitindo fluxo");
      this.$emit("MudarTelaPrincipal", {
        EHome: false,
        EReceita: false,
        EDespesa: false,
        EFluxo: true,
        Ebalanco:false,
      });
    },
    Emitirbalanco:function(){
      console.log("emitindo balanço");
      this.$emit("MudarTelaPrincipal", {
        EHome: false,
        EReceita: false,
        EDespesa: false,
        EFluxo: false,
        Ebalanco:true,
      });

    }
  },

  props: {
    Homeprop: Boolean,
    Receitaprop: Boolean,
  },
};
</script>

<style>



 


.logo{
  margin-top:30px;
  margin-bottom:40px;
  text-align: center;
}

.image-label{
  font:bold;
  color: white;
  
  
}
img {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  user-drag: none;
  -webkit-touch-callout: none;
}
.logo{
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  user-drag: none;
  -webkit-touch-callout: none;
}


</style>
<template>
  <div class="main-container flex flex-col w-screen h-screen ">
   
       <div class="upper-space  flex flex-row">


          <div class="first-col  flex flex-col">
            <card1 nome="Total:" v-bind:valor="HoldResult" />
            <h1 class="screen-title"><b>Receita: </b></h1>
          </div>

          <div class="w-full second-col flex flex-col">        
            <div class=" flex justify-end">
                <div class="flex flex-col mr-6 text-white button-cadastro-select">
                <label class="mx-auto my-0 label-filtro"><b>Tipo:</b></label>
                <select id="tiposelect"
                  class="bg-gray-900 justify-center text-center"
                  v-on:change="getTipoFilter($event)"
                > <option value="reset">---</option>
                  <option value="Produção"> Produção</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Crédito">Crédito</option>
                  <option value="Saldo">Saldo</option>
                  <option value="Serviço">Serviço</option>
                </select>
              </div>



            <div class="flex flex-col mr-3 button-cadastro-select">
              <label class="mx-auto my-0 flex flex-col label-filtro"
                ><b>Mês:</b></label
              >
              <select id="messelect"
                class="bg-gray-900 text-white"
                v-on:change="getMonthFilter($event)"
              > 
                <option value="0">---</option>
                <option value="1">Janeiro</option>
                <option value="2">Fevereiro</option>
                <option value="3">Março</option>
                <option value="4">Abril</option>
                <option value="5">Maio</option>
                <option value="6">Junho</option>
                <option value="7">Julho</option>
                <option value="8">Agosto</option>
                <option value="9">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
              </select>
            </div>

            <div class="flex flex-col text-white button-cadastro-select">
              <label class="mx-auto my-0 label-filtro"><b>Filtro:</b></label>
              <select id="filterselect"
                class="bg-gray-900 justify-center"
                v-on:change="getFilter($event)"
              > <option value="reset" >---</option>
                <option value="adicaoRecente">Adição mais recente</option>
                <option value="adicaoAntiga">Adição mais antiga</option>
                <option value="valorAlto">Valor mais alto</option>
                <option value="valorBaixo">Valor mais baixo</option>
              </select>
            </div>
          </div>
        </div>
          <div class="third-col flex flex-col"> 
            <button @click="resetarFiltros()" class="button-cadastro"> Limpar </button>
          </div>
          <div class="third-col flex flex-col ">
           
              <div class="notification animate__animated animate__fadeOut" v-if="AlertInsertControl">
                  <popup1/>
              </div>
              <div class="notification animate__animated animate__fadeOut" v-if="AlertDeleteControl">
                  <popup2/>
              </div>

              <div class=" flex flex-row">
                
                <button @click="AbrirFormulario()" class="button-cadastro "> Nova Entrada </button>
                

              </div>
              
          </div>
        
      

    </div>
     

      <div class="lower-space flex flex-col">
        <table class="table-model table-auto gap-y-10">
          <thead class="bg-gray-900">
            <tr class="bg-gray-900">
              <th class="px-4 py-1"></th>
              <th class="px-4 py-1">
                <span class="text-table">Nome</span>
              </th>
              <th class="px-4 py-1">
                <span class="text-table">Tipo</span>
              </th>
              <th class="px-4 py-1">
                <span class="text-table">Data</span>
              </th>

              <th class="px-4 py-1">
                <span class="text-table">Valor</span>
              </th>

            
              <th class="px-4 py-1">
                <span class="text-table">Ação</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr
              class="bg-white border-2 border-gray-400"
              v-for="receita in dados"
              :key="receita.id"
            >
              <td class="px-4 py-1">
                   <span v-if="receita.tipo === '...'">
                    <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M15.475,6.692l-4.084-4.083C11.32,2.538,11.223,2.5,11.125,2.5h-6c-0.413,0-0.75,0.337-0.75,0.75v13.5c0,0.412,0.337,0.75,0.75,0.75h9.75c0.412,0,0.75-0.338,0.75-0.75V6.94C15.609,6.839,15.554,6.771,15.475,6.692 M11.5,3.779l2.843,2.846H11.5V3.779z M14.875,16.75h-9.75V3.25h5.625V7c0,0.206,0.168,0.375,0.375,0.375h3.75V16.75z"></path>
						</svg>
                    </span>
                <span v-if="receita.tipo === 'Produção'"
                  ><svg class="svg-icon" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M9.941,4.515h1.671v1.671c0,0.231,0.187,0.417,0.417,0.417s0.418-0.187,0.418-0.417V4.515h1.672c0.229,0,0.417-0.187,0.417-0.418c0-0.23-0.188-0.417-0.417-0.417h-1.672V2.009c0-0.23-0.188-0.418-0.418-0.418s-0.417,0.188-0.417,0.418V3.68H9.941c-0.231,0-0.418,0.187-0.418,0.417C9.522,4.329,9.71,4.515,9.941,4.515 M17.445,15.479h0.003l1.672-7.52l-0.009-0.002c0.009-0.032,0.021-0.064,0.021-0.099c0-0.231-0.188-0.417-0.418-0.417H5.319L4.727,5.231L4.721,5.232C4.669,5.061,4.516,4.933,4.327,4.933H1.167c-0.23,0-0.418,0.188-0.418,0.417c0,0.231,0.188,0.418,0.418,0.418h2.839l2.609,9.729h0c0.036,0.118,0.122,0.214,0.233,0.263c-0.156,0.254-0.25,0.551-0.25,0.871c0,0.923,0.748,1.671,1.67,1.671c0.923,0,1.672-0.748,1.672-1.671c0-0.307-0.088-0.589-0.231-0.836h4.641c-0.144,0.247-0.231,0.529-0.231,0.836c0,0.923,0.747,1.671,1.671,1.671c0.922,0,1.671-0.748,1.671-1.671c0-0.32-0.095-0.617-0.252-0.871C17.327,15.709,17.414,15.604,17.445,15.479 M15.745,8.275h2.448l-0.371,1.672h-2.262L15.745,8.275z M5.543,8.275h2.77L8.5,9.947H5.992L5.543,8.275z M6.664,12.453l-0.448-1.671h2.375l0.187,1.671H6.664z M6.888,13.289h1.982l0.186,1.671h-1.72L6.888,13.289zM8.269,17.466c-0.461,0-0.835-0.374-0.835-0.835s0.374-0.836,0.835-0.836c0.462,0,0.836,0.375,0.836,0.836S8.731,17.466,8.269,17.466 M11.612,14.96H9.896l-0.186-1.671h1.901V14.96z M11.612,12.453H9.619l-0.186-1.671h2.18V12.453zM11.612,9.947H9.34L9.154,8.275h2.458V9.947z M14.162,14.96h-1.715v-1.671h1.9L14.162,14.96z M14.441,12.453h-1.994v-1.671h2.18L14.441,12.453z M14.72,9.947h-2.272V8.275h2.458L14.72,9.947z M15.79,17.466c-0.462,0-0.836-0.374-0.836-0.835s0.374-0.836,0.836-0.836c0.461,0,0.835,0.375,0.835,0.836S16.251,17.466,15.79,17.466 M16.708,14.96h-1.705l0.186-1.671h1.891L16.708,14.96z M15.281,12.453l0.187-1.671h2.169l-0.372,1.671H15.281z"
                    ></path></svg
                ></span>
                <span v-if="receita.tipo === 'Ativo'">
                  <svg class="svg-icon " viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M4.423,9.141H3.565c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.192,0.429-0.429S4.66,9.141,4.423,9.141 M6.997,16.861H6.139c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.191,0.429-0.429S7.234,16.861,6.997,16.861 M4.423,16.861H3.565c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.191,0.429-0.429S4.66,16.861,4.423,16.861M13.861,9.998h0.857c0.236,0,0.429-0.192,0.429-0.429s-0.192-0.429-0.429-0.429h-0.857c-0.237,0-0.43,0.192-0.43,0.429S13.624,9.998,13.861,9.998 M14.719,16.861h-0.857c-0.237,0-0.43,0.192-0.43,0.43s0.192,0.429,0.43,0.429h0.857c0.236,0,0.429-0.191,0.429-0.429S14.955,16.861,14.719,16.861 M15.576,13.001c-0.236,0-0.429,0.192-0.429,0.43c0,0.236,0.192,0.429,0.429,0.429c0.237,0,0.43-0.192,0.43-0.429C16.006,13.193,15.813,13.001,15.576,13.001 M6.997,9.141H6.139c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.192,0.429-0.429S7.234,9.141,6.997,9.141M12.145,9.141h-0.857c-0.236,0-0.429,0.192-0.429,0.429s0.193,0.429,0.429,0.429h0.857c0.237,0,0.43-0.192,0.43-0.429S12.382,9.141,12.145,9.141 M17.722,10.856V7.424c0-0.948-0.769-1.716-1.716-1.716h-0.617l-1.038-3.873c-0.245-0.916-1.186-1.458-2.101-1.213L3.592,2.912C2.676,3.157,2.133,4.098,2.378,5.014l0.186,0.695H2.278c-0.947,0-1.716,0.768-1.716,1.716V17.72c0,0.947,0.769,1.716,1.716,1.716h13.728c0.947,0,1.716-0.769,1.716-1.716v-1.716c0.947,0,1.716-0.769,1.716-1.716v-1.716C19.438,11.624,18.669,10.856,17.722,10.856 M16.006,6.566c0.473,0,0.857,0.384,0.857,0.858v0.238c-0.253-0.146-0.544-0.238-0.857-0.238h-0.157l-0.229-0.858H16.006z M14.41,5.372l0.55,2.053H6.67L14.41,5.372z M3.814,3.741l8.657-2.29c0.458-0.123,0.928,0.149,1.051,0.607l0.222,0.828L3.43,5.621l-0.223-0.83C3.084,4.333,3.356,3.863,3.814,3.741M1.42,7.424c0-0.474,0.384-0.858,0.858-0.858h0.517l0.229,0.858H2.278c-0.314,0-0.605,0.091-0.858,0.238V7.424z M16.863,17.72c0,0.474-0.385,0.858-0.857,0.858H2.278c-0.474,0-0.858-0.385-0.858-0.858V9.141c0-0.474,0.384-0.858,0.858-0.858h13.728c0.473,0,0.857,0.384,0.857,0.858v1.715h-1.716c-0.947,0-1.716,0.768-1.716,1.716v1.716c0,0.947,0.769,1.716,1.716,1.716h1.716V17.72z M18.58,14.288c0,0.474-0.385,0.857-0.858,0.857h-2.574c-0.474,0-0.857-0.384-0.857-0.857v-1.716c0-0.474,0.384-0.858,0.857-0.858h2.574c0.474,0,0.858,0.385,0.858,0.858V14.288z M9.571,16.861H8.713c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.236,0,0.429-0.191,0.429-0.429S9.808,16.861,9.571,16.861M12.145,16.861h-0.857c-0.236,0-0.429,0.192-0.429,0.43s0.193,0.429,0.429,0.429h0.857c0.237,0,0.43-0.191,0.43-0.429S12.382,16.861,12.145,16.861 M9.571,9.141H8.713c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858C9.808,9.998,10,9.806,10,9.569S9.808,9.141,9.571,9.141"
                    ></path></svg
                ></span>
                <span v-if="receita.tipo === 'Crédito'"
                  ><svg class="svg-icon" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M4.319,8.257c-0.242,0-0.438,0.196-0.438,0.438c0,0.243,0.196,0.438,0.438,0.438c0.242,0,0.438-0.196,0.438-0.438C4.757,8.454,4.561,8.257,4.319,8.257 M7.599,10.396c0,0.08,0.017,0.148,0.05,0.204c0.034,0.056,0.076,0.104,0.129,0.144c0.051,0.04,0.112,0.072,0.182,0.097c0.041,0.015,0.068,0.028,0.098,0.04V9.918C7.925,9.927,7.832,9.958,7.747,10.02C7.648,10.095,7.599,10.22,7.599,10.396 M15.274,6.505H1.252c-0.484,0-0.876,0.392-0.876,0.876v7.887c0,0.484,0.392,0.876,0.876,0.876h14.022c0.483,0,0.876-0.392,0.876-0.876V7.381C16.15,6.897,15.758,6.505,15.274,6.505M1.69,7.381c0.242,0,0.438,0.196,0.438,0.438S1.932,8.257,1.69,8.257c-0.242,0-0.438-0.196-0.438-0.438S1.448,7.381,1.69,7.381M1.69,15.269c-0.242,0-0.438-0.196-0.438-0.438s0.196-0.438,0.438-0.438c0.242,0,0.438,0.195,0.438,0.438S1.932,15.269,1.69,15.269M14.836,15.269c-0.242,0-0.438-0.196-0.438-0.438s0.196-0.438,0.438-0.438s0.438,0.195,0.438,0.438S15.078,15.269,14.836,15.269M15.274,13.596c-0.138-0.049-0.283-0.08-0.438-0.08c-0.726,0-1.314,0.589-1.314,1.314c0,0.155,0.031,0.301,0.08,0.438H2.924c0.049-0.138,0.081-0.283,0.081-0.438c0-0.726-0.589-1.314-1.315-1.314c-0.155,0-0.3,0.031-0.438,0.08V9.053C1.39,9.103,1.535,9.134,1.69,9.134c0.726,0,1.315-0.588,1.315-1.314c0-0.155-0.032-0.301-0.081-0.438h10.678c-0.049,0.137-0.08,0.283-0.08,0.438c0,0.726,0.589,1.314,1.314,1.314c0.155,0,0.301-0.031,0.438-0.081V13.596z M14.836,8.257c-0.242,0-0.438-0.196-0.438-0.438s0.196-0.438,0.438-0.438s0.438,0.196,0.438,0.438S15.078,8.257,14.836,8.257 M12.207,13.516c-0.242,0-0.438,0.196-0.438,0.438s0.196,0.438,0.438,0.438s0.438-0.196,0.438-0.438S12.449,13.516,12.207,13.516 M8.812,11.746c-0.059-0.043-0.126-0.078-0.199-0.104c-0.047-0.017-0.081-0.031-0.117-0.047v1.12c0.137-0.021,0.237-0.064,0.336-0.143c0.116-0.09,0.174-0.235,0.174-0.435c0-0.092-0.018-0.17-0.053-0.233C8.918,11.842,8.87,11.788,8.812,11.746 M18.78,3.875H4.757c-0.484,0-0.876,0.392-0.876,0.876V5.19c0,0.242,0.196,0.438,0.438,0.438c0.242,0,0.438-0.196,0.438-0.438V4.752H18.78v7.888h-1.315c-0.242,0-0.438,0.196-0.438,0.438c0,0.243,0.195,0.438,0.438,0.438h1.315c0.483,0,0.876-0.393,0.876-0.876V4.752C19.656,4.268,19.264,3.875,18.78,3.875 M8.263,8.257c-1.694,0-3.067,1.374-3.067,3.067c0,1.695,1.373,3.068,3.067,3.068c1.695,0,3.067-1.373,3.067-3.068C11.33,9.631,9.958,8.257,8.263,8.257 M9.488,12.543c-0.062,0.137-0.147,0.251-0.255,0.342c-0.108,0.092-0.234,0.161-0.378,0.209c-0.123,0.041-0.229,0.063-0.359,0.075v0.347H8.058v-0.347c-0.143-0.009-0.258-0.032-0.388-0.078c-0.152-0.053-0.281-0.128-0.388-0.226c-0.108-0.098-0.191-0.217-0.25-0.359c-0.059-0.143-0.087-0.307-0.083-0.492h0.575c-0.004,0.219,0.046,0.391,0.146,0.518c0.088,0.109,0.207,0.165,0.388,0.185v-1.211c-0.102-0.031-0.189-0.067-0.3-0.109c-0.136-0.051-0.259-0.116-0.368-0.198c-0.109-0.082-0.198-0.183-0.265-0.306c-0.067-0.123-0.101-0.275-0.101-0.457c0-0.159,0.031-0.298,0.093-0.419c0.062-0.121,0.146-0.222,0.252-0.303S7.597,9.57,7.735,9.527C7.85,9.491,7.944,9.474,8.058,9.468V9.134h0.438v0.333c0.114,0.005,0.207,0.021,0.319,0.054c0.134,0.04,0.251,0.099,0.351,0.179c0.099,0.079,0.178,0.18,0.237,0.303c0.059,0.122,0.088,0.265,0.088,0.427H8.916c-0.007-0.169-0.051-0.297-0.134-0.387C8.712,9.968,8.626,9.932,8.496,9.919v1.059c0.116,0.035,0.213,0.074,0.333,0.118c0.145,0.053,0.272,0.121,0.383,0.203c0.111,0.083,0.2,0.186,0.268,0.308c0.067,0.123,0.101,0.273,0.101,0.453C9.581,12.244,9.549,12.406,9.488,12.543"
                    ></path></svg
                ></span>
                <span v-if="receita.tipo === 'Saldo'"
                  ><svg class="svg-icon" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M10.862,6.47H3.968v6.032h6.894V6.47z M10,11.641H4.83V7.332H10V11.641z M12.585,11.641h-0.861v0.861h0.861V11.641z M7.415,14.226h0.862v-0.862H7.415V14.226z M8.707,17.673h2.586c0.237,0,0.431-0.193,0.431-0.432c0-0.237-0.193-0.431-0.431-0.431H8.707c-0.237,0-0.431,0.193-0.431,0.431C8.276,17.479,8.47,17.673,8.707,17.673 M5.691,14.226h0.861v-0.862H5.691V14.226z M4.83,13.363H3.968v0.862H4.83V13.363z M16.895,4.746h-3.017V3.023h1.292c0.476,0,0.862-0.386,0.862-0.862V1.299c0-0.476-0.387-0.862-0.862-0.862H10c-0.476,0-0.862,0.386-0.862,0.862v0.862c0,0.476,0.386,0.862,0.862,0.862h1.293v1.723H3.106c-0.476,0-0.862,0.386-0.862,0.862v12.926c0,0.476,0.386,0.862,0.862,0.862h13.789c0.475,0,0.861-0.387,0.861-0.862V5.608C17.756,5.132,17.369,4.746,16.895,4.746 M10.862,2.161H10V1.299h0.862V2.161zM11.724,1.299h3.446v0.862h-3.446V1.299z M13.016,4.746h-0.861V3.023h0.861V4.746z M16.895,18.534H3.106v-2.585h13.789V18.534zM16.895,15.088H3.106v-9.48h13.789V15.088z M15.17,12.502h0.862v-0.861H15.17V12.502z M13.447,12.502h0.861v-0.861h-0.861V12.502zM15.17,10.778h0.862V9.917H15.17V10.778z M15.17,9.055h0.862V8.193H15.17V9.055z M16.032,6.47h-4.309v0.862h4.309V6.47zM14.309,8.193h-0.861v0.862h0.861V8.193z M12.585,8.193h-0.861v0.862h0.861V8.193z M13.447,14.226h2.585v-0.862h-2.585V14.226zM13.447,10.778h0.861V9.917h-0.861V10.778z M12.585,9.917h-0.861v0.861h0.861V9.917z"
                    ></path></svg
                ></span>
                 <span v-if="receita.tipo === 'Serviço'">
                   <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: gray;transform: ;msFilter:;"><path d="M20.5 5A1.5 1.5 0 0 0 19 6.5V11h-1V4.5a1.5 1.5 0 0 0-3 0V11h-1V3.5a1.5 1.5 0 0 0-3 0V11h-1V5.5a1.5 1.5 0 0 0-3 0v10.81l-2.22-3.6a1.5 1.5 0 0 0-2.56 1.58l3.31 5.34A5 5 0 0 0 9.78 22H17a5 5 0 0 0 5-5V6.5A1.5 1.5 0 0 0 20.5 5z"></path></svg>
                </span>
              </td>

              <td class="px-4 py-1">
                <span class="text-center ml-2">
                  {{ receita.nome }}
                </span>
              </td>

              <td class="px-4 py-1">
                <span class="text-center ml-2 ">
                  {{ receita.tipo }}
                </span>
              </td>

              <td class="px-4 py-1">
                <span> {{ FormatedDate(receita.data)}} </span>
              </td>

              <td class="px-4 py-1">
                <span> {{ receita.valor }} </span>
              </td>
              

              <td class="px-4 py-1">
                <button v-show='receita.tipo === "..."'  disabled class="delete-disabled"> Remover </button>
                <button v-show='receita.tipo != "..."' @click="ConfirmaDelete(receita.id, receita.nome,receita.valor)" class="delete"> Remover </button>
                <button v-show='receita.tipo === "..."' class="detail-disabled" disabled> Detalhar</button>
                <button v-show='receita.tipo != "..."' @click="DetalharItem( receita.nome,receita.data,receita.tipo, receita.valor,receita.desc,receita.id)" class="detail"> Detalhar</button>
              </td>
            </tr>
          </tbody> 
        </table>
      </div>

      <div class=" footer-table flex">
        <ul class=" flex list-none">
          <li @click="addPreviousPages()" class="cursor-pointer mx-4">
            <svg class="svg-icon-footer" style="color:red" viewBox="0 0 20 20">
                <path  fill="none" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
              </svg>
          </li>
          <li
            @click="pagination($event)"
            class="s
              px-3
              py-1
              mr-3
              cursor-pointer
              rounded-full
              bg-gray-900
              border-2 border-green-300
              text-white
            "
            id="firstPage"
            ref="firstPage"
            value="1"
          >1</li>
          <li
            @click="pagination($event)"
            class="px-3 py-1 mr-3 cursor-pointer rounded-full"
            id="secondPage"
            ref="secondPage"
            value="2"
          >
            2
          </li>
          <li
            @click="pagination($event)"
            class="px-3 py-1 mr-3 cursor-pointer rounded-full"
            id="thirdPage"
            ref="thirdPage"
            value="3"
          >
            3
          </li>
          <li
            @click="pagination($event)"
            class="px-3 py-1 mr-3 cursor-pointer rounded-full"
            id="forthPage"
            ref="forthPage"
            value="4"
          >
            4
          </li>
          <li
            @click="pagination($event)"
            class="px-3 py-1 mr-3 cursor-pointer rounded-full"
            id="fifthPage"
            ref="fifthPage"
            value="5"
          >
            5
          </li>
          <li @click.stop="addNextPages()" id="next" class="cursor-pointer mx-4">
            <svg class="svg-icon-footer" viewBox="0 0 20 20">
                <path fill="none" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
              </svg></li>
        </ul>
      </div>

      <div class="model-mask  animate__animated animate__fadeIn " v-show="FormControl">
        
        <transition name="model">
          
            <div class="model-wrapper animate__animated animate__fadeInDown">
                    
                  <form class="form-wrapper " @submit.prevent="EnviarDados(event)">
                    
                    <strong><h3 class="gray-900">Entrada:</h3></strong>
                    <label class="label-model" for="name">Nome :</label>
                    <input  
                      v-model="nomeR"
                      class="input-model"
                      type="text"
                      id="name"
                      placeholder="Digite um nome para a entrada"
                      required
                    />
                    <label class="label-model" for="tipo">Tipo:</label>
                    <select required id="tipo" class="input-model" v-model="tipoR">
                      <option disabled value="">Escolha um Tipo</option>
                      <option>Produção</option>
                      <option>Ativo</option>
                      <option>Crédito</option>
                      <option>Saldo</option>
                       <option>Serviço</option>
                       
                    </select>
                    <label class="label-model" for="valor">Valor:</label>
                    <input
                      v-model.number="valorR"
                      step="0.01"
                      class="input-model"
                      type="number"
                      id="valor"
                      placeholder="Digite o valor da entrada"
                      required
                    />
                    <label class="label-model" for="data">Data:</label>
                    <input
                      v-model="dataR"
                      class="input-model"
                      type="date"
                      id="data"
                      required
                    />
                    <label class="label-model" for="desc">Descrição:</label>
                    <textarea
                      v-model="descR"
                      class="input-model-desc"
                      type="text"
                      id="desc"
                      placeholder="Digite observações sobre a entrada"
                    />
                    <div class=" button-container flex  ">
                    <input type="submit" value="Cadastrar"  class="button-model bg-gray-900" @submit="EnviarDados()  ">
                    <button class="button-model bg-gray-900" @click="AbrirFormulario()"> voltar </button>

                  </div>
                  </form>
              
            </div>
          
        </transition>
      </div>

      <div class="model-mask h-screen animate__animated animate__fadeIn" v-show="ShowDetail">
          <transition class="flex flex-col" name="model">
                
                  <div class="model-wrapper animate__animated animate__fadeInUp">

                    <div class="Item-Detalhe flex flex-col">
                      <label class="title-detalhe" for="nome"> <b>Entrada:</b></label>
                      <div class="row1 flex flex-row">
                        <div class="col1 mr-1 w-full flex flex-col">
                          <label class="item-label" for="nome"> <b>Nome:</b></label>
                          <h2 id="nome" class="vitrine">{{ NomeDetalhe }}</h2>
                          <label class="item-label2" for="valor"> <b> Valor: </b> </label>
                          <h2 id="valor" class="vitrine">{{ ValorDetalhe }}</h2>
                        </div>
                        <div class="col2 w-full flex flex-col">
                          <label class="item-label" for="tipo"> <b> Tipo: </b> </label>
                           <h2 id="tipo" class="vitrine">{{ TipoDetalhe }}</h2>
                           <label class="item-label2" for="data"><b> Data: </b> </label>
                            <h2 id="data" class="vitrine">{{ FormatedDate(DataDetalhe) }}</h2>
                        </div>

                      </div>
                      <div class="row2">
                         <label class="item-label3" for="desc">
                          <b> Descrição : </b>
                        </label>
                        <h2 id="desc" class="vitrine-desc">{{ DescricaoDetalhe }}</h2>
                        



                      </div>

                      <div class="row3 text-center">
                        <button class="button-detalhe" @click="DetalharItem">
                          VOLTAR
                        </button>

                       
                      </div>
                        
                        
                        
                        
                       
                      
                    </div>
                  </div>
             
          </transition>
      </div>

      <div class="model-mask h-screen  animate__animated animate__fadeIn" v-show="DeleteControl">
          
                
                  <div class="delete-wrapper animate__animated animate__bounceIn">

                    <div class="delete-box flex flex-col">
                      
                        <span><b> Deseja remover este item ?</b></span>
                        <span>Item:   {{ItemDeleteNome}}</span>
                        <span>Valor:  {{ItemDeleteValor}} R$</span>
                        <div class="mt-10 flex flex-row">
                          <button @click='DeletarItem(ItemDeleteId)'    class="btn-sim bg-green-200 border-2 border-green-800 text-green-800 hover:bg-green-100 ">sim</button>
                          <button @click="ConfirmaDelete()"     class="btn-nao bg-red-200 border-2 border-red-800 text-red-800 hover:bg-red-100 ">não</button>
                        </div>
                    </div>
                  </div>
              
         
      </div>
      
      
      
    </div>
</template>

<script>
import 'animate.css'
import card1 from "../components/card1";
import popup1 from "../components/popup1";
import popup2 from "../components/popup2";


var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./database/storage.db");

export default {
  // componentes
  components: {
    card1,
    popup1,
    popup2,
  },

  //variaveis da pagina
  data () {
    return {
      FormControl: false,
      // total card
      nextPage: 1,
      HoldResult: 0,
      // currentPage: 1,
      dados: [],
      // variaves formulario
      tipoR: "",
      valorR: 0,
      nomeR: "",
      dataR: "",
      dataMesR:0,
      dataAnoR:0,
      dataAdc:'',
      descR: "",


      //variaves detalhe
      
      NomeDetalhe: "",
      DataDetalhe: "",
      TipoDetalhe: "",
      ValorDetalhe: 0,
      DescricaoDetalhe: "",
      UpdateResult: 0,

      // variaveis paginação
      dadosPage: [],
      dadosFilterMonth: [],
      isReversed: null,
      

    //variaveis alert
    
    
    //variaveis de controle
    AlertInsertControl:false,
    AlertDeleteControl:false,
    ShowDetail: false,
    DeleteControl:false,



      //variaves delete
     ItemDeleteId:0,
     ItemDeleteNome:'',
     ItemDeleteValor:0,
    };

  

   

    
   
  },
  
  

 

  // =============================================================metodos do lifecycle
  mounted() {

    
    
   


    this.$nextTick(function () {
        
      const db = new sqlite3.Database(
        "./database/storage.db",
        (err) => {
          if (err) {
            return console.error(err.message);
          }
          
        }
      );

     
     
     
      // paginação
      this.lastClickedPage = "firstPage"
      db.all("SELECT * FROM receita ORDER BY data DESC", (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        this.dados = row;
        this.dadosPage = row;
        this.dadosFilterMonth = row;
        
        //------------------------------------------------------------ data adc não pode ficar vazia
   

      this.dados = this.dadosPage.slice(0, 10);
      if (this.dados.length < 10) {
        

        while (this.dados.length < 10) {
          this.dados.push({
            nome: "...",
            tipo: "...",
            data: "...",
            valor: 0,
          });
        }
      }
      //--------------------------------------------------------------
      });
      // consultad db
      db.each("SELECT valor FROM receita", (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const resultado = this.HoldResult + row.valor;
        this.HoldResult = parseFloat(resultado.toFixed(2));
      });
      
      db.close();
    });
  },
  computed: {
           dadosComputed: function () {
          var computedDados = []
           this.dados.map(function(match) {
           computedDados.push(match)
      })
      return computedDados
    },

   

  },


  //================================ metodos principais
  methods: {

    FormatedDate:function(data){
      return data.toString().split("-").reverse().join("/");
    },

    AlertInsert(){
      setTimeout(() => {
                  this.AlertInsertControl = false
                  
                  }, 1500)
        this.AlertInsertControl = true
    },

    AlertDelete(){
      setTimeout(() => {
                  this.AlertDeleteControl = false
                  
                  }, 1500)
        this.AlertDeleteControl = true
    },

  
    getMonthFilter(event) {
      
     
      if(event.target.value != '0'){
        var mes = event.target.value
        db.all("SELECT * FROM receita WHERE dataMes = ? ORDER BY data DESC;",[mes], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        if (row.length != 0){
          this.dados = row;
        this.dadosPage = row;
        this.dadosFilterMonth = row;
        this.dados = this.dadosPage.slice(0, 10);
        
        const filterresult = row.map(u => u.valor).reduce((total,valor)=> total + valor)
        this.HoldResult = parseFloat(filterresult.toFixed(2))
        

        }else{
           this.dados = row;
        this.dadosPage = row;
        this.dadosFilterMonth = row;
        this.dados = this.dadosPage.slice(0, 10);
        this.HoldResult = 0
        }
        
      if (this.dados.length < 10) {
        while (this.dados.length < 10) {
          this.dados.push({
            nome: "...",
            tipo: "...",
            data: "...",
            valor: 0,
          });
        }
      }
     
      })
      this.voltarFisrt()
      }else{

        db.all("SELECT * FROM receita ORDER BY data DESC", (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        this.dadosPage = row;
        this.dados = this.dadosPage.slice(0, 10);
       const filterresult = row.map(u => u.valor).reduce((total,valor)=> total + valor) 
         this.HoldResult = parseFloat(filterresult.toFixed(2))
        while (this.dados.length < 10) {
          this.dados.push({
            nome: "...",
            tipo: "...",
            data: "...",
            valor: 0,
          });
        }
      })
    }  
  },

    getTipoFilter(event){
        
      if(event.target.value != 'reset'){
         const TipoSelect = event.target.value
        db.all("SELECT * FROM receita WHERE tipo = ? ORDER BY data DESC; ",[TipoSelect], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        if(row.length != 0){
          this.dadosPage = row
        this.dados = this.dadosPage.slice(0, 10);
      const filterresult = row.map(u => u.valor).reduce((total,valor)=> total + valor) 
         this.HoldResult = parseFloat(filterresult.toFixed(2))

           while (this.dados.length < 10) {
            this.dados.push({
              nome: "...",
              tipo: "...",
              data: "...",
              valor: 0,
            });
          }
         
        }else{
          this.dadosPage = row
        this.dados = this.dadosPage.slice(0, 10);
        this.HoldResult = 0
        while (this.dados.length < 10) {
            this.dados.push({
              nome: "...",
              tipo: "...",
              data: "...",
              valor: 0,
            });
          }
        }
        
      });
      this.voltarFisrt()
      }else{
        db.all("SELECT * FROM receita ORDER BY data DESC", (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        if(row.length != 0){
          this.dadosPage = row;
        this.dados = this.dadosPage.slice(0, 10);
        const filterresult = row.map(u => u.valor).reduce((total,valor)=> total + valor) 
         this.HoldResult = parseFloat(filterresult.toFixed(2))
        while (this.dados.length < 10) {
          this.dados.push({
            nome: "...",
            tipo: "...",
            data: "...",
            valor: 0,
          });
        }
        }else{
          this.dadosPage = row;
        this.dados = this.dadosPage.slice(0, 10);
        this.HoldResult  = 0
        while (this.dados.length < 10) {
          this.dados.push({
            nome: "...",
            tipo: "...",
            data: "...",
            valor: 0,
          });
        }
        }
         this.voltarFisrt()
      })
      }
    },

    voltarFisrt(){
      this.nextPage = 1;

        this.$refs.firstPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.secondPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";

        document.getElementById("firstPage").innerHTML = 1
        document.getElementById("secondPage").innerHTML = 2
        document.getElementById("thirdPage").innerHTML = 3
        document.getElementById("forthPage").innerHTML = 4
        document.getElementById("fifthPage").innerHTML = 5
    },

    resetarFiltros(){
        
     
     db.all("SELECT * FROM receita ORDER BY data DESC", (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        this.dadosPage = row;
        this.dados = this.dadosPage.slice(0, 10);
        const filterresult = row.map(u => u.valor).reduce((total,valor)=> total + valor) 
         this.HoldResult = parseFloat(filterresult.toFixed(2))
        while (this.dados.length < 10) {
          this.dados.push({
            nome: "...",
            tipo: "...",
            data: "...",
            valor: 0,
          });
        }
      })

      document.getElementById("messelect").value = 0;
      document.getElementById("tiposelect").value = "reset";
      document.getElementById("filterselect").value = "reset";
      this.voltarFisrt()

    },

    addNextPages() {
      this.nextPage++
      
      var pageItems = Object.values(document.querySelectorAll("li")).slice(1,6)
      for(var i = 0; i < pageItems.length; i++) {
        if(pageItems[i].innerText == String(this.nextPage)) {
          pageItems[i].className = "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white"
        }else {
          pageItems[i].className = "px-3 py-1 mr-3 cursor-pointer rounded-full"
        }
      }
      var nextFive = this.nextPage - 1
      
      if (nextFive % 5 == 0 ) {
        pageItems[0].className = "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white"
        document.getElementById("firstPage").innerHTML = parseInt(document.getElementById("firstPage").innerHTML) + 5;
        document.getElementById("secondPage").innerHTML = parseInt(document.getElementById("secondPage").innerHTML) + 5;
        document.getElementById("thirdPage").innerHTML = parseInt(document.getElementById("thirdPage").innerHTML) + 5;
        document.getElementById("forthPage").innerHTML = parseInt(document.getElementById("forthPage").innerHTML) + 5;
        document.getElementById("fifthPage").innerHTML = parseInt(document.getElementById("fifthPage").innerHTML) + 5;

      }
      var getNextpage = this.nextPage
      
      var endSlice = (getNextpage) * 10
      var initialSlice = endSlice - 10
      
      this.dados = this.dadosPage.slice(initialSlice, endSlice)
        if (this.dados.length < 10) {

          while (this.dados.length < 10) {
            this.dados.push({
              nome: "...",
              tipo: "...",
              data: "...",
              valor: 0,
            });
          }
        }

    },

    addPreviousPages() {
      if(this.nextPage > 1) {
        
        this.nextPage = this.nextPage - 1
        
        var pageItems = Object.values(document.querySelectorAll("li")).slice(1,6)
        
        if(this.nextPage >= 1 && Math.sign(this.nextPage) == 1) {
          for(var i = 0; i < pageItems.length; i++) {
            if(pageItems[i].innerText == String(this.nextPage)) {
              pageItems[i].className = "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white"
            }else {
              pageItems[i].className = "px-3 py-1 mr-3 cursor-pointer rounded-full"
            }
          }
        
          if (this.nextPage % 5 == 0 ) {
            pageItems[pageItems.length-1].className = "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white"
            document.getElementById("firstPage").innerHTML = parseInt(document.getElementById("firstPage").innerHTML) - 5;
            document.getElementById("secondPage").innerHTML = parseInt(document.getElementById("secondPage").innerHTML) - 5;
            document.getElementById("thirdPage").innerHTML = parseInt(document.getElementById("thirdPage").innerHTML) - 5;
            document.getElementById("forthPage").innerHTML = parseInt(document.getElementById("forthPage").innerHTML) - 5;
            document.getElementById("fifthPage").innerHTML = parseInt(document.getElementById("fifthPage").innerHTML) - 5;
    
          }
          var getPreviouspage = this.nextPage
          
          var endSlice = (getPreviouspage) * 10
          var initialSlice = endSlice - 10
          
          this.dados = this.dadosPage.slice(initialSlice, endSlice)
            if (this.dados.length < 10) {
    
              while (this.dados.length < 10) {
                this.dados.push({
                  nome: "...",
                  tipo: "...",
                  data: "...",
                  valor: 0,
                });
              }
            }
        }
      }
    },

    pagination(event) {
      this.nextPage = parseInt(event.target.innerHTML)
      this.lastClickedPage = event.target.id;
      this.lastClickedPageHtml = event.target.innerHTML;

      if (event.target.id == "firstPage") {
        this.$refs.firstPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.secondPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
      }

      if (event.target.id == "secondPage") {
        this.$refs.firstPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.secondPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.thirdPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
      }

      if (event.target.id == "thirdPage") {
        this.$refs.firstPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.secondPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.forthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
      }

      if (event.target.id == "forthPage") {
        this.$refs.firstPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.secondPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.fifthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
      }

      if (event.target.id == "fifthPage") {
        this.$refs.firstPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.secondPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
      }

      //this.dados = this.dadosPage

      if (parseInt(event.srcElement.innerHTML) <= Math.ceil(this.dadosPage.length / 10)) {
        var lastSlice = parseInt(event.srcElement.innerHTML) * 10;
        var startSlice = lastSlice - 10;

        this.dados = this.dadosPage.slice(startSlice, lastSlice);
        if (this.dados.length < 10) {
          

          while (this.dados.length < 10) {
            this.dados.push({
              nome: "...",
              tipo: "...",
              data: "...",
              valor: 0,
            });
          }
        }
      } else {
        //alert("Não existe entradas na pagina escolhida")
        var emptyResult = [];
        while (emptyResult.length < 10) {
          emptyResult.push({
            nome: "...",
            tipo: "...",
            data: "...",
            valor: 0,
          });
        }
        this.dados = emptyResult.slice(0, 10);
        
      }
    },
    
    getFilter(event) {
      


      if (event.target.value == "adicaoRecente") {
        
        db.all("SELECT * FROM receita ORDER BY data DESC", (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        this.dados = row;
        this.dadosPage = row;
        this.dadosFilterMonth = row;
      
       
       
      this.dados = this.dadosPage.slice(0, 10);

       while (this.dados.length < 10) {
          this.dados.push({
            nome: "...",
            tipo: "...",
            data: "...",
            valor: 0,
          });
        }
       
      //--------------------------------------------------------------
      });

          
        this.dados = this.dadosPage.slice(0, 10);

        this.$refs.firstPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.secondPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.voltarFisrt()
         
      } 
      else if (event.target.value == "adicaoAntiga") {
       db.all("SELECT * FROM receita ORDER BY data ASC", (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        this.dados = row;
        this.dadosPage = row;
        this.dadosFilterMonth = row;
        
       
       
      this.dados = this.dadosPage.slice(0, 10);

       while (this.dados.length < 10) {
          this.dados.push({
            nome: "...",
            tipo: "...",
            data: "...",
            valor: 0,
          });
        }
   
      //--------------------------------------------------------------
      });
    

        this.dados = this.dadosPage.slice(0, 10);

        this.$refs.firstPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.secondPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
          this.voltarFisrt()
      } else if (event.target.value == "valorBaixo") {
        this.dadosPage.sort(function (a, b) {
          return a.valor - b.valor;
        });

        this.dados = this.dadosPage.slice(0, 10);

        this.$refs.firstPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.secondPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
          this.voltarFisrt()
      } else if (event.target.value == "valorAlto") {
        this.dadosPage.sort(function (a, b) {
          return b.valor - a.valor;
        });

        this.dados = this.dadosPage.slice(0, 10);

        this.$refs.firstPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.secondPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPage.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
          this.voltarFisrt()
      }
         while (this.dados.length < 10) {
          this.dados.push({
            nome: "...",
            tipo: "...",
            data: "...",
            valor: 0,
          });
        }
    },

    // abrir formulario para nova entrar
    AbrirFormulario: function () {
      
      if (this.FormControl === false) this.FormControl = true;
      else this.FormControl = false;
      this.tipoR = "";
      this.valorR = 0;
      this.nomeR = "";
      this.dataR = "";
      this.descR = "";
    },

    

    // função para buscar todos os dados da receita e atualizar a tabela
    Update: function () {
      db.all("SELECT * FROM receita ORDER BY data DESC", (err, row) => {
        if (err) {
          console.log("erro ao atualizar dados:" + err.message);

        }
        this.dadosPage = row
        this.dados = this.dadosPage.slice(0, 10);

        

        if (this.dados.length < 10) {
          while (this.dados.length < 10) {
            this.dados.push({
              nome: "...",
              tipo: "...",
              data: "...",
              valor: 0,
            });
          }
        }
      });
    },

    CarregarDados: function (NomeItem,DataItem,TipoItem,ValorItem,DescItem,IdItem ) {
      this.NomeDetalhe = NomeItem;
      this.DataDetalhe = DataItem;
      this.TipoDetalhe = TipoItem;
      this.ValorDetalhe = ValorItem;
      this.DescricaoDetalhe = DescItem;
      this.IdDetalhe = IdItem;
    },

    DetalharItem: function (nome, data, tipo, valor, desc,id) {
      if (this.ShowDetail === false) {
        this.ShowDetail = true;
        this.CarregarDados(nome, data, tipo, valor, desc,id);
      } else {
        this.ShowDetail = false;
      }
    },

    DeletarItem: function (IdItem) {
      
      db.run("DELETE FROM receita WHERE id = ?;", [IdItem], (err) => {
        if (err) {
          console.log(err);
        }
        this.AlertDelete();
        
      });
      this.Update();
       const resultado = this.HoldResult - this.ItemDeleteValor;
      this.HoldResult = parseFloat(resultado.toFixed(2));
      this.ConfirmaDelete();
    },




    // função para inserir dados na receita
    EnviarDados: function () {
    const data = new Date();
    this.dataAdc = data.getDate()+'/'+(data.getMonth()+1)+'/'+ data.getFullYear();

  
    const datePattern = this.dataR
    const date = datePattern.split('-')
      this.dataMesR = date[1]
      this.dataAnoR = date[0]
      db.run(
        "INSERT INTO receita(nome,valor,tipo,data,dataMes,dataAno,dataAdc,desc) VALUES(?,?,?,?,?,?,?,?);",[this.nomeR, this.valorR, this.tipoR, this.dataR,this.dataMesR,this.dataAnoR,this.dataAdc, this.descR],
        (err) => {
          if (err) {
            console.log(err);
          }
          this.AlertInsert()

        })
      
      this.Update();  
      const resultado = this.HoldResult + this.valorR
     
      this.HoldResult = parseFloat(resultado.toFixed(2)); // atualizar o valor do card
       // chamar função para atualizar tabela
      this.AbrirFormulario(); //chamar função para fechar o formulario
      
    },

    ConfirmaDelete(itemid,itemnome,itemvalor){

      this.ItemDeleteId = itemid
      this.ItemDeleteNome =  itemnome
      this.ItemDeleteValor =  itemvalor

      if(this.DeleteControl === false)

            this.DeleteControl = true
            
      else
            this.DeleteControl = false
            this.ShowDetail = false

    }

   
  },
};
</script>



<style scoped>

.notification{
  --animate-duration: 2s;
  --animate-delay: 0.9s;
  
}
/* inicio do css*/
.screen-title{
  font-size: 30px;
  margin-top: 10px;
  font-family: 'Source Sans Pro', sans-serif;
  
}
/*        css da pagina de detalhe             */
.table-model {
  min-width: 100%;
  min-height: 100%;
 
  font-family: 'Source Sans Pro', sans-serif;
  
}

.item-label {
  
  
  color: rgb(31, 41, 55);
  
  font-size: 20px;
  font-family: 'Source Sans Pro', sans-serif;
}

.item-label2 {
  margin-left: 0px;
  
  color: rgb(31, 41, 55);
  
  font-size: 20px;
  font-family: 'Source Sans Pro', sans-serif;
}
.item-label3 {
  
  color: rgb(31, 41, 55);
  
  font-size: 20px;
  font-family: 'Source Sans Pro', sans-serif;
  
}
.title-detalhe{
  font-size: 22px;
  margin-bottom: 20px;
  color: rgb(6, 11, 19);
}
.vitrine {
 
  height: 50px;
  margin-bottom: 20px;
  
  background-color: white;
  
  border-radius: 4px;
  border: 1px solid black;
  font-size: 20px;
  
font-family: 'Source Sans Pro', sans-serif;
  text-align: initial;
  padding-left: 10px;
  padding-top: 10px;
}
.vitrine-desc {
  border: 1px solid black;
  
  height: 150px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  background-color: white;
  text-align: initial;
  padding-left: 10px;
  padding-top: 1px;
  font-size: 16px;
  
}
.delete {
  background-color: rgba(31, 41, 55);
  border: 2px solid rgb(255, 0, 0);
  border-radius: 5px;
  font-size: 15px;
  padding: 0.2em;
  color: rgb(255, 255, 255);
  
  box-shadow: rgba(0, 0, 0, 0.816) 0px 5px 10px;
  font-family: 'Source Sans Pro', sans-serif;
}
.delete-disabled{

  background-color: rgba(31, 41, 55);

  border-radius: 5px;
  font-size: 15px;
  padding: 0.2em;
  color: rgb(111, 111, 111);
  font-family: 'Source Sans Pro', sans-serif;
  box-shadow: rgba(0, 0, 0, 0.816) 0px 5px 10px;
}
.text-table {
  color: rgb(110, 231, 183);
  letter-spacing: 1.2px;
}

.detail {
  
  background-color: rgba(31, 41, 55);
  border: 2px solid rgb(0, 162, 255);
  border-radius: 5px;
  font-size: 15px;
  padding: 0.2em;
  margin-left: 5px;
  font-family: 'Source Sans Pro', sans-serif;
  color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.816) 0px 5px 10px;
}

.detail-disabled {
  background-color: rgba(31, 41, 55);
 
  border-radius: 5px;
  font-size: 15px;
  padding: 0.2em;
  margin-left: 5px;
  font-family: 'Source Sans Pro', sans-serif;
  color: rgb(99, 99, 99);
  box-shadow: rgba(0, 0, 0, 0.816) 0px 5px 10px;
}


.first-col {
  font-size: 40px;
  padding-left: 30px;
  font-family: 'Source Sans Pro', sans-serif;
  text-shadow: 0px 0px 2px rgb(75, 75, 75);
  color: rgba(31, 41, 55);
  
   
   
  
}
.second-col{

padding-top: 80px;
font-family: 'Source Sans Pro', sans-serif;

margin-right: 20px;
}

.third-col{

  padding-top: 5px;
  font-family: 'Source Sans Pro', sans-serif;
  justify-content:end;
 

}

template{
  overflow: hidden;
}

/* container pai principal*/
.main-container {
  padding-left: 156px; /*pula a sidebar*/
  padding-top: 28px; /*pula a topbar*/
  padding-bottom: 0px;
  border: 1px solid white;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: rgb(252, 252, 252);
  
}

.label-filtro {
  color: #111827;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  letter-spacing: 1.2px;
}

.Item-Detalhe {
  background-color:whitesmoke;
  width: 550px;
  height: 550px;
  border-radius: 20px;
  border: 5px solid rgba(31, 41, 55);
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
  padding: 20px;
  font-family: 'Source Sans Pro', sans-serif;
  
}
.teste{
  border: 1px solid black;
}

.button-detalhe {
  background-color: rgba(31, 41, 55);
  border: 2px solid rgba(31, 41, 55);
  border-radius: 20px;
  color: rgba(110, 231, 183);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow: -1px -1px 5px 2px darkgray;
  width: 150px;
  height: 60px;
  
  font-family: 'Source Sans Pro', sans-serif;
}

.button-detalhe:hover{
  background-color: rgb(86, 98, 116);
}
.receita-chart-table {
  width: 60%;
  height: 650px;
  float: right;
  margin-right: 260px;
  margin-left: 0px;
  background-color: rgb(255, 255, 255);
  color: darkgray;
  border: 1px gray solid;
  box-shadow: 5px 5px 5px;
  font-family: 'Source Sans Pro', sans-serif;
}

.button-cadastro {
  background-color: rgba(31, 41, 55);
  font-family: 'Source Sans Pro', sans-serif;
  border-radius: 30px;
  color: rgb(255, 255, 255);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
 margin-right: 10px;
  margin-top: 60px;
  width: 200px;
  height: 70px;
   box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
 
}
.button-cadastro:hover {
  background-color: #384765;
  
}
.button-cadastro:focus {
  outline: none;

}




.upper-space {
  
  height: 150px;
  padding-bottom: 10px;
  
}
.lower-space {
  height: 70%;
  
}
.container-button {
  width: 250px;

  margin-top: 0px;
  margin-left: 10px;
  margin-right: 0px;

  position: relative;

  justify-content: center;
  align-items: center;
  float: left;
}

/*-------------------[tela do formulario]-------------------*/
/* mascara do background*/
.model-mask {
  position:fixed;
  right: 0;
  left:0;
  bottom: 0;
  top: 0;
  
  
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  z-index: 10;
  margin-left: 155px;
  
}
.teste{
  border :1px solid black;
}
/* container do form*/
.model-wrapper {
  
  border: 2px solid rgb(110, 231, 183);
  border-radius: 20px;
  
}
.delete-wrapper {
  display: inline-block;
 
  border: 2px solid rgb(110, 231, 183);
  border-radius: 20px;
  
}
.delete-box{
  width: 300px;
  height: 200px;
  background-color: whitesmoke;
  border-radius: 17px;
  padding: 2%;
  border: 5px solid rgba(31, 41, 55);
  font-family: 'Source Sans Pro', sans-serif;
  align-items: center;
  justify-content: center;
}
.btn-sim{
  border-radius: 20px;
  width: 80px;
  height: 50px;
  text-align: center;
  margin-right: 20px;
  font-family: 'Source Sans Pro', sans-serif;
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
}
.btn-sim:focus{
 outline: none;
}
.delete-detail{
  
  float: right;
}

.btn-nao{
    border-radius: 20px;
  width: 80px;
  height: 50px;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
}
.btn-nao:focus{
 outline: none;
}


h3 {
  font-size: 19px;
  margin-bottom: 10px;
}
/* form*/
.form-wrapper {
  
  width: 550px;
  height: 580px;
  background-color: whitesmoke;
  
  padding: 2%;
  border-radius: 20px;
  border: 5px solid rgba(31, 41, 55);
  font-family: "Source Sans Pro", sans-serif;
  
}
/* inputs */
.input-model {
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Source Sans Pro', sans-serif;
  border: 1px solid rgba(31, 41, 55);
 
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
}

.alert-dados{

  font-size: 25px;
 color: red;
 border: 1px solid black;
 font-family: 'Source Sans Pro', sans-serif;
}
/* container butões*/
.button-container{
  
  align-items: center;
  justify-content: center;
  text-align: center;
  
}
/* modelo do input desc*/
.input-model-desc {
  width: 100%;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid rgb(31, 41, 55);
  border-radius: 3px;
  padding: 0px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Source Sans Pro', sans-serif;
}
/* modelo para butões*/
.button-model {
  width: 40%;
  height: 50px;
  margin-right: 10px;
  border-radius: 20px;
  color: rgb(110, 231, 183);
  border:2px solid rgba(17, 24, 39);
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
  font-family: 'Source Sans Pro', sans-serif;
  
  
}
.button-model:hover{
  background-color: #384765;
  
}

.button-model:focus{
  outline: none;
}
/* modelo para labels*/
.label-model {
  float: left;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  color: rgb(49, 62, 70);
  padding: 2px;
  border-radius: 4px;
  
}
/* ---------------------------------------------------------------------------------*/
td {
  background-color: rgb(255, 255, 255);
  align-items: center;
  text-align: center;
}

.footer-table{
  font-family: "Source Sans Pro", sans-serif;
  margin-top: 10px;
  justify-content: center;

}

.svg-icon {
  width: 35px;
  height: 35px;

}
.svg-icon-footer {
  width: 35px;
  height: 35px;

}

.svg-icon path{
  fill: #797f8c;
}
.svg-icon-footer path{
  fill: #111827;
  
}
button:focus{
   outline: none;
}


.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}

</style>
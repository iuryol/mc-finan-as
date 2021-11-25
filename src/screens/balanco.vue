<template>
  <div class="main-container flex flex-row w-screen h-screen">
    <div class="left-col flex flex-col">
    <h2 class="title-fluxo"><strong>Receita</strong></h2>

    <div class="first-row flex flex-row">
    
      <div class="fisrt-col">
        <div class="tipo-texto-grahp">  </div>
        <div id="chartrec" v-if="ChartLoad" >
          <chart1   v-bind:valorA='ativo' v-bind:valorB='prod' v-bind:valorC="cred"  v-bind:valorD="sald" v-bind:valorE="TotalServicoRec" />

      </div>
      </div>

      <div class="second-col flex flex-row">
        <div class="tipo">
          <h2 class="tipo-texto"><strong>Tipo</strong></h2>
          <h2  style="border-left: 5px solid #4287f5;" class="tipo-item">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M4.423,9.141H3.565c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.192,0.429-0.429S4.66,9.141,4.423,9.141 M6.997,16.861H6.139c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.191,0.429-0.429S7.234,16.861,6.997,16.861 M4.423,16.861H3.565c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.191,0.429-0.429S4.66,16.861,4.423,16.861M13.861,9.998h0.857c0.236,0,0.429-0.192,0.429-0.429s-0.192-0.429-0.429-0.429h-0.857c-0.237,0-0.43,0.192-0.43,0.429S13.624,9.998,13.861,9.998 M14.719,16.861h-0.857c-0.237,0-0.43,0.192-0.43,0.43s0.192,0.429,0.43,0.429h0.857c0.236,0,0.429-0.191,0.429-0.429S14.955,16.861,14.719,16.861 M15.576,13.001c-0.236,0-0.429,0.192-0.429,0.43c0,0.236,0.192,0.429,0.429,0.429c0.237,0,0.43-0.192,0.43-0.429C16.006,13.193,15.813,13.001,15.576,13.001 M6.997,9.141H6.139c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.192,0.429-0.429S7.234,9.141,6.997,9.141M12.145,9.141h-0.857c-0.236,0-0.429,0.192-0.429,0.429s0.193,0.429,0.429,0.429h0.857c0.237,0,0.43-0.192,0.43-0.429S12.382,9.141,12.145,9.141 M17.722,10.856V7.424c0-0.948-0.769-1.716-1.716-1.716h-0.617l-1.038-3.873c-0.245-0.916-1.186-1.458-2.101-1.213L3.592,2.912C2.676,3.157,2.133,4.098,2.378,5.014l0.186,0.695H2.278c-0.947,0-1.716,0.768-1.716,1.716V17.72c0,0.947,0.769,1.716,1.716,1.716h13.728c0.947,0,1.716-0.769,1.716-1.716v-1.716c0.947,0,1.716-0.769,1.716-1.716v-1.716C19.438,11.624,18.669,10.856,17.722,10.856 M16.006,6.566c0.473,0,0.857,0.384,0.857,0.858v0.238c-0.253-0.146-0.544-0.238-0.857-0.238h-0.157l-0.229-0.858H16.006z M14.41,5.372l0.55,2.053H6.67L14.41,5.372z M3.814,3.741l8.657-2.29c0.458-0.123,0.928,0.149,1.051,0.607l0.222,0.828L3.43,5.621l-0.223-0.83C3.084,4.333,3.356,3.863,3.814,3.741M1.42,7.424c0-0.474,0.384-0.858,0.858-0.858h0.517l0.229,0.858H2.278c-0.314,0-0.605,0.091-0.858,0.238V7.424z M16.863,17.72c0,0.474-0.385,0.858-0.857,0.858H2.278c-0.474,0-0.858-0.385-0.858-0.858V9.141c0-0.474,0.384-0.858,0.858-0.858h13.728c0.473,0,0.857,0.384,0.857,0.858v1.715h-1.716c-0.947,0-1.716,0.768-1.716,1.716v1.716c0,0.947,0.769,1.716,1.716,1.716h1.716V17.72z M18.58,14.288c0,0.474-0.385,0.857-0.858,0.857h-2.574c-0.474,0-0.857-0.384-0.857-0.857v-1.716c0-0.474,0.384-0.858,0.857-0.858h2.574c0.474,0,0.858,0.385,0.858,0.858V14.288z M9.571,16.861H8.713c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.236,0,0.429-0.191,0.429-0.429S9.808,16.861,9.571,16.861M12.145,16.861h-0.857c-0.236,0-0.429,0.192-0.429,0.43s0.193,0.429,0.429,0.429h0.857c0.237,0,0.43-0.191,0.43-0.429S12.382,16.861,12.145,16.861 M9.571,9.141H8.713c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858C9.808,9.998,10,9.806,10,9.569S9.808,9.141,9.571,9.141"
              ></path>
            </svg>

            <strong> Ativo:</strong>
          </h2>
          <h2 style="border-left: 5px solid #42f57b;" class="tipo-item"><svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M4.319,8.257c-0.242,0-0.438,0.196-0.438,0.438c0,0.243,0.196,0.438,0.438,0.438c0.242,0,0.438-0.196,0.438-0.438C4.757,8.454,4.561,8.257,4.319,8.257 M7.599,10.396c0,0.08,0.017,0.148,0.05,0.204c0.034,0.056,0.076,0.104,0.129,0.144c0.051,0.04,0.112,0.072,0.182,0.097c0.041,0.015,0.068,0.028,0.098,0.04V9.918C7.925,9.927,7.832,9.958,7.747,10.02C7.648,10.095,7.599,10.22,7.599,10.396 M15.274,6.505H1.252c-0.484,0-0.876,0.392-0.876,0.876v7.887c0,0.484,0.392,0.876,0.876,0.876h14.022c0.483,0,0.876-0.392,0.876-0.876V7.381C16.15,6.897,15.758,6.505,15.274,6.505M1.69,7.381c0.242,0,0.438,0.196,0.438,0.438S1.932,8.257,1.69,8.257c-0.242,0-0.438-0.196-0.438-0.438S1.448,7.381,1.69,7.381M1.69,15.269c-0.242,0-0.438-0.196-0.438-0.438s0.196-0.438,0.438-0.438c0.242,0,0.438,0.195,0.438,0.438S1.932,15.269,1.69,15.269M14.836,15.269c-0.242,0-0.438-0.196-0.438-0.438s0.196-0.438,0.438-0.438s0.438,0.195,0.438,0.438S15.078,15.269,14.836,15.269M15.274,13.596c-0.138-0.049-0.283-0.08-0.438-0.08c-0.726,0-1.314,0.589-1.314,1.314c0,0.155,0.031,0.301,0.08,0.438H2.924c0.049-0.138,0.081-0.283,0.081-0.438c0-0.726-0.589-1.314-1.315-1.314c-0.155,0-0.3,0.031-0.438,0.08V9.053C1.39,9.103,1.535,9.134,1.69,9.134c0.726,0,1.315-0.588,1.315-1.314c0-0.155-0.032-0.301-0.081-0.438h10.678c-0.049,0.137-0.08,0.283-0.08,0.438c0,0.726,0.589,1.314,1.314,1.314c0.155,0,0.301-0.031,0.438-0.081V13.596z M14.836,8.257c-0.242,0-0.438-0.196-0.438-0.438s0.196-0.438,0.438-0.438s0.438,0.196,0.438,0.438S15.078,8.257,14.836,8.257 M12.207,13.516c-0.242,0-0.438,0.196-0.438,0.438s0.196,0.438,0.438,0.438s0.438-0.196,0.438-0.438S12.449,13.516,12.207,13.516 M8.812,11.746c-0.059-0.043-0.126-0.078-0.199-0.104c-0.047-0.017-0.081-0.031-0.117-0.047v1.12c0.137-0.021,0.237-0.064,0.336-0.143c0.116-0.09,0.174-0.235,0.174-0.435c0-0.092-0.018-0.17-0.053-0.233C8.918,11.842,8.87,11.788,8.812,11.746 M18.78,3.875H4.757c-0.484,0-0.876,0.392-0.876,0.876V5.19c0,0.242,0.196,0.438,0.438,0.438c0.242,0,0.438-0.196,0.438-0.438V4.752H18.78v7.888h-1.315c-0.242,0-0.438,0.196-0.438,0.438c0,0.243,0.195,0.438,0.438,0.438h1.315c0.483,0,0.876-0.393,0.876-0.876V4.752C19.656,4.268,19.264,3.875,18.78,3.875 M8.263,8.257c-1.694,0-3.067,1.374-3.067,3.067c0,1.695,1.373,3.068,3.067,3.068c1.695,0,3.067-1.373,3.067-3.068C11.33,9.631,9.958,8.257,8.263,8.257 M9.488,12.543c-0.062,0.137-0.147,0.251-0.255,0.342c-0.108,0.092-0.234,0.161-0.378,0.209c-0.123,0.041-0.229,0.063-0.359,0.075v0.347H8.058v-0.347c-0.143-0.009-0.258-0.032-0.388-0.078c-0.152-0.053-0.281-0.128-0.388-0.226c-0.108-0.098-0.191-0.217-0.25-0.359c-0.059-0.143-0.087-0.307-0.083-0.492h0.575c-0.004,0.219,0.046,0.391,0.146,0.518c0.088,0.109,0.207,0.165,0.388,0.185v-1.211c-0.102-0.031-0.189-0.067-0.3-0.109c-0.136-0.051-0.259-0.116-0.368-0.198c-0.109-0.082-0.198-0.183-0.265-0.306c-0.067-0.123-0.101-0.275-0.101-0.457c0-0.159,0.031-0.298,0.093-0.419c0.062-0.121,0.146-0.222,0.252-0.303S7.597,9.57,7.735,9.527C7.85,9.491,7.944,9.474,8.058,9.468V9.134h0.438v0.333c0.114,0.005,0.207,0.021,0.319,0.054c0.134,0.04,0.251,0.099,0.351,0.179c0.099,0.079,0.178,0.18,0.237,0.303c0.059,0.122,0.088,0.265,0.088,0.427H8.916c-0.007-0.169-0.051-0.297-0.134-0.387C8.712,9.968,8.626,9.932,8.496,9.919v1.059c0.116,0.035,0.213,0.074,0.333,0.118c0.145,0.053,0.272,0.121,0.383,0.203c0.111,0.083,0.2,0.186,0.268,0.308c0.067,0.123,0.101,0.273,0.101,0.453C9.581,12.244,9.549,12.406,9.488,12.543"></path>
						</svg><strong>Crédito:</strong></h2>
          <h2 style="border-left: 5px solid #f5cb42; " class="tipo-item"><svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M9.941,4.515h1.671v1.671c0,0.231,0.187,0.417,0.417,0.417s0.418-0.187,0.418-0.417V4.515h1.672c0.229,0,0.417-0.187,0.417-0.418c0-0.23-0.188-0.417-0.417-0.417h-1.672V2.009c0-0.23-0.188-0.418-0.418-0.418s-0.417,0.188-0.417,0.418V3.68H9.941c-0.231,0-0.418,0.187-0.418,0.417C9.522,4.329,9.71,4.515,9.941,4.515 M17.445,15.479h0.003l1.672-7.52l-0.009-0.002c0.009-0.032,0.021-0.064,0.021-0.099c0-0.231-0.188-0.417-0.418-0.417H5.319L4.727,5.231L4.721,5.232C4.669,5.061,4.516,4.933,4.327,4.933H1.167c-0.23,0-0.418,0.188-0.418,0.417c0,0.231,0.188,0.418,0.418,0.418h2.839l2.609,9.729h0c0.036,0.118,0.122,0.214,0.233,0.263c-0.156,0.254-0.25,0.551-0.25,0.871c0,0.923,0.748,1.671,1.67,1.671c0.923,0,1.672-0.748,1.672-1.671c0-0.307-0.088-0.589-0.231-0.836h4.641c-0.144,0.247-0.231,0.529-0.231,0.836c0,0.923,0.747,1.671,1.671,1.671c0.922,0,1.671-0.748,1.671-1.671c0-0.32-0.095-0.617-0.252-0.871C17.327,15.709,17.414,15.604,17.445,15.479 M15.745,8.275h2.448l-0.371,1.672h-2.262L15.745,8.275z M5.543,8.275h2.77L8.5,9.947H5.992L5.543,8.275z M6.664,12.453l-0.448-1.671h2.375l0.187,1.671H6.664z M6.888,13.289h1.982l0.186,1.671h-1.72L6.888,13.289zM8.269,17.466c-0.461,0-0.835-0.374-0.835-0.835s0.374-0.836,0.835-0.836c0.462,0,0.836,0.375,0.836,0.836S8.731,17.466,8.269,17.466 M11.612,14.96H9.896l-0.186-1.671h1.901V14.96z M11.612,12.453H9.619l-0.186-1.671h2.18V12.453zM11.612,9.947H9.34L9.154,8.275h2.458V9.947z M14.162,14.96h-1.715v-1.671h1.9L14.162,14.96z M14.441,12.453h-1.994v-1.671h2.18L14.441,12.453z M14.72,9.947h-2.272V8.275h2.458L14.72,9.947z M15.79,17.466c-0.462,0-0.836-0.374-0.836-0.835s0.374-0.836,0.836-0.836c0.461,0,0.835,0.375,0.835,0.836S16.251,17.466,15.79,17.466 M16.708,14.96h-1.705l0.186-1.671h1.891L16.708,14.96z M15.281,12.453l0.187-1.671h2.169l-0.372,1.671H15.281z"></path>
						</svg><strong>Produção:</strong></h2>
          <h2 style="border-left: 5px solid #f54242; " class="tipo-item"><svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M10.862,6.47H3.968v6.032h6.894V6.47z M10,11.641H4.83V7.332H10V11.641z M12.585,11.641h-0.861v0.861h0.861V11.641z M7.415,14.226h0.862v-0.862H7.415V14.226z M8.707,17.673h2.586c0.237,0,0.431-0.193,0.431-0.432c0-0.237-0.193-0.431-0.431-0.431H8.707c-0.237,0-0.431,0.193-0.431,0.431C8.276,17.479,8.47,17.673,8.707,17.673 M5.691,14.226h0.861v-0.862H5.691V14.226z M4.83,13.363H3.968v0.862H4.83V13.363z M16.895,4.746h-3.017V3.023h1.292c0.476,0,0.862-0.386,0.862-0.862V1.299c0-0.476-0.387-0.862-0.862-0.862H10c-0.476,0-0.862,0.386-0.862,0.862v0.862c0,0.476,0.386,0.862,0.862,0.862h1.293v1.723H3.106c-0.476,0-0.862,0.386-0.862,0.862v12.926c0,0.476,0.386,0.862,0.862,0.862h13.789c0.475,0,0.861-0.387,0.861-0.862V5.608C17.756,5.132,17.369,4.746,16.895,4.746 M10.862,2.161H10V1.299h0.862V2.161zM11.724,1.299h3.446v0.862h-3.446V1.299z M13.016,4.746h-0.861V3.023h0.861V4.746z M16.895,18.534H3.106v-2.585h13.789V18.534zM16.895,15.088H3.106v-9.48h13.789V15.088z M15.17,12.502h0.862v-0.861H15.17V12.502z M13.447,12.502h0.861v-0.861h-0.861V12.502zM15.17,10.778h0.862V9.917H15.17V10.778z M15.17,9.055h0.862V8.193H15.17V9.055z M16.032,6.47h-4.309v0.862h4.309V6.47zM14.309,8.193h-0.861v0.862h0.861V8.193z M12.585,8.193h-0.861v0.862h0.861V8.193z M13.447,14.226h2.585v-0.862h-2.585V14.226zM13.447,10.778h0.861V9.917h-0.861V10.778z M12.585,9.917h-0.861v0.861h0.861V9.917z"></path>
						</svg><strong>Saldo:</strong></h2>
            <h2 style="border-left: 5px solid #3c1747;" class="tipo-item">
              <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" width="24" height="24" viewBox="0 0 24 24" style="fill: gray;transform: ;msFilter:;"><path d="M20.5 5A1.5 1.5 0 0 0 19 6.5V11h-1V4.5a1.5 1.5 0 0 0-3 0V11h-1V3.5a1.5 1.5 0 0 0-3 0V11h-1V5.5a1.5 1.5 0 0 0-3 0v10.81l-2.22-3.6a1.5 1.5 0 0 0-2.56 1.58l3.31 5.34A5 5 0 0 0 9.78 22H17a5 5 0 0 0 5-5V6.5A1.5 1.5 0 0 0 20.5 5z"></path></svg>
              <strong>Serviço:</strong></h2>

            <h2 class="tipo-item-total"><b>Total</b></h2>
        </div>

        <div class="valor">
          <h2 class="tipo-texto"><strong>Valores</strong></h2>
          <h2 class="tipo-item"><strong> R$ {{ TotalAtivo }} </strong></h2>
          <h2 class="tipo-item"><strong> R$ {{ TotalCred }}</strong></h2>
          <h2 class="tipo-item"><strong> R$ {{ TotalProd }}</strong></h2>
          <h2 class="tipo-item"><strong> R$ {{ TotalSald }}</strong></h2>
           <h2 class="tipo-item"><strong> R$ {{ TotalServicoRec }}</strong></h2>
           <h2 class="tipo-item-total-result"><strong> R$ {{ TotalReceita }}</strong></h2>
        </div>
      </div>

      
    </div>
    

    <h2 class="title-fluxo"><strong>Despesa</strong></h2>

    <div class="second-row flex flex-row">
      <div class="fisrt-col">
        <div class="tipo-texto-grahp">  </div>
        <div v-if="ChartLoad" >
          <chart2   v-bind:valorA='TotalManu' v-bind:valorB='TotalInsumo' v-bind:valorC="TotalSal"  v-bind:valorD="TotalInvestimento" v-bind:valorE="TotalServico" v-bind:valorF="TotalImposto" />
      </div>
      </div>
      <div class="second-col flex flex-row">
        <div class="tipo">
          <h2 class="tipo-texto"><strong> Tipo </strong></h2>
          <h2 style="border-left: 5px solid #424bf5; " class="tipo-item-despesa"><svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M10.032,8.367c-1.112,0-2.016,0.905-2.016,2.018c0,1.111,0.904,2.014,2.016,2.014c1.111,0,2.014-0.902,2.014-2.014C12.046,9.271,11.143,8.367,10.032,8.367z M10.032,11.336c-0.525,0-0.953-0.427-0.953-0.951c0-0.526,0.427-0.955,0.953-0.955c0.524,0,0.951,0.429,0.951,0.955C10.982,10.909,10.556,11.336,10.032,11.336z"></path>
							<path fill="none" d="M17.279,8.257h-0.785c-0.107-0.322-0.237-0.635-0.391-0.938l0.555-0.556c0.208-0.208,0.208-0.544,0-0.751l-2.254-2.257c-0.199-0.2-0.552-0.2-0.752,0l-0.556,0.557c-0.304-0.153-0.617-0.284-0.939-0.392V3.135c0-0.294-0.236-0.532-0.531-0.532H8.435c-0.293,0-0.531,0.237-0.531,0.532v0.784C7.582,4.027,7.269,4.158,6.966,4.311L6.409,3.754c-0.1-0.1-0.234-0.155-0.376-0.155c-0.141,0-0.275,0.055-0.375,0.155L3.403,6.011c-0.208,0.207-0.208,0.543,0,0.751l0.556,0.556C3.804,7.622,3.673,7.935,3.567,8.257H2.782c-0.294,0-0.531,0.238-0.531,0.531v3.19c0,0.295,0.237,0.531,0.531,0.531h0.787c0.105,0.318,0.236,0.631,0.391,0.938l-0.556,0.559c-0.208,0.207-0.208,0.545,0,0.752l2.254,2.254c0.208,0.207,0.544,0.207,0.751,0l0.558-0.559c0.303,0.154,0.616,0.285,0.938,0.391v0.787c0,0.293,0.238,0.531,0.531,0.531h3.191c0.295,0,0.531-0.238,0.531-0.531v-0.787c0.322-0.105,0.636-0.236,0.938-0.391l0.56,0.559c0.208,0.205,0.546,0.207,0.752,0l2.252-2.254c0.208-0.207,0.208-0.545,0.002-0.752l-0.559-0.559c0.153-0.303,0.285-0.615,0.389-0.938h0.789c0.295,0,0.532-0.236,0.532-0.531v-3.19C17.812,8.495,17.574,8.257,17.279,8.257z M16.747,11.447h-0.653c-0.241,0-0.453,0.164-0.514,0.398c-0.129,0.496-0.329,0.977-0.594,1.426c-0.121,0.209-0.089,0.473,0.083,0.645l0.463,0.465l-1.502,1.504l-0.465-0.463c-0.174-0.174-0.438-0.207-0.646-0.082c-0.447,0.262-0.927,0.463-1.427,0.594c-0.234,0.061-0.397,0.271-0.397,0.514V17.1H8.967v-0.652c0-0.242-0.164-0.453-0.397-0.514c-0.5-0.131-0.98-0.332-1.428-0.594c-0.207-0.123-0.472-0.09-0.646,0.082l-0.463,0.463L4.53,14.381l0.461-0.463c0.169-0.172,0.204-0.434,0.083-0.643c-0.266-0.461-0.467-0.939-0.596-1.43c-0.06-0.234-0.272-0.398-0.514-0.398H3.313V9.319h0.652c0.241,0,0.454-0.162,0.514-0.397c0.131-0.498,0.33-0.979,0.595-1.43c0.122-0.208,0.088-0.473-0.083-0.645L4.53,6.386l1.503-1.504l0.46,0.462c0.173,0.172,0.437,0.204,0.646,0.083c0.45-0.265,0.931-0.464,1.433-0.597c0.233-0.062,0.396-0.274,0.396-0.514V3.667h2.128v0.649c0,0.24,0.161,0.452,0.396,0.514c0.502,0.133,0.982,0.333,1.433,0.597c0.211,0.12,0.475,0.089,0.646-0.083l0.459-0.462l1.504,1.504l-0.463,0.463c-0.17,0.171-0.202,0.438-0.081,0.646c0.263,0.448,0.463,0.928,0.594,1.427c0.061,0.235,0.272,0.397,0.514,0.397h0.651V11.447z"></path>
						</svg><strong> Manutenção:</strong></h2>
          <h2 style="border-left: 5px solid #053b01; " class="tipo-item-despesa"><svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M10.034,3.635h4.106c0.227,0,0.41-0.184,0.41-0.411c0-0.227-0.184-0.411-0.41-0.411h-4.106c-0.227,0-0.411,0.184-0.411,0.411C9.623,3.451,9.807,3.635,10.034,3.635 M17.412,14.412h0.002l1.643-7.392l-0.008-0.002c0.008-0.032,0.02-0.063,0.02-0.098c0-0.227-0.184-0.411-0.41-0.411H5.492L4.909,4.338L4.903,4.34C4.853,4.171,4.702,4.045,4.516,4.045H1.41C1.184,4.045,1,4.229,1,4.456S1.184,4.867,1.41,4.867h2.791l2.564,9.563h0.001c0.035,0.117,0.119,0.209,0.229,0.258c-0.154,0.25-0.247,0.541-0.247,0.857c0,0.906,0.735,1.643,1.643,1.643c0.907,0,1.643-0.736,1.643-1.643c0-0.301-0.087-0.58-0.228-0.822h4.562c-0.141,0.242-0.229,0.521-0.229,0.822c0,0.906,0.736,1.643,1.643,1.643c0.908,0,1.643-0.736,1.643-1.643c0-0.316-0.092-0.607-0.246-0.857C17.295,14.637,17.381,14.535,17.412,14.412 M15.74,7.331h2.406l-0.365,1.643h-2.223L15.74,7.331z M5.712,7.331h2.722l0.183,1.643H6.152L5.712,7.331z M6.813,11.438L6.373,9.795h2.336l0.183,1.643H6.813z M7.034,12.26h1.949L9.165,13.9h-1.69L7.034,12.26zM8.392,16.365c-0.454,0-0.822-0.367-0.822-0.82s0.368-0.822,0.822-0.822c0.454,0,0.821,0.369,0.821,0.822S8.845,16.365,8.392,16.365 M11.678,13.9H9.991L9.809,12.26h1.869V13.9z M11.678,11.438H9.717L9.534,9.795h2.144V11.438zM11.678,8.974H9.443L9.261,7.331h2.417V8.974z M14.184,13.9h-1.686V12.26h1.869L14.184,13.9z M14.457,11.438h-1.959V9.795h2.143L14.457,11.438z M14.732,8.974h-2.234V7.331h2.416L14.732,8.974z M15.783,16.365c-0.453,0-0.82-0.367-0.82-0.82s0.367-0.822,0.82-0.822s0.822,0.369,0.822,0.822S16.236,16.365,15.783,16.365 M16.686,13.9H15.01l0.184-1.641h1.857L16.686,13.9zM15.283,11.438l0.184-1.643H17.6l-0.365,1.643H15.283z"></path>
						</svg><strong> Insumo :</strong></h2>
          <h2 style="border-left: 5px solid #42f5ec; " class="tipo-item-despesa"><svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M8.749,9.934c0,0.247-0.202,0.449-0.449,0.449H4.257c-0.247,0-0.449-0.202-0.449-0.449S4.01,9.484,4.257,9.484H8.3C8.547,9.484,8.749,9.687,8.749,9.934 M7.402,12.627H4.257c-0.247,0-0.449,0.202-0.449,0.449s0.202,0.449,0.449,0.449h3.145c0.247,0,0.449-0.202,0.449-0.449S7.648,12.627,7.402,12.627 M8.3,6.339H4.257c-0.247,0-0.449,0.202-0.449,0.449c0,0.247,0.202,0.449,0.449,0.449H8.3c0.247,0,0.449-0.202,0.449-0.449C8.749,6.541,8.547,6.339,8.3,6.339 M18.631,4.543v10.78c0,0.248-0.202,0.45-0.449,0.45H2.011c-0.247,0-0.449-0.202-0.449-0.45V4.543c0-0.247,0.202-0.449,0.449-0.449h16.17C18.429,4.094,18.631,4.296,18.631,4.543 M17.732,4.993H2.46v9.882h15.272V4.993z M16.371,13.078c0,0.247-0.202,0.449-0.449,0.449H9.646c-0.247,0-0.449-0.202-0.449-0.449c0-1.479,0.883-2.747,2.162-3.299c-0.434-0.418-0.714-1.008-0.714-1.642c0-1.197,0.997-2.246,2.133-2.246s2.134,1.049,2.134,2.246c0,0.634-0.28,1.224-0.714,1.642C15.475,10.331,16.371,11.6,16.371,13.078M11.542,8.137c0,0.622,0.539,1.348,1.235,1.348s1.235-0.726,1.235-1.348c0-0.622-0.539-1.348-1.235-1.348S11.542,7.515,11.542,8.137 M15.435,12.629c-0.214-1.273-1.323-2.246-2.657-2.246s-2.431,0.973-2.644,2.246H15.435z"></path>
						</svg><strong> Salário :</strong></h2>
          <h2 style="border-left: 5px solid #e642f5; " class="tipo-item-despesa"><svg class="svg-icon" viewBox="0 0 20 20">
	<path fill="none" d="M4.68,13.716v-0.169H4.554C4.592,13.605,4.639,13.658,4.68,13.716z M11.931,6.465
	c-0.307-0.087-0.623,0.106-0.706,0.432l-1.389,5.484c-0.901,0.084-1.609,0.833-1.609,1.757c0,0.979,0.793,1.773,1.773,1.773
	c0.979,0,1.773-0.794,1.773-1.773c0-0.624-0.324-1.171-0.812-1.486l1.377-5.439C12.422,6.887,12.239,6.552,11.931,6.465z
	M10.591,14.729H9.408v-1.182h1.183V14.729z M15.32,13.716c0.04-0.058,0.087-0.11,0.126-0.169H15.32V13.716z M10,3.497
	c-3.592,0-6.503,2.911-6.503,6.503H4.68c0-2.938,2.382-5.32,5.32-5.32s5.32,2.382,5.32,5.32h1.182
	C16.502,6.408,13.591,3.497,10,3.497z M10,0.542c-5.224,0-9.458,4.234-9.458,9.458c0,5.224,4.234,9.458,9.458,9.458
	c5.224,0,9.458-4.234,9.458-9.458C19.458,4.776,15.224,0.542,10,0.542z M15.32,16.335v0.167h-0.212
	c-1.407,1.107-3.179,1.773-5.108,1.773c-1.93,0-3.701-0.666-5.108-1.773H4.68v-0.167C2.874,14.816,1.724,12.543,1.724,10
	c0-4.571,3.706-8.276,8.276-8.276c4.57,0,8.275,3.706,8.275,8.276C18.275,12.543,17.126,14.816,15.32,16.335z"></path>
</svg><strong> Investimento: </strong></h2>
  <h2 style="border-left: 5px solid #f59e42; " class="tipo-item-despesa">
    <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: rotate(180deg);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);"><path d="M20.5 5A1.5 1.5 0 0 0 19 6.5V11h-1V4.5a1.5 1.5 0 0 0-3 0V11h-1V3.5a1.5 1.5 0 0 0-3 0V11h-1V5.5a1.5 1.5 0 0 0-3 0v10.81l-2.22-3.6a1.5 1.5 0 0 0-2.56 1.58l3.31 5.34A5 5 0 0 0 9.78 22H17a5 5 0 0 0 5-5V6.5A1.5 1.5 0 0 0 20.5 5z"></path></svg>
    <strong> Serviço:</strong></h2>
    <h2 style="border-left: 5px solid #3C465C; " class="tipo-item-despesa">
     <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19 2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM5 20V4h14l.001 16H5z"></path><path d="M7 12h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zM7 6h10v4H7zm4 10h2v2h-2zm4-4h2v6h-2z"></path></svg>
    <strong> Imposto:</strong></h2>
<h2 class="tipo-item-total"><b>Total</b></h2>
        </div>

        <div class="valor ">
          <h2 class="tipo-texto"><strong>Valores</strong></h2>
          <h2 class="tipo-item-despesa ml-8"><strong> R$ {{ TotalManu }}</strong></h2>
          <h2 class="tipo-item-despesa"><strong> R$ {{ TotalInsumo }} </strong></h2>
          <h2 class="tipo-item-despesa"><strong> R$ {{ TotalSal }} </strong></h2>
          <h2 class="tipo-item-despesa"><strong> R$ {{ TotalInvestimento }} </strong></h2>
          <h2 class="tipo-item-despesa"><strong> R$ {{ TotalServico }} </strong></h2>
          <h2 class="tipo-item-despesa"><strong> R$ {{ TotalImposto }} </strong></h2>
          <h2 class="tipo-item-total-result"><strong> R$ {{ TotalDespesa }}</strong></h2>
        </div>
      </div>

      
    </div>
    </div>


    <div class="right-col flex flex-col">
      <div class="card-container flex flex-col">
       
        <select class="mb-2 mt-3 bg-gray-800 text-white rounded-sm h-6" v-on:change="TrocarMes($event)" name="mes" id="mes">
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
         <select class="mb-2 bg-gray-800 text-white rounded-sm h-6" v-on:change="TrocarAno($event)" name="ano" id="ano">
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
          <option value="2031">2031</option>
          <option value="2032">2032</option>
        </select>
         <h1 class="Title-Month"> <b>Mês: {{NomeDoMes}} </b>  </h1>
        <h1 class="Title-Month"> <b>Ano: {{AnoDoBalanco}} </b>  </h1>
        <card1 class="receita-fluxo" nome="Receita:" v-bind:valor="TotalReceita" />
        <card2 class="despesa-fluxo" nome="Despesa:" v-bind:valor="TotalDespesa" />
        <card3 class="saldo-fluxo" nome="Saldo:" v-bind:valor="IsSaldo" />

        <div class="button-cont">
          
        <button @click="EmitirPdf()" class="button-cadastro flex flex-row ">
         relatório mensal     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24" style="transform: ;msFilter:;"><path d="M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"></path></svg>
          </button>
        </div>
    </div>

    </div>

  </div>
</template>

<script>
var sqlite3 = require("sqlite3").verbose();
import card1 from "../components/card1.vue";
import card2 from "../components/card2.vue"
import card3 from "../components/card3.vue"
//import card3 from "../components/card3.vue";
import chart1 from "../components/chart1.vue";
import chart2 from "../components/chart2.vue";
import { jsPDF } from "jspdf";



export default {
  //componentes
  components: {
    chart1,
    card1,
    card2,
    card3,
    chart2,
    
  },

   
  // dados de variaves
  data() {
    return {

        ChartLoad:false,
      //---------
      TotalReceita: 0,
      TotalDespesa: 0,
     

  // dados do graficos receita
      ativo:0,
      cred:0,
      prod:0,
      sald:0  ,
      total:0,
      
  //variaveis da receita
      TotalAtivo:0,
      TotalCred:0,
      TotalProd:0,
      TotalSald :0,
      TotalServicoRec:0,
//varivaeis da despesa
      TotalManu:0,
      TotalInsumo:0,
      TotalSal:0,
      TotalInvestimento:0,
      TotalServico:0,
      TotalImposto:0,
// variaveis controle da data
      NomeDoMes:'',
     AnoDoBalanco:0,
     MesDoBalanco:0,
    };
  },
  // dados computados
  computed: {
    IsSaldo: function () {
      const resultado = this.TotalReceita - this.TotalDespesa;
      const Totalsaldo = parseFloat(resultado.toFixed(2));
      return Totalsaldo;
    },
  },

  // metodos do lifecicle
  mounted() {





    this.$nextTick(function () {
      //atualiza a pagina para o mes e ano atual
          const date = new Date();
          this.MesDoBalanco = date.getMonth() + 1
          this.AnoDoBalanco = date.getFullYear()
          var mes = date.getMonth() 
         
          

          if (mes === 0) {
        this.NomeDoMes = "Janeiro";
      } else if (mes === 1) {
       this.NomeDoMes = "Feveiro";
      } else if (mes === 2) {
       this.NomeDoMes = "Março";
      } else if (mes === 3) {
        this.NomeDoMes = "Abril";
      } else if (mes === 4) {
        this.NomeDoMes = "Maio";
      } else if (mes === 5) {
        this.NomeDoMes = "Junho";
      } else if (mes === 6) { 
       this.NomeDoMes = "Julho";
      } else if (mes === 7) {
        this.NomeDoMes = "Agosto";
      } else if (mes === 8) {
        this.NomeDoMes = "Setembro";
      } else if (mes === 9) {
       this.NomeDoMes = "Outubro";
      } else if (mes === 10) {
        this.NomeDoMes = "Novembro";
      } else if (mes === 11) {
        this.NomeDoMes= "Dezembro";
      }
        //mostra a data atual
       
      
      document.getElementById("mes").value = this.MesDoBalanco;
      document.getElementById("ano").value = this.AnoDoBalanco;


      
      const db = new sqlite3.Database(
        "./database/storage.db",
        (err) => {
          if (err) {
            return console.error(err.message);
          }
          
        }
      );

      


      db.each("SELECT valor FROM receita WHERE dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        
        this.TotalReceita = this.TotalReceita + row.valor;
        this.TotalReceita = parseFloat(this.TotalReceita.toFixed(2));
      });

      
      db.each("SELECT valor FROM despesa WHERE dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        
        this.TotalDespesa = this.TotalDespesa + row.valor;
        this.TotalDespesa = parseFloat(this.TotalDespesa.toFixed(2));
        
      });

          // ================== valores da receita ================================//
      db.each("SELECT valor FROM receita WHERE tipo='Ativo' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        const Resultado = this.TotalAtivo + row.valor;

        
        this.TotalAtivo = parseFloat(Resultado.toFixed(2));
         this.ativo = parseFloat(Resultado.toFixed(2));
              
        
      });
      db.each("SELECT valor FROM receita WHERE tipo='Serviço' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        const Resultado = this.TotalServicoRec + row.valor;

        
        this.TotalServicoRec = parseFloat(Resultado.toFixed(2));
         
              
        
      });

      db.each("SELECT valor FROM receita WHERE tipo='Crédito' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        const Resultado = this.TotalCred + row.valor;

        
        this.TotalCred = parseFloat(Resultado.toFixed(2));
        this.cred = parseFloat(Resultado.toFixed(2));
       
      });

      db.each("SELECT valor FROM receita WHERE tipo='Produção' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        const Resultado = this.TotalProd + row.valor;
        
        this.TotalProd = parseFloat(Resultado.toFixed(2));
        this.prod = parseFloat(Resultado.toFixed(2));
       
      });

      db.each("SELECT valor FROM receita WHERE tipo='Saldo' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalSald + row.valor;
       
        this.TotalSald = parseFloat(Resultado.toFixed(2));
        this.sald = parseFloat(Resultado.toFixed(2));
       
      });


      // =========================== valores da despesa ================================//

         db.each("SELECT valor FROM despesa WHERE tipo='Manutenção' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalManu+ row.valor;

        this.TotalManu = parseFloat(Resultado.toFixed(2));
       
      });

         db.each("SELECT valor FROM despesa WHERE tipo='Insumo' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalInsumo + row.valor;

        this.TotalInsumo = parseFloat(Resultado.toFixed(2));
       
      });

      db.each("SELECT valor FROM despesa WHERE tipo='Serviço' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalServico + row.valor;

        this.TotalServico = parseFloat(Resultado.toFixed(2));
       
      });

         db.each("SELECT valor FROM despesa WHERE tipo='Salário' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalSal + row.valor;

        this.TotalSal = parseFloat(Resultado.toFixed(2));
       
      });

         db.each("SELECT valor FROM despesa WHERE tipo='Investimento' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalInvestimento + row.valor;

        this.TotalInvestimento = parseFloat(Resultado.toFixed(2));
       
      });

      db.each("SELECT valor FROM despesa WHERE tipo='Imposto' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalImposto+ row.valor;

        this.TotalImposto = parseFloat(Resultado.toFixed(2));
       
      });

         
       

      

     
      db.close();

         
     setTimeout(() => {
          this.ChartLoad = true
     }, 100);

    });

  
      
    
      
    






//final mounted
  },

  methods:{

    
    EmitirPdf: function () {
        
     
          const doc = new jsPDF();
          var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEYCAMAAACNwnjYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURfytEgOVRHzCQwGWRKC/OgKYRX3BRgKUQgGaQAGXQXzCRXrDQwyJRaDBMgKWP3zCQaG+QAWIQf2sFaDANnvBTP+sA/+sDgeTQ/+pEnrCSHvEPwWCPvD/9AyGP/H/8u796fmvFAOJPez/8AWLQQyLPvyuCwSSRnjGPun75QSVSASNRn3DPXrEOuL53gKQQQWTPun96BSHQv6vBA2IOoDBQvH+8vusFP6tDgSYTMzx2v+uCgOTT/yrHP+oGhKBPpvCNqS9N/+qCpzBPwONPgN7MoG+SQuRRnq+QAKXOdn33wGdRvmwDfmtGgN9O/mxBLLkxwaBN8Ltzwt7PQiDRAZ2OPWxDfavHg2OQvSwFrrozQSGOnvGMxB2PxGDQ3bFRH/IQQJ0M8Xx1py8Mv+wFXe+N4HCOQSHNWCtgoPGRwp3PPL0wwGfPwSMOJ7AKKHXtvmoCX7BmaLXt/XwuhGMSfiqJf+lBYDATv+nJwpwOBiJS0iRZw6RTYK/QZTRrVakeBF3P/f1yAOdTfOpF7DThsfhowVyNSt/UGu1ixd5Qxp8R+yqJCKETJDHpqTEOgGcNn7ITO+yDRqDRnm6R3bGS3S5kZy2PzmPYLncl4e+nwx5PheESaDbtvW0BAt8QXHFQj+LYFGVb26qiCCOUQ2CQgqISv+vIUGdahKERDCKV/SrB3HIOASEL6K4Ub7nvHu1TIS3WYy8YvjKbtftuPLorf+1CHfFmfrSf+ewNu+9WXK8QPCuIxFsOSqPVUqicaPDLKe+LRl9PwGSN7LPiQaBNQKZMFuzg3+1UxhuO2u5jey0SvDGavvprZbDcYPMoz2VYgeZVvTQhJ21Q6i7PqG9SiR1SOyyPJHAaoq8QgaOVJq5PYfDU4C5UPzfmXqySPrdm+erLK3EZi+UXdPkqGKde4O4OeirFU2weXm0Oue4VEKhbHa3R/SqGu6qMAOOLnrBWIG0l7fKdhiRUO2pLoO8TorUqjd+VqLRgJy2NHHALfSwKaO8Uf7FWOirCfvCRv/20kdwTBsHApkAAAEAdFJOU/////////////////////////////////////8B/wIK//8H//////8R/////xb//w3/////BP///yH///////////////////8b//////8+/y7/////////Nf//6/////8n//////+Q//gm////R/9xTzD///////D/qv//YZvkHv/+hlj2yYfg1+PRWv/////+//959LtqZ/LkV//9/7GfgN7p//+y8sD////KRu/GuZk7SP+EfcKt///myaX/////d/X/odbblLqMO5t4x/9u4P//0cyt//////5f4VDbt9RnjP/xs/SewPTy0P//eZ3q9uVsupf9/+vouf3XqgDI6jsRAAAgAElEQVR42uzYb0hiax4HcPfV7Ivz5gjKgaPp8XgGEQz/4PHqqiDGQKilHv8lCoWQOIRWJmlRDoKV1YuCEG2KasaGIvZF1DRiN2hfXKKJucyLgnkRxSWCXWZgYLjz4jKz3H1sZtndsu7sOrds9nwjKk4oz+f5Pb/neWT8SudXBk1AI9AINAKNQCPQCDQCjUAj0Ag0Ao1AI9AINAKNQCPQCDQCjUAj0Ag0Ao1AI9AINAKNQCPQCDQCjUAjfMsIHKVAKlK3tdlamstpsbWpJVKeQPl/gsARSNXNA09/ePLjT4+mpx/7fPl83vd4evqn77NPBp/+/FAtEtR9ywgcgahlPLiVHRvxhewUilIUzIXd0KdYUBR1OEL5zFDf8EBzI0/5LSIIGptfPBlL5i0WC+r368tRCEHgT6GiBQiiKAiS+e2trflHf3v6sFH5bSEIbLmtsXRrg9crNBqNGCZUCBXldAiFnwsB+owBK9q9wnoMRVvzmb5OG6/uG0FQ2jqzSYcFhbiKzxHiOI5hXmvDv2IFAZXhdoPHGIbhuJhCZ0O+H4dbRMrbj6DO9e2ELIV+sVvIFSq8wu3t7VAonxz5funJYHB4qrOcqanh4ODW3ND+iC9ut+tlkBsg9YtRKIq27sy9beHdagRe+ORx2iFLyPRcCEKhAmWx7A/1nXR22dRSgZLznwUj4Els4fHBvqFk2o7COA7WjkIh8/sdya2HotuKoGzMLSXzd+64ufrt7Un7bN6XyQ6P29SXr3MO+FLyGlvGh+cycQdYH4r2FRzD++2bc2/VyluIoGybGotTBXGHF+NyufZ4Zm4hrP7SPlcnUo8PLyVbrZgRF0MwWBbpTLBFecsQBOrh/TglxjDj9qQMdSSfTNlEnP/yNaSgoT52oP6EjOvF7sL+/ZM2zi1CUNqG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";
      var data = this.NomeDoMes + ',' + String(this.AnoDoBalanco)
      var TotalReceitaRelatorio = 'R$  '+ String(this.TotalReceita)
      var TotalAtivoRelatorio = 'R$  '+ String(this.TotalAtivo)
      var TotalProducaoRelatorio = 'R$  '+ String(this.TotalCred)
      var TotalCreditoRelatorio = 'R$  '+ String(this.TotalProd)
      var TotalSaldoRelatorio = 'R$  '+ String(this.TotalSald)
      var TotalServicoRecRelatorio = 'R$  '+ String(this.TotalServicoRec)
     

      var TotalDespesaRelatorio = 'R$  '+ String(this.TotalDespesa)
      var TotalManutencaoRelatorio = 'R$  '+ String(this.TotalManu)
      var TotalSalarioRelatorio = 'R$  '+ String(this.TotalSal)
      var TotalInvestimentoRelatorio = 'R$  '+ String(this.TotalInvestimento)
      var TotalInsumoRelatorio = 'R$  '+ String(this.TotalInsumo)
       var TotalServicoRelatorio = 'R$  '+ String(this.TotalServico)
       var TotalImpostoRelatorio = 'R$  '+ String(this.TotalImposto)
      var resultadorel = this.TotalReceita - this.TotalDespesa
      var TotalResultadoRelatorio
     
      

        
        if(resultadorel > 0){
             TotalResultadoRelatorio = 'R$  + '+ String(resultadorel.toFixed(2))
        }else if(resultadorel < 0){
             TotalResultadoRelatorio = 'R$  '+ String(resultadorel.toFixed(2))
        }else{
          TotalResultadoRelatorio = 'R$  '+ String(resultadorel.toFixed(2))
        }
      
      //--------cabeçalho ----------
      doc.addImage(img, "file", 15, 10, 37, 40);
      doc.setFontSize(17);
     
      doc.text("Fazenda Monte Claro", 49, 25);
      doc.setFontSize(12);
      doc.text("Chico Fernandes ", 49, 30);
      doc.setFontSize(20);
      doc.text("Relatório Mensal", 10, 65);
      doc.text(data, 150, 65);
      doc.line(200, 70, 10, 70);
      
      

      //------- corpo ---------------------
      doc.setFontSize(20);
      doc.setTextColor("#5C5C5C");
      doc.text(" Receita +", 10, 90);
      doc.setFontSize(15);
      doc.setTextColor("#5C5C5C");
      doc.text("Ativo:", 10, 110);
      doc.text("Produção:", 10, 120); 
      doc.text("Crédito:", 10, 130);
      doc.text("Saldo:", 10, 140);
      doc.text("Serviço prestado:", 10, 150);
      doc.setDrawColor("#5C5C5C");
      doc.line(100, 155, 10, 155);
      doc.text("Total:", 10, 165);
    
      
      doc.text( TotalAtivoRelatorio, 60, 110);
      doc.text( TotalProducaoRelatorio, 60, 120);
      doc.text( TotalCreditoRelatorio, 60, 130);
      doc.text( TotalSaldoRelatorio, 60, 140);
      doc.text( TotalServicoRecRelatorio, 60, 150);
      doc.text( TotalReceitaRelatorio, 60, 165);
      
      

      

      doc.setFontSize(20);
      doc.setTextColor("#5C5C5C");
      doc.text("Despesa -", 10, 190);
      doc.setFontSize(15);
      doc.setTextColor("#5C5C5C");
      doc.text("Manutenção:", 10, 210); 
      doc.text("Insumo:", 10, 220);
      doc.text("Salário:", 10, 230);
      doc.text("Investimento:", 10, 240);
      doc.text("Serviço contratado:", 10, 250);
      doc.text("Imposto:", 10, 260);
      doc.setDrawColor("#5C5C5C");
      doc.line(100, 263, 10, 263);
      doc.text("Total:", 10, 270);
      
      doc.text( TotalManutencaoRelatorio, 60, 210);
      doc.text( TotalInsumoRelatorio, 60, 220);
      doc.text( TotalSalarioRelatorio, 60, 230);
      doc.text( TotalInvestimentoRelatorio, 60, 240);
      doc.text( TotalServicoRelatorio, 60, 250);
      doc.text( TotalImpostoRelatorio, 60, 260);
      doc.text( TotalDespesaRelatorio, 60, 270);
      

      doc.setFontSize(20);
      
      doc.setTextColor("#000000");
      doc.setDrawColor("#000000");
      doc.line(200, 275, 10, 275);
      doc.text("Saldo", 10, 285);
      doc.text(TotalResultadoRelatorio, 50, 285);
      doc.save('Relatório - '+data)
      
          
    

     
      


      
      
     

      

      
      
    },

    TrocarMes:function(event){
      this.MesDoBalanco = parseInt(event.target.value)
      var mes = parseInt(event.target.value)
      if (mes === 1) {
        this.NomeDoMes = "Janeiro";
      } else if (mes === 2) {
       this.NomeDoMes = "Feveiro";
      } else if (mes === 3) {
       this.NomeDoMes = "Março";
      } else if (mes === 4) {
        this.NomeDoMes = "Abril";
      } else if (mes === 5) {
        this.NomeDoMes = "Maio";
      } else if (mes === 6) {
        this.NomeDoMes = "Junho";
      } else if (mes === 7) { 
       this.NomeDoMes = "Julho";
      } else if (mes === 8) {
        this.NomeDoMes = "Agosto";
      } else if (mes === 9) {
        this.NomeDoMes = "Setembro";
      } else if (mes === 10) {
       this.NomeDoMes = "Outubro";
      } else if (mes === 11) {
        this.NomeDoMes = "Novembro";
      } else if (mes === 12) {
        this.NomeDoMes= "Dezembro";
      }
     
      this.Update()
    },

   TrocarAno:function(event){
      this.AnoDoBalanco = parseInt(event.target.value)
     
       this.Update()
    },

  reloadchart:function(){
        setTimeout(() => {
          this.ChartLoad = true
     }, 100);
      this.ChartLoad = false
    },

    Update:function(){
    
     

      //zerar todas as variaves para evitar que acumulem
      this.TotalReceita = 0
      this.TotalDespesa = 0
      this.ativo =0
      this.cred = 0
      this.prod = 0
      this.sald = 0  
      this.total = 0
      this.TotalAtivo = 0
      this.TotalCred = 0
      this.TotalProd = 0
      this.TotalSald = 0
      this.TotalManu = 0
      this.TotalInsumo = 0
      this.TotalSal = 0
      this.TotalInvestimento = 0
      this.TotalServico = 0
      this.TotalImposto = 0
      this.TotalServicoRec = 0
     

 
    
      const db = new sqlite3.Database(
        "./database/storage.db",
        (err) => {
          if (err) {
            return console.error(err.message);
          }
         
        }
      );
      
      db.each("SELECT valor FROM receita WHERE dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        
        this.TotalReceita = this.TotalReceita + row.valor;
        this.TotalReceita = parseFloat(this.TotalReceita.toFixed(2));
      });

      db.each("SELECT valor FROM despesa WHERE dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        
        this.TotalDespesa = this.TotalDespesa + row.valor;
        this.TotalDespesa = parseFloat(this.TotalDespesa.toFixed(2));
        
      });

      db.each("SELECT valor FROM receita WHERE tipo='Ativo' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        const Resultado = this.TotalAtivo + row.valor;

        
        this.TotalAtivo = parseFloat(Resultado.toFixed(2));
         this.ativo = parseFloat(Resultado.toFixed(2));
              
        
      });
      db.each("SELECT valor FROM receita WHERE tipo='Serviço' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        const Resultado = this.TotalServicoRec + row.valor;

        
        this.TotalServicoRec = parseFloat(Resultado.toFixed(2));
        
              
        
      });

      db.each("SELECT valor FROM receita WHERE tipo='Crédito' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        const Resultado = this.TotalCred + row.valor;

        
        this.TotalCred = parseFloat(Resultado.toFixed(2));
        this.cred = parseFloat(Resultado.toFixed(2));
       
      });

      db.each("SELECT valor FROM receita WHERE tipo='Produção' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }

        const Resultado = this.TotalProd + row.valor;
        
        this.TotalProd = parseFloat(Resultado.toFixed(2));
        this.prod = parseFloat(Resultado.toFixed(2));
       
      });

      db.each("SELECT valor FROM receita WHERE tipo='Saldo' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalSald + row.valor;
       
        this.TotalSald = parseFloat(Resultado.toFixed(2));
        this.sald = parseFloat(Resultado.toFixed(2));
       
      });

      db.each("SELECT valor FROM despesa WHERE tipo='Manutenção' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalManu+ row.valor;

        this.TotalManu = parseFloat(Resultado.toFixed(2));
       
      });
      db.each("SELECT valor FROM despesa WHERE tipo='Serviço' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalServico+ row.valor;

        this.TotalServico = parseFloat(Resultado.toFixed(2));
       
      });

      db.each("SELECT valor FROM despesa WHERE tipo='Insumo' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalInsumo + row.valor;

        this.TotalInsumo = parseFloat(Resultado.toFixed(2));
       
      })

      db.each("SELECT valor FROM despesa WHERE tipo='Salário' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalSal + row.valor;

        this.TotalSal = parseFloat(Resultado.toFixed(2));
       
      });

      db.each("SELECT valor FROM despesa WHERE tipo='Investimento' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalInvestimento + row.valor;

        this.TotalInvestimento = parseFloat(Resultado.toFixed(2));
       
      });

      db.each("SELECT valor FROM despesa WHERE tipo='Imposto' AND dataMes = ? AND dataAno = ?;",[this.MesDoBalanco,this.AnoDoBalanco], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        const Resultado = this.TotalImposto+ row.valor;

        this.TotalImposto = parseFloat(Resultado.toFixed(2));
       
      });

      this.reloadchart()
      
    },

    
  }





//export de




};
</script>

<style scoped>
/* inicio do css*/
.Title-Month{
   font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 0.5px;
    font-size: 22px;
    color:#111827;
    text-align: center;
}
/* container pai principal*/
.main-container {
  padding-left: 156px; /*pula a sidebar*/
  padding-top: 28px; /*pula a topbar*/
  
  padding-bottom: 10px;
  font-family: 'Source Sans P ro', sans-serif;
  background-color: rgb(255, 255, 255);
}

.fisrt-col {
  width: 40%;
  border: 2px solid #111827;
  border-right: none;
  margin-left: 5px;
  background-color: rgb(255, 255, 255);
 letter-spacing: 1.2px;
 
}

.second-col {
  
  border: 2px solid #111827;
  border-left: none;
 
  width: 100%;
  background-color: rgb(255, 255, 255);
  
  
 
}

.card-container{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  
  background-color: white;
  padding: 10px;
  
}

.tipo {
  
  width: 60%;
  height: 100%;
  font-family: 'Source Sans Pro', sans-serif;
  
}
.tipo-texto {
  text-align: center;
  margin-bottom: 20px;
  background-color: #111827;
  width: 100%;
  color: white;
  letter-spacing: 1.2px;
  
}
.tipo-texto-grahp{
  text-align: center;
  margin-bottom: 10px;
  background-color: #111827;
  width: 100%;
  height: 24px;
  color: white;
}
.tipo-item {
  margin-left: 60px;
  margin-bottom: 10px;
  
  padding-left:10px ;
 
  height:35px;
   display: flex;
    align-items: center;
  
}
.tipo-item-despesa {
  margin-left: 60px;
  margin-bottom: 10px;
  
  padding-left:10px ;
 
  height:27px;
   display: flex;
    align-items: center;
  
}
.tipo-item-total{
 
 font-size: 20px;
 border-top:1px solid #111827;
 width: 70%;
 float: right;
 text-align: center;
}
.tipo-item-total-result{
 margin-left: 50px;
 font-size: 20px;
 border-top:1px solid #111827;
 width: 50%;
}


.valor {
  
  width: 100%;
  height: 100%;
  font-family: 'Source Sans Pro', sans-serif;
}
.left-col{
  width: 70%;
  
  
}
.right-col{
  width: 30%;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 17px;
  
  
}
.receita-fluxo{
  height:100px ;
  
}
.despesa-fluxo{
height:100px ;
}
.saldo-fluxo{
height:100px ;
}

.title-fluxo {
  font-family: 'Source Sans Pro', sans-serif;
  text-align: initial;
  margin-left: 25px;
  font-size: 25px;
  color: #111827;
}
.button-cont{
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
}

.title-row {
  background-color: #111827;

  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  height: 10px;
}

.first-row {
  height: 50%;
 margin-left: 20px;
 
 
}
.second-row {
  height: 50%;
 
  margin-left: 20px;
  
}

.Chart-Container {
  border: 1px solid black;
  display: inline-flex;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 60px;
  margin-bottom: 20px;
}

.receita-chart {
  width: 100px;
  height: 100px;

  background-color: white;
  color: darkgray;
  border: 1px gray solid;
  box-shadow: 5px 5px 5px;
  margin-left: 240px;
}

.receita-chart-table {
  width: 850px;
  height: 450px;

  background-color: white;
  color: darkgray;
  border: 1px gray solid;
  box-shadow: 5px 5px 5px;
}

.button-cadastro {
  background-color: rgba(31, 41, 55);
  font-family: 'Source Sans Pro', sans-serif;
  border-radius: 30px;
  color: rgb(255, 255, 255);
  
  font-size: 16px;
  margin-top: 50px;
  width: 200px;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
  justify-content: center;
  align-items: center;
 
}
.button-cadastro:hover{
  background-color: #44516d;
}

.card-fluxo {
  height: 120px;
  min-width: 150px;
  max-width: auto;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 10px;
  font-family: 'Source Sans Pro', sans-serif;
}

.svg-icon {
  width: 40px;
  height: 40px;
  float: left;
  margin-right: 20px;

}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #727272;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}
button:focus{
   outline: none;
}
</style>
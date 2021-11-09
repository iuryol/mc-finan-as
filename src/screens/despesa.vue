<template>
  <div class="main-container flex flex-col w-screen h-screen">
    <div class="upper-space flex flex-row">
      <div class="first-col flex flex-col">
        <card2 nome="Total:" v-bind:valor="HoldResult" />
        <h1 class="screen-title"><b>Despesa: </b></h1>
      </div>

      <div class="w-full second-col flex flex-col">
        <div class="flex justify-end">
          <div class="flex flex-col mr-6 text-white button-cadastro-select">
            <label class="mx-auto my-0 label-filtro"><b>Tipo:</b></label>
            <select
              id="stipo"
              class="bg-gray-900 justify-center text-center"
              v-on:change="getTipoFilter($event)"
            > <option value="reset">---</option>
              <option value="Manutenção">Manutenção</option>
              <option value="Insumo">Insumo</option>
              <option value="Salário">Salario</option>
              <option value="Investimento">Investimento</option>
            </select>
          </div>

          <div class="flex flex-col mr-3 button-cadastro-select">
            <label class="mx-auto my-0 flex flex-col label-filtro"
              ><b>Mês:</b></label
            >
            <select
            id="smes"
              class="bg-gray-900 text-white"
              v-on:change="getMonthFilter($event)"
            >  <option value="0">---</option>
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
            <select
                id="sfiltro"
              class="bg-gray-900 justify-center"
              v-on:change="getFilter($event)"
            > <option value="reset">---</option>
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
        <div class="third-col flex flex-col">
          <div
            class="notification animate__animated animate__fadeOut"
            v-if="AlertInsertControl"
          >
            <popup1 />
            </div>
          <div
            class="notification animate__animated animate__fadeOut"
            v-if="AlertDeleteControl"
          >
            <popup2 />
          </div>
          <div class=" flex flex-row">
                  <button @click="AbrirFormulario()" class="button-cadastro"> Nova Saída </button>
            </div>
       
      </div>
    </div>

    <div class="lower-space flex flex-col">
      <table class="table-model table-auto gap-y-10">
        <thead class="">
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
            v-for="Item in dados"
            :key="Item.id"
          >
            <td class="px-4 py-1">
              <span v-if="Item.tipo === '...'">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path
                    d="M15.475,6.692l-4.084-4.083C11.32,2.538,11.223,2.5,11.125,2.5h-6c-0.413,0-0.75,0.337-0.75,0.75v13.5c0,0.412,0.337,0.75,0.75,0.75h9.75c0.412,0,0.75-0.338,0.75-0.75V6.94C15.609,6.839,15.554,6.771,15.475,6.692 M11.5,3.779l2.843,2.846H11.5V3.779z M14.875,16.75h-9.75V3.25h5.625V7c0,0.206,0.168,0.375,0.375,0.375h3.75V16.75z"
                  ></path>
                </svg>
              </span>

              <span v-if="Item.tipo === 'Insumo'"
                ><svg class="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M10.034,3.635h4.106c0.227,0,0.41-0.184,0.41-0.411c0-0.227-0.184-0.411-0.41-0.411h-4.106c-0.227,0-0.411,0.184-0.411,0.411C9.623,3.451,9.807,3.635,10.034,3.635 M17.412,14.412h0.002l1.643-7.392l-0.008-0.002c0.008-0.032,0.02-0.063,0.02-0.098c0-0.227-0.184-0.411-0.41-0.411H5.492L4.909,4.338L4.903,4.34C4.853,4.171,4.702,4.045,4.516,4.045H1.41C1.184,4.045,1,4.229,1,4.456S1.184,4.867,1.41,4.867h2.791l2.564,9.563h0.001c0.035,0.117,0.119,0.209,0.229,0.258c-0.154,0.25-0.247,0.541-0.247,0.857c0,0.906,0.735,1.643,1.643,1.643c0.907,0,1.643-0.736,1.643-1.643c0-0.301-0.087-0.58-0.228-0.822h4.562c-0.141,0.242-0.229,0.521-0.229,0.822c0,0.906,0.736,1.643,1.643,1.643c0.908,0,1.643-0.736,1.643-1.643c0-0.316-0.092-0.607-0.246-0.857C17.295,14.637,17.381,14.535,17.412,14.412 M15.74,7.331h2.406l-0.365,1.643h-2.223L15.74,7.331z M5.712,7.331h2.722l0.183,1.643H6.152L5.712,7.331z M6.813,11.438L6.373,9.795h2.336l0.183,1.643H6.813z M7.034,12.26h1.949L9.165,13.9h-1.69L7.034,12.26zM8.392,16.365c-0.454,0-0.822-0.367-0.822-0.82s0.368-0.822,0.822-0.822c0.454,0,0.821,0.369,0.821,0.822S8.845,16.365,8.392,16.365 M11.678,13.9H9.991L9.809,12.26h1.869V13.9z M11.678,11.438H9.717L9.534,9.795h2.144V11.438zM11.678,8.974H9.443L9.261,7.331h2.417V8.974z M14.184,13.9h-1.686V12.26h1.869L14.184,13.9z M14.457,11.438h-1.959V9.795h2.143L14.457,11.438z M14.732,8.974h-2.234V7.331h2.416L14.732,8.974z M15.783,16.365c-0.453,0-0.82-0.367-0.82-0.82s0.367-0.822,0.82-0.822s0.822,0.369,0.822,0.822S16.236,16.365,15.783,16.365 M16.686,13.9H15.01l0.184-1.641h1.857L16.686,13.9zM15.283,11.438l0.184-1.643H17.6l-0.365,1.643H15.283z"
                  ></path>
                </svg>
              </span>
              <span v-if="Item.tipo === 'Manutenção'">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M10.032,8.367c-1.112,0-2.016,0.905-2.016,2.018c0,1.111,0.904,2.014,2.016,2.014c1.111,0,2.014-0.902,2.014-2.014C12.046,9.271,11.143,8.367,10.032,8.367z M10.032,11.336c-0.525,0-0.953-0.427-0.953-0.951c0-0.526,0.427-0.955,0.953-0.955c0.524,0,0.951,0.429,0.951,0.955C10.982,10.909,10.556,11.336,10.032,11.336z"
                  ></path>
                  <path
                    fill="none"
                    d="M17.279,8.257h-0.785c-0.107-0.322-0.237-0.635-0.391-0.938l0.555-0.556c0.208-0.208,0.208-0.544,0-0.751l-2.254-2.257c-0.199-0.2-0.552-0.2-0.752,0l-0.556,0.557c-0.304-0.153-0.617-0.284-0.939-0.392V3.135c0-0.294-0.236-0.532-0.531-0.532H8.435c-0.293,0-0.531,0.237-0.531,0.532v0.784C7.582,4.027,7.269,4.158,6.966,4.311L6.409,3.754c-0.1-0.1-0.234-0.155-0.376-0.155c-0.141,0-0.275,0.055-0.375,0.155L3.403,6.011c-0.208,0.207-0.208,0.543,0,0.751l0.556,0.556C3.804,7.622,3.673,7.935,3.567,8.257H2.782c-0.294,0-0.531,0.238-0.531,0.531v3.19c0,0.295,0.237,0.531,0.531,0.531h0.787c0.105,0.318,0.236,0.631,0.391,0.938l-0.556,0.559c-0.208,0.207-0.208,0.545,0,0.752l2.254,2.254c0.208,0.207,0.544,0.207,0.751,0l0.558-0.559c0.303,0.154,0.616,0.285,0.938,0.391v0.787c0,0.293,0.238,0.531,0.531,0.531h3.191c0.295,0,0.531-0.238,0.531-0.531v-0.787c0.322-0.105,0.636-0.236,0.938-0.391l0.56,0.559c0.208,0.205,0.546,0.207,0.752,0l2.252-2.254c0.208-0.207,0.208-0.545,0.002-0.752l-0.559-0.559c0.153-0.303,0.285-0.615,0.389-0.938h0.789c0.295,0,0.532-0.236,0.532-0.531v-3.19C17.812,8.495,17.574,8.257,17.279,8.257z M16.747,11.447h-0.653c-0.241,0-0.453,0.164-0.514,0.398c-0.129,0.496-0.329,0.977-0.594,1.426c-0.121,0.209-0.089,0.473,0.083,0.645l0.463,0.465l-1.502,1.504l-0.465-0.463c-0.174-0.174-0.438-0.207-0.646-0.082c-0.447,0.262-0.927,0.463-1.427,0.594c-0.234,0.061-0.397,0.271-0.397,0.514V17.1H8.967v-0.652c0-0.242-0.164-0.453-0.397-0.514c-0.5-0.131-0.98-0.332-1.428-0.594c-0.207-0.123-0.472-0.09-0.646,0.082l-0.463,0.463L4.53,14.381l0.461-0.463c0.169-0.172,0.204-0.434,0.083-0.643c-0.266-0.461-0.467-0.939-0.596-1.43c-0.06-0.234-0.272-0.398-0.514-0.398H3.313V9.319h0.652c0.241,0,0.454-0.162,0.514-0.397c0.131-0.498,0.33-0.979,0.595-1.43c0.122-0.208,0.088-0.473-0.083-0.645L4.53,6.386l1.503-1.504l0.46,0.462c0.173,0.172,0.437,0.204,0.646,0.083c0.45-0.265,0.931-0.464,1.433-0.597c0.233-0.062,0.396-0.274,0.396-0.514V3.667h2.128v0.649c0,0.24,0.161,0.452,0.396,0.514c0.502,0.133,0.982,0.333,1.433,0.597c0.211,0.12,0.475,0.089,0.646-0.083l0.459-0.462l1.504,1.504l-0.463,0.463c-0.17,0.171-0.202,0.438-0.081,0.646c0.263,0.448,0.463,0.928,0.594,1.427c0.061,0.235,0.272,0.397,0.514,0.397h0.651V11.447z"
                  ></path>
                </svg>
              </span>
              <span v-if="Item.tipo === 'Salário'"
                ><svg class="svg-icon" viewBox="0 0 20 20">
                  <path
                    d="M8.749,9.934c0,0.247-0.202,0.449-0.449,0.449H4.257c-0.247,0-0.449-0.202-0.449-0.449S4.01,9.484,4.257,9.484H8.3C8.547,9.484,8.749,9.687,8.749,9.934 M7.402,12.627H4.257c-0.247,0-0.449,0.202-0.449,0.449s0.202,0.449,0.449,0.449h3.145c0.247,0,0.449-0.202,0.449-0.449S7.648,12.627,7.402,12.627 M8.3,6.339H4.257c-0.247,0-0.449,0.202-0.449,0.449c0,0.247,0.202,0.449,0.449,0.449H8.3c0.247,0,0.449-0.202,0.449-0.449C8.749,6.541,8.547,6.339,8.3,6.339 M18.631,4.543v10.78c0,0.248-0.202,0.45-0.449,0.45H2.011c-0.247,0-0.449-0.202-0.449-0.45V4.543c0-0.247,0.202-0.449,0.449-0.449h16.17C18.429,4.094,18.631,4.296,18.631,4.543 M17.732,4.993H2.46v9.882h15.272V4.993z M16.371,13.078c0,0.247-0.202,0.449-0.449,0.449H9.646c-0.247,0-0.449-0.202-0.449-0.449c0-1.479,0.883-2.747,2.162-3.299c-0.434-0.418-0.714-1.008-0.714-1.642c0-1.197,0.997-2.246,2.133-2.246s2.134,1.049,2.134,2.246c0,0.634-0.28,1.224-0.714,1.642C15.475,10.331,16.371,11.6,16.371,13.078M11.542,8.137c0,0.622,0.539,1.348,1.235,1.348s1.235-0.726,1.235-1.348c0-0.622-0.539-1.348-1.235-1.348S11.542,7.515,11.542,8.137 M15.435,12.629c-0.214-1.273-1.323-2.246-2.657-2.246s-2.431,0.973-2.644,2.246H15.435z"
                  ></path></svg
              ></span>
              <span v-if="Item.tipo === 'Investimento'"
                ><svg class="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M4.68,13.716v-0.169H4.554C4.592,13.605,4.639,13.658,4.68,13.716z M11.931,6.465
                              c-0.307-0.087-0.623,0.106-0.706,0.432l-1.389,5.484c-0.901,0.084-1.609,0.833-1.609,1.757c0,0.979,0.793,1.773,1.773,1.773
                              c0.979,0,1.773-0.794,1.773-1.773c0-0.624-0.324-1.171-0.812-1.486l1.377-5.439C12.422,6.887,12.239,6.552,11.931,6.465z
                              M10.591,14.729H9.408v-1.182h1.183V14.729z M15.32,13.716c0.04-0.058,0.087-0.11,0.126-0.169H15.32V13.716z M10,3.497
                              c-3.592,0-6.503,2.911-6.503,6.503H4.68c0-2.938,2.382-5.32,5.32-5.32s5.32,2.382,5.32,5.32h1.182
                              C16.502,6.408,13.591,3.497,10,3.497z M10,0.542c-5.224,0-9.458,4.234-9.458,9.458c0,5.224,4.234,9.458,9.458,9.458
                              c5.224,0,9.458-4.234,9.458-9.458C19.458,4.776,15.224,0.542,10,0.542z M15.32,16.335v0.167h-0.212
                              c-1.407,1.107-3.179,1.773-5.108,1.773c-1.93,0-3.701-0.666-5.108-1.773H4.68v-0.167C2.874,14.816,1.724,12.543,1.724,10
                              c0-4.571,3.706-8.276,8.276-8.276c4.57,0,8.275,3.706,8.275,8.276C18.275,12.543,17.126,14.816,15.32,16.335z"
                  ></path></svg
              ></span>
            </td>

            <td class="px-4 py-1">
              <span class="text-center ml-2">
                {{ Item.nome }}
              </span>
            </td>

            <td class="px-4 py-1">
              <span class="text-center ml-2">
                {{ Item.tipo }}
              </span>
            </td>

            <td class="px-4 py-1">
              <span> {{  FormatedDate(Item.data) }} </span>
            </td>

            <td class="px-4 py-1">
              <span> {{ Item.valor }} </span>
            </td>

            <td class="px-4 py-1">
              <button
                v-show="Item.nome === '...'"
                disabled
                class="delete-disabled"
              >
                Remover
              </button>
              <button
                v-show="Item.nome != '...'"
                @click="ConfirmaDelete(Item.id,Item.nome,Item.valor)"
                class="delete"
              >
                Remover
              </button>
              <button
                v-show="Item.nome === '...'"
                class="detail-disabled"
                disabled
              >
                Detalhar
              </button>
              <button
                v-show="Item.nome != '...'"
                @click="
                  DetalharItem(
                    Item.nome,
                    Item.data,
                    Item.tipo,
                    Item.valor,
                    Item.desc
                  )
                "
                class="detail"
              >
                Detalhar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer-table flex">
      <ul class="flex list-none">
        <span @click="addPreviousPages()" class="cursor-pointer mx-4">
          <svg class="svg-icon-footer" style="color: red" viewBox="0 0 20 20">
            <path
              fill="none"
              d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
            ></path>
          </svg>
        </span>
        <li
          @click="pagination($event)"
          class="
            s
            px-3
            py-1
            mr-3
            cursor-pointer
            rounded-full
            bg-gray-900
            border-2 border-green-300
            text-white
          "
          id="firstPageDespesa"
          ref="firstPageDespesa"
          value="1"
        >
          1
        </li>
        <li
          @click="pagination($event)"
          class="px-3 py-1 mr-3 cursor-pointer rounded-full"
          id="secondPageDespesa"
          ref="secondPageDespesa"
          value="2"
        >
          2
        </li>
        <li
          @click="pagination($event)"
          class="px-3 py-1 mr-3 cursor-pointer rounded-full"
          id="thirdPageDespesa"
          ref="thirdPageDespesa"
          value="3"
        >
          3
        </li>
        <li
          @click="pagination($event)"
          class="px-3 py-1 mr-3 cursor-pointer rounded-full"
          id="forthPageDespesa"
          ref="forthPageDespesa"
          value="4"
        >
          4
        </li>
        <li
          @click="pagination($event)"
          class="px-3 py-1 mr-3 cursor-pointer rounded-full"
          id="fifthPageDespesa"
          ref="fifthPageDespesa"
          value="5"
        >
          5
        </li>
        <span @click.stop="addNextPages" id="next" class="cursor-pointer mx-4">
          <svg class="svg-icon-footer" viewBox="0 0 20 20">
            <path
              fill="none"
              d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
            ></path>
          </svg>
        </span>
      </ul>
    </div>

    <div
      class="model-mask h-screen animate__animated animate__fadeIn"
      v-show="FormControl"
    >
      <transition name="model">
        <div class="model-wrapper animate__animated animate__fadeInDown">
          <form class="form-wrapper" @submit.prevent="EnviarDados(event)">
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
              <option>Insumo</option>
              <option>Salário</option>
              <option>Investimento</option>
              <option>Manutenção</option>
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
            <div class="button-container flex">
              <input
                type="submit"
                value="Cadastrar"
                class="button-model bg-gray-900"
                @submit="EnviarDados()"
              />
              <button
                class="button-model bg-gray-900"
                @click="AbrirFormulario()"
              >
                voltar
              </button>
            </div>
          </form>
        </div>
      </transition>
    </div>

    <div
      class="model-mask h-screen animate__animated animate__fadeIn"
      v-show="ShowDetail"
    >
      <transition class="flex flex-col" name="model">
        <div class="model-wrapper animate__animated animate__fadeInUp">
          <div class="Item-Detalhe flex flex-col">
            <label class="title-detalhe" for="nome"> <b>Saída:</b></label>
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

    <div
      class="model-mask h-screen animate__animated animate__fadeIn"
      v-show="DeleteControl"
    >
      <div class="delete-wrapper animate__animated animate__bounceIn">
        <div class="delete-box flex flex-col">
          <span><b>Deseja mesmo remover este item ?</b></span>
          <span>Item:   {{ItemDeleteNome}}</span>
          <span>Valor:  {{ItemDeleteValor}} R$</span>
          <div class="mt-10 flex flex-row">
            <button
              @click="DeletarItem(ItemDeleteId)"
              class="
                btn-sim
                bg-green-200
                border-2 border-green-800
                text-green-800
                hover:bg-green-100
              "
            >
              sim
            </button>
            <button
              @click="ConfirmaDelete()"
              class="
                btn-nao
                bg-red-200
                border-2 border-red-800
                text-red-800
                hover:bg-red-100
              "
            >
              não
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import card2 from "../components/card2";
import popup1 from "../components/popup1";
import popup2 from "../components/popup2";
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./database/storage.db");

export default {
  // componentes
  components: {
    card2,
    popup1,
    popup2,
  },

  //variaveis da pagina
  data() {
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
      dataMesR: 0,
      dataAnoR: 0,
      dataAdc: "",
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
      AlertInsertControl: false,
      AlertDeleteControl: false,
      ShowDetail: false,
      DeleteControl: false,

      //variaves delete
      ItemDeleteId: 0,
      ItemDeleteNome:'',
      ItemDeleteValor:0,
    };
  },

  // =============================================================metodos do lifecycle
  mounted() {
    this.$nextTick(function () {
      const db = new sqlite3.Database("./database/storage.db", (err) => {
        if (err) {
          return console.error(err.message);
        }
        
      });
      // paginação
      this.lastClickedPage = "firstPageDespesa";

      db.all("SELECT * FROM despesa ORDER BY data DESC", (err, row) => {
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
      db.each("SELECT valor FROM despesa", (err, row) => {
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
      var computedDados = [];
      this.dados.map(function (match) {
        computedDados.push(match);
      });
      return computedDados;
    },
  },

  //================================ metodos principais
  methods: {

    FormatedDate:function(data){
      return data.toString().split("-").reverse().join("/");
    },


    AlertInsert() {
      setTimeout(() => {
        this.AlertInsertControl = false;
        
      }, 1500);
      this.AlertInsertControl = true;
    },

    AlertDelete() {
      setTimeout(() => {
        this.AlertDeleteControl = false;
        
      }, 1500);
      this.AlertDeleteControl = true;
    },

  
    getMonthFilter(event) {
      
      
      if(event.target.value != '0'){
        var mes = event.target.value
        db.all("SELECT * FROM despesa WHERE dataMes = ? ORDER BY data DESC;",[mes], (err, row) => {
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

        db.all("SELECT * FROM despesa ORDER BY data DESC", (err, row) => {
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
        this.voltarFisrt()
      })
    }  
  },

    addNextPages() {
      this.nextPage++
      
      var pageItems = Object.values(document.querySelectorAll("li")).slice(7,12)
     
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
        document.getElementById("firstPageDespesa").innerHTML = parseInt(document.getElementById("firstPageDespesa").innerHTML) + 5;
        document.getElementById("secondPageDespesa").innerHTML = parseInt(document.getElementById("secondPageDespesa").innerHTML) + 5;
        document.getElementById("thirdPageDespesa").innerHTML = parseInt(document.getElementById("thirdPageDespesa").innerHTML) + 5;
        document.getElementById("forthPageDespesa").innerHTML = parseInt(document.getElementById("forthPageDespesa").innerHTML) + 5;
        document.getElementById("fifthPageDespesa").innerHTML = parseInt(document.getElementById("fifthPageDespesa").innerHTML) + 5;

      }
    
      
      var endSlice = (this.nextPage) * 10
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
        var pageItems = Object.values(document.querySelectorAll("li")).slice(7,12)
        
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
            document.getElementById("firstPageDespesa").innerHTML = parseInt(document.getElementById("firstPageDespesa").innerHTML) - 5;
            document.getElementById("secondPageDespesa").innerHTML = parseInt(document.getElementById("secondPageDespesa").innerHTML) - 5;
            document.getElementById("thirdPageDespesa").innerHTML = parseInt(document.getElementById("thirdPageDespesa").innerHTML) - 5;
            document.getElementById("forthPageDespesa").innerHTML = parseInt(document.getElementById("forthPageDespesa").innerHTML) - 5;
            document.getElementById("fifthPageDespesa").innerHTML = parseInt(document.getElementById("fifthPageDespesa").innerHTML) - 5;
    
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
      this.nextPage = parseInt(event.target.innerHTML);
     
      this.lastClickedPage = event.target.id;
     
      this.lastClickedPageHtml = event.target.innerHTML;
      

      if (event.target.id == "firstPageDespesa") {
        this.$refs.firstPageDespesa.className =

          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.secondPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
      }

      if (event.target.id == "secondPageDespesa") {
        this.$refs.firstPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.secondPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.thirdPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
      }

      if (event.target.id == "thirdPageDespesa") {
        this.$refs.firstPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.secondPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.forthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
      }

      if (event.target.id == "forthPageDespesa") {
        this.$refs.firstPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.secondPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.fifthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
      }

      if (event.target.id == "fifthPageDespesa") {
        this.$refs.firstPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.secondPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
      }

      //this.dados = this.dadosPage

      if (
        parseInt(event.srcElement.innerHTML) <=
        Math.ceil(this.dadosPage.length / 10)
      ) {
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
        
        db.all("SELECT * FROM despesa ORDER BY data DESC", (err, row) => {
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

         
      } 
      else if (event.target.value == "adicaoAntiga") {
       db.all("SELECT * FROM despesa ORDER BY data ASC", (err, row) => {
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

    
    AbrirFormulario: function () {
      
      if (this.FormControl === false) this.FormControl = true;
      else this.FormControl = false;
      this.tipoR = "";
      this.valorR = 0;
      this.nomeR = "";
      this.dataR = "";
      this.descR = "";
    },

    
    Update: function () {
      db.all("SELECT * FROM despesa ORDER BY data DESC", (err, row) => {
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

    CarregarDados: function (
      NomeItem,
      DataItem,
      TipoItem,
      ValorItem,
      DescItem
    ) {
      this.NomeDetalhe = NomeItem;
      this.DataDetalhe = DataItem;
      this.TipoDetalhe = TipoItem;
      this.ValorDetalhe = ValorItem;
      this.DescricaoDetalhe = DescItem;
    },

    DetalharItem: function (nome, data, tipo, valor, desc) {
      if (this.ShowDetail === false) {
        this.ShowDetail = true;
        this.CarregarDados(nome, data, tipo, valor, desc);
      } else {
        this.ShowDetail = false;
      }
    },

    DeletarItem: function (IdItem) {
      db.run("DELETE FROM despesa WHERE id = ?;", [IdItem], (err) => {
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

    
    EnviarDados: function () {
      const data = new Date();
      this.dataAdc = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

      const datePattern = this.dataR;
      const date = datePattern.split("-");
      this.dataMesR = date[1];
      this.dataAnoR = date[0];
      db.run(
        "INSERT INTO despesa(nome,valor,tipo,data,dataMes,dataAno,dataAdc,desc) VALUES(?,?,?,?,?,?,?,?);",
        [
          this.nomeR,
          this.valorR,
          this.tipoR,
          this.dataR,
          this.dataMesR,
          this.dataAnoR,
          this.dataAdc,
          this.descR,
        ],
        (err) => {
          if (err) {
            console.log(err);
          }
          this.AlertInsert();
        }
      );
     
      this.Update();
      const resultado = this.HoldResult + this.valorR;
      this.HoldResult = parseFloat(resultado.toFixed(2)); // atualizar o valor do card
      // chamar função para atualizar tabela
      this.AbrirFormulario(); //chamar função para fechar o formulario
    },

    ConfirmaDelete(itemid,itemnome,itemvalor) {
      this.ItemDeleteId = itemid;
      this.ItemDeleteNome = itemnome;
      this.ItemDeleteValor = itemvalor;

      if (this.DeleteControl === false) this.DeleteControl = true;
      else this.DeleteControl = false;
    },
    getTipoFilter(event){
        
      if(event.target.value != 'reset'){
         const TipoSelect = event.target.value
        db.all("SELECT * FROM despesa WHERE tipo = ? ORDER BY data DESC; ",[TipoSelect], (err, row) => {
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
         this.voltarFisrt()
      });
      }else{
        db.all("SELECT * FROM despesa ORDER BY data DESC", (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        if(row.length != 0){
          this.dadosPage = row;
        this.dados = this.dadosPage.slice(0, 10);
        this.HoldResult  = parseFloat(row.map(u => u.valor).reduce((total,valor)=> total + valor)).toFixed(2)
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
    // função para limpar a aplicação de filtros
    resetarFiltros(){

    db.all("SELECT * FROM despesa ORDER BY data DESC", (err, row) => {
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

      document.getElementById("smes").value = 0;
      document.getElementById("stipo").value = "reset";
      document.getElementById("sfiltro").value = "reset";
      this.voltarFisrt()
    },
    // funcção para reiniciar a paginação para o inicio
    voltarFisrt(){
      // setar a paginação para primeira pagina
        this.nextPage = 1;
      //muda a cor da pagina escoliha
        this.$refs.firstPageDespesa.className =

          "px-3 py-1 mr-3 cursor-pointer rounded-full bg-gray-900 border-2 border-green-300 text-white";
        this.$refs.secondPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.thirdPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.forthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        this.$refs.fifthPageDespesa.className =
          "px-3 py-1 mr-3 cursor-pointer rounded-full";
        //reiniciar a contagem
        document.getElementById("firstPageDespesa").innerHTML = 1
        document.getElementById("secondPageDespesa").innerHTML = 2
        document.getElementById("thirdPageDespesa").innerHTML = 3
        document.getElementById("forthPageDespesa").innerHTML = 4
        document.getElementById("fifthPageDespesa").innerHTML = 5
    },
  },
};
</script>



<style scoped>
.notification {
  --animate-duration: 2s;
  --animate-delay: 0.9s;
}
/* inicio do css*/
.screen-title {
  font-size: 30px;
  margin-top: 10px;
  font-family: "Source Sans Pro", sans-serif;
}
/*        css da pagina de detalhe             */
.table-model {
  min-width: 100%;
  min-height: 100%;

  font-family: "Source Sans Pro", sans-serif;
}

.item-label {
  color: rgb(31, 41, 55);

  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
}

.item-label2 {
  margin-left: 0px;

  color: rgb(31, 41, 55);

  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
}
.item-label3 {
  color: rgb(31, 41, 55);

  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
}
.title-detalhe {
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

  font-family: "Source Sans Pro", sans-serif;
  text-align: initial;
  padding-left: 10px;
  padding-top: 10px;
}
.vitrine-desc {
  border: 1px solid black;

  height: 150px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-family: "Source Sans Pro", sans-serif;
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
  font-family: "Source Sans Pro", sans-serif;
}
.delete-disabled {
  background-color: rgba(31, 41, 55);

  border-radius: 5px;
  font-size: 15px;
  padding: 0.2em;
  color: rgb(111, 111, 111);
  font-family: "Source Sans Pro", sans-serif;
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
  font-family: "Source Sans Pro", sans-serif;
  color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.816) 0px 5px 10px;
}

.detail-disabled {
  background-color: rgba(31, 41, 55);

  border-radius: 5px;
  font-size: 15px;
  padding: 0.2em;
  margin-left: 5px;
  font-family: "Source Sans Pro", sans-serif;
  color: rgb(99, 99, 99);
  box-shadow: rgba(0, 0, 0, 0.816) 0px 5px 10px;
}

.first-col {
  font-size: 40px;
  padding-left: 30px;
  font-family: "Source Sans Pro", sans-serif;
  text-shadow: 0px 0px 2px rgb(75, 75, 75);
  color: rgba(31, 41, 55);

  
}
.second-col {
  padding-top: 80px;
  font-family: "Source Sans Pro", sans-serif;
  
  margin-right: 20px;
  letter-spacing: 1.3px;
}

.third-col {
  padding-top: 5px;
  font-family: "Source Sans Pro", sans-serif;
  justify-content: end;
}

template{
  overflow: hidden;
}

/* container pai principal*/
.main-container {
  padding-left: 156px; /*pula a sidebar*/
  padding-top: 28px; /*pula a topbar*/
  padding-bottom: 0px;
  border: 1px solid rgb(255, 255, 255);
  font-family: "Source Sans Pro", sans-serif;
  background-color: rgb(252, 252, 252);
}

.label-filtro {
  color: #111827;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
}

.Item-Detalhe {
  background-color: whitesmoke;
  width: 550px;
  height: 550px;
  border-radius: 20px;
  border: 5px solid rgba(31, 41, 55);
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
  padding: 20px;
  font-family: "Source Sans Pro", sans-serif;
}
.teste {
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

  font-family: "Source Sans Pro", sans-serif;
}

.button-detalhe:hover {
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
  font-family: "Source Sans Pro", sans-serif;
}

.button-cadastro {
  background-color: rgba(31, 41, 55);
  font-family: "Source Sans Pro", sans-serif;
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

button:focus {
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
  position: fixed;
  right: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  z-index: 10;
  margin-left: 155px;
}
.teste {
  border: 1px solid black;
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
.delete-box {
  width: 300px;
  height: 200px;
  background-color: whitesmoke;
  border-radius: 17px;
  padding: 2%;
  border: 5px solid rgba(31, 41, 55);
  font-family: "Source Sans Pro", sans-serif;
  align-items: center;
  justify-content: center;
}
.btn-sim {
  border-radius: 20px;
  width: 80px;
  height: 50px;
  text-align: center;
  margin-right: 20px;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
}
.btn-sim:focus {
  outline: none;
}

.btn-nao {
  border-radius: 20px;
  width: 80px;
  height: 50px;
  text-align: center;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
}
.btn-nao:focus {
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
  font-family: "Source Sans Pro", sans-serif;
  border: 1px solid rgba(31, 41, 55);

  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
}
/* container butões*/
.button-container {
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
  font-family: "Source Sans Pro", sans-serif;
}
/* modelo para butões*/
.button-model {
  width: 40%;
  height: 50px;
  margin-right: 10px;
  border-radius: 20px;
  color: rgb(110, 231, 183);
  border: 2px solid rgba(17, 24, 39);
  box-shadow: rgba(0, 0, 0, 0.637) 0px 3px 8px;
  font-family: "Source Sans Pro", sans-serif;
}
.button-model:hover {
  background-color: #384765;
}

.button-model:focus {
  outline: none;
}
/* modelo para labels*/
.label-model {
  float: left;
  font-family: "Source Sans Pro", sans-serif;
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

.footer-table {
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

.svg-icon path {
  fill: #797f8c;
}
.svg-icon-footer path {
  fill: #111827;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}
</style>
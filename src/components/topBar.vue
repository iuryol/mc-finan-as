<template>
  <div class="top-bar">
    <div class="drag-region">
      <div id="window-title">
        <span>Monte Claro Finanças</span>
      </div>
      <div id="window-controls">
        <div @click="MinJanela" class="button" id="min-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(110, 231, 183);transform: ;msFilter:;"><path d="M5 11h14v2H5z"></path></svg>
        </div>
        <div @click="MaxJanela" class="button" id="max-button">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(110, 231, 183);transform: ;msFilter:;"><path d="M16 7H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM4 19v-8h12V9l.002 10H4z"></path><path d="M22 5c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2h13.001c1.101 0 1.996.895 1.999 1.994L20.002 15H20v2c1.103 0 2-.897 2-2V8.007L22.001 8V6L22 5.99V5z"></path></svg>
        </div>
        
        <div @click="FecharJanela" class="button" id="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(110, 231, 183);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = window.require("electron");
export default {
  data() {
    return {
      max: false,
    };
  },
  methods: {
    FecharJanela: function () {
      ipcRenderer.send("closeapp");
    },
    
    MaxJanela: function () {
      if (this.max === false) {
        ipcRenderer.send("maxapp");
        this.max = true;
      } else {
        ipcRenderer.send("resapp");
        this.max = false;
      }
    },

    MinJanela: function () {
      ipcRenderer.send("minapp");
    },
  },
};
</script>

<style>
.top-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 32px;
  background-color: #111827;
  -webkit-app-region: drag;
  text-align: center;
  z-index: 10;
  position: absolute;
  color: rgb(110, 231, 183);
  
  justify-content: center;


  

}
.topbar .drag-region {
  display: grid;
  grid-template-columns: auto 138px;
}
.drag-region {
  display: flex;
  flex-direction: row;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
 

}
#window-title {
  grid-column: 1;
  display: flex;
  align-items: center;
  
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 13px;


 
}
#window-title span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.5;
}

#window-controls {
  display: grid;
  grid-template-columns: repeat(3, 46px);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  font-family: "Segoe MDL2 Assets";
  font-size: 10px;
  -webkit-app-region: no-drag;
}

#window-controls .button {
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
}
#window-controls .button:hover {
  background: rgba(255, 255, 255, 0.1);
}
#window-controls .button:active {
  background: rgba(255, 255, 255, 0.2);
}
#close-button:active .icon {
  filter: invert(1);
}

#window-controls #min-button {
  grid-column: 1;
}
#window-controls #max-button,
#window-controls #restore-button {
  grid-column: 2;
}
#window-controls #close-button {
  grid-column: 3;
}

#restore-button {
  display: none;
}

#close-button:hover {
  background: #e81123;
}
#close-button:active {
  background: #f1707a;
}
#close-button:active .icon {
  filter: invert(1);
}

.title {
  display: inline-block;
  flex-direction: row;
  align-items: center;
  color: rgb(110, 231, 183);
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  padding: 4px;
  margin-left: auto;
  margin-right: 34%;
  justify-content: center;
}

.title-bar-btn {
  color: white;
  -webkit-app-region: no-drag;
  margin-right: 0px;
}

.content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

@media (-webkit-device-pixel-ratio: 1.5),
  (device-pixel-ratio: 1.5),
  (-webkit-device-pixel-ratio: 2),
  (device-pixel-ratio: 2),
  (-webkit-device-pixel-ratio: 3),
  (device-pixel-ratio: 3) {
  #window-controls .icon {
    width: 10px;
    height: 10px;
  }
}
</style>
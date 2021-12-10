const {EventEmitter} = require('events')

require("ignore-styles").default([".scss", ".css", ".sass", ".glb", ".gltf"])
require('jsdom-global/register')

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// global["document"] = new JSDOM('');
// global["window"] = document.defaultView;

//@ts-ignore
//window["console"] = global.console;

//@ts-ignore
// Object.keys(document.defaultView).forEach((property) => {
//   try{
//   if (typeof global[property] === 'undefined') {
//       //@ts-ignore
//     global[property] = document.defaultView[property];
//   }
//   }
//   catch(e){
    
//   }
// });

/////////////////////////////////////////

// @ts-ignore
window.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

//@ts-ignore
global.navigator = {
  userAgent: 'node.js'
};

//@ts-ignore
global.BroadcastChannel = class BroadcastChannel {
  constructor(name) {
    this.emitter = new EventEmitter();
    this.name = name;
  }

  postMessage(data) {
    this.emitter.emit('message', { data });
  }

  addEventListener(name, listener) {
    this.emitter.on(name, listener);
  }

  removeEventListener(name, listener) {
    this.emitter.removeListener(name, listener);
  }

  close() {
    this.emitter.removeAllListeners();
  }
};
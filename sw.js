if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,a)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let l={};const c=s=>i(s,r),o={module:{uri:r},exports:l,require:c};e[r]=Promise.all(n.map((s=>o[s]||c(s)))).then((s=>(a(...s),l)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"c7955f829ac93e5e11325832a8aa5dc3"},{url:"android-chrome-512x512.png",revision:"1965bc4c853e3dece90705e1db9cc009"},{url:"apple-touch-icon.png",revision:"77d73dd95a7c1f3e57f358fa6988f13a"},{url:"assets/004-afc862a2.png",revision:null},{url:"assets/alarm-47fbbbce.mp3",revision:null},{url:"assets/Home-2557ae0d.css",revision:null},{url:"assets/Home-3a1cc4a1.js",revision:null},{url:"assets/index-69674129.js",revision:null},{url:"assets/index-eb4d939a.css",revision:null},{url:"assets/List-24a0109f.css",revision:null},{url:"assets/list-ccd906ab.js",revision:null},{url:"assets/List-e2a4d525.js",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/settings-26d975d6.js",revision:null},{url:"assets/Settings-5f4c3711.css",revision:null},{url:"assets/Settings-88c80adb.js",revision:null},{url:"assets/VInput-0adf3ca2.js",revision:null},{url:"assets/VInput-e9781ca7.css",revision:null},{url:"assets/VRow-14784eda.js",revision:null},{url:"assets/webfontloader-523643f5.js",revision:null},{url:"assets/yay-ca7f6c55.mp3",revision:null},{url:"favicon-16x16.png",revision:"dad156840021666900c73220d2eff7f6"},{url:"favicon-32x32.png",revision:"2105855d714a8fa3a3bc3fd90de50d71"},{url:"favicon.ico",revision:"a0db394a7a6abf19629dfff2fc3cfb30"},{url:"index.html",revision:"5c919d1c9c0802d409a8c9aba5f1f21c"},{url:"mstile-150x150.png",revision:"cab3b2416f46282a2f904c39d68676fe"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"c0cfdfbccd25234f7e09b7dec1042b65"},{url:"smiley.png",revision:"370e14060a9192bedf5f85b8e0098dbf"},{url:"splashscreens/ipad_splash.png",revision:"c89ed260684d16a27eba88b54458c4a8"},{url:"splashscreens/ipadpro1_splash.png",revision:"4ebfbef1bda0c35d66cfe63b13bc905d"},{url:"splashscreens/ipadpro2_splash.png",revision:"0179fa91643c45240c8f4ffa2b2076b2"},{url:"splashscreens/ipadpro3_splash.png",revision:"65527a3ae31927ec6d7877d88f5a2f7c"},{url:"splashscreens/iphone5_splash.png",revision:"8b675d491d5d4a0d6f8250adba22e466"},{url:"splashscreens/iphone6_splash.png",revision:"835cbe9985fce18205be2c163a1084c5"},{url:"splashscreens/iphoneplus_splash.png",revision:"bab770af592eaebcd262306a5a1dcd4d"},{url:"splashscreens/iphonex_splash.png",revision:"b96ebe2ae46f6df9dd7d8c6c5b47e521"},{url:"splashscreens/iphonexr_splash.png",revision:"521e4b8241c3c44c8ba6669ada096d47"},{url:"splashscreens/iphonexsmax_splash.png",revision:"88188fb73b456bc94b4cff7be98d8cb9"},{url:"android-chrome-192x192.png",revision:"c7955f829ac93e5e11325832a8aa5dc3"},{url:"android-chrome-512x512.png",revision:"1965bc4c853e3dece90705e1db9cc009"},{url:"manifest.webmanifest",revision:"a5a4e8bdd77b33223d7e2a75ba039ddd"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));

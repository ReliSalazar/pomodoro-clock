(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(3),i=a.n(r),c=(a(13),a(4)),o=a(5),l=a(1),m=a(7),h=a(6),d=(a(14),a(15),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={mm:25,ss:0,timerLabel:"session",breakLenght:5,sessionLenght:25,startStop:"start",running:!1,pause:!1},n.handleBreakIncrement=n.handleBreakIncrement.bind(Object(l.a)(n)),n.handleBreakDecrement=n.handleBreakDecrement.bind(Object(l.a)(n)),n.handleSessionIncrement=n.handleSessionIncrement.bind(Object(l.a)(n)),n.handleSessionDecrement=n.handleSessionDecrement.bind(Object(l.a)(n)),n.handleReset=n.handleReset.bind(Object(l.a)(n)),n.handleStartStop=n.handleStartStop.bind(Object(l.a)(n)),n.audio=s.a.createRef(),n}return Object(o.a)(a,[{key:"handleBreakIncrement",value:function(){if(!this.state.running){var e=this.state.breakLenght;60!==e&&this.setState({breakLenght:e+=1})}}},{key:"handleBreakDecrement",value:function(){if(!this.state.running){var e=this.state.breakLenght;1!==e&&this.setState({breakLenght:e-=1})}}},{key:"handleSessionIncrement",value:function(){if(!this.state.running){var e=this.state.sessionLenght;60!==e&&this.setState({sessionLenght:e+=1,mm:e})}}},{key:"handleSessionDecrement",value:function(){if(!this.state.running){var e=this.state.sessionLenght;1!==e&&this.setState({sessionLenght:e-=1,mm:e})}}},{key:"handleReset",value:function(){this.setState({mm:25,ss:0,timerLabel:"session",breakLenght:5,sessionLenght:25,startStop:"start",running:!1}),this.audio.current.pause(),this.audio.current.currentTime=0}},{key:"handleStartStop",value:function(){var e=this,t=this.state.running;if(t=!t,this.setState({startStop:t?"stop":"start",running:t}),!this.state.running){var a=this.state,n=a.mm,s=a.ss;this.setState({pause:!0,mm:n,ss:s})}this.state.pause||this.setState({timerLabel:"session",mm:this.state.sessionLenght,ss:0});var r=setInterval((function(){var t=e.state,a=t.mm,n=t.ss;e.state.running?0!==e.state.ss?e.setState({ss:n-1}):0!==e.state.mm?e.setState({mm:a-1,ss:59}):(e.audio.current.play(),e.setState({timerLabel:"session"===e.state.timerLabel?"break":"session",mm:"session"===e.state.timerLabel?e.state.breakLenght:e.state.sessionLenght,ss:0})):clearInterval(r)}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.mm,a=e.ss,n=e.timerLabel,r=e.breakLenght,i=e.sessionLenght,c=e.startStop;return s.a.createElement("div",{className:"clock"},s.a.createElement("div",{className:"time-left"},s.a.createElement("div",{id:"timer-label"},n),s.a.createElement("div",{id:"time-left"},t>=10?t:"0"+t,":",a>=10?a:"0"+a)),s.a.createElement("div",{className:"length-box"},s.a.createElement("div",{className:"break-box"},s.a.createElement("div",{id:"break-label"},"Break Length"),s.a.createElement("div",{id:"break-length"},r),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{className:"add",id:"break-increment",onClick:this.handleBreakIncrement},s.a.createElement("i",{className:"fa fa-arrow-up"})),s.a.createElement("button",{className:"subtract",id:"break-decrement",onClick:this.handleBreakDecrement},s.a.createElement("i",{className:"fa fa-arrow-down"})))),s.a.createElement("div",{className:"session-box"},s.a.createElement("div",{id:"session-label"},"Session Length"),s.a.createElement("div",{id:"session-length"},i),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{className:"add",id:"session-increment",onClick:this.handleSessionIncrement},s.a.createElement("i",{className:"fa fa-arrow-up"})),s.a.createElement("button",{className:"subtract",id:"session-decrement",onClick:this.handleSessionDecrement},s.a.createElement("i",{className:"fa fa-arrow-down"}))))),s.a.createElement("div",{className:"buttons-box"},s.a.createElement("button",{className:"play_stop",id:"start_stop",onClick:this.handleStartStop},c),s.a.createElement("button",{className:"reset",id:"reset",onClick:this.handleReset},"reset")),s.a.createElement("audio",{id:"beep",ref:this.audio,src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}))}}]),a}(s.a.Component));var u=function(){return s.a.createElement("div",null,s.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.861e3032.chunk.js.map
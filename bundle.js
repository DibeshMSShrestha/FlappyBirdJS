!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=i(1),s=n(r),a=i(2),l=n(a),o=i(3),p=n(o);(new s.default).create("mainWrapper");var u=new l.default("mainWrapper"),c=new p.default;c.create("mainWrapper",600,"i");var d=new p.default;d.create("mainWrapper",1e3,"j");var h=new p.default;h.create("mainWrapper",1500,"k");var f=new p.default;f.create("mainWrapper",2e3,"l"),setInterval(function(){u.introduceGravity(),c.move(),d.move(),h.move(),f.move()},40)},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=function(){function e(){n(this,e)}return r(e,[{key:"create",value:function(e){this.mainElement=document.getElementById(e),this.mainElement.style.background="pink",this.mainElement.style.width="1400px",this.mainElement.style.height="600px",this.mainElement.style.position="relative",this.mainElement.style.margin="10px",this.mainElement.style.overflow="hidden"}}]),e}();t.default=s},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=function(){function e(t){var i=this;n(this,e),this.mainElement=document.getElementById(t),this.birdDiv=document.createElement("div"),this.birdDiv.setAttribute("id","bird"),this.birdDiv.style.position="absolute",this.birdDiv.style.top="-400px",this.birdDiv.style.left="200px",this.birdDiv.style.width="45px",this.birdDiv.style.height="45px",this.birdImage=document.createElement("img"),this.birdImage.setAttribute("src","images/bird.png"),this.birdDiv.appendChild(this.birdImage),this.mainElement.appendChild(this.birdDiv),this.currentTop=100,document.addEventListener("keydown",function(){i.goUp()})}return r(e,[{key:"introduceGravity",value:function(){this.currentTop+=3,this.birdDiv.style.top=this.currentTop+"px"}},{key:"goUp",value:function(e){this.currentTop-=30,this.birdDiv.style.top=this.currentTop+"px"}}]),e}();t.default=s},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=function(){function e(){n(this,e)}return r(e,[{key:"create",value:function(e,t,i){this.mainElement=document.getElementById(e),this.currentTop=0,this.velocity=t,this.scoreValue=0;for(var n=Math.floor(3*Math.random())+1,r=0;r<6;r++)r!=n&&r!=n+1&&(this.pipeDiv=document.createElement("div"),this.pipeDiv.className=i,this.pipeDiv.style.position="absolute",this.pipeDiv.style.left=t+"px",this.pipeDiv.style.top=this.currentTop+"px",this.pipeDiv.style.width="100px",this.pipeDiv.style.height="100px",this.pipeDiv.style.background="lightblue",this.pipeImage=document.createElement("img"),this.pipeImage.setAttribute("src","images/pipe.png"),this.pipeDiv.appendChild(this.pipeImage),this.mainElement.appendChild(this.pipeDiv)),this.currentTop+=100}},{key:"move",value:function(){this.velocity+=-5,this.pipeArray=document.getElementsByClassName(this.pipeDiv.className),this.bird=document.getElementById("bird");var e=!0,t=!1,i=void 0;try{for(var n,r=this.pipeArray[Symbol.iterator]();!(e=(n=r.next()).done);e=!0){var s=n.value;s.style.left=this.velocity+"px",this.score=document.getElementById("score"),this.scoreValue+=.01,this.score.innerHTML="Score"+this.scoreValue.toFixed(0),parseInt(s.style.left)<=0&&(this.velocity=1800),console.log(parseInt(bird.style.left)+"<"+parseInt(s.style.left)+"+"+parseInt(s.style.width)+"\n"+parseInt(bird.style.left)+"+"+parseInt(bird.style.width)+">"+parseInt(s.style.left)+"\n"+parseInt(bird.style.top)+"<"+parseInt(s.style.top)+"+"+parseInt(s.style.height)+"\n"+parseInt(bird.style.height)+"+"+parseInt(bird.style.top)+">"+parseInt(s.style.top)),parseInt(bird.style.left)<parseInt(s.style.left)+parseInt(s.style.width)&&parseInt(bird.style.left)+parseInt(bird.style.width)>parseInt(s.style.left)&&parseInt(bird.style.top)<parseInt(s.style.top)+parseInt(s.style.height)&&parseInt(bird.style.height)+parseInt(bird.style.top)>parseInt(s.style.top)&&alert("collided")}}catch(e){t=!0,i=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw i}}}}]),e}();t.default=s}]);
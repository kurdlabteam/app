!function(i){"use strict";function t(t){return void 0!==t&&(p=E(p,t)),(p=E(p,{pageUrl:encodeURIComponent(h.location.href),pageTitle:encodeURIComponent(d.title)})).widget?(m=d.getElementById(n.rootID))?(k(),v(),w(),(e=d.createElement("iframe")).id=n.iframeReactionsID,e.setAttribute("allowTransparency","true"),e.src=o,A()&&(e.src=a),"check"==function(t,e){void 0===e&&(e=document.location.search);e=function(t){void 0===t&&(t=document.location.search);t=t.split("+").join(" ");var e,i={},s=/[?&]?([^=]+)=([^&]*)/g;for(;e=s.exec(t);)i[decodeURIComponent(e[1])]=decodeURIComponent(e[2]);return i}(e);return void 0===t?e:void 0!==e[t]&&e[t]}("__emojics")&&(e.src="//connect.emojics.com/dist/activation.html"),e.src=e.src+"?widget="+p.widget+"&pageTitle="+p.pageTitle+"&pageUrl="+p.pageUrl,e.src=e.src+"&widgetAnimation="+encodeURIComponent(p.animation),p.position&&(e.src=e.src+"&widgetPosition="+p.position),p.slots&&(e.src=e.src+"&widgetSlots="+p.slots),p.debug&&(e.src=e.src+"&debug=true"),m.appendChild(e),e.style.width=n.expandedWidth,e.style.height=n.frames.reaction.height+"px",e.style.display="block",e.style.border="none",e.style.position="fixed",e.style.background="none rgba(0, 0, 0, 0)",e.style.visibility="visible",e.style.opacity=1,e.style.transition="none",e.style.marginBottom=0,u(),void function(){if(typeof i.events==="undefined")return;Object.keys(i.events).forEach(function(t,e){R(t,i.events[t])})}()):(console.warn('<div id="emojics-root"></div> missing'),!1):(console.warn("No Emojics Widget ID was defined..."),!1)}var e,s=!0,o="//connect.emojics.com/dist/index.html",a="//connect.emojics.com/dist/index.html",n={safetytMargin:15,margin:0,expandedWidth:"300px",collapsedWidth:"190px",closedWidth:"80px",sideWidth:"80px",rootID:"emojics-root",iframeReactionsID:"emojics-widget-reactions",iframeInteractionsID:"emojics-widget-interactions",iframeCallToActionID:"emojics-widget-calltoaction",frames:{reaction:{id:"emojics-widget-reactions",height:135,width:300,inline:{height:145}},interaction:{id:"emojics-widget-interactions",height:80,expandedHeight:250,width:350},calltoaction:{id:"emojics-widget-calltoaction",height:80,expandedHeight:250,width:350,inline:{width:380}}},mobileThreshold:420},r={widget:null,pageUrl:encodeURIComponent(window.location.href),pageTitle:encodeURIComponent(document.title),zIndex:0x48751929482f7,position:!1,slots:null,offset:{bottom:0},textColor:!1,debug:!1,animation:!0,appearance:{size:"default"},metadata:null},l={reaction_clicked:null,reaction_cancelled:null,interaction_submitted:null},c={triggers:{screenSwitch:!1},style:{width:null}},d=document,h=window,m=d.getElementById(n.rootID),p=E(r,i);function y(){m.style.zIndex=p.zIndex,m.style.position="absolute"}function f(){switch(m.style.position="relative",m.style.clear="both",e.style.position="relative",e.style.display="block",e.style.maxWidth="100%",e.style.width="100%",e.style.height=n.frames.reaction.inline.height+"px",e.style.marginTop="-20px",p.position){case"inline":break;case"leftInline":e.style.left="-10px";break;case"rightInline":e.style.right="-10px"}}function g(t){p.appearance=E(p.appearance,t),function(){if("compact"==p.appearance.size)switch(p.position){case"leftBottom":case"rightBottom":e.style.height=n.frames.reaction.height-25+"px",document.getElementById(n.iframeCallToActionID)&&(document.getElementById(n.iframeCallToActionID).style.bottom=n.frames.reaction.height-50+p.offset.bottom+"px"),document.getElementById(n.iframeInteractionsID)&&(document.getElementById(n.iframeInteractionsID).style.bottom=n.frames.reaction.height-50+p.offset.bottom+"px");break;case"leftSide":case"rightSide":e.style.height="240px",e.style.width="64px",document.getElementById(n.iframeCallToActionID)&&(document.getElementById(n.iframeCallToActionID).style["rightSide"==p.position?"right":"left"]="55px"),document.getElementById(n.iframeInteractionsID)&&(document.getElementById(n.iframeInteractionsID).style["rightSide"==p.position?"right":"left"]="55px")}}()}function u(){(I()?function(){switch("100%"!=e.style.width&&null==c.style.width&&(c.style.width=e.style.width),e.style.width!=n.closedWidth&&(e.style.width="100%"),p.position){case"leftBottom":case"rightBottom":default:e.style.top="auto",e.style.right=0,e.style.left=0,e.style.bottom=n.margin+p.offset.bottom+"px",y();break;case"leftTop":case"rightTop":e.style.top=n.margin+"px",e.style.right=0,e.style.left=0,e.style.bottom="auto",y();break;case"inline":case"leftInline":case"rightInline":f();break;case"leftSide":e.style.width=n.sideWidth,e.style.height=n.expandedWidth,e.style.transform="translateY(-50%)",e.style.top="50%",e.style.left=n.margin+"px",e.style.right="auto",e.style.bottom="auto",y();break;case"rightSide":e.style.width=n.sideWidth,e.style.height=n.expandedWidth,e.style.transform="translateY(-50%)",e.style.top="50%",e.style.left="auto",e.style.right=n.margin+"px",e.style.bottom="auto",y()}}:function(){switch("100%"==e.style.width&&null!=c.style.width&&(e.style.width=c.style.width),p.position){case"rightBottom":default:e.style.top="auto",e.style.left="auto",e.style.right=n.margin+n.safetytMargin+"px",e.style.bottom=n.margin+p.offset.bottom+"px",y();break;case"rightTop":e.style.top=n.margin+"px",e.style.left="auto",e.style.right=n.margin+n.safetytMargin+"px",e.style.bottom="auto",y();break;case"leftBottom":e.style.top="auto",e.style.left=n.margin+n.safetytMargin+"px",e.style.right="auto",e.style.bottom=n.margin+p.offset.bottom+"px",y();break;case"leftTop":e.style.top=n.margin+"px",e.style.right="auto",e.style.left=n.margin+n.safetytMargin+"px",e.style.bottom="auto",y();break;case"inline":case"leftInline":case"rightInline":f();break;case"leftSide":e.style.width=n.sideWidth,e.style.height=n.expandedWidth,e.style.transform="translateY(-50%)",e.style.top="50%",e.style.left=n.margin+"px",e.style.right="auto",e.style.bottom="auto",y();break;case"rightSide":e.style.width=n.sideWidth,e.style.height=n.expandedWidth,e.style.transform="translateY(-50%)",e.style.top="50%",e.style.left="auto",e.style.right=n.margin+"px",e.style.bottom="auto",y()}})()}function b(){T.init({debug:p.debug},d.body),h.addEventListener?h.addEventListener("message",x,!1):h.attachEvent&&h.attachEvent("onmessage",x,!1),h.onresize=function(t){u()}}function x(e){if(A()||function(){var t=!1;switch(e.origin){case"https://connect.emojics.com":case"http://connect.emojics.com":case"https://feedback.emojics.com":case"http://feedback.emojics.com":t=!0}return t}()){var t,i,s=e.data;switch(s.trigger){case"expandWidget":!function(){var t=document.getElementById(n.iframeReactionsID);if(j())return;switch(p.position){case"leftSide":case"rightSide":D(t,n.expandedWidth);break;default:W(t,n.expandedWidth)}}();break;case"collapseWidget":!function(){var t=document.getElementById(n.iframeReactionsID);if(j())return;switch(p.position){case"leftSide":case"rightSide":D(t,n.collapsedWidth);break;default:W(t,n.collapsedWidth)}}();break;case"closeWidget":!function(){var t=document.getElementById(n.iframeReactionsID);if(j())return;switch(p.position){case"leftSide":case"rightSide":D(t,n.closedWidth);break;default:W(t,n.closedWidth)}}();break;case"destroyWidget":w();break;case"initInteraction":!function(t){var e;document.getElementById(n.iframeInteractionsID)&&C(document.getElementById(n.iframeInteractionsID));(e=d.createElement("iframe")).id=n.iframeInteractionsID,e.src=o,A()&&(e.src=a);e.src=e.src+"?widget="+p.widget+"&pageTitle="+p.pageTitle+"&pageUrl="+p.pageUrl+"&widgetPosition="+p.position+"&frame=interaction&reaction="+t.message,p.debug&&(e.src=e.src+"&debug=true");if(e.setAttribute("allowTransparency","true"),e.style.width=n.frames.interaction.width+"px",e.style.height=n.frames.interaction.height+"px",e.style.display="block",e.style.border="none",e.style.position="fixed",e.style.background="none rgba(0, 0, 0, 0)",e.style.visibility="visible",e.style.opacity=1,e.style.transition="none",e.style.marginBottom=0,I())switch(e.style.width="100%",p.position){case"leftBottom":case"rightBottom":default:e.style.top="auto",e.style.right=0,e.style.left=0,e.style.bottom=n.frames.reaction.height-25+p.offset.bottom+"px",y();break;case"leftTop":case"rightTop":e.style.top=n.frames.reaction.height-40+"px",e.style.right=0,e.style.left=0,e.style.bottom="auto",y();break;case"inline":case"leftInline":case"rightInline":e.style.position="absolute",e.style.right=0,e.style.left=0,e.style.bottom=n.frames.reaction.inline.height-(n.safetytMargin+15)+"px";break;case"leftSide":e.style.top="50%",e.style.bottom="auto",e.style.left=parseInt(n.sideWidth.replace("px",""))-5+"px",e.style.right=0,e.style.width="calc(100% - "+(parseInt(n.sideWidth.replace("px",""))-5)+"px)",e.style.transform="translateY(-50%)";break;case"rightSide":e.style.top="50%",e.style.bottom="auto",e.style.right=parseInt(n.sideWidth.replace("px",""))-5+"px",e.style.left=0,e.style.width="calc(100% - "+(parseInt(n.sideWidth.replace("px",""))-5)+"px)",e.style.transform="translateY(-50%)"}else switch(p.position){case"rightBottom":default:e.style.top="auto",e.style.right=n.margin+n.safetytMargin+"px",e.style.left="auto",e.style.bottom=n.frames.reaction.height-25+p.offset.bottom+"px";break;case"leftBottom":e.style.top="auto",e.style.left=n.margin+n.safetytMargin+"px",e.style.right="auto",e.style.bottom=n.frames.reaction.height-25+p.offset.bottom+"px";break;case"rightTop":e.style.bottom="auto",e.style.right=n.margin+n.safetytMargin+"px",e.style.left="auto",e.style.top=n.frames.reaction.height-40+"px";break;case"leftTop":e.style.bottom="auto",e.style.left=n.margin+n.safetytMargin+"px",e.style.right="auto",e.style.top=n.frames.reaction.height-40+"px";break;case"inline":case"leftInline":case"rightInline":e.style.position="absolute",e.style.left="50%",e.style.bottom=n.frames.reaction.inline.height-(n.safetytMargin+15)+"px",e.style.marginLeft="-"+n.frames.interaction.width/2+"px";break;case"leftSide":e.style.top="50%",e.style.transform="translateY(-50%)",e.style.left=parseInt(n.sideWidth.replace("px",""))-5+"px",e.style.right="auto",e.style.bottom="auto";break;case"rightSide":e.style.top="50%",e.style.transform="translateY(-50%)",e.style.right=parseInt(n.sideWidth.replace("px",""))-5+"px",e.style.left="auto",e.style.bottom="auto"}switch(p.position){case"inline":case"leftInline":case"rightInline":document.body.appendChild(e);break;default:var i=document.getElementById(n.iframeReactionsID);m.insertBefore(e,i)}}(s);break;case"destroyInteraction":v();break;case"expandInteraction":!function(t){var e=document.getElementById(n.iframeInteractionsID);void 0===t&&(t=n.frames.interaction.expandedHeight);var i=h.innerHeight,i=10*parseInt(i/1.5/10);i<t&&(t=i);D(e,t+"px")}(s.message);break;case"collapseInteraction":D(document.getElementById(n.iframeInteractionsID),n.frames.interaction.height+"px");break;case"initCallToAction":!function(){var t;document.getElementById(n.iframeCallToActionID)&&C(document.getElementById(n.iframeCallToActionID));(t=d.createElement("iframe")).id=n.iframeCallToActionID,t.src=o,A()&&(t.src=a);t.src=t.src+"?widget="+p.widget+"&pageTitle="+p.pageTitle+"&pageUrl="+p.pageUrl+"&widgetPosition="+p.position+"&frame=calltoaction",p.textColor&&(t.src=t.src+"&widgetTextColor="+encodeURIComponent(p.textColor));p.debug&&(t.src=t.src+"&debug=true");if(t.setAttribute("allowTransparency","true"),t.style.width=n.frames.calltoaction.width+"px",t.style.height="0px",t.style.display="block",t.style.border="none",t.style.position="fixed",t.style.background="none rgba(0, 0, 0, 0)",t.style.visibility="visible",t.style.opacity=1,t.style.transition="none",t.style.marginBottom=0,I())switch(t.style.width="100%",p.position){case"leftBottom":case"rightBottom":default:t.style.top="auto",t.style.right=0,t.style.left=0,t.style.bottom=n.frames.reaction.height-25+p.offset.bottom+"px",y();break;case"leftTop":case"rightTop":t.style.top=n.frames.reaction.height-40+"px",t.style.right=0,t.style.left=0,t.style.bottom="auto",y();break;case"inline":case"leftInline":case"rightInline":t.style.width="100%",t.style.position="relative",t.style.left=0,t.style.right=0,t.style.bottom="auto";break;case"leftSide":t.style.top="50%",t.style.bottom="auto",t.style.left=parseInt(n.sideWidth.replace("px",""))-5+"px",t.style.right=0,t.style.width="calc(100% - "+(parseInt(n.sideWidth.replace("px",""))-5)+"px)",t.style.transform="translateY(-"+.5*parseInt(n.expandedWidth.replace("px",""))+"px)";break;case"rightSide":t.style.top="50%",t.style.bottom="auto",t.style.right=parseInt(n.sideWidth.replace("px",""))-5+"px",t.style.left=0,t.style.width="calc(100% - "+(parseInt(n.sideWidth.replace("px",""))-5)+"px)",t.style.transform="translateY(-"+.5*parseInt(n.expandedWidth.replace("px",""))+"px)"}else switch(p.position){case"rightBottom":default:t.style.top="auto",t.style.right=n.margin+n.safetytMargin+"px",t.style.left="auto",t.style.bottom=n.frames.reaction.height-25+p.offset.bottom+"px";break;case"leftBottom":t.style.top="auto",t.style.left=n.margin+n.safetytMargin+"px",t.style.right="auto",t.style.bottom=n.frames.reaction.height-25+p.offset.bottom+"px";break;case"rightTop":t.style.bottom="auto",t.style.right=n.margin+n.safetytMargin+"px",t.style.left="auto",t.style.top=n.frames.reaction.height-40+"px";break;case"leftTop":t.style.bottom="auto",t.style.left=n.margin+n.safetytMargin+"px",t.style.right="auto",t.style.top=n.frames.reaction.height-40+"px";break;case"inline":case"leftInline":case"rightInline":t.style.width="100%",t.style.position="relative",t.style.bottom="auto";break;case"leftSide":t.style.top="50%",t.style.transform="translateY(-50%)",t.style.right="auto",t.style.bottom="auto",t.style.left=parseInt(n.sideWidth.replace("px",""))-5+"px";break;case"rightSide":t.style.top="50%",t.style.transform="translateY(-50%)",t.style.left="auto",t.style.bottom="auto",t.style.right=parseInt(n.sideWidth.replace("px",""))-5+"px"}var e=document.getElementById(n.iframeReactionsID);e.contentWindow.postMessage({trigger:"hideActionButton",message:null},"*"),m.insertBefore(t,e)}(s.message);break;case"destroyCallToAction":k();break;case"expandCallToAction":!function(t){var e=document.getElementById(n.iframeCallToActionID);void 0===t&&(t=n.frames.calltoaction.expandedHeight);var i=h.innerHeight,i=10*parseInt(i/1.5/10);i<t&&(t=i);D(e,t+"px")}(s.message);break;case"setWidgetHeight":!function(t){document.getElementById(n.iframeReactionsID);if(void 0===t)return;j()&&(n.frames.reaction.inline.height=t,f())}(s.message);break;case"setWidgetPosition":i=s.message,p.position=i,u();break;case"setWidgetOffset":t=s.message,p.offset=E(p.offset,t),u();break;case"setWidgetAppearance":g(s.message);break;case"setOverlayStyle":(t=(t=void s.message)||document.getElementById(n.iframeInteractionsID))&&(t.style.position="fixed",t.style.top=0,t.style.bottom="auto",t.style.left=0,t.style.width="100%",t.style.height="100%",t.style.marginLeft=0,t.style.zIndex=1e15);break;case"redirect":!function(t){t.match(/^[a-zA-Z]+:\/\//)||(window.top.location.href="http://"+t);window.top.location.href=t}(s.message);break;case"event":_(s.message);break;case"lockReaction":document.getElementById(n.iframeReactionsID).contentWindow.postMessage({trigger:"lockReaction",message:null},"*");break;case"getDeviceInfo":e.source.window.postMessage({trigger:"getDeviceInfo",message:{device:{type:h.innerWidth<n.mobileThreshold||h.innerHeight<n.mobileThreshold?"mobile":"desktop"},screen:{width:screen.width,height:screen.height},window:{width:h.innerWidth,height:h.innerHeight}}},"*");break;case"getMetaData":e.source.window.postMessage({trigger:"getMetaData",message:B()},"*");break;default:"function"==typeof window[s.trigger]&&window[s.trigger].call(null,s.message)}}}function I(){return h.innerWidth<=n.mobileThreshold-40}function w(){var t=document.getElementById(n.iframeReactionsID);t&&C(t),m&&m.hasAttribute("style")&&m.removeAttribute("style")}function v(){var t=document.getElementById(n.iframeInteractionsID);t&&C(t)}function k(){var t=document.getElementById(n.iframeCallToActionID);t&&(C(t),(t=document.getElementById(n.iframeReactionsID)).contentWindow&&t.contentWindow.postMessage({trigger:"showActionButton",message:null},"*"))}function B(){return p.metadata}function W(t,e){e=parseInt(e.replace("px",""));s&&!M()?S.animate(t,e,"width"):t.style.width=e+"px"}function D(t,e){e=parseInt(e.replace("px",""));s&&!M()?S.animate(t,e,"height"):t.style.height=e+"px"}function E(t){for(var e=1;e<arguments.length;e++)for(var i in arguments[e])arguments[e].hasOwnProperty(i)&&(t[i]=arguments[e][i]);return t}var T={container:null,window:null,defaults:{frame:{id:"emojics-debug",width:"100%",height:"50px",top:0,bottom:"auto",left:0,right:0},debug:!1,content:"You are viewing this top bar because you're currently in Debug Mode. Set the <code>debug</code> propery to false when you're ready to go in production."},settings:{},isActive:function(){return!!this.settings.debug},init:function(t,e,i){return!!e&&(this.container=e,this.window=i||window,this.settings=E(this.defaults,t),!!this.isActive()&&(this.setDebugFrame=this.setDebugFrame.bind(this),console.info("Emojics Debug Mode Active"),this.setDebugFrame(),void setInterval(this.setDebugFrame,1e3)))},setDebugFrame:function(){var t,e;document.getElementById(this.settings.frame.id)||(this.frame=d.createElement("iframe"),this.frame.id=this.settings.frame.id,this.frame.style.setProperty("width",this.settings.frame.width,"important"),this.frame.style.setProperty("height",this.settings.frame.height,"important"),this.frame.style.setProperty("position","relative","important"),this.frame.style.setProperty("top",this.settings.frame.top,"important"),this.frame.style.setProperty("bottom",this.settings.frame.bottom,"important"),this.frame.style.setProperty("left",this.settings.frame.left,"important"),this.frame.style.setProperty("right",this.settings.frame.right,"important"),this.frame.style.setProperty("display","block","important"),this.frame.style.setProperty("border","none","important"),this.frame.style.setProperty("background","none rgba(255, 255, 255, 1)","important"),this.frame.style.setProperty("visibility","visible","important"),this.frame.style.setProperty("opacity",1,"important"),this.frame.style.setProperty("transition","none","important"),this.container.insertBefore(this.frame,this.container.firstChild),t='<div style="float:left;width:calc(100% - 120px);line-height:28px;"><span style="text-transform: uppercase;font-weight: 600;">Debug Mode:</span> '+this.settings.content+"</div>",(e=this.frame.contentWindow.document).open(),e.write('<html><head><title></title></head><body style="margin:10px;font-size:12px;font-family:sans-serif;"><div style="float:left;width:120px;"><a href="http://www.emojics.com" target="blank"><img style="width:100px;" src="//cdn.emojics.com/v1.0.0/svg/powered-by-emojics.svg" /></a></div>'+t+"</body></html>"),e.close())}};function C(t){t&&t.parentNode.removeChild(t)}var S={_speed:30,_interval:null,el:null,val:null,attr:null,tmpVal:null,dir:null,_init:function(t,e,i){this.el=t,this.val=e,this.attr=i,this.tmpVal="height"==i?parseInt(t.style.height.replace("px","")):parseInt(t.style.width.replace("px","")),this.dir=0<this.val-this.tmpVal?1:-1,this._interval=setInterval(this._animate.bind(this),20)},_destroy:function(){if(clearInterval(this._interval),!this.el)return!1;this.el.style[this.attr]=this.val+"px",this.el=null,this.val=null,this.attr=null,this.tmpVal=null,this.dir=null,this._interval=null},_animate:function(){if(!this.el)return!1;if(0<this.dir){if(this.tmpVal+this._speed>=this.val)return this._destroy(),!1;this.tmpVal+=this._speed}else{if(this.tmpVal-this._speed<=this.val)return this._destroy(),!1;this.tmpVal-=this._speed}this.el.style[this.attr]=this.tmpVal+"px"},animate:function(t,e,i){this._init(t,e,i)}};function j(t){switch(t=t||p.position){case"inline":case"leftInline":case"rightInline":return 1}}function A(){return"DEV_EMOJICS_BROWSERSYNC"==p.widget}function M(){var t=window.navigator.userAgent,e=t.indexOf("MSIE "),t=t.indexOf("Trident/");return 0<e||0<t}var R=function(t,e){return void 0!==l[t]&&("function"==typeof e&&(l[t]=e,!0))},_=function(t){return void 0!==t.event&&(void 0!==l[t.event]&&("function"==typeof l[t.event]&&(t.metadata=B(),l[t.event](t),!0)))};h.emojics=E(h.emojics||{},{init:t,on:R,hide:function(){m.style.display="none"},show:function(){m.style.display="block"}}),h.emojics.readyQueue?(t(),b(),h.emojics.readyQueue.forEach(function(t){return"function"==typeof t&&void t()})):h.onload=function(){t(),b()}}(window.emojicsOpts||{});
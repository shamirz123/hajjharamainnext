/* Load Main Plugins */
/* ========================================================== */

// jquery Appear
(function(e){e.fn.appear=function(t,n){var r=e.extend({data:undefined,one:true,accX:0,accY:0},n);return this.each(function(){var n=e(this);n.appeared=false;if(!t){n.trigger("appear",r.data);return}var i=e(window);var s=function(){if(!n.is(":visible")){n.appeared=false;return}var e=i.scrollLeft();var t=i.scrollTop();var s=n.offset();var o=s.left;var u=s.top;var a=r.accX;var f=r.accY;var l=n.height();var c=i.height();var h=n.width();var p=i.width();if(u+l+f>=t&&u<=t+c+f&&o+h+a>=e&&o<=e+p+a){if(!n.appeared)n.trigger("appear",r.data)}else{n.appeared=false}};var o=function(){n.appeared=true;if(r.one){i.unbind("scroll",s);var o=e.inArray(s,e.fn.appear.checks);if(o>=0)e.fn.appear.checks.splice(o,1)}t.apply(this,arguments)};if(r.one)n.one("appear",r.data,o);else n.bind("appear",r.data,o);i.scroll(s);e.fn.appear.checks.push(s);s()})};e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var t=e.fn.appear.checks.length;if(t>0)while(t--)e.fn.appear.checks[t]()},run:function(){if(e.fn.appear.timeout)clearTimeout(e.fn.appear.timeout);e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}});e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(t,n){var r=e.fn[n];if(r){e.fn[n]=function(){var t=r.apply(this,arguments);e.fn.appear.run();return t}}})})(jQuery);


// Sticky js
(function(e){var t={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:false,getWidthFrom:"",responsiveWidth:false},n=e(window),r=e(document),i=[],s=n.height(),o=function(){var t=n.scrollTop(),o=r.height(),u=o-s,a=t>u?u-t:0;for(var f=0;f<i.length;f++){var l=i[f],c=l.stickyWrapper.offset().top,h=c-l.topSpacing-a;if(t<=h){if(l.currentTop!==null){l.stickyElement.css("position","").css("top","");l.stickyElement.trigger("sticky-end",[l]).parent().removeClass(l.className);l.currentTop=null}}else{var p=o-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-t-a;if(p<0){p=p+l.topSpacing}else{p=l.topSpacing}if(l.currentTop!=p){l.stickyElement.css("position","fixed").css("top",p);if(typeof l.getWidthFrom!=="undefined"){l.stickyElement.css("width",e(l.getWidthFrom).width())}l.stickyElement.trigger("sticky-start",[l]).parent().addClass(l.className);l.currentTop=p}}}},u=function(){s=n.height();for(var t=0;t<i.length;t++){var r=i[t];if(typeof r.getWidthFrom!=="undefined"&&r.responsiveWidth===true){r.stickyElement.css("width",e(r.getWidthFrom).width())}}},a={init:function(n){var r=e.extend({},t,n);return this.each(function(){var n=e(this);var s=n.attr("id");var o=s?s+"-"+t.wrapperClassName:t.wrapperClassName;var u=e("<div></div>").attr("id",s+"-sticky-wrapper").addClass(r.wrapperClassName);n.wrapAll(u);if(r.center){n.parent().css({width:n.outerWidth(),marginLeft:"auto",marginRight:"auto"})}if(n.css("float")=="right"){n.css({"float":"none"}).parent().css({"float":"right"})}var a=n.parent();a.css("height",n.outerHeight());i.push({topSpacing:r.topSpacing,bottomSpacing:r.bottomSpacing,stickyElement:n,currentTop:null,stickyWrapper:a,className:r.className,getWidthFrom:r.getWidthFrom,responsiveWidth:r.responsiveWidth})})},update:o,unstick:function(t){return this.each(function(){var t=e(this);var n=-1;for(var r=0;r<i.length;r++){if(i[r].stickyElement.get(0)==t.get(0)){n=r}}if(n!=-1){i.splice(n,1);t.unwrap();t.removeAttr("style")}})}};if(window.addEventListener){window.addEventListener("scroll",o,false);window.addEventListener("resize",u,false)}else if(window.attachEvent){window.attachEvent("onscroll",o);window.attachEvent("onresize",u)}e.fn.sticky=function(t){if(a[t]){return a[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return a.init.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.sticky")}};e.fn.unstick=function(t){if(a[t]){return a[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return a.unstick.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.sticky")}};e(function(){setTimeout(o,0)})})(jQuery);


// stellar.js
if ( jQuery('.stellar').length ) {
	!function(a,b,c,d){function e(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=f,this.init()}var f="stellar",g={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(a){a.hide()},showElement:function(a){a.show()}},h={scroll:{getLeft:function(a){return a.scrollLeft()},setLeft:function(a,b){a.scrollLeft(b)},getTop:function(a){return a.scrollTop()},setTop:function(a,b){a.scrollTop(b)}},position:{getLeft:function(a){return-1*parseInt(a.css("left"),10)},getTop:function(a){return-1*parseInt(a.css("top"),10)}},margin:{getLeft:function(a){return-1*parseInt(a.css("margin-left"),10)},getTop:function(a){return-1*parseInt(a.css("margin-top"),10)}},transform:{getLeft:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[5],10):0}}},i={position:{setLeft:function(a,b){a.css("left",b)},setTop:function(a,b){a.css("top",b)}},transform:{setPosition:function(a,b,c,d,e){a[0].style[k]="translate3d("+(b-c)+"px, "+(d-e)+"px, 0)"}}},j=function(){var b,c=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,d=a("script")[0].style,e="";for(b in d)if(c.test(b)){e=b.match(c)[0];break}return"WebkitOpacity"in d&&(e="Webkit"),"KhtmlOpacity"in d&&(e="Khtml"),function(a){return e+(e.length>0?a.charAt(0).toUpperCase()+a.slice(1):a)}}(),k=j("transform"),l=a("<div />",{style:"background:#fff"}).css("background-position-x")!==d,m=l?function(a,b,c){a.css({"background-position-x":b,"background-position-y":c})}:function(a,b,c){a.css("background-position",b+" "+c)},n=l?function(a){return[a.css("background-position-x"),a.css("background-position-y")]}:function(a){return a.css("background-position").split(" ")},o=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a){setTimeout(a,1e3/60)};e.prototype={init:function(){this.options.name=f+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===c.body&&(this.element=b),this.$scrollElement=a(this.element),this.$element=this.element===b?a("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==d?a(this.options.viewportElement):this.$scrollElement[0]===b||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var a=this,b=h[a.options.scrollProperty];this._getScrollLeft=function(){return b.getLeft(a.$scrollElement)},this._getScrollTop=function(){return b.getTop(a.$scrollElement)}},_defineSetters:function(){var b=this,c=h[b.options.scrollProperty],d=i[b.options.positionProperty],e=c.setLeft,f=c.setTop;this._setScrollLeft="function"==typeof e?function(a){e(b.$scrollElement,a)}:a.noop,this._setScrollTop="function"==typeof f?function(a){f(b.$scrollElement,a)}:a.noop,this._setPosition=d.setPosition||function(a,c,e,f,g){b.options.horizontalScrolling&&d.setLeft(a,c,e),b.options.verticalScrolling&&d.setTop(a,f,g)}},_handleWindowLoadAndResize:function(){var c=this,d=a(b);c.options.responsive&&d.bind("load."+this.name,function(){c.refresh()}),d.bind("resize."+this.name,function(){c._detectViewport(),c.options.responsive&&c.refresh()})},refresh:function(c){var d=this,e=d._getScrollLeft(),f=d._getScrollTop();c&&c.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),c&&c.firstLoad&&/WebKit/.test(navigator.userAgent)&&a(b).load(function(){var a=d._getScrollLeft(),b=d._getScrollTop();d._setScrollLeft(a+1),d._setScrollTop(b+1),d._setScrollLeft(a),d._setScrollTop(b)}),this._setScrollLeft(e),this._setScrollTop(f)},_detectViewport:function(){var a=this.$viewportElement.offset(),b=null!==a&&a!==d;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=b?a.top:0,this.viewportOffsetLeft=b?a.left:0},_findParticles:function(){{var b=this;this._getScrollLeft(),this._getScrollTop()}if(this.particles!==d)for(var c=this.particles.length-1;c>=0;c--)this.particles[c].$element.data("stellar-elementIsActive",d);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var c,e,f,g,h,i,j,k,l,m=a(this),n=0,o=0,p=0,q=0;if(m.data("stellar-elementIsActive")){if(m.data("stellar-elementIsActive")!==this)return}else m.data("stellar-elementIsActive",this);b.options.showElement(m),m.data("stellar-startingLeft")?(m.css("left",m.data("stellar-startingLeft")),m.css("top",m.data("stellar-startingTop"))):(m.data("stellar-startingLeft",m.css("left")),m.data("stellar-startingTop",m.css("top"))),f=m.position().left,g=m.position().top,h="auto"===m.css("margin-left")?0:parseInt(m.css("margin-left"),10),i="auto"===m.css("margin-top")?0:parseInt(m.css("margin-top"),10),k=m.offset().left-h,l=m.offset().top-i,m.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(n=p,o=q,j=b,!1):(p+=b.position().left,void(q+=b.position().top))}),c=m.data("stellar-horizontal-offset")!==d?m.data("stellar-horizontal-offset"):j!==d&&j.data("stellar-horizontal-offset")!==d?j.data("stellar-horizontal-offset"):b.horizontalOffset,e=m.data("stellar-vertical-offset")!==d?m.data("stellar-vertical-offset"):j!==d&&j.data("stellar-vertical-offset")!==d?j.data("stellar-vertical-offset"):b.verticalOffset,b.particles.push({$element:m,$offsetParent:j,isFixed:"fixed"===m.css("position"),horizontalOffset:c,verticalOffset:e,startingPositionLeft:f,startingPositionTop:g,startingOffsetLeft:k,startingOffsetTop:l,parentOffsetLeft:n,parentOffsetTop:o,stellarRatio:m.data("stellar-ratio")!==d?m.data("stellar-ratio"):1,width:m.outerWidth(!0),height:m.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var b,c=this,e=this._getScrollLeft(),f=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(b=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(b=b.add(this.$element)),b.each(function(){var b,g,h,i,j,k,l,o=a(this),p=n(o),q=0,r=0,s=0,t=0;if(o.data("stellar-backgroundIsActive")){if(o.data("stellar-backgroundIsActive")!==this)return}else o.data("stellar-backgroundIsActive",this);o.data("stellar-backgroundStartingLeft")?m(o,o.data("stellar-backgroundStartingLeft"),o.data("stellar-backgroundStartingTop")):(o.data("stellar-backgroundStartingLeft",p[0]),o.data("stellar-backgroundStartingTop",p[1])),h="auto"===o.css("margin-left")?0:parseInt(o.css("margin-left"),10),i="auto"===o.css("margin-top")?0:parseInt(o.css("margin-top"),10),j=o.offset().left-h-e,k=o.offset().top-i-f,o.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(q=s,r=t,l=b,!1):(s+=b.position().left,void(t+=b.position().top))}),b=o.data("stellar-horizontal-offset")!==d?o.data("stellar-horizontal-offset"):l!==d&&l.data("stellar-horizontal-offset")!==d?l.data("stellar-horizontal-offset"):c.horizontalOffset,g=o.data("stellar-vertical-offset")!==d?o.data("stellar-vertical-offset"):l!==d&&l.data("stellar-vertical-offset")!==d?l.data("stellar-vertical-offset"):c.verticalOffset,c.backgrounds.push({$element:o,$offsetParent:l,isFixed:"fixed"===o.css("background-attachment"),horizontalOffset:b,verticalOffset:g,startingValueLeft:p[0],startingValueTop:p[1],startingBackgroundPositionLeft:isNaN(parseInt(p[0],10))?0:parseInt(p[0],10),startingBackgroundPositionTop:isNaN(parseInt(p[1],10))?0:parseInt(p[1],10),startingPositionLeft:o.position().left,startingPositionTop:o.position().top,startingOffsetLeft:j,startingOffsetTop:k,parentOffsetLeft:q,parentOffsetTop:r,stellarRatio:o.data("stellar-background-ratio")===d?1:o.data("stellar-background-ratio")})}))},_reset:function(){var a,b,c,d,e;for(e=this.particles.length-1;e>=0;e--)a=this.particles[e],b=a.$element.data("stellar-startingLeft"),c=a.$element.data("stellar-startingTop"),this._setPosition(a.$element,b,b,c,c),this.options.showElement(a.$element),a.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(e=this.backgrounds.length-1;e>=0;e--)d=this.backgrounds[e],d.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),m(d.$element,d.startingValueLeft,d.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=a.noop,a(b).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var c=this,d=a(b);d.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),d.bind("resize.horizontal-"+this.name,function(){c.horizontalOffset=c.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),d.bind("resize.vertical-"+this.name,function(){c.verticalOffset=c.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var a,b,c,d,e,f,g,h,i,j,k=this._getScrollLeft(),l=this._getScrollTop(),n=!0,o=!0;if(this.currentScrollLeft!==k||this.currentScrollTop!==l||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=k,this.currentScrollTop=l,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,j=this.particles.length-1;j>=0;j--)a=this.particles[j],b=a.isFixed?1:0,this.options.horizontalScrolling?(f=(k+a.horizontalOffset+this.viewportOffsetLeft+a.startingPositionLeft-a.startingOffsetLeft+a.parentOffsetLeft)*-(a.stellarRatio+b-1)+a.startingPositionLeft,h=f-a.startingPositionLeft+a.startingOffsetLeft):(f=a.startingPositionLeft,h=a.startingOffsetLeft),this.options.verticalScrolling?(g=(l+a.verticalOffset+this.viewportOffsetTop+a.startingPositionTop-a.startingOffsetTop+a.parentOffsetTop)*-(a.stellarRatio+b-1)+a.startingPositionTop,i=g-a.startingPositionTop+a.startingOffsetTop):(g=a.startingPositionTop,i=a.startingOffsetTop),this.options.hideDistantElements&&(o=!this.options.horizontalScrolling||h+a.width>(a.isFixed?0:k)&&h<(a.isFixed?0:k)+this.viewportWidth+this.viewportOffsetLeft,n=!this.options.verticalScrolling||i+a.height>(a.isFixed?0:l)&&i<(a.isFixed?0:l)+this.viewportHeight+this.viewportOffsetTop),o&&n?(a.isHidden&&(this.options.showElement(a.$element),a.isHidden=!1),this._setPosition(a.$element,f,a.startingPositionLeft,g,a.startingPositionTop)):a.isHidden||(this.options.hideElement(a.$element),a.isHidden=!0);for(j=this.backgrounds.length-1;j>=0;j--)c=this.backgrounds[j],b=c.isFixed?0:1,d=this.options.horizontalScrolling?(k+c.horizontalOffset-this.viewportOffsetLeft-c.startingOffsetLeft+c.parentOffsetLeft-c.startingBackgroundPositionLeft)*(b-c.stellarRatio)+"px":c.startingValueLeft,e=this.options.verticalScrolling?(l+c.verticalOffset-this.viewportOffsetTop-c.startingOffsetTop+c.parentOffsetTop-c.startingBackgroundPositionTop)*(b-c.stellarRatio)+"px":c.startingValueTop,m(c.$element,d,e)}},_handleScrollEvent:function(){var a=this,b=!1,c=function(){a._repositionElements(),b=!1},d=function(){b||(o(c),b=!0)};this.$scrollElement.bind("scroll."+this.name,d),d()},_startAnimationLoop:function(){var a=this;this._animationLoop=function(){o(a._animationLoop),a._repositionElements()},this._animationLoop()}},a.fn[f]=function(b){var c=arguments;return b===d||"object"==typeof b?this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))}):"string"==typeof b&&"_"!==b[0]&&"init"!==b?this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(c,1)),"destroy"===b&&a.data(this,"plugin_"+f,null)}):void 0},a[f]=function(){var c=a(b);return c.stellar.apply(c,Array.prototype.slice.call(arguments,0))},a[f].scrollProperty=h,a[f].positionProperty=i,b.Stellar=e}(jQuery,this,document);
}

// Animsition
!function(a){"use strict";var b="animsition",c={init:function(d){d=a.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"},d);var e=c.supportCheck.call(this,d);if(!e)return"console"in window||(window.console={},window.console.log=function(a){return a}),console.log("Animsition does not support this browser."),c.destroy.call(this);var f=c.optionCheck.call(this,d);return f&&c.addOverlay.call(this,d),d.loading&&c.addLoading.call(this,d),this.each(function(){var e=this,f=a(this),g=a(window),h=f.data(b);h||(d=a.extend({},d),f.data(b,{options:d}),g.on("load."+b+" pageshow."+b,function(){c.pageIn.call(e)}),g.on("unload."+b,function(){}),a(d.linkElement).on("click."+b,function(b){b.preventDefault();var d=a(this),f=d.attr("href");2===b.which||b.metaKey||b.shiftKey||-1!==navigator.platform.toUpperCase().indexOf("WIN")&&b.ctrlKey?window.open(f,"_blank"):c.pageOut.call(e,d,f)}))})},addOverlay:function(b){a(b.overlayParentElement).prepend('<div class="'+b.overlayClass+'"></div>')},addLoading:function(b){a(b.loadingParentElement).append('<div class="'+b.loadingClass+'"></div>')},removeLoading:function(){var c=a(this),d=c.data(b).options,e=a(d.loadingParentElement).children("."+d.loadingClass);e.fadeOut().remove()},supportCheck:function(b){var c=a(this),d=b.unSupportCss,e=d.length,f=!1;0===e&&(f=!0);for(var g=0;e>g;g++)if("string"==typeof c.css(d[g])){f=!0;break}return f},optionCheck:function(b){var c,d=a(this);return c=b.overlay||d.data("animsition-overlay")?!0:!1},animationCheck:function(c,d,e){var f=a(this),g=f.data(b).options,h=typeof c,i=!d&&"number"===h,j=d&&"string"===h&&c.length>0;return i||j?c=c:d&&e?c=g.inClass:!d&&e?c=g.inDuration:d&&!e?c=g.outClass:d||e||(c=g.outDuration),c},pageIn:function(){var d=this,e=a(this),f=e.data(b).options,g=e.data("animsition-in-duration"),h=e.data("animsition-in"),i=c.animationCheck.call(d,g,!1,!0),j=c.animationCheck.call(d,h,!0,!0),k=c.optionCheck.call(d,f);f.loading&&c.removeLoading.call(d),k?c.pageInOverlay.call(d,j,i):c.pageInBasic.call(d,j,i)},pageInBasic:function(b,c){var d=a(this);d.css({"animation-duration":c/1e3+"s"}).addClass(b).animateCallback(function(){d.removeClass(b).css({opacity:1})})},pageInOverlay:function(c,d){var e=a(this),f=e.data(b).options;e.css({opacity:1}),a(f.overlayParentElement).children("."+f.overlayClass).css({"animation-duration":d/1e3+"s"}).addClass(c)},pageOut:function(d,e){var f=this,g=a(this),h=g.data(b).options,i=d.data("animsition-out"),j=g.data("animsition-out"),k=d.data("animsition-out-duration"),l=g.data("animsition-out-duration"),m=i?i:j,n=k?k:l,o=c.animationCheck.call(f,m,!0,!1),p=c.animationCheck.call(f,n,!1,!1),q=c.optionCheck.call(f,h);q?c.pageOutOverlay.call(f,o,p,e):c.pageOutBasic.call(f,o,p,e)},pageOutBasic:function(b,c,d){var e=a(this);e.css({"animation-duration":c/1e3+"s"}).addClass(b).animateCallback(function(){location.href=d})},pageOutOverlay:function(d,e,f){var g=this,h=a(this),i=h.data(b).options,j=h.data("animsition-in"),k=c.animationCheck.call(g,j,!0,!0);a(i.overlayParentElement).children("."+i.overlayClass).css({"animation-duration":e/1e3+"s"}).removeClass(k).addClass(d).animateCallback(function(){h.css({opacity:0}),location.href=f})},destroy:function(){return this.each(function(){var c=a(this);a(window).unbind("."+b),c.css({opacity:1}).removeData(b)})}};a.fn.animateCallback=function(b){var c="animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";return this.each(function(){a(this).bind(c,function(){return a(this).unbind(c),b.call(this)})})},a.fn.animsition=function(d){return c[d]?c[d].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof d&&d?void a.error("Method "+d+" does not exist on jQuery."+b):c.init.apply(this,arguments)}}(jQuery);


// SmoothScroll
!function(){function e(){var e=!1;e&&c("keydown",r),v.keyboardSupport&&!e&&u("keydown",r)}function t(){if(document.body){var t=document.body,n=document.documentElement,o=window.innerHeight,r=t.scrollHeight;if(S=document.compatMode.indexOf("CSS")>=0?n:t,w=t,e(),x=!0,top!=self)y=!0;else if(r>o&&(t.offsetHeight<=o||n.offsetHeight<=o)){var a=!1,i=function(){a||n.scrollHeight==document.height||(a=!0,setTimeout(function(){n.style.height=document.height+"px",a=!1},500))};if(n.style.height="auto",setTimeout(i,10),S.offsetHeight<=o){var l=document.createElement("div");l.style.clear="both",t.appendChild(l)}}v.fixedBackground||b||(t.style.backgroundAttachment="scroll",n.style.backgroundAttachment="scroll")}}function n(e,t,n,o){if(o||(o=1e3),d(t,n),1!=v.accelerationMax){var r=+new Date,a=r-C;if(a<v.accelerationDelta){var i=(1+30/a)/2;i>1&&(i=Math.min(i,v.accelerationMax),t*=i,n*=i)}C=+new Date}if(M.push({x:t,y:n,lastX:0>t?.99:-.99,lastY:0>n?.99:-.99,start:+new Date}),!T){var l=e===document.body,u=function(){for(var r=+new Date,a=0,i=0,c=0;c<M.length;c++){var s=M[c],d=r-s.start,f=d>=v.animationTime,h=f?1:d/v.animationTime;v.pulseAlgorithm&&(h=p(h));var m=s.x*h-s.lastX>>0,w=s.y*h-s.lastY>>0;a+=m,i+=w,s.lastX+=m,s.lastY+=w,f&&(M.splice(c,1),c--)}l?window.scrollBy(a,i):(a&&(e.scrollLeft+=a),i&&(e.scrollTop+=i)),t||n||(M=[]),M.length?N(u,e,o/v.frameRate+1):T=!1};N(u,e,0),T=!0}}function o(e){x||t();var o=e.target,r=l(o);if(!r||e.defaultPrevented||s(w,"embed")||s(o,"embed")&&/\.pdf/i.test(o.src))return!0;var a=e.wheelDeltaX||0,i=e.wheelDeltaY||0;return a||i||(i=e.wheelDelta||0),!v.touchpadSupport&&f(i)?!0:(Math.abs(a)>1.2&&(a*=v.stepSize/120),Math.abs(i)>1.2&&(i*=v.stepSize/120),n(r,-a,-i),void e.preventDefault())}function r(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==H.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||o)return!0;if(s(t,"button")&&e.keyCode===H.spacebar)return!0;var r,a=0,i=0,u=l(w),c=u.clientHeight;switch(u==document.body&&(c=window.innerHeight),e.keyCode){case H.up:i=-v.arrowScroll;break;case H.down:i=v.arrowScroll;break;case H.spacebar:r=e.shiftKey?1:-1,i=-r*c*.9;break;case H.pageup:i=.9*-c;break;case H.pagedown:i=.9*c;break;case H.home:i=-u.scrollTop;break;case H.end:var d=u.scrollHeight-u.scrollTop-c;i=d>0?d+10:0;break;case H.left:a=-v.arrowScroll;break;case H.right:a=v.arrowScroll;break;default:return!0}n(u,a,i),e.preventDefault()}function a(e){w=e.target}function i(e,t){for(var n=e.length;n--;)E[A(e[n])]=t;return t}function l(e){var t=[],n=S.scrollHeight;do{var o=E[A(e)];if(o)return i(t,o);if(t.push(e),n===e.scrollHeight){if(!y||S.clientHeight+10<n)return i(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return i(t,e)}while(e=e.parentNode)}function u(e,t,n){window.addEventListener(e,t,n||!1)}function c(e,t,n){window.removeEventListener(e,t,n||!1)}function s(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,(k.x!==e||k.y!==t)&&(k.x=e,k.y=t,M=[],C=0)}function f(e){if(e){e=Math.abs(e),D.push(e),D.shift(),clearTimeout(z);var t=h(D[0],120)&&h(D[1],120)&&h(D[2],120);return!t}}function h(e,t){return Math.floor(e/t)==e/t}function m(e){var t,n,o;return e*=v.pulseScale,1>e?t=e-(1-Math.exp(-e)):(n=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=n+o*(1-n)),t*v.pulseNormalize}function p(e){return e>=1?1:0>=e?0:(1==v.pulseNormalize&&(v.pulseNormalize/=m(1)),m(e))}var w,g={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},v=g,b=!1,y=!1,k={x:0,y:0},x=!1,S=document.documentElement,D=[120,120,120],H={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},v=g,M=[],T=!1,C=+new Date,E={};setInterval(function(){E={}},1e4);var z,A=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),N=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)}}(),K=/chrome/i.test(window.navigator.userAgent),L=null;"onwheel"in document.createElement("div")?L="wheel":"onmousewheel"in document.createElement("div")&&(L="mousewheel"),L&&K&&(u(L,o),u("mousedown",a),u("load",t))}();

// Isotpe and imagesLoaded
if (jQuery(".grid-isotope").length) {
	
	// Isotope
	(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,c=s.length;c>f;f++){var d=s[f],l=o[d];l=a(t,l);var y=parseFloat(l);n[d]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var o=d[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=l[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=d(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):c(o)&&(i=o),this[t]=i?d(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=d(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=d(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,c=i[s],d=c.getAttribute(n);try{f=d&&JSON.parse(d)}catch(l){u&&u.error("Error parsing "+n+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var y=new o(c,f);p&&p.data(c,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}return e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var c=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=u,c.LayoutMode=h,c.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},c.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},c.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},c.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},c.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},c.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},c.prototype._init=c.prototype.arrange,c.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},c.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},c.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},c.prototype.updateSortData=function(t){this._getSorters(),t=o(t);var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)
	},c.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},c.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var d=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=c.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();c.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},c.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},c.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},c.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},c.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},c.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},c.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},c.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var l=c.prototype.remove;return c.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(l.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},c.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},c}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);

	// imagesLoaded
	(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var c=r[o];this.addImage(c)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
}

// Owl Carousel
if (jQuery(".owl-carousel").length) {
	eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)',62,382,'||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'),0,{}))
}

// Include CountTo
if (jQuery('.stats-timer').length) {
	(function(e){function t(e,t){return e.toFixed(t.decimals)}e.fn.countTo=function(t){t=t||{};return e(this).each(function(){function l(){a+=i;u++;c(a);if(typeof n.onUpdate=="function"){n.onUpdate.call(s,a)}if(u>=r){o.removeData("countTo");clearInterval(f.interval);a=n.to;if(typeof n.onComplete=="function"){n.onComplete.call(s,a)}}}function c(e){var t=n.formatter.call(s,e,n);o.text(t)}var n=e.extend({},e.fn.countTo.defaults,{from:e(this).data("from"),to:e(this).data("to"),speed:e(this).data("speed"),refreshInterval:e(this).data("refresh-interval"),decimals:e(this).data("decimals")},t);var r=Math.ceil(n.speed/n.refreshInterval),i=(n.to-n.from)/r;var s=this,o=e(this),u=0,a=n.from,f=o.data("countTo")||{};o.data("countTo",f);if(f.interval){clearInterval(f.interval)}f.interval=setInterval(l,n.refreshInterval);c(a)})};e.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:t,onUpdate:null,onComplete:null}})(jQuery);
}


/* Appends styles and cookies */
/* ========================================================== */

(function($) {

	$('head').append($('<style id="colors_"></style>'));
	$('head').append($('<link rel="stylesheet" href="" id="custom-layout">'));


	var $body = $('body');

	// Cookie script
    (function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){e(require("jquery"))}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}});


	// Set color
    if ($.cookie("color")) {
    	var rgb = {
    		r : $.cookie("color-r"),
    		g : $.cookie("color-g"),
    		b : $.cookie("color-b")
    	}
		$("style#colors_").first().empty().append(cssStyles(rgb));
	}


	// Set layout type
    if ($.cookie("layout")) {
    	$("#custom-layout").attr("href",$.cookie("layout"));
    }

    // Set background pattern cookie
    if ($.cookie("is_boxed") === "true") {
    	$body.addClass("body-boxed");
    	if (!$.cookie("pattern")) {
    		$body.addClass("image");
    	}
    }
    if ($.cookie("pattern")) {
		$body.removeClass("image light dark");
    	$body.addClass($.cookie("pattern"));
    }

	var templateOptions = $("#template-options-wrapper");


	// Template options
	$("#btn-options").on("click",function() {
		templateOptions.toggleClass('on');
		return false;
	});
	$("#template-options-close").on("click",function() {
		templateOptions.removeClass('on');
		return false;
	});

	//  colpick plugin script   
	!function(t){var a=function(){var a='<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div></div>',e={showEvent:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},colorScheme:"light",color:"3289c7",livePreview:!0,flat:!1,layout:"full",submit:1,submitText:"OK",height:156},l=function(a,e){var i=c(a);t(e).data("colpick").fields.eq(1).val(i.r).end().eq(2).val(i.g).end().eq(3).val(i.b).end()},r=function(a,e){t(e).data("colpick").fields.eq(4).val(Math.round(a.h)).end().eq(5).val(Math.round(a.s)).end().eq(6).val(Math.round(a.b)).end()},n=function(a,e){t(e).data("colpick").fields.eq(0).val(d(a))},s=function(a,e){t(e).data("colpick").selector.css("backgroundColor","#"+d({h:a.h,s:100,b:100})),t(e).data("colpick").selectorIndic.css({left:parseInt(t(e).data("colpick").height*a.s/100,10),top:parseInt(t(e).data("colpick").height*(100-a.b)/100,10)})},p=function(a,e){t(e).data("colpick").hue.css("top",parseInt(t(e).data("colpick").height-t(e).data("colpick").height*a.h/360,10))},u=function(a,e){t(e).data("colpick").currentColor.css("backgroundColor","#"+d(a))},f=function(a,e){t(e).data("colpick").newColor.css("backgroundColor","#"+d(a))},h=function(){var a,e=t(this).parent().parent();this.parentNode.className.indexOf("_hex")>0?(e.data("colpick").color=a=i(L(this.value)),l(a,e.get(0)),r(a,e.get(0))):this.parentNode.className.indexOf("_hsb")>0?(e.data("colpick").color=a=X({h:parseInt(e.data("colpick").fields.eq(4).val(),10),s:parseInt(e.data("colpick").fields.eq(5).val(),10),b:parseInt(e.data("colpick").fields.eq(6).val(),10)}),l(a,e.get(0)),n(a,e.get(0))):(e.data("colpick").color=a=o(E({r:parseInt(e.data("colpick").fields.eq(1).val(),10),g:parseInt(e.data("colpick").fields.eq(2).val(),10),b:parseInt(e.data("colpick").fields.eq(3).val(),10)})),n(a,e.get(0)),r(a,e.get(0))),s(a,e.get(0)),p(a,e.get(0)),f(a,e.get(0)),e.data("colpick").onChange.apply(e.parent(),[a,d(a),c(a),e.data("colpick").el,0])},v=function(){t(this).parent().removeClass("colpick_focus")},g=function(){t(this).parent().parent().data("colpick").fields.parent().removeClass("colpick_focus"),t(this).parent().addClass("colpick_focus")},k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;var e=t(this).parent().find("input").focus(),i={el:t(this).parent().addClass("colpick_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:a.pageY,field:e,val:parseInt(e.val(),10),preview:t(this).parent().parent().data("colpick").livePreview};t(document).mouseup(i,m),t(document).mousemove(i,_)},_=function(t){return t.data.field.val(Math.max(0,Math.min(t.data.max,parseInt(t.data.val-t.pageY+t.data.y,10)))),t.data.preview&&h.apply(t.data.field.get(0),[!0]),!1},m=function(a){return h.apply(a.data.field.get(0),[!0]),a.data.el.removeClass("colpick_slider").find("input").focus(),t(document).off("mouseup",m),t(document).off("mousemove",_),!1},b=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;var e={cal:t(this).parent(),y:t(this).offset().top};t(document).on("mouseup touchend",e,y),t(document).on("mousemove touchmove",e,x);var i="touchstart"==a.type?a.originalEvent.changedTouches[0].pageY:a.pageY;return h.apply(e.cal.data("colpick").fields.eq(4).val(parseInt(360*(e.cal.data("colpick").height-(i-e.y))/e.cal.data("colpick").height,10)).get(0),[e.cal.data("colpick").livePreview]),!1},x=function(t){var a="touchmove"==t.type?t.originalEvent.changedTouches[0].pageY:t.pageY;return h.apply(t.data.cal.data("colpick").fields.eq(4).val(parseInt(360*(t.data.cal.data("colpick").height-Math.max(0,Math.min(t.data.cal.data("colpick").height,a-t.data.y)))/t.data.cal.data("colpick").height,10)).get(0),[t.data.preview]),!1},y=function(a){return l(a.data.cal.data("colpick").color,a.data.cal.get(0)),n(a.data.cal.data("colpick").color,a.data.cal.get(0)),t(document).off("mouseup touchend",y),t(document).off("mousemove touchmove",x),!1},w=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;var e={cal:t(this).parent(),pos:t(this).offset()};e.preview=e.cal.data("colpick").livePreview,t(document).on("mouseup touchend",e,I),t(document).on("mousemove touchmove",e,M);var i;return"touchstart"==a.type?(pageX=a.originalEvent.changedTouches[0].pageX,i=a.originalEvent.changedTouches[0].pageY):(pageX=a.pageX,i=a.pageY),h.apply(e.cal.data("colpick").fields.eq(6).val(parseInt(100*(e.cal.data("colpick").height-(i-e.pos.top))/e.cal.data("colpick").height,10)).end().eq(5).val(parseInt(100*(pageX-e.pos.left)/e.cal.data("colpick").height,10)).get(0),[e.preview]),!1},M=function(t){var a;return"touchmove"==t.type?(pageX=t.originalEvent.changedTouches[0].pageX,a=t.originalEvent.changedTouches[0].pageY):(pageX=t.pageX,a=t.pageY),h.apply(t.data.cal.data("colpick").fields.eq(6).val(parseInt(100*(t.data.cal.data("colpick").height-Math.max(0,Math.min(t.data.cal.data("colpick").height,a-t.data.pos.top)))/t.data.cal.data("colpick").height,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(t.data.cal.data("colpick").height,pageX-t.data.pos.left))/t.data.cal.data("colpick").height,10)).get(0),[t.data.preview]),!1},I=function(a){return l(a.data.cal.data("colpick").color,a.data.cal.get(0)),n(a.data.cal.data("colpick").color,a.data.cal.get(0)),t(document).off("mouseup touchend",I),t(document).off("mousemove touchmove",M),!1},C=function(){var a=t(this).parent(),e=a.data("colpick").color;a.data("colpick").origColor=e,u(e,a.get(0)),a.data("colpick").onSubmit(e,d(e),c(e),a.data("colpick").el)},T=function(a){a.stopPropagation();var e=t("#"+t(this).data("colpickId"));e.data("colpick").onBeforeShow.apply(this,[e.get(0)]);var i=t(this).offset(),o=i.top+this.offsetHeight,c=i.left,l=S(),d=e.width();c+d>l.l+l.w&&(c-=d),e.css({left:c+"px",top:o+"px"}),0!=e.data("colpick").onShow.apply(this,[e.get(0)])&&e.show(),t("html").mousedown({cal:e},q),e.mousedown(function(t){t.stopPropagation()})},q=function(a){0!=a.data.cal.data("colpick").onHide.apply(this,[a.data.cal.get(0)])&&a.data.cal.hide(),t("html").off("mousedown",q)},S=function(){var t="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(t?document.documentElement.scrollLeft:document.body.scrollLeft),w:window.innerWidth||(t?document.documentElement.clientWidth:document.body.clientWidth)}},X=function(t){return{h:Math.min(360,Math.max(0,t.h)),s:Math.min(100,Math.max(0,t.s)),b:Math.min(100,Math.max(0,t.b))}},E=function(t){return{r:Math.min(255,Math.max(0,t.r)),g:Math.min(255,Math.max(0,t.g)),b:Math.min(255,Math.max(0,t.b))}},L=function(t){var a=6-t.length;if(a>0){for(var e=[],i=0;a>i;i++)e.push("0");e.push(t),t=e.join("")}return t},P=function(){var a=t(this).parent(),e=a.data("colpick").origColor;a.data("colpick").color=e,l(e,a.get(0)),n(e,a.get(0)),r(e,a.get(0)),s(e,a.get(0)),p(e,a.get(0)),f(e,a.get(0))};return{init:function(c){if(c=t.extend({},e,c||{}),"string"==typeof c.color)c.color=i(c.color);else if(void 0!=c.color.r&&void 0!=c.color.g&&void 0!=c.color.b)c.color=o(c.color);else{if(void 0==c.color.h||void 0==c.color.s||void 0==c.color.b)return this;c.color=X(c.color)}return this.each(function(){if(!t(this).data("colpickId")){var e=t.extend({},c);e.origColor=c.color;var i="collorpicker_"+parseInt(1e3*Math.random());t(this).data("colpickId",i);var o=t(a).attr("id",i);o.addClass("colpick_"+e.layout+(e.submit?"":" colpick_"+e.layout+"_ns")),"light"!=e.colorScheme&&o.addClass("colpick_"+e.colorScheme),o.find("div.colpick_submit").html(e.submitText).click(C),e.fields=o.find("input").change(h).blur(v).focus(g),o.find("div.colpick_field_arrs").mousedown(k).end().find("div.colpick_current_color").click(P),e.selector=o.find("div.colpick_color").on("mousedown touchstart",w),e.selectorIndic=e.selector.find("div.colpick_selector_outer"),e.el=this,e.hue=o.find("div.colpick_hue_arrs"),huebar=e.hue.parent();var d=navigator.userAgent.toLowerCase(),_="Microsoft Internet Explorer"===navigator.appName,m=_?parseFloat(d.match(/msie ([0-9]{1,}[\.0-9]{0,})/)[1]):0,x=_&&10>m,y=["#ff0000","#ff0080","#ff00ff","#8000ff","#0000ff","#0080ff","#00ffff","#00ff80","#00ff00","#80ff00","#ffff00","#ff8000","#ff0000"];if(x){var M,I;for(M=0;11>=M;M++)I=t("<div></div>").attr("style","height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="+y[M]+", endColorstr="+y[M+1]+'); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+y[M]+", endColorstr="+y[M+1]+')";'),huebar.append(I)}else stopList=y.join(","),huebar.attr("style","background:-webkit-linear-gradient(top,"+stopList+"); background: -o-linear-gradient(top,"+stopList+"); background: -ms-linear-gradient(top,"+stopList+"); background:-moz-linear-gradient(top,"+stopList+"); -webkit-linear-gradient(top,"+stopList+"); background:linear-gradient(to bottom,"+stopList+"); ");o.find("div.colpick_hue").on("mousedown touchstart",b),e.newColor=o.find("div.colpick_new_color"),e.currentColor=o.find("div.colpick_current_color"),o.data("colpick",e),l(e.color,o.get(0)),r(e.color,o.get(0)),n(e.color,o.get(0)),p(e.color,o.get(0)),s(e.color,o.get(0)),u(e.color,o.get(0)),f(e.color,o.get(0)),e.flat?(o.appendTo(this).show(),o.css({position:"relative",display:"block"})):(o.appendTo(document.body),t(this).on(e.showEvent,T),o.css({position:"absolute"}))}})},showPicker:function(){return this.each(function(){t(this).data("colpickId")&&T.apply(this)})},hidePicker:function(){return this.each(function(){t(this).data("colpickId")&&t("#"+t(this).data("colpickId")).hide()})},setColor:function(a,e){if(e="undefined"==typeof e?1:e,"string"==typeof a)a=i(a);else if(void 0!=a.r&&void 0!=a.g&&void 0!=a.b)a=o(a);else{if(void 0==a.h||void 0==a.s||void 0==a.b)return this;a=X(a)}return this.each(function(){if(t(this).data("colpickId")){var i=t("#"+t(this).data("colpickId"));i.data("colpick").color=a,i.data("colpick").origColor=a,l(a,i.get(0)),r(a,i.get(0)),n(a,i.get(0)),p(a,i.get(0)),s(a,i.get(0)),f(a,i.get(0)),i.data("colpick").onChange.apply(i.parent(),[a,d(a),c(a),i.data("colpick").el,1]),e&&u(a,i.get(0))}})}}}(),e=function(t){var t=parseInt(t.indexOf("#")>-1?t.substring(1):t,16);return{r:t>>16,g:(65280&t)>>8,b:255&t}},i=function(t){return o(e(t))},o=function(t){var a={h:0,s:0,b:0},e=Math.min(t.r,t.g,t.b),i=Math.max(t.r,t.g,t.b),o=i-e;return a.b=i,a.s=0!=i?255*o/i:0,a.h=0!=a.s?t.r==i?(t.g-t.b)/o:t.g==i?2+(t.b-t.r)/o:4+(t.r-t.g)/o:-1,a.h*=60,a.h<0&&(a.h+=360),a.s*=100/255,a.b*=100/255,a},c=function(t){var a={},e=t.h,i=255*t.s/100,o=255*t.b/100;if(0==i)a.r=a.g=a.b=o;else{var c=o,l=(255-i)*o/255,d=(c-l)*(e%60)/60;360==e&&(e=0),60>e?(a.r=c,a.b=l,a.g=l+d):120>e?(a.g=c,a.b=l,a.r=c-d):180>e?(a.g=c,a.r=l,a.b=l+d):240>e?(a.b=c,a.r=l,a.g=c-d):300>e?(a.b=c,a.g=l,a.r=l+d):360>e?(a.r=c,a.g=l,a.b=c-d):(a.r=0,a.g=0,a.b=0)}return{r:Math.round(a.r),g:Math.round(a.g),b:Math.round(a.b)}},l=function(a){var e=[a.r.toString(16),a.g.toString(16),a.b.toString(16)];return t.each(e,function(t,a){1==a.length&&(e[t]="0"+a)}),e.join("")},d=function(t){return l(c(t))};t.fn.extend({colpick:a.init,colpickHide:a.hidePicker,colpickShow:a.showPicker,colpickSetColor:a.setColor}),t.extend({colpick:{rgbToHex:l,rgbToHsb:o,hsbToHex:d,hsbToRgb:c,hexToHsb:i,hexToRgb:e}})}(jQuery);

	// Colors
	function color_(rgb, a) {
	    if (a) {
	        return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + a + ')';
	    }
	    else {
	        return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
	    }
	}

	var styleText;
	function cssStyles(color) {
		return styleText = '' + '.irs-from, .irs-to, .irs-single { background: ' + color_(color) + '; }.irs-from:after, .irs-to:after, .irs-single:after { border-top-color: ' + color_(color) + '; }.owl-theme .owl-controls.clickable .owl-buttons div:hover, .owl-theme .owl-controls.clickable .owl-buttons div:focus { background-color: ' + color_(color) + '; }.owl-theme .owl-controls .owl-page.active span, .owl-theme .owl-controls.clickable .owl-page:hover span { background: ' + color_(color) + '; }mark { background: ' + color_(color) + '; }a { color: ' + color_(color) + '; }.a-inherit:hover { color: ' + color_(color) + '; }.back-to-top { border-bottom: 40px solid ' + color_(color) + '; }.back-to-top:hover { color: ' + color_(color) + '; }.bg-overlay.overlay-main { background: ' + color_(color) + '; }.br-bottom:after { border-top: 2px solid ' + color_(color) + '; }.br-bottom-center::after { border-top: 2px solid ' + color_(color) + '; }.br-bottom-center.large:after { border-top: 2px solid ' + color_(color) + '; }.br-left { border-left: 2px solid ' + color_(color) + '; }.br-top { border-top: 2px solid ' + color_(color) + '; }.color-main { color: ' + color_(color) + ' !important; }.bg-main { background-color: ' + color_(color) + ' !important; }.menu > li > a:hover, .menu > li > a:focus, .menu > li:hover > a, .menu > li.current > a { color: ' + color_(color) + ' !important; }.menu-search button { color: ' + color_(color) + '; }.menu > li.li-cart .cart-count { background-color: ' + color_(color) + '; }.megamenu-list .li-shop-cart .price { color: ' + color_(color) + '; }.submenu > li > a:hover, .submenu > li > a:focus, .submenu > li:hover > a { color: ' + color_(color) + '; }.megamenu-list > li > a:hover, .megamenu-list > li > a:focus { color: ' + color_(color) + '; }.vertical-menu-list > li > a:hover, .vertical-menu-list > li > a:focus { color: ' + color_(color) + '; }.megamenu-list > .title, .vertical-menu-list > .title { border-left: 2px solid ' + color_(color) + '; }@media (min-width: 992px) { .menu-border .megamenu, .menu-border .submenu { border-top: 3px solid ' + color_(color) + '; } }.topbar.topbar-main { background-color: ' + color_(color) + '; }.top-menu > li > a:hover, .top-menu > li > a:focus, .top-menu > li > a:active { color: ' + color_(color) + '; }.top-menu > li .icon { color: ' + color_(color) + '; }.vertical-menu-button { color: ' + color_(color) + '; }.vertical-menu-button:hover { color: ' + color_(color) + '; }.vertical-menu-button:focus, .vertical-menu-button:active { color: ' + color_(color) + '; }.vertical-menu .panel-title:hover a, .vertical-menu .panel-title:focus a { color: ' + color_(color) + '; }@media (max-width: 767px) { .vertical-menu-button:hover, .vertical-menu-button:focus, .vertical-menu-button:active { color: ' + color_(color) + '; } }.top-bar-trigger .icon { color: ' + color_(color) + '; }.btn-slider:hover, .btn-slider:focus, .btn-slider:active { background-color: ' + color_(color) + '; border-color: ' + color_(color) + '; }.tp-caption .btn-slider.main, .btn-slider.main { color: ' + color_(color) + '; border-color: ' + color_(color) + '; }.btn-slider.main:hover, .btn-slider.main:focus, .btn-slider.main:active { background-color: ' + color_(color) + '; color: #fff; }.btn-slider.reversed { background-color: ' + color_(color) + '; border-color: ' + color_(color) + '; }.page-breadcrumbs a:hover, .page-breadcrumbs a:focus, .page-breadcrumbs a:active, .page-breadcrumbs a.active { color: ' + color_(color) + '; }.section-main { background-color: ' + color_(color) + '; }.section-bg .btn-bottom:hover { background-color: ' + color_(color,0.7) + '; }.section-overflow { background-color: ' + color_(color) + '; }.box-services-2:hover .title-small { color: ' + color_(color) + '; }.box-services-2:hover .icon-1 { background-color: ' + color_(color) + '; }.box-services-2 .icon-2 { font-size: 55px; display: block; margin: 5px 0 0 0; color: ' + color_(color) + '; }.box-services-2:hover .icon-2 { color: #505358; }.box-services-2 .icon-3 { background-color: ' + color_(color) + '; }.box-services-2:hover .icon-4 { color: ' + color_(color) + '; }.box-services-3:hover .title { color: ' + color_(color) + '; }.box-services-4 { background-color: ' + color_(color) + '; }.box-services-7:hover .title-small { color: ' + color_(color) + '; }.box-services-7:hover .icon-5 { color: ' + color_(color) + '; }.title-a { border-left: 2px solid ' + color_(color) + '; }.text-2 .icon { color: ' + color_(color) + '; }@media (min-width: 991px) { .testimonials-author-overlay { border-right: 1000px solid ' + color_(color,0.5) + '; } }.plan:hover .plan-title { color: ' + color_(color) + '; }.plan-featured-overlay { border-color: transparent ' + color_(color) + ' transparent transparent; }.plan-price { color: ' + color_(color) + '; }.portfolio-filter li > a:hover, .portfolio-filter li > a:focus, .portfolio-filter li > a.active { color: ' + color_(color) + '; }.view .portfolio-title > a:hover { color: ' + color_(color) + '; }.portfolio-text .mask .icon { color: ' + color_(color) + '; }.portfolio-text-title a:hover { color: ' + color_(color) + '; }.portfolio-text .portfolio-el:hover .portfolio-text-p { color: ' + color_(color) + '; }.project-title { border-left: 2px solid ' + color_(color) + '; }.blog-item .box-left .icon { border: 1px solid ' + color_(color) + '; color: ' + color_(color) + '; }.blog-item:hover .box-left .icon { background-color: ' + color_(color) + '; }.blog-view .blog-expand { color: ' + color_(color) + '; }.blog-item .sub-post-title a:hover { color: ' + color_(color) + '; }.blog-item .separator, .blog-item .sub-post-title .separator { color: ' + color_(color) + '; }.read-more { color: ' + color_(color) + '; }.read-more .icon { color: ' + color_(color) + '; }.read-more:hover { color: ' + color_(color) + '; }.intro-share .social-icon > li > a:hover .icon { color: ' + color_(color) + '; }.blog-user-social .social-icon > li > a .icon { color: ' + color_(color) + '; }.blog-comments .comment-date .icon { color: ' + color_(color) + '; }.sidebar-title { border-left: 2px solid ' + color_(color) + '; }.sidebar-search button { color: ' + color_(color) + '; }.sidebar-post h5 a:hover { color: ' + color_(color) + '; }.tweet-user { color: ' + color_(color) + '; }.tweet-user:hover { color: ' + color_(color) + '; }.sidebar-socials a:hover, .sidebar-socials a:focus { color: ' + color_(color) + '; }.sidebar-socials .icon { color: ' + color_(color) + '; border: 1px solid ' + color_(color) + '; }.sidebar-socials > li:hover .icon { background-color: ' + color_(color) + '; }.sidebar-categories li:hover a, .sidebar-categories .panel-title:hover a, .sidebar-categories .panel-title:focus a { color: ' + color_(color) + '; }.sidebar-archives > li > a:hover { color: ' + color_(color) + '; }.shop-price { color: ' + color_(color) + '; }.shop-offer { background-color: ' + color_(color) + '; }.shop-buy a { background-color: ' + color_(color) + '; }.shop-sidebar .top-rated-products h5 a:hover { color: ' + color_(color) + '; }.shop-product-name { border-left: 2px solid ' + color_(color) + '; }.shop-cart table .product a:hover { color: ' + color_(color) + '; }.progress-bar { background-color: ' + color_(color) + '; }.table-1.table-main-color { border-bottom: 1px solid ' + color_(color) + '; }.table-1.table-main-color th { background-color: ' + color_(color) + '; }.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus { color: ' + color_(color) + '; border-bottom: 2px solid ' + color_(color) + '; }.nav-tabs > li > a:hover, .nav-tabs > li > a:focus { color: ' + color_(color) + '; border-bottom: 2px solid ' + color_(color) + '; }.nav-tabs.vertical > li > a { border-left: 0 solid ' + color_(color) + '; }.nav-tabs.vertical > li.active > a, .nav-tabs.vertical > li > a:hover, .nav-tabs.vertical > li > a:focus { color: ' + color_(color) + '; border-left: 2px solid ' + color_(color) + '; }@media (max-width: 767px) { .nav-tabs > li > a { border-left: 0 solid ' + color_(color) + '; }  .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus { color: ' + color_(color) + '; border-left: 2px solid ' + color_(color) + '; }  .nav-tabs > li > a:hover, .nav-tabs > li > a:focus { color: ' + color_(color) + '; border-left: 2px solid ' + color_(color) + '; } }.owl-shop .owl-el .owl-popup { color: ' + color_(color) + '; }.sm-cursor .icon { color: ' + color_(color) + '; }.btn-d:hover, .btn-d:focus, .btn-d:active, .btn-d.active { background-color: ' + color_(color) + '; }.btn-e { color: ' + color_(color) + '; border: 1px solid ' + color_(color) + '; }.btn-e:hover, .btn-e:focus, .btn-e:active, .btn-e.active { background-color: ' + color_(color) + '; }.btn-bg { background-color: ' + color_(color) + '; }.popover-title { border-left: 2px solid ' + color_(color) + '; }.modal-title { border-left: 2px solid ' + color_(color) + '; }.alert.alert-dismissable .close:hover, .alert.alert-dismissable .close:focus { color: ' + color_(color) + '; }.pagination > .active > a { color: ' + color_(color) + '; }.pagination > li a:hover, .pagination .active a:hover { color: ' + color_(color) + '; }.mfp-close:hover { color: ' + color_(color) + '; }.popup .mask .popup-triangle { border-color: transparent ' + color_(color,0.9) + ' transparent transparent; }.blockquote { border-left: 2px solid ' + color_(color) + '; }.blockquote cite { color: ' + color_(color) + '; }.icon-box.icon-main { background-color: ' + color_(color) + '; }.icon-3d { background-color: ' + color_(color) + '; }.icon-box:hover, .icon-box:focus { background-color: ' + color_(color) + '; }.icon-box.icon-main:hover, .icon-box.icon-main:focus { background-color: ' + color_(color) + '; }.icon-bordered:hover, .icon-bordered:focus { color: ' + color_(color) + '; border-color: ' + color_(color) + '; }.icon-3d:hover, .icon-3d:focus { background-color: ' + color_(color) + '; }.icon-simple:hover, .icon-simple:focus { color: ' + color_(color) + '; }.divider.d3:after { background-color: ' + color_(color) + '; }.footer-title { border-left: 2px solid ' + color_(color) + '; }.footer-social > li > a:hover > .icon, .footer-social > li > a:focus > .icon { color: ' + color_(color) + '; }.footer-links > li > a:hover, .footer-links > li > a:focus, .footer-links > li > a:active { color: ' + color_(color) + '; }.footer-links.footer-links-2 > li > a .icon, .footer-links.archives > li > a .icon { color: ' + color_(color) + '; }.tags.footer-tags a:hover { color: ' + color_(color) + '; }.footer-socials.sidebar-socials a:hover, .footer-socials.sidebar-socials a:focus { color: ' + color_(color) + '; }.contact-widget .icon { color: ' + color_(color) + '; }.footer-color-dark .footer-posts .sidebar-post a:hover { color: ' + color_(color) + '; }.social-icon a:hover .icon { color: ' + color_(color) + '; }.social-icon.social-bg .icon { background-color: ' + color_(color) + '; }.social-icon.social-bg > li > a:hover .icon { background-color: ' + color_(color) + '; }.social-icon.simple > li > a:hover .icon { color: ' + color_(color) + '; }';
	}


	$("#picker").colpick({
			layout:'hex',
			submit:0,
			livePreview : "off",
			colorScheme:'dark',
			onChange:function(hsb,hex,rgb,el,bySetColor) {
			    $("style#colors_").first().empty().append(cssStyles(rgb));
			    $.cookie("color","true")
			    $.cookie("color-r",rgb.r);
			    $.cookie("color-g",rgb.g);
			    $.cookie("color-b",rgb.b);
			}
		});


    // Set layout type
    templateOptions.find('.settings-layout').on("click","a",function() { 
		
		$("#custom-layout").attr("href",$(this).attr("href"));
		$.cookie("layout",$(this).attr("href"));

		if($(this).hasClass("boxed")) {
			$body.addClass("body-boxed");
			$.cookie("is_boxed","true");
		} else {
			$body.removeClass("body-boxed");
			$.cookie("is_boxed","false");
		}

		location.reload(false);
    	return false;
    });

	// Set background pattern
    templateOptions.find('.settings-patterns').on("click","a",function() {

    	var pattern = $(this).data("pattern");
    	$body.removeClass("image light dark").addClass(pattern);
    	$.cookie("pattern",pattern);
    	return false;
    });


})(jQuery);

/* -----------------------------------------------------------------

 	[Content Structure]

 	01. Global variables and Helper Functions
 	02. Megamenu
 	03. Vertical Menu
 	04. Fixed Header
 	05. Slider config
 	06. Carousel config
 	07. Plugins config 
 		#
 		Stellar, Flickr Feed, Zoom, Raty, Range Slider, Text Rotator, 
 		Bootstrap config, Twitter feed, CountTo, MagnificPopup, Sharrre
 		#
	08. Miscellaneous
	09. Animations
	10. Portfolio configurations (isotope)
	11. Parallax Backgrounds
	12. Window resize

------------------------------------------------------------------- */

jQuery(document).ready(function($) {
	"use strict";


	/* Global variables */
	/* ========================================================== */


	/* Validate function */
	function validate_data(data, def) {
		return (data !== undefined) ? data : def;
	}

	var $win = $(window);

	// body 
	var $body = $('body');

	// Window width (without scrollbar)
	var $windowWidth = $win.width();

	// Detect Mobile Devices 
	var isMobileDevice = (( navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini|Mobi/i) || ($windowWidth < 768) ) ? true : false );

	var isTouchDevice = ((('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? true : false);

	// Check media query 
	var mediaWidth = $('.check-media').width();

	// detect IE browsers
	var ie = (function(){
	    var rv = 0,
	    	ua = window.navigator.userAgent,
	    	msie = ua.indexOf('MSIE '),
	    	trident = ua.indexOf('Trident/');

	    if (msie > 0) {
	        // IE 10 or older => return version number
	        rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	    } else if (trident > 0) {
	        // IE 11 (or newer) => return version number
	        var rvNum = ua.indexOf('rv:');
	        rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
	    }

	    return ((rv > 0) ? rv : 0);
	}());
	


	/* Megamenu */
	/* ========================================================== */


	var menu = $(".menu");
	var Megamenu = {

			desktopMenu: function() {

				menu.children("li").show(0);
				menu.children(".toggle-menu").hide(0);


				// touch event for tablets > 991px or laptops with touch screen
				if (isMobileDevice || isTouchDevice) {	

					menu.on("click touchstart","a", function(e){
						
						if ($(this).attr('href') === '#') {
							e.preventDefault();
							e.stopPropagation();
						}

						var $this = $(this),
							$sub = $this.siblings(".submenu, .megamenu");

						$this.parent("li").siblings("li").find(".submenu, .megamenu").stop(true, true).fadeOut(300);

						if ($sub.css("display") === "none") {
							$sub.stop(true, true).fadeIn(300);
						} else {
							$sub.stop(true, true).fadeOut(300);
							$this.siblings(".submenu").find(".submenu").stop(true, true).fadeOut(300);
						}
					});

					$(document).on("click.menu touchstart.menu", function(e){
						
						if ($(e.target).closest(menu).length === 0) {
							menu.find(".submenu, .megamenu").fadeOut(300);
						}
					});
					
				// Desktop hover effect	
				} else {
					menu.find('li').on({
						"mouseenter": function() {
							$(this).children(".submenu, .megamenu").stop(true, true).fadeIn(300);
						},
						"mouseleave": function() {
							$(this).children(".submenu, .megamenu").stop(true, true).fadeOut(300);
						}
					});
				}
			}, 
			mobileMenu: function() {

				// Toggle Menu
				var $children = menu.children("li"), 
					$toggle = menu.children("li.toggle-menu"),
					$notToggle = $children.not("toggle-menu");


				$notToggle.hide(0);
				$toggle.show(0).on("click", function(){

					if ($children.is(":hidden")){
						$children.slideDown(300);
					} else {
						$notToggle.slideUp(300);
						$toggle.show(0);
					}
				});

				// Click (touch) effect
				menu.find("li").not(".toggle-menu").each(function(){

					var $this = $(this);

					if ($this.children(".submenu, .megamenu").length) {
						
						$this.children("a").on("click", function(e){

							if ($(this).attr('href') === '#') {
								e.preventDefault();
								e.stopPropagation();
							}

							var $sub = $(this).siblings(".submenu, .megamenu");

							if ($sub.hasClass("open")) {
								$sub.slideUp(300).removeClass("open");
							} else {
								$sub.slideDown(300).addClass("open");
							}
						});
					} 
				});
			},
			unbindEvents: function() {
				menu.find("li, a").off();
				$(document).off("click.menu touchstart.menu");
				menu.find(".submenu, .megamenu").hide(0);
			}
		}; // END Megamenu object


	if ( mediaWidth === 991 ) {
		Megamenu.mobileMenu();
	} else {
		Megamenu.desktopMenu();
	}




	/* Vertical Menu */
	/* ========================================================== */


	// Vertical Menu Trigger 
	$("#vertical-menu-trigger").on("click",function() {
		$("body").toggleClass("vertical-menu-on");

		var $icon = $(this).find(".icon");

		if ($icon.hasClass("icon_menu")) {
			$icon.removeClass("icon_menu").addClass("icon_close");
		} else {
			$icon.removeClass("icon_close").addClass('icon_menu');
		}

		return false;
	});

	$("#vertical-menu-close").on("click",function() {
		$("body").toggleClass("vertical-menu-on");
		return false;
	});

	if ($(".vertical-menu-wrapper").length) {
		var scroll_height = $(".vertical-menu-wrapper")[0].scrollHeight;
		$(".vertical-menu-wrapper").find(".bg-overlay").css("height",scroll_height);
	}


	// Top Bar Wrapper
	function topBarHeight() {
		var barWrapper = $(".top-bar-wrapper"),
			barHeight = ((barWrapper.outerHeight()) * (-1));

		barWrapper.css("top", barHeight);
	}
	topBarHeight();

	$("#top-bar-trigger").on("click",function() {
		$(".top-bar-wrapper").toggleClass('on');
		return false;
	});




	/* Fixed Header */
	/* ========================================================== */

	function fixedHeader() {
      	$(".main-header").sticky({ 
      		topSpacing: 0,
      		className:"menu-fixed"
      	});
	}

	if ( (!$('.static-menu').length) ) {
		fixedHeader();
	}



	/* Slider Configurations */
	/* ========================================================== */

	if ($('.tp-banner-container').length) { 

		$(".tp-banner-container").each(function() {
			
			var tp = $(this);
			var rs = {
				"startWidth": validate_data(tp.data('start-width'),(($windowWidth < 991) ? 720 : 1170)),
				"startHeight": validate_data(tp.data('start-height'),650),

				"fullWidth": validate_data(tp.data("full-width"),"off"),

				"fullScreen": validate_data(tp.data("full-screen"),"off"),
				"fullScreenOffsetContainer": validate_data(tp.data("full-screen-offset-container"),"#nothing"),
				"fullScreenOffset": validate_data(tp.data("full-screen-offset"),"0px"),

				"navigationType": validate_data(tp.data('navigation-type'),'thumb'),
				// "bullet", "thumb", "none"
				"navigationStyle": validate_data(tp.data('navigation-style'),'round'),
				// "preview1", "preview2","preview3","preview4","round", "square", "round-old", "square-old", "navbar-old"
				"navigationArrows": validate_data(tp.data('navigation-arrows'),'none'),
				// "nexttobullets", "solo" 

				"hideTimeBar": validate_data(tp.data('hide-time-bar'),"on"),
				"spinner": validate_data(tp.data('spinner'),"spinner4"),
				// "spinner1" , "spinner2", "spinner3" , "spinner4", "spinner5
				"onHoverStop": validate_data(tp.data("on-hover-stop"),"on"),

				"dottedOverlay": validate_data(tp.data("dotted-overlay"),"none")
				//"none", "twoxtwo", "threexthree", "twoxtwowhite", "threexthreewhite"

			};

			var revapi = $(this).find('.tp-banner').revolution({
				delay: 9000,
				hideThumbs: 200,

				startwidth: (($windowWidth < 768) ? 600 : rs.startWidth),
				startheight: (($windowWidth < 768) ? 450 : rs.startHeight),

				fullWidth: rs.fullWidth,
				fullScreen: rs.fullScreen, // fullWidth have to be off

				fullScreenOffsetContainer: rs.fullScreenOffsetContainer,
	         	fullScreenOffset: rs.fullScreenOffset,

				thumbWidth: 120,
				thumbHeight: 50,
				thumbAmount: 3,

				navigationType: rs.navigationType,
				navigationStyle: rs.navigationStyle,
				navigationArrows: rs.navigationArrows,

				hideTimerBar: rs.hideTimeBar,
				spinner: rs.spinner,
				onHoverStop: rs.onHoverStop,

				dottedOverlay: rs.dottedOverlay,

				videoLoop: "loop",
				
				// Parralax	
				parallax:"scroll",
				parallaxBgFreeze:"on",
				parallaxLevels:[10,20,30,40,50,60,70,80,90,100],
				parallaxDisableOnMobile: "on"
			});

			// Set a background overlay for revolution slider videos
			revapi.on("revolution.slide.onloaded", function() {
				$(this).find(".tp-video-play-button").after($('<div class="bg-overlay" style="z-index:7;"></div>'));
			});

		});

	}


	/* Carousel Configurations */
	/* ========================================================== */

	// Init Carousels - Owl Carousel
	function initCarousels() {

		if (($().owlCarousel) && ($(".owl-carousel").length)) {

			$(".owl-columns5").owlCarousel({
				itemsCustom: [[0,1],[767,3],[991,4],[1199,5]],
				navigation:true,
				pagination:false,
				autoplay:false,
				navigationText:["<i class='icon arrow_carrot-left'></i>","<i class='icon arrow_carrot-right'></i>"],
			});

			$(".owl-columns4").owlCarousel({
				itemsCustom: [[0,1],[767,2],[991,3],[1199,4]],
				navigation:true,
				pagination:false,
				autoplay:false,
				navigationText:["<i class='icon arrow_carrot-left'></i>","<i class='icon arrow_carrot-right'></i>"],
			});

			$(".owl-columns3").owlCarousel({
				itemsCustom: [[0,1],[767,2],[991,3]],
				navigation:true,
				pagination:false,
				autoplay:false,
				navigationText:["<i class='icon arrow_carrot-left'></i>","<i class='icon arrow_carrot-right'></i>"],
			});

			$(".owl-columns2").owlCarousel({
				itemsCustom: [[0,1],[767,1],[991,2]],
				navigation:true,
				pagination:false,
				autoplay:false,
				navigationText:["<i class='icon arrow_carrot-left'></i>","<i class='icon arrow_carrot-right'></i>"],
			});

			$(".owl-columns1").owlCarousel({
				singleItem:true,
				stopOnHover:true,
				pagination:false,
				navigation:true,
				autoPlay:false,
				navigationText:["<i class='icon arrow_carrot-left'></i>","<i class='icon arrow_carrot-right'></i>"],
			});

		} 
	}

	$(window).load(function() {
		initCarousels();
	});



	/* Plugins Configurations */
	/* ========================================================== */
	/* Animsition, Text Rotator, Flickr Feed, Zoom, Raty, Range Slider, CountTo, Magnific Popup, Sharrre */

	// Timeout when there might be an error or
    setTimeout(function(){
    	$(".animsition").css({
    		"opacity":1,
    		"transition":"all 0.7s ease-out"
    	});
    	// update-v1.2.0
    	$(".animsition-loading").css({
    		"opacity":0,
    		"transition":"all 0.7s ease-out",
    		"z-index":"-1"
    	});
    }, 5000);

    // Animsition
    $(".animsition").animsition({
        inClass               :   'fade-in',
        outClass              :   'fade-out',
        inDuration            :    1500,
        outDuration           :    800,
        linkElement           :   'a:not([target="_blank"]):not([href^=#]):not(".init-popup"):not(.animsition-off)',
        loading               :    true,
        loadingParentElement  :   'body',
        loadingClass          :   'animsition-loading',
        unSupportCss          : [ 'animation-duration',
                                  '-webkit-animation-duration',
                                  '-o-animation-duration',
                                  '-ms-animation-duration'
                                ],
        overlay               :   false,
        overlayClass          :   'animsition-overlay-slide',
        overlayParentElement  :   'body'
    });



	/* ========================================================== */


	// OnePage Navigation plugin configurations 
	if (($().onePageNav) && $("#onepagenav").length) {
		$("#onepagenav").onePageNav();
	}


	/* ========================================================== */


	// Range Slider configarations 
	if (($().jRange) && $(".range-slider").length) {
		$('.range-slider').jRange({
		    from: 0,
		    to: 1000,
		    step: 1,
		    showScale: false,
		    format: '$ %s',
		    theme: "theme-jrange",
		    width: 300,
		    showLabels: true,
		    isRange : true
		});
	}


	/* ========================================================== */


	// countTo plugin configarations
	if( ($().countTo) && ($('.stats-timer').length) ) {

		if (isMobileDevice) {
				$('.stats-content').find(".stats-timer").countTo();
		} else {
			// appear init and then countTo
			$(".stats-content").appear(function() {
				$(this).find(".stats-timer").countTo();
			});
		}

	} // END if



	/* ========================================================== */


	// Magnific-popup configurations ( Gallery Template )
	if (($().magnificPopup) && ($(".init-popup").length) ) {

		// Popup Gallery
		$(".popup-gallery").magnificPopup({
			delegate:"a.init-popup",
			type:'image',
			tLoading: 'Loading image #%curr%...',
          	mainClass: 'mfp-img-mobile',
          	gallery: {
	            enabled: true,
	            navigateByImgClick: true,
	            preload: [0,1],
	            tCounter: '<span class="mfp-counter">%curr% / %total%</span>' 
	        },
	        image: {
	            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	            titleSrc: function(item) {
	            	return '<h5 class="title-mfp">' + item.el.attr("title") + '</h5>';
	            }
	        }
		});

		// Popup Image
		$(".image-popup").magnificPopup({
			type:"image",
			closeOnContentClick:true,
			mainClass:"mfp-with-zoom",
			image: {
				tError: '<a href="%url%">The image</a> could not be loaded.',
				titleSrc: function(item) {
	            	return '<h5 class="title-mfp">' + item.el.attr("title") + '</h5>';
	            },
	            verticalFit:true
			}
		});
	}


   /* ========================================================== */


	// Sharrre plugin 
	if (($().sharrre) && $(".sharrre").length) {

		$("#shareit").sharrre({
			share: {
				twitter:true,
				facebook:true,
				googlePlus:true
			},
			enableHover:false,
			urlCurl:"libs/sharrre/sharrre.php",
			enableTracking:((typeof(_gaq) != 'undefined') ? true : false), 
			template:"<ul class='social-icon'><li><a href='#'><i class='icon social_facebook'></i></a></li><li><a href='#'><i class='icon social_twitter'></i></a></li><li><a href='#'><i class='icon social_googleplus'></i></a></li></ul>",
			render: function(api, options) {
				$(api.element).on("click",".social_twitter",function() {
					api.openPopup("twitter");
				});
				$(api.element).on("click",".social_facebook",function() {
					api.openPopup("facebook");
				});
				$(api.element).on("click",".social_googleplus",function() {
					api.openPopup("googlePlus");
				});
			}
		});
	}



	/* Miscellaneous */
	/* ========================================================== */


	// Bootstrap configarations
	// Tooltips 
	if ( $().tooltip ) {
		$("[data-toggle='tooltip']").tooltip();
	} 
	// Popovers
	if ( $().popover ) {
		$("[data-toggle='popover']").popover();
	}


	/* ========================================================== */


	// Contact page overlay - Button see map 
	$("#contact-see-map").on("click", function() {
		$(".contact-map-overlay").toggleClass('map-on');
		return false;
	});



	/* ========================================================== */


	// Quantity control shop
	$(".js-qty").on("click", function() {
		
		var $this = $(this);
		var oldValue = $this.siblings('.input-quantity').val();
		var newVal;
		
		if ($this.hasClass('plus')) {
			newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 1) {
		  		newVal = parseFloat(oldValue) - 1;
			} else {
		  		newVal = 1;
			}
		}
		$this.siblings('.input-quantity').val(newVal);
	});


	/* ========================================================== */

	// Back to Top Button
	$body.append($('<div class="back-to-top"><i class="icon arrow_carrot-up"></i></div>'));

	$win.scroll(function(){
		if ($(this).scrollTop() > 1) {
			$('.back-to-top').css({bottom:"0"});
		} else {
			$('.back-to-top').css({bottom:"-100px"});
		}
	});

	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop: '0'}, 500);
		return false;
	});


	/* ========================================================== */

	// Toggle Sidebar
	$("#toggle-sidebar").on('click', function() {
		$(".sidebar").toggleClass('on');
		return false;
	});
	


	/* ========================================================== */


	// Notifications 
	$("#show_notification").on("click",function() {
		$(".alert-modal").addClass('alert-modal-on');
		return false;
	});

	/* ========================================================== */


	// Tabs - active class
	$('.tabs-active a').on('click', function() {
		$('.tabs-active a').removeClass('active');
		$(this).addClass('active');
		return false;
	});


	/* ========================================================== */

	// Clients 
	if ( $('.client-slider').length ) {

		setInterval(function() {

			$('.client-slider.on').removeClass('on');

			var random = Math.floor(Math.random() * 5);
			$('#c-' + random).addClass('on');

			var imgOn = $('.client-slider.on').find('.c-img.on').removeClass('on');

			if ( imgOn.next() && imgOn.next().length) {
				imgOn.next().addClass('on');
			} else {
				imgOn.siblings(':first').addClass('on');
			}

		}, 800);
	}


	/* ========================================================== */


	// Body full height 
	function setWindowHeight() {
		var windowHeight = $(window).height();
		$(".window-fullheight").css("height",windowHeight);
	}

	setWindowHeight();

	/* ========================================================== */


	// Max Height 
	function max_height() {
		$(".max_height").each(function() {
			var maxHeight = 0;
			$(this).find(".el_max_height").each(function() {
				if ($(this).height() > maxHeight) {
		            maxHeight = $(this).height();
		        }
			}).height(maxHeight);
		});
	}

	$(window).load(function() {
		max_height();
	});



	/* ========================================================== */


	// Fix column sibling height 
	function fixHeight() {
		$(".data-height-fix").each(function() {
			var $this = $(this),
				siblingHeight = $this.find($(".get-height")).outerHeight();
			$this.find(".set-height").css("height",siblingHeight);
		});
	}

	$(window).load(function() {
		fixHeight();
	});





	/* ========================================================== */


	// Remove from Cart
	$('.remove-product').click(function () {
        $(this).parent("td").parent("tr").hide();
        return false;
    });

    // Add to Cart 
    $(".add-to-cart-btn").on('click', function() {
    	$(".box-added-to-cart").show('slow');
    	return false;
    });


    /* ========================================================== */


	// Fix height attribute on iframes
	$('iframe').each(function() {
		var $this = $(this);
		$this.css('height', $this.attr('height') + 'px');

	});


	/* ========================================================== */


	/* Responsive Videos - 16:9 / 4:3 format */
	function rsEmbed() {
		$('.rs-video').each(function() {
			var $this = $(this),
				embedWidth = $this.width(),
				embedHeight = ( $this.hasClass('video-4by3') ? (embedWidth * 0.75) : (embedWidth * 0.5625) );

			$this.css('height', embedHeight + 'px');
		});
	}

	rsEmbed();



	/* ========================================================== */


	// Fix IE9 placeholder 
	if (ie === 9) {
		$.getScript('../libs/jquery.placeholder.js',function() {
			$('input, textarea').placeholder();
		});
	}





	/* Animations */
	/* ========================================================== */
	if ( ($().appear) && (isMobileDevice === false) ) {

		$('.animated').appear(function () {
			var $this = $(this);

			$this.each(function () {

				var animation = $this.data('animation'),
					delay = ($this.data('delay') + 'ms'),
					speed= ($this.data('speed') + 'ms');

				$this.addClass('on').addClass(animation).css({
					'-moz-animation-delay':delay,
					'-webkit-animation-delay':delay,
					'animation-delay':delay,
					'-webkit-animation-duration':speed,
					'animation-duration':speed
				});

			});
		}, {accX: 50, accY: -150});

	} else {

		$('.animated').removeClass("animated");
	}


	/* ========================================================== */


	// Progress bars animations
	$(".progress").each(function() {

		var $this = $(this);

		if (($().appear) && (isMobileDevice === false) && ($this.hasClass("no-anim") === false) ) {	

			$this.appear(function () {

					var $bar = $this.find(".progress-bar");
					$bar.addClass("progress-bar-animate").css("width", $bar.attr("data-percentage") + "%");


			}, {accY: -150} );

		} else {

			var $bar = $this.find(".progress-bar");
			$bar.css("width", $bar.attr("data-percentage") + "%");
		}
	});




	/* Isotope Configurations */
	/* ========================================================== */

	function setPortfolio() {

		if ( $().isotope && $('.grid-isotope').length) {

			var $portfolio = $('.portfolio'),
				$layout = ( $(".grid-fit-row").length ? "fitRows" : "masonry");

			$portfolio.isotope({
				itemSelector:'.grid-col',
				filter: '*',
				layoutMode: $layout,
				transitionDuration:'0.6s',
				masonry: {
					columnWidth:'.grid-col'
				}
			});


			// Filter links
			$('.portfolio-filter > ul > li > a').on('click', function() {

				var $this = $(this),
					fv = $this.attr('data-filter');

				$portfolio.isotope({ filter: fv });

				$('.portfolio-filter > ul > li > a').removeClass('active');
				$this.addClass('active');

				return false;
			});

		} // END if 

	}

	$(window).load(function() {
		setPortfolio();
	});


	/* ========================================================== */


	// Grid columns settings
	$(".grid-settings").find(".col-settings").on("click","a",function() {

		var	col_number = "grid-col-" + $(this).data("col");

		$(".grid-isotope").find(".portfolio")
		.removeClass("grid-col-2 grid-col-3 grid-col-4 grid-col-5")
		.addClass(col_number);

		setPortfolio();
		return false;
	});

	// Close grid settings
	$(".close-grid-settings").on('click', function() {
		$(".grid-settings").removeClass("on");
		return false;
	});


	/* Parallax Background */
	/* ========================================================== */

	if ( ($(".stellar").length) && !isMobileDevice && $(window).width() > 991 ) {

		$(".stellar").css("background-attachment","fixed");
		$("body").stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			horizontalOffset: 0,
			responsive: true,
			scrollProperty: 'scroll',
			parallaxElements: false
		});
	}

	


	/* Window Resize */
	/* ========================================================== */


	var globalResizeTimer = null;
	$(window).on("resize",function() {

	    if(globalResizeTimer !== null) {
	    	 window.clearTimeout(globalResizeTimer);
	    }

	    globalResizeTimer = window.setTimeout(function() {
			
		
			var $windowWidth = $win.width();
			var	newMediaWidth = $('.check-media').width();
			var	isMobileDevice = (( navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini|Mobi/i) || ($windowWidth < 767) ) ? true : false );


			if ( mediaWidth === 991  && newMediaWidth === 0) {
				Megamenu.unbindEvents();
				Megamenu.desktopMenu();
			}

			if ( mediaWidth === 0 && newMediaWidth === 991) {
				Megamenu.unbindEvents();
				Megamenu.mobileMenu();
			}

			mediaWidth = newMediaWidth;

			// Responsive videos
			rsEmbed();

			// Top Bar Wrapper height
			topBarHeight();

			// Set Window Height
			setWindowHeight();

			// Set the same height to siblings (just 2)
			fixHeight();

			// Set the maximum height of multiple siblings 
			max_height();


	    }, 400);
	});

});



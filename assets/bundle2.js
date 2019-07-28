/*! fb v2.1.5 fancyapps.com | fancyapps.com/fb/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fb=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fb":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fb-wrap" tabIndex="-1"><div class="fb-skin"><div class="fb-outer"><div class="fb-inner"></div></div></div></div>',image:'<img class="fb-image" src="{href}" alt="" />',iframe:'<iframe id="fb-frame{rnd}" name="fb-frame{rnd}" class="fb-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fb-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fb-item fb-close" href="javascript:;"><span class="cs-icon icon-close"></span></a>',next:'<a title="Next" class="fb-nav fb-next" href="javascript:;"><span class="cs-icon icon-arrow-right"></span></a>',prev:'<a title="Previous" class="fb-nav fb-prev" href="javascript:;"><span class="cs-icon icon-arrow-left"></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fb-href")||c.attr("href"),title:c.data("fb-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fb-type"),m||(m=(m=c.prop("class").match(/fb\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fb-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fb-item, .fb-nav").remove(),b.wrap.stop(!0,!0).removeClass("fb-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fb-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fb-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fb-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fb-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fb-skin")&&!h.is(".fb-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fb-"+(s?"mobile":"desktop")+" fb-type-"+c+" fb-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fb-skin",d.wrap),outer:f(".fb-outer",d.wrap),inner:f(".fb-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fb-wrap").width("100%").removeClass("fb-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fb-opened").find(".fb-item, .fb-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fb-placeholder")||e.data("fb-placeholder",f('<div class="fb-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fb-placeholder")).data("fb-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fb-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fb-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fb-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fb-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fb-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fb-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fb-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fb-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fb-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fb-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fb-lock")&&(f(".fb-margin").removeClass("fb-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fb-lock"),n.scrollTop(a).scrollLeft(b));f(".fb-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fb-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fb-overlay")&&!f(this).hasClass("fb-wrap")}).addClass("fb-margin"),this.el.addClass("fb-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fb-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fb-title fb-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fb=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fb-wrap")&&(k=a.groupAttr||"data-fb-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fb-item, .fb-nav')","click.fb-start",k);this.filter("[data-fb-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fb-lock-test");d=f(r).width();J.removeClass("fb-lock-test");f("<style type='text/css'>.fb-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );

function alwaysUpdateZoom(){
  
}


$(document).ready(function(){
	alwaysUpdateZoom();
  
   function addItem(form_id) {
      $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        dataType: 'json',
        data: $('#'+form_id).serialize(),
        success: Shopify.onSuccess,
        error: Shopify.onError
      });
   }
   
   

   Shopify.onSuccess = function() {

      var elem = $('.addtocart');

      elem.removeAttr("disabled");

      var quantity = parseInt(jQuery('[name="quantity"]').val(), 10) || 1;

      $("html, body").animate({ scrollTop: 0 }, 250, 'swing');

      function animate() {

        $("#cart-animation").show();

        var addtocartWidth = elem.outerWidth() / 2
        var addtocartHeight = elem.outerHeight() / 2

        var addtocartLeft = elem.offset().left + addtocartWidth;
        var addtocartTop = $(elem).offset().top + addtocartHeight ;

        var buttonAreaWidth = $("#cart-target").outerWidth();
        var buttonAreaHeight = $("#cart-target").outerHeight();

        var buttonAreaLeft = ($("#cart-target").offset().left + buttonAreaWidth / 2  - $("#cart-animation").outerWidth() / 2) - 4 - 18;
        var buttonAreaTop = ($("#cart-target").offset().top + buttonAreaWidth / 2  - $("#cart-animation").outerHeight() / 2) - 4 - 8;

        var path = {
          start: {
            x: addtocartLeft,
            y: addtocartTop,
            angle: 190.012,
            length: 0.2
          },
          end: {
            x: buttonAreaLeft,
            y: buttonAreaTop,
            angle: 90.012,
            length: 0.50
          }
        };

        $('#cart-animation').text(quantity).animate(
        {
          path : new $.path.bezier(path)
        },
        1200,
        function() {
          $("#cart-animation").fadeOut(500, function() {
            $(elem).prop("disabled", false)
            var cartCount =  parseInt($('#cart-count').text()) + quantity;
            $('#cart-count').text(cartCount)
            $('#cart-target').addClass('has-items');
          })
        }
        );
      }

      animate();
    };

    Shopify.onError = function(XMLHttpRequest, textStatus) {
      // Shopify returns a description of the error in XMLHttpRequest.responseText.
      // It is JSON.
      // Example: {"description":"The product 'Amelia - Small' is already sold out.","status":500,"message":"Cart Error"}
      var data = eval('(' + XMLHttpRequest.responseText + ')');
      if (!!data.message) {
        alert(data.message + '(' + data.status  + '): ' + data.description);
      } else {
        alert('Error : ' + Shopify.fullMessagesFromErrors(data).join('; ') + '.');
      }

      $('.addtocart').removeAttr("disabled");
    };

    Shopify.fullMessagesFromErrors = function(errors) {
      var fullMessages = [];
      jQuery.each(errors, function(attribute, messages) {
        jQuery.each(messages, function(index, message) {
          fullMessages.push(attribute + ' ' + message);
        });
      });
      return fullMessages;
    };

})

jQuery(window).load(function(){

  if ( $('.slides li').size() > 1 ) {

    $('.flexslider').flexslider({
      animation: "slide",
      slideshow: true,
      animationDuration: 700,
      slideshowSpeed: 6000,
      animation: "fade",
      controlsContainer: ".flex-controls",
      controlNav: false,
      keyboardNav: true
    }).hover(function(){ $('.flex-direction-nav').fadeIn();}, function(){$('.flex-direction-nav').fadeOut();});

  }

  $("select.loc_on_change").change(function(){
  	if($(this).attr("value") == "#") return false;
  	window.location = $(this).attr("value");
  });

});

/*============================*/
/* Update main product image. */
/*============================*/
var switchImage = function(newImageSrc, newImage, mainImageDomEl) {
  // newImageSrc is the path of the new image in the same size as originalImage is sized.
  // newImage is Shopify's object representation of the new image, with various attributes, such as scr, id, position.
  // mainImageDomEl is the passed domElement, which has not yet been manipulated. Let's manipulate it now.
  jQuery(mainImageDomEl).attr('src', newImageSrc);
  
  if ($(window).width() > 782) {jQuery(mainImageDomEl).parent().trigger('zoom.destroy').zoom( { url: newImageSrc.replace('_master', '') } );}
  
};

(function(){var theme_license='2350fb43-0c5c-4089-91a6-eef4564618dd'})();

jQuery(document).ready(function($){

  /*$("a.zoom").fb({
    padding:0,
    'titleShow': false,
    overlayColor: '#000000',
    overlayOpacity: 0.2
  });*/

  /* Update main product image when a thumbnail is clicked. */
  /*==========================*/
  $('#product .thumbs a').on('click', function(e) {
    e.preventDefault();
    switchImage($(this).attr('href'), null, $('.featured img')[0]);
  } );
  
  $('#product_newsletter .thumbs a').on('click', function(e) {
    e.preventDefault();
    switchImage($(this).attr('href'), null, $('.featured img')[0]);
  } );

  
  /* Initialize zoom on main product image */
  var mainProductImage = $('.featured img');
  if (mainProductImage.size()) {
    if ($(window).width() > 782) {
    var zoomedSrc = $('.featured img').attr('src').replace('_master', '');
    $('.featured img')
      .wrap('<span style="display:inline-block; max-width: 100%;"></span>')
      .css('display', 'block')
      .parent()
      .zoom( { url: zoomedSrc } );
	}
  }
  

  $(".flyout").hide();

  $("#menu-toggle").on("click", function() {
    $(".flyout").slideToggle( "fast" );
  });

  $(".sub-menu").hide();
  $(".more").on("click", function() {
    $(this).nextAll("ul").slideToggle( "fast" );
    $("i", this).toggleClass("fa-plus fa-minus");
  });

  $('input[type="submit"], input.btn, button').click(function(){ // remove ugly outline on input button click
    $(this).blur();
  })

  $("li.dropdown").hover(function(){
    $(this).children('.dropdown').show();
    $(this).children('.dropdown').stop();
    $(this).children('.dropdown').animate({
      opacity: 1.0
    }, 200);
  }, function(){
    $(this).children('.dropdown').stop();
    $(this).children('.dropdown').animate({
      opacity: 0.0
    }, 400, function(){
      $(this).hide();
    });
  });

}); // end document ready

/* jQuery css bezier animation support -- Jonah Fox */

;(function($){

  $.path = {};

  var V = {
    rotate: function(p, degrees) {
      var radians = degrees * Math.PI / 180,
        c = Math.cos(radians),
        s = Math.sin(radians);
      return [c*p[0] - s*p[1], s*p[0] + c*p[1]];
    },
    scale: function(p, n) {
      return [n*p[0], n*p[1]];
    },
    add: function(a, b) {
      return [a[0]+b[0], a[1]+b[1]];
    },
    minus: function(a, b) {
      return [a[0]-b[0], a[1]-b[1]];
    }
  };

  $.path.bezier = function( params, rotate ) {
    params.start = $.extend( {angle: 0, length: 0.3333}, params.start );
    params.end = $.extend( {angle: 0, length: 0.3333}, params.end );

    this.p1 = [params.start.x, params.start.y];
    this.p4 = [params.end.x, params.end.y];

    var v14 = V.minus( this.p4, this.p1 ),
      v12 = V.scale( v14, params.start.length ),
      v41 = V.scale( v14, -1 ),
      v43 = V.scale( v41, params.end.length );

    v12 = V.rotate( v12, params.start.angle );
    this.p2 = V.add( this.p1, v12 );

    v43 = V.rotate(v43, params.end.angle );
    this.p3 = V.add( this.p4, v43 );

    this.f1 = function(t) { return (t*t*t); };
    this.f2 = function(t) { return (3*t*t*(1-t)); };
    this.f3 = function(t) { return (3*t*(1-t)*(1-t)); };
    this.f4 = function(t) { return ((1-t)*(1-t)*(1-t)); };

    /* p from 0 to 1 */
    this.css = function(p) {
      var f1 = this.f1(p), f2 = this.f2(p), f3 = this.f3(p), f4=this.f4(p), css = {};
      if (rotate) {
        css.prevX = this.x;
        css.prevY = this.y;
      }
      css.x = this.x = ( this.p1[0]*f1 + this.p2[0]*f2 +this.p3[0]*f3 + this.p4[0]*f4 +.5 )|0;
      css.y = this.y = ( this.p1[1]*f1 + this.p2[1]*f2 +this.p3[1]*f3 + this.p4[1]*f4 +.5 )|0;
      css.left = css.x + "px";
      css.top = css.y + "px";
      return css;
    };
  };

  $.path.arc = function(params, rotate) {
    for ( var i in params ) {
      this[i] = params[i];
    }

    this.dir = this.dir || 1;

    while ( this.start > this.end && this.dir > 0 ) {
      this.start -= 360;
    }

    while ( this.start < this.end && this.dir < 0 ) {
      this.start += 360;
    }

    this.css = function(p) {
      var a = ( this.start * (p ) + this.end * (1-(p )) ) * Math.PI / 180,
        css = {};

      if (rotate) {
        css.prevX = this.x;
        css.prevY = this.y;
      }
      css.x = this.x = ( Math.sin(a) * this.radius + this.center[0] +.5 )|0;
      css.y = this.y = ( Math.cos(a) * this.radius + this.center[1] +.5 )|0;
      css.left = css.x + "px";
      css.top = css.y + "px";
      return css;
    };
  };

  $.fx.step.path = function(fx) {
    var css = fx.end.css( 1 - fx.pos );
    if ( css.prevX != null ) {
      $.cssHooks.transform.set( fx.elem, "rotate(" + Math.atan2(css.prevY - css.y, css.prevX - css.x) + ")" );
    }
    fx.elem.style.top = css.top;
    fx.elem.style.left = css.left;
  };

})(jQuery);

/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(f,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+f+"</li>"),c++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=a(this).hasClass(e+"next")?d.getTarget("next"):d.getTarget("prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText)}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1))}function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")))}function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null}function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g)}function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){b._gesture.stop()}),void 0):((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))),void 0)}}function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=f>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}a=null,c=null,h=null,e=null,q=0}}var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i=""},3e3)}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);
/*!
	Zoom 1.7.14
	license: MIT
	http://www.jacklmoore.com/zoom

	Modified to include fixes on 2015-09-14.
*/

!function(o){var n={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(n,t,e,i){var c,u,a,m,s,r,l,f=o(n),h=f.css("position"),d=o(t);return f.css("position",/(absolute|fixed)/.test(h)?h:"relative"),f.css("overflow","hidden"),e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(n),{init:function(){u=f.outerWidth(),c=f.outerHeight(),t===f[0]?(m=u,a=c):(m=d.outerWidth(),a=d.outerHeight()),s=(e.width-u)/m,r=(e.height-c)/a,l=d.offset()},move:function(o){var n=o.pageX-l.left,t=o.pageY-l.top;t=Math.max(Math.min(t,a),0),n=Math.max(Math.min(n,m),0),e.style.left=n*-s+"px",e.style.top=t*-r+"px"}}},o.fn.zoom=function(t){return this.each(function(){var e,i=o.extend({},n,t||{}),c=i.target||this,u=this,a=o(u),m=o(c),s=document.createElement("img"),r=o(s),l="mousemove.zoom",f=!1,h=!1;(i.url||(e=a.find("img"),e[0]&&(i.url=e.data("src")||e.attr("src")),i.url))&&(!function(){var o=m.css("position"),n=m.css("overflow");a.one("zoom.destroy",function(){a.off(".zoom"),m.css("position",o),m.css("overflow",n),r.remove(),s.onload=null})}(),s.onload=function(){function n(n){e.init(),e.move(n),r.stop().fadeTo(o.support.opacity?i.duration:0,1,o.isFunction(i.onZoomIn)?i.onZoomIn.call(s):!1)}function t(){r.stop().fadeTo(i.duration,0,o.isFunction(i.onZoomOut)?i.onZoomOut.call(s):!1)}var e=o.zoom(c,u,s,i.magnify);"grab"===i.on?a.on("mousedown.zoom",function(i){1===i.which&&(o(document).one("mouseup.zoom",function(){t(),o(document).off(l,e.move)}),n(i),o(document).on(l,e.move),i.preventDefault())}):"click"===i.on?a.on("click.zoom",function(i){return f?void 0:(f=!0,n(i),o(document).on(l,e.move),o(document).one("click.zoom",function(){t(),f=!1,o(document).off(l,e.move)}),!1)}):"toggle"===i.on?a.on("click.zoom",function(o){f?t():n(o),f=!f}):"mouseover"===i.on&&(e.init(),a.on("mouseover.zoom",n).on("mouseleave.zoom",t).on(l,e.move)),i.touch&&a.on("touchstart.zoom",function(o){o.preventDefault(),h?(h=!1,t()):(h=!0,n(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),e.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}),o.isFunction(i.callback)&&i.callback.call(s)},s.src=i.url)})},o.fn.zoom.defaults=n}(window.jQuery);

/* #jQuery appear
================================================== */
(function(e){e.fn.appear=function(t,n){var r=e.extend({data:undefined,one:true,accX:0,accY:0},n);return this.each(function(){var n=e(this);n.appeared=false;if(!t){n.trigger("appear",r.data);return}var i=e(window);var s=function(){if(!n.is(":visible")){n.appeared=false;return}var e=i.scrollLeft();var t=i.scrollTop();var s=n.offset();var o=s.left;var u=s.top;var a=r.accX;var f=r.accY;var l=n.height();var c=i.height();var h=n.width();var p=i.width();if(u+l+f>=t&&u<=t+c+f&&o+h+a>=e&&o<=e+p+a){if(!n.appeared)n.trigger("appear",r.data)}else{n.appeared=false}};var o=function(){n.appeared=true;if(r.one){i.unbind("scroll",s);var o=e.inArray(s,e.fn.appear.checks);if(o>=0)e.fn.appear.checks.splice(o,1)}t.apply(this,arguments)};if(r.one)n.one("appear",r.data,o);else n.bind("appear",r.data,o);i.scroll(s);e.fn.appear.checks.push(s);s()})};e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var t=e.fn.appear.checks.length;if(t>0)while(t--)e.fn.appear.checks[t]()},run:function(){if(e.fn.appear.timeout)clearTimeout(e.fn.appear.timeout);e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}});e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(t,n){var r=e.fn[n];if(r){e.fn[n]=function(){var t=r.apply(this,arguments);e.fn.appear.run();return t}}})})(jQuery);
var touch = false, clickEv = 'click', checkDropdown = [], checkSideMenu = [], checks_scroll = 0;  ;

/* slider product*/
function sliderProduct(){
  /* Slider Relatedpro */
  if($(".related-products-full .rp-slider").length){
    $(".related-products-full .rp-slider").owlCarousel({
      navigation : true,
      pagination: false,
      items: 4,
      slideSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      itemsDesktop : [1920,4],
      itemsDesktopSmall : [1200,4],
      itemsTablet: [1199,4],
      itemsTabletSmall: [991,3],
      itemsMobile : [767,2]
    });
  } 
  /* Slider Thumb */
  if($(".thumbs-mobile .slider-3itemsc").length){
    $(".thumbs-mobile .slider-3itemsc").owlCarousel({
      navigation : true,
      pagination: false,
      autoPlay: false,
      items: 4,
      slideSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [991,4],
      itemsTablet: [767,4],
      itemsTabletSmall: [540,4],
      itemsMobile : [420,4]
    });
  }
  $(".show-load-detail").css("display", "none");
}
/* slider product*/
function sliderBlog(){
  if($(".related-blog-slider").length){
    $(".related-blog-slider").owlCarousel({
      navigation : true,
      pagination: false,
      autoPlay: false,
      items: 3,
      slideSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [991,1],
      itemsTablet: [767,1],
      itemsTabletSmall: [540,1],
      itemsMobile : [360,1]
    });
  }
}

/* Handle dropdown box */
function handleDropdown(){
  var changeIcon = function() {
    $( ".dropdownMobile-toggle" ).each(function( index ) {
      $(this).parent().find('.dropdown-menu').hide();
      $(this).removeClass('active-dropdown');
      var icon_class=$(this).find('.icon-dropdown').data('class');
      $(this).find('.icon-dropdown').attr('class','icon-dropdown '+icon_class);
    });
  }
  var dropdownDesktop = function() {
    if($('.dropdown-toggle').length){
      $('.dropdown-toggle').parent().hover(function (){
        if(touch == false && getWidthBrowser() > 767 ){
          $(this).find('.dropdown-menu').stop(true, true).slideDown(300);
        }
      }, function (){
        if(touch == false && getWidthBrowser() > 767 ){
          $(this).find('.dropdown-menu').hide();
        }
      });
    }
  }
  var dropdownTablet = function(){
    if($('.dropdownMobile-toggle').length){
      $('.dropdownMobile-toggle').on('click', function() {
        if(!$(this).hasClass('active-dropdown')){
          changeIcon();
          $('body').addClass('active-overflow');
          $(this).parent().find('.dropdown-menu').stop(true, true).slideDown(300);
          $(this).addClass('active-dropdown');
          $(this).find('.icon-dropdown').attr('class','icon-dropdown cs-icon icon-close');
        }
        else{
          $('body').removeClass('active-overflow');
          changeIcon();
        }
      });
    }
  }
  $('nav .dropdown-menu').each(function(){
    $(this).find('li').last().addClass('last');
  });
  $('.dropdown').on('click', function() {
    if(touch == false && getWidthBrowser() > 767 ){
      var href = $(this).find('.dropdown-link').attr('href');
      window.location = href;
    }
  });
  $('.dropdown-1 .dropdown-link').on('click', function() {
    if(touch == false && getWidthBrowser() > 767 ){
      var href = $(this).attr('href');
      window.location = href;
    }
  });
  dropdownDesktop();
  dropdownTablet();
}

/* Fucntion get width browser */
function getWidthBrowser() {
  var myWidth;

  if( typeof( window.innerWidth ) == 'number' ) { 
    //Non-IE 
    myWidth = window.innerWidth;
    //myHeight = window.innerHeight; 
  } 
  else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) { 
    //IE 6+ in 'standards compliant mode' 
    myWidth = document.documentElement.clientWidth; 
    //myHeight = document.documentElement.clientHeight; 
  } 
  else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) { 
    //IE 4 compatible 
    myWidth = document.body.clientWidth; 
    //myHeight = document.body.clientHeight; 
  }

  return myWidth;
}

// handle scroll-to-top button
function handleScrollTop() {
  function totop_button(a) {
    var b = $("#scroll-to-top"),
        f = $(".cart-float-right");

    if (a == "on") { 
      f.addClass("on fadeInRight ").removeClass("off fadeOutRight");
      b.addClass("on fadeInRight ").removeClass("off fadeOutRight"); 
    } else {
      f.addClass("off fadeOutRight animated").removeClass("on fadeInRight");
      b.addClass("off fadeOutRight animated").removeClass("on fadeInRight"); 
    }
  }
  $(window).scroll(function() {
    var b = $(this).scrollTop();
    var c = $(this).height();
    if (b > 0) { 
      var d = b + c / 2;
    } 
    else { 
      var d = 1 ;
    }    
    if (d < 1e3 && d < c) { 
      totop_button("off");
    } 
    else {
      totop_button("on"); 
    }
  });  
  $("#scroll-to-top").click(function (e) {
    e.preventDefault();
    $('body,html').animate({scrollTop:0},800,'swing');
  });
}   

//newsletter popup
function ModalNewsletter(){
  var showNewsletter = function(date){
    $('#newsletter-popup').modal('toggle');
    $('.nl-wraper-popup').addClass('animated'); 
    var tnout = 20 ;
    setTimeout (function() { 
      $('#newsletter-popup').modal('hide');
    }, tnout*1000 );
    localStorage.setItem('cs-newsletter', date );
  }
  var checkNewsletter = function(){
    var date = '05/19/2019 10:47:35';
    if(localStorage.getItem('cs-newsletter') == null || localStorage.getItem('cs-newsletter') == "undefined" ){
	  showNewsletter(date);
    }
    else{
      var check_time = new Date(date) - new Date(localStorage.getItem('cs-newsletter'));
      var ms = check_time % 1000;
      check_time = (check_time - ms) / 1000;
      var days = Math.floor(check_time / 86400);
      if(days > 7){
        showNewsletter(date);
      }
    }
  }
  
}

/* Handle product quantity */
function handleQuantity(){
  if($('.quantity-wrapper').length){
    $('.quantity-wrapper').on(clickEv, '.qty-up', function() {
      var $this = $(this);
      var qty = $this.parents('.wrapper').find('input');
      $(qty).val(parseInt($(qty).val()) + 1);
    });
    $('.quantity-wrapper').on(clickEv, '.qty-down', function() {
      var $this = $(this);
      var qty = $this.parents('.wrapper').find('input');
      if(parseInt($(qty).val()) > 1)
        $(qty).val(parseInt($(qty).val()) - 1);
    });
  }
}

function colorwarches(){
  jQuery('.swatch :radio').change(function() {
    var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
    var optionValue = jQuery(this).val();
    jQuery(this)
    .closest('form')
    .find('.single-option-selector')
    .eq(optionIndex)
    .val(optionValue)
    .trigger('change');
  }); 
}

function toggleTagsFilter(){ 
  if(window.innerWidth >= 768 ){
    var tagsbutton = document.getElementById( 'showTagsFilter' ),    
        tagscontent = document.getElementById( 'tags-filter-content' );    
    if(tagsbutton != null ){
      tagsbutton.onclick = function() {
        classie.toggle( this, 'closed' );
        classie.toggle( tagscontent, 'tags-closed' );
        if(classie.has( this, 'closed' ))
          $('#showTagsFilter').html("Filter <i class='fa fa-angle-down'></i>");
        else $('#showTagsFilter').html("Filter <i class='fa fa-angle-up'></i>");
      };
    }
  }
}

/* Function update scroll product thumbs */
function updateScrollThumbsQS(){
  if($('#gallery_main_qs').length){

    $('#quick-shop-image .fancybox').on(clickEv, function() {
      var _items = [];
      var _index = 0;
      var product_images = $('#gallery_main_qs .image-thumb a');
      product_images.each(function(key, val) {
        _items.push({'href' : val.href, 'title' : val.title});
        if($(this).hasClass('active')){
          _index = key;
        }
      });
      $.fancybox(_items,{
        closeBtn: true,
        index: _index,
        helpers: {
          buttons: {}
        }
      });
      return false;
    });

    $('#quick-shop-image').on(clickEv, '.image-thumb a', function() {

      var $this = $(this);
      var background = $('.product-image .main-image .main-image-bg');
      var parent = $this.parents('.product-image-wrapper');
      var src_original = $this.attr('data-image-zoom');
      var src_display = $this.attr('data-image');

      background.show();

      parent.find('.image-thumb').removeClass('active');
      $this.parent().addClass('active');

      parent.find('.main-image').find('img').attr('data-zoom-image', src_original);
      parent.find('.main-image').find('img').attr('src', src_display).load(function() {
        background.hide();
      });

      return false;
    });
  }
}

//Change Quantity Quick Show
function change_qs_quantity(qs){
  qs_quantity=qs;
}

function showMenuMobile(){
  var changeIcon = function(){
    $('.navigation_mobile .arrow').removeClass('class_test');
    $('.navigation_mobile .arrow i').attr('class', 'cs-icon icon-ios-plus-empty');
    $('.navigation_mobile').removeClass('active_dropdown');
    $('.navigation_mobile .menu-mobile-container').hide("fast");
  }
  var showMenu = function(){
    $('.group_navbtn_action .dropdown-toggle-navigation').on('click', function() {
      $(this).addClass('active-dropdown');
      $(this).parent().find('.navigation_dropdown_scroll').addClass("hover-dropdown");
      $('#top').attr("id","top-activeRight");
    });
  }
  var closeMenu = function(){
    $('.group_navbtn_action .close-navigation-dropdown').on('click', function() {
      $(this).parents('.navigation_dropdown_scroll').removeClass("hover-dropdown");
      $('#top-activeRight').attr("id","top");
    });
    $('.group_navbtn_action .navigation_dropdown_scroll_close').on('click', function() {
      $(this).parents('.navigation_dropdown_scroll').removeClass("hover-dropdown");
      $('#top-activeRight').attr("id","top");
    });
  }
  var showMegaMenu = function(){
    $('.navigation_mobile .arrow').on('click', function() {
      if($(this).hasClass('class_test')){
        $(this).removeClass('class_test');
        $(this).find('i').attr('class', 'cs-icon icon-ios-plus-empty');
        $(this).parent().removeClass('active_dropdown');
        $(this).parent().find('.menu-mobile-container').hide("fast");
      }
      else{
        changeIcon();
        $(this).addClass('class_test');
        $(this).find('i').attr('class', 'cs-icon icon-ios-minus-empty');
        $(this).parent().addClass('active_dropdown');
        $(this).parent().find('.menu-mobile-container').show("fast");
      }
    });
  }
  var showSubMenu = function(){
    $('.navigation_sub_mobile .arrow_sub_mobile').click(function(){
      if($(this).hasClass('class_test')){
        $(this).removeClass('class_test');
        $(this).find('i').attr('class', 'cs-icon icon-ios-plus-empty');
        $(this).parent().removeClass('active_dropdown');
        $(this).parent().find('.sub-menu-mobile-container').hide("fast");
      }
      else{
        $(this).addClass('class_test');
        $(this).find('i').attr('class', 'cs-icon icon-ios-minus-empty');
        $(this).parent().addClass('active_dropdown');
        $(this).parent().find('.sub-menu-mobile-container').first().show("fast");
      }
    });
  }
  var showShowInfo = function(){
    $('.icon_info .show-info').on('click', function() {
      var classShow = $(this).data('class');
      $('#top').find('.'+classShow).addClass('active-show');
      $('#top .info-header').addClass('active');
      $('#top').attr("id","top-activeRight");
    });
    $('.info-header .close-info').on('click', function() {
      $('#top-activeRight').attr("id","top");
      $('.info-header .info-header-item').removeClass('active-show');
      $('#top .info-header').removeClass('active');
    });
    $('.info-header .info-header-close').on('click', function() {
      $('#top-activeRight').attr("id","top");
      $('.info-header .info-header-item').removeClass('active-show');
      $('#top .info-header').removeClass('active');
    });
  }
  showMenu();
  closeMenu();
  showMegaMenu();
  showSubMenu();
  showShowInfo();
}

function showItemMobile(){
  $('.item-dropdown-mobile .btn-group').on('click', '.dropdown-toggle', function() {
    $('.item-dropdown-mobile .dropdown-menu').css('display','none');

    if($(this).hasClass('active_popup')){
      $(this).removeClass('active_popup');
    }
    else{
      $('.item-dropdown-mobile .dropdown-toggle').removeClass('active_popup');
      $(this).addClass('active_popup');
      $('.item-dropdown-mobile').each(function(){
        if($(this).find('.dropdown-toggle').hasClass('active_popup')){
          $(this).find('.dropdown-menu').css('display','block');
        }
      });
    }
  });
}

function showPassword(){
  $(".form-password .cs-icon").on(clickEv, function() {
    if($(this).hasClass("show-pass")){
      $(this).parent().find("input").attr('type','password');
      $(this).removeClass("show-pass");
    }
    else{
      $(this).parent().find("input").attr('type','text');
      $(this).addClass("show-pass");
    }
  });
}

function sidebarBlog(){
  $(".sidebar-block .sidebar-title").on(clickEv, '.cs-icon', function() {
    if($(this).hasClass("show-content")){
      $(this).parents('.sidebar-block').find(".sidebar-content").show( "slow" );
      $(this).attr('class','cs-icon icon-ios-minus-empty');
    }
    else{
      $(this).parents('.sidebar-block').find(".sidebar-content").hide( "slow" );
      $(this).attr('class','show-content cs-icon icon-ios-plus-empty');
    }
  });
}

function tagFilterCollection(){
  var newQuery = '';
  var init = function(){
    Shopify.queryParams = {};
    if (location.search.length) {
      for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
        aKeyValue = aCouples[i].split('=');
        if (aKeyValue.length > 1) {
          Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
        }
      }
    }
  }
  var createUrl = function(url,queryParams){
    history.pushState({
      param: queryParams
    }, url, url);
    $.ajax({
      type: 'GET',
      url: url,
      data: {},
      beforeSend: function( xhr ) {
        $("#tags-load").show();
      },
      complete: function (data) {  
        $('#collection').html($("#collection", data.responseText).html());      
        $("#tags-load").hide();
        var urls = "\/\/productreviews.shopifycdn.com\/assets\/v4\/spr.js?shop=";
        $.getScript(urls, function() {
        });
        handleGridList();
        toggleTagsFilter();
        $(GLOBAL['common']['init']);
        filterClick();
        sidebarBlog();
        clearFilterMobile();
        clearFilterFullwidth();
        applyFilterMobile();
        paginationCollection();
        showFilter();
        if(checkCollection == 1){
          removeFilter();
        }
        handleDropdown();
        collectionTopFilter();
      }
    });
  }
  var filterClick = function(){
    $('.filter-block .filter-content li > a').click(function(event) {
      event.preventDefault();
      var newTags = [];
      if (Shopify.queryParams.constraint) {
        newTags = Shopify.queryParams.constraint.split('+');
      }
      var dataHandle = $(this).parents('li').data("handle");
      if (dataHandle) {
        var tagCheck = newTags.indexOf(dataHandle);
        if (tagCheck >= 0) {
          newTags.splice(tagCheck, 1);
        } else {
          newTags.push(dataHandle);
        }
      }
      if (newTags.length) {
        Shopify.queryParams.constraint = newTags.join('+');
      } else {
        delete Shopify.queryParams.constraint;
      }
      delete Shopify.queryParams.page;
      newQuery = jQuery.param(Shopify.queryParams).replace(/%2B/g, '+');

      if(getWidthBrowser() > 991 ){
        var url = location.pathname + "?" + newQuery;
        createUrl(url,Shopify.queryParams);
      }
      else{
        if($(this).parents('li').hasClass('active')){
          $(this).parents('li').removeClass('active');
        }
        else{
          $(this).parents('li').addClass('active');
        }
      }
    });
  }
  var clearFilterMobile = function(){
    $('.collection-leftsidebar .sidebarMobile-clear').on(clickEv, function() {
      var url = location.pathname ;
      createUrl(url,url);
      $('#collection .collection-leftsidebar').removeClass('active');
      $('body').removeClass('active-sidebar');
    });
  }
  var clearFilterFullwidth = function(){
    $('.topCollections-clear .icon-clear').on(clickEv, function() {
      var url = location.pathname ;
      createUrl(url,url);
    });
  }
  var applyFilterMobile = function(){
    $('.sidebar-bottom .sidebarMobile-close').on(clickEv, function() {
      var url = location.pathname + "?" + newQuery;
      createUrl(url,Shopify.queryParam);
      $('.collection-leftsidebar').removeClass('active');
      $('body').removeClass('active-sidebar');
    });
  }
  var paginationCollection = function(){
    $('.pagination-collection li a').on(clickEv, function(event) {
      event.preventDefault();
      var linkPage = $(this).attr("href").match(/page=\d+/g);
      if (linkPage) {
        Shopify.queryParams.page = parseInt(linkPage[0].match(/\d+/g));
        if (Shopify.queryParams.page) {
          newQuery = jQuery.param(Shopify.queryParams).replace(/%2B/g, '+');
		  var url = location.pathname + "?" + newQuery;
          createUrl(url,Shopify.queryParam);
          $('body,html').animate({scrollTop:0},1,'swing');
        }
      }
    });
  }
  var removeFilter = function(){
    $('.collection-leftsidebar').removeClass('active');
    $('body').removeClass('active-sidebar');
  }
  var activeFilter = function(){
    $('.collection-leftsidebar').addClass('active');
    $('body').addClass('active-sidebar');
  }
  var showFilter = function(){
    $('.show-leftsidebar').on(clickEv, function() {
      if($('.collection-leftsidebar').hasClass('active')){
        removeFilter();
      }
      else{
        activeFilter();
      }
    });
    $('.close-leftsidebar').on(clickEv, function() {
      removeFilter();
    });
  }
  var collectionTopFilter = function(){
    $(".topCollections-title").on(clickEv, function() {
      var content = $(this).parents('.topCollections-block');
      if(content.hasClass('active-popup')){
        content.removeClass('active-popup');
        content.find('.topCollections-content').hide("normal");
      }
      else{
        $('.topCollections-block').removeClass('active-popup');
        $('.topCollections-content').hide("normal");
        content.addClass('active-popup');
        content.find('.topCollections-content').show("normal");
      }
    });
  }
  
  init();
  if(checkCollection != 0){
  filterClick();
  }
  clearFilterMobile();
  clearFilterFullwidth();
  applyFilterMobile();
  paginationCollection();
  showFilter();
  collectionTopFilter();
}

function handleAnimate(){
    
    $('[data-animate]').each(function(){
      
      var $toAnimateElement = $(this);
      
      var toAnimateDelay = $(this).attr('data-delay');
      
      var toAnimateDelayTime = 0;
      
      if( toAnimateDelay ) { toAnimateDelayTime = Number( toAnimateDelay ); } else { toAnimateDelayTime = 200; }
      
      if( !$toAnimateElement.hasClass('animated') ) {
        
        $toAnimateElement.addClass('not-animated');
        
        var elementAnimation = $toAnimateElement.attr('data-animate');
        
        $toAnimateElement.appear(function () {
          setTimeout(function() {
            $toAnimateElement.removeClass('not-animated').addClass( elementAnimation + ' animated');
          }, toAnimateDelayTime);
          
        },{accX: 0, accY: -50},'easeInCubic');
        
      }
    });
}

$(window).ready(function($) {
  
  handleDropdown();
  
  
    if(touch == false && getWidthBrowser() > 992 ){
      handleAnimate(); 
    }
    else{
      $('.not-animated').css("opacity","1");
    }
  
  
  tagFilterCollection();
  
  sidebarBlog();
  
  showPassword();
  
  showItemMobile();

  sliderProduct();
  
  sliderBlog();

  handleScrollTop();

  colorwarches();

  $('[data-toggle="tooltip"]').tooltip();

  handleQuantity();

  toggleTagsFilter();

  updateScrollThumbsQS();

  showMenuMobile();
});


$(window).load(function() { 
  
  

  ModalNewsletter();
  
});

/* Add to cart */

(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

var check_countdown = 0;

var GLOBAL = {
  common : {
    init: function(){
      $('html').removeClass('no-js').addClass('js');
      //searchPlaceholder();

      // @Mayank - Earlier there was logic of only do this if it's on desktop
      // It doesn't make sense anymore, instead of removing it, I have made it > 0 width which means always.
      if($(window).innerWidth() > 0 ){
        
          $('.add-to-cart').bind( 'click', addToCart );
        
      }
      else { $('.add-to-cart').bind( 'click', directAddToCart ); }
      $('.cart-form .clearAllCart').bind( 'click', clearAllCart );
    }
  },
  templateIndex : { init: function(){ }  },
  templateProduct : { init: function(){ }  },
  templateCart : { init: function(){ }  }
}

var UTIL = {
  fire : function(func,funcname, args){
    var namespace = GLOBAL;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
      namespace[func][funcname](args);
    }
  },
  loadEvents : function(){
    var bodyId = document.body.id;
    // hit up common first.
    UTIL.fire('common');
    // do all the classes too.
    $.each(document.body.className.split(/\s+/),function(i,classnm){
      UTIL.fire(classnm);
      UTIL.fire(classnm,bodyId);
    });
  }

};
$(document).ready(UTIL.loadEvents);

/* Fly image to Cart */
function flyToCart(imgobj, cart, time){
  
  if(imgobj){
    var imgsrc = imgobj.attr('src');

    imgobj.animate_from_to(cart, {
      pixels_per_second: time, 
      initial_css: {
        'image': imgsrc
      },
      callback: function(){
      }
    });
  }
}

/* Popup notify add-to-cart */
function notifyProduct($info){
    $.jGrowl($info,{
      position:'center',
      life: 500000
    });	
}

function directAddToCart(){
  $(this).submit();
}

/* Ajaxy add-to-cart */
function addToCart(e){
  check_countdown = 0;
  $('#ajax-cart-modal').show();
  if (typeof e !== 'undefined') e.preventDefault();
  var $this = $(this);
  var form = $this.parents('form');
  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    async: false,
    data: form.serialize(),
    dataType: 'json',
    error: addToCartFail,
    success: addToCartSuccess,
    cache: false
  });
  // Hide Modal
  $('.modal').modal('hide');
}

function clearAllCart(){
  if (confirm("Are you sure you want to clear all items in cart?") == true) {
    $.ajax({
      type: "POST",
      url: '/cart/clear.js',
      success: function(){
        location.reload(); 
      },
      dataType: 'json'
    });
  } else {
    
  }
}

function addToCartSuccess (jqXHR, textStatus, errorThrown){
  $.ajax({
    type: 'GET',
    url: '/cart.js',
    async: false,
    cache: false,
    dataType: 'json',
    success: updateCartDesc
  });
  Shopify.getCart(function(cart) {
    Shopify.updateCartInfo(cart, '.cart-info .cart-content');	
  });
  var $info = 'added to cart';
  var ai_image = '<a href="'+ jqXHR['url'] +'"><img src="'+ Shopify.resizeImage(jqXHR['image'], 'medium') +'" alt="'+ jqXHR['title'] +'"/></a>';
  var ai_name = '<a href="'+ jqXHR['url'] +'">'+ jqXHR['product_title'] + '</a>';
  var ai_price = '<span class="money">'+Shopify.formatMoney(jqXHR['price'], cart_money_format)+'</span>';  
  var ai_variant = ""; if(jqXHR['variant_title'] != null) ai_variant = 'Variant: '+jqXHR['variant_title'];
  var ai_qty = 'Qty: x'+$('.item-quantity').val();
  var ai_numpro = ""; if ($(".num-items-in-cart span.number").html() ==1) ai_numpro = "There is 1 item in your Shopping Bag."; else ai_numpro = "There are "+$(".num-items-in-cart span.number").html()+" items in your Shopping Bag.";
  //load data to Ajax Cart Modal
  $(".ajax-cart-note").removeClass("error");
  $(".ajax-cart-note").html($info);
  $('.ajax-cart-image').html(ai_image);
  $('.ajax-cart-product-title').html(ai_name);
  $('.ajax-cart-price').html(ai_price);
  $('.ajax-cart-variant').html(ai_variant); 
  $('.ajax-cart-qty').html(ai_qty);
  $('.ajax-cart-number-product').html(ai_numpro);
  $('.ajax-cart-loading').hide();
  $('.ajax-cart-box').show().addClass("fadeIn animated");
  countDown(0);
}

function addToCartFail(jqXHR, textStatus, errorThrown){
  var response = $.parseJSON(jqXHR.responseText);
  var $info = '<div class="error">Add to cart failure!<br/>Error: '+ response.description +'</div>';
  var ai_numpro = ""; if ($(".num-items-in-cart span.number").html() ==1) ai_numpro = "There is 1 item in your Shopping Bag."; else ai_numpro = "There are "+$(".num-items-in-cart span.number").html()+" items in your Shopping Bag.";
  $(".ajax-cart-note").addClass("error");
  $(".ajax-cart-note").html($info);
  $('.ajax-cart-image').html("");
  $('.ajax-cart-product-title').html("");
  $('.ajax-cart-price').html("");
  $('.ajax-cart-variant').html(""); 
  $('.ajax-cart-qty').html("");
  $('.ajax-cart-number-product').html(ai_numpro);
  $('.ajax-cart-loading').hide();
  $('.ajax-cart-box').show().addClass("fadeIn animated");
  countDown(0);
}

function searchPlaceholder(){

  if(!Modernizr.input.placeholder){
    $('#top-search-input').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
      })
    });
  }

}

function ajaxCartHide(){
  $("#ajax-cart-modal").addClass("zoomOut animated").fadeOut();
  $("#ajax-cart-modal").removeClass("zoomOut animated");
  check_countdown = 1;
}

/* Cart Get/Update Data */
Shopify.updateCartInfo = function(cart, cart_summary_id, cart_count_id) {
    if ((typeof cart_summary_id) === 'string') {
      var cart_summary = jQuery(cart_summary_id);
      if (cart_summary.length) {
        // Start from scratch.
        cart_summary.empty();
        // Pull it all out.
        
        jQuery.each(cart, function(key, value) {
          if (key === 'items') {
            
            if (value.length) {
              jQuery('<div class="items control-container"></div>').appendTo(cart_summary);
              var table = jQuery(cart_summary_id + ' div.items');
              jQuery.each(value, function(i, item) {
                jQuery('<div class="group_cart_item"><div class="cart-left"><a class="cart-image" href="' + item.url + '"><img src="' + Shopify.resizeImage(item.image, '250x_crop_center') + '" alt="" title=""/></a></div><div class="cart-right"><div class="cart-description"><div class="cart-title"><a href="' + item.url + '">' + item.title + '</a></div><div class="cart-qty"><span class="quantity">Qty: ' + item.quantity + '</span></div></div><div class="cart-price-close"><div class="cart-price"><span class="money">' + Shopify.formatMoney(item.price, cart_money_format) + '</span></div><a class="cart-close" title="Remove" href="javascript:void(0);" onclick="Shopify.removeItem(' + item.variant_id + ')"><span class="cs-icon icon-close"></span></a></div></div></div>').appendTo(table);
              });
              var ai_numpro = ""; if (value.length ==1) ai_numpro = "There is 1 item in your Shopping Bag."; else ai_numpro = "There are "+$(".num-items-in-cart span.number").html()+" items in your Shopping Bag.";
                       
                jQuery('<div class="subtotal-action"><div class="subtotal"><span class="title">Subtotal</span><span class="cart-total-right money">' + Shopify.formatMoney(cart.total_price, cart_money_format) + '</span></div><div class="action"><button class="_btn" onclick="window.location=\'/cart\'">View Cart</button><button class="_btn float-right" onclick="window.location=\'/checkout\'">Check Out</button></div></div>').appendTo(cart_summary);
            
            }
            else {
              jQuery('<div class="empty text-center"><em>Your shopping cart is empty. <a href="/collections/all" class="_btn">Continue Shopping</a></em></div>').appendTo(cart_summary);
            }
          }
        });
      }
    }
    // Update cart count.
    if ((typeof cart_count_id) === 'string') {
      if (cart.item_count == 0) { 
        jQuery('#' + cart_count_id).html('your cart is empty');
       
      }
      else if (cart.item_count == 1) {
        jQuery('#' + cart_count_id).html('1 item in your cart');
      }
        else {
          jQuery('#' + cart_count_id).html(cart.item_count + ' item(s) in the shopping cart');
        }
    }
    wishlist_init();                                       
    wishlist_add();
    /* Update cart info */
    updateCartDesc(cart);
  };
  
  function updateCartDesc(data){
    var $cartLinkText = $('.num-items-in-cart .number');
    //var $cartPrice = '<span class="total"> - '+ Shopify.formatMoney(data.total_price, cart_money_format) +'</span>';
    switch(data.item_count){
      case 0:
        $cartLinkText.html('0');
        break;
      case 1:
        $cartLinkText.html('1');                
        break;
      default:
        $cartLinkText.html(data.item_count);
        break;
    }
    $('.ajax-cart-subtotal').html("<span class='money'>"+Shopify.formatMoney(data.total_price, cart_money_format)+"</span>");
    
    $('.price_text').html("<span class='money'>"+Shopify.formatMoney(data.total_price, cart_money_format)+"</span>");
    
  }
  
  Shopify.onCartUpdate = function(cart) {
    Shopify.updateCartInfo(cart, '.cart-info .cart-content', 'shopping-cart');
  };
     
            
  $(window).load(function() {
    // Let's get the cart and show what's in it in the cart box.	
    Shopify.getCart(function(cart) {      
      Shopify.updateCartInfo(cart, '.cart-info .cart-content');		
    });
  });
    
  function countDown(count) {
    if (count > 0) {
       if(count > 1) $(".countDiv").html("This popup will auto close after <span>"+count+"</span> seconds"); else $(".countDiv").html("This popup will auto close after <span>"+count+"</span> second");
      if(check_countdown == 1){
        setTimeout (function() { countDown(0); }, 0);
      }
      else{
        setTimeout (function() { countDown(count-1); }, 1000);
      }
    }
    else
       ajaxCartHide();
  }
if ((typeof Shopify) == 'undefined') {
  var Shopify = {};
}


// ---------------------------------------------------------------------------
// Shopify generic helper methods
// ---------------------------------------------------------------------------
Shopify.each = function(ary, callback) {
  for (var i = 0; i < ary.length; i++) {
    callback(ary[i], i);
  }
};

Shopify.map = function(ary, callback) {
  var result = [];
  for (var i = 0; i < ary.length; i++) {
    result.push(callback(ary[i], i));
  }
  return result;
};

Shopify.arrayIncludes = function(ary, obj) {
  for (var i = 0; i < ary.length; i++) {
    if (ary[i] == obj) {
      return true;
    }
  }
  return false;
};

Shopify.uniq = function(ary) {
  var result = [];
  for (var i = 0; i < ary.length; i++) {
    if (!Shopify.arrayIncludes(result, ary[i])) { result.push(ary[i]); }
  }
  return result;
};

Shopify.isDefined = function(obj) {
  return ((typeof obj == 'undefined') ? false : true);
};

Shopify.getClass = function(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};

Shopify.extend = function(subClass, baseClass) {
  function inheritance() {}
  inheritance.prototype = baseClass.prototype;

  subClass.prototype = new inheritance();
  subClass.prototype.constructor = subClass;
  subClass.baseConstructor = baseClass;
  subClass.superClass = baseClass.prototype;
};

Shopify.urlParam = function(name) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}



// ---------------------------------------------------------------------------
// Shopify Product object
// JS representation of Product
// ---------------------------------------------------------------------------
Shopify.Product = function(json) {
  if (Shopify.isDefined(json)) { this.update(json); }
};

Shopify.Product.prototype.update = function(json) {
  for (property in json) {
    this[property] = json[property];
  }
};

// returns array of option names for product
Shopify.Product.prototype.optionNames = function() {
  if (Shopify.getClass(this.options) == 'Array') {
    return this.options;
  } else {
    return [];
  }
};

// returns array of all option values (in order) for a given option name index
Shopify.Product.prototype.optionValues = function(index) {
  if (!Shopify.isDefined(this.variants)) { return null; }
  var results = Shopify.map(this.variants, function(e) {
    var option_col = "option" + (index+1);
    return (e[option_col] == undefined) ? null : e[option_col];
  });
  return (results[0] == null ? null : Shopify.uniq(results));
};

// return the variant object if exists with given values, otherwise return null
Shopify.Product.prototype.getVariant = function(selectedValues) {
  var found = null;
  if (selectedValues.length != this.options.length) { return found; }

  Shopify.each(this.variants, function(variant) {
    var satisfied = true;
    for (var j = 0; j < selectedValues.length; j++) {
      var option_col = "option"+(j+1);
      if (variant[option_col] != selectedValues[j]) {
        satisfied = false;
      }
    }
    if (satisfied == true) {
      found = variant;
      return;
    }
  });
  return found;
};

Shopify.Product.prototype.getVariantById = function(id) {
  for (var i = 0; i < this.variants.length; i++) {
    var variant = this.variants[i];

    if (id == variant.id) {
      return variant;
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// Money format handler
// ---------------------------------------------------------------------------
Shopify.money_format = "${{amount}}";

Shopify.formatMoney = function(cents, format) {

  if (typeof cents == 'string') { cents = cents.replace('.',''); }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = (format || this.money_format);
  function defaultOption(opt, def) {
     return (typeof opt == 'undefined' ? def : opt);
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal   = defaultOption(decimal, '.');

    if (isNaN(number) || number == null) { return 0; }

    number = (number/100.0).toFixed(precision);

    var parts   = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents   = parts[1] ? (decimal + parts[1]) : '';

    return dollars + cents;
  }
  
  switch(formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }
  
  return formatString.replace(placeholderRegex, value);
}

function floatToString(numeric, decimals) {
  var amount = numeric.toFixed(decimals).toString();
  if(amount.match(/^\.\d+/)) {return "0"+amount; }
  else { return amount; }
};
// ---------------------------------------------------------------------------
// OptionSelectors(domid, options)
//
// ---------------------------------------------------------------------------
Shopify.OptionSelectors = function(existingSelectorId, options) {
  this.selectorDivClass       = 'selector-wrapper';
  this.selectorClass          = 'single-option-selector';
  this.variantIdFieldIdSuffix = '-variant-id';

  this.variantIdField    = null;
  this.historyState      = null;
  this.selectors         = [];
  this.domIdPrefix       = existingSelectorId;
  this.product           = new Shopify.Product(options.product);
  this.onVariantSelected = Shopify.isDefined(options.onVariantSelected) ? options.onVariantSelected : function(){};

  this.replaceSelector(existingSelectorId); // create the dropdowns
  this.initDropdown();

  if (options.enableHistoryState) {
    this.historyState = new Shopify.OptionSelectors.HistoryState(this);
  }

  return true;
};

Shopify.OptionSelectors.prototype.initDropdown = function () {
  var options = {initialLoad: true};
  var successDropdownSelection = this.selectVariantFromDropdown(options);

  if (!successDropdownSelection) {
    var self = this;
    setTimeout(function () {
      if (!self.selectVariantFromParams(options)) {
        self.fireOnChangeForFirstDropdown.call(self, options);
      }
    });
  }
};

Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown = function (options) {
  this.selectors[0].element.onchange(options);
};

Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown = function (options) {
  var success = this.selectVariantFromParams(options)

  if (!success) {
    this.selectVariantFromDropdown(options);
  }
};

// insert new multi-selectors and hide original selector
Shopify.OptionSelectors.prototype.replaceSelector = function(domId) {
  var oldSelector = document.getElementById(domId);
  var parent = oldSelector.parentNode;
  Shopify.each(this.buildSelectors(), function(el) {
    parent.insertBefore(el, oldSelector);
  });
  oldSelector.style.display = 'none';
  this.variantIdField = oldSelector;
};

Shopify.OptionSelectors.prototype.selectVariantFromDropdown = function (options) {
  var option = document.getElementById(this.domIdPrefix).querySelector("[selected]");

  if (!option) {
    return false;
  }

  var variantId = option.value;
  return this.selectVariant(variantId, options);
};

Shopify.OptionSelectors.prototype.selectVariantFromParams = function (options) {
  var variantId = Shopify.urlParam("variant");
  return this.selectVariant(variantId, options);
};

Shopify.OptionSelectors.prototype.selectVariant = function (variantId, options) {
  var variant  = this.product.getVariantById(variantId);

  if (variant == null) {
    return false;
  }

  for (var i = 0; i < this.selectors.length; i++) {
    var element = this.selectors[i].element;
    var optionName = element.getAttribute("data-option")
    var value = variant[optionName];
    if (value == null || !this.optionExistInSelect(element, value)) {
      continue;
    }

    element.value = value;
  }

  if (typeof jQuery !== 'undefined') {
    jQuery(this.selectors[0].element).trigger('change', options);
  } else {
    this.selectors[0].element.onchange(options);
  }

  return true;
};

Shopify.OptionSelectors.prototype.optionExistInSelect = function (select, value) {
  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].value == value) {
      return true;
    }
  }
};

// insertSelectors(domId, msgDomId)
// create multi-selectors in the given domId, and use msgDomId to show messages
Shopify.OptionSelectors.prototype.insertSelectors = function(domId, messageElementId) {
  if (Shopify.isDefined(messageElementId)) { this.setMessageElement(messageElementId); }

  this.domIdPrefix = "product-" + this.product.id + "-variant-selector";

  var parent = document.getElementById(domId);
  Shopify.each(this.buildSelectors(), function(el) {
    parent.appendChild(el);
  });
};

// buildSelectors(index)
// create and return new selector element for given option
Shopify.OptionSelectors.prototype.buildSelectors = function() {
  // build selectors
  for (var i = 0; i < this.product.optionNames().length; i++) {
    var sel = new Shopify.SingleOptionSelector(this, i, this.product.optionNames()[i], this.product.optionValues(i));
    sel.element.disabled = false;
    this.selectors.push(sel);
  }

  // replace existing selector with new selectors, new hidden input field, new hidden messageElement
  var divClass = this.selectorDivClass;
  var optionNames = this.product.optionNames();
  var elements = Shopify.map(this.selectors, function(selector) {
    var div = document.createElement('div');
    div.setAttribute('class', divClass);
    // create label if more than 1 option (ie: more than one drop down)
    if (optionNames.length > 1) {
      // create and appened a label into div
      var label = document.createElement('label');
      label.htmlFor = selector.element.id;
      label.innerHTML = selector.name;
      div.appendChild(label);
    }
    div.appendChild(selector.element);
    return div;
  });

  return elements;
};

// returns array of currently selected values from all multiselectors
Shopify.OptionSelectors.prototype.selectedValues = function() {
  var currValues = [];
  for (var i = 0; i < this.selectors.length; i++) {
    var thisValue = this.selectors[i].element.value;
    currValues.push(thisValue);
  }
  return currValues;
};

// callback when a selector is updated.
Shopify.OptionSelectors.prototype.updateSelectors = function(index, options) {
  var currValues = this.selectedValues(); // get current values
  var variant    = this.product.getVariant(currValues);
  if (variant) {
    this.variantIdField.disabled = false;
    this.variantIdField.value = variant.id; // update hidden selector with new variant id
  } else {
    this.variantIdField.disabled = true;
  }

  this.onVariantSelected(variant, this, options);  // callback

  if (this.historyState != null) {
    this.historyState.onVariantChange(variant, this, options);
  }
};

// ---------------------------------------------------------------------------
// OptionSelectorsFromDOM(domid, options)
//
// ---------------------------------------------------------------------------

Shopify.OptionSelectorsFromDOM = function(existingSelectorId, options){
  // build product json from selectors
  // create new options hash
  var optionNames = options.optionNames || [];
  var priceFieldExists = options.priceFieldExists || true;
  var delimiter = options.delimiter || '/';
  var productObj = this.createProductFromSelector(existingSelectorId, optionNames, priceFieldExists, delimiter);
  options.product = productObj;
  Shopify.OptionSelectorsFromDOM.baseConstructor.call(this, existingSelectorId, options);
};

Shopify.extend(Shopify.OptionSelectorsFromDOM, Shopify.OptionSelectors);

// updates the product_json from existing select element
Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector = function(domId, optionNames, priceFieldExists, delimiter) {
  if (!Shopify.isDefined(priceFieldExists)) { var priceFieldExists = true; }
  if (!Shopify.isDefined(delimiter)) { var delimiter = '/'; }

  var oldSelector = document.getElementById(domId);
  var options = oldSelector.childNodes;
  var parent = oldSelector.parentNode;

  var optionCount = optionNames.length;

  // build product json + messages array
  var variants = [];
  var self = this;
  Shopify.each(options, function(option, variantIndex) {
    if (option.nodeType == 1 && option.tagName.toLowerCase() == 'option') {
      var chunks = option.innerHTML.split(new RegExp('\\s*\\'+ delimiter +'\\s*'));

      if (optionNames.length == 0) {
        optionCount = chunks.length - (priceFieldExists ? 1 : 0);
      }

      var optionOptionValues = chunks.slice(0, optionCount);
      var message = (priceFieldExists ? chunks[optionCount] : '');
      var variantId = option.getAttribute('value');

      var attributes = {
        available: (option.disabled ? false : true),
        id:  parseFloat(option.value),
        price: message,
        option1: optionOptionValues[0],
        option2: optionOptionValues[1],
        option3: optionOptionValues[2]
      };
      variants.push(attributes);
     
    }
  });
  var updateObj = { variants: variants };
  if (optionNames.length == 0) {
    updateObj.options = [];
    for (var i=0;i<optionCount;i++) { updateObj.options[i] = ('option ' + (i + 1)) }
  } else {
    updateObj.options = optionNames;
  }
  return updateObj;
};


// ---------------------------------------------------------------------------
// SingleOptionSelector
// takes option name and values and creates a option selector from them
// ---------------------------------------------------------------------------
Shopify.SingleOptionSelector = function(multiSelector, index, name, values) {
  this.multiSelector = multiSelector;
  this.values = values;
  this.index = index;
  this.name = name;
  this.element = document.createElement('select');
  for (var i = 0; i < values.length; i++) {
    var opt = document.createElement('option');
    opt.value = values[i];
    opt.innerHTML = values[i];
    this.element.appendChild(opt);
  }
  this.element.setAttribute('class', this.multiSelector.selectorClass);
  this.element.setAttribute('data-option', 'option' + (index+1));
  this.element.id = multiSelector.domIdPrefix + '-option-' + index;
  this.element.onchange = function(event, options) {
    options = options || {};

    multiSelector.updateSelectors(index, options);
  };

  return true;
};

// ---------------------------------------------------------------------------
// Image.switchImage
// helps to switch variant images on variant selection
// ---------------------------------------------------------------------------
Shopify.Image = {

  preload: function (images, size) {
    for (var i=0; i < images.length; i++) {
      var image = images[i];

      this.loadImage(this.getSizedImageUrl(image, size));
    }
  },

  loadImage: function (path) {
    new Image().src = path;
  },

  switchImage: function (image, element, callback) {
    if (!image || !element) {
      return;
    }

    var size = this.imageSize(element.src)
    var imageUrl = this.getSizedImageUrl(image.src, size);

    if (callback) {
      callback(imageUrl, image, element);
    } else {
      element.src = imageUrl;
    }
  },

  imageSize: function (src) {
    var match = src.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);

    if (match != null) {
      return match[1];
    } else {
      return null;
    }
  },

  getSizedImageUrl: function (src, size) {
    if (size == null) {
      return src;
    }

    if (size == 'master') {
      return this.removeProtocol(src);
    }

    var match  = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

    if (match != null) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + "_" + size + suffix);
    } else {
      return null;
    }
  },

  removeProtocol: function (path) {
    return path.replace(/http(s)?:/, "");
  }
};

// ---------------------------------------------------------------------------
// Shopify.HistoryState
// Gets events from Push State
// ---------------------------------------------------------------------------

Shopify.OptionSelectors.HistoryState = function (optionSelector) {
  if (this.browserSupports()) {
    this.register(optionSelector);
  }
};

Shopify.OptionSelectors.HistoryState.prototype.register = function (optionSelector) {
  window.addEventListener("popstate", function(event) {
    optionSelector.selectVariantFromParamsOrDropdown({popStateCall: true});
  });
};

Shopify.OptionSelectors.HistoryState.prototype.onVariantChange = function (variant, selector, data) {
  if (this.browserSupports()) {
    if (variant && !data.initialLoad && !data.popStateCall) {
      //window.history.replaceState({}, document.title, "?variant=" + variant.id);
    }
  }
};

Shopify.OptionSelectors.HistoryState.prototype.browserSupports = function () {
  return window.history && window.history.replaceState;
};

//Wishlist Area
function wishlist_init(){       
  if(localStorage.getItem('cs-wishlist') == null || localStorage.getItem('cs-wishlist') == '[]' ){
    $('#wishlistcontent .none').css( 'display', 'block' );
    $('#wishlistcontent .wishlist-count').css( 'display', 'none' );
    $('#wishlistcontent ul').css( 'display', 'none' );
  }
  else{
    var activeID = [];
    activeID = JSON.parse(localStorage.getItem('cs-wishlist'));
    for(i=0; i<activeID.length; i++ ){
      var classadded = '.wishlist-'+activeID[i];        
      $(classadded).addClass("wishlist-added").removeClass("wishlist");
      //DON'T REDIRECT
      //$(classadded).attr("href", "/pages/wish-list");
    }
  }
}

function wishlist_add(){
  $( "a.wishlist" ).on( "click", function(e) {
    if(!$(this).hasClass('wishlist-added')){
      e.preventDefault();                        
	  $('#quick-shop-modal').modal('hide');
      //store product ID      
      var storeID = [];        
      if(localStorage.getItem('cs-wishlist') == null )
        storeID = [];
      else
        storeID = JSON.parse(localStorage.getItem('cs-wishlist'));
      storeID.push($(this).data("wishlisthandle"));        
      localStorage.setItem('cs-wishlist', JSON.stringify(storeID));        

      //add class and update count
      $('.wishlist-'+$(this).data("wishlisthandle")).addClass("wishlist-added").removeClass("wishlist"); 
      //DON'T REDIRECT
      //$('.wishlist-'+$(this).data("wishlisthandle")).attr("href", "/pages/wish-list");
      
      var url="/products/"+$(this).data("wishlisthandle")+".js";
      var content = '#modalwishlist1';
      jQuery.getJSON(url, function(product) {
        $("#modalwishlist1").find('.wishlist-image').attr('class','wishlist-image modal-image wishlist-image-'+product.id);
        $("#modalwishlist1").find('.wishlist-image').html('<img src="'+product.featured_image+'" alt="'+product.title+'" />');
        $("#modalwishlist1").find('.wishlist-name').html('<a href="'+product.url+'">'+product.title+'</a>'); 
        $("#modalwishlist1").find('.wishlist-price').attr('class','wishlist-price wishlist-price-'+product.id);
        $("#modalwishlist1").find('.variants-form').attr('id','wishlist-form-cart-'+product.id);
        $("#modalwishlist1").find('.add-to-cart').attr('id','wishlist-addToCart-'+product.id);
        $("#modalwishlist1").find('.variants-wrapper').attr('id','wishlist-variants-container-'+product.id);
        
        addToVariantsWishlist(product);
      });
      
      //Don't show wish list modal
      //$('#modalwishlist1').modal();
    }     
  });
}  

function wishlist_check(){    
  $( ".wishlist-class" ).on( "click", function(e) {
    if(localStorage.getItem('cs-wishlist') == null ){
      $('#modalwishlist0').modal();        
      e.preventDefault();
    }
  });
}

function wishlist_show(){    
  var cont = '#wishlistcontent ul',
      productjson = '/products.js',
      getID= [];
  if(localStorage.getItem('cs-wishlist') != null ){
    getID = JSON.parse(localStorage.getItem('cs-wishlist'));
    $('.wishlist-page .wishlist-count').html(getID.length+' Saved products');
    for(j=0; j<getID.length; j++){
      var url = "/products/"+getID[j]+".js";
      
      jQuery.getJSON(url, function(product) {
        var wcn = ".wishlist-"+product.handle;              
        $(cont).append('<li class="wlr wishlist-'+product.handle+'"><div class="wishlist-image wishlist-image-'+product.id+'"></div><div class="wishlist-name"></div><div class="wishlist-price wishlist-price-'+product.id+'"></div><div class="wishlist-addCart"></div><div class="wishlist-remove" data-wishlisthandle="'+product.handle+'"><span class="cs-icon icon-close"></span></div></li>');                    
        $(wcn).find('.wishlist-image-'+product.id).append('<img src="'+product.featured_image+'" alt="" />');
        $(wcn).find('.wishlist-name').append('<a href="'+product.url+'">'+product.title+'</a>');
        
        $(wcn).find('.wishlist-addCart').append('<form action="/cart/add" method="post" class="variants" id="wishlist-form-cart-'+product.id+'" enctype="multipart/form-data"><div id="wishlist-variants-container-'+product.id+'" class="variants-wrapper"></div> <div class="quantity-content"><label>QTY</label><input type="text" size="5" class="item-quantity item-quantity-qs" name="quantity" value="1" /></div><div class="others-bottom"><a id="wishlist-addToCart-'+product.id+'" class=" wishlist-addToCart _btn btn-quick-shop add-to-cart">Add to cart</a></div></form>');  
                            
        addToVariantsWishlist(product);
        
        $(GLOBAL['common']['init']);
        
        $(wcn).find('.wishlist-remove').on("click", function(){ 
          $(wcn).hide("fade");
          var storeID2= [],
              ri = $(this).data("wishlisthandle");            
          storeID2 = JSON.parse(localStorage.getItem('cs-wishlist'));            
          storeID2 = jQuery.grep(storeID2, function(value) {
            return value != ri;
          });
          localStorage.setItem('cs-wishlist', JSON.stringify(storeID2));
          if(storeID2.length == 0){
            $('#wishlistcontent .none').css( 'display', 'block' );
            $('#wishlistcontent .wishlist-count').css( 'display', 'none' );
            $('#wishlistcontent ul').css( 'display', 'none' );
          } 
          $('.wishlist-page .wishlist-count').html(storeID2.length+' Saved products');
        });
        $(wcn).find('.wishlist-detail').append('<a href="'+product.url+'">View More</a>');
        
      });
      
    }
  }
  else{
    $('.wishlist-0').hide();
    $('#wishlistcontent .none').show();
  }
  
}

function addToVariantsWishlist(product){
  var selectedProduct = product;
  
  var selectedProductID = selectedProduct.id;
  var productVariants = selectedProduct.variants;
  var quickShopVariantsContainer = $('#wishlist-variants-container-'+selectedProductID);
  var quickShopAddButton = $('#wishlist-addToCart-'+selectedProductID);
  var quickShopAddToCartButton = $('#wishlist-addToCart-'+selectedProductID); 
  quickShopVariantsContainer.html('');
  var productVariantsCount = product.variants.length;
  var quickShopPriceContainer = $('.wishlist-price-'+selectedProductID);
  if (productVariantsCount > 1) {  
        // Reveal variants container
        quickShopVariantsContainer.show();
          
        // Build variants element
        var quickShopVariantElement = $('<select>',{ 'id': ('wishlist-variants-' + selectedProductID) , 'name': 'id'});
        var quickShopVariantOptions = '';
        for (var i=0; i < productVariantsCount; i++) {
          quickShopVariantOptions += '<option value="'+ productVariants[i].id +'">'+ productVariants[i].title +'</option>'
        };
        
        // Add variants element to page
        quickShopVariantElement.append(quickShopVariantOptions);
        quickShopVariantsContainer.append(quickShopVariantElement);
          
        // Bind variants to OptionSelect JS
    
        new Shopify.OptionSelectors(('wishlist-variants-' + selectedProductID), { product: selectedProduct, onVariantSelected: selectOptionCallbackWishlist });
        
        for( var i=0; i < selectedProduct.options.length ; i++ ){
          $('#wishlist-variants-'+selectedProductID+'-option-'+i).parent().find('label').html(selectedProduct.options[i].name);
        }  
        // Add label if only one product option and it isn't 'Title'.
        if (selectedProduct.options.length == 1 && selectedProduct.options[0] != 'Title' ){
          $('#wishlist-variants-container-'+selectedProductID+' .selector-wrapper:eq(0)').prepend('<label>'+ selectedProduct.options[0].name +'</label>');
        }
      }
  else { // If product only has a single variant    
        // Hide unnecessary variants container
        quickShopVariantsContainer.hide();  
        // Build variants element
        var quickShopVariantElement = $('<select>',{ 'id': ('wishlist-variants-' + selectedProductID) , 'name': 'id'});
        var quickShopVariantOptions = '';
          
        for (var i=0; i < productVariantsCount; i++) {
          quickShopVariantOptions += '<option value="'+ productVariants[i].id +'">'+ productVariants[i].title +'</option>'
        };
        quickShopVariantElement.append(quickShopVariantOptions);
        quickShopVariantsContainer.append(quickShopVariantElement);  
        quickShopAddToCartButton.removeAttr('disabled').fadeTo(200,1);
        quickShopAddToCartButton.data('variant-id', productVariants[0].id);
        if (selectedProduct && selectedProduct.available) {
          if ( productVariants[0].compare_at_price > 0 && productVariants[0].compare_at_price > productVariants[0].price ) {
            quickShopPriceContainer.html('<span class="price">'+ Shopify.formatMoney(productVariants[0].price, quickShop_money_format) +'</span>'+'<del class="price_compare">'+ Shopify.formatMoney(productVariants[0].compare_at_price, quickShop_money_format) + '</del>' );
          } else {
            quickShopPriceContainer.html('<span class="price">'+ Shopify.formatMoney(productVariants[0].price, quickShop_money_format) + '</span>' );
          }  
        }
        else {
		  quickShopAddToCartButton.attr('disabled', 'disabled').fadeTo(200,0.5);
          var message = selectedProduct ? "Sold Out" : "Unavailable";    
          quickShopPriceContainer.html('<span class="unavailable">' + message + '</span>');
        }
      } // END of (productVariantsCount > 1)
  
}
/* selectOptionCallback
    ===================================== */
var selectOptionCallbackWishlist = function(variant, selector) {
  var quickShopAddButton = $('#wishlist-addToCart-'+selector.product.id);
  var quickShopAddToCartButton = $('#wishlist-addToCart-'+selector.product.id); 
  
  var quickShopPriceContainer = $('.wishlist-price-'+selector.product.id);
  //change image
  if (variant && variant.featured_image) {
    var newImage = variant.featured_image; // New image object.
    $('.wishlist-image-'+variant.featured_image.product_id+' img').attr('src',newImage.src);
  }

  //change
  if (variant && variant.available) {
    quickShopAddToCartButton.data('variant-id', variant.id);
    quickShopAddToCartButton.removeAttr('disabled').fadeTo(200,1);        
    // determine if variant is on sale
    if ( variant.compare_at_price > 0 && variant.compare_at_price > variant.price ) {
      quickShopPriceContainer.html('<span class="price">'+ Shopify.formatMoney(variant.price, quickShop_money_format) +'</span>' + '<del class="price_compare">'+ Shopify.formatMoney(variant.compare_at_price, quickShop_money_format) + '</del>');
    } else {
      quickShopPriceContainer.html('<span class="price">'+ Shopify.formatMoney(variant.price, quickShop_money_format) + '</span>' );
    };     
    // selected an invalid or out of stock variant 
  } else {
    // variant doesn't exist
    quickShopAddToCartButton.attr('disabled', 'disabled').fadeTo(200,0.5);
    var message = variant ? "Sold Out" : "Unavailable";    
    quickShopPriceContainer.html('<span class="unavailable">' + message + '</span>');         
  }
  //swatch
  var form = jQuery('.quick-shop form.variants');
  if(variant!=null){
    for (var i=0,length=variant.options.length; i<length; i++) {
      var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]');
      if (radioButton.size()) {
        radioButton.get(0).checked = true;
      }
    }
  }

  
} 
$(window).ready(function($) {
  //LocalStore
  wishlist_init();
  wishlist_check();
  wishlist_add();
  if(wishlistpage == 1) wishlist_show();
});
/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie = function(b, j, m) {
    if (typeof j != "undefined") {
        m = m || {};
        if (j === null) {
            j = "";
            m.expires = -1
        }
        var e = "";
        if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
            var f;
            if (typeof m.expires == "number") {
                f = new Date();
                f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
            } else {
                f = m.expires
            }
            e = "; expires=" + f.toUTCString()
        }
        var l = m.path ? "; path=" + (m.path) : "";
        var g = m.domain ? "; domain=" + (m.domain) : "";
        var a = m.secure ? "; secure" : "";
        document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
    } else {
        var d = null;
        if (document.cookie && document.cookie != "") {
            var k = document.cookie.split(";");
            for (var h = 0; h < k.length; h++) {
                var c = jQuery.trim(k[h]);
                if (c.substring(0, b.length + 1) == (b + "=")) {
                    d = decodeURIComponent(c.substring(b.length + 1));
                    break
                }
            }
        }
        return d
    }
};

/*
 * Currency tools
 *
 * Copyright (c) 2015 Caroline Schnapp (mllegeorgesand@gmail.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */


if (typeof Currency === "undefined") {
    var Currency = {}
}
Currency.cookie = {
    configuration: {
        expires: 365,
        path: "/",
        domain: window.location.hostname
    },
    name: "currency",
    write: function(a) {
        jQuery.cookie(this.name, a, this.configuration)
    },
    read: function() {
        return jQuery.cookie(this.name)
    },
    destroy: function() {
        jQuery.cookie(this.name, null, this.configuration)
    }
};
Currency.moneyFormats = {
    USD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} USD"
    },
    EUR: {
        money_format: "€{{amount}}",
        money_with_currency_format: "€{{amount}} EUR"
    },
    GBP: {
        money_format: "£{{amount}}",
        money_with_currency_format: "£{{amount}} GBP"
    },
    CAD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} CAD"
    },
    ALL: {
        money_format: "Lek {{amount}}",
        money_with_currency_format: "Lek {{amount}} ALL"
    },
    DZD: {
        money_format: "DA {{amount}}",
        money_with_currency_format: "DA {{amount}} DZD"
    },
    AOA: {
        money_format: "Kz{{amount}}",
        money_with_currency_format: "Kz{{amount}} AOA"
    },
    ARS: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} ARS"
    },
    AMD: {
        money_format: "{{amount}} AMD",
        money_with_currency_format: "{{amount}} AMD"
    },
    AWG: {
        money_format: "Afl{{amount}}",
        money_with_currency_format: "Afl{{amount}} AWG"
    },
    AUD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} AUD"
    },
    BBD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} Bds"
    },
    AZN: {
        money_format: "m.{{amount}}",
        money_with_currency_format: "m.{{amount}} AZN"
    },
    BDT: {
        money_format: "Tk {{amount}}",
        money_with_currency_format: "Tk {{amount}} BDT"
    },
    BSD: {
        money_format: "BS${{amount}}",
        money_with_currency_format: "BS${{amount}} BSD"
    },
    BHD: {
        money_format: "{{amount}}0 BD",
        money_with_currency_format: "{{amount}}0 BHD"
    },
    BYR: {
        money_format: "Br {{amount}}",
        money_with_currency_format: "Br {{amount}} BYR"
    },
    BZD: {
        money_format: "BZ${{amount}}",
        money_with_currency_format: "BZ${{amount}} BZD"
    },
    BTN: {
        money_format: "Nu {{amount}}",
        money_with_currency_format: "Nu {{amount}} BTN"
    },
    BAM: {
        money_format: "KM {{amount_with_comma_separator}}",
        money_with_currency_format: "KM {{amount_with_comma_separator}} BAM"
    },
    BRL: {
        money_format: "R$ {{amount_with_comma_separator}}",
        money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL"
    },
    BOB: {
        money_format: "Bs{{amount_with_comma_separator}}",
        money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB"
    },
    BWP: {
        money_format: "P{{amount}}",
        money_with_currency_format: "P{{amount}} BWP"
    },
    BND: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} BND"
    },
    BGN: {
        money_format: "{{amount}} лв",
        money_with_currency_format: "{{amount}} лв BGN"
    },
    MMK: {
        money_format: "K{{amount}}",
        money_with_currency_format: "K{{amount}} MMK"
    },
    KHR: {
        money_format: "KHR{{amount}}",
        money_with_currency_format: "KHR{{amount}}"
    },
    KYD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} KYD"
    },
    XAF: {
        money_format: "FCFA{{amount}}",
        money_with_currency_format: "FCFA{{amount}} XAF"
    },
    CLP: {
        money_format: "${{amount_no_decimals}}",
        money_with_currency_format: "${{amount_no_decimals}} CLP"
    },
    CNY: {
        money_format: "¥{{amount}}",
        money_with_currency_format: "¥{{amount}} CNY"
    },
    COP: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} COP"
    },
    CRC: {
        money_format: "₡ {{amount_with_comma_separator}}",
        money_with_currency_format: "₡ {{amount_with_comma_separator}} CRC"
    },
    HRK: {
        money_format: "{{amount_with_comma_separator}} kn",
        money_with_currency_format: "{{amount_with_comma_separator}} kn HRK"
    },
    CZK: {
        money_format: "{{amount_with_comma_separator}} Kč",
        money_with_currency_format: "{{amount_with_comma_separator}} Kč"
    },
    DKK: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "kr.{{amount_with_comma_separator}}"
    },
    DOP: {
        money_format: "RD$ {{amount}}",
        money_with_currency_format: "RD$ {{amount}}"
    },
    XCD: {
        money_format: "${{amount}}",
        money_with_currency_format: "EC${{amount}}"
    },
    EGP: {
        money_format: "LE {{amount}}",
        money_with_currency_format: "LE {{amount}} EGP"
    },
    ETB: {
        money_format: "Br{{amount}}",
        money_with_currency_format: "Br{{amount}} ETB"
    },
    XPF: {
        money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF"
    },
    FJD: {
        money_format: "${{amount}}",
        money_with_currency_format: "FJ${{amount}}"
    },
    GMD: {
        money_format: "D {{amount}}",
        money_with_currency_format: "D {{amount}} GMD"
    },
    GHS: {
        money_format: "GH₵{{amount}}",
        money_with_currency_format: "GH₵{{amount}}"
    },
    GTQ: {
        money_format: "Q{{amount}}",
        money_with_currency_format: "{{amount}} GTQ"
    },
    GYD: {
        money_format: "G${{amount}}",
        money_with_currency_format: "${{amount}} GYD"
    },
    GEL: {
        money_format: "{{amount}} GEL",
        money_with_currency_format: "{{amount}} GEL"
    },
    HNL: {
        money_format: "L {{amount}}",
        money_with_currency_format: "L {{amount}} HNL"
    },
    HKD: {
        money_format: "${{amount}}",
        money_with_currency_format: "HK${{amount}}"
    },
    HUF: {
        money_format: "{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft"
    },
    ISK: {
        money_format: "{{amount_no_decimals}} kr",
        money_with_currency_format: "{{amount_no_decimals}} kr ISK"
    },
    INR: {
        money_format: "Rs. {{amount}}",
        money_with_currency_format: "Rs. {{amount}}"
    },
    IDR: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "Rp {{amount_with_comma_separator}}"
    },
    ILS: {
        money_format: "{{amount}} NIS",
        money_with_currency_format: "{{amount}} NIS"
    },
    JMD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} JMD"
    },
    JPY: {
        money_format: "¥{{amount_no_decimals}}",
        money_with_currency_format: "¥{{amount_no_decimals}} JPY"
    },
    JEP: {
        money_format: "£{{amount}}",
        money_with_currency_format: "£{{amount}} JEP"
    },
    JOD: {
        money_format: "{{amount}}0 JD",
        money_with_currency_format: "{{amount}}0 JOD"
    },
    KZT: {
        money_format: "{{amount}} KZT",
        money_with_currency_format: "{{amount}} KZT"
    },
    KES: {
        money_format: "KSh{{amount}}",
        money_with_currency_format: "KSh{{amount}}"
    },
    KWD: {
        money_format: "{{amount}}0 KD",
        money_with_currency_format: "{{amount}}0 KWD"
    },
    KGS: {
        money_format: "лв{{amount}}",
        money_with_currency_format: "лв{{amount}}"
    },
    LVL: {
        money_format: "Ls {{amount}}",
        money_with_currency_format: "Ls {{amount}} LVL"
    },
    LBP: {
        money_format: "L£{{amount}}",
        money_with_currency_format: "L£{{amount}} LBP"
    },
    LTL: {
        money_format: "{{amount}} Lt",
        money_with_currency_format: "{{amount}} Lt"
    },
    MGA: {
        money_format: "Ar {{amount}}",
        money_with_currency_format: "Ar {{amount}} MGA"
    },
    MKD: {
        money_format: "ден {{amount}}",
        money_with_currency_format: "ден {{amount}} MKD"
    },
    MOP: {
        money_format: "MOP${{amount}}",
        money_with_currency_format: "MOP${{amount}}"
    },
    MVR: {
        money_format: "Rf{{amount}}",
        money_with_currency_format: "Rf{{amount}} MRf"
    },
    MXN: {
        money_format: "$ {{amount}}",
        money_with_currency_format: "$ {{amount}} MXN"
    },
    MYR: {
        money_format: "RM{{amount}} MYR",
        money_with_currency_format: "RM{{amount}} MYR"
    },
    MUR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} MUR"
    },
    MDL: {
        money_format: "{{amount}} MDL",
        money_with_currency_format: "{{amount}} MDL"
    },
    MAD: {
        money_format: "{{amount}} dh",
        money_with_currency_format: "Dh {{amount}} MAD"
    },
    MNT: {
        money_format: "{{amount_no_decimals}} ₮",
        money_with_currency_format: "{{amount_no_decimals}} MNT"
    },
    MZN: {
        money_format: "{{amount}} Mt",
        money_with_currency_format: "Mt {{amount}} MZN"
    },
    NAD: {
        money_format: "N${{amount}}",
        money_with_currency_format: "N${{amount}} NAD"
    },
    NPR: {
        money_format: "Rs{{amount}}",
        money_with_currency_format: "Rs{{amount}} NPR"
    },
    ANG: {
        money_format: "ƒ{{amount}}",
        money_with_currency_format: "{{amount}} NAƒ"
    },
    NZD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} NZD"
    },
    NIO: {
        money_format: "C${{amount}}",
        money_with_currency_format: "C${{amount}} NIO"
    },
    NGN: {
        money_format: "₦{{amount}}",
        money_with_currency_format: "₦{{amount}} NGN"
    },
    NOK: {
        money_format: "kr {{amount_with_comma_separator}}",
        money_with_currency_format: "kr {{amount_with_comma_separator}} NOK"
    },
    OMR: {
        money_format: "{{amount_with_comma_separator}} OMR",
        money_with_currency_format: "{{amount_with_comma_separator}} OMR"
    },
    PKR: {
        money_format: "Rs.{{amount}}",
        money_with_currency_format: "Rs.{{amount}} PKR"
    },
    PGK: {
        money_format: "K {{amount}}",
        money_with_currency_format: "K {{amount}} PGK"
    },
    PYG: {
        money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
    },
    PEN: {
        money_format: "S/. {{amount}}",
        money_with_currency_format: "S/. {{amount}} PEN"
    },
    PHP: {
        money_format: "₱{{amount}}",
        money_with_currency_format: "₱{{amount}} PHP"
    },
    PLN: {
        money_format: "{{amount_with_comma_separator}} zl",
        money_with_currency_format: "{{amount_with_comma_separator}} zl PLN"
    },
    QAR: {
        money_format: "QAR {{amount_with_comma_separator}}",
        money_with_currency_format: "QAR {{amount_with_comma_separator}}"
    },
    RON: {
        money_format: "{{amount_with_comma_separator}} lei",
        money_with_currency_format: "{{amount_with_comma_separator}} lei RON"
    },
    RUB: {
        money_format: "руб{{amount_with_comma_separator}}",
        money_with_currency_format: "руб{{amount_with_comma_separator}} RUB"
    },
    RWF: {
        money_format: "{{amount_no_decimals}} RF",
        money_with_currency_format: "{{amount_no_decimals}} RWF"
    },
    WST: {
        money_format: "WS$ {{amount}}",
        money_with_currency_format: "WS$ {{amount}} WST"
    },
    SAR: {
        money_format: "{{amount}} SR",
        money_with_currency_format: "{{amount}} SAR"
    },
    STD: {
        money_format: "Db {{amount}}",
        money_with_currency_format: "Db {{amount}} STD"
    },
    RSD: {
        money_format: "{{amount}} RSD",
        money_with_currency_format: "{{amount}} RSD"
    },
    SCR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} SCR"
    },
    SGD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} SGD"
    },
    SYP: {
        money_format: "S£{{amount}}",
        money_with_currency_format: "S£{{amount}} SYP"
    },
    ZAR: {
        money_format: "R {{amount}}",
        money_with_currency_format: "R {{amount}} ZAR"
    },
    KRW: {
        money_format: "₩{{amount_no_decimals}}",
        money_with_currency_format: "₩{{amount_no_decimals}} KRW"
    },
    LKR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} LKR"
    },
    SEK: {
        money_format: "{{amount_no_decimals}} kr",
        money_with_currency_format: "{{amount_no_decimals}} kr SEK"
    },
    CHF: {
        money_format: "SFr. {{amount}}",
        money_with_currency_format: "SFr. {{amount}} CHF"
    },
    TWD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} TWD"
    },
    THB: {
        money_format: "{{amount}} ฿",
        money_with_currency_format: "{{amount}} ฿ THB"
    },
    TZS: {
        money_format: "{{amount}} TZS",
        money_with_currency_format: "{{amount}} TZS"
    },
    TTD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} TTD"
    },
    TND: {
        money_format: "{{amount}}",
        money_with_currency_format: "{{amount}} DT"
    },
    TRY: {
        money_format: "{{amount}}TL",
        money_with_currency_format: "{{amount}}TL"
    },
    UGX: {
        money_format: "Ush {{amount_no_decimals}}",
        money_with_currency_format: "Ush {{amount_no_decimals}} UGX"
    },
    UAH: {
        money_format: "₴{{amount}}",
        money_with_currency_format: "₴{{amount}} UAH"
    },
    AED: {
        money_format: "Dhs. {{amount}}",
        money_with_currency_format: "Dhs. {{amount}} AED"
    },
    UYU: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} UYU"
    },
    VUV: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}}VT"
    },
    VEF: {
        money_format: "Bs. {{amount_with_comma_separator}}",
        money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF"
    },
    VND: {
        money_format: "{{amount_no_decimals_with_comma_separator}}₫",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND"
    },
    XBT: {
        money_format: "{{amount_no_decimals}} BTC",
        money_with_currency_format: "{{amount_no_decimals}} BTC"
    },
    XOF: {
        money_format: "CFA{{amount}}",
        money_with_currency_format: "CFA{{amount}} XOF"
    },
    ZMW: {
        money_format: "K{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}"
    }
};
Currency.formatMoney = function(b, g) {
    if (typeof Shopify.formatMoney === "function") {
        return Shopify.formatMoney(b, g)
    }
    if (typeof b == "string") {
        b = b.replace(".", "")
    }
    var f = "";
    var e = /\{\{\s*(\w+)\s*\}\}/;
    var a = g || "${{amount}}";

    function c(h, i) {
        return (typeof h == "undefined" ? i : h)
    }
    function d(m, k, l, j) {
        k = c(k, 2);
        l = c(l, ",");
        j = c(j, ".");
        if (isNaN(m) || m == null) {
            return 0
        }
        m = (m / 100).toFixed(k);
        var n = m.split("."),
            i = n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + l),
            h = n[1] ? (j + n[1]) : "";
        return i + h
    }
    switch (a.match(e)[1]) {
        case "amount":
            f = d(b, 2);
            break;
        case "amount_no_decimals":
            f = d(b, 0);
            break;
        case "amount_with_comma_separator":
            f = d(b, 2, ".", ",");
            break;
        case "amount_no_decimals_with_comma_separator":
            f = d(b, 0, ".", ",");
            break
    }
    return a.replace(e, f)
};
Currency.currentCurrency = "";
Currency.format = "money_with_currency_format";
Currency.convertAll = function(c, b, a, d) {
    jQuery(a || "span.money").each(function() {
        if (jQuery(this).attr("data-currency") === b) {
            return
        }
        if (jQuery(this).attr("data-currency-" + b)) {
            jQuery(this).html(jQuery(this).attr("data-currency-" + b))
        } else {
            var e = 0;
            var f = Currency.moneyFormats[c][d || Currency.format] || "{{amount}}";
            var g = Currency.moneyFormats[b][d || Currency.format] || "{{amount}}";
            if (f.indexOf("amount_no_decimals") !== -1) {
                e = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10) * 100, c, b)
            } else {
                if (c === "JOD" || c == "KWD" || c == "BHD") {
                    e = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10) / 10, c, b)
                } else {
                    e = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10), c, b)
                }
            }
            var h = Currency.formatMoney(e, g);
            jQuery(this).html(h);
            jQuery(this).attr("data-currency-" + b, h)
        }
        jQuery(this).attr("data-currency", b)
    });
    this.currentCurrency = b;
    this.cookie.write(b)
};
// (c) Copyright 2014 Caroline Schnapp. All Rights Reserved. Contact: mllegeorgesand@gmail.com
// See http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options

var Shopify = Shopify || {};

Shopify.optionsMap = {};

Shopify.updateOptionsInSelector = function(selectorIndex) {

  switch (selectorIndex) {
    case 0:
      var key = 'root';
      var selector = jQuery('.single-option-selector:eq(0)');
      break;
    case 1:
      var key = jQuery('.single-option-selector:eq(0)').val();
      var selector = jQuery('.single-option-selector:eq(1)');
      break;
    case 2:
      var key = jQuery('.single-option-selector:eq(0)').val();  
      key += ' / ' + jQuery('.single-option-selector:eq(1)').val();
      var selector = jQuery('.single-option-selector:eq(2)');
  }

  var initialValue = selector.val();
  selector.empty();    
  var availableOptions = Shopify.optionsMap[key];
  for (var i=0; i<availableOptions.length; i++) {
    var option = availableOptions[i];
    var newOption = jQuery('<option></option>').val(option).html(option);
    selector.append(newOption);
  }
  jQuery('.swatch[data-option-index="' + selectorIndex + '"] .swatch-element').each(function() {
    if (jQuery.inArray($(this).attr('data-value'), availableOptions) !== -1) {
      $(this).removeClass('soldout').show().find(':radio').removeAttr('disabled','disabled').removeAttr('checked');
    }
    else {
      $(this).addClass('soldout').hide().find(':radio').removeAttr('checked').attr('disabled','disabled');
    }
  });
  if (jQuery.inArray(initialValue, availableOptions) !== -1) {
    selector.val(initialValue);
  }
  selector.trigger('change');  

};

Shopify.linkOptionSelectors = function(product) {
  // Building our mapping object.
  for (var i=0; i<product.variants.length; i++) {
    var variant = product.variants[i];
    if (variant.available) {
      // Gathering values for the 1st drop-down.
      Shopify.optionsMap['root'] = Shopify.optionsMap['root'] || [];
      Shopify.optionsMap['root'].push(variant.option1);
      Shopify.optionsMap['root'] = Shopify.uniq(Shopify.optionsMap['root']);
      // Gathering values for the 2nd drop-down.
      if (product.options.length > 1) {
        var key = variant.option1;
        Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
        Shopify.optionsMap[key].push(variant.option2);
        Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
      }
      // Gathering values for the 3rd drop-down.
      if (product.options.length === 3) {
        var key = variant.option1 + ' / ' + variant.option2;
        Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
        Shopify.optionsMap[key].push(variant.option3);
        Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
      }
    }
  }
  // Update options right away.
  Shopify.updateOptionsInSelector(0);
  if (product.options.length > 1) Shopify.updateOptionsInSelector(1);
  if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
  // When there is an update in the first dropdown.
  jQuery(".single-option-selector:eq(0)").change(function() {
    Shopify.updateOptionsInSelector(1);
    if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
    return true;
  });
  // When there is an update in the second dropdown.
  jQuery(".single-option-selector:eq(1)").change(function() {
    if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
    return true;
  });

};
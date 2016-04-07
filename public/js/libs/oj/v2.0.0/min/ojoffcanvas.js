/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojcomponentcore"],function(b,f,a){b.o={};o_("OffcanvasUtils",b.o,b);b.o.WF="oj-offcanvasEdge";b.o.ql="oj-offcanvas";b.o.XF="oj-mediaQueryListener";b.o.VQ="oj-offcanvasHammer";b.o.mv="selector";b.o.av="start";b.o.$u="end";b.o.EP="top";b.o.fF="bottom";b.o.Yu="displayMode";b.o.Zu="push";b.o.DP="overlay";b.o.D6="modality";b.o.Gqa="none";b.o.E6="modal";b.o.pz="_dismissHandler";b.o.AF="_openPromise";b.o.Xu="_closePromise";b.o.qz=
"_glassPane";b.o.qQ="_surrogate";b.o.DF="data-oj-surrogate-id";b.o.P6="oj-offcanvas-outer-wrapper";b.o.dQ="oj-offcanvas-open";b.o.bn="oj-offcanvas-transition";b.o.o6="oj-offcanvas-glasspane";b.o.LP="oj-offcanvas-glasspane-dim";b.o.Hqa="oj-offcanvas-generated";b.o.ola={start:"oj-offcanvas-shift-start",end:"oj-offcanvas-shift-end",top:"oj-offcanvas-shift-down",bottom:"oj-offcanvas-shift-up"};b.o.qca={start:"oj-offcanvas-start",end:"oj-offcanvas-end",top:"oj-offcanvas-top",bottom:"oj-offcanvas-bottom"};
b.o.pda=function(a){a=a[b.o.Yu];a!==b.o.DP&&a!==b.o.Zu&&(a=b.ze.Sk("offcanvas").displayMode);return a};b.o.si=function(a){return f(a[b.o.mv])};b.o.vK=function(a){return a[b.o.D6]===b.o.E6};b.o.Zn=function(a){return a.hasClass(b.o.dQ)};b.o.lt=function(a){return a.closest("."+b.o.P6)};b.o.xB=function(a){var c=b.o.si(a);return a[b.o.Yu]===b.o.Zu?c.parent():c};b.o.OW=function(a){var c=b.o.ola[a];if(!c)throw"Invalid edge: "+a;return c};b.o.ce=function(){return"rtl"===b.v.qm()};b.o.QL=function(a,b){a.css({"-webkit-transform":b,
"-ms-transform":b,transform:b})};b.o.bD=function(a,c,e){c=c===b.o.$u;b.o.ce()&&(c=!c);b.o.QL(a,"translate3d("+(c?"-":"")+e+", 0, 0)")};b.o.fla=function(a,c,e){b.o.QL(a,"translate3d(0, "+(c===b.o.fF?"-":"")+e+", 0)")};b.o.G_=function(a){var c=a.edge;a=b.o.si(a);c&&c.length||(c=a.hasClass("oj-offcanvas-start")?b.o.av:a.hasClass("oj-offcanvas-end")?b.o.$u:a.hasClass("oj-offcanvas-top")?b.o.EP:a.hasClass("oj-offcanvas-bottom")?b.o.fF:b.o.av);f.data(a[0],b.o.WF,c);return c};b.o.UI=function(a){return f.data(a[0],
b.o.WF)};b.o.mD=function(a,c,e){var f=a[b.o.Yu],h=b.o.si(a),k=b.o.dQ,f=f===b.o.DP?b.o.bn+" oj-offcanvas-overlay":b.o.bn;e?(e=h.attr("tabIndex"),void 0!==e&&(a.tabIndex=e),h.addClass(k).attr("tabIndex","-1"),c.addClass(f)):(e=a.tabIndex,void 0===e?h.removeAttr("tabIndex"):h.attr("tabIndex",e),h.removeClass(k),c.removeClass(f))};b.o.Oga=function(a){return"none"!=a.autoDismiss};b.o.kZ=function(a,b){function e(){b();a.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd",e)}a.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd",
e)};b.o.$Z=function(a){b.o.FM(a);if(b.o.Oga(a)){var c=b.o.si(a),e=a[b.o.pz]=function(e){var g=e.target;b.v.O3(e)||"focus"===e.type&&!f(g).is(":focusable")||(null==f.data(c[0],b.o.ql)?b.o.FM(a):b.v.$oa(c[0],g)||b.o.close(a))},g=document.documentElement;b.v.Rd()&&g.addEventListener("touchstart",e,!0);g.addEventListener("mousedown",e,!0);g.addEventListener("focus",e,!0)}b.o.OC(a)};b.o.FM=function(a){var c=a[b.o.pz];if(c){var e=document.documentElement;b.v.Rd()&&e.removeEventListener("touchstart",c,!0);
e.removeEventListener("mousedown",c,!0);e.removeEventListener("focus",c,!0);delete a[b.o.pz];a[b.o.pz]=null}b.o.uD(a)};b.o.OC=function(d){if(b.v.Rd()){var c=d[b.o.mv],e=f(c),g=b.o.UI(e),h,k;g===b.o.av&&!b.o.ce()||g===b.o.$u&&b.o.ce()?(k={recognizers:[[a.Swipe,{direction:a.DIRECTION_LEFT}]]},h="swipeleft"):g===b.o.av&&b.o.ce()||g===b.o.$u&&!b.o.ce()?(k={recognizers:[[a.Swipe,{direction:a.DIRECTION_RIGHT}]]},h="swiperight"):g===b.o.EP?(k={recognizers:[[a.Swipe,{direction:a.DIRECTION_UP}]]},h="swipeup"):
g===b.o.fF&&(k={recognizers:[[a.Swipe,{direction:a.DIRECTION_DOWN}]]},h="swipedown");e=e.cl(k).on(h,function(a){a.preventDefault();b.o.close(d)});f.data(f(c)[0],b.o.VQ,{event:h,hammer:e})}};b.o.uD=function(a){a=b.o.si(a);0<a.length&&(a=f.data(a[0],b.o.VQ))&&a.hammer.off(a.event)};b.o.ZS=function(a){var c=b.o.si(a);if(f.data(c[0],b.o.ql)===a){b.o.UI(c);var e=b.o.xB(a);b.o.mD(a,e,!1);b.o.Mja(a);b.o.FM(a);c.trigger("ojclose",a);f.removeData(c[0],b.o.ql)}};b.o.m0=function(a,c,e){var g=f(a);(c=!!c)&&b.o.Zn(g)&&
b.o.Al(a,!1);g.toggleClass(b.o.qca[e],!c)};b.o.Zpa=function(a){var c=a.query;if(null!==c){var e=a[b.o.mv],c=window.matchMedia(c),g=b.o.G_(a);a=function(a){b.o.m0(e,a.matches,g)};c.addListener(a);b.o.m0(e,c.matches,g);f.data(f(e)[0],b.o.XF,{mqList:c,mqListener:a})}};o_("OffcanvasUtils.setupResponsive",b.o.Zpa,b);b.o.mqa=function(a){a=b.o.si(a);var c=f.data(a[0],b.o.XF);c&&(c.mqList.removeListener(c.mqListener),f.removeData(a[0],b.o.XF))};o_("OffcanvasUtils.tearDownResponsive",b.o.mqa,b);b.o.open=function(a){var c=
b.o.si(a),e=f.data(c[0],b.o.ql);if(e){if(e[b.o.Xu])return e[b.o.Xu];if(e[b.o.AF])return e[b.o.AF]}var e=new Promise(function(e,g){b.l.zd(c,jQuery);var l=b.o.G_(a),m=f.Event("ojbeforeopen");c.trigger(m,a);if(!1===m.result)g("ojbeforeopen veto");else{var n,m=b.o.pda(a),p=f.extend({},a);p[b.o.Yu]=m;f.data(c[0],b.o.ql,p);var r;r=b.o.xB(p);b.l.zd(r,jQuery);b.o.mD(p,r,!0);l===b.o.av||l===b.o.$u?(n=void 0===n?c.outerWidth(!0)+"px":n,m===b.o.Zu&&b.o.bD(r,l,n)):(n=void 0===n?c.outerHeight(!0)+"px":n,m===b.o.Zu&&
b.o.fla(r,l,n));var s;window.setTimeout(function(){s=b.o.lt(c);b.l.zd(s,jQuery);s.addClass(b.o.OW(l))},10);b.o.y$(p,c);b.o.kZ(r,function(){r.removeClass(b.o.bn);b.rd.wy(c[0]);c.trigger("ojopen",p);b.o.$Z(p);e(!0)})}}),g=f.data(c[0],b.o.ql);g&&(g[b.o.AF]=e);return e};o_("OffcanvasUtils.open",b.o.open,b);b.o.close=function(a){return b.o.Al(a[b.o.mv],!0)};o_("OffcanvasUtils.close",b.o.close,b);b.o.Al=function(a,c){var e=f(a);b.l.zd(e,jQuery);var g=f.data(e[0],b.o.ql);if(g&&g[b.o.Xu])return g[b.o.Xu];
var h=new Promise(function(h,l){if(b.o.Zn(e)){a!=g[b.o.mv]&&h(!0);var m=b.o.UI(e),n=g[b.o.Yu],m=b.o.OW(m),p=b.o.lt(e);b.l.zd(p,jQuery);p.hasClass(m)||h(!0);var r=f.Event("ojbeforeclose");e.trigger(r,g);if(!1===r.result)l("beforeClose veto");else{r=b.o.xB(g);if(c){var s=0,q=function(){b.o.ZS(g);0!==s&&window.cancelAnimationFrame(s);h(!0)},t=function(){null==e[0].offsetParent?q():s=window.requestAnimationFrame(t)};b.o.kZ(r,q);s=window.requestAnimationFrame(t)}n===b.o.Zu&&b.o.QL(r,"");p.removeClass(m);
b.o.vK(g)&&g[b.o.qz].removeClass(b.o.LP);c?r.addClass(b.o.bn):(b.o.ZS(g),h(!0))}}else h(!0)});(g=f.data(e[0],b.o.ql))&&(g[b.o.Xu]=h);return h};b.o.toggle=function(a){var c=b.o.si(a);b.l.zd(c,jQuery);return b.o.Zn(c)?b.o.close(a):b.o.open(a)};o_("OffcanvasUtils.toggle",b.o.toggle,b);b.o.X9=function(a){var c=f("\x3cdiv\x3e");c.addClass(b.o.o6);c.attr("role","presentation");c.attr("aria-hidden","true");c.appendTo(a.parent());c.on("keydown keyup keypress mousedown mouseup mouseover mouseout click focusin focus",
function(a){a.stopPropagation();a.preventDefault()});return c};b.o.XH=function(a){var c=f("\x3cscript\x3e"),e=a.attr("id");e?(e=[e,"surrogate"].join("_"),c.attr("id",e)):e=c.uniqueId();c.insertBefore(a);a.attr(b.o.DF,e);return c};b.o.Fla=function(a,c){a[b.o.qQ]=b.o.XH(c);c.appendTo(c.parent())};b.o.lka=function(a){var c=b.o.si(a);a=a[b.o.qQ];c&&a&&c.attr(b.o.DF)===a.attr("id")&&(c.insertAfter(a),c.removeAttr(b.o.DF),a.remove())};b.o.y$=function(a,c){b.o.vK(a)&&(a[b.o.qz]=b.o.X9(c),b.o.Fla(a,c),window.setTimeout(function(){a[b.o.qz].addClass(b.o.LP)},
0))};b.o.Mja=function(a){b.o.vK(a)&&(a[b.o.qz].remove(),b.o.lka(a))};b.o.o5=function(d){var c,e,g,h,k,l,m,n,p,r,s,q;null==f(d).attr("oj-data-pansetup")&&(f(d).attr("oj-data-pansetup","true"),d.displayMode="push",c=b.o.si(d),e=d.size,null==e&&(e=c.outerWidth()),g=b.o.lt(c),h=b.o.xB(d),k={recognizers:[[a.Pan,{direction:a.DIRECTION_HORIZONTAL}]]},l=!1,f(g).cl(k).on("panstart",function(e){m=null;switch(e.gesture.direction){case a.DIRECTION_LEFT:Math.abs(e.gesture.deltaY)<Math.abs(e.gesture.deltaX)&&(m=
b.o.ce()?"end":"start");break;case a.DIRECTION_RIGHT:Math.abs(e.gesture.deltaY)<Math.abs(e.gesture.deltaX)&&(m=b.o.ce()?"start":"end")}null!=m&&(n={direction:m,distance:Math.abs(e.gesture.deltaX)},p=f.Event("ojpanstart"),c.trigger(p,n),p.isDefaultPrevented()||(d._closePromise=null,b.o.mD(d,h,!0),l=!0,e.stopPropagation()))}).on("panmove",function(a){l&&(r=Math.abs(a.gesture.deltaX),c.css("width",r),h.removeClass(b.o.bn),b.o.bD(h,"start",a.gesture.deltaX+"px"),n={direction:m,distance:r},p=f.Event("ojpanmove"),
c.trigger(p,n),a.stopPropagation())}).on("panend",function(a){l&&(l=!1,r=Math.abs(a.gesture.deltaX),n={distance:r},p=f.Event("ojpanend"),c.trigger(p,n),a.stopPropagation(),p.isDefaultPrevented()?(q=function(){b.o.mD(d,h,!1);h.removeClass(b.o.bn);h.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd",q)},h.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd",q),h.addClass(b.o.bn),b.o.bD(h,"start","0px")):(h.addClass(b.o.bn),c.css("width",e+"px"),s=d.edge,null==s&&(s=
c.hasClass("oj-offcanvas-start")?"start":"end"),b.o.bD(h,s,e+"px"),f.data(c[0],b.o.ql,d),f.data(c[0],b.o.WF,s),b.o.$Z(d)))}))};o_("OffcanvasUtils.setupPanToReveal",b.o.o5,b);b.o.B5=function(a){a=b.o.si(a);f(b.o.lt(a)).off("panstart panmove panend")};o_("OffcanvasUtils.tearDownPanToReveal",b.o.B5,b)});
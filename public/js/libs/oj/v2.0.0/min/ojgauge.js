/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtGauge"],function(b,f,a,d,c){b.ya("oj.dvtBaseGauge",f.oj.dvtBaseComponent,{dA:function(){this._super();this.options._thresholdColors=[this.options._threshold1,this.options._threshold2,this.options._threshold3];this.options._threshold1=null;this.options._threshold2=null;this.options._threshold3=null},lf:function(){this._super();this.option("rawValue",this.options.value,{_context:{Hc:!0,Va:!0}})},ei:function(){var a=
this._super();a["oj-gauge-metric-label"]={path:"metricLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-gauge-tick-label"]={path:"tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-gauge-threshold1"]={path:"_threshold1",property:"color"};a["oj-gauge-threshold2"]={path:"_threshold2",property:"color"};a["oj-gauge-threshold3"]={path:"_threshold3",property:"color"};return a},hi:function(){return["input","optionChange"]},ii:function(){var a=this.options.translations,b=this._super();b["DvtGaugeBundle.EMPTY_TEXT"]=
a.labelNoData;b["DvtUtilBundle.GAUGE"]=a.componentName;return b},ki:function(a){var b=a&&a.getType?a.getType():null;b===c.DvtValueChangeEvent.TYPE?this.hc("value",a.getNewValue()):b===c.DvtValueChangeEvent.TYPE_INPUT?(b=a.getNewValue(),this._trigger("input",null,{value:b}),this.hc("rawValue",a.getNewValue())):this._super(a)},_setOption:function(a,c,d){"rawValue"===a?b.r.error("'rawValue' is a read-only option and cannot be set"):("value"===a&&this.option("rawValue",c,{_context:{Hc:!0,Va:!0}}),this._super(a,
c,d))},di:function(a){var b=a.subId;if("oj-dialgauge-tooltip"==b||"oj-ledgauge-tooltip"==b||"oj-ratinggauge-tooltip"==b||"oj-statusmetergauge-tooltip"==b)b="tooltip";"oj-ratinggauge-item"==b&&null!=a.index&&(b="item["+a.index+"]");return b}},!0);b.ya("oj.ojDialGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},mf:function(a,b,d){return c.DvtDialGauge.newInstance(a,b,d)},dg:function(a){var b={};"tooltip"==a&&(b.subId="oj-dialgauge-tooltip");return b},
Be:function(){var a=this._super();a.push("oj-dialgauge");return a},fg:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this.Mka();this._super()},Mka:function(){var a=this.options.background;null==a&&(a="circleAlta",this.options.background="circleAlta");var c=this.options.indicator;
null==c&&(c="needleAlta",this.options.indicator="needleAlta");if("string"===typeof a){var d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"),width:200,height:200},{src:b.ba.jb("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"),width:400,height:400}];"rectangleAlta"===a?d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"),width:200,height:154},{src:b.ba.jb("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"),width:400,height:309}]:
"domeAlta"===a?d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"),width:200,height:154},{src:b.ba.jb("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"),width:400,height:309}]:"circleAntique"===a?d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"),width:200,height:200},{src:b.ba.jb("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"),width:400,height:400}]:"rectangleAntique"===a?d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"),
width:200,height:168},{src:b.ba.jb("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"),width:400,height:335}]:"domeAntique"===a?d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"),width:200,height:176},{src:b.ba.jb("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"),width:400,height:352}]:"circleLight"===a?d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/light-circle-200x200.png"),width:200,height:200},{src:b.ba.jb("resources/internal-deps/dvt/gauge/light-circle-400x400.png"),
width:400,height:400}]:"rectangleLight"===a?d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"),width:200,height:154},{src:b.ba.jb("resources/internal-deps/dvt/gauge/light-rectangle-400x400.png"),width:400,height:307}]:"domeLight"===a?d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/light-dome-200x200.png"),width:200,height:138},{src:b.ba.jb("resources/internal-deps/dvt/gauge/light-dome-400x400.png"),width:400,height:276}]:"circleDark"===a?d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"),
width:200,height:200},{src:b.ba.jb("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"),width:400,height:400}]:"rectangleDark"===a?d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"),width:200,height:154},{src:b.ba.jb("resources/internal-deps/dvt/gauge/dark-rectangle-400x400.png"),width:400,height:307}]:"domeDark"===a&&(d=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"),width:200,height:138},{src:b.ba.jb("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"),
width:400,height:276}]);this.options._backgroundImages=d}"string"===typeof c&&(a=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"),width:374,height:575}],"needleAntique"===c?a=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"),width:81,height:734}]:"needleDark"===c?a=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"),width:454,height:652}]:"needleLight"===c&&(a=[{src:b.ba.jb("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"),
width:454,height:652}]),this.options._indicatorImages=a)},getMetricLabel:function(){return this.la.getAutomation().getMetricLabel()}});b.ya("oj.ojLedGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{},mf:function(a,b,d){return c.DvtLedGauge.newInstance(a,b,d)},dg:function(a){var b={};"tooltip"==a&&(b.subId="oj-ledgauge-tooltip");return b},Be:function(){var a=this._super();a.push("oj-ledgauge");return a},fg:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),
this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getMetricLabel:function(){return this.la.getAutomation().getMetricLabel()}});b.ya("oj.ojRatingGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},mf:function(a,b,d){return c.DvtRatingGauge.newInstance(a,b,d)},dg:function(a){var b={};"tooltip"==a?b.subId=
"oj-ratinggauge-tooltip":0==a.indexOf("item")&&(b.subId="oj-ratinggauge-item",b.index=this.Sg(a));return b},Be:function(){var a=this._super();a.push("oj-ratinggauge");return a},fg:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},hc:function(a,b){this._superApply(arguments);
"value"==a&&this.hc("changed",!0)}});b.ya("oj.ojStatusMeterGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},mf:function(a,b,d){return c.DvtStatusMeterGauge.newInstance(a,b,d)},dg:function(a){var b={};"tooltip"==a&&(b.subId="oj-statusmetergauge-tooltip");return b},Be:function(){var a=this._super();a.push("oj-statusmetergauge");return a},fg:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,
"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getMetricLabel:function(){return this.la.getAutomation().getMetricLabel()}})});
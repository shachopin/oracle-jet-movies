/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$77$$, $$$$71$$) {
  (function() {
    $oj$$77$$.$__registerWidget$("oj.ojTrain", $$$$71$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selected:"", optionChange:null, beforeDeselect:null, deselect:null, beforeSelect:null, select:null}, $_stepNum$:0, $_stepArray$:null, _ComponentCreate:function() {
      this._super();
      this.$_setupTrain$();
    }, $_setupTrain$:function() {
      var $i$$449_options$$408$$ = this.options, $stepTag_steps$$4$$ = $i$$449_options$$408$$.steps;
      this.$_stepNum$ = $stepTag_steps$$4$$.length;
      this.$_wrapper$ = $$$$71$$("\x3cdiv class\x3d'oj-train-wrapper'\x3e\x3c/div\x3e");
      this.$_wrapper$.appendTo(this.element);
      this.$_connectorWrapper$ = $$$$71$$("\x3cdiv class\x3d'oj-train-connector-wrapper'\x3e\x3c/div\x3e");
      this.$_connectorWrapper$.appendTo(this.$_wrapper$);
      var $styleClass$$10$$ = this.element.attr("class");
      (this.$_stretch$ = null != $styleClass$$10$$ && 0 <= $styleClass$$10$$.indexOf("oj-train-stretch")) && this.$_connectorWrapper$.css("padding", "0 " + 100 / (2 * this.$_stepNum$) + "%");
      this.$_connector$ = $$$$71$$("\x3cdiv class\x3d'oj-train-connector'\x3e\x3c/div\x3e");
      this.$_connector$.appendTo(this.$_connectorWrapper$);
      this.$_stepList$ = $$$$71$$("\x3cul\x3e");
      this.$_stepList$.addClass("oj-train-step-list");
      this.$_connectorFill$ = $$$$71$$("\x3cdiv class\x3d'oj-train-connector-fill'\x3e\x3c/div\x3e");
      this.$_connectorFill$.appendTo(this.$_connectorWrapper$);
      this.$_setupArray$();
      this.$_selectedIndex$ = this.$_getStepIndex$($i$$449_options$$408$$.selected);
      -1 === this.$_selectedIndex$ && $stepTag_steps$$4$$[0] && $stepTag_steps$$4$$[0].id && (this.$_selectedIndex$ = 0, $i$$449_options$$408$$.selected = $stepTag_steps$$4$$[0].id);
      for ($i$$449_options$$408$$ = 0;$i$$449_options$$408$$ < this.$_stepNum$;$i$$449_options$$408$$++) {
        $stepTag_steps$$4$$ = $$$$71$$("\x3cli\x3e").addClass("oj-train-step-list-item").attr({id:this.$_stepArray$[$i$$449_options$$408$$][1]}), $stepTag_steps$$4$$.appendTo(this.$_stepList$), this.$_drawLabel$($i$$449_options$$408$$), this.$_drawStepFill$($i$$449_options$$408$$), this.$_drawButton$($i$$449_options$$408$$), this.$_drawMessageType$($i$$449_options$$408$$), this.$_stretch$ && $stepTag_steps$$4$$.css("width", 100 / this.$_stepNum$ + "%");
      }
      this.$_connectorFill$.css({width:(this.$_stepNum$ - 1 === this.$_selectedIndex$ ? 100 : 100 / (2 * (this.$_stepNum$ - 1)) + this.$_selectedIndex$ / (this.$_stepNum$ - 1) * 100) + "%"});
      this.$_stepList$.appendTo(this.$_wrapper$);
      this.element.addClass("oj-train");
    }, $_setupArray$:function() {
      var $options$$409$$ = this.options;
      this.$_stepArray$ = [];
      for (var $i$$450$$ = 0;$i$$450$$ < this.$_stepNum$;$i$$450$$++) {
        var $step$$4$$ = $options$$409$$.steps[$i$$450$$];
        this.$_stepArray$[$i$$450$$] = Array(5);
        this.$_stepArray$[$i$$450$$][0] = $step$$4$$.label ? $step$$4$$.label : null;
        this.$_stepArray$[$i$$450$$][1] = $step$$4$$.id ? $step$$4$$.id : null;
        this.$_stepArray$[$i$$450$$][2] = $step$$4$$.disabled ? !0 : !1;
        this.$_stepArray$[$i$$450$$][3] = $step$$4$$.visited ? !0 : !1;
        this.$_stepArray$[$i$$450$$][4] = $step$$4$$.messageType ? $step$$4$$.messageType : null;
      }
    }, $_drawButton$:function($index$$295$$) {
      var $button$$2$$ = $$$$71$$("\x3cdiv/\x3e").addClass("oj-train-button"), $scrnRead$$ = $$$$71$$("\x3cspan/\x3e"), $self$$229$$ = this, $desc$$1$$ = "";
      if (this.$_stepArray$[$index$$295$$]) {
        var $stepBackground_visited$$ = this.$_stepArray$[$index$$295$$][3], $disabled$$10$$ = this.$_stepArray$[$index$$295$$][2];
        this.$_selectedIndex$ === $index$$295$$ ? ($button$$2$$.addClass("oj-selected"), $desc$$1$$ = " current ") : $stepBackground_visited$$ && !$disabled$$10$$ ? ($button$$2$$.addClass("oj-visited"), $desc$$1$$ = " visited ") : $stepBackground_visited$$ || $disabled$$10$$ ? $button$$2$$.addClass("oj-disabled") : ($button$$2$$.addClass("oj-default"), $desc$$1$$ = " not visited ");
        this.$_stepArray$[$index$$295$$][2] || this.$_selectedIndex$ === $index$$295$$ || (this._hoverable($button$$2$$), $button$$2$$.on("click" + this.eventNamespace, function($event$$658$$) {
          $self$$229$$.$_fireOptionChange$("selected", $self$$229$$.options.selected, this.parentNode.parentNode.id, $event$$658$$);
          $self$$229$$.refresh();
        }));
        $stepBackground_visited$$ = this.$_stepList$.children().eq($index$$295$$).find(".oj-train-button-connector");
        1 <= $stepBackground_visited$$.length && $stepBackground_visited$$.children().remove();
        $stepBackground_visited$$.append($button$$2$$);
        $scrnRead$$.text($desc$$1$$);
        $scrnRead$$.addClass("oj-helper-hidden-accessible");
        this.$_stepList$.children().eq($index$$295$$).find("a").append($scrnRead$$);
      }
    }, $_drawMessageType$:function($index$$296$$) {
      var $icon$$15$$ = $$$$71$$("\x3cdiv/\x3e").addClass("oj-train-icon"), $scrnRead$$1$$ = $$$$71$$("\x3cspan/\x3e"), $desc$$2$$ = "", $self$$230$$ = this;
      if (this.$_stepArray$[$index$$296$$]) {
        var $messageType$$ = this.$_stepArray$[$index$$296$$][4];
        "confirmation" === $messageType$$ ? ($icon$$15$$.addClass("oj-confirmation"), $desc$$2$$ = " Confirmation ") : "info" === $messageType$$ ? ($icon$$15$$.addClass("oj-info"), $desc$$2$$ = " Info ") : "error" === $messageType$$ ? ($icon$$15$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "fatal" === $messageType$$ ? ($icon$$15$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "warning" === $messageType$$ && ($icon$$15$$.addClass("oj-warning"), $desc$$2$$ = " Warning ");
        var $button$$3$$ = this.$_stepList$.children().eq($index$$296$$).find(".oj-train-button");
        1 <= $button$$3$$.children().length && $button$$3$$.children().remove();
        this.$_stepArray$[$index$$296$$][2] || this.$_selectedIndex$ === $index$$296$$ || (this._hoverable($icon$$15$$), $icon$$15$$.on("click" + this.eventNamespace, function($event$$659$$) {
          $self$$230$$.$_fireOptionChange$("selected", $self$$230$$.options.selected, this.parentNode.parentNode.parentNode.id, $event$$659$$);
          $self$$230$$.refresh();
        }));
        null != $messageType$$ && ($scrnRead$$1$$.text($desc$$2$$), $scrnRead$$1$$.addClass("oj-helper-hidden-accessible"), this.$_stepList$.children().eq($index$$296$$).find("a").append($scrnRead$$1$$), $button$$3$$.append($icon$$15$$));
      }
    }, $_fireOptionChange$:function($eventData$$29_key$$183$$, $previousValue$$1_stepIndex$$, $value$$301$$, $originalEvent$$13$$) {
      $eventData$$29_key$$183$$ = {option:$eventData$$29_key$$183$$, fromStep:this.getStep($previousValue$$1_stepIndex$$), toStep:this.getStep($value$$301$$), optionMetadata:{writeback:$originalEvent$$13$$ ? "shouldWrite" : "shouldNotWrite"}};
      !1 !== this._trigger("beforeDeselect", $originalEvent$$13$$, $eventData$$29_key$$183$$) && !1 !== this._trigger("beforeSelect", $originalEvent$$13$$, $eventData$$29_key$$183$$) && ($previousValue$$1_stepIndex$$ = this.$_getStepIndex$($previousValue$$1_stepIndex$$), -1 !== $previousValue$$1_stepIndex$$ && (this.options.steps[$previousValue$$1_stepIndex$$].visited = !0), this._trigger("deselect", $originalEvent$$13$$, $eventData$$29_key$$183$$), this.option("selected", $value$$301$$, {_context:{originalEvent:$originalEvent$$13$$, 
      $internalSet$:!0}}), this._trigger("select", $originalEvent$$13$$, $eventData$$29_key$$183$$));
    }, $_drawStepFill$:function($index$$297_stepLi$$) {
      var $stepFill$$ = $$$$71$$("\x3cdiv/\x3e");
      $stepFill$$.addClass("oj-train-button-connector");
      this.$_stepArray$[$index$$297_stepLi$$] && ($index$$297_stepLi$$ <= this.$_selectedIndex$ && $stepFill$$.addClass("oj-train-fill"), $index$$297_stepLi$$ = this.$_stepList$.children().eq($index$$297_stepLi$$).children(), $stepFill$$.insertBefore($index$$297_stepLi$$));
    }, $_drawLabel$:function($index$$298$$) {
      var $self$$231$$ = this;
      if (this.$_stepArray$[$index$$298$$]) {
        var $labelWrapper$$ = $$$$71$$("\x3cdiv/\x3e").addClass("oj-train-label-wrapper"), $label$$18_stepLi$$1$$ = $$$$71$$("\x3ca\x3e");
        $label$$18_stepLi$$1$$.text(this.$_stepArray$[$index$$298$$][0]);
        var $disabled$$11$$ = this.$_stepArray$[$index$$298$$][2];
        $labelWrapper$$.append($label$$18_stepLi$$1$$);
        $label$$18_stepLi$$1$$.addClass("oj-train-label");
        $index$$298$$ === this.$_selectedIndex$ ? $label$$18_stepLi$$1$$.addClass("oj-selected") : this.$_stepArray$[$index$$298$$][3] && !$disabled$$11$$ ? $label$$18_stepLi$$1$$.addClass("oj-visited") : $disabled$$11$$ && $label$$18_stepLi$$1$$.addClass("oj-disabled");
        $disabled$$11$$ || ($label$$18_stepLi$$1$$.attr("href", "#"), this._hoverable($label$$18_stepLi$$1$$), $label$$18_stepLi$$1$$.on("click keydown" + this.eventNamespace, function($event$$660$$) {
          if ($event$$660$$.keyCode === $$$$71$$.ui.keyCode.ENTER || "click" === $event$$660$$.type) {
            $event$$660$$.preventDefault(), $self$$231$$.$_fireOptionChange$("selected", $self$$231$$.options.selected, this.parentNode.parentNode.id, $event$$660$$), $self$$231$$.refresh(), $event$$660$$.keyCode === $$$$71$$.ui.keyCode.ENTER && $self$$231$$.$_setFocus$(this.parentNode.parentNode.id);
          }
        }));
        $label$$18_stepLi$$1$$ = this.$_stepList$.children().eq($index$$298$$).children();
        1 <= $label$$18_stepLi$$1$$.length && $label$$18_stepLi$$1$$[0].remove();
        this.$_stepList$.children().eq($index$$298$$).append($labelWrapper$$);
      }
    }, $_getStepIndex$:function($id$$59$$) {
      for (var $i$$451$$ = 0;$i$$451$$ < this.$_stepNum$;$i$$451$$++) {
        if (this.$_stepArray$[$i$$451$$] && this.$_stepArray$[$i$$451$$][1] === $id$$59$$) {
          return $i$$451$$;
        }
      }
      return-1;
    }, getStep:function($id$$60$$) {
      for (var $i$$452$$ = 0;$i$$452$$ < this.$_stepNum$;$i$$452$$++) {
        if (this.$_stepArray$[$i$$452$$] && this.$_stepArray$[$i$$452$$][1] === $id$$60$$) {
          return jQuery.extend({}, this.options.steps[$i$$452$$]);
        }
      }
      return null;
    }, nextSelectableStep:function() {
      for (var $i$$453$$ = this.$_getStepIndex$(this.options.selected);$i$$453$$ < this.$_stepNum$;$i$$453$$++) {
        if ($i$$453$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$453$$ + 1] && !this.$_stepArray$[$i$$453$$ + 1][2]) {
          return this.$_stepArray$[$i$$453$$ + 1][1];
        }
      }
      return null;
    }, previousSelectableStep:function() {
      for (var $i$$454$$ = this.$_getStepIndex$(this.options.selected);0 <= $i$$454$$;$i$$454$$--) {
        if (this.$_stepArray$[$i$$454$$ - 1] && !this.$_stepArray$[$i$$454$$ - 1][2]) {
          return this.$_stepArray$[$i$$454$$ - 1][1];
        }
      }
      return null;
    }, setStep:function($stepProperties$$) {
      if ($stepProperties$$.id) {
        var $stepInfo$$ = this.getStep($stepProperties$$.id), $stepIndex$$1_stepObj$$ = this.$_getStepIndex$($stepProperties$$.id);
        -1 !== $stepIndex$$1_stepObj$$ && ($stepIndex$$1_stepObj$$ = this.options.steps[$stepIndex$$1_stepObj$$], $stepProperties$$.label && ($stepInfo$$[0] = $stepProperties$$.label, $stepIndex$$1_stepObj$$.label = $stepProperties$$.label), "boolean" === typeof $stepProperties$$.disabled && ($stepInfo$$[2] = $stepProperties$$.disabled, $stepIndex$$1_stepObj$$.disabled = $stepProperties$$.disabled), "boolean" === typeof $stepProperties$$.visited && ($stepInfo$$[3] = $stepProperties$$.visited, $stepIndex$$1_stepObj$$.visited = 
        $stepProperties$$.visited), $stepProperties$$.messageType && ($stepInfo$$[4] = $stepProperties$$.messageType, $stepIndex$$1_stepObj$$.messageType = $stepProperties$$.messageType));
        this.refresh();
      }
    }, _setOptions:function($options$$410$$) {
      this._super($options$$410$$);
      this.refresh();
    }, _setOption:function($key$$184$$, $value$$302$$, $flags$$54$$) {
      "selected" === $key$$184$$ && this.options.selected && this.$_stepArray$ && this.$_stepArray$[this.$_selectedIndex$] && this.$_fireOptionChange$("selected", this.$_stepArray$[this.$_selectedIndex$][1], $value$$302$$, null);
      this._super($key$$184$$, $value$$302$$, $flags$$54$$);
    }, refresh:function() {
      this._super();
      this._destroy();
      this.$_setupTrain$();
    }, _destroy:function() {
      this.$_stepList$.children().each(function() {
        $$$$71$$(this).remove();
      });
      this.element.removeClass("oj-train");
      this.element.find(".oj-train-wrapper").remove();
      this.element.find(".oj-train-connector-wrapper").remove();
      this.element.find(".oj-train-step-list").remove();
      this.element.find(".oj-train-step-list").remove();
      this._super();
    }, $_setFocus$:function($id$$61_index$$299$$) {
      $id$$61_index$$299$$ = this.$_getStepIndex$($id$$61_index$$299$$);
      for (var $i$$455$$ = 0;$i$$455$$ < this.$_stepNum$;$i$$455$$++) {
        if (this.$_stepArray$[($id$$61_index$$299$$ + $i$$455$$ + 1) % this.$_stepNum$] && !this.$_stepArray$[($id$$61_index$$299$$ + $i$$455$$ + 1) % this.$_stepNum$][2]) {
          this.$_stepList$.children().eq(($id$$61_index$$299$$ + $i$$455$$ + 1) % this.$_stepNum$).find(".oj-train-label").focus();
          break;
        }
      }
    }, getNodeBySubId:function($locator$$64$$) {
      if (null === $locator$$64$$) {
        return this.element ? this.element[0] : null;
      }
      var $index$$300$$ = $locator$$64$$.index;
      if ("number" !== typeof $index$$300$$ || 0 > $index$$300$$ || $index$$300$$ >= this.$_stepNum$) {
        return null;
      }
      switch($locator$$64$$.subId) {
        case "oj-train-step":
          return this.$_stepList$.children().eq($index$$300$$)[0];
        case "oj-train-button":
          return this.$_stepList$.children().eq($index$$300$$).find(".oj-train-button")[0];
        case "oj-train-button-connector":
          return this.$_stepList$.children().eq($index$$300$$).find(".oj-train-button-connector")[0];
        case "oj-train-connector":
          return this.$_connector$;
        case "oj-train-connector-fill":
          return this.$_connectorFill$;
        case "oj-train-icon":
          return this.$_stepList$.children().eq($index$$300$$).find(".oj-train-icon")[0];
        case "oj-train-label":
          return this.$_stepList$.children().eq($index$$300$$).find(".oj-train-label")[0];
      }
      return null;
    }, getSubIdByNode:function($node$$122$$) {
      for (var $stepNum$$ = this.$_stepArray$ ? this.$_stepArray$.length : 0, $stepIndex$$3$$ = 0;$stepIndex$$3$$ < $stepNum$$;$stepIndex$$3$$++) {
        var $stepLocator$$ = {subId:"oj-train-step", index:$stepIndex$$3$$};
        if ($node$$122$$ === this.getNodeBySubId($stepLocator$$)) {
          return $stepLocator$$;
        }
      }
      return null;
    }});
  })();
});

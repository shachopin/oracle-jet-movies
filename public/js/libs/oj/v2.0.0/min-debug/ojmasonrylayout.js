/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojdnd"], function($oj$$50$$, $$$$47$$) {
  function $MasonryLayoutCommon$$($elem$$113$$, $rtl$$2_sizeDivWrapper$$, $automationEnabled_style$$20$$, $selectors$$8_sizeDiv$$, $styles$$1$$, $callbackInfo$$2$$) {
    null == $MasonryLayoutCommon$$.$_agentTypeAndVersion$ && ($MasonryLayoutCommon$$.$_agentTypeAndVersion$ = $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$());
    this.$_elem$ = $elem$$113$$;
    this.$_rtl$ = $rtl$$2_sizeDivWrapper$$;
    this.$_automationEnabled$ = $automationEnabled_style$$20$$;
    $selectors$$8_sizeDiv$$ && $selectors$$8_sizeDiv$$.$tiles$ && (this.$_tilesSelector$ = $selectors$$8_sizeDiv$$.$tiles$);
    $styles$$1$$ && ($styles$$1$$.$transitionComponentResizeToStyleClass$ && (this.$_transitionComponentResizeToStyleClass$ = $styles$$1$$.$transitionComponentResizeToStyleClass$), $styles$$1$$.$transitionComponentResizeToFastStyleClass$ && (this.$_transitionComponentResizeToFastStyleClass$ = $styles$$1$$.$transitionComponentResizeToFastStyleClass$), $styles$$1$$.$transitionMoveToStyleClass$ && (this.$_transitionMoveToStyleClass$ = $styles$$1$$.$transitionMoveToStyleClass$), $styles$$1$$.$transitionMoveToFastStyleClass$ && 
    (this.$_transitionMoveToFastStyleClass$ = $styles$$1$$.$transitionMoveToFastStyleClass$), $styles$$1$$.$transitionHideFromStyleClass$ && (this.$_transitionHideFromStyleClass$ = $styles$$1$$.$transitionHideFromStyleClass$), $styles$$1$$.$transitionHideToStyleClass$ && (this.$_transitionHideToStyleClass$ = $styles$$1$$.$transitionHideToStyleClass$), $styles$$1$$.$transitionShowFromStyleClass$ && (this.$_transitionShowFromStyleClass$ = $styles$$1$$.$transitionShowFromStyleClass$), $styles$$1$$.$transitionShowToStyleClass$ && 
    (this.$_transitionShowToStyleClass$ = $styles$$1$$.$transitionShowToStyleClass$), $styles$$1$$.$transitionResizeToStyleClass$ && (this.$_transitionResizeToStyleClass$ = $styles$$1$$.$transitionResizeToStyleClass$));
    $callbackInfo$$2$$ && ($callbackInfo$$2$$.$addStyleClassName$ && (this.$_addStyleClassNameFunc$ = $callbackInfo$$2$$.$addStyleClassName$), $callbackInfo$$2$$.$removeStyleClassName$ && (this.$_removeStyleClassNameFunc$ = $callbackInfo$$2$$.$removeStyleClassName$), $callbackInfo$$2$$.$getSizeStyleClassName$ && (this.$_getSizeStyleClassNameFunc$ = $callbackInfo$$2$$.$getSizeStyleClassName$), $callbackInfo$$2$$.$getTileSpan$ && (this.$_getTileSpanFunc$ = $callbackInfo$$2$$.$getTileSpan$), $callbackInfo$$2$$.$showTileOnEndFunc$ && 
    (this.$_showTileOnEndFunc$ = $callbackInfo$$2$$.$showTileOnEndFunc$), $callbackInfo$$2$$.$hideTileOnEndFunc$ && (this.$_hideTileOnEndFunc$ = $callbackInfo$$2$$.$hideTileOnEndFunc$), $callbackInfo$$2$$.$layoutOnEndFunc$ && (this.$_layoutOnEndFunc$ = $callbackInfo$$2$$.$layoutOnEndFunc$), $callbackInfo$$2$$.$layoutCycleOnStartFunc$ && (this.$_layoutCycleOnStartFunc$ = $callbackInfo$$2$$.$layoutCycleOnStartFunc$), $callbackInfo$$2$$.$layoutCycleOnEndFunc$ && (this.$_layoutCycleOnEndFunc$ = $callbackInfo$$2$$.$layoutCycleOnEndFunc$), 
    $callbackInfo$$2$$.$sortTilesOriginalOrderFunc$ && (this.$_sortTilesOriginalOrderFunc$ = $callbackInfo$$2$$.$sortTilesOriginalOrderFunc$), $callbackInfo$$2$$.$subtreeAttached$ && (this.$_subtreeAttachedFunc$ = $callbackInfo$$2$$.$subtreeAttached$), $callbackInfo$$2$$.$subtreeDetached$ && (this.$_subtreeDetachedFunc$ = $callbackInfo$$2$$.$subtreeDetached$));
    $rtl$$2_sizeDivWrapper$$ = document.createElement("div");
    $automationEnabled_style$$20$$ = $rtl$$2_sizeDivWrapper$$.style;
    $automationEnabled_style$$20$$.display = "inline-block";
    $automationEnabled_style$$20$$.overflow = "hidden";
    $automationEnabled_style$$20$$.visibility = "hidden";
    $selectors$$8_sizeDiv$$ = document.createElement("div");
    $automationEnabled_style$$20$$ = $selectors$$8_sizeDiv$$.style;
    $automationEnabled_style$$20$$.display = "inline-block";
    $rtl$$2_sizeDivWrapper$$.appendChild($selectors$$8_sizeDiv$$);
    $elem$$113$$.insertBefore($rtl$$2_sizeDivWrapper$$, $elem$$113$$.firstChild);
    this.$_sizeDivWrapper$ = $rtl$$2_sizeDivWrapper$$;
    this.$_sizeDiv$ = $selectors$$8_sizeDiv$$;
    var $self$$197$$ = this;
    this.$_handleTransitionEndFunc$ = function $this$$_handleTransitionEndFunc$$($event$$516$$) {
      $self$$197$$.$_handleTransitionEnd$($event$$516$$);
    };
    this.$_hideTilesFunc$ = function $this$$_hideTilesFunc$$() {
      $self$$197$$.$_hideTiles$();
    };
    this.$_handleHideTransitionEndFunc$ = function $this$$_handleHideTransitionEndFunc$$($event$$517$$) {
      $self$$197$$.$_handleHideTransitionEnd$($event$$517$$);
    };
    this.$_handleShowTransitionEndFunc$ = function $this$$_handleShowTransitionEndFunc$$($event$$518$$) {
      $self$$197$$.$_handleShowTransitionEnd$($event$$518$$);
    };
  }
  $MasonryLayoutCommon$$.prototype.$setup$ = function $$MasonryLayoutCommon$$$$$setup$$($init$$, $reorder$$) {
    var $ret$$48$$ = !1;
    $init$$ ? ($ret$$48$$ = this.$_layout$() ? !0 : !1, this.$_reorderTilesForLayout$()) : (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$($reorder$$), $ret$$48$$ = this.$_transitionLayout$());
    return $ret$$48$$;
  };
  $MasonryLayoutCommon$$.prototype.destroy = function $$MasonryLayoutCommon$$$$destroy$() {
    for (var $elem$$114$$ = this.$_elem$, $children$$13$$ = this.$_getTileChildren$(), $i$$387$$ = 0;$i$$387$$ < $children$$13$$.length;$i$$387$$++) {
      var $style$$21$$ = $children$$13$$[$i$$387$$].style;
      this.$_rtl$ ? $style$$21$$.right = "" : $style$$21$$.left = "";
      $style$$21$$.top = "";
    }
    $elem$$114$$.removeChild(this.$_sizeDivWrapper$);
    this.$_subtreeDetachedFunc$ = this.$_subtreeAttachedFunc$ = this.$_sortTilesOriginalOrderFunc$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_getTileSpanFunc$ = this.$_getSizeStyleClassNameFunc$ = this.$_removeStyleClassNameFunc$ = this.$_addStyleClassNameFunc$ = this.$_elem$ = this.$_arFireHideOnEnd$ = this.$_arInfoletsToHide$ = this.$_arInfoletsToShow$ = this.$_arInfoletsToResize$ = this.$_arMovedInfolets$ = 
    this.$_handleShowTransitionEndFunc$ = this.$_handleHideTransitionEndFunc$ = this.$_hideTilesFunc$ = this.$_handleTransitionEndFunc$ = this.$_sizeDiv$ = this.$_sizeDivWrapper$ = null;
  };
  $MasonryLayoutCommon$$.prototype.resizeTile = function $$MasonryLayoutCommon$$$$resizeTile$($selector$$32$$, $sizeStyleClass$$) {
    var $infolet$$ = this.$_elem$.querySelector($selector$$32$$);
    if ($infolet$$) {
      this.$_arInfoletsToResize$ || (this.$_arInfoletsToResize$ = []);
      var $arInfoletsToResize$$ = this.$_arInfoletsToResize$;
      $arInfoletsToResize$$.push($infolet$$);
      $arInfoletsToResize$$.push($sizeStyleClass$$);
      this.$_resizingInfolet$ = !0;
      this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$insertTileDomElem$ = function $$MasonryLayoutCommon$$$$$insertTileDomElem$$($tileDomElem$$, $index$$237$$) {
    var $arChildren$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($arChildren$$);
    var $currChildAtIndex$$ = null;
    0 <= $index$$237$$ && $index$$237$$ < $arChildren$$.length && ($currChildAtIndex$$ = $arChildren$$[$index$$237$$]);
    this.$_elem$.insertBefore($tileDomElem$$, $currChildAtIndex$$);
    this.$_queueRelayout$();
  };
  $MasonryLayoutCommon$$.prototype.$showTile$ = function $$MasonryLayoutCommon$$$$$showTile$$($infolet$$1_selector$$33$$) {
    if ($infolet$$1_selector$$33$$ = this.$_elem$.querySelector($infolet$$1_selector$$33$$)) {
      this.$_arInfoletsToShow$ || (this.$_arInfoletsToShow$ = []), this.$_arInfoletsToShow$.push($infolet$$1_selector$$33$$), this.$_showingInfolets$ = !0, this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_HIDE$ && this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ ? this.$_queueRelayout$() : this.$_showingInfolets$ = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$hideTile$ = function $$MasonryLayoutCommon$$$$$hideTile$$($infolet$$2_selector$$34$$) {
    if ($infolet$$2_selector$$34$$ = this.$_elem$.querySelector($infolet$$2_selector$$34$$)) {
      this.$_arInfoletsToHide$ || (this.$_arInfoletsToHide$ = []), this.$_arInfoletsToHide$.push($infolet$$2_selector$$34$$), this.$_hidingInfolets$ = !0, this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$resizeNotify$ = function $$MasonryLayoutCommon$$$$$resizeNotify$$() {
    this.$_resizingInfolet$ || this.$_hidingInfolets$ || this.$_showingInfolets$ || (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$(!1), this.$_transitionLayout$());
  };
  $MasonryLayoutCommon$$.prototype.$isAnimationEnabled$ = function $$MasonryLayoutCommon$$$$$isAnimationEnabled$$() {
    if (this.$_temporarilyDisableAnimation$) {
      return!1;
    }
    this.$_cachedAnimationEnabled$ || (this.$_animationEnabled$ = this.$_automationEnabled$ ? !1 : $MasonryLayoutCommon$$.$_isMinimumAgentMet$($MasonryLayoutCommon$$.$_agentTypeAndVersion$[0], $MasonryLayoutCommon$$.$_agentTypeAndVersion$[1]), this.$_cachedAnimationEnabled$ = !0);
    return this.$_animationEnabled$;
  };
  $MasonryLayoutCommon$$.prototype.$isInLayoutCycle$ = function $$MasonryLayoutCommon$$$$$isInLayoutCycle$$() {
    return null != this.$_layoutPhase$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length;
  };
  $MasonryLayoutCommon$$.prototype.$finishLayoutCycle$ = function $$MasonryLayoutCommon$$$$$finishLayoutCycle$$() {
    this.$_temporarilyDisableAnimation$ = !0;
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$);
    for (var $tileChildren$$ = this.$_getTileChildren$(), $i$$388$$ = 0;$i$$388$$ < $tileChildren$$.length;$i$$388$$++) {
      var $child$$13$$ = $tileChildren$$[$i$$388$$];
      $child$$13$$.$_afrOldSizeStyleClass$ && delete $child$$13$$.$_afrOldSizeStyleClass$;
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$13$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$13$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$13$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$13$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
    }
    this.$_hideTilesInternalTimeout$ ? (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null, this.$_handleHideTransitionEnd$(null)) : this.$_showTilesTimeout$ ? (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null, this.$_showTiles$()) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length ? this.$_handleTransitionEnd$(null) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_SHOW$ && 
    this.$_handleShowTransitionEnd$(null);
    this.$_temporarilyDisableAnimation$ = !1;
  };
  $MasonryLayoutCommon$$.$_getElemSize$ = function $$MasonryLayoutCommon$$$$_getElemSize$$($elem$$119$$) {
    var $computedStyle$$3$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($elem$$119$$);
    return{$w$:$elem$$119$$.offsetWidth + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$3$$.marginLeft) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$3$$.marginRight)), $h$:$elem$$119$$.offsetHeight + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$3$$.marginTop) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$3$$.marginBottom))};
  };
  $MasonryLayoutCommon$$.$_getElemInsets$ = function $$MasonryLayoutCommon$$$$_getElemInsets$$($computedStyle$$4_elem$$120$$) {
    $computedStyle$$4_elem$$120$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($computedStyle$$4_elem$$120$$);
    return{paddingLeft:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$120$$.paddingLeft), paddingRight:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$120$$.paddingRight), paddingTop:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$120$$.paddingTop), paddingBottom:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$120$$.paddingBottom), borderLeftWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$120$$.borderLeftWidth), 
    borderRightWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$120$$.borderRightWidth), borderTopWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$120$$.borderTopWidth), borderBottomWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$4_elem$$120$$.borderBottomWidth)};
  };
  $MasonryLayoutCommon$$.$_getComputedStyle$ = function $$MasonryLayoutCommon$$$$_getComputedStyle$$($elem$$121$$) {
    var $defView$$1$$ = $elem$$121$$.ownerDocument.defaultView, $computedStyle$$5$$ = null;
    return $computedStyle$$5$$ = $defView$$1$$ ? $defView$$1$$.getComputedStyle($elem$$121$$, null) : $elem$$121$$.currentStyle;
  };
  $MasonryLayoutCommon$$.$_getCSSLengthAsInt$ = function $$MasonryLayoutCommon$$$$_getCSSLengthAsInt$$($cssLength$$3_intLength$$2$$) {
    return 0 < $cssLength$$3_intLength$$2$$.length && "auto" != $cssLength$$3_intLength$$2$$ ? ($cssLength$$3_intLength$$2$$ = parseInt($cssLength$$3_intLength$$2$$, 10), isNaN($cssLength$$3_intLength$$2$$) && ($cssLength$$3_intLength$$2$$ = 0), $cssLength$$3_intLength$$2$$) : 0;
  };
  $MasonryLayoutCommon$$.$_addBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_addBubbleEventListener$$($node$$98$$, $type$$93$$, $listener$$38$$) {
    $node$$98$$.addEventListener ? $node$$98$$.addEventListener($type$$93$$, $listener$$38$$, !1) : $node$$98$$.attachEvent && $node$$98$$.attachEvent("on" + $type$$93$$, $listener$$38$$);
  };
  $MasonryLayoutCommon$$.$_removeBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_removeBubbleEventListener$$($node$$99$$, $type$$94$$, $listener$$39$$) {
    $node$$99$$.removeEventListener ? $node$$99$$.removeEventListener($type$$94$$, $listener$$39$$, !1) : $node$$99$$.detachEvent && $node$$99$$.detachEvent("on" + $type$$94$$, $listener$$39$$);
  };
  $MasonryLayoutCommon$$.$_arrayIndexOf$ = function $$MasonryLayoutCommon$$$$_arrayIndexOf$$($array$$18$$, $item$$124$$) {
    if ($array$$18$$) {
      for (var $i$$389$$ = 0;$i$$389$$ < $array$$18$$.length;$i$$389$$++) {
        if ($array$$18$$[$i$$389$$] == $item$$124$$) {
          return $i$$389$$;
        }
      }
    }
    return-1;
  };
  $MasonryLayoutCommon$$.$_isMinimumAgentMet$ = function $$MasonryLayoutCommon$$$$_isMinimumAgentMet$$($actualAgentType$$, $actualAgentVersion$$) {
    var $agentRequirements$$ = ["gecko", 16, "trident", 6, "webkit", 533.1], $argCount$$ = $agentRequirements$$.length;
    if (0 == $argCount$$ % 2) {
      for (var $i$$390$$ = 0;$i$$390$$ <= $argCount$$ - 2;$i$$390$$ += 2) {
        if ($actualAgentType$$ == $agentRequirements$$[$i$$390$$]) {
          if ($actualAgentVersion$$ >= $agentRequirements$$[1 + $i$$390$$]) {
            return!0;
          }
          break;
        }
      }
    }
    return!1;
  };
  $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$ = function $$MasonryLayoutCommon$$$$_getAgentTypeAndVersion$$() {
    var $versionParser$$ = $MasonryLayoutCommon$$.$_parseFloatVersion$, $agentType$$1$$ = null, $agentVersion$$1_possibleVersion$$ = -1, $userAgent$$3$$ = navigator.userAgent.toLowerCase();
    -1 != $userAgent$$3$$.indexOf("msie") || -1 != $userAgent$$3$$.indexOf("trident") ? ($agentType$$1$$ = "trident", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /trident\/(\d+[.]\d+)/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /msie (\d+\.\d+);/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /msie (\d+\.\d+)b;/)), $agentVersion$$1_possibleVersion$$ -= 
    4), null != document.documentMode && ($agentVersion$$1_possibleVersion$$ = Math.min($agentVersion$$1_possibleVersion$$, document.documentMode - 4))) : -1 != $userAgent$$3$$.indexOf("applewebkit") ? ($agentType$$1$$ = "webkit", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /applewebkit\/(\d+([.]\d+)*)/)) : -1 != $userAgent$$3$$.indexOf("gecko/") && ($agentType$$1$$ = "gecko", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /rv:(\d+[.]\d+)/));
    return[$agentType$$1$$, $agentVersion$$1_possibleVersion$$];
  };
  $MasonryLayoutCommon$$.$_parseFloatVersion$ = function $$MasonryLayoutCommon$$$$_parseFloatVersion$$($userAgent$$4$$, $versionNumberPattern$$1$$) {
    var $matches$$5_versionString$$1$$ = $userAgent$$4$$.match($versionNumberPattern$$1$$);
    return $matches$$5_versionString$$1$$ && ($matches$$5_versionString$$1$$ = $matches$$5_versionString$$1$$[1]) ? parseFloat($matches$$5_versionString$$1$$) : -1;
  };
  $MasonryLayoutCommon$$.$_compareTilePositions$ = function $$MasonryLayoutCommon$$$$_compareTilePositions$$($pos1$$, $pos2$$) {
    return $pos1$$.$startRow$ > $pos2$$.$startRow$ ? 1 : $pos1$$.$startRow$ < $pos2$$.$startRow$ ? -1 : $pos1$$.$startCol$ > $pos2$$.$startCol$ ? 1 : $pos1$$.$startCol$ < $pos2$$.$startCol$ ? -1 : 0;
  };
  $MasonryLayoutCommon$$.prototype.$_queueRelayout$ = function $$MasonryLayoutCommon$$$$$_queueRelayout$$() {
    this.$_hideTilesTimeout$ || (this.$_layoutPhase$ ? this.$_queuedRelayout$ || (this.$_queuedRelayout$ = !0) : this.$_hideTilesTimeout$ = setTimeout(this.$_hideTilesFunc$, 0));
  };
  $MasonryLayoutCommon$$.prototype.$_getTileChildren$ = function $$MasonryLayoutCommon$$$$$_getTileChildren$$() {
    for (var $children$$14$$ = this.$_elem$.querySelectorAll(this.$_tilesSelector$), $arChildren$$1$$ = [], $i$$391$$ = 0;$i$$391$$ < $children$$14$$.length;$i$$391$$++) {
      var $child$$14$$ = $children$$14$$[$i$$391$$], $childStyle$$ = $child$$14$$.style;
      0 < $child$$14$$.offsetWidth && 0 < $child$$14$$.offsetHeight && "hidden" != $childStyle$$.visibility && $arChildren$$1$$.push($child$$14$$);
    }
    return $arChildren$$1$$;
  };
  $MasonryLayoutCommon$$.prototype.$_transitionLayout$ = function $$MasonryLayoutCommon$$$$$_transitionLayout$$() {
    var $oldMovedInfolets_ret$$49$$ = this.$_arMovedInfolets$, $newMovedInfolets$$ = this.$_layout$();
    if (this.$_arInfoletsToResize$) {
      var $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = this.$_arInfoletsToResize$;
      $newMovedInfolets$$ || ($newMovedInfolets$$ = []);
      for (var $i$$392$$ = 0;$i$$392$$ < $arInfoletsToResize$$1_calledHandleTransitionEnd$$.length;$i$$392$$ += 2) {
        var $resizedInfolet$$ = $arInfoletsToResize$$1_calledHandleTransitionEnd$$[$i$$392$$];
        0 > $MasonryLayoutCommon$$.$_arrayIndexOf$($newMovedInfolets$$, $resizedInfolet$$) && $newMovedInfolets$$.push($resizedInfolet$$);
      }
    }
    $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !1;
    if (!$newMovedInfolets$$ || 1 > $newMovedInfolets$$.length) {
      if (!$oldMovedInfolets_ret$$49$$ || 1 > $oldMovedInfolets_ret$$49$$.length) {
        this.$_arMovedInfolets$ = null, this.$_handleTransitionEnd$(null), $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !0;
      }
    } else {
      this.$_arMovedInfolets$ = $newMovedInfolets$$;
    }
    $oldMovedInfolets_ret$$49$$ = null != $newMovedInfolets$$ && 0 < $newMovedInfolets$$.length;
    this.$isAnimationEnabled$() || $arInfoletsToResize$$1_calledHandleTransitionEnd$$ || this.$_handleTransitionEnd$(null);
    return $oldMovedInfolets_ret$$49$$;
  };
  $MasonryLayoutCommon$$.prototype.$_layout$ = function $$MasonryLayoutCommon$$$$$_layout$$() {
    var $elem$$123_style$$22$$ = this.$_elem$, $children$$15$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($children$$15$$);
    var $cellSize_oldSizeStyleClass$$ = this.$_cellSize$ = null;
    this.$_cols$ = 0;
    this.$_rows$ = 1;
    this.$_occupancyMap$ = null;
    var $arMovedInfolets$$ = [], $arOldPositions$$ = [], $arCols$$ = [], $rtl$$3$$ = this.$_rtl$, $insets$$ = $MasonryLayoutCommon$$.$_getElemInsets$($elem$$123_style$$22$$), $maxColSpan$$ = 0, $arTilePositions$$ = [];
    this.$_arTilePositions$ = $arTilePositions$$;
    for (var $i$$393$$ = 0;$i$$393$$ < $children$$15$$.length;$i$$393$$++) {
      var $child$$15$$ = $children$$15$$[$i$$393$$], $childSpan$$ = this.$_getTileSpanFunc$($child$$15$$);
      ($cellSize_oldSizeStyleClass$$ = $child$$15$$.$_afrOldSizeStyleClass$) && delete $child$$15$$.$_afrOldSizeStyleClass$;
      if (!this.$_cellSize$) {
        var $r$$1_spanForCellSize_tmpDiv$$ = $childSpan$$;
        $cellSize_oldSizeStyleClass$$ && ($r$$1_spanForCellSize_tmpDiv$$ = document.createElement("div"), $r$$1_spanForCellSize_tmpDiv$$.className = $cellSize_oldSizeStyleClass$$, $r$$1_spanForCellSize_tmpDiv$$ = this.$_getTileSpanFunc$($r$$1_spanForCellSize_tmpDiv$$));
        this.$_cellSize$ = this.$_calcCellSize$($child$$15$$, $r$$1_spanForCellSize_tmpDiv$$);
      }
      $cellSize_oldSizeStyleClass$$ = this.$_cellSize$;
      this.$_occupancyMap$ || (this.$_cols$ = Math.max(Math.floor(($elem$$123_style$$22$$.offsetWidth - $insets$$.paddingLeft - $insets$$.paddingRight - $insets$$.borderLeftWidth - $insets$$.borderRightWidth) / $cellSize_oldSizeStyleClass$$.$w$), 1), this.$_initOccupancyMap$(this.$_cols$, this.$_rows$), $maxColSpan$$ = this.$_cols$);
      $childSpan$$.colSpan > $maxColSpan$$ && ($maxColSpan$$ = $childSpan$$.colSpan);
      $childSpan$$.colSpan > this.$_cols$ && ($childSpan$$.colSpan = this.$_cols$);
      for (var $childStyle$$1_next$$7$$ = !1, $r$$1_spanForCellSize_tmpDiv$$ = 0;$r$$1_spanForCellSize_tmpDiv$$ < this.$_rows$;$r$$1_spanForCellSize_tmpDiv$$++) {
        for (var $c$$48$$ = 0;$c$$48$$ < this.$_cols$;$c$$48$$++) {
          if (this.$_fits$($c$$48$$, $r$$1_spanForCellSize_tmpDiv$$, $childSpan$$)) {
            var $childStyle$$1_next$$7$$ = $child$$15$$.style, $oldPosition$$ = {top:$childStyle$$1_next$$7$$.top};
            $rtl$$3$$ ? $oldPosition$$.right = $childStyle$$1_next$$7$$.right : $oldPosition$$.left = $childStyle$$1_next$$7$$.left;
            $arOldPositions$$.push($oldPosition$$);
            this.$_position$($child$$15$$, $c$$48$$, $r$$1_spanForCellSize_tmpDiv$$, $childSpan$$, $cellSize_oldSizeStyleClass$$, $insets$$);
            $rtl$$3$$ && $arCols$$.push($c$$48$$);
            $childStyle$$1_next$$7$$ = !0;
            $arTilePositions$$.push({$startCol$:$c$$48$$, $startRow$:$r$$1_spanForCellSize_tmpDiv$$, tile:$child$$15$$});
            break;
          }
        }
        if ($childStyle$$1_next$$7$$) {
          break;
        }
        $r$$1_spanForCellSize_tmpDiv$$ === this.$_rows$ - 1 && this.$_addRow$();
      }
    }
    $cellSize_oldSizeStyleClass$$ && ($elem$$123_style$$22$$ = this.$_sizeDiv$.style, $elem$$123_style$$22$$.width = $maxColSpan$$ * $cellSize_oldSizeStyleClass$$.$w$ + "px", $elem$$123_style$$22$$.height = this.$_rows$ * $cellSize_oldSizeStyleClass$$.$h$ + "px");
    for ($i$$393$$ = 0;$i$$393$$ < $children$$15$$.length;$i$$393$$++) {
      $child$$15$$ = $children$$15$$[$i$$393$$], $childStyle$$1_next$$7$$ = $child$$15$$.style, $oldPosition$$ = $arOldPositions$$[$i$$393$$], "" != $oldPosition$$.top && ($rtl$$3$$ && parseInt($childStyle$$1_next$$7$$.right, 10) !== parseInt($oldPosition$$.right, 10) || !$rtl$$3$$ && parseInt($childStyle$$1_next$$7$$.left, 10) !== parseInt($oldPosition$$.left, 10) || parseInt($childStyle$$1_next$$7$$.top, 10) !== parseInt($oldPosition$$.top, 10)) && $arMovedInfolets$$.push($child$$15$$);
    }
    1 > $arMovedInfolets$$.length && ($arMovedInfolets$$ = null);
    return $arMovedInfolets$$;
  };
  $MasonryLayoutCommon$$.prototype.$_reorderTilesForLayout$ = function $$MasonryLayoutCommon$$$$$_reorderTilesForLayout$$() {
    var $arTilePositions$$1$$ = this.$_arTilePositions$;
    this.$_arTilePositions$ = null;
    for (var $arTilePositions$$1$$ = $arTilePositions$$1$$.sort($MasonryLayoutCommon$$.$_compareTilePositions$), $children$$16$$ = this.$_getTileChildren$(), $i$$394$$ = 0;$i$$394$$ < $children$$16$$.length;$i$$394$$++) {
      var $child$$16_posTileIndex$$ = $children$$16$$[$i$$394$$], $posTile$$ = $arTilePositions$$1$$[$i$$394$$].tile;
      $child$$16_posTileIndex$$ != $posTile$$ && (this.$_subtreeDetachedFunc$($posTile$$), $child$$16_posTileIndex$$.parentNode.insertBefore($posTile$$, $child$$16_posTileIndex$$), this.$_subtreeAttachedFunc$($posTile$$), $child$$16_posTileIndex$$ = $MasonryLayoutCommon$$.$_arrayIndexOf$($children$$16$$, $posTile$$), $child$$16_posTileIndex$$ > $i$$394$$ && ($children$$16$$.splice($child$$16_posTileIndex$$, 1), $children$$16$$.splice($i$$394$$, 0, $posTile$$)));
    }
  };
  $MasonryLayoutCommon$$.prototype.$_initOccupancyMap$ = function $$MasonryLayoutCommon$$$$$_initOccupancyMap$$($cols$$1$$, $rows$$9$$) {
    for (var $occupancyMap$$ = this.$_occupancyMap$ = [], $row$$52$$ = 0;$row$$52$$ < $rows$$9$$;$row$$52$$++) {
      var $arCols$$1$$ = [];
      $occupancyMap$$.push($arCols$$1$$);
      for (var $col$$3$$ = 0;$col$$3$$ < $cols$$1$$;$col$$3$$++) {
        $arCols$$1$$[$col$$3$$] = !1;
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_addRow$ = function $$MasonryLayoutCommon$$$$$_addRow$$() {
    this.$_rows$++;
    var $arCols$$2$$ = [];
    this.$_occupancyMap$.push($arCols$$2$$);
    for (var $col$$4$$ = 0;$col$$4$$ < this.$_cols$;$col$$4$$++) {
      $arCols$$2$$[$col$$4$$] = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$_fits$ = function $$MasonryLayoutCommon$$$$$_fits$$($col$$5$$, $row$$53$$, $childSpan$$1_rowSpan$$) {
    var $colSpan$$2$$ = $childSpan$$1_rowSpan$$.colSpan;
    $childSpan$$1_rowSpan$$ = $childSpan$$1_rowSpan$$.rowSpan;
    for (var $r$$2$$ = $row$$53$$;$r$$2$$ < $row$$53$$ + $childSpan$$1_rowSpan$$;$r$$2$$++) {
      $r$$2$$ >= this.$_rows$ && this.$_addRow$();
      for (var $c$$49$$ = $col$$5$$;$c$$49$$ < $col$$5$$ + $colSpan$$2$$;$c$$49$$++) {
        if ($c$$49$$ >= this.$_cols$ || this.$_occupancyMap$[$r$$2$$][$c$$49$$]) {
          return!1;
        }
      }
    }
    return!0;
  };
  $MasonryLayoutCommon$$.prototype.$_position$ = function $$MasonryLayoutCommon$$$$$_position$$($child$$17_style$$23$$, $col$$6$$, $row$$54$$, $childSpan$$2_rowSpan$$1$$, $cellSize$$1$$, $insets$$1$$) {
    var $colSpan$$3$$ = $childSpan$$2_rowSpan$$1$$.colSpan;
    $childSpan$$2_rowSpan$$1$$ = $childSpan$$2_rowSpan$$1$$.rowSpan;
    for (var $occupancyMap$$2$$ = this.$_occupancyMap$, $r$$3$$ = $row$$54$$;$r$$3$$ < $row$$54$$ + $childSpan$$2_rowSpan$$1$$;$r$$3$$++) {
      for (var $c$$50$$ = $col$$6$$;$c$$50$$ < $col$$6$$ + $colSpan$$3$$;$c$$50$$++) {
        $occupancyMap$$2$$[$r$$3$$][$c$$50$$] = !0;
      }
    }
    $child$$17_style$$23$$ = $child$$17_style$$23$$.style;
    $child$$17_style$$23$$.top = $insets$$1$$.paddingTop + $row$$54$$ * $cellSize$$1$$.$h$ + "px";
    this.$_rtl$ ? $child$$17_style$$23$$.right = $insets$$1$$.paddingRight + $col$$6$$ * $cellSize$$1$$.$w$ + "px" : $child$$17_style$$23$$.left = $insets$$1$$.paddingLeft + $col$$6$$ * $cellSize$$1$$.$w$ + "px";
  };
  $MasonryLayoutCommon$$.prototype.$_addStyleClassToTiles$ = function $$MasonryLayoutCommon$$$$$_addStyleClassToTiles$$($styleClassName$$) {
    for (var $children$$17$$ = this.$_getTileChildren$(), $i$$395$$ = 0;$i$$395$$ < $children$$17$$.length;$i$$395$$++) {
      this.$_addStyleClassNameFunc$($children$$17$$[$i$$395$$], $styleClassName$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_removeStyleClassFromTiles$ = function $$MasonryLayoutCommon$$$$$_removeStyleClassFromTiles$$($styleClassName$$1$$) {
    for (var $children$$18$$ = this.$_getTileChildren$(), $i$$396$$ = 0;$i$$396$$ < $children$$18$$.length;$i$$396$$++) {
      this.$_removeStyleClassNameFunc$($children$$18$$[$i$$396$$], $styleClassName$$1$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_transitionStart$ = function $$MasonryLayoutCommon$$$$$_transitionStart$$($reorder$$1$$) {
    this.$_layoutTransition$ || (this.$_reorderTransitionStarted$ = $reorder$$1$$, this.$isAnimationEnabled$() && (this.$_addStyleClassToTiles$($reorder$$1$$ ? this.$_transitionMoveToFastStyleClass$ : this.$_transitionMoveToStyleClass$), this.$_addStyleClassNameFunc$(this.$_sizeDiv$, $reorder$$1$$ ? this.$_transitionComponentResizeToFastStyleClass$ : this.$_transitionComponentResizeToStyleClass$), $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), 
    $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$)), this.$_layoutTransition$ = !0);
  };
  $MasonryLayoutCommon$$.prototype.$_handleTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleTransitionEnd$$($event$$519_i$$397$$) {
    var $arInfoletsToResize$$2_doneTransitioning$$ = !0;
    if (this.$_arMovedInfolets$) {
      var $arMovedInfolets$$1$$ = this.$_arMovedInfolets$;
      if ($event$$519_i$$397$$) {
        var $target$$92$$ = $event$$519_i$$397$$.target;
        for ($event$$519_i$$397$$ = 0;$event$$519_i$$397$$ < $arMovedInfolets$$1$$.length;$event$$519_i$$397$$++) {
          if ($target$$92$$ === $arMovedInfolets$$1$$[$event$$519_i$$397$$]) {
            $arMovedInfolets$$1$$.splice($event$$519_i$$397$$, 1);
            break;
          }
        }
      } else {
        this.$isAnimationEnabled$() || ($arMovedInfolets$$1$$ = this.$_arMovedInfolets$ = []);
      }
      0 < $arMovedInfolets$$1$$.length && ($arInfoletsToResize$$2_doneTransitioning$$ = !1);
    }
    if ($arInfoletsToResize$$2_doneTransitioning$$) {
      if (this.$_arInfoletsToResize$ && ($arInfoletsToResize$$2_doneTransitioning$$ = this.$_arInfoletsToResize$, this.$_arInfoletsToResize$ = null, this.$isAnimationEnabled$())) {
        for ($event$$519_i$$397$$ = 0;$event$$519_i$$397$$ < $arInfoletsToResize$$2_doneTransitioning$$.length;$event$$519_i$$397$$ += 2) {
          this.$_removeStyleClassNameFunc$($arInfoletsToResize$$2_doneTransitioning$$[$event$$519_i$$397$$], this.$_transitionResizeToStyleClass$);
        }
      }
      this.$_reorderTransitionStarted$ ? (this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$)), this.$_reorderTransitionStarted$ = !1) : this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$));
      this.$isAnimationEnabled$() && ($MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$));
      this.$_showingInfolets$ = this.$_hidingInfolets$ = this.$_resizingInfolet$ = this.$_layoutTransition$ = !1;
      this.$_reorderTilesForLayout$();
      this.$_layoutOnEndFunc$ && this.$_layoutOnEndFunc$();
      if (this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$) {
        if (this.$isAnimationEnabled$()) {
          var $self$$198$$ = this;
          this.$_showTilesTimeout$ = setTimeout(function() {
            $self$$198$$.$_showTiles$();
          }, 0);
        } else {
          this.$_showTiles$();
        }
      } else {
        this.$_layoutPhase$ || this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$();
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_calcCellSize$ = function $$MasonryLayoutCommon$$$$$_calcCellSize$$($child$$18$$, $childSpan$$3$$) {
    var $childSize$$ = $MasonryLayoutCommon$$.$_getElemSize$($child$$18$$);
    return{$w$:$childSize$$.$w$ / $childSpan$$3$$.colSpan, $h$:$childSize$$.$h$ / $childSpan$$3$$.rowSpan};
  };
  $MasonryLayoutCommon$$.prototype.$_hideTiles$ = function $$MasonryLayoutCommon$$$$$_hideTiles$$() {
    this.$_hideTilesTimeout$ && (clearTimeout(this.$_hideTilesTimeout$), this.$_hideTilesTimeout$ = null);
    this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$();
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_HIDE$;
    if (this.$_arInfoletsToHide$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToHide$$1$$ = this.$_arInfoletsToHide$, $i$$398$$ = 0;$i$$398$$ < $arInfoletsToHide$$1$$.length;$i$$398$$++) {
        var $infolet$$4$$ = $arInfoletsToHide$$1$$[$i$$398$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$4$$, "transitionend", this.$_handleHideTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$4$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$4$$, this.$_transitionHideFromStyleClass$);
      }
      var $self$$199$$ = this;
      this.$_hideTilesInternalTimeout$ = setTimeout(function() {
        for (var $i$$399$$ = 0;$i$$399$$ < $arInfoletsToHide$$1$$.length;$i$$399$$++) {
          var $infolet$$5$$ = $arInfoletsToHide$$1$$[$i$$399$$];
          $self$$199$$.$_removeStyleClassNameFunc$($infolet$$5$$, $self$$199$$.$_transitionHideFromStyleClass$);
          $self$$199$$.$_addStyleClassNameFunc$($infolet$$5$$, $self$$199$$.$_transitionHideToStyleClass$);
        }
      }, 0);
    } else {
      this.$_handleHideTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleHideTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleHideTransitionEnd$$($event$$520_infolet$$6$$) {
    this.$_hideTilesInternalTimeout$ && (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null);
    if ($event$$520_infolet$$6$$) {
      $event$$520_infolet$$6$$.preventDefault();
      $event$$520_infolet$$6$$.stopPropagation();
      $event$$520_infolet$$6$$ = $event$$520_infolet$$6$$.target;
      this.$_removeStyleClassNameFunc$($event$$520_infolet$$6$$, this.$_transitionHideToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$520_infolet$$6$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$520_infolet$$6$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      var $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$ = this.$_arInfoletsToHide$;
      if ($arInfoletsToHide$$2_newSizeStyleClass_style$$24$$) {
        for (var $i$$400$$ = 0;$i$$400$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$.length;$i$$400$$++) {
          var $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$[$i$$400$$];
          if ($oldSizeStyleClass$$1_tmpInfolet$$ === $event$$520_infolet$$6$$) {
            $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$.splice($i$$400$$, 1);
            this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []);
            var $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
            $arFireHideOnEnd_arInfoletsToResize$$3$$.push($event$$520_infolet$$6$$);
            break;
          }
        }
        1 > $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$.length && (this.$_arInfoletsToHide$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToHide$$2_newSizeStyleClass_style$$24$$ = this.$_arInfoletsToHide$)) {
        for ($i$$400$$ = 0;$i$$400$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$.length;$i$$400$$++) {
          $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$[$i$$400$$], this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []), $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$, $arFireHideOnEnd_arInfoletsToResize$$3$$.push($oldSizeStyleClass$$1_tmpInfolet$$);
        }
        this.$_arInfoletsToHide$ = null;
      }
    }
    if (!this.$_arInfoletsToHide$) {
      if (this.$_arFireHideOnEnd$) {
        $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
        for ($i$$400$$ = 0;$i$$400$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$400$$++) {
          $event$$520_infolet$$6$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$400$$], this.$isAnimationEnabled$() && this.$_removeStyleClassNameFunc$($event$$520_infolet$$6$$, this.$_transitionHideToStyleClass$), $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$ = $event$$520_infolet$$6$$.style, this.$_rtl$ ? $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$.right = "" : $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$.left = "", $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$.top = "", 
          this.$_hideTileOnEndFunc$ && this.$_hideTileOnEndFunc$($event$$520_infolet$$6$$);
        }
        this.$_arFireHideOnEnd$ = null;
      }
      this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_LAYOUT$;
      this.$_transitionStart$(!1);
      if (this.$_arInfoletsToResize$) {
        for ($arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arInfoletsToResize$, $i$$400$$ = 0;$i$$400$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$400$$ += 2) {
          $event$$520_infolet$$6$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$400$$], $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$400$$ + 1], $oldSizeStyleClass$$1_tmpInfolet$$ = this.$_getSizeStyleClassNameFunc$($event$$520_infolet$$6$$), this.$_removeStyleClassNameFunc$($event$$520_infolet$$6$$, $oldSizeStyleClass$$1_tmpInfolet$$), this.$_addStyleClassNameFunc$($event$$520_infolet$$6$$, $arInfoletsToHide$$2_newSizeStyleClass_style$$24$$), 
          this.$isAnimationEnabled$() && (this.$_addStyleClassNameFunc$($event$$520_infolet$$6$$, this.$_transitionResizeToStyleClass$), $event$$520_infolet$$6$$.$_afrOldSizeStyleClass$ = $oldSizeStyleClass$$1_tmpInfolet$$);
        }
      }
      this.$_transitionLayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$_showTiles$ = function $$MasonryLayoutCommon$$$$$_showTiles$$() {
    this.$_showTilesTimeout$ && (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null);
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_SHOW$;
    if (this.$_arInfoletsToShow$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$401$$ = 0;$i$$401$$ < $arInfoletsToShow$$1$$.length;$i$$401$$++) {
        var $infolet$$7$$ = $arInfoletsToShow$$1$$[$i$$401$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$7$$, "transitionend", this.$_handleShowTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$7$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$7$$, this.$_transitionShowToStyleClass$);
        this.$_removeStyleClassNameFunc$($infolet$$7$$, this.$_transitionShowFromStyleClass$);
      }
    } else {
      if (this.$_arInfoletsToShow$) {
        for ($arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$401$$ = 0;$i$$401$$ < $arInfoletsToShow$$1$$.length;$i$$401$$++) {
          $infolet$$7$$ = $arInfoletsToShow$$1$$[$i$$401$$], this.$_removeStyleClassNameFunc$($infolet$$7$$, this.$_transitionShowFromStyleClass$);
        }
      }
      this.$_handleShowTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleShowTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleShowTransitionEnd$$($event$$521_infolet$$8$$) {
    if ($event$$521_infolet$$8$$) {
      $event$$521_infolet$$8$$.preventDefault();
      $event$$521_infolet$$8$$.stopPropagation();
      $event$$521_infolet$$8$$ = $event$$521_infolet$$8$$.target;
      this.$_removeStyleClassNameFunc$($event$$521_infolet$$8$$, this.$_transitionShowToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$521_infolet$$8$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$521_infolet$$8$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
      var $arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$;
      if ($arInfoletsToShow$$2$$) {
        for (var $i$$402$$ = 0;$i$$402$$ < $arInfoletsToShow$$2$$.length;$i$$402$$++) {
          var $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$402$$];
          if ($tmpInfolet$$1$$ === $event$$521_infolet$$8$$) {
            $arInfoletsToShow$$2$$.splice($i$$402$$, 1);
            this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($event$$521_infolet$$8$$);
            break;
          }
        }
        1 > $arInfoletsToShow$$2$$.length && (this.$_arInfoletsToShow$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$)) {
        for ($i$$402$$ = 0;$i$$402$$ < $arInfoletsToShow$$2$$.length;$i$$402$$++) {
          $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$402$$], this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($tmpInfolet$$1$$);
        }
        this.$_arInfoletsToShow$ = null;
      }
    }
    this.$_arInfoletsToShow$ || (this.$_layoutPhase$ = null, this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$(), this.$_queuedRelayout$ && (this.$_queuedRelayout$ = !1, this.$_queueRelayout$()));
  };
  $MasonryLayoutCommon$$.$_PHASE_HIDE$ = 1;
  $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ = 2;
  $MasonryLayoutCommon$$.$_PHASE_SHOW$ = 3;
  (function() {
    function $_getNextElement$$($currElem$$1_elem$$155_nextElem$$2$$) {
      for (;$currElem$$1_elem$$155_nextElem$$2$$;) {
        $currElem$$1_elem$$155_nextElem$$2$$ = $currElem$$1_elem$$155_nextElem$$2$$.nextSibling;
        var $bVisible$$ = !0;
        if ($currElem$$1_elem$$155_nextElem$$2$$) {
          var $style$$31$$ = $currElem$$1_elem$$155_nextElem$$2$$.style;
          !$style$$31$$ || $style$$31$$.visibility !== $_HIDDEN$$1$$ && $style$$31$$.display !== $_NONE$$1$$ || ($bVisible$$ = !1);
        }
        if ($currElem$$1_elem$$155_nextElem$$2$$ && 1 === $currElem$$1_elem$$155_nextElem$$2$$.nodeType && $bVisible$$) {
          return $currElem$$1_elem$$155_nextElem$$2$$;
        }
      }
      return null;
    }
    function $_findContainingTile$$($elem$$154$$, $rootElem$$) {
      for (var $currElem$$ = $elem$$154$$;$currElem$$;) {
        var $parentElem$$5_style$$30$$ = $currElem$$.style;
        if ($parentElem$$5_style$$30$$ && ($parentElem$$5_style$$30$$.visibility === $_HIDDEN$$1$$ || $parentElem$$5_style$$30$$.display === $_NONE$$1$$)) {
          break;
        }
        $parentElem$$5_style$$30$$ = $currElem$$.parentNode;
        if ($parentElem$$5_style$$30$$ === $rootElem$$) {
          return $currElem$$;
        }
        $currElem$$ = $parentElem$$5_style$$30$$;
      }
      return null;
    }
    function $_compareTilesOriginalOrder$$($tile1$$, $tile2$$) {
      return $tile2$$.$_jetDataMasonryOriginalOrder$ < $tile1$$.$_jetDataMasonryOriginalOrder$ ? 1 : $tile1$$.$_jetDataMasonryOriginalOrder$ < $tile2$$.$_jetDataMasonryOriginalOrder$ ? -1 : 0;
    }
    function $_sortTilesOriginalOrder$$($arTiles$$4$$) {
      $arTiles$$4$$ && $arTiles$$4$$.sort($_compareTilesOriginalOrder$$);
      return $arTiles$$4$$;
    }
    function $_getTileSpan$$($elem$$153_tile$$12$$) {
      var $span$$1$$ = null;
      $elem$$153_tile$$12$$ = $$$$47$$($elem$$153_tile$$12$$);
      $elem$$153_tile$$12$$.hasClass("oj-masonrylayout-tile-1x1") ? $span$$1$$ = {colSpan:1, rowSpan:1} : $elem$$153_tile$$12$$.hasClass("oj-masonrylayout-tile-2x1") ? $span$$1$$ = {colSpan:2, rowSpan:1} : $elem$$153_tile$$12$$.hasClass("oj-masonrylayout-tile-3x1") ? $span$$1$$ = {colSpan:3, rowSpan:1} : $elem$$153_tile$$12$$.hasClass("oj-masonrylayout-tile-1x2") ? $span$$1$$ = {colSpan:1, rowSpan:2} : $elem$$153_tile$$12$$.hasClass("oj-masonrylayout-tile-1x3") ? $span$$1$$ = {colSpan:1, rowSpan:3} : 
      $elem$$153_tile$$12$$.hasClass("oj-masonrylayout-tile-2x2") ? $span$$1$$ = {colSpan:2, rowSpan:2} : $elem$$153_tile$$12$$.hasClass("oj-masonrylayout-tile-2x3") ? $span$$1$$ = {colSpan:2, rowSpan:3} : $elem$$153_tile$$12$$.hasClass("oj-masonrylayout-tile-3x2") && ($span$$1$$ = {colSpan:3, rowSpan:2});
      return $span$$1$$;
    }
    function $_getSizeStyleClassName$$($elem$$152_tile$$11$$) {
      var $str$$21$$ = null;
      $elem$$152_tile$$11$$ = $$$$47$$($elem$$152_tile$$11$$);
      $elem$$152_tile$$11$$.hasClass("oj-masonrylayout-tile-1x1") ? $str$$21$$ = "oj-masonrylayout-tile-1x1" : $elem$$152_tile$$11$$.hasClass("oj-masonrylayout-tile-2x1") ? $str$$21$$ = "oj-masonrylayout-tile-2x1" : $elem$$152_tile$$11$$.hasClass("oj-masonrylayout-tile-3x1") ? $str$$21$$ = "oj-masonrylayout-tile-3x1" : $elem$$152_tile$$11$$.hasClass("oj-masonrylayout-tile-1x2") ? $str$$21$$ = "oj-masonrylayout-tile-1x2" : $elem$$152_tile$$11$$.hasClass("oj-masonrylayout-tile-1x3") ? $str$$21$$ = 
      "oj-masonrylayout-tile-1x3" : $elem$$152_tile$$11$$.hasClass("oj-masonrylayout-tile-2x2") ? $str$$21$$ = "oj-masonrylayout-tile-2x2" : $elem$$152_tile$$11$$.hasClass("oj-masonrylayout-tile-2x3") ? $str$$21$$ = "oj-masonrylayout-tile-2x3" : $elem$$152_tile$$11$$.hasClass("oj-masonrylayout-tile-3x2") && ($str$$21$$ = "oj-masonrylayout-tile-3x2");
      return $str$$21$$;
    }
    function $_removeStyleClassName$$($elem$$151$$, $styleClass$$9$$) {
      $$$$47$$($elem$$151$$).removeClass($styleClass$$9$$);
    }
    function $_addStyleClassName$$($elem$$150$$, $styleClass$$8$$) {
      $$$$47$$($elem$$150$$).addClass($styleClass$$8$$);
    }
    $oj$$50$$.$__registerWidget$("oj.ojMasonryLayout", $$$$47$$.oj.baseComponent, {defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{reorderHandle:null, beforeInsert:null, insert:null, beforeRemove:null, remove:null, beforeResize:null, resize:null, beforeReorder:null, reorder:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-masonrylayout oj-component");
      this.options.disabled && $oj$$50$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$2$$);
      this.$reorderHandleEventNamespace$ = this.eventNamespace + "ReorderHandle";
      this.$_menu$ = {};
      this.$_menu$.$usermenu$ = !1;
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemCut$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_applyMenu$();
      this.$_setup$(!0);
    }, refresh:function() {
      this._super();
      var $bRecreate$$2$$ = "rtl" === this.$_GetReadingDirection$() !== this.$_bRTL$;
      $bRecreate$$2$$ && this.$_destroyMLCommon$();
      this.$_setup$($bRecreate$$2$$);
    }, $_NotifyShown$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyAttached$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyContextMenuGesture$:function($menu$$16$$, $event$$522$$, $eventType$$48$$) {
      this.$_prepareContextMenuBeforeOpen$($event$$522$$);
      this.$_OpenContextMenu$($event$$522$$, $eventType$$48$$, {launcher:$$$$47$$($event$$522$$.target).closest(":tabbable")});
    }, $_setup$:function($isInit$$2$$) {
      if (this.$_canCalculateSizes$()) {
        this.$_needsSetup$ = null;
        this.$_bRTL$ = "rtl" === this.$_GetReadingDirection$();
        this.$_bTouchSupported$ = $oj$$50$$.$DomUtils$.$isTouchSupported$();
        var $elem$$125_oldIsInit$$2$$ = this.element, $children$$19_options$$359$$ = this.options;
        if ($isInit$$2$$) {
          var $self$$200$$ = this;
          this.$_showTileOnEndFunc$ = function $this$$_showTileOnEndFunc$$($elem$$126$$) {
            $self$$200$$.$_showTileOnEnd$($elem$$126$$);
          };
          this.$_hideTileOnEndFunc$ = function $this$$_hideTileOnEndFunc$$($elem$$127$$) {
            $self$$200$$.$_hideTileOnEnd$($elem$$127$$);
          };
          this.$_layoutOnEndFunc$ = function $this$$_layoutOnEndFunc$$() {
            $self$$200$$.$_layoutOnEnd$();
          };
          this.$_layoutCycleOnStartFunc$ = function $this$$_layoutCycleOnStartFunc$$() {
            $self$$200$$.$_layoutCycleOnStart$();
          };
          this.$_layoutCycleOnEndFunc$ = function $this$$_layoutCycleOnEndFunc$$() {
            $self$$200$$.$_layoutCycleOnEnd$();
          };
          if (!this.$_mlCommon$) {
            var $selectors$$9$$ = {};
            $selectors$$9$$.$tiles$ = $_TILE_SELECTOR$$;
            var $styles$$2$$ = {$transitionComponentResizeToStyleClass$:"oj-masonrylayout-transition-resize-to", $transitionComponentResizeToFastStyleClass$:"oj-masonrylayout-transition-resize-to-fast", $transitionMoveToStyleClass$:"oj-masonrylayout-tile-transition-move-to", $transitionMoveToFastStyleClass$:"oj-masonrylayout-tile-transition-move-to-fast", $transitionHideFromStyleClass$:"oj-masonrylayout-tile-transition-hide-from", $transitionHideToStyleClass$:"oj-masonrylayout-tile-transition-hide-to"};
            $styles$$2$$.$transitionShowFromStyleClass$ = $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$;
            $styles$$2$$.$transitionShowToStyleClass$ = "oj-masonrylayout-tile-transition-show-to";
            $styles$$2$$.$transitionResizeToStyleClass$ = "oj-masonrylayout-tile-transition-resize-to";
            var $callbackInfo$$3$$ = {};
            $callbackInfo$$3$$.$addStyleClassName$ = $_addStyleClassName$$;
            $callbackInfo$$3$$.$removeStyleClassName$ = $_removeStyleClassName$$;
            $callbackInfo$$3$$.$getSizeStyleClassName$ = $_getSizeStyleClassName$$;
            $callbackInfo$$3$$.$getTileSpan$ = $_getTileSpan$$;
            $callbackInfo$$3$$.$showTileOnEndFunc$ = this.$_showTileOnEndFunc$;
            $callbackInfo$$3$$.$hideTileOnEndFunc$ = this.$_hideTileOnEndFunc$;
            $callbackInfo$$3$$.$layoutOnEndFunc$ = this.$_layoutOnEndFunc$;
            $callbackInfo$$3$$.$layoutCycleOnStartFunc$ = this.$_layoutCycleOnStartFunc$;
            $callbackInfo$$3$$.$layoutCycleOnEndFunc$ = this.$_layoutCycleOnEndFunc$;
            $callbackInfo$$3$$.$sortTilesOriginalOrderFunc$ = $_sortTilesOriginalOrder$$;
            $callbackInfo$$3$$.$subtreeAttached$ = $oj$$50$$.Components.$subtreeAttached$;
            $callbackInfo$$3$$.$subtreeDetached$ = $oj$$50$$.Components.$subtreeDetached$;
            this.$_saveTilesOriginalOrder$();
            this.$_mlCommon$ = new $MasonryLayoutCommon$$($elem$$125_oldIsInit$$2$$[0], this.$_bRTL$, "enabled" === $oj$$50$$.$Config$.$getAutomationMode$(), $selectors$$9$$, $styles$$2$$, $callbackInfo$$3$$);
          }
          this.$_handleDragStartFunc$ = function $this$$_handleDragStartFunc$$($event$$523$$) {
            $self$$200$$.$_handleDragStart$($event$$523$$);
          };
          this.$_handleDragEnterFunc$ = function $this$$_handleDragEnterFunc$$($event$$524$$) {
            $self$$200$$.$_handleDragEnter$($event$$524$$);
          };
          this.$_handleDragOverFunc$ = function $this$$_handleDragOverFunc$$($event$$525$$) {
            $self$$200$$.$_handleDragOver$($event$$525$$);
          };
          this.$_handleDragLeaveFunc$ = function $this$$_handleDragLeaveFunc$$($event$$526$$) {
            $self$$200$$.$_handleDragLeave$($event$$526$$);
          };
          this.$_handleDragEndFunc$ = function $this$$_handleDragEndFunc$$($event$$527$$) {
            $self$$200$$.$_handleDragEnd$($event$$527$$);
          };
          this.$_handleDropFunc$ = function $this$$_handleDropFunc$$($event$$528$$) {
            $self$$200$$.$_handleDrop$($event$$528$$);
          };
          $children$$19_options$$359$$.reorderHandle && this.$_setupReorderHandles$();
        } else {
          $children$$19_options$$359$$ = $elem$$125_oldIsInit$$2$$.children(), this.$_tearDownReorderHandlesForElem$($children$$19_options$$359$$), this.$_setupReorderHandlesForElem$($children$$19_options$$359$$), this.$_checkTilesOriginalOrder$();
        }
        this.$_mlCommon$.$setup$($isInit$$2$$);
        $isInit$$2$$ && (this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
          $self$$200$$.$_handleResize$();
        }, $oj$$50$$.$DomUtils$.$addResizeListener$($elem$$125_oldIsInit$$2$$[0], this.$_handleResizeFunc$));
      } else {
        $elem$$125_oldIsInit$$2$$ = !1, this.$_needsSetup$ && ($elem$$125_oldIsInit$$2$$ = this.$_needsSetup$[0]), this.$_needsSetup$ = [$isInit$$2$$ || $elem$$125_oldIsInit$$2$$];
      }
    }, _destroy:function() {
      this.$_clearMenu$();
      var $elem$$128$$ = this.element;
      $oj$$50$$.$DomUtils$.$removeResizeListener$($elem$$128$$[0], this.$_handleResizeFunc$);
      this.$_handleResizeFunc$ = null;
      this.$_restoreTilesOriginalOrder$();
      for (var $children$$20$$ = this.$_getTileElements$(), $numChildren$$ = $children$$20$$.length, $i$$403$$ = 0;$i$$403$$ < $numChildren$$;$i$$403$$++) {
        delete $children$$20$$[$i$$403$$].$_jetDataMasonryOriginalOrder$;
      }
      this.$_destroyMLCommon$();
      $elem$$128$$.removeClass("oj-masonrylayout oj-component");
      this.options.reorderHandle && this.$_tearDownReorderHandles$();
      this.$_arTilesToInsert$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_handleDropFunc$ = this.$_handleDragEndFunc$ = this.$_handleDragLeaveFunc$ = this.$_handleDragOverFunc$ = this.$_handleDragEnterFunc$ = this.$_handleDragStartFunc$ = null;
      this._super();
    }, _setOption:function($key$$167$$, $value$$278$$, $flags$$43$$) {
      var $bReorderHandle$$ = !1;
      switch($key$$167$$) {
        case "reorderHandle":
          this.$_tearDownReorderHandles$();
          $bReorderHandle$$ = !0;
          break;
        case "disabled":
          $oj$$50$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$2$$);
          break;
        case "contextMenu":
          $oj$$50$$.$DomUtils$.$isTouchSupported$() || (this.$_clearMenu$(), $value$$278$$ && this.$_initMenu$($value$$278$$));
      }
      this._super($key$$167$$, $value$$278$$, $flags$$43$$);
      $bReorderHandle$$ && $value$$278$$ && this.$_setupReorderHandles$();
    }, resizeTile:function($selector$$35$$, $sizeStyleClass$$1$$) {
      var $mlCommon$$1$$ = this.$_mlCommon$;
      $mlCommon$$1$$.$isInLayoutCycle$() && $mlCommon$$1$$.$finishLayoutCycle$();
      var $jqElem$$1$$ = $$$$47$$($selector$$35$$), $elem$$130$$ = $jqElem$$1$$[0], $prevSizeStyleClass$$ = $_getSizeStyleClassName$$($elem$$130$$);
      if ($sizeStyleClass$$1$$ == $prevSizeStyleClass$$) {
        throw Error("JET MasonryLayout: Unable to resize child " + $selector$$35$$ + " to style class " + $sizeStyleClass$$1$$ + " because " + $sizeStyleClass$$1$$ + " is already applied.");
      }
      !1 !== this._trigger("beforeResize", null, {tile:$jqElem$$1$$, previousSizeStyleClass:$prevSizeStyleClass$$, sizeStyleClass:$sizeStyleClass$$1$$}) && (this.$_arResizingTiles$ || (this.$_arResizingTiles$ = []), this.$_arResizingTiles$.push($elem$$130$$, $prevSizeStyleClass$$, $sizeStyleClass$$1$$), $mlCommon$$1$$.resizeTile($selector$$35$$, $sizeStyleClass$$1$$));
    }, insertTile:function($selector$$36$$, $index$$238$$) {
      var $mlCommon$$2$$ = this.$_mlCommon$;
      $mlCommon$$2$$.$isInLayoutCycle$() && $mlCommon$$2$$.$finishLayoutCycle$();
      isNaN($index$$238$$) && ($index$$238$$ = -1);
      var $jqElem$$2_style$$25$$ = $$$$47$$($selector$$36$$), $elem$$131$$ = $jqElem$$2_style$$25$$[0];
      !1 !== this._trigger("beforeInsert", null, {tile:$jqElem$$2_style$$25$$, index:$index$$238$$}) && ($elem$$131$$.$_jetDataTileInsertIndex$ = $index$$238$$, $mlCommon$$2$$.$isAnimationEnabled$() && $jqElem$$2_style$$25$$.addClass($_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$), $jqElem$$2_style$$25$$ = $elem$$131$$.style, $jqElem$$2_style$$25$$.top = "-1px", this.$_bRTL$ ? $jqElem$$2_style$$25$$.right = "-1px" : $jqElem$$2_style$$25$$.left = "-1px", this.$_insertTileOriginalOrder$($elem$$131$$, 
      $index$$238$$), $mlCommon$$2$$.$insertTileDomElem$($elem$$131$$, $index$$238$$), $oj$$50$$.Components.$subtreeAttached$($elem$$131$$), this.$_arTilesToInsert$ || (this.$_arTilesToInsert$ = []), this.$_arTilesToInsert$.push($selector$$36$$));
    }, removeTile:function($selector$$37$$) {
      var $mlCommon$$3$$ = this.$_mlCommon$;
      $mlCommon$$3$$.$isInLayoutCycle$() && $mlCommon$$3$$.$finishLayoutCycle$();
      var $jqInfolet$$ = $$$$47$$($selector$$37$$), $index$$239_infolet$$9$$ = $jqInfolet$$[0];
      if ($oj$$50$$.$FocusUtils$.$containsFocus$($index$$239_infolet$$9$$)) {
        var $children$$21$$ = this.$_getTileElements$(!0), $index$$239_infolet$$9$$ = $children$$21$$.indexOf($index$$239_infolet$$9$$);
        0 < $index$$239_infolet$$9$$ && (this.$_deletingTileWithFocusPrev$ = $children$$21$$[$index$$239_infolet$$9$$ - 1]);
      }
      !1 !== this._trigger("beforeRemove", null, {tile:$jqInfolet$$}) && $mlCommon$$3$$.$hideTile$($selector$$37$$);
    }, $_handleResize$:function() {
      this.$_bDragging$ || this.$_inLayoutCycle$ || this.$_mlCommon$.$resizeNotify$();
    }, $_showTileOnEnd$:function($elem$$132$$) {
      var $jqElem$$3$$ = $$$$47$$($elem$$132$$), $index$$240$$ = $elem$$132$$.$_jetDataTileInsertIndex$;
      delete $elem$$132$$.$_jetDataTileInsertIndex$;
      this.options.reorderHandle && this.$_setupReorderHandlesForElem$($jqElem$$3$$);
      this._trigger("insert", null, {tile:$jqElem$$3$$, index:$index$$240$$});
    }, $_hideTileOnEnd$:function($elem$$133$$) {
      var $jqElem$$4$$ = $$$$47$$($elem$$133$$);
      this.options.reorderHandle && this.$_tearDownReorderHandlesForElem$($jqElem$$4$$);
      $oj$$50$$.Components.$subtreeDetached$($elem$$133$$);
      $elem$$133$$.parentNode.removeChild($elem$$133$$);
      this.$_removeTileOriginalOrder$($elem$$133$$);
      this._trigger("remove", null, {tile:$jqElem$$4$$});
    }, $_layoutOnEnd$:function() {
      if (this.$_arTilesToInsert$) {
        for (var $arResizingTiles$$1_mlCommon$$5$$ = this.$_mlCommon$, $arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$ = this.$_arTilesToInsert$, $i$$404$$ = 0;$i$$404$$ < $arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$.length;$i$$404$$++) {
          $arResizingTiles$$1_mlCommon$$5$$.$showTile$($arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$[$i$$404$$]);
        }
        this.$_arTilesToInsert$ = null;
      }
      if (this.$_arResizingTiles$) {
        $arResizingTiles$$1_mlCommon$$5$$ = this.$_arResizingTiles$;
        for ($i$$404$$ = 0;$i$$404$$ < $arResizingTiles$$1_mlCommon$$5$$.length;$i$$404$$ += 3) {
          var $arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$404$$ + 1], $sizeStyleClass$$2$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$404$$ + 2], $arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$ = {tile:$$$$47$$($arResizingTiles$$1_mlCommon$$5$$[$i$$404$$]), previousSizeStyleClass:$arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$, sizeStyleClass:$sizeStyleClass$$2$$};
          this._trigger("resize", null, $arTilesToInsert$$1_eventData$$21_prevSizeStyleClass$$1$$);
        }
        this.$_arResizingTiles$ = null;
      }
      this.$_bDragging$ && (this.$_bDragMoveTransition$ ? this.$_handleDragMoveTransitionEnd$() : this.$_bDragEndTransition$ && this.$_handleDragEndTransitionEnd$());
    }, $_layoutCycleOnStart$:function() {
      this.$_inLayoutCycle$ = !0;
      this.$_layoutStartActiveDomElem$ = null;
      var $activeDomElem$$ = document.activeElement;
      $activeDomElem$$ && $oj$$50$$.$DomUtils$.$isAncestor$(this.element[0], $activeDomElem$$) && (this.$_layoutStartActiveDomElem$ = $activeDomElem$$);
    }, $_layoutCycleOnEnd$:function() {
      this.$_inLayoutCycle$ = !1;
      var $children$$22_elem$$135$$ = this.element[0];
      if (this.$_layoutStartActiveDomElem$) {
        var $layoutStartActiveDomElem_tile$$ = this.$_layoutStartActiveDomElem$;
        this.$_layoutStartActiveDomElem$ = null;
        if (this.$_deletingTileWithFocusPrev$) {
          if ($layoutStartActiveDomElem_tile$$ = this.$_deletingTileWithFocusPrev$, this.$_deletingTileWithFocusPrev$ = null, $layoutStartActiveDomElem_tile$$ && $oj$$50$$.$DomUtils$.$isAncestor$($children$$22_elem$$135$$, $layoutStartActiveDomElem_tile$$)) {
            var $children$$22_elem$$135$$ = this.$_getTileElements$($children$$22_elem$$135$$, !0), $index$$241$$ = $children$$22_elem$$135$$.indexOf($layoutStartActiveDomElem_tile$$);
            0 <= $index$$241$$ && $index$$241$$ < $children$$22_elem$$135$$.length - 1 ? $oj$$50$$.$FocusUtils$.$focusFirstTabStop$($children$$22_elem$$135$$[$index$$241$$ + 1]) : $oj$$50$$.$FocusUtils$.$focusFirstTabStop$($layoutStartActiveDomElem_tile$$);
          }
        } else {
          $oj$$50$$.$DomUtils$.$isAncestor$($children$$22_elem$$135$$, $layoutStartActiveDomElem_tile$$) ? $oj$$50$$.$FocusUtils$.$focusElement$($layoutStartActiveDomElem_tile$$) : $oj$$50$$.$FocusUtils$.$focusFirstTabStop$($children$$22_elem$$135$$);
        }
      }
    }, $_destroyMLCommon$:function() {
      var $mlCommon$$6$$ = this.$_mlCommon$;
      $mlCommon$$6$$ && $mlCommon$$6$$.destroy();
      this.$_mlCommon$ = null;
    }, $_canCalculateSizes$:function() {
      var $div$$5$$ = document.createElement("div"), $elem$$136_style$$26$$ = $div$$5$$.style;
      $elem$$136_style$$26$$.width = "10px";
      $elem$$136_style$$26$$.height = "10px";
      $elem$$136_style$$26$$ = this.element[0];
      $elem$$136_style$$26$$.appendChild($div$$5$$);
      var $bCanCalcSizes$$2$$ = !1;
      try {
        $bCanCalcSizes$$2$$ = 0 < $div$$5$$.offsetWidth && 0 < $div$$5$$.offsetHeight;
      } catch ($e$$107$$) {
      }
      $elem$$136_style$$26$$.removeChild($div$$5$$);
      return $bCanCalcSizes$$2$$;
    }, $_getTileElements$:function($excludeDropSite$$) {
      for (var $children$$23$$ = this.element.children($_TILE_SELECTOR$$), $numChildren$$1$$ = $children$$23$$.length, $arChildren$$2$$ = [], $i$$405$$ = 0;$i$$405$$ < $numChildren$$1$$;$i$$405$$++) {
        var $child$$20$$ = $children$$23$$[$i$$405$$];
        if (!$excludeDropSite$$ || $excludeDropSite$$ && $child$$20$$ !== this.$_dropSite$) {
          var $style$$27$$ = $child$$20$$.style;
          $style$$27$$.visibility !== $_HIDDEN$$1$$ && $style$$27$$.display !== $_NONE$$1$$ && $arChildren$$2$$.push($child$$20$$);
        }
      }
      return $arChildren$$2$$;
    }, $_saveTilesOriginalOrder$:function() {
      var $arTiles$$ = this.$_getTileElements$();
      if ($arTiles$$) {
        for (var $i$$406$$ = 0;$i$$406$$ < $arTiles$$.length;$i$$406$$++) {
          var $tile$$1$$ = $arTiles$$[$i$$406$$];
          $tile$$1$$.$_jetDataMasonryOriginalOrder$ || ($tile$$1$$.$_jetDataMasonryOriginalOrder$ = $i$$406$$ + 1);
        }
      }
    }, $_checkTilesOriginalOrder$:function() {
      var $arTiles$$1$$ = this.$_getTileElements$();
      if ($arTiles$$1$$) {
        for (var $i$$407$$ = 0;$i$$407$$ < $arTiles$$1$$.length;$i$$407$$++) {
          var $tile$$2$$ = $arTiles$$1$$[$i$$407$$];
          $tile$$2$$.$_jetDataMasonryOriginalOrder$ || this.$_insertTileOriginalOrder$($tile$$2$$, $i$$407$$);
        }
      }
    }, $_restoreTilesOriginalOrder$:function() {
      var $children$$24$$ = this.$_getTileElements$(), $sortedChildren$$ = this.$_getTileElements$();
      $_sortTilesOriginalOrder$$($sortedChildren$$);
      for (var $i$$408$$ = 0;$i$$408$$ < $children$$24$$.length;$i$$408$$++) {
        var $child$$21_sortedChildIndex$$ = $children$$24$$[$i$$408$$], $sortedChild$$ = $sortedChildren$$[$i$$408$$];
        $child$$21_sortedChildIndex$$ != $sortedChild$$ && ($oj$$50$$.Components.$subtreeDetached$($sortedChild$$), $child$$21_sortedChildIndex$$.parentNode.insertBefore($sortedChild$$, $child$$21_sortedChildIndex$$), $oj$$50$$.Components.$subtreeAttached$($sortedChild$$), $child$$21_sortedChildIndex$$ = $children$$24$$.indexOf($sortedChild$$), $child$$21_sortedChildIndex$$ > $i$$408$$ && ($children$$24$$.splice($child$$21_sortedChildIndex$$, 1), $children$$24$$.splice($i$$408$$, 0, $sortedChild$$)));
      }
    }, $_insertTileOriginalOrder$:function($insertedTile$$, $index$$242$$) {
      var $arTiles$$2$$ = this.$_getTileElements$();
      0 > $index$$242$$ && ($index$$242$$ = $arTiles$$2$$.length);
      if ($arTiles$$2$$) {
        for (var $i$$409$$ = 0;$i$$409$$ < $arTiles$$2$$.length;$i$$409$$++) {
          var $tile$$3$$ = $arTiles$$2$$[$i$$409$$];
          $tile$$3$$.$_jetDataMasonryOriginalOrder$ && $tile$$3$$.$_jetDataMasonryOriginalOrder$ >= $index$$242$$ + 1 && $tile$$3$$.$_jetDataMasonryOriginalOrder$++;
        }
      }
      $insertedTile$$.$_jetDataMasonryOriginalOrder$ = $index$$242$$ + 1;
    }, $_removeTileOriginalOrder$:function($removedTile$$) {
      if ($removedTile$$.$_jetDataMasonryOriginalOrder$) {
        var $arTiles$$3$$ = this.$_getTileElements$();
        if ($arTiles$$3$$) {
          for (var $i$$410$$ = 0;$i$$410$$ < $arTiles$$3$$.length;$i$$410$$++) {
            var $tile$$4$$ = $arTiles$$3$$[$i$$410$$];
            $tile$$4$$.$_jetDataMasonryOriginalOrder$ && $tile$$4$$.$_jetDataMasonryOriginalOrder$ > $removedTile$$.$_jetDataMasonryOriginalOrder$ && $tile$$4$$.$_jetDataMasonryOriginalOrder$--;
          }
        }
        delete $removedTile$$.$_jetDataMasonryOriginalOrder$;
      }
    }, $_initMenu$:function($newVal$$) {
      var $$m_menu$$17$$ = null, $dm_t$$1$$ = null;
      $newVal$$ || this.options.contextMenu || ($$m_menu$$17$$ = this.element.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m_menu$$17$$);
      if ($newVal$$ || this.options.contextMenu) {
        $$m_menu$$17$$ = $newVal$$ || this.options.contextMenu;
        $dm_t$$1$$ = $$$$47$$.type($$m_menu$$17$$);
        if ("function" == $dm_t$$1$$) {
          try {
            $$m_menu$$17$$ = $$m_menu$$17$$();
          } catch ($e$$108$$) {
            $$m_menu$$17$$ = null;
          }
          $dm_t$$1$$ = $$$$47$$.type($$m_menu$$17$$);
        }
        if ("string" === $dm_t$$1$$) {
          if ($$m_menu$$17$$ = $$$$47$$($$m_menu$$17$$)) {
            $$m_menu$$17$$.css("display", $_NONE$$1$$);
            $dm_t$$1$$ = this.$_menu$;
            if (!$dm_t$$1$$) {
              return;
            }
            $dm_t$$1$$.$$container$ = $$m_menu$$17$$;
            $dm_t$$1$$.$usermenu$ = !0;
          }
          this.$_menu$.$usermenu$ && $newVal$$ && this.$_applyMenu$();
        }
      }
    }, $_applyMenu$:function() {
      if (this.$_menu$ && this.$_menu$.$usermenu$ && this.options.reorderHandle) {
        var $$menuContainer$$ = this.$_menu$.$$container$, $self$$201$$ = this;
        $$menuContainer$$.on("ojselect", $$$$47$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$ = !1;
        $$menuContainer$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$47$$(this).children("a").length) {
            var $command$$12$$ = $$$$47$$(this).attr("data-oj-command").slice(17);
            $$$$47$$(this).replaceWith($self$$201$$.$_buildContextMenuItem$($command$$12$$));
            $$$$47$$(this).addClass("oj-menu-item");
            $bChanged$$ = !0;
          }
        });
        $bChanged$$ && $$menuContainer$$.ojMenu("refresh");
        this.$_menu$.$$elemCut$ = $$menuContainer$$.find("#" + $_OJMASONRYLAYOUTCUT$$);
        this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$.find("#" + $_OJMASONRYLAYOUTPASTEBEFORE$$);
        this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$.find("#" + $_OJMASONRYLAYOUTPASTEAFTER$$);
      }
    }, $_clearMenu$:function() {
      var $menu$$18$$ = this.$_menu$;
      $menu$$18$$ && $menu$$18$$.$usermenu$ && ($menu$$18$$.$usermenu$ = !1, $menu$$18$$.$$container$.off("ojselect"), $menu$$18$$.$$container$ = null);
    }, $_prepareContextMenuBeforeOpen$:function($e$$109_tile$$5$$) {
      $e$$109_tile$$5$$ = $_findContainingTile$$($e$$109_tile$$5$$.originalEvent.target, this.element[0]);
      this.$_menu$.tile = $e$$109_tile$$5$$;
      if (this.$_menu$.$usermenu$) {
        var $cutTile$$ = this.$_menu$.$cutTile$, $bRefreshMenu$$ = !1, $elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemCut$;
        if ($elemCut_elemPasteAfter_elemPasteBefore$$) {
          var $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1;
          $cutTile$$ && $e$$109_tile$$5$$ === $cutTile$$ && ($bDisable$$ = !0);
          $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteBefore$) {
          $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1, $cutTile$$ && $e$$109_tile$$5$$ !== $cutTile$$ && $e$$109_tile$$5$$ !== $_getNextElement$$($cutTile$$) || ($bDisable$$ = !0), $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && 
          ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteAfter$) {
          $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1, $cutTile$$ && $cutTile$$ !== $e$$109_tile$$5$$ && $cutTile$$ !== $_getNextElement$$($e$$109_tile$$5$$) || ($bDisable$$ = !0), $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && 
          ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        $bRefreshMenu$$ && this.$_menu$.$$container$.ojMenu("refresh");
      }
    }, $_buildContextMenuItem$:function($cmd_transKey$$) {
      var $id$$37$$ = $_MENU_CMD_MAP$$[$cmd_transKey$$];
      $cmd_transKey$$ = $_MENU_TRANSLATION_MAP$$[$cmd_transKey$$];
      var $label$$16$$ = $$$$47$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e');
      $label$$16$$.text(this.$getTranslatedString$($cmd_transKey$$));
      $label$$16$$.wrap("\x3cli id\x3d" + $id$$37$$ + "\x3e\x3c/li\x3e");
      return $label$$16$$.parent();
    }, $_menuCut$:function($obj$$55$$) {
      $obj$$55$$ && (this.$_menu$.$cutTile$ = $obj$$55$$);
    }, $_menuPaste$:function($obj$$56$$, $pasteBefore$$) {
      if ($obj$$56$$ && this.$_menu$.$cutTile$) {
        var $cutTile$$1$$ = this.$_menu$.$cutTile$;
        this.$_menu$.$cutTile$ = !1;
        this.$_doPaste$($cutTile$$1$$, $obj$$56$$, $pasteBefore$$);
      }
    }, $_doPaste$:function($cutTile$$2$$, $nextElem_pasteTile$$, $pasteBefore$$1$$) {
      var $fromIndex$$3$$ = $cutTile$$2$$.$_jetDataMasonryOriginalOrder$ - 1, $jqCutTile$$ = $$$$47$$($cutTile$$2$$);
      if (!1 !== this._trigger("beforeReorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$})) {
        this.$_removeTileOriginalOrder$($cutTile$$2$$);
        var $toIndex$$ = $nextElem_pasteTile$$.$_jetDataMasonryOriginalOrder$ - 1;
        $pasteBefore$$1$$ || $toIndex$$++;
        var $elem$$139$$ = this.element[0];
        $pasteBefore$$1$$ || ($nextElem_pasteTile$$ = $_getNextElement$$($nextElem_pasteTile$$));
        this.$_insertTileOriginalOrder$($cutTile$$2$$, $toIndex$$);
        $elem$$139$$.insertBefore($cutTile$$2$$, $nextElem_pasteTile$$);
        this.$_mlCommon$.$setup$(!0);
        this._trigger("reorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$, toIndex:$toIndex$$});
      }
    }, $_handleContextMenuSelect$:function($ev$$3$$, $ui$$31$$) {
      var $id$$38$$ = $ui$$31$$ ? $ui$$31$$.item.attr("id") : void 0;
      $id$$38$$ === $_OJMASONRYLAYOUTCUT$$ ? this.$_menuCut$(this.$_menu$.tile) : $id$$38$$ === $_OJMASONRYLAYOUTPASTEBEFORE$$ ? this.$_menuPaste$(this.$_menu$.tile, !0) : $id$$38$$ === $_OJMASONRYLAYOUTPASTEAFTER$$ && this.$_menuPaste$(this.$_menu$.tile, !1);
    }, $_getTileIndex$:function($tile$$6$$) {
      var $children$$25$$ = this.$_getTileElements$(!0);
      $_sortTilesOriginalOrder$$($children$$25$$);
      for (var $numChildren$$2$$ = $children$$25$$.length, $i$$411$$ = 0;$i$$411$$ < $numChildren$$2$$;$i$$411$$++) {
        if ($children$$25$$[$i$$411$$] === $tile$$6$$) {
          return $i$$411$$;
        }
      }
      return-1;
    }, $_setupReorderHandles$:function() {
      var $elem$$140$$ = this.element, $children$$26$$ = $elem$$140$$.children();
      this.$_setupReorderHandlesForElem$($children$$26$$);
      $elem$$140$$.on("dragstart" + this.$reorderHandleEventNamespace$, this.$_handleDragStartFunc$).on("dragenter" + this.$reorderHandleEventNamespace$, this.$_handleDragEnterFunc$).on("dragover" + this.$reorderHandleEventNamespace$, this.$_handleDragOverFunc$).on("dragleave" + this.$reorderHandleEventNamespace$, this.$_handleDragLeaveFunc$).on("dragend" + this.$reorderHandleEventNamespace$, this.$_handleDragEndFunc$).on("drop" + this.$reorderHandleEventNamespace$, this.$_handleDropFunc$);
    }, $_setupReorderHandlesForElem$:function($jqElem$$5$$) {
      var $options$$364$$ = this.options;
      $jqElem$$5$$.filter($options$$364$$.reorderHandle).attr($_DRAGGABLE$$, "true").addClass($_OJ_DRAGGABLE$$);
      $jqElem$$5$$.find($options$$364$$.reorderHandle).attr($_DRAGGABLE$$, "true").addClass($_OJ_DRAGGABLE$$);
    }, $_tearDownReorderHandles$:function() {
      var $elem$$141$$ = this.element, $children$$27$$ = $elem$$141$$.children();
      this.$_tearDownReorderHandlesForElem$($children$$27$$);
      $elem$$141$$.off(this.$reorderHandleEventNamespace$);
    }, $_tearDownReorderHandlesForElem$:function($jqElem$$6$$) {
      var $options$$365$$ = this.options;
      $jqElem$$6$$.filter($options$$365$$.reorderHandle).removeAttr($_DRAGGABLE$$).removeClass($_OJ_DRAGGABLE$$);
      $jqElem$$6$$.find($options$$365$$.reorderHandle).removeAttr($_DRAGGABLE$$).removeClass($_OJ_DRAGGABLE$$);
    }, $_handleDragStart$:function($event$$529_originalEvent$$6$$) {
      if (this.options.reorderHandle && !this.$_bDragging$) {
        var $tile$$7$$ = $_findContainingTile$$($event$$529_originalEvent$$6$$.target, this.element[0]);
        if ($tile$$7$$) {
          var $eventData$$23_index$$243$$ = this.$_getTileIndex$($tile$$7$$);
          $tile$$7$$.$_jetDataMasonryDragSourceIndex$ = $eventData$$23_index$$243$$;
          $eventData$$23_index$$243$$ = {tile:$$$$47$$($tile$$7$$), fromIndex:$eventData$$23_index$$243$$};
          !1 !== this._trigger("beforeReorder", null, $eventData$$23_index$$243$$) && ($event$$529_originalEvent$$6$$ = $event$$529_originalEvent$$6$$.originalEvent, this.$_dragStart$($tile$$7$$, $event$$529_originalEvent$$6$$.pageX, $event$$529_originalEvent$$6$$.pageY, $event$$529_originalEvent$$6$$.dataTransfer));
        }
      }
    }, $_handleDragEnter$:function($event$$530_originalEvent$$7$$) {
      $event$$530_originalEvent$$7$$ = $event$$530_originalEvent$$7$$.originalEvent;
      var $elemUnderPoint_relatedTarget$$ = $event$$530_originalEvent$$7$$.relatedTarget, $elem$$143$$ = this.element[0], $enteringMasonryLayout$$ = !1;
      $elemUnderPoint_relatedTarget$$ ? $enteringMasonryLayout$$ = $elem$$143$$ != $elemUnderPoint_relatedTarget$$ && !$oj$$50$$.$DomUtils$.$isAncestor$($elem$$143$$, $elemUnderPoint_relatedTarget$$) : this.$_dragLeftMasonryLayout$ && ($enteringMasonryLayout$$ = ($elemUnderPoint_relatedTarget$$ = document.elementFromPoint($event$$530_originalEvent$$7$$.clientX, $event$$530_originalEvent$$7$$.clientY)) && ($elemUnderPoint_relatedTarget$$ == $elem$$143$$ || $oj$$50$$.$DomUtils$.$isAncestor$($elem$$143$$, 
      $elemUnderPoint_relatedTarget$$)));
      $enteringMasonryLayout$$ && ((this.$_dragLeftMasonryLayout$ = !1, this.$_draggedTile$) ? this.$_dropSite$ && ($$$$47$$(this.$_dropSite$).css("display", ""), this.$_mlCommon$.$setup$(!1, !0)) : $event$$530_originalEvent$$7$$.dataTransfer.dropEffect = "none");
    }, $_handleDragOver$:function($event$$531$$) {
      var $originalEvent$$8$$ = $event$$531$$.originalEvent;
      $originalEvent$$8$$.dataTransfer.dropEffect = "move";
      this.$_dragMove$($originalEvent$$8$$.pageX, $originalEvent$$8$$.clientX, $originalEvent$$8$$.clientY);
      $event$$531$$.preventDefault();
      return!1;
    }, $_handleDragLeave$:function($elem$$144_event$$532$$) {
      var $elemUnderPoint$$1_originalEvent$$9$$ = $elem$$144_event$$532$$.originalEvent, $relatedTarget$$1$$ = $elemUnderPoint$$1_originalEvent$$9$$.relatedTarget;
      $elem$$144_event$$532$$ = this.element[0];
      var $leavingMasonryLayout$$ = !1;
      $leavingMasonryLayout$$ = $relatedTarget$$1$$ ? $elem$$144_event$$532$$ != $relatedTarget$$1$$ && !$oj$$50$$.$DomUtils$.$isAncestor$($elem$$144_event$$532$$, $relatedTarget$$1$$) : ($elemUnderPoint$$1_originalEvent$$9$$ = document.elementFromPoint($elemUnderPoint$$1_originalEvent$$9$$.clientX, $elemUnderPoint$$1_originalEvent$$9$$.clientY)) && $elemUnderPoint$$1_originalEvent$$9$$ != $elem$$144_event$$532$$ && !$oj$$50$$.$DomUtils$.$isAncestor$($elem$$144_event$$532$$, $elemUnderPoint$$1_originalEvent$$9$$);
      $leavingMasonryLayout$$ && (this.$_dragLeftMasonryLayout$ = !0, this.$_dropSite$ && ($$$$47$$(this.$_dropSite$).css("display", $_NONE$$1$$), this.$_mlCommon$.$setup$(!1, !0)));
    }, $_clearDragStartHideTileTimeout$:function() {
      if (this.$_dragStartHideTileTimeout$) {
        clearTimeout(this.$_dragStartHideTileTimeout$);
        this.$_dragStartHideTileTimeout$ = null;
        var $draggedTile$$ = this.$_draggedTile$;
        $draggedTile$$ && $$$$47$$($draggedTile$$).removeClass("oj-drag");
      }
    }, $_handleDragEnd$:function() {
      this.$_clearDragStartHideTileTimeout$();
      if (!this.$_bDropping$) {
        var $draggedTile$$1$$ = this.$_draggedTile$;
        if ($draggedTile$$1$$ && this.$_dropSite$) {
          var $dropSite$$ = this.$_dropSite$;
          $oj$$50$$.$DomUtils$.$isAncestor$(this.element[0], $draggedTile$$1$$) && ($$$$47$$($dropSite$$).css("display", ""), this.$_removeTileOriginalOrder$($dropSite$$), $dropSite$$.parentNode.removeChild($dropSite$$), $$$$47$$($draggedTile$$1$$).css("display", ""), this.$_insertTileOriginalOrder$($draggedTile$$1$$, $draggedTile$$1$$.$_jetDataMasonryOriginalOrder$ - 1), this.$_mlCommon$.$setup$(!1, !0));
          delete $draggedTile$$1$$.$_jetDataMasonryDragSourceIndex$;
        }
        this.$_dropSite$ = this.$_draggedTile$ = null;
        this.$_bMouseMoved$ = this.$_bDragMoveTransition$ = !1;
        this.$_dragOffset$ = null;
        this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      }
    }, $_handleDrop$:function($event$$534$$) {
      var $mlCommon$$11_originalEvent$$10$$ = this.$_mlCommon$;
      $mlCommon$$11_originalEvent$$10$$.$isInLayoutCycle$() && $mlCommon$$11_originalEvent$$10$$.$finishLayoutCycle$();
      this.$_clearDragStartHideTileTimeout$();
      $mlCommon$$11_originalEvent$$10$$ = $event$$534$$.originalEvent;
      this.$_drop$(this.$_draggedTile$, $mlCommon$$11_originalEvent$$10$$.pageX, $mlCommon$$11_originalEvent$$10$$.pageY);
      $event$$534$$.stopPropagation();
      return!1;
    }, $_dragStart$:function($tile$$8$$, $dragOffset_pageX$$1$$, $pageY$$1$$, $dataTransfer$$4$$) {
      this.$_bDragging$ = !0;
      this.$_bDragStartTileHidden$ = this.$_bMouseMoved$ = this.$_bDropping$ = !1;
      this.$_draggedTile$ = $tile$$8$$;
      var $elem$$146$$ = this.element[0], $offset$$28_sizeClass_style$$28$$ = $_getSizeStyleClassName$$($tile$$8$$), $dropSite$$1$$ = this.$_dropSite$ = document.createElement("div");
      $dropSite$$1$$.$_jetDataMasonryOriginalOrder$ = $tile$$8$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$1$$.className = $offset$$28_sizeClass_style$$28$$ + " oj-drop";
      var $offset$$28_sizeClass_style$$28$$ = $dropSite$$1$$.style, $tileStyle$$ = $tile$$8$$.style;
      $offset$$28_sizeClass_style$$28$$.top = $tileStyle$$.top;
      this.$_bRTL$ ? $offset$$28_sizeClass_style$$28$$.right = $tileStyle$$.right : $offset$$28_sizeClass_style$$28$$.left = $tileStyle$$.left;
      $offset$$28_sizeClass_style$$28$$ = $$$$47$$($tile$$8$$).offset();
      $elem$$146$$.insertBefore($dropSite$$1$$, $tile$$8$$);
      this.$_dragOffset$ = $dragOffset_pageX$$1$$ = {left:$dragOffset_pageX$$1$$ - $offset$$28_sizeClass_style$$28$$.left, top:$pageY$$1$$ - $offset$$28_sizeClass_style$$28$$.top};
      $$$$47$$($tile$$8$$).addClass("oj-drag");
      $dataTransfer$$4$$.effectAllowed = "move";
      $dataTransfer$$4$$.setData("text/html", $tile$$8$$.outerHTML);
      $dataTransfer$$4$$.setDragImage($tile$$8$$, $dragOffset_pageX$$1$$.left, $dragOffset_pageX$$1$$.top);
      var $self$$202$$ = this;
      this.$_dragStartHideTileTimeout$ = setTimeout(function() {
        $self$$202$$.$_bDragStartTileHidden$ = !0;
        $tileStyle$$.display = $_NONE$$1$$;
        $$$$47$$($tile$$8$$).removeClass("oj-drag");
        $self$$202$$.$_dragStartHideTileTimeout$ = null;
        $oj$$50$$.Components.$subtreeHidden$($tile$$8$$);
      }, 0);
    }, $_dragMove$:function($bRightSide_nextElem$$1_pageX$$2$$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_oldNextSibling$$) {
      this.$_bMouseMoved$ = !0;
      if (this.$_bDragStartTileHidden$ && !this.$_bDragMoveTransition$) {
        var $elem$$147$$ = this.element[0];
        $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = document.elementFromPoint($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_oldNextSibling$$);
        if (($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = $_findContainingTile$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $elem$$147$$)) && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_dropSite$ && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_draggedTile$) {
          var $offset$$29$$ = $$$$47$$($elem$$147$$).offset();
          $clientY$$2_oldNextSibling$$ = $_getNextElement$$(this.$_dropSite$);
          $bRightSide_nextElem$$1_pageX$$2$$ = $bRightSide_nextElem$$1_pageX$$2$$ - $offset$$29$$.left >= $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetLeft + .5 * $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetWidth;
          this.$_removeTileOriginalOrder$(this.$_dropSite$);
          $bRightSide_nextElem$$1_pageX$$2$$ && !this.$_bRTL$ || !$bRightSide_nextElem$$1_pageX$$2$$ && this.$_bRTL$ ? ($bRightSide_nextElem$$1_pageX$$2$$ = $_getNextElement$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$)) ? (this.$_insertTileOriginalOrder$(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$.$_jetDataMasonryOriginalOrder$ - 1), $elem$$147$$.insertBefore(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$), 
          $elem$$147$$.appendChild(this.$_dropSite$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$ - 1), $elem$$147$$.insertBefore(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$));
          $clientY$$2_oldNextSibling$$ !== $_getNextElement$$(this.$_dropSite$) && (this.$_bDragMoveTransition$ = this.$_mlCommon$.$setup$(!1, !0));
        }
      }
    }, $_handleDragMoveTransitionEnd$:function() {
      this.$_bDragMoveTransition$ = !1;
    }, $_drop$:function($tile$$9$$, $newLeft$$1_pageX$$3$$, $pageY$$2$$) {
      this.$_bDropping$ = !0;
      var $elem$$148$$ = this.element[0], $dropSite$$2_style$$29$$ = this.$_dropSite$;
      this.$_dropSite$ = null;
      $oj$$50$$.Components.$subtreeDetached$($tile$$9$$);
      $elem$$148$$.replaceChild($tile$$9$$, $dropSite$$2_style$$29$$);
      $oj$$50$$.Components.$subtreeAttached$($tile$$9$$);
      $tile$$9$$.$_jetDataMasonryOriginalOrder$ = $dropSite$$2_style$$29$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$2_style$$29$$ = $tile$$9$$.style;
      $dropSite$$2_style$$29$$.display = "";
      $oj$$50$$.Components.$subtreeShown$($tile$$9$$);
      var $offset$$30$$ = $$$$47$$($elem$$148$$).offset(), $dragOffset$$1$$ = this.$_dragOffset$;
      $dropSite$$2_style$$29$$.top = $pageY$$2$$ - $dragOffset$$1$$.top - $offset$$30$$.top + $_PX$$1$$;
      $newLeft$$1_pageX$$3$$ = $newLeft$$1_pageX$$3$$ - $dragOffset$$1$$.left - $offset$$30$$.left;
      this.$_bRTL$ ? ($dropSite$$2_style$$29$$.right = $elem$$148$$.offsetWidth - ($newLeft$$1_pageX$$3$$ + $$$$47$$($tile$$9$$).outerWidth(!0)) + $_PX$$1$$, $dropSite$$2_style$$29$$.left = "") : $dropSite$$2_style$$29$$.left = $newLeft$$1_pageX$$3$$ + $_PX$$1$$;
      this.$_dragOffset$ = null;
      this.$_bMouseMoved$ ? this.$_bDragEndTransition$ = this.$_mlCommon$.$setup$(!1, !0) : this.$_handleDragEndTransitionEnd$();
    }, $_handleDragEndTransitionEnd$:function() {
      this.$_bDragStartTileHidden$ = this.$_bMouseMoved$ = this.$_bDropping$ = this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      var $eventData$$24_tile$$10$$ = this.$_draggedTile$;
      this.$_draggedTile$ = null;
      var $fromIndex$$4$$ = $eventData$$24_tile$$10$$.$_jetDataMasonryDragSourceIndex$;
      delete $eventData$$24_tile$$10$$.$_jetDataMasonryDragSourceIndex$;
      var $toIndex$$1$$ = this.$_getTileIndex$($eventData$$24_tile$$10$$), $eventData$$24_tile$$10$$ = {tile:$$$$47$$($eventData$$24_tile$$10$$), fromIndex:$fromIndex$$4$$, toIndex:$toIndex$$1$$};
      this._trigger("reorder", null, $eventData$$24_tile$$10$$);
    }, getNodeBySubId:function($locator$$45$$) {
      return this._super($locator$$45$$);
    }, getSubIdByNode:function($node$$100$$) {
      return this._super($node$$100$$);
    }});
    var $_PX$$1$$ = "px", $_HIDDEN$$1$$ = "hidden", $_NONE$$1$$ = "none", $_DRAGGABLE$$ = "draggable", $_OJ_DISABLED$$ = "oj-disabled", $_OJ_DRAGGABLE$$ = "oj-draggable", $_TILE_SELECTOR$$ = ".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2", $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$ = "oj-masonrylayout-tile-transition-show-from", 
    $_WARNING_DISABLED_OPTION$$2$$ = "JET MasonryLayout: 'disabled' option not supported", $_OJMASONRYLAYOUTCUT$$ = "ojmasonrylayoutcut", $_OJMASONRYLAYOUTPASTEBEFORE$$ = "ojmasonrylayoutpastebefore", $_OJMASONRYLAYOUTPASTEAFTER$$ = "ojmasonrylayoutpasteafter", $_MENU_CMD_MAP$$ = {cut:$_OJMASONRYLAYOUTCUT$$, "paste-before":$_OJMASONRYLAYOUTPASTEBEFORE$$, "paste-after":$_OJMASONRYLAYOUTPASTEAFTER$$}, $_MENU_TRANSLATION_MAP$$ = {cut:"labelCut", "paste-before":"labelPasteBefore", "paste-after":"labelPasteAfter"};
  })();
});

/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/app/polymer/paper-menu-directives';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/change_detection/change_detection_util';
import * as import3 from '@angular/core/src/linker/view_utils';
export class Wrapper_PaperMenuChangeEventsAdapterDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperMenuChangeEventsAdapterDirective;
  /*private*/ _changed:boolean;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  subscription4:any;
  constructor() {
    this._changed = false;
    this.context = new import0.PaperMenuChangeEventsAdapterDirective();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
    (this.subscription4 && this.subscription4.unsubscribe());
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'selected-changed')) {
      const pd_sub_0:any = ((<any>this.context._emitChangeEvent('selected',$event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'selected-item-changed')) {
      const pd_sub_1:any = ((<any>this.context._emitChangeEvent('selectedItem',$event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'items-changed')) {
      const pd_sub_2:any = ((<any>this.context._emitChangeEvent('items',$event)) !== false);
      result = (pd_sub_2 && result);
    }
    if ((eventName == 'selected-values-changed')) {
      const pd_sub_3:any = ((<any>this.context._emitChangeEvent('selectedValues',$event)) !== false);
      result = (pd_sub_3 && result);
    }
    if ((eventName == 'selected-items-changed')) {
      const pd_sub_4:any = ((<any>this.context._emitChangeEvent('selectedItems',$event)) !== false);
      result = (pd_sub_4 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean,emit4:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.selectedChange.subscribe(_eventHandler.bind(view,'selectedChange'))); }
    if (emit1) { (this.subscription1 = this.context.selectedItemChange.subscribe(_eventHandler.bind(view,'selectedItemChange'))); }
    if (emit2) { (this.subscription2 = this.context.itemsChange.subscribe(_eventHandler.bind(view,'itemsChange'))); }
    if (emit3) { (this.subscription3 = this.context.selectedValuesChange.subscribe(_eventHandler.bind(view,'selectedValuesChange'))); }
    if (emit4) { (this.subscription4 = this.context.selectedItemsChange.subscribe(_eventHandler.bind(view,'selectedItemsChange'))); }
  }
}
export class Wrapper_PaperMenuNotifyForDiffersDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperMenuNotifyForDiffersDirective;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.PaperMenuNotifyForDiffersDirective(p0,p1,p2);
    this._expr_0 = import2.UNINITIALIZED;
    this._expr_1 = import2.UNINITIALIZED;
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_selectedValues(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.selectedValues = currValue;
      this._expr_0 = currValue;
    }
  }
  check_keyEventTarget(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.keyEventTarget = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) {
      if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); }
      this.context.ngDoCheck();
    }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'selected-values-changed')) {
      const pd_sub_0:any = ((<any>this.context._setValueFromElement('selectedValues',$event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'key-event-target-changed')) {
      const pd_sub_1:any = ((<any>this.context._setValueFromElement('keyEventTarget',$event)) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_PaperMenuReloadConfigurationDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperMenuReloadConfigurationDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PaperMenuReloadConfigurationDirective(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_PaperMenuFormElementDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperMenuFormElementDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PaperMenuFormElementDirective(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'valueChange')) {
      const pd_sub_0:any = ((<any>this.context.onValueChanged($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_PaperMenuValidationDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperMenuValidationDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PaperMenuValidationDirective(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { this.context.ngDoCheck(); }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
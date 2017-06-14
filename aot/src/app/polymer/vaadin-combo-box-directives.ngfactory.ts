/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/app/polymer/vaadin-combo-box-directives';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/change_detection/change_detection_util';
import * as import3 from '@angular/core/src/linker/view_utils';
export class Wrapper_VaadinComboBoxChangeEventsAdapterDirective {
  /*private*/ _eventHandler:Function;
  context:import0.VaadinComboBoxChangeEventsAdapterDirective;
  /*private*/ _changed:boolean;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  constructor() {
    this._changed = false;
    this.context = new import0.VaadinComboBoxChangeEventsAdapterDirective();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
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
    if ((eventName == 'invalid-changed')) {
      const pd_sub_0:any = ((<any>this.context._emitChangeEvent('invalid',$event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'value-changed')) {
      const pd_sub_1:any = ((<any>this.context._emitChangeEvent('value',$event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'opened-changed')) {
      const pd_sub_2:any = ((<any>this.context._emitChangeEvent('opened',$event)) !== false);
      result = (pd_sub_2 && result);
    }
    if ((eventName == 'selected-item-changed')) {
      const pd_sub_3:any = ((<any>this.context._emitChangeEvent('selectedItem',$event)) !== false);
      result = (pd_sub_3 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.invalidChange.subscribe(_eventHandler.bind(view,'invalidChange'))); }
    if (emit1) { (this.subscription1 = this.context.valueChange.subscribe(_eventHandler.bind(view,'valueChange'))); }
    if (emit2) { (this.subscription2 = this.context.openedChange.subscribe(_eventHandler.bind(view,'openedChange'))); }
    if (emit3) { (this.subscription3 = this.context.selectedItemChange.subscribe(_eventHandler.bind(view,'selectedItemChange'))); }
  }
}
export class Wrapper_VaadinComboBoxNotifyForDiffersDirective {
  /*private*/ _eventHandler:Function;
  context:import0.VaadinComboBoxNotifyForDiffersDirective;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.VaadinComboBoxNotifyForDiffersDirective(p0,p1,p2);
    this._expr_0 = import2.UNINITIALIZED;
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_items(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.items = currValue;
      this._expr_0 = currValue;
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
    if ((eventName == 'items-changed')) {
      const pd_sub_0:any = ((<any>this.context._setValueFromElement('items',$event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_VaadinComboBoxFormElementDirective {
  /*private*/ _eventHandler:Function;
  context:import0.VaadinComboBoxFormElementDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.VaadinComboBoxFormElementDirective(p0,p1);
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
export class Wrapper_VaadinComboBoxValidationDirective {
  /*private*/ _eventHandler:Function;
  context:import0.VaadinComboBoxValidationDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.VaadinComboBoxValidationDirective(p0,p1);
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
export class Wrapper_VaadinComboBoxReloadConfigurationDirective {
  /*private*/ _eventHandler:Function;
  context:import0.VaadinComboBoxReloadConfigurationDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.VaadinComboBoxReloadConfigurationDirective(p0,p1);
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
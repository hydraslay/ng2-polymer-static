/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/app/polymer/paper-input-directives';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/change_detection/change_detection_util';
import * as import3 from '@angular/core/src/linker/view_utils';
export class Wrapper_PaperInputChangeEventsAdapterDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperInputChangeEventsAdapterDirective;
  /*private*/ _changed:boolean;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  constructor() {
    this._changed = false;
    this.context = new import0.PaperInputChangeEventsAdapterDirective();
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
    if ((eventName == 'value-changed')) {
      const pd_sub_0:any = ((<any>this.context._emitChangeEvent('value',$event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'focused-changed')) {
      const pd_sub_1:any = ((<any>this.context._emitChangeEvent('focused',$event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'disabled-changed')) {
      const pd_sub_2:any = ((<any>this.context._emitChangeEvent('disabled',$event)) !== false);
      result = (pd_sub_2 && result);
    }
    if ((eventName == 'invalid-changed')) {
      const pd_sub_3:any = ((<any>this.context._emitChangeEvent('invalid',$event)) !== false);
      result = (pd_sub_3 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.focusedChange.subscribe(_eventHandler.bind(view,'focusedChange'))); }
    if (emit1) { (this.subscription1 = this.context.disabledChange.subscribe(_eventHandler.bind(view,'disabledChange'))); }
    if (emit2) { (this.subscription2 = this.context.valueChange.subscribe(_eventHandler.bind(view,'valueChange'))); }
    if (emit3) { (this.subscription3 = this.context.invalidChange.subscribe(_eventHandler.bind(view,'invalidChange'))); }
  }
}
export class Wrapper_PaperInputNotifyForDiffersDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperInputNotifyForDiffersDirective;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.PaperInputNotifyForDiffersDirective(p0,p1,p2);
    this._expr_0 = import2.UNINITIALIZED;
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_keyEventTarget(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.keyEventTarget = currValue;
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
    if ((eventName == 'key-event-target-changed')) {
      const pd_sub_0:any = ((<any>this.context._setValueFromElement('keyEventTarget',$event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_PaperInputFormElementDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperInputFormElementDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PaperInputFormElementDirective(p0,p1);
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
export class Wrapper_PaperInputValidationDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperInputValidationDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PaperInputValidationDirective(p0,p1);
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
export class Wrapper_PaperInputReloadConfigurationDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperInputReloadConfigurationDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PaperInputReloadConfigurationDirective(p0,p1);
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
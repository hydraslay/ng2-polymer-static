/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/app/polymer/paper-radio-button-directives';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/change_detection/change_detection_util';
import * as import3 from '@angular/core/src/linker/view_utils';
export class Wrapper_PaperRadioButtonChangeEventsAdapterDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperRadioButtonChangeEventsAdapterDirective;
  /*private*/ _changed:boolean;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  subscription4:any;
  subscription5:any;
  constructor() {
    this._changed = false;
    this.context = new import0.PaperRadioButtonChangeEventsAdapterDirective();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
    (this.subscription4 && this.subscription4.unsubscribe());
    (this.subscription5 && this.subscription5.unsubscribe());
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
    if ((eventName == 'active-changed')) {
      const pd_sub_0:any = ((<any>this.context._emitChangeEvent('active',$event)) !== false);
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
    if ((eventName == 'value-changed')) {
      const pd_sub_3:any = ((<any>this.context._emitChangeEvent('value',$event)) !== false);
      result = (pd_sub_3 && result);
    }
    if ((eventName == 'invalid-changed')) {
      const pd_sub_4:any = ((<any>this.context._emitChangeEvent('invalid',$event)) !== false);
      result = (pd_sub_4 && result);
    }
    if ((eventName == 'checked-changed')) {
      const pd_sub_5:any = ((<any>this.context._emitChangeEvent('checked',$event)) !== false);
      result = (pd_sub_5 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean,emit4:boolean,emit5:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.activeChange.subscribe(_eventHandler.bind(view,'activeChange'))); }
    if (emit1) { (this.subscription1 = this.context.focusedChange.subscribe(_eventHandler.bind(view,'focusedChange'))); }
    if (emit2) { (this.subscription2 = this.context.disabledChange.subscribe(_eventHandler.bind(view,'disabledChange'))); }
    if (emit3) { (this.subscription3 = this.context.valueChange.subscribe(_eventHandler.bind(view,'valueChange'))); }
    if (emit4) { (this.subscription4 = this.context.invalidChange.subscribe(_eventHandler.bind(view,'invalidChange'))); }
    if (emit5) { (this.subscription5 = this.context.checkedChange.subscribe(_eventHandler.bind(view,'checkedChange'))); }
  }
}
export class Wrapper_PaperRadioButtonNotifyForDiffersDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperRadioButtonNotifyForDiffersDirective;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.PaperRadioButtonNotifyForDiffersDirective(p0,p1,p2);
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
export class Wrapper_PaperRadioButtonFormElementDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperRadioButtonFormElementDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PaperRadioButtonFormElementDirective(p0,p1);
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
    if ((eventName == 'checkedChange')) {
      const pd_sub_0:any = ((<any>this.context.onValueChanged($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_PaperRadioButtonValidationDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperRadioButtonValidationDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PaperRadioButtonValidationDirective(p0,p1);
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
export class Wrapper_PaperRadioButtonReloadConfigurationDirective {
  /*private*/ _eventHandler:Function;
  context:import0.PaperRadioButtonReloadConfigurationDirective;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PaperRadioButtonReloadConfigurationDirective(p0,p1);
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
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from '../../../../src/app/polymer/paper-toast-directives';
import * as import2 from '@angular/core/src/change_detection/change_detection_util';
import * as import3 from '@angular/core/src/linker/view_utils';
export var Wrapper_PaperToastChangeEventsAdapterDirective = (function () {
    function Wrapper_PaperToastChangeEventsAdapterDirective() {
        this._changed = false;
        this.context = new import0.PaperToastChangeEventsAdapterDirective();
    }
    Wrapper_PaperToastChangeEventsAdapterDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PaperToastChangeEventsAdapterDirective.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
        (this.subscription2 && this.subscription2.unsubscribe());
    };
    Wrapper_PaperToastChangeEventsAdapterDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_PaperToastChangeEventsAdapterDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PaperToastChangeEventsAdapterDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'horizontal-offset-changed')) {
            var pd_sub_0 = (this.context._emitChangeEvent('horizontalOffset', $event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'vertical-offset-changed')) {
            var pd_sub_1 = (this.context._emitChangeEvent('verticalOffset', $event) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'opened-changed')) {
            var pd_sub_2 = (this.context._emitChangeEvent('opened', $event) !== false);
            result = (pd_sub_2 && result);
        }
        return result;
    };
    Wrapper_PaperToastChangeEventsAdapterDirective.prototype.subscribe = function (view, _eventHandler, emit0, emit1, emit2) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.horizontalOffsetChange.subscribe(_eventHandler.bind(view, 'horizontalOffsetChange')));
        }
        if (emit1) {
            (this.subscription1 = this.context.verticalOffsetChange.subscribe(_eventHandler.bind(view, 'verticalOffsetChange')));
        }
        if (emit2) {
            (this.subscription2 = this.context.openedChange.subscribe(_eventHandler.bind(view, 'openedChange')));
        }
    };
    return Wrapper_PaperToastChangeEventsAdapterDirective;
}());
export var Wrapper_PaperToastNotifyForDiffersDirective = (function () {
    function Wrapper_PaperToastNotifyForDiffersDirective(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.PaperToastNotifyForDiffersDirective(p0, p1, p2);
        this._expr_0 = import2.UNINITIALIZED;
        this._expr_1 = import2.UNINITIALIZED;
        this._expr_2 = import2.UNINITIALIZED;
    }
    Wrapper_PaperToastNotifyForDiffersDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PaperToastNotifyForDiffersDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_PaperToastNotifyForDiffersDirective.prototype.check_sizingTarget = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.sizingTarget = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_PaperToastNotifyForDiffersDirective.prototype.check_closingReason = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.closingReason = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_PaperToastNotifyForDiffersDirective.prototype.check_fitInto = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.fitInto = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_PaperToastNotifyForDiffersDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_PaperToastNotifyForDiffersDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PaperToastNotifyForDiffersDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'sizing-target-changed')) {
            var pd_sub_0 = (this.context._setValueFromElement('sizingTarget', $event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'fit-into-changed')) {
            var pd_sub_1 = (this.context._setValueFromElement('fitInto', $event) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'closing-reason-changed')) {
            var pd_sub_2 = (this.context._setValueFromElement('closingReason', $event) !== false);
            result = (pd_sub_2 && result);
        }
        return result;
    };
    Wrapper_PaperToastNotifyForDiffersDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PaperToastNotifyForDiffersDirective;
}());
export var Wrapper_PaperToastReloadConfigurationDirective = (function () {
    function Wrapper_PaperToastReloadConfigurationDirective(p0, p1) {
        this._changed = false;
        this.context = new import0.PaperToastReloadConfigurationDirective(p0, p1);
    }
    Wrapper_PaperToastReloadConfigurationDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PaperToastReloadConfigurationDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_PaperToastReloadConfigurationDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_PaperToastReloadConfigurationDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PaperToastReloadConfigurationDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PaperToastReloadConfigurationDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PaperToastReloadConfigurationDirective;
}());
export var Wrapper_PaperToastFormElementDirective = (function () {
    function Wrapper_PaperToastFormElementDirective(p0, p1) {
        this._changed = false;
        this.context = new import0.PaperToastFormElementDirective(p0, p1);
    }
    Wrapper_PaperToastFormElementDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PaperToastFormElementDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_PaperToastFormElementDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_PaperToastFormElementDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PaperToastFormElementDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'valueChange')) {
            var pd_sub_0 = (this.context.onValueChanged($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_PaperToastFormElementDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PaperToastFormElementDirective;
}());
export var Wrapper_PaperToastValidationDirective = (function () {
    function Wrapper_PaperToastValidationDirective(p0, p1) {
        this._changed = false;
        this.context = new import0.PaperToastValidationDirective(p0, p1);
    }
    Wrapper_PaperToastValidationDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PaperToastValidationDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_PaperToastValidationDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_PaperToastValidationDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PaperToastValidationDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PaperToastValidationDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PaperToastValidationDirective;
}());
//# sourceMappingURL=paper-toast-directives.ngfactory.js.map
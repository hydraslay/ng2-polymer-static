/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from '../../../../src/app/polymer/vaadin-date-picker-directives';
import * as import2 from '@angular/core/src/change_detection/change_detection_util';
import * as import3 from '@angular/core/src/linker/view_utils';
export var Wrapper_VaadinDatePickerChangeEventsAdapterDirective = (function () {
    function Wrapper_VaadinDatePickerChangeEventsAdapterDirective() {
        this._changed = false;
        this.context = new import0.VaadinDatePickerChangeEventsAdapterDirective();
    }
    Wrapper_VaadinDatePickerChangeEventsAdapterDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_VaadinDatePickerChangeEventsAdapterDirective.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
        (this.subscription2 && this.subscription2.unsubscribe());
    };
    Wrapper_VaadinDatePickerChangeEventsAdapterDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_VaadinDatePickerChangeEventsAdapterDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_VaadinDatePickerChangeEventsAdapterDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'value-changed')) {
            var pd_sub_0 = (this.context._emitChangeEvent('value', $event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'invalid-changed')) {
            var pd_sub_1 = (this.context._emitChangeEvent('invalid', $event) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'opened-changed')) {
            var pd_sub_2 = (this.context._emitChangeEvent('opened', $event) !== false);
            result = (pd_sub_2 && result);
        }
        return result;
    };
    Wrapper_VaadinDatePickerChangeEventsAdapterDirective.prototype.subscribe = function (view, _eventHandler, emit0, emit1, emit2) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.valueChange.subscribe(_eventHandler.bind(view, 'valueChange')));
        }
        if (emit1) {
            (this.subscription1 = this.context.invalidChange.subscribe(_eventHandler.bind(view, 'invalidChange')));
        }
        if (emit2) {
            (this.subscription2 = this.context.openedChange.subscribe(_eventHandler.bind(view, 'openedChange')));
        }
    };
    return Wrapper_VaadinDatePickerChangeEventsAdapterDirective;
}());
export var Wrapper_VaadinDatePickerNotifyForDiffersDirective = (function () {
    function Wrapper_VaadinDatePickerNotifyForDiffersDirective(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.VaadinDatePickerNotifyForDiffersDirective(p0, p1, p2);
        this._expr_0 = import2.UNINITIALIZED;
        this._expr_1 = import2.UNINITIALIZED;
    }
    Wrapper_VaadinDatePickerNotifyForDiffersDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_VaadinDatePickerNotifyForDiffersDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_VaadinDatePickerNotifyForDiffersDirective.prototype.check_keyEventTarget = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.keyEventTarget = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_VaadinDatePickerNotifyForDiffersDirective.prototype.check_i18n = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.i18n = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_VaadinDatePickerNotifyForDiffersDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
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
    Wrapper_VaadinDatePickerNotifyForDiffersDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_VaadinDatePickerNotifyForDiffersDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'key-event-target-changed')) {
            var pd_sub_0 = (this.context._setValueFromElement('keyEventTarget', $event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'i18n-changed')) {
            var pd_sub_1 = (this.context._setValueFromElement('i18n', $event) !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_VaadinDatePickerNotifyForDiffersDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_VaadinDatePickerNotifyForDiffersDirective;
}());
export var Wrapper_VaadinDatePickerFormElementDirective = (function () {
    function Wrapper_VaadinDatePickerFormElementDirective(p0, p1) {
        this._changed = false;
        this.context = new import0.VaadinDatePickerFormElementDirective(p0, p1);
    }
    Wrapper_VaadinDatePickerFormElementDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_VaadinDatePickerFormElementDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_VaadinDatePickerFormElementDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_VaadinDatePickerFormElementDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_VaadinDatePickerFormElementDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'valueChange')) {
            var pd_sub_0 = (this.context.onValueChanged($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_VaadinDatePickerFormElementDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_VaadinDatePickerFormElementDirective;
}());
export var Wrapper_VaadinDatePickerValidationDirective = (function () {
    function Wrapper_VaadinDatePickerValidationDirective(p0, p1) {
        this._changed = false;
        this.context = new import0.VaadinDatePickerValidationDirective(p0, p1);
    }
    Wrapper_VaadinDatePickerValidationDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_VaadinDatePickerValidationDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_VaadinDatePickerValidationDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_VaadinDatePickerValidationDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_VaadinDatePickerValidationDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_VaadinDatePickerValidationDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_VaadinDatePickerValidationDirective;
}());
export var Wrapper_VaadinDatePickerReloadConfigurationDirective = (function () {
    function Wrapper_VaadinDatePickerReloadConfigurationDirective(p0, p1) {
        this._changed = false;
        this.context = new import0.VaadinDatePickerReloadConfigurationDirective(p0, p1);
    }
    Wrapper_VaadinDatePickerReloadConfigurationDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_VaadinDatePickerReloadConfigurationDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_VaadinDatePickerReloadConfigurationDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_VaadinDatePickerReloadConfigurationDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_VaadinDatePickerReloadConfigurationDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_VaadinDatePickerReloadConfigurationDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_VaadinDatePickerReloadConfigurationDirective;
}());
//# sourceMappingURL=vaadin-date-picker-directives.ngfactory.js.map
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from '../../../../src/app/polymer/paper-dialog-directives';
import * as import2 from '@angular/core/src/change_detection/change_detection_util';
import * as import3 from '@angular/core/src/linker/view_utils';
export var Wrapper_PaperDialogChangeEventsAdapterDirective = (function () {
    function Wrapper_PaperDialogChangeEventsAdapterDirective() {
        this._changed = false;
        this.context = new import0.PaperDialogChangeEventsAdapterDirective();
    }
    Wrapper_PaperDialogChangeEventsAdapterDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PaperDialogChangeEventsAdapterDirective.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
        (this.subscription2 && this.subscription2.unsubscribe());
    };
    Wrapper_PaperDialogChangeEventsAdapterDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_PaperDialogChangeEventsAdapterDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PaperDialogChangeEventsAdapterDirective.prototype.handleEvent = function (eventName, $event) {
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
    Wrapper_PaperDialogChangeEventsAdapterDirective.prototype.subscribe = function (view, _eventHandler, emit0, emit1, emit2) {
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
    return Wrapper_PaperDialogChangeEventsAdapterDirective;
}());
export var Wrapper_PaperDialogNotifyForDiffersDirective = (function () {
    function Wrapper_PaperDialogNotifyForDiffersDirective(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.PaperDialogNotifyForDiffersDirective(p0, p1, p2);
        this._expr_0 = import2.UNINITIALIZED;
        this._expr_1 = import2.UNINITIALIZED;
        this._expr_2 = import2.UNINITIALIZED;
        this._expr_3 = import2.UNINITIALIZED;
    }
    Wrapper_PaperDialogNotifyForDiffersDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PaperDialogNotifyForDiffersDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_PaperDialogNotifyForDiffersDirective.prototype.check_sizingTarget = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.sizingTarget = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_PaperDialogNotifyForDiffersDirective.prototype.check_fitInto = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.fitInto = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_PaperDialogNotifyForDiffersDirective.prototype.check_closingReason = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.closingReason = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_PaperDialogNotifyForDiffersDirective.prototype.check_animationConfig = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.animationConfig = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_PaperDialogNotifyForDiffersDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
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
    Wrapper_PaperDialogNotifyForDiffersDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PaperDialogNotifyForDiffersDirective.prototype.handleEvent = function (eventName, $event) {
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
        if ((eventName == 'animation-config-changed')) {
            var pd_sub_3 = (this.context._setValueFromElement('animationConfig', $event) !== false);
            result = (pd_sub_3 && result);
        }
        return result;
    };
    Wrapper_PaperDialogNotifyForDiffersDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PaperDialogNotifyForDiffersDirective;
}());
export var Wrapper_PaperDialogReloadConfigurationDirective = (function () {
    function Wrapper_PaperDialogReloadConfigurationDirective(p0, p1) {
        this._changed = false;
        this.context = new import0.PaperDialogReloadConfigurationDirective(p0, p1);
    }
    Wrapper_PaperDialogReloadConfigurationDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PaperDialogReloadConfigurationDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_PaperDialogReloadConfigurationDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_PaperDialogReloadConfigurationDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PaperDialogReloadConfigurationDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PaperDialogReloadConfigurationDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PaperDialogReloadConfigurationDirective;
}());
export var Wrapper_PaperDialogFormElementDirective = (function () {
    function Wrapper_PaperDialogFormElementDirective(p0, p1) {
        this._changed = false;
        this.context = new import0.PaperDialogFormElementDirective(p0, p1);
    }
    Wrapper_PaperDialogFormElementDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PaperDialogFormElementDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_PaperDialogFormElementDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_PaperDialogFormElementDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PaperDialogFormElementDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'valueChange')) {
            var pd_sub_0 = (this.context.onValueChanged($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_PaperDialogFormElementDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PaperDialogFormElementDirective;
}());
export var Wrapper_PaperDialogValidationDirective = (function () {
    function Wrapper_PaperDialogValidationDirective(p0, p1) {
        this._changed = false;
        this.context = new import0.PaperDialogValidationDirective(p0, p1);
    }
    Wrapper_PaperDialogValidationDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PaperDialogValidationDirective.prototype.ngOnDestroy = function () {
    };
    Wrapper_PaperDialogValidationDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_PaperDialogValidationDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PaperDialogValidationDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PaperDialogValidationDirective.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PaperDialogValidationDirective;
}());
//# sourceMappingURL=paper-dialog-directives.ngfactory.js.map
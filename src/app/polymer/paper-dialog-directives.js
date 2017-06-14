var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, EventEmitter, Renderer, forwardRef, IterableDiffers, KeyValueDiffers, DefaultIterableDiffer, NgZone, Injector } from '@angular/core';
import { FormControlName, NG_VALUE_ACCESSOR } from '@angular/forms';
export var PaperDialogChangeEventsAdapterDirective = (function () {
    function PaperDialogChangeEventsAdapterDirective() {
        this.eventNameForProperty = function (property) { return (property + "Change"); };
        this[this.eventNameForProperty('horizontalOffset')] = new EventEmitter(false);
        this[this.eventNameForProperty('verticalOffset')] = new EventEmitter(false);
        this[this.eventNameForProperty('opened')] = new EventEmitter(false);
    }
    PaperDialogChangeEventsAdapterDirective.prototype._emitChangeEvent = function (property, event) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    };
    PaperDialogChangeEventsAdapterDirective = __decorate([
        Directive({
            selector: 'paper-dialog',
            outputs: ["horizontalOffsetChange", "verticalOffsetChange", "openedChange"],
            host: { "(horizontal-offset-changed)": "_emitChangeEvent('horizontalOffset', $event);", "(vertical-offset-changed)": "_emitChangeEvent('verticalOffset', $event);", "(opened-changed)": "_emitChangeEvent('opened', $event);" }
        }), 
        __metadata('design:paramtypes', [])
    ], PaperDialogChangeEventsAdapterDirective);
    return PaperDialogChangeEventsAdapterDirective;
}());
export var PaperDialogValidationDirective = (function () {
    function PaperDialogValidationDirective(el, injector) {
        this.injector = injector;
        this._element = el.nativeElement;
    }
    PaperDialogValidationDirective.prototype.ngDoCheck = function () {
        var control = this.injector.get(FormControlName, null);
        if (control) {
            this._element.invalid = !control.pristine && !control.valid;
        }
    };
    PaperDialogValidationDirective = __decorate([
        Directive({
            selector: 'paper-dialog',
        }), 
        __metadata('design:paramtypes', [ElementRef, Injector])
    ], PaperDialogValidationDirective);
    return PaperDialogValidationDirective;
}());
export var PaperDialogFormElementDirective = (function () {
    function PaperDialogFormElementDirective(renderer, el) {
        var _this = this;
        this._renderer = renderer;
        this._element = el.nativeElement;
        this._element.addEventListener('blur', function () { return _this.onTouched(); }, true);
    }
    PaperDialogFormElementDirective.prototype.onChange = function (_) { };
    PaperDialogFormElementDirective.prototype.onTouched = function (_) { };
    PaperDialogFormElementDirective.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._element, value, value);
    };
    PaperDialogFormElementDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    PaperDialogFormElementDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    PaperDialogFormElementDirective.prototype.onValueChanged = function (value) { this.onChange(value); };
    PaperDialogFormElementDirective = __decorate([
        Directive({
            selector: 'paper-dialog',
            providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return PaperDialogFormElementDirective; }), multi: true }],
            host: { '(valueChange)': 'onValueChanged($event)' }
        }), 
        __metadata('design:paramtypes', [Renderer, ElementRef])
    ], PaperDialogFormElementDirective);
    return PaperDialogFormElementDirective;
}());
export var PaperDialogNotifyForDiffersDirective = (function () {
    function PaperDialogNotifyForDiffersDirective(el, iterableDiffers, keyValueDiffers) {
        this.arrayAndObjectProperties = ["sizingTarget", "fitInto", "closingReason", "animationConfig"];
        this._element = el.nativeElement;
        this._iterableDiffers = iterableDiffers;
        this._keyValueDiffers = keyValueDiffers;
        this._differs = {};
        this._arrayDiffs = {};
    }
    PaperDialogNotifyForDiffersDirective.prototype.ngOnInit = function () {
        var _this = this;
        var elm = this._element;
        this.arrayAndObjectProperties.filter(function (property) { return elm[property] && !_this[property]; })
            .forEach(function (property) {
            _this[property] = elm[property];
        });
    };
    PaperDialogNotifyForDiffersDirective.prototype._setValueFromElement = function (property, event) {
        var target = event.target;
        if (this[property] !== target[property]) {
            this[property] = target[property];
            this._differs[property] = this._createDiffer(this[property]);
        }
    };
    PaperDialogNotifyForDiffersDirective.prototype._createDiffer = function (value) {
        var differ = Array.isArray(value) ? this._iterableDiffers.find(value).create(null) : this._keyValueDiffers.find(value || {}).create(null);
        differ.diff(value);
        return differ;
    };
    PaperDialogNotifyForDiffersDirective.prototype._handleArrayDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            diff.forEachRemovedItem(function (item) { return _this._notifyArray(property, item.previousIndex); });
            diff.forEachAddedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
            diff.forEachMovedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
        }
    };
    PaperDialogNotifyForDiffersDirective.prototype._handleObjectDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            var notify = function (item) { return _this._notifyPath(property + '.' + item.key, item.currentValue); };
            diff.forEachRemovedItem(notify);
            diff.forEachAddedItem(notify);
            diff.forEachChangedItem(notify);
        }
    };
    PaperDialogNotifyForDiffersDirective.prototype._notifyArray = function (property, index) {
        this._notifyPath(property + '.' + index, this[property][index]);
    };
    PaperDialogNotifyForDiffersDirective.prototype._notifyPath = function (path, value) {
        this._element.notifyPath(path, value);
    };
    PaperDialogNotifyForDiffersDirective.prototype.ngDoCheck = function () {
        var _this = this;
        this.arrayAndObjectProperties.forEach(function (property) {
            var elm = _this._element;
            var _differs = _this._differs;
            if (elm[property] !== _this[property]) {
                elm[property] = _this[property];
                _differs[property] = _this._createDiffer(_this[property]);
            }
            else if (_differs[property]) {
                var diff = _differs[property].diff(_this[property]);
                if (diff instanceof DefaultIterableDiffer) {
                    _this._handleArrayDiffs(property, diff);
                }
                else {
                    _this._handleObjectDiffs(property, diff);
                }
            }
        });
    };
    PaperDialogNotifyForDiffersDirective = __decorate([
        Directive({
            selector: 'paper-dialog',
            inputs: ["sizingTarget", "fitInto", "closingReason", "animationConfig"],
            host: { "(sizing-target-changed)": "_setValueFromElement('sizingTarget', $event);", "(fit-into-changed)": "_setValueFromElement('fitInto', $event);", "(closing-reason-changed)": "_setValueFromElement('closingReason', $event);", "(animation-config-changed)": "_setValueFromElement('animationConfig', $event);" }
        }), 
        __metadata('design:paramtypes', [ElementRef, IterableDiffers, KeyValueDiffers])
    ], PaperDialogNotifyForDiffersDirective);
    return PaperDialogNotifyForDiffersDirective;
}());
export var PaperDialogReloadConfigurationDirective = (function () {
    function PaperDialogReloadConfigurationDirective(el, zone) {
        var Polymer = window.Polymer;
        if (!Polymer.Settings.useShadow) {
            el.nativeElement.async(function () {
                if (el.nativeElement.isInitialized()) {
                    zone.runOutsideAngular(function () {
                        el.nativeElement.reloadConfiguration();
                    });
                }
            });
        }
    }
    PaperDialogReloadConfigurationDirective = __decorate([
        Directive({
            selector: 'paper-dialog',
        }), 
        __metadata('design:paramtypes', [ElementRef, NgZone])
    ], PaperDialogReloadConfigurationDirective);
    return PaperDialogReloadConfigurationDirective;
}());
export var PaperDialog = [PaperDialogChangeEventsAdapterDirective, PaperDialogNotifyForDiffersDirective];
//# sourceMappingURL=paper-dialog-directives.js.map
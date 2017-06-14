var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Renderer, forwardRef, IterableDiffers, KeyValueDiffers, DefaultIterableDiffer, NgZone, Injector } from '@angular/core';
import { FormControlName, NG_VALUE_ACCESSOR } from '@angular/forms';
export var PaperDialogScrollableChangeEventsAdapterDirective = (function () {
    function PaperDialogScrollableChangeEventsAdapterDirective() {
        this.eventNameForProperty = function (property) { return (property + "Change"); };
    }
    PaperDialogScrollableChangeEventsAdapterDirective.prototype._emitChangeEvent = function (property, event) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    };
    PaperDialogScrollableChangeEventsAdapterDirective = __decorate([
        Directive({
            selector: 'paper-dialog-scrollable',
            outputs: [],
            host: undefined
        }), 
        __metadata('design:paramtypes', [])
    ], PaperDialogScrollableChangeEventsAdapterDirective);
    return PaperDialogScrollableChangeEventsAdapterDirective;
}());
export var PaperDialogScrollableValidationDirective = (function () {
    function PaperDialogScrollableValidationDirective(el, injector) {
        this.injector = injector;
        this._element = el.nativeElement;
    }
    PaperDialogScrollableValidationDirective.prototype.ngDoCheck = function () {
        var control = this.injector.get(FormControlName, null);
        if (control) {
            this._element.invalid = !control.pristine && !control.valid;
        }
    };
    PaperDialogScrollableValidationDirective = __decorate([
        Directive({
            selector: 'paper-dialog-scrollable',
        }), 
        __metadata('design:paramtypes', [ElementRef, Injector])
    ], PaperDialogScrollableValidationDirective);
    return PaperDialogScrollableValidationDirective;
}());
export var PaperDialogScrollableFormElementDirective = (function () {
    function PaperDialogScrollableFormElementDirective(renderer, el) {
        var _this = this;
        this._renderer = renderer;
        this._element = el.nativeElement;
        this._element.addEventListener('blur', function () { return _this.onTouched(); }, true);
    }
    PaperDialogScrollableFormElementDirective.prototype.onChange = function (_) { };
    PaperDialogScrollableFormElementDirective.prototype.onTouched = function (_) { };
    PaperDialogScrollableFormElementDirective.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._element, value, value);
    };
    PaperDialogScrollableFormElementDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    PaperDialogScrollableFormElementDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    PaperDialogScrollableFormElementDirective.prototype.onValueChanged = function (value) { this.onChange(value); };
    PaperDialogScrollableFormElementDirective = __decorate([
        Directive({
            selector: 'paper-dialog-scrollable',
            providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return PaperDialogScrollableFormElementDirective; }), multi: true }],
            host: { '(valueChange)': 'onValueChanged($event)' }
        }), 
        __metadata('design:paramtypes', [Renderer, ElementRef])
    ], PaperDialogScrollableFormElementDirective);
    return PaperDialogScrollableFormElementDirective;
}());
export var PaperDialogScrollableNotifyForDiffersDirective = (function () {
    function PaperDialogScrollableNotifyForDiffersDirective(el, iterableDiffers, keyValueDiffers) {
        this.arrayAndObjectProperties = ["dialogElement"];
        this._element = el.nativeElement;
        this._iterableDiffers = iterableDiffers;
        this._keyValueDiffers = keyValueDiffers;
        this._differs = {};
        this._arrayDiffs = {};
    }
    PaperDialogScrollableNotifyForDiffersDirective.prototype.ngOnInit = function () {
        var _this = this;
        var elm = this._element;
        this.arrayAndObjectProperties.filter(function (property) { return elm[property] && !_this[property]; })
            .forEach(function (property) {
            _this[property] = elm[property];
        });
    };
    PaperDialogScrollableNotifyForDiffersDirective.prototype._setValueFromElement = function (property, event) {
        var target = event.target;
        if (this[property] !== target[property]) {
            this[property] = target[property];
            this._differs[property] = this._createDiffer(this[property]);
        }
    };
    PaperDialogScrollableNotifyForDiffersDirective.prototype._createDiffer = function (value) {
        var differ = Array.isArray(value) ? this._iterableDiffers.find(value).create(null) : this._keyValueDiffers.find(value || {}).create(null);
        differ.diff(value);
        return differ;
    };
    PaperDialogScrollableNotifyForDiffersDirective.prototype._handleArrayDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            diff.forEachRemovedItem(function (item) { return _this._notifyArray(property, item.previousIndex); });
            diff.forEachAddedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
            diff.forEachMovedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
        }
    };
    PaperDialogScrollableNotifyForDiffersDirective.prototype._handleObjectDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            var notify = function (item) { return _this._notifyPath(property + '.' + item.key, item.currentValue); };
            diff.forEachRemovedItem(notify);
            diff.forEachAddedItem(notify);
            diff.forEachChangedItem(notify);
        }
    };
    PaperDialogScrollableNotifyForDiffersDirective.prototype._notifyArray = function (property, index) {
        this._notifyPath(property + '.' + index, this[property][index]);
    };
    PaperDialogScrollableNotifyForDiffersDirective.prototype._notifyPath = function (path, value) {
        this._element.notifyPath(path, value);
    };
    PaperDialogScrollableNotifyForDiffersDirective.prototype.ngDoCheck = function () {
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
    PaperDialogScrollableNotifyForDiffersDirective = __decorate([
        Directive({
            selector: 'paper-dialog-scrollable',
            inputs: ["dialogElement"],
            host: { "(dialog-element-changed)": "_setValueFromElement('dialogElement', $event);" }
        }), 
        __metadata('design:paramtypes', [ElementRef, IterableDiffers, KeyValueDiffers])
    ], PaperDialogScrollableNotifyForDiffersDirective);
    return PaperDialogScrollableNotifyForDiffersDirective;
}());
export var PaperDialogScrollableReloadConfigurationDirective = (function () {
    function PaperDialogScrollableReloadConfigurationDirective(el, zone) {
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
    PaperDialogScrollableReloadConfigurationDirective = __decorate([
        Directive({
            selector: 'paper-dialog-scrollable',
        }), 
        __metadata('design:paramtypes', [ElementRef, NgZone])
    ], PaperDialogScrollableReloadConfigurationDirective);
    return PaperDialogScrollableReloadConfigurationDirective;
}());
export var PaperDialogScrollable = [PaperDialogScrollableChangeEventsAdapterDirective, PaperDialogScrollableNotifyForDiffersDirective];
//# sourceMappingURL=paper-dialog-scrollable-directives.js.map
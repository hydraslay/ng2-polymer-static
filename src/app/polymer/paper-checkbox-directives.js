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
export var PaperCheckboxChangeEventsAdapterDirective = (function () {
    function PaperCheckboxChangeEventsAdapterDirective() {
        this.eventNameForProperty = function (property) { return (property + "Change"); };
        this[this.eventNameForProperty('active')] = new EventEmitter(false);
        this[this.eventNameForProperty('focused')] = new EventEmitter(false);
        this[this.eventNameForProperty('disabled')] = new EventEmitter(false);
        this[this.eventNameForProperty('value')] = new EventEmitter(false);
        this[this.eventNameForProperty('invalid')] = new EventEmitter(false);
        this[this.eventNameForProperty('checked')] = new EventEmitter(false);
    }
    PaperCheckboxChangeEventsAdapterDirective.prototype._emitChangeEvent = function (property, event) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    };
    PaperCheckboxChangeEventsAdapterDirective = __decorate([
        Directive({
            selector: 'paper-checkbox',
            outputs: ["activeChange", "focusedChange", "disabledChange", "valueChange", "invalidChange", "checkedChange"],
            host: { "(active-changed)": "_emitChangeEvent('active', $event);", "(focused-changed)": "_emitChangeEvent('focused', $event);", "(disabled-changed)": "_emitChangeEvent('disabled', $event);", "(value-changed)": "_emitChangeEvent('value', $event);", "(invalid-changed)": "_emitChangeEvent('invalid', $event);", "(checked-changed)": "_emitChangeEvent('checked', $event);" }
        }), 
        __metadata('design:paramtypes', [])
    ], PaperCheckboxChangeEventsAdapterDirective);
    return PaperCheckboxChangeEventsAdapterDirective;
}());
export var PaperCheckboxValidationDirective = (function () {
    function PaperCheckboxValidationDirective(el, injector) {
        this.injector = injector;
        this._element = el.nativeElement;
    }
    PaperCheckboxValidationDirective.prototype.ngDoCheck = function () {
        var control = this.injector.get(FormControlName, null);
        if (control) {
            this._element.invalid = !control.pristine && !control.valid;
        }
    };
    PaperCheckboxValidationDirective = __decorate([
        Directive({
            selector: 'paper-checkbox',
        }), 
        __metadata('design:paramtypes', [ElementRef, Injector])
    ], PaperCheckboxValidationDirective);
    return PaperCheckboxValidationDirective;
}());
export var PaperCheckboxFormElementDirective = (function () {
    function PaperCheckboxFormElementDirective(renderer, el) {
        var _this = this;
        this._renderer = renderer;
        this._element = el.nativeElement;
        this._element.addEventListener('blur', function () { return _this.onTouched(); }, true);
    }
    PaperCheckboxFormElementDirective.prototype.onChange = function (_) { };
    PaperCheckboxFormElementDirective.prototype.onTouched = function (_) { };
    PaperCheckboxFormElementDirective.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._element, 'checked', value);
    };
    PaperCheckboxFormElementDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    PaperCheckboxFormElementDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    PaperCheckboxFormElementDirective.prototype.onValueChanged = function (value) { this.onChange(value); };
    PaperCheckboxFormElementDirective = __decorate([
        Directive({
            selector: 'paper-checkbox',
            providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return PaperCheckboxFormElementDirective; }), multi: true }],
            host: { '(checkedChange)': 'onValueChanged($event)' }
        }), 
        __metadata('design:paramtypes', [Renderer, ElementRef])
    ], PaperCheckboxFormElementDirective);
    return PaperCheckboxFormElementDirective;
}());
export var PaperCheckboxNotifyForDiffersDirective = (function () {
    function PaperCheckboxNotifyForDiffersDirective(el, iterableDiffers, keyValueDiffers) {
        this.arrayAndObjectProperties = ["keyEventTarget"];
        this._element = el.nativeElement;
        this._iterableDiffers = iterableDiffers;
        this._keyValueDiffers = keyValueDiffers;
        this._differs = {};
        this._arrayDiffs = {};
    }
    PaperCheckboxNotifyForDiffersDirective.prototype.ngOnInit = function () {
        var _this = this;
        var elm = this._element;
        this.arrayAndObjectProperties.filter(function (property) { return elm[property] && !_this[property]; })
            .forEach(function (property) {
            _this[property] = elm[property];
        });
    };
    PaperCheckboxNotifyForDiffersDirective.prototype._setValueFromElement = function (property, event) {
        var target = event.target;
        if (this[property] !== target[property]) {
            this[property] = target[property];
            this._differs[property] = this._createDiffer(this[property]);
        }
    };
    PaperCheckboxNotifyForDiffersDirective.prototype._createDiffer = function (value) {
        var differ = Array.isArray(value) ? this._iterableDiffers.find(value).create(null) : this._keyValueDiffers.find(value || {}).create(null);
        differ.diff(value);
        return differ;
    };
    PaperCheckboxNotifyForDiffersDirective.prototype._handleArrayDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            diff.forEachRemovedItem(function (item) { return _this._notifyArray(property, item.previousIndex); });
            diff.forEachAddedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
            diff.forEachMovedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
        }
    };
    PaperCheckboxNotifyForDiffersDirective.prototype._handleObjectDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            var notify = function (item) { return _this._notifyPath(property + '.' + item.key, item.currentValue); };
            diff.forEachRemovedItem(notify);
            diff.forEachAddedItem(notify);
            diff.forEachChangedItem(notify);
        }
    };
    PaperCheckboxNotifyForDiffersDirective.prototype._notifyArray = function (property, index) {
        this._notifyPath(property + '.' + index, this[property][index]);
    };
    PaperCheckboxNotifyForDiffersDirective.prototype._notifyPath = function (path, value) {
        this._element.notifyPath(path, value);
    };
    PaperCheckboxNotifyForDiffersDirective.prototype.ngDoCheck = function () {
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
    PaperCheckboxNotifyForDiffersDirective = __decorate([
        Directive({
            selector: 'paper-checkbox',
            inputs: ["keyEventTarget"],
            host: { "(key-event-target-changed)": "_setValueFromElement('keyEventTarget', $event);" }
        }), 
        __metadata('design:paramtypes', [ElementRef, IterableDiffers, KeyValueDiffers])
    ], PaperCheckboxNotifyForDiffersDirective);
    return PaperCheckboxNotifyForDiffersDirective;
}());
export var PaperCheckboxReloadConfigurationDirective = (function () {
    function PaperCheckboxReloadConfigurationDirective(el, zone) {
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
    PaperCheckboxReloadConfigurationDirective = __decorate([
        Directive({
            selector: 'paper-checkbox',
        }), 
        __metadata('design:paramtypes', [ElementRef, NgZone])
    ], PaperCheckboxReloadConfigurationDirective);
    return PaperCheckboxReloadConfigurationDirective;
}());
export var PaperCheckbox = [PaperCheckboxChangeEventsAdapterDirective, PaperCheckboxNotifyForDiffersDirective, PaperCheckboxFormElementDirective, PaperCheckboxValidationDirective];
//# sourceMappingURL=paper-checkbox-directives.js.map
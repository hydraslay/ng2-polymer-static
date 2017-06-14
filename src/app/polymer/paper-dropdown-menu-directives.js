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
export var PaperDropdownMenuChangeEventsAdapterDirective = (function () {
    function PaperDropdownMenuChangeEventsAdapterDirective() {
        this.eventNameForProperty = function (property) { return (property + "Change"); };
        this[this.eventNameForProperty('active')] = new EventEmitter(false);
        this[this.eventNameForProperty('focused')] = new EventEmitter(false);
        this[this.eventNameForProperty('disabled')] = new EventEmitter(false);
        this[this.eventNameForProperty('value')] = new EventEmitter(false);
        this[this.eventNameForProperty('invalid')] = new EventEmitter(false);
        this[this.eventNameForProperty('selectedItemLabel')] = new EventEmitter(false);
        this[this.eventNameForProperty('selectedItem')] = new EventEmitter(false);
        this[this.eventNameForProperty('value')] = new EventEmitter(false);
        this[this.eventNameForProperty('opened')] = new EventEmitter(false);
    }
    PaperDropdownMenuChangeEventsAdapterDirective.prototype._emitChangeEvent = function (property, event) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    };
    PaperDropdownMenuChangeEventsAdapterDirective = __decorate([
        Directive({
            selector: 'paper-dropdown-menu',
            outputs: ["activeChange", "focusedChange", "disabledChange", "valueChange", "invalidChange", "selectedItemLabelChange", "selectedItemChange", "valueChange", "openedChange"],
            host: { "(active-changed)": "_emitChangeEvent('active', $event);", "(focused-changed)": "_emitChangeEvent('focused', $event);", "(disabled-changed)": "_emitChangeEvent('disabled', $event);", "(value-changed)": "_emitChangeEvent('value', $event);", "(invalid-changed)": "_emitChangeEvent('invalid', $event);", "(selected-item-label-changed)": "_emitChangeEvent('selectedItemLabel', $event);", "(selected-item-changed)": "_emitChangeEvent('selectedItem', $event);", "(opened-changed)": "_emitChangeEvent('opened', $event);" }
        }), 
        __metadata('design:paramtypes', [])
    ], PaperDropdownMenuChangeEventsAdapterDirective);
    return PaperDropdownMenuChangeEventsAdapterDirective;
}());
export var PaperDropdownMenuValidationDirective = (function () {
    function PaperDropdownMenuValidationDirective(el, injector) {
        this.injector = injector;
        this._element = el.nativeElement;
    }
    PaperDropdownMenuValidationDirective.prototype.ngDoCheck = function () {
        var control = this.injector.get(FormControlName, null);
        if (control) {
            this._element.invalid = !control.pristine && !control.valid;
        }
    };
    PaperDropdownMenuValidationDirective = __decorate([
        Directive({
            selector: 'paper-dropdown-menu',
        }), 
        __metadata('design:paramtypes', [ElementRef, Injector])
    ], PaperDropdownMenuValidationDirective);
    return PaperDropdownMenuValidationDirective;
}());
export var PaperDropdownMenuFormElementDirective = (function () {
    function PaperDropdownMenuFormElementDirective(renderer, el) {
        var _this = this;
        this._renderer = renderer;
        this._element = el.nativeElement;
        this._element.addEventListener('blur', function () { return _this.onTouched(); }, true);
    }
    PaperDropdownMenuFormElementDirective.prototype.onChange = function (_) { };
    PaperDropdownMenuFormElementDirective.prototype.onTouched = function (_) { };
    PaperDropdownMenuFormElementDirective.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._element, value, value);
    };
    PaperDropdownMenuFormElementDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    PaperDropdownMenuFormElementDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    PaperDropdownMenuFormElementDirective.prototype.onValueChanged = function (value) { this.onChange(value); };
    PaperDropdownMenuFormElementDirective = __decorate([
        Directive({
            selector: 'paper-dropdown-menu',
            providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return PaperDropdownMenuFormElementDirective; }), multi: true }],
            host: { '(valueChange)': 'onValueChanged($event)' }
        }), 
        __metadata('design:paramtypes', [Renderer, ElementRef])
    ], PaperDropdownMenuFormElementDirective);
    return PaperDropdownMenuFormElementDirective;
}());
export var PaperDropdownMenuNotifyForDiffersDirective = (function () {
    function PaperDropdownMenuNotifyForDiffersDirective(el, iterableDiffers, keyValueDiffers) {
        this.arrayAndObjectProperties = ["keyEventTarget"];
        this._element = el.nativeElement;
        this._iterableDiffers = iterableDiffers;
        this._keyValueDiffers = keyValueDiffers;
        this._differs = {};
        this._arrayDiffs = {};
    }
    PaperDropdownMenuNotifyForDiffersDirective.prototype.ngOnInit = function () {
        var _this = this;
        var elm = this._element;
        this.arrayAndObjectProperties.filter(function (property) { return elm[property] && !_this[property]; })
            .forEach(function (property) {
            _this[property] = elm[property];
        });
    };
    PaperDropdownMenuNotifyForDiffersDirective.prototype._setValueFromElement = function (property, event) {
        var target = event.target;
        if (this[property] !== target[property]) {
            this[property] = target[property];
            this._differs[property] = this._createDiffer(this[property]);
        }
    };
    PaperDropdownMenuNotifyForDiffersDirective.prototype._createDiffer = function (value) {
        var differ = Array.isArray(value) ? this._iterableDiffers.find(value).create(null) : this._keyValueDiffers.find(value || {}).create(null);
        differ.diff(value);
        return differ;
    };
    PaperDropdownMenuNotifyForDiffersDirective.prototype._handleArrayDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            diff.forEachRemovedItem(function (item) { return _this._notifyArray(property, item.previousIndex); });
            diff.forEachAddedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
            diff.forEachMovedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
        }
    };
    PaperDropdownMenuNotifyForDiffersDirective.prototype._handleObjectDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            var notify = function (item) { return _this._notifyPath(property + '.' + item.key, item.currentValue); };
            diff.forEachRemovedItem(notify);
            diff.forEachAddedItem(notify);
            diff.forEachChangedItem(notify);
        }
    };
    PaperDropdownMenuNotifyForDiffersDirective.prototype._notifyArray = function (property, index) {
        this._notifyPath(property + '.' + index, this[property][index]);
    };
    PaperDropdownMenuNotifyForDiffersDirective.prototype._notifyPath = function (path, value) {
        this._element.notifyPath(path, value);
    };
    PaperDropdownMenuNotifyForDiffersDirective.prototype.ngDoCheck = function () {
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
    PaperDropdownMenuNotifyForDiffersDirective = __decorate([
        Directive({
            selector: 'paper-dropdown-menu',
            inputs: ["keyEventTarget"],
            host: { "(key-event-target-changed)": "_setValueFromElement('keyEventTarget', $event);" }
        }), 
        __metadata('design:paramtypes', [ElementRef, IterableDiffers, KeyValueDiffers])
    ], PaperDropdownMenuNotifyForDiffersDirective);
    return PaperDropdownMenuNotifyForDiffersDirective;
}());
export var PaperDropdownMenuReloadConfigurationDirective = (function () {
    function PaperDropdownMenuReloadConfigurationDirective(el, zone) {
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
    PaperDropdownMenuReloadConfigurationDirective = __decorate([
        Directive({
            selector: 'paper-dropdown-menu',
        }), 
        __metadata('design:paramtypes', [ElementRef, NgZone])
    ], PaperDropdownMenuReloadConfigurationDirective);
    return PaperDropdownMenuReloadConfigurationDirective;
}());
export var PaperDropdownMenu = [PaperDropdownMenuChangeEventsAdapterDirective, PaperDropdownMenuNotifyForDiffersDirective, PaperDropdownMenuFormElementDirective, PaperDropdownMenuValidationDirective];
//# sourceMappingURL=paper-dropdown-menu-directives.js.map
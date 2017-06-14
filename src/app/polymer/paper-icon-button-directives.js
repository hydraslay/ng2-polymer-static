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
export var PaperIconButtonChangeEventsAdapterDirective = (function () {
    function PaperIconButtonChangeEventsAdapterDirective() {
        this.eventNameForProperty = function (property) { return (property + "Change"); };
        this[this.eventNameForProperty('active')] = new EventEmitter(false);
        this[this.eventNameForProperty('focused')] = new EventEmitter(false);
        this[this.eventNameForProperty('disabled')] = new EventEmitter(false);
    }
    PaperIconButtonChangeEventsAdapterDirective.prototype._emitChangeEvent = function (property, event) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    };
    PaperIconButtonChangeEventsAdapterDirective = __decorate([
        Directive({
            selector: 'paper-icon-button',
            outputs: ["activeChange", "focusedChange", "disabledChange"],
            host: { "(active-changed)": "_emitChangeEvent('active', $event);", "(focused-changed)": "_emitChangeEvent('focused', $event);", "(disabled-changed)": "_emitChangeEvent('disabled', $event);" }
        }), 
        __metadata('design:paramtypes', [])
    ], PaperIconButtonChangeEventsAdapterDirective);
    return PaperIconButtonChangeEventsAdapterDirective;
}());
export var PaperIconButtonValidationDirective = (function () {
    function PaperIconButtonValidationDirective(el, injector) {
        this.injector = injector;
        this._element = el.nativeElement;
    }
    PaperIconButtonValidationDirective.prototype.ngDoCheck = function () {
        var control = this.injector.get(FormControlName, null);
        if (control) {
            this._element.invalid = !control.pristine && !control.valid;
        }
    };
    PaperIconButtonValidationDirective = __decorate([
        Directive({
            selector: 'paper-icon-button',
        }), 
        __metadata('design:paramtypes', [ElementRef, Injector])
    ], PaperIconButtonValidationDirective);
    return PaperIconButtonValidationDirective;
}());
export var PaperIconButtonFormElementDirective = (function () {
    function PaperIconButtonFormElementDirective(renderer, el) {
        var _this = this;
        this._renderer = renderer;
        this._element = el.nativeElement;
        this._element.addEventListener('blur', function () { return _this.onTouched(); }, true);
    }
    PaperIconButtonFormElementDirective.prototype.onChange = function (_) { };
    PaperIconButtonFormElementDirective.prototype.onTouched = function (_) { };
    PaperIconButtonFormElementDirective.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._element, value, value);
    };
    PaperIconButtonFormElementDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    PaperIconButtonFormElementDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    PaperIconButtonFormElementDirective.prototype.onValueChanged = function (value) { this.onChange(value); };
    PaperIconButtonFormElementDirective = __decorate([
        Directive({
            selector: 'paper-icon-button',
            providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return PaperIconButtonFormElementDirective; }), multi: true }],
            host: { '(valueChange)': 'onValueChanged($event)' }
        }), 
        __metadata('design:paramtypes', [Renderer, ElementRef])
    ], PaperIconButtonFormElementDirective);
    return PaperIconButtonFormElementDirective;
}());
export var PaperIconButtonNotifyForDiffersDirective = (function () {
    function PaperIconButtonNotifyForDiffersDirective(el, iterableDiffers, keyValueDiffers) {
        this.arrayAndObjectProperties = ["keyEventTarget"];
        this._element = el.nativeElement;
        this._iterableDiffers = iterableDiffers;
        this._keyValueDiffers = keyValueDiffers;
        this._differs = {};
        this._arrayDiffs = {};
    }
    PaperIconButtonNotifyForDiffersDirective.prototype.ngOnInit = function () {
        var _this = this;
        var elm = this._element;
        this.arrayAndObjectProperties.filter(function (property) { return elm[property] && !_this[property]; })
            .forEach(function (property) {
            _this[property] = elm[property];
        });
    };
    PaperIconButtonNotifyForDiffersDirective.prototype._setValueFromElement = function (property, event) {
        var target = event.target;
        if (this[property] !== target[property]) {
            this[property] = target[property];
            this._differs[property] = this._createDiffer(this[property]);
        }
    };
    PaperIconButtonNotifyForDiffersDirective.prototype._createDiffer = function (value) {
        var differ = Array.isArray(value) ? this._iterableDiffers.find(value).create(null) : this._keyValueDiffers.find(value || {}).create(null);
        differ.diff(value);
        return differ;
    };
    PaperIconButtonNotifyForDiffersDirective.prototype._handleArrayDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            diff.forEachRemovedItem(function (item) { return _this._notifyArray(property, item.previousIndex); });
            diff.forEachAddedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
            diff.forEachMovedItem(function (item) { return _this._notifyArray(property, item.currentIndex); });
        }
    };
    PaperIconButtonNotifyForDiffersDirective.prototype._handleObjectDiffs = function (property, diff) {
        var _this = this;
        if (diff) {
            var notify = function (item) { return _this._notifyPath(property + '.' + item.key, item.currentValue); };
            diff.forEachRemovedItem(notify);
            diff.forEachAddedItem(notify);
            diff.forEachChangedItem(notify);
        }
    };
    PaperIconButtonNotifyForDiffersDirective.prototype._notifyArray = function (property, index) {
        this._notifyPath(property + '.' + index, this[property][index]);
    };
    PaperIconButtonNotifyForDiffersDirective.prototype._notifyPath = function (path, value) {
        this._element.notifyPath(path, value);
    };
    PaperIconButtonNotifyForDiffersDirective.prototype.ngDoCheck = function () {
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
    PaperIconButtonNotifyForDiffersDirective = __decorate([
        Directive({
            selector: 'paper-icon-button',
            inputs: ["keyEventTarget"],
            host: { "(key-event-target-changed)": "_setValueFromElement('keyEventTarget', $event);" }
        }), 
        __metadata('design:paramtypes', [ElementRef, IterableDiffers, KeyValueDiffers])
    ], PaperIconButtonNotifyForDiffersDirective);
    return PaperIconButtonNotifyForDiffersDirective;
}());
export var PaperIconButtonReloadConfigurationDirective = (function () {
    function PaperIconButtonReloadConfigurationDirective(el, zone) {
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
    PaperIconButtonReloadConfigurationDirective = __decorate([
        Directive({
            selector: 'paper-icon-button',
        }), 
        __metadata('design:paramtypes', [ElementRef, NgZone])
    ], PaperIconButtonReloadConfigurationDirective);
    return PaperIconButtonReloadConfigurationDirective;
}());
export var PaperIconButton = [PaperIconButtonChangeEventsAdapterDirective, PaperIconButtonNotifyForDiffersDirective];
//# sourceMappingURL=paper-icon-button-directives.js.map
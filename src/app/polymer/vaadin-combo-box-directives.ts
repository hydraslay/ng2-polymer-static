/* Suggested Name File: vaadin-combo-box-directives.ts */
import { Directive, ElementRef, Input, EventEmitter, DoCheck, Renderer, forwardRef, OnInit, IterableDiffers, KeyValueDiffers, DefaultIterableDiffer, NgZone, Injector } from '@angular/core';
import { FormControlName, NG_VALUE_ACCESSOR } from '@angular/forms';
import { __platform_browser_private__ } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';
@Directive({
    selector: 'vaadin-combo-box',
    outputs: ["invalidChange", "valueChange", "openedChange", "selectedItemChange"],
    host: { "(invalid-changed)": "_emitChangeEvent('invalid', $event);", "(value-changed)": "_emitChangeEvent('value', $event);", "(opened-changed)": "_emitChangeEvent('opened', $event);", "(selected-item-changed)": "_emitChangeEvent('selectedItem', $event);" }
})
export class VaadinComboBoxChangeEventsAdapterDirective {
    invalidChange: any;
    valueChange: any;
    openedChange: any;
    selectedItemChange: any;

    eventNameForProperty = (property: string) => `${property}Change`;
    constructor() {
        this[this.eventNameForProperty('invalid')] = new EventEmitter<any>(false);
        this[this.eventNameForProperty('value')] = new EventEmitter<any>(false);
        this[this.eventNameForProperty('opened')] = new EventEmitter<any>(false);
        this[this.eventNameForProperty('selectedItem')] = new EventEmitter<any>(false);
    }
    _emitChangeEvent(property: string, event: any) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    }
}

@Directive({
    selector: 'vaadin-combo-box',
})
export class VaadinComboBoxValidationDirective implements DoCheck {
    _element: any;
    constructor(el: ElementRef, public injector: Injector) {
        this._element = el.nativeElement;
    }
    ngDoCheck() {
        const control = this.injector.get(FormControlName, null);
        if (control) {
            this._element.invalid = !control.pristine && !control.valid
        }
    }
}

@Directive({
    selector: 'vaadin-combo-box',
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => VaadinComboBoxFormElementDirective), multi: true }],
    host: { '(valueChange)': 'onValueChanged($event)' }
})
export class VaadinComboBoxFormElementDirective {
    _element: any;
    _renderer: any;
    constructor(renderer: Renderer, el: ElementRef) {
        this._renderer = renderer;
        this._element = el.nativeElement;
        this._element.addEventListener('blur', () => this.onTouched(), true);
    }
    onChange(_?: any) { }
    onTouched(_?: any) { }
    writeValue(value: any): void {
        this._renderer.setElementProperty(this._element, value, value);
    }
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: (_: any) => void): void { this.onTouched = fn; }
    onValueChanged(value: any) { this.onChange(value); }
}

@Directive({
    selector: 'vaadin-combo-box',
    inputs: ["items"],
    host: { "(items-changed)": "_setValueFromElement('items', $event);" }
})
export class VaadinComboBoxNotifyForDiffersDirective implements OnInit, DoCheck {
    items: any;
    _element: any;
    _iterableDiffers: any;
    _keyValueDiffers: any;
    _differs: any;
    _arrayDiffs: any;
    arrayAndObjectProperties: any[] = ["items"];
    constructor(el: ElementRef, iterableDiffers: IterableDiffers, keyValueDiffers: KeyValueDiffers) {
        this._element = el.nativeElement;
        this._iterableDiffers = iterableDiffers;
        this._keyValueDiffers = keyValueDiffers;
        this._differs = {};
        this._arrayDiffs = {};
    }
    ngOnInit() {
        var elm = (<any>this)._element;
        this.arrayAndObjectProperties.filter(property => elm[property] && !this[property])
            .forEach(property => {
                this[property] = elm[property];
            });
    }
    _setValueFromElement(property: string, event: Event) {
        var target: any = event.target;
        if (this[property] !== target[property]) {
            this[property] = target[property];
            (<any>this)._differs[property] = this._createDiffer(this[property]);
        }
    }
    _createDiffer(value: string) {
        var differ = Array.isArray(value) ? (<any>this)._iterableDiffers.find(value).create(null) : (<any>this)._keyValueDiffers.find(value || {}).create(null);
        differ.diff(value);
        return differ;
    }
    _handleArrayDiffs(property: string, diff: any) {
        if (diff) {
            diff.forEachRemovedItem((item: any) => this._notifyArray(property, item.previousIndex));
            diff.forEachAddedItem((item: any) => this._notifyArray(property, item.currentIndex));
            diff.forEachMovedItem((item: any) => this._notifyArray(property, item.currentIndex));
        }
    }
    _handleObjectDiffs(property: string, diff: any) {
        if (diff) {
            var notify = (item: any) => this._notifyPath(property + '.' + item.key, item.currentValue);
            diff.forEachRemovedItem(notify);
            diff.forEachAddedItem(notify);
            diff.forEachChangedItem(notify);
        }
    }
    _notifyArray(property: string, index: number) {
        this._notifyPath(property + '.' + index, this[property][index]);
    }
    _notifyPath(path: string, value: any) {
        (<any>this)._element.notifyPath(path, value);
    }
    ngDoCheck() {
        this.arrayAndObjectProperties.forEach(property => {
            var elm = (<any>this)._element;
            var _differs = (<any>this)._differs;
            if (elm[property] !== this[property]) {
                elm[property] = this[property];
                _differs[property] = this._createDiffer(this[property]);
            } else if (_differs[property]) {
                var diff = _differs[property].diff(this[property]);
                if (diff instanceof DefaultIterableDiffer) {
                    this._handleArrayDiffs(property, diff);
                } else {
                    this._handleObjectDiffs(property, diff);
                }
            }
        });
    }
}

@Directive({
    selector: 'vaadin-combo-box',
})
export class VaadinComboBoxReloadConfigurationDirective {
    constructor(el: ElementRef, zone: NgZone) {
        let Polymer: any = (<any>window).Polymer;
        if (!Polymer.Settings.useShadow) {
            el.nativeElement.async(() => {
                if (el.nativeElement.isInitialized()) {
                    zone.runOutsideAngular(() => {
                        el.nativeElement.reloadConfiguration();
                    });
                }
            });
        }
    }
}
export var VaadinComboBox = [VaadinComboBoxChangeEventsAdapterDirective, VaadinComboBoxNotifyForDiffersDirective, VaadinComboBoxFormElementDirective, VaadinComboBoxValidationDirective];
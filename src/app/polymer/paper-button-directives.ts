/* Suggested Name File: paper-button-directives.ts */
import { Directive, ElementRef, Input, EventEmitter, DoCheck, Renderer, forwardRef, OnInit, IterableDiffers, KeyValueDiffers, DefaultIterableDiffer, NgZone, Injector } from '@angular/core';
import { FormControlName, NG_VALUE_ACCESSOR } from '@angular/forms';
import { __platform_browser_private__ } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';
@Directive({
    selector: 'paper-button',
    outputs: ["activeChange", "focusedChange", "disabledChange"],
    host: { "(active-changed)": "_emitChangeEvent('active', $event);", "(focused-changed)": "_emitChangeEvent('focused', $event);", "(disabled-changed)": "_emitChangeEvent('disabled', $event);" }
})
export class PaperButtonChangeEventsAdapterDirective {
    activeChange: any;
    focusedChange: any;
    disabledChange: any;
    eventNameForProperty = (property: string) => `${property}Change`;
    constructor() {
        this[this.eventNameForProperty('active')] = new EventEmitter<any>(false);
        this[this.eventNameForProperty('focused')] = new EventEmitter<any>(false);
        this[this.eventNameForProperty('disabled')] = new EventEmitter<any>(false);
    }
    _emitChangeEvent(property: string, event: any) {
        if (!event.detail.path) {
            this[this.eventNameForProperty(property)].emit(event.detail.value);
        }
    }
}

@Directive({
    selector: 'paper-button',
})
export class PaperButtonValidationDirective implements DoCheck {
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
    selector: 'paper-button',
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PaperButtonFormElementDirective), multi: true }],
    host: { '(valueChange)': 'onValueChanged($event)' }
})
export class PaperButtonFormElementDirective {
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
    selector: 'paper-button',
    inputs: ["keyEventTarget"],
    host: { "(key-event-target-changed)": "_setValueFromElement('keyEventTarget', $event);" }
})
export class PaperButtonNotifyForDiffersDirective implements OnInit, DoCheck {
    keyEventTarget: any;
    _element: any;
    _iterableDiffers: any;
    _keyValueDiffers: any;
    _differs: any;
    _arrayDiffs: any;
    arrayAndObjectProperties: any[] = ["keyEventTarget"];
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
    selector: 'paper-button',
})
export class PaperButtonReloadConfigurationDirective {
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
export var PaperButton = [PaperButtonChangeEventsAdapterDirective, PaperButtonNotifyForDiffersDirective];
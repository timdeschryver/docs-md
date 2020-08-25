---
kind: ClassDeclaration
name: FormControl
module: forms
---

# FormControl

## description

Tracks the value and validation status of an individual form control.

This is one of the three fundamental building blocks of Angular forms, along with
`FormGroup` and `FormArray`. It extends the `AbstractControl` class that
implements most of the base functionality for accessing the value, validation status,
user interactions and events. See [usage examples below](#usage-notes).

```ts
class FormControl extends AbstractControl {
  _onChange: Function[] = [];
  _pendingValue: any;
  _pendingChange: any;

  setValue(
    value: any,
    options: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    } = {}
  ): void;
  patchValue(
    value: any,
    options: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    } = {}
  ): void;
  reset(
    formState: any = null,
    options: { onlySelf?: boolean; emitEvent?: boolean } = {}
  ): void;
  _anyControls(condition: Function): boolean;
  _allControlsDisabled(): boolean;
  registerOnChange(fn: Function): void;
  _clearChangeFns(): void;
  registerOnDisabledChange(fn: (isDisabled: boolean) => void): void;
  _syncPendingControls(): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1122-L1310)

## see

`AbstractControl`
[Reactive Forms Guide](guide/reactive-forms)
[Usage Notes](#usage-notes)

## usageNotes

### Initializing Form Controls

Instantiate a `FormControl`, with an initial value.

````ts
const control = new FormControl('some value');
console.log(control.value);     // 'some value'
``

The following example initializes the control with a form state object. The `value`
and `disabled` keys are required in this case.

```ts
const control = new FormControl({ value: 'n/a', disabled: true });
console.log(control.value);     // 'n/a'
console.log(control.status);    // 'DISABLED'
````

The following example initializes the control with a sync validator.

```ts
const control = new FormControl("", Validators.required);
console.log(control.value); // ''
console.log(control.status); // 'INVALID'
```

The following example initializes the control using an options object.

```ts
const control = new FormControl("", {
  validators: Validators.required,
  asyncValidators: myAsyncValidator,
});
```

### Configure the control to update on a blur event

Set the `updateOn` option to `'blur'` to update on the blur `event`.

```ts
const control = new FormControl("", { updateOn: "blur" });
```

### Configure the control to update on a submit event

Set the `updateOn` option to `'submit'` to update on a submit `event`.

```ts
const control = new FormControl("", { updateOn: "submit" });
```

### Reset the control back to an initial value

You reset to a specific form state by passing through a standalone
value or a form state object that contains both a value and a disabled state
(these are the only two properties that cannot be calculated).

```ts
const control = new FormControl("Nancy");

console.log(control.value); // 'Nancy'

control.reset("Drew");

console.log(control.value); // 'Drew'
```

### Reset the control back to an initial value and disabled

```
const control = new FormControl('Nancy');

console.log(control.value); // 'Nancy'
console.log(control.status); // 'VALID'

control.reset({ value: 'Drew', disabled: true });

console.log(control.value); // 'Drew'
console.log(control.status); // 'DISABLED'
```

## publicApi

## Properties

| Name            | Type         | Description |
| --------------- | ------------ | ----------- |
| \_onChange      | `Function[]` |             |
| \_pendingValue  | `any`        |             |
| \_pendingChange | `any`        |             |

## Methods

### setValue

#### description (#setValue-description)

Sets a new value for the form control.

```ts
setValue(value: any, options: {  onlySelf?: boolean,  emitEvent?: boolean,  emitModelToViewChange?: boolean,  emitViewToModelChange?: boolean } = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1179-L1191)

#### Parameters (#setValue-parameters)

| Name    | Type                                                                                                             | Description                                                             |
| ------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| value   | `any`                                                                                                            | The new value for the control.                                          |
| options | `{ onlySelf?: boolean; emitEvent?: boolean; emitModelToViewChange?: boolean; emitViewToModelChange?: boolean; }` | Configuration options that determine how the control propagates changes |

### patchValue

#### description (#patchValue-description)

Patches the value of a control.

This function is functionally the same as {@link FormControl#setValue setValue} at this level.
It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
`FormArrays`, where it does behave differently.

```ts
patchValue(value: any, options: {  onlySelf?: boolean,  emitEvent?: boolean,  emitModelToViewChange?: boolean,  emitViewToModelChange?: boolean } = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1202-L1209)

#### see (#patchValue-see)

`setValue` for options

#### Parameters (#patchValue-parameters)

| Name    | Type                                                                                                             | Description |
| ------- | ---------------------------------------------------------------------------------------------------------------- | ----------- |
| value   | `any`                                                                                                            |             |
| options | `{ onlySelf?: boolean; emitEvent?: boolean; emitModelToViewChange?: boolean; emitViewToModelChange?: boolean; }` |             |

### reset

#### description (#reset-description)

Resets the form control, marking it `pristine` and `untouched`, and setting
the value to null.

```ts
reset(formState: any = null, options: {onlySelf?: boolean, emitEvent?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1229-L1235)

#### Parameters (#reset-parameters)

| Name      | Type                                           | Description                                                             |
| --------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
| formState | `any`                                          | Resets the control with an initial value,                               |
| options   | `{ onlySelf?: boolean; emitEvent?: boolean; }` | Configuration options that determine how the control propagates changes |

### \_updateValue

```ts
_updateValue();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1240-L1240)

#### internal (#\_updateValue-internal)

### \_anyControls

```ts
_anyControls(condition: Function): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1245-L1247)

#### internal (#\_anyControls-internal)

#### Parameters (#\_anyControls-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| condition | `Function` |             |

### \_allControlsDisabled

```ts
_allControlsDisabled(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1252-L1254)

#### internal (#\_allControlsDisabled-internal)

### registerOnChange

#### description (#registerOnChange-description)

Register a listener for change events.

```ts
registerOnChange(fn: Function): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1261-L1263)

#### Parameters (#registerOnChange-parameters)

| Name | Type       | Description                                      |
| ---- | ---------- | ------------------------------------------------ |
| fn   | `Function` | The method that is called when the value changes |

### \_clearChangeFns

```ts
_clearChangeFns(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1268-L1272)

#### internal (#\_clearChangeFns-internal)

### registerOnDisabledChange

#### description (#registerOnDisabledChange-description)

Register a listener for disabled events.

```ts
registerOnDisabledChange(fn: (isDisabled: boolean) => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1279-L1281)

#### Parameters (#registerOnDisabledChange-parameters)

| Name | Type                            | Description                                                 |
| ---- | ------------------------------- | ----------------------------------------------------------- |
| fn   | `(isDisabled: boolean) => void` | The method that is called when the disabled status changes. |

### \_forEachChild

```ts
_forEachChild(cb: Function): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1286-L1286)

#### internal (#\_forEachChild-internal)

#### Parameters (#\_forEachChild-parameters)

| Name | Type       | Description |
| ---- | ---------- | ----------- |
| cb   | `Function` |             |

### \_syncPendingControls

```ts
_syncPendingControls(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1289-L1299)

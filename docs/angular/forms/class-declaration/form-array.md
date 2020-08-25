---
kind: ClassDeclaration
name: FormArray
module: forms
---

# FormArray

## description

Tracks the value and validity state of an array of `FormControl`,
`FormGroup` or `FormArray` instances.

A `FormArray` aggregates the values of each child `FormControl` into an array.
It calculates its status by reducing the status values of its children. For example, if one of
the controls in a `FormArray` is invalid, the entire array becomes invalid.

`FormArray` is one of the three fundamental building blocks used to define forms in Angular,
along with `FormControl` and `FormGroup`.

```ts
class FormArray extends AbstractControl {
  at(index: number): AbstractControl;
  push(control: AbstractControl): void;
  insert(index: number, control: AbstractControl): void;
  removeAt(index: number): void;
  setControl(index: number, control: AbstractControl): void;
  setValue(
    value: any[],
    options: { onlySelf?: boolean; emitEvent?: boolean } = {}
  ): void;
  patchValue(
    value: any[],
    options: { onlySelf?: boolean; emitEvent?: boolean } = {}
  ): void;
  reset(
    value: any = [],
    options: { onlySelf?: boolean; emitEvent?: boolean } = {}
  ): void;
  getRawValue(): any[];
  clear(): void;
  _syncPendingControls(): boolean;
  _throwIfControlMissing(index: number): void;
  _forEachChild(cb: Function): void;
  _updateValue(): void;
  _anyControls(condition: Function): boolean;
  _setUpControls(): void;
  _checkAllValuesPresent(value: any): void;
  _allControlsDisabled(): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1804-L2158)

## usageNotes

### Create an array of form controls

```
const arr = new FormArray([
new FormControl('Nancy', Validators.minLength(2)),
new FormControl('Drew'),
]);

console.log(arr.value);   // ['Nancy', 'Drew']
console.log(arr.status);  // 'VALID'
```

### Create a form array with array-level validators

You include array-level validators and async validators. These come in handy
when you want to perform validation that considers the value of more than one child
control.

The two types of validators are passed in separately as the second and third arg
respectively, or together as part of an options object.

```
const arr = new FormArray([
new FormControl('Nancy'),
new FormControl('Drew')
], {validators: myValidator, asyncValidators: myAsyncValidator});
```

### Set the updateOn property for all controls in a form array

The options object is used to set a default value for each child
control's `updateOn` property. If you set `updateOn` to `'blur'` at the
array level, all child controls default to 'blur', unless the child
has explicitly specified a different `updateOn` value.

```ts
const arr = new FormArray([new FormControl()], { updateOn: "blur" });
```

### Adding or removing controls from a form array

To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
in `FormArray` itself. These methods ensure the controls are properly tracked in the
form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
the `FormArray` directly, as that result in strange and unexpected behavior such
as broken change detection.

## publicApi

## Methods

### at

#### description (#at-description)

Get the `AbstractControl` at the given `index` in the array.

```ts
at(index: number): AbstractControl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1834-L1836)

#### Parameters (#at-parameters)

| Name  | Type     | Description                                |
| ----- | -------- | ------------------------------------------ |
| index | `number` | Index in the array to retrieve the control |

### push

#### description (#push-description)

Insert a new `AbstractControl` at the end of the array.

```ts
push(control: AbstractControl): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1843-L1848)

#### Parameters (#push-parameters)

| Name    | Type              | Description                 |
| ------- | ----------------- | --------------------------- |
| control | `AbstractControl` | Form control to be inserted |

### insert

#### description (#insert-description)

Insert a new `AbstractControl` at the given `index` in the array.

```ts
insert(index: number, control: AbstractControl): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1856-L1861)

#### Parameters (#insert-parameters)

| Name    | Type              | Description                              |
| ------- | ----------------- | ---------------------------------------- |
| index   | `number`          | Index in the array to insert the control |
| control | `AbstractControl` | Form control to be inserted              |

### removeAt

#### description (#removeAt-description)

Remove the control at the given `index` in the array.

```ts
removeAt(index: number): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1868-L1872)

#### Parameters (#removeAt-parameters)

| Name  | Type     | Description                              |
| ----- | -------- | ---------------------------------------- |
| index | `number` | Index in the array to remove the control |

### setControl

#### description (#setControl-description)

Replace an existing control.

```ts
setControl(index: number, control: AbstractControl): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1880-L1891)

#### Parameters (#setControl-parameters)

| Name    | Type              | Description                                                   |
| ------- | ----------------- | ------------------------------------------------------------- |
| index   | `number`          | Index in the array to replace the control                     |
| control | `AbstractControl` | The `AbstractControl` control to replace the existing control |

### setValue

#### description (#setValue-description)

Sets the value of the `FormArray`. It accepts an array that matches
the structure of the control.

This method performs strict checks, and throws an error if you try
to set the value of a control that doesn't exist or if you exclude the
value of a control.

```ts
setValue(value: any[], options: {onlySelf?: boolean, emitEvent?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1935-L1942)

#### usageNotes (#setValue-usage-notes)

### Set the values for the controls in the form array

```
const arr = new FormArray([
new FormControl(),
new FormControl()
]);
console.log(arr.value);   // [null, null]

arr.setValue(['Nancy', 'Drew']);
console.log(arr.value);   // ['Nancy', 'Drew']
```

#### Parameters (#setValue-parameters)

| Name    | Type                                           | Description                                                             |
| ------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
| value   | `any[]`                                        | Array of values for the controls                                        |
| options | `{ onlySelf?: boolean; emitEvent?: boolean; }` | Configure options that determine how the control propagates changes and |

### patchValue

#### description (#patchValue-description)

Patches the value of the `FormArray`. It accepts an array that matches the
structure of the control, and does its best to match the values to the correct
controls in the group.

It accepts both super-sets and sub-sets of the array without throwing an error.

```ts
patchValue(value: any[], options: {onlySelf?: boolean, emitEvent?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1978-L1985)

#### usageNotes (#patchValue-usage-notes)

### Patch the values for controls in a form array

```
const arr = new FormArray([
new FormControl(),
new FormControl()
]);
console.log(arr.value);   // [null, null]

arr.patchValue(['Nancy']);
console.log(arr.value);   // ['Nancy', null]
```

#### Parameters (#patchValue-parameters)

| Name    | Type                                           | Description                                                             |
| ------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
| value   | `any[]`                                        | Array of latest values for the controls                                 |
| options | `{ onlySelf?: boolean; emitEvent?: boolean; }` | Configure options that determine how the control propagates changes and |

### reset

#### description (#reset-description)

Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
value of all descendants to null or null maps.

You reset to a specific form state by passing in an array of states
that matches the structure of the control. The state is a standalone value
or a form state object with both a value and a disabled status.

```ts
reset(value: any = [], options: {onlySelf?: boolean, emitEvent?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L2033-L2040)

#### usageNotes (#reset-usage-notes)

### Reset the values in a form array

```ts
const arr = new FormArray([new FormControl(), new FormControl()]);
arr.reset(["name", "last name"]);

console.log(this.arr.value); // ['name', 'last name']
```

### Reset the values in a form array and the disabled status for the first control

```
this.arr.reset([
{value: 'name', disabled: true},
'last'
]);

console.log(this.arr.value);  // ['name', 'last name']
console.log(this.arr.get(0).status);  // 'DISABLED'
```

#### Parameters (#reset-parameters)

| Name    | Type                                           | Description                                                             |
| ------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
| value   | `any`                                          | Array of values for the controls                                        |
| options | `{ onlySelf?: boolean; emitEvent?: boolean; }` | Configure options that determine how the control propagates changes and |

### getRawValue

#### description (#getRawValue-description)

The aggregate value of the array, including any disabled controls.

Reports all values regardless of disabled status.
For enabled controls only, the `value` property is the best way to get the value of the array.

```ts
getRawValue(): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L2048-L2052)

### clear

#### description (#clear-description)

Remove all controls in the `FormArray`.

```ts
clear(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L2084-L2089)

#### usageNotes (#clear-usage-notes)

### Remove all elements from a FormArray

```ts
const arr = new FormArray([new FormControl(), new FormControl()]);
console.log(arr.length); // 2

arr.clear();
console.log(arr.length); // 0
```

It's a simpler and more efficient alternative to removing all elements one by one:

```ts
const arr = new FormArray([new FormControl(), new FormControl()]);

while (arr.length) {
  arr.removeAt(0);
}
```

### \_syncPendingControls

```ts
_syncPendingControls(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L2092-L2098)

### \_throwIfControlMissing

```ts
_throwIfControlMissing(index: number): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L2101-L2111)

#### Parameters (#\_throwIfControlMissing-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| index | `number` |             |

### \_forEachChild

```ts
_forEachChild(cb: Function): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L2114-L2118)

#### Parameters (#\_forEachChild-parameters)

| Name | Type       | Description |
| ---- | ---------- | ----------- |
| cb   | `Function` |             |

### \_updateValue

```ts
_updateValue(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L2121-L2125)

### \_anyControls

```ts
_anyControls(condition: Function): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L2128-L2130)

#### Parameters (#\_anyControls-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| condition | `Function` |             |

### \_setUpControls

```ts
_setUpControls(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L2133-L2135)

### \_checkAllValuesPresent

```ts
_checkAllValuesPresent(value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L2138-L2144)

#### Parameters (#\_checkAllValuesPresent-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |

### \_allControlsDisabled

```ts
_allControlsDisabled(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L2147-L2152)

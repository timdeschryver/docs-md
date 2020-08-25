---
kind: ClassDeclaration
name: FormGroup
module: forms
---

# FormGroup

## description

Tracks the value and validity state of a group of `FormControl` instances.

A `FormGroup` aggregates the values of each child `FormControl` into one object,
with each control name as the key. It calculates its status by reducing the status values
of its children. For example, if one of the controls in a group is invalid, the entire
group becomes invalid.

`FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
along with `FormControl` and `FormArray`.

When instantiating a `FormGroup`, pass in a collection of child controls as the first
argument. The key for each child registers the name for the control.

```ts
class FormGroup extends AbstractControl {
  registerControl(name: string, control: AbstractControl): AbstractControl;
  addControl(name: string, control: AbstractControl): void;
  removeControl(name: string): void;
  setControl(name: string, control: AbstractControl): void;
  contains(controlName: string): boolean;
  setValue(
    value: { [key: string]: any },
    options: { onlySelf?: boolean; emitEvent?: boolean } = {}
  ): void;
  patchValue(
    value: { [key: string]: any },
    options: { onlySelf?: boolean; emitEvent?: boolean } = {}
  ): void;
  reset(
    value: any = {},
    options: { onlySelf?: boolean; emitEvent?: boolean } = {}
  ): void;
  getRawValue(): any;
  _syncPendingControls(): boolean;
  _throwIfControlMissing(name: string): void;
  _forEachChild(cb: (v: any, k: string) => void): void;
  _setUpControls(): void;
  _updateValue(): void;
  _anyControls(condition: Function): boolean;
  _reduceValue();
  _reduceChildren(initValue: any, fn: Function);
  _allControlsDisabled(): boolean;
  _checkAllValuesPresent(value: any): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1384-L1738)

## usageNotes

### Create a form group with 2 controls

```
const form = new FormGroup({
first: new FormControl('Nancy', Validators.minLength(2)),
last: new FormControl('Drew'),
});

console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
console.log(form.status);  // 'VALID'
```

### Create a form group with a group-level validator

You include group-level validators as the second arg, or group-level async
validators as the third arg. These come in handy when you want to perform validation
that considers the value of more than one child control.

```
const form = new FormGroup({
password: new FormControl('', Validators.minLength(2)),
passwordConfirm: new FormControl('', Validators.minLength(2)),
}, passwordMatchValidator);


function passwordMatchValidator(g: FormGroup) {
return g.get('password').value === g.get('passwordConfirm').value
? null : {'mismatch': true};
}
```

Like `FormControl` instances, you choose to pass in
validators and async validators as part of an options object.

```
const form = new FormGroup({
password: new FormControl('')
passwordConfirm: new FormControl('')
}, { validators: passwordMatchValidator, asyncValidators: otherValidator });
```

### Set the updateOn property for all controls in a form group

The options object is used to set a default value for each child
control's `updateOn` property. If you set `updateOn` to `'blur'` at the
group level, all child controls default to 'blur', unless the child
has explicitly specified a different `updateOn` value.

```ts
const c = new FormGroup(
  {
    one: new FormControl(),
  },
  { updateOn: "blur" }
);
```

## publicApi

## Methods

### registerControl

#### description (#registerControl-description)

Registers a control with the group's list of controls.

This method does not update the value or validity of the control.
Use {@link FormGroup#addControl addControl} instead.

```ts
registerControl(name: string, control: AbstractControl): AbstractControl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1418-L1424)

#### Parameters (#registerControl-parameters)

| Name    | Type              | Description                                    |
| ------- | ----------------- | ---------------------------------------------- |
| name    | `string`          | The control name to register in the collection |
| control | `AbstractControl` | Provides the control for the given name        |

### addControl

#### description (#addControl-description)

Add a control to this group.

This method also updates the value and validity of the control.

```ts
addControl(name: string, control: AbstractControl): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1434-L1438)

#### Parameters (#addControl-parameters)

| Name    | Type              | Description                               |
| ------- | ----------------- | ----------------------------------------- |
| name    | `string`          | The control name to add to the collection |
| control | `AbstractControl` | Provides the control for the given name   |

### removeControl

#### description (#removeControl-description)

Remove a control from this group.

```ts
removeControl(name: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1445-L1450)

#### Parameters (#removeControl-parameters)

| Name | Type     | Description                                    |
| ---- | -------- | ---------------------------------------------- |
| name | `string` | The control name to remove from the collection |

### setControl

#### description (#setControl-description)

Replace an existing control.

```ts
setControl(name: string, control: AbstractControl): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1458-L1464)

#### Parameters (#setControl-parameters)

| Name    | Type              | Description                                   |
| ------- | ----------------- | --------------------------------------------- |
| name    | `string`          | The control name to replace in the collection |
| control | `AbstractControl` | Provides the control for the given name       |

### contains

#### description (#contains-description)

Check whether there is an enabled control with the given name in the group.

Reports false for disabled controls. If you'd like to check for existence in the group
only, use {@link AbstractControl#get get} instead.

```ts
contains(controlName: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1476-L1478)

#### Parameters (#contains-parameters)

| Name        | Type     | Description                                               |
| ----------- | -------- | --------------------------------------------------------- |
| controlName | `string` | The control name to check for existence in the collection |

#### returns (#contains-returns)

false for disabled controls, true otherwise.

### setValue

#### description (#setValue-description)

Sets the value of the `FormGroup`. It accepts an object that matches
the structure of the group, with control names as keys.

```ts
setValue(value: {[key: string]: any}, options: {onlySelf?: boolean, emitEvent?: boolean} = {}):   void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1515-L1523)

#### usageNotes (#setValue-usage-notes)

### Set the complete value for the form group

```
const form = new FormGroup({
first: new FormControl(),
last: new FormControl()
});

console.log(form.value);   // {first: null, last: null}

form.setValue({first: 'Nancy', last: 'Drew'});
console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
```

#### throws (#setValue-throws)

When strict checks fail, such as setting the value of a control
that doesn't exist or if you exclude a value of a control that does exist.

#### Parameters (#setValue-parameters)

| Name    | Type                                           | Description                                                             |
| ------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
| value   | `{ [key: string]: any; }`                      | The new value for the control that matches the structure of the group.  |
| options | `{ onlySelf?: boolean; emitEvent?: boolean; }` | Configuration options that determine how the control propagates changes |

### patchValue

#### description (#patchValue-description)

Patches the value of the `FormGroup`. It accepts an object with control
names as keys, and does its best to match the values to the correct controls
in the group.

It accepts both super-sets and sub-sets of the group without throwing an error.

```ts
patchValue(value: {[key: string]: any}, options: {onlySelf?: boolean, emitEvent?: boolean} = {}):   void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1558-L1566)

#### usageNotes (#patchValue-usage-notes)

### Patch the value for a form group

```
const form = new FormGroup({
first: new FormControl(),
last: new FormControl()
});
console.log(form.value);   // {first: null, last: null}

form.patchValue({first: 'Nancy'});
console.log(form.value);   // {first: 'Nancy', last: null}
```

#### Parameters (#patchValue-parameters)

| Name    | Type                                           | Description                                                                 |
| ------- | ---------------------------------------------- | --------------------------------------------------------------------------- |
| value   | `{ [key: string]: any; }`                      | The object that matches the structure of the group.                         |
| options | `{ onlySelf?: boolean; emitEvent?: boolean; }` | Configuration options that determine how the control propagates changes and |

### reset

#### description (#reset-description)

Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
the value of all descendants to null.

You reset to a specific form state by passing in a map of states
that matches the structure of your form, with control names as keys. The state
is a standalone value or a form state object with both a value and a disabled
status.

```ts
reset(value: any = {}, options: {onlySelf?: boolean, emitEvent?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1625-L1632)

#### Parameters (#reset-parameters)

| Name    | Type                                           | Description                                                             |
| ------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
| value   | `any`                                          | Resets the control with an initial value,                               |
| options | `{ onlySelf?: boolean; emitEvent?: boolean; }` | Configuration options that determine how the control propagates changes |

#### usageNotes (#reset-usage-notes)

### Reset the form group values

```ts
const form = new FormGroup({
  first: new FormControl("first name"),
  last: new FormControl("last name"),
});

console.log(form.value); // {first: 'first name', last: 'last name'}

form.reset({ first: "name", last: "last name" });

console.log(form.value); // {first: 'name', last: 'last name'}
```

### Reset the form group values and disabled status

```
const form = new FormGroup({
first: new FormControl('first name'),
last: new FormControl('last name')
});

form.reset({
first: {value: 'name', disabled: true},
last: 'last'
});

console.log(this.form.value);  // {first: 'name', last: 'last name'}
console.log(this.form.get('first').status);  // 'DISABLED'
```

### getRawValue

#### description (#getRawValue-description)

The aggregate value of the `FormGroup`, including any disabled controls.

Retrieves all values regardless of disabled status.
The `value` property is the best way to get the value of the group, because
it excludes disabled controls in the `FormGroup`.

```ts
getRawValue(): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1641-L1647)

### \_syncPendingControls

```ts
_syncPendingControls(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1650-L1656)

### \_throwIfControlMissing

```ts
_throwIfControlMissing(name: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1659-L1669)

#### Parameters (#\_throwIfControlMissing-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |

### \_forEachChild

```ts
_forEachChild(cb: (v: any, k: string) => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1672-L1674)

#### Parameters (#\_forEachChild-parameters)

| Name | Type                          | Description |
| ---- | ----------------------------- | ----------- |
| cb   | `(v: any, k: string) => void` |             |

### \_setUpControls

```ts
_setUpControls(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1677-L1682)

### \_updateValue

```ts
_updateValue(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1685-L1687)

### \_anyControls

```ts
_anyControls(condition: Function): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1690-L1698)

#### Parameters (#\_anyControls-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| condition | `Function` |             |

### \_reduceValue

```ts
_reduceValue();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1701-L1709)

### \_reduceChildren

```ts
_reduceChildren(initValue: any, fn: Function);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1712-L1718)

#### Parameters (#\_reduceChildren-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| initValue | `any`      |             |
| fn        | `Function` |             |

### \_allControlsDisabled

```ts
_allControlsDisabled(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1721-L1728)

### \_checkAllValuesPresent

```ts
_checkAllValuesPresent(value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1731-L1737)

#### Parameters (#\_checkAllValuesPresent-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |

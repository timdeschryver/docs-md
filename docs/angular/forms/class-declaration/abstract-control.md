---
kind: ClassDeclaration
name: AbstractControl
module: forms
---

# AbstractControl

## description

This is the base class for `FormControl`, `FormGroup`, and `FormArray`.

It provides some of the shared behavior that all controls and groups of controls have, like
running validators, calculating status, and resetting state. It also defines the properties
that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
instantiated directly.

```ts
class AbstractControl {
  _pendingDirty!: boolean;
  _hasOwnPendingAsyncValidator = false;
  _pendingTouched!: boolean;
  _onCollectionChange = () => {};
  _updateOn!: FormHooks;
  public readonly value: any;
  public readonly status!: string;
  public readonly errors!: ValidationErrors | null;
  public readonly pristine: boolean = true;
  public readonly touched: boolean = false;
  public readonly valueChanges!: Observable<any>;
  public readonly statusChanges!: Observable<any>;
  _onDisabledChange: Function[] = [];

  setValidators(newValidator: ValidatorFn | ValidatorFn[] | null): void;
  setAsyncValidators(
    newValidator: AsyncValidatorFn | AsyncValidatorFn[] | null
  ): void;
  clearValidators(): void;
  clearAsyncValidators(): void;
  markAsTouched(opts: { onlySelf?: boolean } = {}): void;
  markAllAsTouched(): void;
  markAsUntouched(opts: { onlySelf?: boolean } = {}): void;
  markAsDirty(opts: { onlySelf?: boolean } = {}): void;
  markAsPristine(opts: { onlySelf?: boolean } = {}): void;
  markAsPending(opts: { onlySelf?: boolean; emitEvent?: boolean } = {}): void;
  disable(opts: { onlySelf?: boolean; emitEvent?: boolean } = {}): void;
  enable(opts: { onlySelf?: boolean; emitEvent?: boolean } = {}): void;
  setParent(parent: FormGroup | FormArray): void;
  abstract setValue(value: any, options?: Object): void;
  abstract patchValue(value: any, options?: Object): void;
  abstract reset(value?: any, options?: Object): void;
  updateValueAndValidity(
    opts: { onlySelf?: boolean; emitEvent?: boolean } = {}
  ): void;
  _updateTreeValidity(opts: { emitEvent?: boolean } = { emitEvent: true });
  setErrors(
    errors: ValidationErrors | null,
    opts: { emitEvent?: boolean } = {}
  ): void;
  get(path: Array<string | number> | string): AbstractControl | null;
  getError(errorCode: string, path?: Array<string | number> | string): any;
  hasError(errorCode: string, path?: Array<string | number> | string): boolean;
  _updateControlsErrors(emitEvent: boolean): void;
  _initObservables();
  abstract _updateValue(): void;
  abstract _forEachChild(cb: Function): void;
  abstract _anyControls(condition: Function): boolean;
  abstract _allControlsDisabled(): boolean;
  abstract _syncPendingControls(): boolean;
  _anyControlsHaveStatus(status: string): boolean;
  _anyControlsDirty(): boolean;
  _anyControlsTouched(): boolean;
  _updatePristine(opts: { onlySelf?: boolean } = {}): void;
  _updateTouched(opts: { onlySelf?: boolean } = {}): void;
  _isBoxedValue(formState: any): boolean;
  _registerOnCollectionChange(fn: () => void): void;
  _setUpdateStrategy(
    opts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null
  ): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L153-L1023)

## see

[Forms Guide](/guide/forms)
[Reactive Forms Guide](/guide/reactive-forms)
[Dynamic Forms Guide](/guide/dynamic-form)

## publicApi

## Properties

| Name                          | Type         | Description                                                                       |
| ----------------------------- | ------------ | --------------------------------------------------------------------------------- |
| \_pendingDirty                | `boolean`    |                                                                                   |
| \_hasOwnPendingAsyncValidator | `boolean`    | Indicates that a control has its own pending asynchronous validation in progress. |
| \_pendingTouched              | `boolean`    |                                                                                   |
| \_onCollectionChange          | `() => void` |                                                                                   |
| \_updateOn                    | `FormHooks`  |                                                                                   |
| value                         | `any`        | The current value of the control.                                                 |

- For a `FormControl`, the current value.
- For an enabled `FormGroup`, the values of enabled controls as an object
  with a key-value pair for each member of the group.
- For a disabled `FormGroup`, the values of all controls as an object
  with a key-value pair for each member of the group.
- For a `FormArray`, the values of enabled controls as an array. |
  | status | `string` | The validation status of the control. There are four possible
  validation status values:

- **VALID**: This control has passed all validation checks.
- **INVALID**: This control has failed at least one validation check.
- **PENDING**: This control is in the midst of conducting a validation check.
- **DISABLED**: This control is exempt from validation checks.

These status values are mutually exclusive, so a control cannot be
both valid AND invalid or invalid AND disabled. |
| errors | `ValidationErrors` | An object containing any errors generated by failing validation,
or null if there are no errors. |
| pristine | `boolean` | A control is `pristine` if the user has not yet changed
the value in the UI. |
| touched | `boolean` | True if the control is marked as `touched`.

A control is marked `touched` once the user has triggered
a `blur` event on it. |
| valueChanges | `any` | A multicasting observable that emits an event every time the value of the control changes, in
the UI or programmatically. It also emits an event each time you call enable() or disable()
without passing along {emitEvent: false} as a function argument. |
| statusChanges | `any` | A multicasting observable that emits an event every time the validation `status` of the control
recalculates. |
| \_onDisabledChange | `Function[]` | |

## Methods

### setValidators

#### description (#setValidators-description)

Sets the synchronous validators that are active on this control. Calling
this overwrites any existing sync validators.

When you add or remove a validator at run time, you must call
`updateValueAndValidity()` for the new validation to take effect.

```ts
setValidators(newValidator: ValidatorFn|ValidatorFn[]|null): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L434-L437)

#### Parameters (#setValidators-parameters)

| Name         | Type         | Description    |
| ------------ | ------------ | -------------- |
| newValidator | `ValidatorFn | ValidatorFn[]` |  |

### setAsyncValidators

#### description (#setAsyncValidators-description)

Sets the async validators that are active on this control. Calling this
overwrites any existing async validators.

When you add or remove a validator at run time, you must call
`updateValueAndValidity()` for the new validation to take effect.

```ts
setAsyncValidators(newValidator: AsyncValidatorFn|AsyncValidatorFn[]|null): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L447-L450)

#### Parameters (#setAsyncValidators-parameters)

| Name         | Type              | Description         |
| ------------ | ----------------- | ------------------- |
| newValidator | `AsyncValidatorFn | AsyncValidatorFn[]` |  |

### clearValidators

#### description (#clearValidators-description)

Empties out the sync validator list.

When you add or remove a validator at run time, you must call
`updateValueAndValidity()` for the new validation to take effect.

```ts
clearValidators(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L459-L461)

### clearAsyncValidators

#### description (#clearAsyncValidators-description)

Empties out the async validator list.

When you add or remove a validator at run time, you must call
`updateValueAndValidity()` for the new validation to take effect.

```ts
clearAsyncValidators(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L470-L472)

### markAsTouched

#### description (#markAsTouched-description)

Marks the control as `touched`. A control is touched by focus and
blur events that do not change the value.

```ts
markAsTouched(opts: {onlySelf?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L487-L493)

#### see (#markAsTouched-see)

`markAsUntouched()`
`markAsDirty()`
`markAsPristine()`

#### Parameters (#markAsTouched-parameters)

| Name | Type                      | Description                                                             |
| ---- | ------------------------- | ----------------------------------------------------------------------- |
| opts | `{ onlySelf?: boolean; }` | Configuration options that determine how the control propagates changes |

### markAllAsTouched

#### description (#markAllAsTouched-description)

Marks the control and all its descendant controls as `touched`.

```ts
markAllAsTouched(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L499-L503)

#### see (#markAllAsTouched-see)

`markAsTouched()`

### markAsUntouched

#### description (#markAsUntouched-description)

Marks the control as `untouched`.

If the control has any children, also marks all children as `untouched`
and recalculates the `touched` status of all parent controls.

```ts
markAsUntouched(opts: {onlySelf?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L520-L531)

#### see (#markAsUntouched-see)

`markAsTouched()`
`markAsDirty()`
`markAsPristine()`

#### Parameters (#markAsUntouched-parameters)

| Name | Type                      | Description                                                             |
| ---- | ------------------------- | ----------------------------------------------------------------------- |
| opts | `{ onlySelf?: boolean; }` | Configuration options that determine how the control propagates changes |

### markAsDirty

#### description (#markAsDirty-description)

Marks the control as `dirty`. A control becomes dirty when
the control's value is changed through the UI; compare `markAsTouched`.

```ts
markAsDirty(opts: {onlySelf?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L546-L552)

#### see (#markAsDirty-see)

`markAsTouched()`
`markAsUntouched()`
`markAsPristine()`

#### Parameters (#markAsDirty-parameters)

| Name | Type                      | Description                                                             |
| ---- | ------------------------- | ----------------------------------------------------------------------- |
| opts | `{ onlySelf?: boolean; }` | Configuration options that determine how the control propagates changes |

### markAsPristine

#### description (#markAsPristine-description)

Marks the control as `pristine`.

If the control has any children, marks all children as `pristine`,
and recalculates the `pristine` status of all parent
controls.

```ts
markAsPristine(opts: {onlySelf?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L570-L581)

#### see (#markAsPristine-see)

`markAsTouched()`
`markAsUntouched()`
`markAsDirty()`

#### Parameters (#markAsPristine-parameters)

| Name | Type                      | Description                                                             |
| ---- | ------------------------- | ----------------------------------------------------------------------- |
| opts | `{ onlySelf?: boolean; }` | Configuration options that determine how the control emits events after |

### markAsPending

#### description (#markAsPending-description)

Marks the control as `pending`.

A control is pending while the control performs async validation.

```ts
markAsPending(opts: {onlySelf?: boolean, emitEvent?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L599-L609)

#### see (#markAsPending-see)

{@link AbstractControl.status}

#### Parameters (#markAsPending-parameters)

| Name | Type                                           | Description                                                                 |
| ---- | ---------------------------------------------- | --------------------------------------------------------------------------- |
| opts | `{ onlySelf?: boolean; emitEvent?: boolean; }` | Configuration options that determine how the control propagates changes and |

### disable

#### description (#disable-description)

Disables the control. This means the control is exempt from validation checks and
excluded from the aggregate value of any parent. Its status is `DISABLED`.

If the control has children, all children are also disabled.

```ts
disable(opts: {onlySelf?: boolean, emitEvent?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L628-L647)

#### see (#disable-see)

{@link AbstractControl.status}

#### Parameters (#disable-parameters)

| Name | Type                                           | Description                                                     |
| ---- | ---------------------------------------------- | --------------------------------------------------------------- |
| opts | `{ onlySelf?: boolean; emitEvent?: boolean; }` | Configuration options that determine how the control propagates |

### enable

#### description (#enable-description)

Enables the control. This means the control is included in validation checks and
the aggregate value of its parent. Its status recalculates based on its value and
its validators.

By default, if the control has children, all children are enabled.

```ts
enable(opts: {onlySelf?: boolean, emitEvent?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L667-L680)

#### see (#enable-see)

{@link AbstractControl.status}

#### Parameters (#enable-parameters)

| Name | Type                                           | Description                                                           |
| ---- | ---------------------------------------------- | --------------------------------------------------------------------- |
| opts | `{ onlySelf?: boolean; emitEvent?: boolean; }` | Configure options that control how the control propagates changes and |

### setParent

```ts
setParent(parent: FormGroup|FormArray): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L696-L698)

#### Parameters (#setParent-parameters)

| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| parent | `FormGroup | FormArray`  | Sets the parent of the control |

### setValue

#### description (#setValue-description)

Sets the value of the control. Abstract method (implemented in sub-classes).

```ts
abstract setValue(value: any, options?: Object): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L703-L703)

#### Parameters (#setValue-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| value   | `any`    |             |
| options | `Object` |             |

### patchValue

#### description (#patchValue-description)

Patches the value of the control. Abstract method (implemented in sub-classes).

```ts
abstract patchValue(value: any, options?: Object): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L708-L708)

#### Parameters (#patchValue-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| value   | `any`    |             |
| options | `Object` |             |

### reset

#### description (#reset-description)

Resets the control. Abstract method (implemented in sub-classes).

```ts
abstract reset(value?: any, options?: Object): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L713-L713)

#### Parameters (#reset-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| value   | `any`    |             |
| options | `Object` |             |

### updateValueAndValidity

#### description (#updateValueAndValidity-description)

Recalculates the value and validation status of the control.

By default, it also updates the value and validity of its ancestors.

```ts
updateValueAndValidity(opts: {onlySelf?: boolean, emitEvent?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L729-L751)

#### Parameters (#updateValueAndValidity-parameters)

| Name | Type                                           | Description                                                                         |
| ---- | ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| opts | `{ onlySelf?: boolean; emitEvent?: boolean; }` | Configuration options determine how the control propagates changes and emits events |

### \_updateTreeValidity

```ts
_updateTreeValidity(opts: {emitEvent?: boolean} = {emitEvent: true});
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L754-L757)

#### Parameters (#\_updateTreeValidity-parameters)

| Name | Type                       | Description |
| ---- | -------------------------- | ----------- |
| opts | `{ emitEvent?: boolean; }` |             |

### setErrors

#### description (#setErrors-description)

Sets errors on a form control when running validations manually, rather than automatically.

Calling `setErrors` also updates the validity of the parent control.

```ts
setErrors(errors: ValidationErrors|null, opts: {emitEvent?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L812-L815)

#### usageNotes (#setErrors-usage-notes)

### Manually set the errors for a control

```
const login = new FormControl('someLogin');
login.setErrors({
notUnique: true
});

expect(login.valid).toEqual(false);
expect(login.errors).toEqual({ notUnique: true });

login.setValue('someOtherLogin');

expect(login.valid).toEqual(true);
```

#### Parameters (#setErrors-parameters)

| Name   | Type                       | Description |
| ------ | -------------------------- | ----------- |
| errors | `ValidationErrors`         |             |
| opts   | `{ emitEvent?: boolean; }` |             |

### get

#### description (#get-description)

Retrieves a child control given the control's name or path.

```ts
get(path: Array<string|number>|string): AbstractControl|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L834-L836)

#### Parameters (#get-parameters)

| Name | Type    | Description |
| ---- | ------- | ----------- |
| path | `string | (string     | number)[]` | A dot-delimited string or array of string/number values that define the path to the |

#### usageNotes (#get-usage-notes)

### Retrieve a nested control

For example, to get a `name` control nested within a `person` sub-group:

- `this.form.get('person.name');`

-OR-

- `this.form.get(['person', 'name']);`

### getError

#### description (#getError-description)

Reports error data for the control with the given path.

```ts
getError(errorCode: string, path?: Array<string|number>|string): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L865-L868)

#### Parameters (#getError-parameters)

| Name      | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| errorCode | `string` | The code of the error to check |
| path      | `string  | (string                        | number)[]` | A list of control names that designates how to move from the current control |

#### usageNotes (#getError-usage-notes)

For example, for the following `FormGroup`:

```
form = new FormGroup({
address: new FormGroup({ street: new FormControl() })
});
```

The path to the 'street' control from the root form would be 'address' -> 'street'.

It can be provided to this method in one of two formats:

1. An array of string control names, e.g. `['address', 'street']`
1. A period-delimited list of control names in one string, e.g. `'address.street'`

#### returns (#getError-returns)

error data for that particular error. If the control or error is not present,
null is returned.

### hasError

#### description (#hasError-description)

Reports whether the control with the given path has the error specified.

```ts
hasError(errorCode: string, path?: Array<string|number>|string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L900-L902)

#### Parameters (#hasError-parameters)

| Name      | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| errorCode | `string` | The code of the error to check |
| path      | `string  | (string                        | number)[]` | A list of control names that designates how to move from the current control |

#### usageNotes (#hasError-usage-notes)

For example, for the following `FormGroup`:

```
form = new FormGroup({
address: new FormGroup({ street: new FormControl() })
});
```

The path to the 'street' control from the root form would be 'address' -> 'street'.

It can be provided to this method in one of two formats:

1. An array of string control names, e.g. `['address', 'street']`
1. A period-delimited list of control names in one string, e.g. `'address.street'`

If no path is given, this method checks for the error on the current control.

#### returns (#hasError-returns)

whether the given error is present in the control at the given path.

If the control is not present, false is returned.

### \_updateControlsErrors

```ts
_updateControlsErrors(emitEvent: boolean): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L918-L928)

#### Parameters (#\_updateControlsErrors-parameters)

| Name      | Type      | Description |
| --------- | --------- | ----------- |
| emitEvent | `boolean` |             |

### \_initObservables

```ts
_initObservables();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L931-L934)

### \_updateValue

```ts
abstract _updateValue(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L946-L946)

### \_forEachChild

```ts
abstract _forEachChild(cb: Function): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L949-L949)

#### Parameters (#\_forEachChild-parameters)

| Name | Type       | Description |
| ---- | ---------- | ----------- |
| cb   | `Function` |             |

### \_anyControls

```ts
abstract _anyControls(condition: Function): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L952-L952)

#### Parameters (#\_anyControls-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| condition | `Function` |             |

### \_allControlsDisabled

```ts
abstract _allControlsDisabled(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L955-L955)

### \_syncPendingControls

```ts
abstract _syncPendingControls(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L958-L958)

### \_anyControlsHaveStatus

```ts
_anyControlsHaveStatus(status: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L961-L963)

#### Parameters (#\_anyControlsHaveStatus-parameters)

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| status | `string` |             |

### \_anyControlsDirty

```ts
_anyControlsDirty(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L966-L968)

### \_anyControlsTouched

```ts
_anyControlsTouched(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L971-L973)

### \_updatePristine

```ts
_updatePristine(opts: {onlySelf?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L976-L982)

#### Parameters (#\_updatePristine-parameters)

| Name | Type                      | Description |
| ---- | ------------------------- | ----------- |
| opts | `{ onlySelf?: boolean; }` |             |

### \_updateTouched

```ts
_updateTouched(opts: {onlySelf?: boolean} = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L985-L991)

#### Parameters (#\_updateTouched-parameters)

| Name | Type                      | Description |
| ---- | ------------------------- | ----------- |
| opts | `{ onlySelf?: boolean; }` |             |

### \_isBoxedValue

```ts
_isBoxedValue(formState: any): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L997-L1000)

#### Parameters (#\_isBoxedValue-parameters)

| Name      | Type  | Description |
| --------- | ----- | ----------- |
| formState | `any` |             |

### \_registerOnCollectionChange

```ts
_registerOnCollectionChange(fn: () => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1003-L1005)

#### Parameters (#\_registerOnCollectionChange-parameters)

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| fn   | `() => void` |             |

### \_setUpdateStrategy

```ts
_setUpdateStrategy(opts?: ValidatorFn|ValidatorFn[]|AbstractControlOptions|null): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L1008-L1012)

#### Parameters (#\_setUpdateStrategy-parameters)

| Name | Type         | Description   |
| ---- | ------------ | ------------- |
| opts | `ValidatorFn | ValidatorFn[] | AbstractControlOptions` |  |

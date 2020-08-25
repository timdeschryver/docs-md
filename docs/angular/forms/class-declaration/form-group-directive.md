---
kind: ClassDeclaration
name: FormGroupDirective
module: forms
---

# FormGroupDirective

## description

Binds an existing `FormGroup` to a DOM element.

This directive accepts an existing `FormGroup` instance. It will then use this
`FormGroup` instance to match any child `FormControl`, `FormGroup`,
and `FormArray` instances to child `FormControlName`, `FormGroupName`,
and `FormArrayName` directives.

```ts
class FormGroupDirective extends ControlContainer implements Form, OnChanges {
  public readonly submitted: boolean = false;
  directives: FormControlName[] = [];
  @Input("formGroup") form: FormGroup = null!;
  @Output() ngSubmit = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void;
  addControl(dir: FormControlName): FormControl;
  getControl(dir: FormControlName): FormControl;
  removeControl(dir: FormControlName): void;
  addFormGroup(dir: FormGroupName): void;
  getFormGroup(dir: FormGroupName): FormGroup;
  addFormArray(dir: FormArrayName): void;
  getFormArray(dir: FormArrayName): FormArray;
  updateModel(dir: FormControlName, value: any): void;
  onSubmit($event: Event): boolean;
  onReset(): void;
  resetForm(value: any = undefined): void;
  _updateDomValue();
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L49-L298)

## see

[Reactive Forms Guide](guide/reactive-forms)
`AbstractControl`

### Register Form Group

The following example registers a `FormGroup` with first name and last name controls,
and listens for the _ngSubmit_ event when the button is clicked.

{@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}

## ngModule

ReactiveFormsModule

## publicApi

## Properties

| Name       | Type                | Description |
| ---------- | ------------------- | ----------- |
| submitted  | `boolean`           |             |
| directives | `FormControlName[]` |             |
| form       | `FormGroup`         |             |
| ngSubmit   | `any`               |             |

## Methods

### ngOnChanges

#### description (#ngOnChanges-description)

A lifecycle method called when the directive's inputs change. For internal use only.

```ts
ngOnChanges(changes: SimpleChanges): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L95-L102)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type  | Description                                                |
| ------- | ----- | ---------------------------------------------------------- |
| changes | `any` | A object of key/value pairs for the set of changed inputs. |

### addControl

#### description (#addControl-description)

Method that sets up the control directive in this group, re-calculates its value
and validity, and adds the instance to the internal list of directives.

```ts
addControl(dir: FormControlName): FormControl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L136-L142)

#### Parameters (#addControl-parameters)

| Name | Type              | Description                               |
| ---- | ----------------- | ----------------------------------------- |
| dir  | `FormControlName` | The `FormControlName` directive instance. |

### getControl

#### description (#getControl-description)

Retrieves the `FormControl` instance from the provided `FormControlName` directive

```ts
getControl(dir: FormControlName): FormControl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L150-L152)

#### Parameters (#getControl-parameters)

| Name | Type              | Description                               |
| ---- | ----------------- | ----------------------------------------- |
| dir  | `FormControlName` | The `FormControlName` directive instance. |

### removeControl

#### description (#removeControl-description)

Removes the `FormControlName` instance from the internal list of directives

```ts
removeControl(dir: FormControlName): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L160-L162)

#### Parameters (#removeControl-parameters)

| Name | Type              | Description                               |
| ---- | ----------------- | ----------------------------------------- |
| dir  | `FormControlName` | The `FormControlName` directive instance. |

### addFormGroup

#### description (#addFormGroup-description)

Adds a new `FormGroupName` directive instance to the form.

```ts
addFormGroup(dir: FormGroupName): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L169-L173)

#### Parameters (#addFormGroup-parameters)

| Name | Type            | Description                             |
| ---- | --------------- | --------------------------------------- |
| dir  | `FormGroupName` | The `FormGroupName` directive instance. |

### removeFormGroup

#### description (#removeFormGroup-description)

No-op method to remove the form group.

```ts
removeFormGroup(dir: FormGroupName): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L180-L180)

#### Parameters (#removeFormGroup-parameters)

| Name | Type            | Description                             |
| ---- | --------------- | --------------------------------------- |
| dir  | `FormGroupName` | The `FormGroupName` directive instance. |

### getFormGroup

#### description (#getFormGroup-description)

Retrieves the `FormGroup` for a provided `FormGroupName` directive instance

```ts
getFormGroup(dir: FormGroupName): FormGroup;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L188-L190)

#### Parameters (#getFormGroup-parameters)

| Name | Type            | Description                             |
| ---- | --------------- | --------------------------------------- |
| dir  | `FormGroupName` | The `FormGroupName` directive instance. |

### addFormArray

#### description (#addFormArray-description)

Adds a new `FormArrayName` directive instance to the form.

```ts
addFormArray(dir: FormArrayName): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L197-L201)

#### Parameters (#addFormArray-parameters)

| Name | Type            | Description                             |
| ---- | --------------- | --------------------------------------- |
| dir  | `FormArrayName` | The `FormArrayName` directive instance. |

### removeFormArray

#### description (#removeFormArray-description)

No-op method to remove the form array.

```ts
removeFormArray(dir: FormArrayName): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L208-L208)

#### Parameters (#removeFormArray-parameters)

| Name | Type            | Description                             |
| ---- | --------------- | --------------------------------------- |
| dir  | `FormArrayName` | The `FormArrayName` directive instance. |

### getFormArray

#### description (#getFormArray-description)

Retrieves the `FormArray` for a provided `FormArrayName` directive instance.

```ts
getFormArray(dir: FormArrayName): FormArray;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L216-L218)

#### Parameters (#getFormArray-parameters)

| Name | Type            | Description                             |
| ---- | --------------- | --------------------------------------- |
| dir  | `FormArrayName` | The `FormArrayName` directive instance. |

### updateModel

#### description (#updateModel-description)

Sets the new value for the provided `FormControlName` directive.

```ts
updateModel(dir: FormControlName, value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L226-L229)

#### Parameters (#updateModel-parameters)

| Name  | Type              | Description                                |
| ----- | ----------------- | ------------------------------------------ |
| dir   | `FormControlName` | The `FormControlName` directive instance.  |
| value | `any`             | The new value for the directive's control. |

### onSubmit

#### description (#onSubmit-description)

Method called with the "submit" event is triggered on the form.
Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.

```ts
onSubmit($event: Event): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L238-L243)

#### Parameters (#onSubmit-parameters)

| Name    | Type    | Description               |
| ------- | ------- | ------------------------- |
| \$event | `Event` | The "submit" event object |

### onReset

#### description (#onReset-description)

Method called when the "reset" event is triggered on the form.

```ts
onReset(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L249-L251)

### resetForm

#### description (#resetForm-description)

Resets the form to an initial value and resets its submitted status.

```ts
resetForm(value: any = undefined): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L259-L262)

#### Parameters (#resetForm-parameters)

| Name  | Type  | Description                 |
| ----- | ----- | --------------------------- |
| value | `any` | The new value for the form. |

### \_updateDomValue

```ts
_updateDomValue();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_directive.ts#L266-L277)

---
kind: ClassDeclaration
name: FormControlName
module: forms
---

# FormControlName

## description

Syncs a `FormControl` in an existing `FormGroup` to a form control
element by name.

```ts
class FormControlName extends NgControl implements OnChanges, OnDestroy {
  viewModel: any;
  readonly control!: FormControl;
  @Input("formControlName") name!: string | number | null;
  @Input("ngModel") model: any;
  @Output("ngModelChange") update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;

  ngOnChanges(changes: SimpleChanges);
  ngOnDestroy(): void;
  viewToModelUpdate(newValue: any): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_control_name.ts#L64-L233)

## see

[Reactive Forms Guide](guide/reactive-forms)
`FormControl`
`AbstractControl`

## usageNotes

### Register `FormControl` within a group

The following example shows how to register multiple form controls within a form group
and set their value.

{@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}

To see `formControlName` examples with different form control types, see:

- Radio buttons: `RadioControlValueAccessor`
- Selects: `SelectControlValueAccessor`

### Use with ngModel is deprecated

Support for using the `ngModel` input property and `ngModelChange` event with reactive
form directives has been deprecated in Angular v6 and is scheduled for removal in
a future version of Angular.

For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).

## ngModule

ReactiveFormsModule

## publicApi

## Properties

| Name                     | Type          | Description |
| ------------------------ | ------------- | ----------- |
| viewModel                | `any`         |             |
| control                  | `FormControl` |             |
| name                     | `string       | number`     |  |
| model                    | `any`         |             |
| update                   | `any`         |             |
| \_ngModelWarningSentOnce | `boolean`     |             |
| \_ngModelWarningSent     | `boolean`     |             |

## Methods

### ngOnChanges

#### description (#ngOnChanges-description)

A lifecycle method called when the directive's inputs change. For internal use only.

```ts
ngOnChanges(changes: SimpleChanges);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_control_name.ts#L149-L156)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type  | Description                                                |
| ------- | ----- | ---------------------------------------------------------- |
| changes | `any` | A object of key/value pairs for the set of changed inputs. |

### ngOnDestroy

#### description (#ngOnDestroy-description)

Lifecycle method called before the directive's instance is destroyed. For internal use only.

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_control_name.ts#L162-L166)

### viewToModelUpdate

#### description (#viewToModelUpdate-description)

Sets the new value for the view model and emits an `ngModelChange` event.

```ts
viewToModelUpdate(newValue: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_control_name.ts#L174-L177)

#### Parameters (#viewToModelUpdate-parameters)

| Name     | Type  | Description                       |
| -------- | ----- | --------------------------------- |
| newValue | `any` | The new value for the view model. |

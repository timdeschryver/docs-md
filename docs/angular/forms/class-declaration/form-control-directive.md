---
kind: ClassDeclaration
name: FormControlDirective
module: forms
---

# FormControlDirective

## description

Synchronizes a standalone `FormControl` instance to a form control element.

Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
form directives was deprecated in Angular v6 and is scheduled for removal in
a future version of Angular.
For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).

```ts
class FormControlDirective extends NgControl implements OnChanges {
  viewModel: any;
  @Input("formControl") form!: FormControl;
  @Input("ngModel") model: any;
  @Output("ngModelChange") update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;

  ngOnChanges(changes: SimpleChanges): void;
  viewToModelUpdate(newValue: any): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_control_directive.ts#L53-L188)

## see

[Reactive Forms Guide](guide/reactive-forms)
`FormControl`
`AbstractControl`

## usageNotes

The following example shows how to register a standalone control and set its value.

{@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}

## ngModule

ReactiveFormsModule

## publicApi

## Properties

| Name                     | Type          | Description |
| ------------------------ | ------------- | ----------- |
| viewModel                | `any`         |             |
| form                     | `FormControl` |             |
| model                    | `any`         |             |
| update                   | `any`         |             |
| \_ngModelWarningSentOnce | `boolean`     |             |
| \_ngModelWarningSent     | `boolean`     |             |

## Methods

### ngOnChanges

#### description (#ngOnChanges-description)

A lifecycle method called when the directive's inputs change. For internal use
only.

```ts
ngOnChanges(changes: SimpleChanges): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_control_directive.ts#L124-L137)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type  | Description                                                |
| ------- | ----- | ---------------------------------------------------------- |
| changes | `any` | A object of key/value pairs for the set of changed inputs. |

### viewToModelUpdate

#### description (#viewToModelUpdate-description)

Sets the new value for the view model and emits an `ngModelChange` event.

```ts
viewToModelUpdate(newValue: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_control_directive.ts#L180-L183)

#### Parameters (#viewToModelUpdate-parameters)

| Name     | Type  | Description                       |
| -------- | ----- | --------------------------------- |
| newValue | `any` | The new value for the view model. |

---
kind: ClassDeclaration
name: NgModel
module: forms
---

# NgModel

## description

Creates a `FormControl` instance from a domain model and binds it
to a form control element.

The `FormControl` instance tracks the value, user interaction, and
validation status of the control and keeps the view synced with the model. If used
within a parent form, the directive also registers itself with the form as a child
control.

This directive is used by itself or as part of a larger form. Use the
`ngModel` selector to activate it.

It accepts a domain model as an optional `Input`. If you have a one-way binding
to `ngModel` with `[]` syntax, changing the value of the domain model in the component
class sets the value in the view. If you have a two-way binding with `[()]` syntax
(also known as 'banana-box syntax'), the value in the UI always syncs back to
the domain model in your class.

To inspect the properties of the associated `FormControl` (like validity state),
export the directive into a local template variable using `ngModel` as the key (ex:
`#myVar="ngModel"`). You then access the control using the directive's `control` property, but
most properties used (like `valid` and `dirty`) fall through to the control anyway for direct
access. See a full list of properties directly available in `AbstractControlDirective`.

```ts
class NgModel extends NgControl implements OnChanges, OnDestroy {
  public readonly control: FormControl = new FormControl();
  static ngAcceptInputType_isDisabled: boolean | string;
  _registered = false;
  viewModel: any;
  @Input() name!: string;
  @Input("disabled") isDisabled!: boolean;
  @Input("ngModel") model: any;
  @Input("ngModelOptions") options!: {
    name?: string;
    standalone?: boolean;
    updateOn?: FormHooks;
  };
  @Output("ngModelChange") update = new EventEmitter();

  ngOnChanges(changes: SimpleChanges);
  ngOnDestroy(): void;
  viewToModelUpdate(newValue: any): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_model.ts#L131-L355)

## see

`RadioControlValueAccessor`
`SelectControlValueAccessor`

## usageNotes

### Using ngModel on a standalone control

The following examples show a simple standalone control using `ngModel`:

{@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}

When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
so that the control can be registered with the parent form under that name.

In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
as the parent form syncs the value for you. You access its properties by exporting it into a
local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
needed on form submission.

If you do need to populate initial values into your form, using a one-way binding for
`ngModel` tends to be sufficient as long as you use the exported form's value rather
than the domain model's value on submit.

### Using ngModel within a form

The following example shows controls using `ngModel` within a form:

{@example forms/ts/simpleForm/simple_form_example.ts region='Component'}

### Using a standalone ngModel within a group

The following example shows you how to use a standalone ngModel control
within a form. This controls the display of the form, but doesn't contain form data.

```html
<form>
  <input name="login" ngModel placeholder="Login" />
  <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}" /> Show
  more options?
</form>
<!-- form value: {login: ''} -->
```

### Setting the ngModel name attribute through options

The following example shows you an alternate way to set the name attribute. The name attribute is
used within a custom form component, and the name `@Input` property serves a different purpose.

```html
<form>
  <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
  </my-person-control>
</form>
<!-- form value: {user: ''} -->
```

## ngModule

FormsModule

## publicApi

## Properties

| Name                         | Type                                                             | Description |
| ---------------------------- | ---------------------------------------------------------------- | ----------- |
| control                      | `FormControl`                                                    |             |
| ngAcceptInputType_isDisabled | `string                                                          | boolean`    |  |
| \_registered                 | `boolean`                                                        |             |
| viewModel                    | `any`                                                            |             |
| name                         | `string`                                                         |             |
| isDisabled                   | `boolean`                                                        |             |
| model                        | `any`                                                            |             |
| options                      | `{ name?: string; standalone?: boolean; updateOn?: FormHooks; }` |             |
| update                       | `any`                                                            |             |

## Methods

### ngOnChanges

#### description (#ngOnChanges-description)

A lifecycle method called when the directive's inputs change. For internal use
only.

```ts
ngOnChanges(changes: SimpleChanges);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_model.ts#L223-L234)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type  | Description                                                |
| ------- | ----- | ---------------------------------------------------------- |
| changes | `any` | A object of key/value pairs for the set of changed inputs. |

### ngOnDestroy

#### description (#ngOnDestroy-description)

Lifecycle method called before the directive's instance is destroyed. For internal
use only.

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_model.ts#L241-L243)

### viewToModelUpdate

#### description (#viewToModelUpdate-description)

Sets the new value for the view model and emits an `ngModelChange` event.

```ts
viewToModelUpdate(newValue: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_model.ts#L286-L289)

#### Parameters (#viewToModelUpdate-parameters)

| Name     | Type  | Description                               |
| -------- | ----- | ----------------------------------------- |
| newValue | `any` | The new value emitted by `ngModelChange`. |

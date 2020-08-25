---
kind: ClassDeclaration
name: NgForm
module: forms
---

# NgForm

## description

Creates a top-level `FormGroup` instance and binds it to a form
to track aggregate form value and validation status.

As soon as you import the `FormsModule`, this directive becomes active by default on
all `<form>` tags. You don't need to add a special selector.

You optionally export the directive into a local template variable using `ngForm` as the key
(ex: `#myForm="ngForm"`). This is optional, but useful. Many properties from the underlying
`FormGroup` instance are duplicated on the directive itself, so a reference to it
gives you access to the aggregate value and validity status of the form, as well as
user interaction properties like `dirty` and `touched`.

To register child controls with the form, use `NgModel` with a `name`
attribute. You may use `NgModelGroup` to create sub-groups within the form.

If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
triggered a form submission. The `ngSubmit` event emits the original form
submission event.

In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
To import the `FormsModule` but skip its usage in some forms,
for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
unnecessary because the `<form>` tags are inert. In that case, you would
refrain from using the `formGroup` directive.

```ts
class NgForm extends ControlContainer implements Form, AfterViewInit {
  public readonly submitted: boolean = false;
  form: FormGroup;
  ngSubmit = new EventEmitter();
  @Input("ngFormOptions") options!: { updateOn?: FormHooks };

  ngAfterViewInit();
  addControl(dir: NgModel): void;
  getControl(dir: NgModel): FormControl;
  removeControl(dir: NgModel): void;
  addFormGroup(dir: NgModelGroup): void;
  removeFormGroup(dir: NgModelGroup): void;
  getFormGroup(dir: NgModelGroup): FormGroup;
  updateModel(dir: NgControl, value: any): void;
  setValue(value: { [key: string]: any }): void;
  onSubmit($event: Event): boolean;
  onReset(): void;
  resetForm(value: any = undefined): void;
  _findContainer(path: string[]): FormGroup;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L92-L333)

## usageNotes

### Listening for form submission

The following example shows how to capture the form values from the "ngSubmit" event.

{@example forms/ts/simpleForm/simple_form_example.ts region='Component'}

### Setting the update options

The following example shows you how to change the "updateOn" option from its default using
ngFormOptions.

```html
<form [ngFormOptions]="{updateOn: 'blur'}">
  <input name="one" ngModel />
  <!-- this ngModel will update on blur -->
</form>
```

### Native DOM validation UI

In order to prevent the native DOM form validation UI from interfering with Angular's form
validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
`FormModule` or `ReactiveFormModule` are imported into the application.
If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
`ngNativeValidate` attribute to the `<form>` element:

```html
<form ngNativeValidate>...</form>
```

## ngModule

FormsModule

## publicApi

## Properties

| Name      | Type                        | Description |
| --------- | --------------------------- | ----------- |
| submitted | `boolean`                   |             |
| form      | `FormGroup`                 |             |
| ngSubmit  | `any`                       |             |
| options   | `{ updateOn?: FormHooks; }` |             |

## Methods

### ngAfterViewInit

#### description (#ngAfterViewInit-description)

Lifecycle method called after the view is initialized. For internal use only.

```ts
ngAfterViewInit();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L144-L146)

### addControl

#### description (#addControl-description)

Method that sets up the control directive in this group, re-calculates its value
and validity, and adds the instance to the internal list of directives.

```ts
addControl(dir: NgModel): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L188-L197)

#### Parameters (#addControl-parameters)

| Name | Type      | Description                       |
| ---- | --------- | --------------------------------- |
| dir  | `NgModel` | The `NgModel` directive instance. |

### getControl

#### description (#getControl-description)

Retrieves the `FormControl` instance from the provided `NgModel` directive.

```ts
getControl(dir: NgModel): FormControl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L205-L207)

#### Parameters (#getControl-parameters)

| Name | Type      | Description                       |
| ---- | --------- | --------------------------------- |
| dir  | `NgModel` | The `NgModel` directive instance. |

### removeControl

#### description (#removeControl-description)

Removes the `NgModel` instance from the internal list of directives

```ts
removeControl(dir: NgModel): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L215-L223)

#### Parameters (#removeControl-parameters)

| Name | Type      | Description                       |
| ---- | --------- | --------------------------------- |
| dir  | `NgModel` | The `NgModel` directive instance. |

### addFormGroup

#### description (#addFormGroup-description)

Adds a new `NgModelGroup` directive instance to the form.

```ts
addFormGroup(dir: NgModelGroup): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L231-L239)

#### Parameters (#addFormGroup-parameters)

| Name | Type           | Description                            |
| ---- | -------------- | -------------------------------------- |
| dir  | `NgModelGroup` | The `NgModelGroup` directive instance. |

### removeFormGroup

#### description (#removeFormGroup-description)

Removes the `NgModelGroup` directive instance from the form.

```ts
removeFormGroup(dir: NgModelGroup): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L247-L254)

#### Parameters (#removeFormGroup-parameters)

| Name | Type           | Description                            |
| ---- | -------------- | -------------------------------------- |
| dir  | `NgModelGroup` | The `NgModelGroup` directive instance. |

### getFormGroup

#### description (#getFormGroup-description)

Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance

```ts
getFormGroup(dir: NgModelGroup): FormGroup;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L262-L264)

#### Parameters (#getFormGroup-parameters)

| Name | Type           | Description                            |
| ---- | -------------- | -------------------------------------- |
| dir  | `NgModelGroup` | The `NgModelGroup` directive instance. |

### updateModel

#### description (#updateModel-description)

Sets the new value for the provided `NgControl` directive.

```ts
updateModel(dir: NgControl, value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L272-L277)

#### Parameters (#updateModel-parameters)

| Name  | Type        | Description                                |
| ----- | ----------- | ------------------------------------------ |
| dir   | `NgControl` | The `NgControl` directive instance.        |
| value | `any`       | The new value for the directive's control. |

### setValue

#### description (#setValue-description)

Sets the value for this `FormGroup`.

```ts
setValue(value: {[key: string]: any}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L285-L287)

#### Parameters (#setValue-parameters)

| Name  | Type                      | Description   |
| ----- | ------------------------- | ------------- |
| value | `{ [key: string]: any; }` | The new value |

### onSubmit

#### description (#onSubmit-description)

Method called when the "submit" event is triggered on the form.
Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.

```ts
onSubmit($event: Event): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L296-L301)

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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L307-L309)

### resetForm

#### description (#resetForm-description)

Resets the form to an initial value and resets its submitted status.

```ts
resetForm(value: any = undefined): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L317-L320)

#### Parameters (#resetForm-parameters)

| Name  | Type  | Description                 |
| ----- | ----- | --------------------------- |
| value | `any` | The new value for the form. |

### \_findContainer

```ts
_findContainer(path: string[]): FormGroup;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_form.ts#L329-L332)

#### Parameters (#\_findContainer-parameters)

| Name | Type       | Description |
| ---- | ---------- | ----------- |
| path | `string[]` |             |

---
kind: ClassDeclaration
name: NgControl
module: forms
---

# NgControl

## description

A base class that all `FormControl`-based directives extend. It binds a `FormControl`
object to a DOM element.

```ts
class NgControl extends AbstractControlDirective {
  _parent: ControlContainer | null = null;
  name: string | number | null = null;
  valueAccessor: ControlValueAccessor | null = null;
  _rawValidators: Array<Validator | ValidatorFn> = [];
  _rawAsyncValidators: Array<AsyncValidator | AsyncValidatorFn> = [];

  abstract viewToModelUpdate(newValue: any): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_control.ts#L26-L90)

## publicApi

## Properties

| Name                 | Type                   | Description          |
| -------------------- | ---------------------- | -------------------- |
| \_parent             | `ControlContainer`     |                      |
| name                 | `string                | number`              |  |
| valueAccessor        | `ControlValueAccessor` |                      |
| \_rawValidators      | `(Validator            | ValidatorFn)[]`      |  |
| \_rawAsyncValidators | `(AsyncValidator       | AsyncValidatorFn)[]` |  |

## Methods

### viewToModelUpdate

#### description (#viewToModelUpdate-description)

The callback method to update the model from the view when requested

```ts
abstract viewToModelUpdate(newValue: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_control.ts#L89-L89)

#### Parameters (#viewToModelUpdate-parameters)

| Name     | Type  | Description                |
| -------- | ----- | -------------------------- |
| newValue | `any` | The new value for the view |

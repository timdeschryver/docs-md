---
kind: ClassDeclaration
name: MaxLengthValidator
module: forms
---

# MaxLengthValidator

## description

A directive that adds max length validation to controls marked with the
`maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.

```ts
class MaxLengthValidator implements Validator, OnChanges {
  @Input()
  maxlength!: string | number;

  ngOnChanges(changes: SimpleChanges): void;
  validate(control: AbstractControl): ValidationErrors | null;
  registerOnValidatorChange(fn: () => void): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L447-L500)

## see

[Form Validation](guide/form-validation)

## usageNotes

### Adding a maximum length validator

The following example shows how to add a maximum length validator to an input attached to an
ngModel binding.

```html
<input name="firstName" ngModel maxlength="25" />
```

## ngModule

ReactiveFormsModule
FormsModule

## publicApi

## Properties

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| maxlength | `string | number`     |  |

## Methods

### ngOnChanges

#### description (#ngOnChanges-description)

A lifecycle method called when the directive's inputs change. For internal use
only.

```ts
ngOnChanges(changes: SimpleChanges): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L470-L475)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type  | Description                                                |
| ------- | ----- | ---------------------------------------------------------- |
| changes | `any` | A object of key/value pairs for the set of changed inputs. |

### validate

#### description (#validate-description)

Method that validates whether the value exceeds
the maximum length requirement.

```ts
validate(control: AbstractControl): ValidationErrors|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L482-L484)

#### Parameters (#validate-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| control | `AbstractControl` |             |

### registerOnValidatorChange

#### description (#registerOnValidatorChange-description)

Registers a callback function to call when the validator inputs change.

```ts
registerOnValidatorChange(fn: () => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L492-L494)

#### Parameters (#registerOnValidatorChange-parameters)

| Name | Type         | Description           |
| ---- | ------------ | --------------------- |
| fn   | `() => void` | The callback function |

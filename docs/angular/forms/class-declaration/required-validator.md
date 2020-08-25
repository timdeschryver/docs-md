---
kind: ClassDeclaration
name: RequiredValidator
module: forms
---

# RequiredValidator

## description

A directive that adds the `required` validator to any controls marked with the
`required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.

```ts
class RequiredValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null;
  registerOnValidatorChange(fn: () => void): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L154-L196)

## see

[Form Validation](guide/form-validation)

## usageNotes

### Adding a required validator using template-driven forms

```
<input name="fullName" ngModel required>
```

## ngModule

FormsModule
ReactiveFormsModule

## publicApi

## Methods

### validate

#### description (#validate-description)

Method that validates whether the control is empty.
Returns the validation result if enabled, otherwise null.

```ts
validate(control: AbstractControl): ValidationErrors|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L183-L185)

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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L193-L195)

#### Parameters (#registerOnValidatorChange-parameters)

| Name | Type         | Description           |
| ---- | ------------ | --------------------- |
| fn   | `() => void` | The callback function |

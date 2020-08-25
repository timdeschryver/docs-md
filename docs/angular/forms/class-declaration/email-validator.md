---
kind: ClassDeclaration
name: EmailValidator
module: forms
---

# EmailValidator

## description

A directive that adds the `email` validator to controls marked with the
`email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.

```ts
class EmailValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null;
  registerOnValidatorChange(fn: () => void): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L270-L306)

## see

[Form Validation](guide/form-validation)

## usageNotes

### Adding an email validator

The following example shows how to add an email validator to an input attached to an ngModel
binding.

```
<input type="email" name="email" ngModel email>
<input type="email" name="email" ngModel email="true">
<input type="email" name="email" ngModel [email]="true">
```

## publicApi

## ngModule

FormsModule
ReactiveFormsModule

## Methods

### validate

#### description (#validate-description)

Method that validates whether an email address is valid.
Returns the validation result if enabled, otherwise null.

```ts
validate(control: AbstractControl): ValidationErrors|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L293-L295)

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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L303-L305)

#### Parameters (#registerOnValidatorChange-parameters)

| Name | Type         | Description           |
| ---- | ------------ | --------------------- |
| fn   | `() => void` | The callback function |

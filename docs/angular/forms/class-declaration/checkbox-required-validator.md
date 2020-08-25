---
kind: ClassDeclaration
name: CheckboxRequiredValidator
module: forms
---

# CheckboxRequiredValidator

## description

A Directive that adds the `required` validator to checkbox controls marked with the
`required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.

```ts
class CheckboxRequiredValidator extends RequiredValidator {
  validate(control: AbstractControl): ValidationErrors | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L220-L235)

## see

[Form Validation](guide/form-validation)

## usageNotes

### Adding a required checkbox validator using template-driven forms

The following example shows how to add a checkbox required validator to an input attached to an
ngModel binding.

```
<input type="checkbox" name="active" ngModel required>
```

## publicApi

## ngModule

FormsModule
ReactiveFormsModule

## Methods

### validate

#### description (#validate-description)

Method that validates whether or not the checkbox has been checked.
Returns the validation result if enabled, otherwise null.

```ts
validate(control: AbstractControl): ValidationErrors|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L232-L234)

#### Parameters (#validate-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| control | `AbstractControl` |             |

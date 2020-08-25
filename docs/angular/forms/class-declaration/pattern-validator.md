---
kind: ClassDeclaration
name: PatternValidator
module: forms
---

# PatternValidator

## description

A directive that adds regex pattern validation to controls marked with the
`pattern` attribute. The regex must match the entire control value.
The directive is provided with the `NG_VALIDATORS` multi-provider list.

```ts
class PatternValidator implements Validator, OnChanges {
  @Input()
  pattern!: string | RegExp;

  ngOnChanges(changes: SimpleChanges): void;
  validate(control: AbstractControl): ValidationErrors | null;
  registerOnValidatorChange(fn: () => void): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L536-L588)

## see

[Form Validation](guide/form-validation)

## usageNotes

### Adding a pattern validator

The following example shows how to add a pattern validator to an input attached to an
ngModel binding.

```html
<input name="firstName" ngModel pattern="[a-zA-Z ]*" />
```

## ngModule

ReactiveFormsModule
FormsModule

## publicApi

## Properties

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| pattern | `string | RegExp`     |  |

## Methods

### ngOnChanges

#### description (#ngOnChanges-description)

A lifecycle method called when the directive's inputs change. For internal use
only.

```ts
ngOnChanges(changes: SimpleChanges): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L559-L564)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type  | Description                                                |
| ------- | ----- | ---------------------------------------------------------- |
| changes | `any` | A object of key/value pairs for the set of changed inputs. |

### validate

#### description (#validate-description)

Method that validates whether the value matches the
the pattern requirement.

```ts
validate(control: AbstractControl): ValidationErrors|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L571-L573)

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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L581-L583)

#### Parameters (#registerOnValidatorChange-parameters)

| Name | Type         | Description           |
| ---- | ------------ | --------------------- |
| fn   | `() => void` | The callback function |

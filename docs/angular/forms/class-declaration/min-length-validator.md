---
kind: ClassDeclaration
name: MinLengthValidator
module: forms
---

# MinLengthValidator

## description

A directive that adds minimum length validation to controls marked with the
`minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.

```ts
class MinLengthValidator implements Validator, OnChanges {
  @Input()
  minlength!: string | number;

  ngOnChanges(changes: SimpleChanges): void;
  validate(control: AbstractControl): ValidationErrors | null;
  registerOnValidatorChange(fn: () => void): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L361-L414)

## see

[Form Validation](guide/form-validation)

## usageNotes

### Adding a minimum length validator

The following example shows how to add a minimum length validator to an input attached to an
ngModel binding.

```html
<input name="firstName" ngModel minlength="4" />
```

## ngModule

ReactiveFormsModule
FormsModule

## publicApi

## Properties

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| minlength | `string | number`     |  |

## Methods

### ngOnChanges

#### description (#ngOnChanges-description)

A lifecycle method called when the directive's inputs change. For internal use
only.

```ts
ngOnChanges(changes: SimpleChanges): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L384-L389)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type  | Description                                                |
| ------- | ----- | ---------------------------------------------------------- |
| changes | `any` | A object of key/value pairs for the set of changed inputs. |

### validate

#### description (#validate-description)

Method that validates whether the value meets a minimum length
requirement. Returns the validation result if enabled, otherwise null.

```ts
validate(control: AbstractControl): ValidationErrors|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L396-L398)

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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L406-L408)

#### Parameters (#registerOnValidatorChange-parameters)

| Name | Type         | Description           |
| ---- | ------------ | --------------------- |
| fn   | `() => void` | The callback function |

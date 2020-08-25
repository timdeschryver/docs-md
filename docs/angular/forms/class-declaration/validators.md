---
kind: ClassDeclaration
name: Validators
module: forms
---

# Validators

## description

Provides a set of built-in validators that can be used by form controls.

A validator is a function that processes a `FormControl` or collection of
controls and returns an error map or null. A null map means that validation has passed.

```ts
class Validators {
  static min(min: number): ValidatorFn;
  static max(max: number): ValidatorFn;
  static required(control: AbstractControl): ValidationErrors | null;
  static requiredTrue(control: AbstractControl): ValidationErrors | null;
  static email(control: AbstractControl): ValidationErrors | null;
  static minLength(minLength: number): ValidatorFn;
  static maxLength(maxLength: number): ValidatorFn;
  static pattern(pattern: string | RegExp): ValidatorFn;
  static nullValidator(control: AbstractControl): ValidationErrors | null;
  static compose(
    validators: (ValidatorFn | null | undefined)[] | null
  ): ValidatorFn | null;
  static compose(validators: null): null;
  static compose(
    validators: (ValidatorFn | null | undefined)[]
  ): ValidatorFn | null;
  static composeAsync(
    validators: (AsyncValidatorFn | null)[]
  ): AsyncValidatorFn | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L112-L463)

## see

[Form Validation](/guide/form-validation)

## publicApi

## Methods

### min

#### description (#min-description)

Validator that requires the control's value to be greater than or equal to the provided number.
The validator exists only as a function and not as a directive.

```ts
static min(min: number): ValidatorFn;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L134-L144)

#### usageNotes (#min-usage-notes)

### Validate against a minimum of 3

```typescript
const control = new FormControl(2, Validators.min(3));

console.log(control.errors); // {min: {min: 3, actual: 2}}
```

#### returns (#min-returns)

A validator function that returns an error map with the
`min` property if the validation check fails, otherwise `null`.

#### see (#min-see)

`updateValueAndValidity()`

#### Parameters (#min-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| min  | `number` |             |

### max

#### description (#max-description)

Validator that requires the control's value to be less than or equal to the provided number.
The validator exists only as a function and not as a directive.

```ts
static max(max: number): ValidatorFn;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L167-L177)

#### usageNotes (#max-usage-notes)

### Validate against a maximum of 15

```typescript
const control = new FormControl(16, Validators.max(15));

console.log(control.errors); // {max: {max: 15, actual: 16}}
```

#### returns (#max-returns)

A validator function that returns an error map with the
`max` property if the validation check fails, otherwise `null`.

#### see (#max-see)

`updateValueAndValidity()`

#### Parameters (#max-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| max  | `number` |             |

### required

#### description (#required-description)

Validator that requires the control have a non-empty value.

```ts
static required(control: AbstractControl): ValidationErrors|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L199-L201)

#### usageNotes (#required-usage-notes)

### Validate that the field is non-empty

```typescript
const control = new FormControl("", Validators.required);

console.log(control.errors); // {required: true}
```

#### returns (#required-returns)

An error map with the `required` property
if the validation check fails, otherwise `null`.

#### see (#required-see)

`updateValueAndValidity()`

#### Parameters (#required-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| control | `AbstractControl` |             |

### requiredTrue

#### description (#requiredTrue-description)

Validator that requires the control's value be true. This validator is commonly
used for required checkboxes.

```ts
static requiredTrue(control: AbstractControl): ValidationErrors|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L224-L226)

#### usageNotes (#requiredTrue-usage-notes)

### Validate that the field value is true

```typescript
const control = new FormControl("", Validators.requiredTrue);

console.log(control.errors); // {required: true}
```

#### returns (#requiredTrue-returns)

An error map that contains the `required` property
set to `true` if the validation check fails, otherwise `null`.

#### see (#requiredTrue-see)

`updateValueAndValidity()`

#### Parameters (#requiredTrue-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| control | `AbstractControl` |             |

### email

#### description (#email-description)

Validator that requires the control's value pass an email validation test.

Tests the value using a [regular
expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
pattern suitable for common usecases. The pattern is based on the definition of a valid email
address in the [WHATWG HTML
specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
some enhancements to incorporate more RFC rules (such as rules related to domain names and the
lengths of different parts of the address).

The differences from the WHATWG version include:

- Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
- Disallow `local-part` to be longer than 64 characters.
- Disallow the whole address to be longer than 254 characters.

If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
validate the value against a different pattern.

```ts
static email(control: AbstractControl): ValidationErrors|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L264-L269)

#### usageNotes (#email-usage-notes)

### Validate that the field matches a valid email pattern

```typescript
const control = new FormControl("bad@", Validators.email);

console.log(control.errors); // {email: true}
```

#### returns (#email-returns)

An error map with the `email` property
if the validation check fails, otherwise `null`.

#### see (#email-see)

`updateValueAndValidity()`

#### Parameters (#email-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| control | `AbstractControl` |             |

### minLength

#### description (#minLength-description)

Validator that requires the length of the control's value to be greater than or equal
to the provided minimum length. This validator is also provided by default if you use the
the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
only for types that have a numeric `length` property, such as strings or arrays. The
`minLength` validator logic is also not invoked for values when their `length` property is 0
(for example in case of an empty string or an empty array), to support optional controls. You
can use the standard `required` validator if empty values should not be considered valid.

```ts
static minLength(minLength: number): ValidatorFn;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L301-L313)

#### usageNotes (#minLength-usage-notes)

### Validate that the field has a minimum of 3 characters

```typescript
const control = new FormControl("ng", Validators.minLength(3));

console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
```

```html
<input minlength="5" />
```

#### returns (#minLength-returns)

A validator function that returns an error map with the
`minlength` if the validation check fails, otherwise `null`.

#### see (#minLength-see)

`updateValueAndValidity()`

#### Parameters (#minLength-parameters)

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| minLength | `number` |             |

### maxLength

#### description (#maxLength-description)

Validator that requires the length of the control's value to be less than or equal
to the provided maximum length. This validator is also provided by default if you use the
the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
only for types that have a numeric `length` property, such as strings or arrays.

```ts
static maxLength(maxLength: number): ValidatorFn;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L342-L348)

#### usageNotes (#maxLength-usage-notes)

### Validate that the field has maximum of 5 characters

```typescript
const control = new FormControl("Angular", Validators.maxLength(5));

console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
```

```html
<input maxlength="5" />
```

#### returns (#maxLength-returns)

A validator function that returns an error map with the
`maxlength` property if the validation check fails, otherwise `null`.

#### see (#maxLength-see)

`updateValueAndValidity()`

#### Parameters (#maxLength-parameters)

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| maxLength | `number` |             |

### pattern

#### description (#pattern-description)

Validator that requires the control's value to match a regex pattern. This validator is also
provided by default if you use the HTML5 `pattern` attribute.

```ts
static pattern(pattern: string|RegExp): ValidatorFn;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L380-L406)

#### usageNotes (#pattern-usage-notes)

### Validate that the field only contains letters or spaces

```typescript
const control = new FormControl("1", Validators.pattern("[a-zA-Z ]*"));

console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
```

```html
<input pattern="[a-zA-Z ]*" />
```

#### Parameters (#pattern-parameters)

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| pattern | `string | RegExp`     | A regular expression to be used as is to test the values, or a string. |

#### returns (#pattern-returns)

A validator function that returns an error map with the
`pattern` property if the validation check fails, otherwise `null`.

#### see (#pattern-see)

`updateValueAndValidity()`

### nullValidator

#### description (#nullValidator-description)

Validator that performs no operation.

```ts
static nullValidator(control: AbstractControl): ValidationErrors|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L415-L417)

#### see (#nullValidator-see)

`updateValueAndValidity()`

#### Parameters (#nullValidator-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| control | `AbstractControl` |             |

### compose

```ts
static compose(validators: (ValidatorFn|null|undefined)[]|null): ValidatorFn|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L432-L440)

#### Parameters (#compose-parameters)

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| validators | `ValidatorFn[]` |             |

### compose

#### description (#compose-description)

Compose multiple validators into a single function that returns the union
of the individual error maps for the provided control.

```ts
static compose(validators: null): null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L430-L430)

#### returns (#compose-returns)

A validator function that returns an error map with the
merged error maps of the validators if the validation check fails, otherwise `null`.

#### see (#compose-see)

`updateValueAndValidity()`

#### Parameters (#compose-parameters)

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| validators | `null` |             |

### compose

```ts
static compose(validators: (ValidatorFn|null|undefined)[]): ValidatorFn|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L431-L431)

#### Parameters (#compose-parameters)

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| validators | `ValidatorFn[]` |             |

### composeAsync

#### description (#composeAsync-description)

Compose multiple async validators into a single function that returns the union
of the individual error objects for the provided control.

```ts
static composeAsync(validators: (AsyncValidatorFn|null)[]): AsyncValidatorFn|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/validators.ts#L453-L462)

#### returns (#composeAsync-returns)

A validator function that returns an error map with the
merged error objects of the async validators if the validation check fails, otherwise `null`.

#### see (#composeAsync-see)

`updateValueAndValidity()`

#### Parameters (#composeAsync-parameters)

| Name       | Type                 | Description |
| ---------- | -------------------- | ----------- |
| validators | `AsyncValidatorFn[]` |             |

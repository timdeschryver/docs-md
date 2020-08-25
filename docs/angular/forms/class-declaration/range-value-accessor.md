---
kind: ClassDeclaration
name: RangeValueAccessor
module: forms
---

# RangeValueAccessor

## description

The `ControlValueAccessor` for writing a range value and listening to range input changes.
The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
directives.

```ts
class RangeValueAccessor implements ControlValueAccessor {
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void;
  registerOnChange(fn: (_: number | null) => void): void;
  registerOnTouched(fn: () => void): void;
  setDisabledState(isDisabled: boolean): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/range_value_accessor.ts#L43-L108)

## usageNotes

### Using a range input with a reactive form

The following example shows how to use a range input with a reactive form.

```ts
const ageControl = new FormControl();
```

```
<input type="range" [formControl]="ageControl">
```

## ngModule

ReactiveFormsModule
FormsModule

## publicApi

## Properties

| Name      | Type               | Description |
| --------- | ------------------ | ----------- |
| onChange  | `(_: any) => void` |             |
| onTouched | `() => void`       |             |

## Methods

### writeValue

#### description (#writeValue-description)

Sets the "value" property on the input element.

```ts
writeValue(value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/range_value_accessor.ts#L74-L76)

#### Parameters (#writeValue-parameters)

| Name  | Type  | Description       |
| ----- | ----- | ----------------- |
| value | `any` | The checked value |

### registerOnChange

#### description (#registerOnChange-description)

Registers a function called when the control value changes.

```ts
registerOnChange(fn: (_: number|null) => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/range_value_accessor.ts#L84-L88)

#### Parameters (#registerOnChange-parameters)

| Name | Type         | Description    |
| ---- | ------------ | -------------- |
| fn   | `(\_: number | null) => void` | The callback function |

### registerOnTouched

#### description (#registerOnTouched-description)

Registers a function called when the control is touched.

```ts
registerOnTouched(fn: () => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/range_value_accessor.ts#L96-L98)

#### Parameters (#registerOnTouched-parameters)

| Name | Type         | Description           |
| ---- | ------------ | --------------------- |
| fn   | `() => void` | The callback function |

### setDisabledState

#### description (#setDisabledState-description)

Sets the "disabled" property on the range input element.

```ts
setDisabledState(isDisabled: boolean): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/range_value_accessor.ts#L105-L107)

#### Parameters (#setDisabledState-parameters)

| Name       | Type      | Description        |
| ---------- | --------- | ------------------ |
| isDisabled | `boolean` | The disabled value |

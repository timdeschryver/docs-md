---
kind: ClassDeclaration
name: NumberValueAccessor
module: forms
---

# NumberValueAccessor

## description

The `ControlValueAccessor` for writing a number value and listening to number input changes.
The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
directives.

```ts
class NumberValueAccessor implements ControlValueAccessor {
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: number): void;
  registerOnChange(fn: (_: number | null) => void): void;
  registerOnTouched(fn: () => void): void;
  setDisabledState(isDisabled: boolean): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/number_value_accessor.ts#L43-L106)

## usageNotes

### Using a number input with a reactive form.

The following example shows how to use a number input with a reactive form.

```ts
const totalCountControl = new FormControl();
```

```
<input type="number" [formControl]="totalCountControl">
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
writeValue(value: number): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/number_value_accessor.ts#L70-L74)

#### Parameters (#writeValue-parameters)

| Name  | Type     | Description       |
| ----- | -------- | ----------------- |
| value | `number` | The checked value |

### registerOnChange

#### description (#registerOnChange-description)

Registers a function called when the control value changes.

```ts
registerOnChange(fn: (_: number|null) => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/number_value_accessor.ts#L82-L86)

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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/number_value_accessor.ts#L94-L96)

#### Parameters (#registerOnTouched-parameters)

| Name | Type         | Description           |
| ---- | ------------ | --------------------- |
| fn   | `() => void` | The callback function |

### setDisabledState

#### description (#setDisabledState-description)

Sets the "disabled" property on the input element.

```ts
setDisabledState(isDisabled: boolean): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/number_value_accessor.ts#L103-L105)

#### Parameters (#setDisabledState-parameters)

| Name       | Type      | Description        |
| ---------- | --------- | ------------------ |
| isDisabled | `boolean` | The disabled value |

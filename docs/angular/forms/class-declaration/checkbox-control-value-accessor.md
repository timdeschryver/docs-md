---
kind: ClassDeclaration
name: CheckboxControlValueAccessor
module: forms
---

# CheckboxControlValueAccessor

## description

A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
element.

```ts
class CheckboxControlValueAccessor implements ControlValueAccessor {
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void;
  registerOnChange(fn: (_: any) => {}): void;
  registerOnTouched(fn: () => {}): void;
  setDisabledState(isDisabled: boolean): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/checkbox_value_accessor.ts#L42-L100)

## usageNotes

### Using a checkbox with a reactive form.

The following example shows how to use a checkbox with a reactive form.

```ts
const rememberLoginControl = new FormControl();
```

```
<input type="checkbox" [formControl]="rememberLoginControl">
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

Sets the "checked" property on the input element.

```ts
writeValue(value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/checkbox_value_accessor.ts#L68-L70)

#### Parameters (#writeValue-parameters)

| Name  | Type  | Description       |
| ----- | ----- | ----------------- |
| value | `any` | The checked value |

### registerOnChange

#### description (#registerOnChange-description)

Registers a function called when the control value changes.

```ts
registerOnChange(fn: (_: any) => {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/checkbox_value_accessor.ts#L78-L80)

#### Parameters (#registerOnChange-parameters)

| Name | Type             | Description           |
| ---- | ---------------- | --------------------- |
| fn   | `(_: any) => {}` | The callback function |

### registerOnTouched

#### description (#registerOnTouched-description)

Registers a function called when the control is touched.

```ts
registerOnTouched(fn: () => {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/checkbox_value_accessor.ts#L88-L90)

#### Parameters (#registerOnTouched-parameters)

| Name | Type       | Description           |
| ---- | ---------- | --------------------- |
| fn   | `() => {}` | The callback function |

### setDisabledState

#### description (#setDisabledState-description)

Sets the "disabled" property on the input element.

```ts
setDisabledState(isDisabled: boolean): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/checkbox_value_accessor.ts#L97-L99)

#### Parameters (#setDisabledState-parameters)

| Name       | Type      | Description        |
| ---------- | --------- | ------------------ |
| isDisabled | `boolean` | The disabled value |

---
kind: ClassDeclaration
name: DefaultValueAccessor
module: forms
---

# DefaultValueAccessor

## description

The default `ControlValueAccessor` for writing a value and listening to changes on input
elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
`NgModel` directives.

```ts
class DefaultValueAccessor implements ControlValueAccessor {
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void;
  registerOnChange(fn: (_: any) => void): void;
  registerOnTouched(fn: () => void): void;
  setDisabledState(isDisabled: boolean): void;
  _handleInput(value: any): void;
  _compositionStart(): void;
  _compositionEnd(value: any): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/default_value_accessor.ts#L62-L156)

## usageNotes

### Using the default value accessor

The following example shows how to use an input element that activates the default value accessor
(in this case, a text field).

```ts
const firstNameControl = new FormControl();
```

```
<input type="text" [formControl]="firstNameControl">
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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/default_value_accessor.ts#L105-L108)

#### Parameters (#writeValue-parameters)

| Name  | Type  | Description       |
| ----- | ----- | ----------------- |
| value | `any` | The checked value |

### registerOnChange

#### description (#registerOnChange-description)

Registers a function called when the control value changes.

```ts
registerOnChange(fn: (_: any) => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/default_value_accessor.ts#L116-L118)

#### Parameters (#registerOnChange-parameters)

| Name | Type               | Description           |
| ---- | ------------------ | --------------------- |
| fn   | `(_: any) => void` | The callback function |

### registerOnTouched

#### description (#registerOnTouched-description)

Registers a function called when the control is touched.

```ts
registerOnTouched(fn: () => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/default_value_accessor.ts#L126-L128)

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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/default_value_accessor.ts#L135-L137)

#### Parameters (#setDisabledState-parameters)

| Name       | Type      | Description        |
| ---------- | --------- | ------------------ |
| isDisabled | `boolean` | The disabled value |

### \_handleInput

```ts
_handleInput(value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/default_value_accessor.ts#L140-L144)

#### Parameters (#\_handleInput-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |

### \_compositionStart

```ts
_compositionStart(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/default_value_accessor.ts#L147-L149)

### \_compositionEnd

```ts
_compositionEnd(value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/default_value_accessor.ts#L152-L155)

#### Parameters (#\_compositionEnd-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |

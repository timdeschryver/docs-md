---
kind: ClassDeclaration
name: SelectMultipleControlValueAccessor
module: forms
---

# SelectMultipleControlValueAccessor

## description

The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
`NgModel` directives.

```ts
class SelectMultipleControlValueAccessor implements ControlValueAccessor {
  value: any;
  _optionMap: Map<string, ɵNgSelectMultipleOption> = new Map<
    string,
    ɵNgSelectMultipleOption
  >();
  _idCounter: number = 0;
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void;
  registerOnChange(fn: (value: any) => any): void;
  registerOnTouched(fn: () => any): void;
  setDisabledState(isDisabled: boolean): void;
  _registerOption(value: ɵNgSelectMultipleOption): string;
  _getOptionId(value: any): string | null;
  _getOptionValue(valueString: string): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L78-L222)

## see

`SelectControlValueAccessor`

## usageNotes

### Using a multi-select control

The follow example shows you how to use a multi-select control with a reactive form.

```ts
const countryControl = new FormControl();
```

```
<select multiple name="countries" [formControl]="countryControl">
<option *ngFor="let country of countries" [ngValue]="country">
{{ country.name }}
</option>
</select>
```

### Customizing option selection

To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
See the `SelectControlValueAccessor` for usage.

## ngModule

ReactiveFormsModule
FormsModule

## publicApi

## Properties

| Name        | Type               | Description |
| ----------- | ------------------ | ----------- |
| value       | `any`              |             |
| \_optionMap | `any`              |             |
| \_idCounter | `number`           |             |
| onChange    | `(_: any) => void` |             |
| onTouched   | `() => void`       |             |

## Methods

### writeValue

#### description (#writeValue-description)

Sets the "value" property on one or of more
of the select's options.

```ts
writeValue(value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L132-L147)

#### Parameters (#writeValue-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` | The value   |

### registerOnChange

#### description (#registerOnChange-description)

Registers a function called when the control value changes
and writes an array of the selected options.

```ts
registerOnChange(fn: (value: any) => any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L156-L181)

#### Parameters (#registerOnChange-parameters)

| Name | Type                  | Description           |
| ---- | --------------------- | --------------------- |
| fn   | `(value: any) => any` | The callback function |

### registerOnTouched

#### description (#registerOnTouched-description)

Registers a function called when the control is touched.

```ts
registerOnTouched(fn: () => any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L189-L191)

#### Parameters (#registerOnTouched-parameters)

| Name | Type        | Description           |
| ---- | ----------- | --------------------- |
| fn   | `() => any` | The callback function |

### setDisabledState

#### description (#setDisabledState-description)

Sets the "disabled" property on the select input element.

```ts
setDisabledState(isDisabled: boolean): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L198-L200)

#### Parameters (#setDisabledState-parameters)

| Name       | Type      | Description        |
| ---------- | --------- | ------------------ |
| isDisabled | `boolean` | The disabled value |

### \_registerOption

```ts
_registerOption(value: ɵNgSelectMultipleOption): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L203-L207)

#### Parameters (#\_registerOption-parameters)

| Name  | Type                      | Description |
| ----- | ------------------------- | ----------- |
| value | `ɵNgSelectMultipleOption` |             |

### \_getOptionId

```ts
_getOptionId(value: any): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L210-L215)

#### Parameters (#\_getOptionId-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |

### \_getOptionValue

```ts
_getOptionValue(valueString: string): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L218-L221)

#### Parameters (#\_getOptionValue-parameters)

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| valueString | `string` |             |
